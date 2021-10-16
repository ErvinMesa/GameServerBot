const find = require('find-process');
const {ServerListEmbed, ServerDown, ServerUp} = require('../Embeds/premade-embeds')

module.exports = {
	name: 'server-stat',
	description: 'Get server status!',
	execute(message, server) {
        try {
            if(!server.length){
                return message.channel.send({embeds: [ServerListEmbed(message.author)]});
            }
            else{
                server = server.toString().replace(/,/g," ").toLowerCase()
                if(/(l4d)+|((left 4 dead)+)/.test(server)){
                    find('name','srcds').then(async (list)=>{
                            running = list.length > 0
                            if (!running) {
                                await message.channel.send({embeds:[ServerDown()]});
                            } else {
                                await message.channel.send({embeds:[ServerUp()]});
                            }
                        }),(err)=>{
                            console.log(err.stack || err);
                            (err)
                    }
                }
            }
        } catch (error) {
            console.log("An Error Occurred: "+error)
            message.channel.send("An Error Occurred")
        }
	},
};