const { Client, Intents, DiscordAPIError, MessageEmbed, Message, MessageFlags, StoreChannel, Collection} = require('discord.js')
const client = new Client({
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS]})

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const PREFIX = '^'
var version = '1.6.7'
const activities_list = [
    "Prefix : ^",
    "Naon Store",
    "Naon Studio",
    "@Tanfitra",
    "@EelMaoo",
    "@Kepoya",
    "@Juna",
]
const fs = require('fs');
const commands = new Collection()
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of files)    {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}
client.on('ready', () => {
    console.log ('Bot sudah online')
    console.log(`Logged in as ${client.user.tag}!`)

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('message',Message => {
    if(!Message.content.startsWith(PREFIX)) return
    let args = Message.content.substring(PREFIX.length).split(" ")
    console.log(args)

    switch (args[0]){
        case 'ping':
            commands.get('ping').execute(Message)
        break
        
        case 'clear':
            commands.get('clear').execute(Message, args)
        break
        
        case 'info' :
            commands.get('info').execute(Message)
        break

        case 'free' :
            commands.get('free').execute(Message)
        break
        
        case 'test' :
            commands.get('test').execute(Message)
        break

        case 'exp' :
            commands.get('exp').execute(Message)
        break

        case 'nrd' :
            commands.get('nrd').execute(Message)
        break

        case 'net' :
            commands.get('net').execute(Message)
        break

        case 'ml' :
            commands.get('ml').execute(Message)
        break

        case 'can' :
            commands.get('can').execute(Message)
        break
        
        case 'flix' :
            commands.get('flix').execute(Message)
        break

        case 'iqy' :
            commands.get('iqy').execute(Message)
        break

        case 'pic' :
            commands.get('pic').execute(Message)
        break

        case 'sau' :
            commands.get('sau').execute(Message)
        break

        case 'spot' :
            commands.get('spot').execute(Message)
        break

        case 'vi' :
            commands.get('vi').execute(Message)
        break

        case 'watt' :
            commands.get('watt').execute(Message)
        break

        case 'yt' :
            commands.get('yt').execute(Message)
        break

        case 'kick' :
            if(Message.member.roles.cache.find(r => r.name === 'Discord Access')) {
                const userKick = Message.mentions.users.first()
    
                if(userKick) {
                    const memberKick = Message.guild.member(userKick)
    
                    if(memberKick) {
                        memberKick.kick('Kamu telah di kick dari server').then(() => {
                            Message.channel.bulkDelete(1)
                            Message.reply(`${userKick.tag} Berhasil di kick dari server`)
                        }).catch(err => {
                            Message.channel.bulkDelete(1)
                            Message.reply("Saya tidak bisa melakukan kick terhadap member ini")
                            console.log(err)
                        })
                    }
                } else {
                    Message.channel.bulkDelete(1)
                    Message.reply('User yang anda tag tidak ada dalam server ini')
                }
            }else {
                Message.channel.bulkDelete(1)
                return Message.reply('Kamu tidak memiliki role Discord Access, Kamu tidak bisa menggunakan command ini')
            }
        break
        
        case 'ban' :
            var role = Message.member.roles.cache.find(r => r.name === 'Discord Accesss')
            if(role){
                return Message.reply("Kamu tidak memiliki role Discord Access, Kamu tidak bisa menggunakan command ini")
            }else {
                const userBan = Message.mentions.users.first()

                if(userBan){
                    const memberBan = Message.guild.member(userBan)

                    if(memberBan) {
                        memberBan.ban ({
                            reason: 'Kamu melanggar server rules'
                        }).then(() => {
                            Message.channel.bulkDelete(1)
                            Message.reply(`${userBan.tag} Berhasil di kick dari server`)
                        }).catch(console.error)
                    } else {
                        Message.reply("User tersebut tidak ada didalam server discord ini.")
                    }
                }else {
                    Message.reply("Silahkan mention user yang ingin anda ban.")
                }
            }
    }   
})

client.login(process.env.DJS_TOKEN)