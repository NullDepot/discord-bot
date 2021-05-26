module.exports = {
    commands: ['strahd'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('To leave Barovia requires either my permission, or my life. The former shall never be given, and the latter shall never be taken. The last man who tried as such, now lives with a mind so utterly broken, he wanders the hillsides believing himself an elk!')
		message.channel.send('https://tenor.com/view/curse-of-strahd-strahd-dungeons-and-dragons-strahd-ravenloft-strahd-neverwinter-ravenloft-gif-12904598');
		message.channel.send('Though you shall wish otherwise, you now have my **full and complete attention.**')
        message.delete();
    },
    permissions: [],
    requiredRoles: [],
}