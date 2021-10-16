const find = require('find-process');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {ServerListEmbed,Loading,ServerIsDown,ServerShutdown} = require('../Embeds/premade-embeds')
const {kill} = require('process');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop-server')
		.setDescription('Runs a game server!')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('The input to echo back')
                .setRequired(true)
                .addChoice('Left 4 Dead 2','l4d2')),
	async execute(interaction) {
        await interaction.reply({embeds:[ServerDown()]}).then(msg=>{
            setTimeout(()=>interaction.deleteReply(),3000);
        });
        switch(interaction.options.getString('game')){
            case 'l4d2':
                await find('name','srcds').then(async (list)=>{
                    running = list.length > 0;
                    if(!running){
                        await interaction.followUp('Server is already down!');
                    } else {
                        list.forEach(item=>kill(item.pid))
                        await interaction.followUp('Server shutting down!');
                    }
                },(err)=>{
                    console.log(err.stack || err);
                    return err
                })
            default: 
                break;
        }
	},
};