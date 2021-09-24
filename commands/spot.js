const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'spot',
    description: 'Ini adalah commands spotify chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Spotify 💻')
            .addField('Perhatian', botInfo['perhatian-spotify'])
            .addField('Famplan (Family Plan) :', botInfo.famplan)
            .addField('Inplan (Individu Plan) :', botInfo.inplan)
            .addField('Pricelist :', botInfo['pricelist-spotify'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Spotify Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}