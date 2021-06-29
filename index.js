require('dotenv').config();

const {prefix} = require('./config.json')
let {wigger_count} = require('./config.json')

// const path = require('path')
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const loadCommands = require('./commands/load-commands')

const { dirname } = require('path');
const message = require('./events/message');

require('events').EventEmitter.defaultMaxListeners = 16;


console.log('Bot initialising. Please wait...')

client.on('ready', () => {
	console.log('\x1b[33m%s\x1b[0m', `Logged in as ${client.user.tag}!`);
	client.user.setActivity('Curse of Strahd', { type: "PLAYING" }).catch(console.error)

	loadCommands(client)

	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args, client));
		} else {
			client.on(event.name, (...args) => event.execute(...args, client));
		}
	}	
})

client.on('message', message => {
	if (message.author.bot || message.content.startsWith(prefix)) return;
	//Random number.
	var ranNumb = Math.floor(Math.random() * 400);
	console.log('\x1b[33m%s\x1b[0m', 'Random number = '+ ranNumb);
	if (ranNumb === 0) {
		message.reply('silence, wench!')
	}
    if (message.content.toLowerCase().includes('irp')) {
        console.log('Detected IRP..')
        message.react('<:irp:834156842551607327>')
    }
    if (message.content.toLowerCase().includes('poggers')) {
        console.log('Detected POGGERS..')
        message.react('<:poggers:816391730323783691>')
    }
	if (message.content.toLowerCase().includes('uwu')) {
		console.log('Detected UWU..')
		message.channel.send(`UwU u so warm snuggie wuggies!!1!`)
	}
	if (message.content.toLowerCase().includes('wigger')) {
        wigger_count++;
        console.log(`\nCOUNT: ${wigger_count}\n`)
        message.reply(`"wigger" has been mentioned exactly ${wigger_count} times since the last reset!`)
	}
})

client.on('message', async message => {
	// Voice only works in guilds, if the message does not come from a guild,
	// we ignore it
	if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;
  
	if (message.content === prefix + 'monologue') {
	  // Only try to join the sender's voice channel if they are in one themselves
	  if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();

		const ytdl = require('ytdl-core');
		connection.play(ytdl('https://www.youtube.com/watch?v=0JETysxM7Rs', { filter: 'audioonly' }));
  		console.log('Playing audio.');
		} else {
			message.reply(`you must be in a VC!`);
	  }
	}

	if (message.content === prefix + 'intro') {
		// Only try to join the sender's voice channel if they are in one themselves
		if (message.member.voice.channel) {
		  const connection = await message.member.voice.channel.join();
  
		  const ytdl = require('ytdl-core');
		  connection.play(ytdl('https://www.youtube.com/watch?v=7QY8-uJgIyQ', { filter: 'audioonly' }));
			console.log('Playing audio.');
		  } else {
			  message.reply(`you must be in a VC!`);
		}
	  }

	if (message.content === prefix + 'organ') {
		// Only try to join the sender's voice channel if they are in one themselves
		let song = Math.floor(Math.random() * 5);
		
		if (song == 0) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=Il7aJ2zPMDw', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		} else if (song == 1) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=zJUWIByiJk8', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		} else if (song == 2) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=P0EMlkVxtV8', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		} else if (song == 3) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=7Jt0iW8JisA&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		} else if (song == 4) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=iBhFKWYsLsY&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa&index=2', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		}  else if (song == 5) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=rQym6uQcUmA&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa&index=3', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`you must be in a VC!`);
				}
		}
	}	  
	
});

client.login(process.env.BOT_TOKEN);