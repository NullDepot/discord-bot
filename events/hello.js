module.exports = {
	name: 'message',
	execute(message) {
		if (message.author.bot) return;
        if (message.content.toLowerCase().includes('hello')) {
            message.reply('greetings to you, outsider.')
        }
	},
};