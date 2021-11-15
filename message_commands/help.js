const {Help} = require('../Embeds/premade-embeds')

module.exports = {
	name: 'help',
	description: 'Help with commands!',
	execute(message, args) {
		message.channel.send({embeds:[Help()]});
	},
};