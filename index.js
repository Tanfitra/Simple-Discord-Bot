const { Client, Intents } = require('discord.js');
const client = new Client();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

client.on('ready', () => {
    console.log ('Bot sudah online')
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  } else if (msg.content === 'info') {
      msg.channel.send('Aku adalah bot official naon yang dibuat oleh Tanfitra')
  } else if (msg.content === 'Siapa badut terhandal?')  {
      msg.channel.send('Ravell')
  }else if (msg.content === 'Orang paling ganteng?')  {
      msg.reply('Tanfitra');
  }
})

client.login(process.env.API_TOKEN);