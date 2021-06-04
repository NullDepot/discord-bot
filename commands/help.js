const loadCommands = require('./load-commands')
const Discord = require('discord.js');
const prefix = '+'

module.exports = {
    commands: ['help'],
    description: "Lists all of the bot's commands.",
    callback: (message, arguments, text) => {
        let reply = 'The following commands are supported by this bot:\n\n'

        const commands = loadCommands()

        for (const command of commands) {
            //check for permissions
            let permissions = command.permission

            if (permissions) {
                let hasPermission = true
                if (typeof permissions === 'string') {
                    permissions = [permissions]
                }

                
                for (const permission of permissions) {
                    if (!message.member.hasPermission(permission)) {
                        hasPermission = false
                        break
                    }
                }
                
                if (!hasPermission) {
                    continue
                }
            }
    

            //Format the text
            const mainCommand = 
                typeof command.commands === 'string'
                    ? command.commands
                    : command.commands[0]
            const args = command.expectedArgs ? ` ${command.expectedArgs}` : ''
            const { description } = command
            
            reply += `**${prefix}${mainCommand}${args}** = ${description}\n`
        }

        const embed = new Discord.MessageEmbed()
				.setColor('#8B0F0A')
				.setTitle('List of bot commands!')
				.setDescription(reply)
                
            return message.channel.send(embed);
    }
}