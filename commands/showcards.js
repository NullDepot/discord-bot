const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    commands: ['showcards'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
    description: `Displays the cards drawn by Madam Eva.`,
    callback: (message, arguments, text) => {
        const embed = new Discord.MessageEmbed()
			.setColor('#8B0F0A')
	//		.setTitle(`${message.author.tag}`)
			.setTitle('Fate of the Damned')
			.setDescription('Your list of drawn Tarokka cards.')
			.setFooter('Strahd awaits you...')
	//		.addField('Field 1', 'Content', true)
			.addFields(
				{ name: 'First card:', value: '1 of Swords - Avenger', inline: true },
				{ name: 'Second card:', value: '5 of Coins - Guild Member', inline: true },
				{ name: 'Third card:', value: '1 of Coins - Swashbuckler', inline: true },
				{ name: 'Fourth card:', value: 'Artifact', inline: true },
				{ name: 'Fifth card:', value: 'Broken One', inline: true },
			)
			.setImage('http://media.wizards.com/2016/images/dnd/Tarokka_cardspread.png')
			.setThumbnail('https://db4sgowjqfwig.cloudfront.net/campaigns/231596/banners/1013074/strahd_banner.png?1570915066');
		return message.channel.send(embed);
		message.delete();
    },
    permissions: [],
    requiredRoles: [],
}