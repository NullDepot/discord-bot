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
  // console.log(`${message.author.tag}: ${message.content}`);
  if (message.content.toLowerCase().includes('hello')) {
    message.reply('hey there!')
  } else if (message.content.toLowerCase().includes('bye')) {
    message.reply('bye-bye...')
  }
})

//Bot replies with a 1/100 chance.
client.on('message', (message) => {
	if (message.content.startsWith(prefix)) return;
	//Random number.
	var ranNumb = Math.floor(Math.random() * 100);
	if (message.author.bot) return;
	console.log(ranNumb);
	if (ranNumb === 99) {
		message.reply('silence, wench.')
	}
})

//Bot sends .gif or emoji when prompted by messages.
client.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.toLowerCase().includes('yare')) {
    message.channel.send(`https://media1.tenor.com/images/162e6417f80df31ff2fcf72680f0424c/tenor.gif?itemid=13569904`)
	} else if (message.content.toLowerCase().includes('dnd')) {
		message.channel.send(`https://media1.tenor.com/images/e4641e64908840c937211e4b3e1d1406/tenor.gif?itemid=15179548`)
	} else if (message.content.toLowerCase().includes('poggers')) {
		message.channel.send(`<:poggers:816391730323783691>`)
	} else if (message.content.toLowerCase().includes('uwu')) {
		message.channel.send(`UwU u so warm snuggie wuggies!!1!`)
	}
})

//Bot logs in with the token from .env
client.login(process.env.BOT_TOKEN);
