const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'sau',
    description: 'Ini adalah commands sausage man chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle(':gem: SAUSAGE MAN :gem:')
            .addField('Perhatian', botInfo.perhatian)
            .addField('Pricelist :', botInfo['pricelist-sausage'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Freefire Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}