const find = require('find-process');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server-stat')
		.setDescription('Runs a game server!')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('The input to echo back')
                .setRequired(true)
                .addChoice('Left 4 Dead 2','l4d2')),
        async execute(interaction) {
            await interaction.deferReply();
            switch (interaction.options.getString('game')) {
                case 'l4d2':
                    await find('name','srcds').then(async (list)=>{
                        running = list.length > 0
                        if (!running) {
                            await interaction.editReply('Server is down!');
                        } else {
                            await interaction.editReply('Server is running!');
                        }
                    }),(err)=>{
                        console.log(err.stack || err);
                        (err)
                    }
                    break;
                default:
                    break;
            }
        },
};