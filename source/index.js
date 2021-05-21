//Imports .env for safe token use.
require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');

const roleClaim = require('./role-claim')

const Keyv = require('keyv');
const keyv = new Keyv(); // for in-memory storage
keyv.on('error', err => console.error('Keyv connection error:', err));




//Prefix for commands set.
const prefix = "+"

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

console.log('Bot initialising. Please wait...')

for (const file of commandFiles) {
	console.log('Loading.. '+file);
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

//Console notes once the bot is ready.
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	// roleClaim(client)
});
client.once('reconnecting', () => {
	console.log('Reconnecting...');
   });
client.once('disconnect', () => {
	console.log('Disconnected.');
   });

//COMMANDS
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, keyv);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

/* Bot welcomes new members.
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
}); */

//	client.channels.cache.get(837471968345063435).send('**Welcome to Barovia, ' + member.user.username + '. Your new home...**')
//	});
//	channel.send(`Welcome to Barovia my new friends, your new home, ${member}`);
//  });

//Bot responds to hello and goodbye messages.
client.on('message', (message) => {
  if (message.author.bot) return;
  // console.log(`${message.author.tag}: ${message.content}`);
  if (message.content.toLowerCase().includes('hello')) {
    message.reply('Greetings to you, outsider.')
  } else if (message.content.toLowerCase().includes('bye')) {
    message.reply('Farewell, foreigner... Beware your fate.')
  }
})

//Bot replies with a 1/300 chance.
client.on('message', (message) => {
	if (message.author.bot || message.content.startsWith(prefix)) return;
	//Random number.
	var ranNumb = Math.floor(Math.random() * 300);
	console.log('Random number = '+ ranNumb);
	if (ranNumb === 0) {
		message.reply('silence, wench!')
	}
})

//Bot sends .gif or emoji when prompted by messages.
client.on('message', (message) => {
	if (message.author.bot) return;
/*	if (message.content.toLowerCase().includes('yare')) {
    message.channel.send(`https://media1.tenor.com/images/162e6417f80df31ff2fcf72680f0424c/tenor.gif?itemid=13569904`)
	} else if (message.content.toLowerCase().includes('dnd')) {
		message.channel.send(`https://media1.tenor.com/images/e4641e64908840c937211e4b3e1d1406/tenor.gif?itemid=15179548`)
	} else*/ if (message.content.toLowerCase().includes('poggers')) {
		message.react('<:poggers:816391730323783691>')
	} else if (message.content.toLowerCase().includes('uwu')) {
		message.channel.send(`UwU u so warm snuggie wuggies!!1!-- ahem.`)
	} else if (message.content.toLowerCase().includes('irp')) {
		message.react('<:irp:834156842551607327>')
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
			message.reply(`Error: You're not in a VC`);
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
			  message.reply(`Error: You're not in a VC`);
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
					message.reply(`Error: You're not in a VC`);
				}
		} else if (song == 1) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=zJUWIByiJk8', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`Error: You're not in a VC`);
				}
		} else if (song == 2) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=P0EMlkVxtV8', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`Error: You're not in a VC`);
				}
		} else if (song == 3) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=7Jt0iW8JisA&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`Error: You're not in a VC`);
				}
		} else if (song == 4) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=iBhFKWYsLsY&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa&index=2', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`Error: You're not in a VC`);
				}
		}  else if (song == 5) {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
		  
				const ytdl = require('ytdl-core');
				connection.play(ytdl('https://www.youtube.com/watch?v=rQym6uQcUmA&list=PLDS-9443D4xr0SFGMyrZ7zr0PkbgiSgAa&index=3', { filter: 'audioonly' }));
				console.log('Playing song ' + song +'.');
				} else {
					message.reply(`Error: You're not in a VC`);
				}
		}
	}	  
	
  });
  
//Bot logs in with the token from .env
client.login(process.env.BOT_TOKEN);
