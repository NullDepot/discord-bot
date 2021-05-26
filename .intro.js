module.exports = {
	name: 'intro',
	description: `Join the voice channel and play intro theme.`,
	execute(message) {
        client.on('message', async message => {

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();  
                const ytdl = require('ytdl-core');
                connection.play(ytdl('https://www.youtube.com/watch?v=7QY8-uJgIyQ', { filter: 'audioonly' }));
                console.log('Playing audio.');
                
            } else {
                message.reply(`Error: You're not in a VC`);
            }
        })
    },
}