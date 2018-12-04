const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class TavsiyeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sunucu-kurulum',
            group: 'sistem',
            memberName: 'sunucu-kurulum',
            description: 'Eğer sunucunuzu yeni açtıysanız bu komutu kullanın rolleri, kanalları ve odaları otomatik olarak kuracaktır!',
        });
    }

	hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_GUILD');
    }

async run(message) {
    message.channel.send(`${this.client.emojis.get('464406478153973770')} Sunucu kurulumu başladı... Bu biraz zaman alabilir...`)

    message.guild.createChannel(`kurallar`, "text").then(k => {
        k.send(`<@${message.guild.owner.id}>, bu kanala sunucunuzun kurallarını yazınız.`)
        let role = message.guild.roles.find("name", "@everyone");
        k.overwritePermissions(role, {
            SEND_MESSAGES: false,
        });
    })
    message.guild.createChannel(`sohbet`, "text")
    message.guild.createChannel(`komutlar`, "text")
    message.guild.createChannel(`anonslar`, "text").then(a => {
        let role = message.guild.roles.find("name", "@everyone");
        a.overwritePermissions(role, {
            SEND_MESSAGES: false,
        });
    })
    message.guild.createChannel(`tavsiye`, "text")
    message.guild.createChannel(`---Ayırma Kanalı---`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
    })
    message.guild.createChannel(`Kurucu Odası`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
        });
    })
    message.guild.createChannel(`Yetkili Odası`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        let role3 = message.guild.roles.find("name", "Yönetim");
        let role4 = message.guild.roles.find("name", "Moderatör");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
        });
        c.overwritePermissions(role3, {
            CONNECT: true,
        });
        c.overwritePermissions(role4, {
            CONNECT: true,
        });
    })
    message.guild.createChannel(`---Ayırma Kanalı---`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
    })
    message.guild.createChannel(`Sohbet 1`, "voice")
    message.guild.createChannel(`Sohbet 2`, "voice")
    message.guild.createChannel(`---Ayırma Kanalı---`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
    })
    message.guild.createChannel(`Oyun 1`, "voice")
    message.guild.createChannel(`Oyun 2`, "voice")
    message.guild.createChannel(`---Ayırma Kanalı---`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
    })
    message.guild.createChannel(`Müzik 1`, "voice")
    message.guild.createChannel(`Müzik 2`, "voice")
    message.guild.createChannel(`---Ayırma Kanalı---`, "voice").then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            CONNECT: false,
        });
    })
    message.guild.createChannel(`AFK`, "voice")
    message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
      message.guild.createRole({
        name: 'Yönetim',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })
      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })
      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })
      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })
      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })
    }
}
