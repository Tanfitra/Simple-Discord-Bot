module.exports =    {
    name: 'ping',
    description: "ini adalah command ping",
    execute(message)    {
        message.channel.bulkDelete(1)
        message.reply('Pong!')
    }
}