const find = require('find-process');
const {ServerListEmbed,Loading,ServerIsDown,ServerShutdown} = require('../Embeds/premade-embeds')
const {kill} = require('process');
// const wait = require('util').promisify(setTimeout);


module.exports = {
	name: 'stop-server',
	description: 'Stops a server!',
	async execute(message, server) {
        await message.channel.send({embeds:[Loading()]}).then(msg=>{
            setTimeout(() => msg.delete(), 3000)
        });
        try {
            if(!server.length){
                return message.channel.send({embeds: [ServerListEmbed(message.author)]});
            }
            else{
                server = server.toString().replace(/,/g," ").toLowerCase()
                if(/(l4d)+|((left 4 dead)+)/.test(server)){
                    find('name','srcds').then(async (list)=>{
                            running = list.length > 0
                            if(!running){
                                await message.channel.send({embeds:[ServerIsDown()]});
                            } else {
                                try {
                                    list.forEach(item=>kill(item.pid))
                                } catch (error) {
                                    console.log(err.stack || err);
                                }
                                await message.channel.send({embeds:[ServerShutdown()]});
                            }
                        }),(err)=>{
                            console.log(err.stack || err);
                            (err)
                    }
                } else if(/(kf)+|((killing floor)+)/.test(server)){
                    find('name','kfserver').then(async (list)=>{
                            running = list.length > 0
                            if(!running){
                                await message.channel.send({embeds:[ServerIsDown()]});
                            } else {
                                try {
                                    list.forEach(item=>kill(item.pid))
                                } catch (error) {
                                    console.log(err.stack || err);
                                }
                                await message.channel.send({embeds:[ServerShutdown()]});
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