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

    if (rng <= 90) {
        const howfucked = new Discord.MessageEmbed()
        .setColor('#8B0F0A')
        .setTitle(`how fucked is @${member.username}?`)
        .setDescription(`**HOLY SHIT!!! @${member.username} is ` + rng + `% fucked!!!**`)
        .setFooter("bruh, you're royally fucked..")
        .setImage('https://i.ytimg.com/vi/LqSg9yVfzV0/maxresdefault.jpg')
  
        message.channel.send({embed: howfucked}).then(embedMessage => {
            embedMessage.react('<:irp:834156842551607327>');
        });
    } else {
        const howfucked = new Discord.MessageEmbed()
        .setColor('#8B0F0A')
        .setTitle(`How fucked is @${member.username}?`)
        .setDescription(`@${member.username} is ` + rng + `% fucked.`)
        .setImage('https://i.ytimg.com/vi/9ry2m1bi8M8/maxresdefault.jpg')
  
        message.channel.send({embed: howfucked}).then(embedMessage => {
            embedMessage.react('<:irp:834156842551607327>');
        });
    }
    
  },
    permissions: [],
    requiredRoles: [],
}