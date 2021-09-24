const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'pic',
    description: 'Ini adalah commands picsart chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Picsart 💻')
            .addField('Perhatian', botInfo['perhatian-picsart'])
            .addField('Pricelist :', botInfo['pricelist-picsart'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Picsart Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}