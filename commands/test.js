module.exports =    {
    name: 'test',
    description: "ini adalah command test permission",
    execute(Message)    {
        var role = Message.member.roles.cache.find(r => r.name === '「 Police Administrator 」')
            if(role)    {
                Message.channel.send('Halo 「 Police Administrator 」')
            }else   {
                Message.channel.send('Kamu tidak memiliki role 「 Police Administrator 」')
            }
        }
    
}