const firstMessage = require('./first-message.js')

module.exports = (client) => {
    const channelID = '837471968345063435'

    const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

    const emojis = {
        praisethesun: 'Curse of Strahd'
    }

    const reactions = []

    let emojiText = 'Welcome to Barovia my new friends, your new home...' // \n\nReact to this message to view the server.\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        // emojiText += `${emoji} = ${role}\n`
    }


    firstMessage(client, channelID, emojiText, reactions)
    console.log('Welcome channel success');

    // client.on('messageReactionAdd'), (reaction, user) => {
        // console.log('add')
    // })

    // client.on('messageReactionRemove'), (reaction, user) => {
        // console.log('remove')
    // })
}
