exports.run = (client, message, params) => {
var embed = {
			color: 3447003,
			description: `**Bilgi**`,
			fields: [
				{
					name: '❯ Yapımcı',
					value: client.users.get('468677181342744576').tag,
					inline: false
				},
				{
					name: '❯ Sürüm',
					value: `Glitch`,
					inline: false
				},
				{
					name: '❯ Davet',
					value: `https://discordapp.com/oauth2/authorize?client_id=501398058332979200&scope=bot&permissions=2146958847&response_type=code`,
					inline: false
				},
				{
					name: '❯ Destek sunucusu',
					value: `https://discord.gg/dTmXyGg`,
					inline: false
				},
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© || Hayatın Anlamı ||"
			},
			thumbnail: { url: client.user.avatarURL }
    };
		return message.channel.send({embed})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Tüm komutları gösterir.',
  usage: 'bilgi [komut]'
};
