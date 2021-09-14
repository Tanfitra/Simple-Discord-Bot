module.exports =    {
    name: 'test',
    description: "ini adalah command test permission",
    execute(Message)    {
        var role = Message.member.roles.cache.find(r => r.name === 'Discord Access')
            if(role)    {
                Message.channel.send('Halo Discord Access')
            }else   {
                Message.channel.send('Kamu tidak memiliki role Discord Access')
            }
        }
    
}