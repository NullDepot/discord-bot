const Discord = require('discord.js');






module.exports = {
	name: 'character',
	description: 'Collect character information.',
	execute(message, args, keyv) {

    const filter = m => m.author.id === message.author.id

    
    // define profile questions
    let questions = [
      ['Name', 'What is your name?'],
      ['Age', 'How old are you?'],
      ['Country', 'What country are you from?'],
			['Picture', 'What do you look like?']
    ];



    // setup collector object
    const collector = new Discord.MessageCollector(message.channel, filter, {
      max: questions.length,
      time: 1000 * 30 //30s
    })



    // cycle through questions to collect user input
    let counter = 0
    message.channel.send(questions[counter++][1]);

    collector.on('collect', m => {
      if (counter < questions.length) {
        m.channel.send(questions[counter++][1])
      }
    })



    // runs after input collected
    collector.on('end', collected => {

      console.log(`Collected ${collected.size} messages`)

      if (collected.size < questions.length) {
        message.reply('Response timed out. Please try again.')
        return
      }

      
      // save users profile data
      save( collectortoarray(questions, collected), keyv ); //.then( console.log ); 
 
      
      // final output
      message.reply('Profile saved. Type +embed to view.');

    })

    

  }
}





/*************
 * FUNCTIONS *
 *************/



// returns true if url is valid
function isValidHttpUrl(string) {
	let url;
	
	try {
	  url = new URL(string);
	} catch (_) {
	  return false;  
	}
  
	return url.protocol === "http:" || url.protocol === "https:";
}



// takes collected data as input and creates a simply array
function collectortoarray(q,c){
      
  var inpt=[];
  let counter = 0;
  
  c.forEach((value) => {
    inpt[counter]=[q[counter][0],value.content];
    counter++;
  });

  console.log(inpt);
  return inpt;
}



// save profile input to memory
async function save(inpt,keyv) {
  
  var msg='Profile data saved. ';

  try {
         
    if( inpt[0][1] !='' ) {
      await keyv.set( 'name' , inpt[0][1] );
      msg+='Name: ' + await keyv.get('name') + ' | ';
    }

    if( inpt[1][1] !='' ) {
      await keyv.set( 'age' , inpt[1][1] );
      msg+='Age: ' + await keyv.get('age') + ' | ';
    }

    if( inpt[2][1] !='' ) {
      await keyv.set( 'country' , inpt[2][1] );
      msg+='Country: ' + await keyv.get('country') + ' | ';
    }


    if( isValidHttpUrl( inpt[3][1] ) ) {
      await keyv.set( 'picture' , inpt[3][1] );
      msg+='Picture: ' + await keyv.get('picture');
    } else {
      await keyv.set( 'picture' , '' );
    }


  } catch(err) {
    console.log ( 'There was a problem saving the profile values. ' + msg ); 
  }

  return msg;
}