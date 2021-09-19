const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'exp',
    description: 'Ini adalah commands express vpn chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('☁ Express VPN ☁')
            .addField('Perhatian', botInfo['perhatian-express'])
            .addField('Pricelist :', botInfo['pricelist-express'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Express Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}