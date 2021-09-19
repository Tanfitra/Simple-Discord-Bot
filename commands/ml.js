const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'ml',
    description: 'Ini adalah commands mobile legend chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle(':gem: DIAMOND MOBILE LEGEND :gem:')
            .addField('Perhatian', botInfo.perhatian)
            .addField('Pricelist :', botInfo['pricelist-mobile'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Mobile Legend Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}