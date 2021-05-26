module.exports = {
    commands: ['prune'],
    expectedArgs: '<numberOfMessages>',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 1,
    maxArgs: 1,
    description: `Deletes messages in bulk.`,
    callback: (message, arguments) => {
        const amount = parseInt(arguments[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('please enter a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('please input a number between 1 and 99.');
		}

        console.info(`Deleting ${amount} messages..`)
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}