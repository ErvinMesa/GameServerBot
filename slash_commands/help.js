const { SlashCommandBuilder } = require('@discordjs/builders');
const {Help} = require('../Embeds/premade-embeds')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Help with commands!'),
	async execute(interaction) {
		await interaction.reply({embeds:[Help()]});
	},
};