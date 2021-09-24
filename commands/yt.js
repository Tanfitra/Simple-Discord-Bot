const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'yt',
    description: 'Ini adalah commands youtube chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Youtube 💻')
            .addField('Perhatian', botInfo['perhatian-youtube'])
            .addField('Pricelist :', botInfo['pricelist-youtube'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Youtube Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}