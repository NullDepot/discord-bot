module.exports = {
	name: 'message',
	execute(message) {
		if (message.author.bot) {
			console.log('\x1b[33m%s\x1b[0m', `${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
		} else {
			console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
			return;
		}
	},
};