const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')


module.exports = {
    name: 'info',
    description: 'Ini adalah commands info chat embed',
    execute(message)  {
        message.channel.bulkDelete(1)

        const infoembed = new MessageEmbed()
            .setTitle('Informasi Bot')
            .addField('Author : ', botInfo.Author)
            .addField('Prefix : ', botInfo.Prefix)
            .addField('Commands :', botInfo.cmd)
            .setColor('21618C')
            .setURL(botInfo['LINK Discord'])
            .setFooter(botInfo['bot nama'] + botInfo.version)
            .setThumbnail('https://cdn.discordapp.com/attachments/874316689792200705/904399364196290590/20211031_223237.png')
        message.channel.send(infoembed)
        
    }
}