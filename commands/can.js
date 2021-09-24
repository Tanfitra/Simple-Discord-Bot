const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'can',
    description: 'Ini adalah commands canva chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Canva 💻')
            .addField('Perhatian', botInfo['perhatian-canva'])
            .addField('Pricelist :', botInfo['pricelist-canva'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Canva Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}