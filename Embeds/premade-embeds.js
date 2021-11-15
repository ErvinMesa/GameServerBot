const { MessageEmbed } = require("discord.js");

const ServerStart = () => {return new MessageEmbed()
    .setTitle('Server Starting!')
    .setDescription('Starting the server!')
    .setColor('#4fdfff')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898745083212468294/2piv2lj30ps71.jpg')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerDown = () => {return new MessageEmbed()
    .setTitle('Server is Down!')
    .setDescription('This server is down :(')
    .setColor('#ff2200')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898746167662354463/afkgaming_2021-08_79649079-d0e7-4acd-853b-6a2b92797da3_copium_png.png')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const Loading = () => {return new MessageEmbed()
    .setTitle('Working on it!')
    .setDescription('Trying to execute this command!')
    .setColor('#4fdfff')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898753523838238761/849769110384017521.gif')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerUp = () => {return new MessageEmbed()
    .setTitle('Server is already up!')
    .setDescription('This server is up!')
    .setColor('#55ff4f')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898745083212468294/2piv2lj30ps71.jpg')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerIsDown = () => {return new MessageEmbed()
    .setTitle('Server is already down!')
    .setDescription('This server is down!')
    .setColor('#ff2200')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898740824748212264/756613319992934410.png')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerShutdown = () => {return new MessageEmbed()
    .setTitle('Shutting Down!')
    .setDescription('This server is shutting down!')
    .setColor('#ff2200')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898763864169152592/411.png')
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerListEmbed = (author) => {return new MessageEmbed()
    .setTitle('No Server Provided!')
    .setColor('#ff82ec')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898740650575548426/848990483086966844.png')
    .addFields({
        name:"Server List",
        value:`You didn't provide any arguments, ${author}!\nHere are the available servers!`
    },{
        name:"Left 4 Dead 2",
        value: "l4d2, left 4 dead 2"
    })
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const ServerListHelp = (author) => {return new MessageEmbed()
    .setTitle('Server List!')
    .setColor('#ff82ec')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898740650575548426/848990483086966844.png')
    .addFields({
        name:"Server List",
        value:`Here are the available servers!`
    },{
        name:"Left 4 Dead 2",
        value: "l4d2, left 4 dead 2"
    })
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

const Help = () => {return new MessageEmbed()
    .setTitle('Commands List!')
    .setColor('#ff82ec')
    .setThumbnail('https://cdn.discordapp.com/attachments/853152061209313291/898740650575548426/848990483086966844.png')
    .addFields({
        name:"Help",
        value:'Shows this message',
        inline: true
    },{
        name:"Run Server",
        value: "!run-server <Game>",
        inline: true
    },{
        name:"Stop Server",
        value: "!stop-server <Game>"
    },{
        name:"Server Status",
        value: "!server-stat <Game>"
    })
    .setFooter('Bot by RayveN', 'https://cdn.discordapp.com/attachments/853152061209313291/898741980262174740/Screenshot_2021-05-29_203737.png');
}

module.exports = {ServerStart, ServerDown, ServerListEmbed, ServerUp, Loading, ServerIsDown,ServerShutdown,Help,ServerListHelp}