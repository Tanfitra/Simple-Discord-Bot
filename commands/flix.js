const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'flix',
    description: 'Ini adalah commands iflix chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Iflix 💻')
            .addField('Perhatian', botInfo['perhatian-iflix'])
            .addField('Pricelist :', botInfo['pricelist-iflix'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Iflix Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}