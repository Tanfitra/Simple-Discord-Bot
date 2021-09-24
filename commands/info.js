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
            .setColor('FFB319')
            .setURL(botInfo['LINK Discord'])
            .setFooter(botInfo['bot nama'] + botInfo.version)
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(infoembed)
        
    }
}