const { description } = require("./ping");

module.exports = {
    name:'clear',
    description: "Ini adalah command clear chat",
    execute(Message, args)  {
        if (!args[1])   {
            return Message.reply('Masukkan jumlah chat yang ingin dihapus')
        }
        Message.channel.bulkDelete(args[1])
    }

}