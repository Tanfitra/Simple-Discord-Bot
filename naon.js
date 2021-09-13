const { Client, Intents, DiscordAPIError, MessageEmbed, Message, MessageFlags, StoreChannel, Collection } = require('discord.js')
const client = new Client();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
var PREFIX = '.'
var version = '1.2'

const fs = require('fs')
const commands = new Collection()
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of files)    {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}

client.on('ready', () => {
    console.log ('Bot sudah online')
    console.log(`Logged in as ${client.user.tag}!`)

    client.user.setActivity('Naon Store', {
        type:'WATCHING'
    })
});

client.on('message',Message => {
    let args = Message.content.substring(PREFIX.length).split(' ')

    switch (args[0])    {
        case 'ping':
            commands.get('ping').execute(Message)
        break
        
        case 'clear':
            commands.get('clear').execute(Message, args)
        break
        
        case 'info' :
        const embed = new MessageEmbed()
            .setTitle('Informasi Bot')
            .addField('Author : ', 'Tanfitra')
            .addField('Prefix : ', PREFIX)
            .setColor('FFB319')
            .setURL('https://discord.gg/EtyCmrTtJU')
            .setFooter('Naon Official Bot ' + version)
        Message.channel.send(embed)
        break
        
    }

            
})

client.login(process.env.API_TOKEN)