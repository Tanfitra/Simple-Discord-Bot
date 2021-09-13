const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')


module.exports = {
    name: 'info',
    description: 'Ini adalah commands info chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const info = new MessageEmbed()
            .setTitle('Informasi Bot')
            .addField('Author : ', botInfo.Author)
            .addField('Prefix : ', botInfo.Prefix)
            .setColor('FFB319')
            .setURL(botInfo['LINK Discord'])
            .setFooter(botInfo['bot nama']+ botInfo.version)
        message.channel.send(infoembed)
        
    }
}