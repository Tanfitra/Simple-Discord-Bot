const   {
    MessageEmbed
} = require('discord.js')
const   botInfo = require('./botInfo.json')

module.exports = {
    name: 'vi',
    description: 'Ini adalah commands viu chat embeds',
    execute(message)  {
        message.channel.bulkDelete(1)

        const freeembed = new MessageEmbed()
            .setTitle('💻 Viu 💻')
            .addField('Perhatian', botInfo['perhatian-viu'])
            .addField('Pricelist :', botInfo['pricelist-viu'])
            .addField('Keterangan :', botInfo.keterangan)
            .setFooter('Viu Pricelist')
            .setColor('FFB319')
            .setThumbnail('https://cdn.discordapp.com/attachments/882302455642226754/887167320072523846/882622321326714880.png')
        message.channel.send(freeembed)
        
    }
}