module.exports = {
	name: 'poggers',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('poggers')) {
            console.log('Detected POGGERS..')
            message.react(message.guild.emojis.cache.get('<:poggers:816391730323783691>'))
            .then(console.log)
            .catch(console.error);
        }
    },
};
