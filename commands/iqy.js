const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'iqy',
    description: 'Ini adalah commands Iqiyi chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Iqiyi 💻')
            .addField('Perhatian', botInfo['perhatian-iqiyi'])
            .addField('Pricelist :', botInfo['pricelist-iqiyi'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Iqiyi Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}