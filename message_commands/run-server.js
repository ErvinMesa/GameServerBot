const find = require('find-process');
const {ServerListEmbed,ServerStart,ServerUp,Loading} = require('../Embeds/premade-embeds')
const {l4d2launchparams, kf2launchparams} = require("../config.json")
// const wait = require('util').promisify(setTimeout);

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



module.exports = {
	name: 'run-server',
	description: 'Run a server!',
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
                            if (!running) {
                                runserver(l4d2launchparams)
                                await message.channel.send({embeds:[ServerStart()]});
                            } else {
                                await message.channel.send({embeds:[ServerUp()]});
                            }
                        }),(err)=>{
                            console.log(err.stack || err);
                            (err)
                    }
                } else if(/(kf)+|((killing floor)+)/.test(server)){
                    find('name','KFServer').then(async (list)=>{
                            running = list.length > 0
                            if (!running) {
                                runserver(kf2launchparams)
                                await message.channel.send({embeds:[ServerStart()]});
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