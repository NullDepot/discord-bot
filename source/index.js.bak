//Imports .env for safe token use.
require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');

//Prefix for commands set.
const prefix = "!"

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	console.log('Loading.. '+file);
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

//Console notes once the bot is ready.
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

//COMMANDS
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


//Bot responds to hello and goodbye messages.
client.on('message', (message) => {
  if (message.author.bot) return;
  console.log(`${message.author.tag}: ${message.content}`);
  if (message.content === 'hello') {
    message.reply('hey there!')
  } else if (message.content === 'goodbye') {
    message.reply('bye-bye...')
  }
})

//Bot replies with a 1/100 chance.
client.on('message', (message) => {
	//Random number.
	var ranNumb = Math.floor(Math.random() * 100);
	if (message.author.bot) return;
	console.log(ranNumb);
	if (ranNumb === 99) {
		message.reply('Silence, wench.')
	}
})


//Bot logs in with the token from .env
client.login(process.env.BOT_TOKEN);
