module.exports = {
	name: 'irp',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('irp')) {
            message.react('<:irp:834156842551607327>')
        }
    },
};