const { SlashCommandBuilder } = require('@discordjs/builders');
const {ServerListHelp} = require('../Embeds/premade-embeds')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('List servers!'),
	async execute(interaction) {
		await interaction.reply({embeds:[ServerListHelp()]});
	},
};