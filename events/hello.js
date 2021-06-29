module.exports = {
	name: 'message',
	execute(message) {
		if (message.author.bot) return;
		console.log('Hello test 123')
        if (message.content.toLowerCase().includes('hello')) {
            message.reply('greetings to you, outsider.')
        }
	},
};