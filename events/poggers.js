module.exports = {
	name: 'poggers',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('poggers')) {
            message.react('<:poggers:816391730323783691>')
        }
    },
};
