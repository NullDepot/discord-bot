module.exports = {
    commands: ['roll20', 'roll', '20'],
    expectedArgs: '<CoS> **or** <VV>' ,
    permissionError: 'You need admin permissions to run this command.',
    minArgs: 1,
    maxArgs: 1,
    description: `Lists Roll20.net campaign links.`,
    callback: (message, arguments, text) => {
        if (message.guild.id !== '643443709190602753') return;

        var campaign = arguments[0]
        campaign = campaign.toLowerCase()

        if (campaign == 'cos') {
            message.channel.send(`<@&837455318782181377>, go to https://app.roll20.net/campaigns/details/9923195/curse-of-strahd and launch the campaign.`)
        } else if (arguments[0] == 'vv') {
            message.channel.send(`<@&840983148208455739>, go to https://app.roll20.net/campaigns/details/10733073/vauxrehm-vices and launch the campaign.`)
        }
    },
    permissions: [],
    requiredRoles: [],
}