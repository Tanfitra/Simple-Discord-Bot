const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'nrd',
    description: 'Ini adalah commands nord vpn chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('☁ Nord VPN ☁')
            .addField('Perhatian', botInfo['perhatian-nord'])
            .addField('Pricelist :', botInfo['pricelist-nord'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Nord VPN Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}