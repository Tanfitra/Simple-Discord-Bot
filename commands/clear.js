module.exports = {
    name:'clear',
    description: "Ini adalah command clear chat",
    execute(Message, args)  {
        var role = Message.member.roles.cache.find(r => r.name === "Discord Access")

        if(role){
            if (!args[1])   {
                return Message.reply('Masukkan jumlah chat yang ingin dihapus')
            }else{
                Message.channel.bulkDelete(args[1])
            }
        }else {
            Message.reply('Kamu tidak memiliki role Discord Access, Kamu tidak bisa menggunakan command ini')
        }
    }
}