const Discord = require('discord.js');
const Keyv = require('keyv');


module.exports = {
	name: 'character',
	description: 'Collect character information.',
	execute(message, args) {
    
    const keyv = new Keyv(); // for in-memory storage
    keyv.on('error', err => console.error('Keyv connection error:', err));


    let questions = [
      ['Name', 'What is your name?'],
      ['Age', 'How old are you?'],
      ['Country', 'What country are you from?']
    ];

    console.table(questions);

    /*
    const questions = [
      'What is your name?',
      'How old are you?',
      'What country are you from?'
    ]
    */

    
    const filter = m => m.author.id === message.author.id

    const collector = new Discord.MessageCollector(message.channel, filter, {
      max: questions.length,
      time: 1000 * 30 //15s
    })

    let counter = 0
    message.channel.send(questions[counter++][0]);

    collector.on('collect', m => {

      if (counter < questions.length) {
        m.channel.send(questions[counter++][0])
        
      }

    })


    collector.on('end', collected => {
      console.log(`Collected ${collected.size} messages`)


      if (collected.size < questions.length) {
        message.reply('Response timed out. Please try again.')
        return
      }

      var rslt=[];
      let counter = 0
      collected.forEach((value) => {
        rslt[counter++]=value.content;
      })

      // display summary
      message.reply( questions[0][1] + ': ' + rslt[0] );
      message.reply( questions[1][1] + ': ' + rslt[1] );
      message.reply( questions[2][1] + ': ' + rslt[2] );


      // save into memory
      (async () => {
        
        await keyv.set( 'name' , rslt[0] );
        console.log ( 'Name : ' + await keyv.get('name') );
        
        await keyv.set( 'age' , rslt[1] );
        console.log ( 'Age : ' + await keyv.get('age') );
        
        await keyv.set( 'country' , rslt[0] );
        console.log ( 'Country : ' + await keyv.get('country') );
        
      })();

    })

  

  }
}
