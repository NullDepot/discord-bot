const Discord = require('discord.js');
const cards = require('./cards');

module.exports = {
    commands: ['showcards'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
	description: `[BROKEN!] Displays drawn cards.`,
    callback: (message, args, keyv) => {

		var card1, card2, card3, card4, card5;

		(async () => {

			card1 = await keyv.get( 'card1' );
			//console.log ( 'Name : ' + await keyv.get('name') );

			card2 = await keyv.get( 'card2' );
			//console.log ( 'Age : ' + await keyv.get('age') );

			card3 = await keyv.get( 'card3' );
			//console.log ( 'Country : ' + await keyv.get('country') );

			card4 = await keyv.get( 'card4' );
			//console.log ( 'Picture : ' + await keyv.get('picture') );

			card5 = await keyv.get( 'card5' );
			//console.log ( 'Picture : ' + await keyv.get('picture') );


			const embed = new Discord.MessageEmbed()
				.setColor('#8B0F0A')
		//		.setTitle(`${message.author.tag}`)
				.setTitle('Fate of the Damned')
				.setDescription(reply)
				.setFooter('Strahd awaits you...')
		//		.addField('Field 1', 'Content', true)
				// .addFields(
				// 	{ name: 'First card:', value: card1, inline: true },
				// 	{ name: 'Second card:', value: card2, inline: true },
				// 	{ name: 'Third card:', value: card3, inline: true },
				// 	{ name: 'Fourth card:', value: card4, inline: true },
				// 	{ name: 'Fifth card:', value: card5, inline: true },
				// )
				.setImage('http://media.wizards.com/2016/images/dnd/Tarokka_cardspread.png')
				.setThumbnail('https://db4sgowjqfwig.cloudfront.net/campaigns/231596/banners/1013074/strahd_banner.png?1570915066');
			return message.channel.send(embed);
			message.delete();
		})();

    },
    permissions: [],
    requiredRoles: [],
}