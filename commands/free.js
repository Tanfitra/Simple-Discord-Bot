const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'free',
    description: 'Ini adalah commands free fire chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle(':gem: DIAMOND FREE FIRE :gem:')
            .addField('Perhatian', botInfo.perhatian)
            .addField('Pricelist :', botInfo.pricelist1)
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Freefire Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}