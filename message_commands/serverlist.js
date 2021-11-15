const {ServerListHelp} = require('../Embeds/premade-embeds')

module.exports = {
	name: 'list',
	description: 'List servers!',
	execute(message, args) {
		message.channel.send({embeds:[ServerListHelp()]});
	},
};