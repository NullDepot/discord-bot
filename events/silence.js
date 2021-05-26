module.exports = {
    name: 'silence',
    execute(message) {
        if (message.author.bot || message.content.startsWith(prefix)) return;
        //Random number.
        var ranNumb = Math.floor(Math.random() * 5);
        console.log('Random number = '+ ranNumb);
        if (ranNumb === 0) {
            message.reply('silence, wench!')
        }  
    },
};