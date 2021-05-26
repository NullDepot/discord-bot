const Discord = require('discord.js');

module.exports = {
    commands: ['cards'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, args, keyv) => {
        
        const filter = m => m.author.id === message.author.id
      
        let cards = [
          ['card1', 'What is your first card?'],
          ['card2', 'What is your second card?'],
          ['card3', 'What is your third card?'],
          ['card4', 'What is your fourth card?'],
          ['card5', 'What is your fifth card?']
        ];
    
        // setup collector object
        const collector = new Discord.MessageCollector(message.channel, filter, {
          max: cards.length,
          time: 1000 * 60 //60s
        })
    
        // cycle through cards to collect user input
        let counter = 0
        message.channel.send(cards[counter++][1]);
    
        collector.on('collect', m => {
          if (counter < cards.length) {
            m.channel.send(cards[counter++][1])
          }
        })
    
        // runs after input collected
        collector.on('end', collected => {
    
          console.log(`Collected ${collected.size} messages`)
    
          if (collected.size < cards.length) {
            message.reply('Response timed out. Please try again.')
            return
          }
    
          
          // save users profile data
          save( collectortoarray(cards, collected), keyv ); //.then( console.log ); 
     
          
          // final output
          message.reply('Profile saved. Type +showcards to view.');
    
        })



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
            await keyv.set( 'card1' , inpt[0][1] );
            msg+='Card 1: ' + await keyv.get('card1') + ' | ';
            }

            if( inpt[1][1] !='' ) {
            await keyv.set( 'card2' , inpt[1][1] );
            msg+='Card 2: ' + await keyv.get('card2') + ' | ';
            }

            if( inpt[2][1] !='' ) {
            await keyv.set( 'card3' , inpt[2][1] );
            msg+='Card 3: ' + await keyv.get('card3') + ' | ';
            }

            if( inpt[3][1] !='' ) {
            await keyv.set( 'card4' , inpt[3][1] );
            msg+='Card 4: ' + await keyv.get('card4');
            }

            if( inpt[4][1] !='' ) {
            await keyv.set( 'card5' , inpt[4][1] );
            msg+='Card 5: ' + await keyv.get('card5');
            }


        } catch(err) {
            console.log ( 'There was a problem saving the profile values. ' + msg ); 
        }

        return msg;
        }

    },
    permissions: [],
    requiredRoles: [],
}