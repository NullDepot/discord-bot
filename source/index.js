//Imports .env for safe token use.
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
//Prefix for commands set.
const prefix = "!"

//Console notes once the bot is ready.
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
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

//COMMANDS
//Ping-pong and Beep-boop.
client.on('message', (message) => {

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (command === `ping`) {
		message.channel.send('Pong.');
	} else if (command === `beep`) {
		message.channel.send('Boop.');
	} else if (command === 'prune') {
			const amount = parseInt(args[0]) + 1;

			if (isNaN(amount)) {
				return message.reply('please enter a valid number.');

			} else if (amount <= 1 || amount > 100) {
					return message.reply('input a number between 1 and 99.');
			}
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');
			});
		}
})

//Bot logs in with the token from .env
client.login(process.env.BOT_TOKEN);
