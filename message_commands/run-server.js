const find = require('find-process');
const {ServerListEmbed,ServerStart,ServerUp,Loading} = require('../Embeds/premade-embeds')
// const wait = require('util').promisify(setTimeout);

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
                                runl4d2()
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