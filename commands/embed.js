const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Trial of embed command.',
	execute(message, args) {
  	const embed = new Discord.MessageEmbed()
		.setColor('#03c2fc')
		.setTitle(`${message.author.tag}`)
//		.setDescription('Description')
//		.setFooter('Footer')
//		.addField('Field 1', 'Content', true)
		.addFields(
			{ name: 'Name:', value: '>>Insert value here<<', inline: false },
			{ name: 'Age:', value: '>>Insert value here<<', inline: false },
			{ name: 'Country:', value: '>>Insert value here<<', inline: false },
		)
		.setImage()
		.setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);

		return message.channel.send(embed);
  }
}
