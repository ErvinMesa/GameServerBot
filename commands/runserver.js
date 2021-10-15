const find = require('find-process');
const { SlashCommandBuilder } = require('@discordjs/builders');

function runl4d2(){
    const { exec } = require('child_process');
    exec('"D:\\Steam Library\\steamapps\\common\\Left 4 Dead 2 Dedicated Server\\srcds.exe" -console -game left4dead2 +maxplayers 16 +port 27020 +exec server.cfg +map c1m1_hotel', (err, stdout, stderr) => {
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
        await interaction.reply('Working on it!');
        switch(interaction.options.getString('game')){
            case 'l4d2':
                await is_running('srcds').then(res=>{
                    if(!res){
                        runl4d2()
                        interaction.editReply('Server Starting!');
                    } else {
                        interaction.editReply('Server is already running!');
                    }
                })
            default: 
                break;
        }
	},
};