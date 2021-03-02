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
    message.reply('Hello there!')
  } else if (message.content === 'goodbye') {
    message.reply('Goodbye.')
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
