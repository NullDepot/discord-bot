const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    commands: ['howfucked', 'fucked'],
    expectedArgs: '< > **or** <@user>',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 1,
    description: `Displays how fucked a character is.`,
    callback: (message, arguments, text) => {

    let member = message.mentions.users.first() || message.author
    let rng = Math.floor(Math.random() * 101)
    const howfucked = new Discord.MessageEmbed()
        .setColor('#8B0F0A')
        .setTitle('How fucked are you?')
        // .setFooter()
        .setDescription(`@${member.username} is ` + rng + `% fucked.`)
        .addFields()
        .setImage('https://i.ytimg.com/vi/9ry2m1bi8M8/maxresdefault.jpg')
        .setThumbnail();
  
        message.channel.send(howfucked);
  },
    permissions: [],
    requiredRoles: [],
}