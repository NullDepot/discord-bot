const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Trial of embed command.',
	execute(message, args, keyv) {

		var name, age, country;

		(async () => {
        
			name = await keyv.get( 'name' );
			console.log ( 'Name : ' + await keyv.get('name') );
			
			age = await keyv.get( 'age' );
			console.log ( 'Age : ' + await keyv.get('age') );
			
			country = await keyv.get( 'country' );
			console.log ( 'Country : ' + await keyv.get('country') );
			

			const embed = new Discord.MessageEmbed()
				.setColor('#03c2fc')
				.setTitle(`${message.author.tag}`)
		//		.setDescription('Description')
				.setFooter('Footer')
		//		.addField('Field 1', 'Content', true)
				.addFields(
					{ name: 'Name:', value: name, inline: false },
					{ name: 'Age:', value: age, inline: false },
					{ name: 'Country:', value: country, inline: false },
				)
				.setImage()
				.setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);

			return message.channel.send(embed);

		})();

  }
}
