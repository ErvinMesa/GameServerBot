const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, guildId_2, token } = require('./config.json');

const commands = [];

const commandFiles = fs.readdirSync('./slash_commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./slash_commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId_2), { body: commands })
.then(() => console.log('Successfully registered application commands.'))
.catch(console.error);