module.exports = {
	name: 'message',
	execute(message) {
		if (message.author.bot) return;
        if (message.content.toLowerCase().includes('bye')) {
            message.reply('farewell, foreigner... Beware your fate.')
        }
	},
};