module.exports = {
	name: 'uwu',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('uwu')) {
            message.channel.send(`UwU u so warm snuggie wuggies!!1!`)
        }
    },
};
