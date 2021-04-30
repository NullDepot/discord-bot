module.exports = {
	name: 'avatar',
	description: `Displays the a user's avatar`,
	execute(message) {
		message.reply(message.author.displayAvatarURL());
	},
};