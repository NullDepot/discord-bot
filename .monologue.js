module.exports = {
	name: 'monologue',
	description: `Join the voice channel and play Strahd's monologue.`,
	execute(message) {
        client.on('message', async message => {

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();  
                const ytdl = require('ytdl-core');
                connection.play(ytdl('https://www.youtube.com/watch?v=0JETysxM7Rs', { filter: 'audioonly' }));
                console.log('Playing audio.');
                
            } else {
                message.reply(`Error: You're not in a VC`);
            }
        })
    },
}