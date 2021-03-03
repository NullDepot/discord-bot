const Discord = require('discord.js');

module.exports = {
	name: 'character',
	description: 'Collect character information.',
	execute(message, args) {
    const questions = [
      'What is your name?',
      'How old are you?',
      'What country are you from?'
    ]
    let counter = 0

    const filter = m => m.author.id === message.author.id

    const collector = new Discord.MessageCollector(message.channel, filter, {
      max: questions.length,
      time: 1000 * 15 //15s
    })

    message.channel.send(questions[counter++])
    collector.on('collect', m => {
      if (counter < questions.length) {
        m.channel.send(questions[counter++])
      }
    })

    collector.on('end', collected => {
      console.log(`Collected ${collected.size} messages`)

      if (collected.size < questions.length) {
        message.reply('Response timed out. Please try again.')
        return
      }

      let counter = 0
      collected.forEach((value) => {
        console.log(questions[counter++], value.content)
      })
    })

  }
}
