const find = require('find-process');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {ServerStart,ServerUp,Loading} = require('../Embeds/premade-embeds')
const {l4d2launchparams} = require('../config.json')
function runserver(server){
    const { exec } = require('child_process');
    exec(server, (err, stdout, stderr) => {
        if (err) {
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

async function is_running(process){
    const isrun =  find('name',process).then((list)=>{
        return list.length > 0
    },(err)=>{
        console.log(err.stack || err);
        return err
    })
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('run-server')
		.setDescription('Runs a game server!')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('The input to echo back')
                .setRequired(true)
                .addChoice('Left 4 Dead 2','l4d2')),
	async execute(interaction) {
        await interaction.reply({embeds:[Loading()]})
        await setTimeout(()=>{interaction.deleteReply()}, 3000)
        switch(interaction.options.getString('game')){
            case 'l4d2':
                await is_running('srcds').then(res=>{
                    if(!res){
                        runserver(l4d2launchparams)
                        interaction.editReply({embeds:[ServerStart()]});
                    } else {
                        interaction.editReply({embeds:[ServerUp()]});
                    }
                })
            default: 
                break;
        }
	},
};