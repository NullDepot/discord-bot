module.exports = {
    commands: ['avatar'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
	description: `Displays a URL to the user's avatar.`,
    callback: (message, arguments, text) => {
		message.reply(message.author.displayAvatarURL());
    },
    permissions: [],
    requiredRoles: [],
}