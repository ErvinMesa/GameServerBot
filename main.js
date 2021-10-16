const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]})

client.slash_commands = new Collection();
client.message_commands = new Collection();
const slash_commandFiles = fs.readdirSync('./slash_commands').filter(file => file.endsWith('.js'));
const message_commandFiles = fs.readdirSync('./message_commands').filter(file => file.endsWith('.js'));

for (const file of slash_commandFiles) {
	const slash_command = require(`./slash_commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.slash_commands.set(slash_command.data.name, slash_command);
}

for (const file of message_commandFiles) {
	const message_command = require(`./message_commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.message_commands.set(message_command.name, message_command);
}

client.once('ready', () => {
    console.log('Bot is Ready!')
})

client.on("messageCreate", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.message_commands.has(command)) return;

	try {
		client.message_commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Slash Commands
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const slash_command = client.slash_commands.get(interaction.commandName);

	if (!slash_command) return;

	try {
		await slash_command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);