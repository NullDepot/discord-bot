module.exports = {
	name: 'irp',
	execute(client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('irp')) {
            console.log('Detected IRP..')
            message.react('<:irp:834156842551607327>')
        }
    },
};