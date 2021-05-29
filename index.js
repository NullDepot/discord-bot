require('dotenv').config();

const prefix = '+'

const path = require('path')
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

const Keyv = require('keyv');
const { dirname } = require('path');
const message = require('./events/message');
const keyv = new Keyv();
keyv.on('error', err => console.error('Keyv connection error:', err));

require('events').EventEmitter.defaultMaxListeners = 15;

//client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

console.log('Bot initialising. Please wait...')

/*for (const file of commandFiles) {
	console.log('Loading.. '+file);
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}
*/

client.on('ready', () => {
	console.log('\x1b[33m%s\x1b[0m', `Logged in as ${client.user.tag}!`);
	client.user.setActivity('Curse of Strahd', { type: "PLAYING" }).catch(console.error)

	const baseFile = 'command-base.js'
	const commandBase = require(`./commands/${baseFile}`)

	const readCommands = dir => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file))
			if (stat.isDirectory()) {
				readCommands(path.join(dir, file))
			} else if (file !== baseFile) {
				const option = require(path.join(__dirname, dir, file))
				commandBase(client, option)
			}
		}
	}

	readCommands('commands')

	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}	
})

/*
Bot welcomes new members.
client.on('guildMemberAdd', member => {
	const channel = message.guild.channels.cache.find(c => c.id === '837471968345063435')
    const channelwelcomeEmbed = new Discord.MessageEmbed()
        .setColor('#b80f0a')
        .setTitle('Welcome to Barovia...')
        .setDescription(`${member}, Your new home.`)
        .setTimestamp();
    channel.send(channelwelcomeEmbed);
    const dmwelcomeEmbed = new Discord.MessageEmbed()
        .setColor('#ffd6d6')
        .setTitle('Welcome!')
        .setDescription("For Help Using @Pro Bot#7903, Send The Command `!help` In Server")
        .setTimestamp();
    member.send(dmwelcomeEmbed);
    let role6 = message.guild.roles.cache.find(role => role.name == 'Curse of Strahd'); //BASIC ROLE, EVERYONE GETS IT
    if(!role6) return message.reply("Couldn't find that Role .")
    member.roles.add(role6);
});
*/

client.on('message', message => {
	if (message.author.bot || message.content.startsWith(prefix)) return;
	//Random number.
	var ranNumb = Math.floor(Math.random() * 300);
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