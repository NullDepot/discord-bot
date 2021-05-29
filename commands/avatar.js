const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  commands: ['avatar'],
  expectedArgs: '< > **or** <@user>',
  permissionError: 'You need admin permissions to run this command.',
  minArgs: 0,
  maxArgs: 1,
	description: `Displays an embed for the user's avatar.`,
  callback: (message, arguments, text) => {

    let user = message.mentions.users.first() || message.author
    let avatar = user.displayAvatarURL({ dynamic: true, size: 128, })
    const embed = new Discord.MessageEmbed()
      .setColor('#8B0F0A')
//		.setTitle()
//    .setFooter()
      .setDescription('Discord avatar')
      .addFields()
      .setTitle(`${user.tag}`)
      .setImage(avatar)
      .setThumbnail();
  
      message.channel.send(embed);

  },
  permissions: [],
  requiredRoles: [],
}