const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' ```Botun yeniden Yüklenmesine Onay Veriyorsanız 30 Saniye İçinde evet yazmalısınız.``` ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`***Bot Yeniden Yükleniyor...***`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('**Yeniden yükleme işlemi iptal edildi.**');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yb','yenidenyükle'],
  permLevel: 4
};

exports.help = {
  name: 'yenidenyükle',
  description: '[Admin Komutu Botu Yeniden Başlatır]',
  usage: 'yenidenyükle'
};
