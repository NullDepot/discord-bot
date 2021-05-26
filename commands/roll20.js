module.exports = {
    commands: ['roll20'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        if (message.guild.id !== '643443709190602753') return;
        message.channel.send(`<@&837455318782181377>, go to https://app.roll20.net/campaigns/details/9923195/curse-of-strahd and launch the campaign.`)
    },
    permissions: [],
    requiredRoles: [],
}