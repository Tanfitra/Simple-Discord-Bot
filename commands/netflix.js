const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'netflix',
    description: 'Ini adalah commands netflix chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻  Netflix  💻')
            .addField('Perhatian', botInfo['perhatian-netflix'])
            .addField('Pricelist :', botInfo['pricelist-netflix'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Netflix Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
            .
        message.channel.send(freeembed)
        
    }
}