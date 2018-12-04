const Discord = require ('discord.js')
const fs = require ('fs')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));

exports.run = async (bot, message, args) =>
{
  if (message.guild.member(message.author.id).hasPermission(0x8))
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = s!otorol @<roladı>**");

      if (!sunucuyaözelayarlarOtorol[message.guild.id]) {
        sunucuyaözelayarlarOtorol[message.guild.id] = {
          otorol: ""
        }
      };
      
      sunucuyaözelayarlarOtorol[message.guild.id].otorol = mentionedRole.id

      fs.writeFile("./autorole.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
        if (err) console.log(err);
      });

      message.channel.send(`:white_check_mark: Otorol Bu Sunucuda **\`${mentionedRole.name}\`** Olarak Belirlendi!`);
    }
  else return message.channel.send("**Bu Komutu Kullanmak İçin Yetkin Bulunmamaktadır**");
}




exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorol'
}