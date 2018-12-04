const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
               '**Başlangıç**\n\n\n' + ' arkadaşlar benim adım Fırtına botumu eklemek istiyorsanız s!davet\n Botumu Kulandığınız İcin Şimdiden Teşekürler. s!tavsiye bütün tavsiyenizi bekliyorum \n \n Botun Resimli Giriş Cıkış Mesajlarını Atmasını İstiyorsanız : \n s!giriş-çıkış adında kanal açın \n \n \n⬅  |  ➡ Bu Emojılere Tıklayarak Sayfayı Değiştirebilirsiniz',
              '**Ana Komutlar**\n\n\n' + 's!sunucubilgi = Sunucu Hakkında Bilgi Verir. \ns!hesapla = istediğiniz miktarı hesaplar. \ns!atatürkçerçeve = kendi profilinizin üstüne atatürkün resminide koyar.  \ns!atatürk = Atatürk Giflerini Atar. \ns!dolar = Doların Alış Satış Fiyatını Gösterir. \ns!ping = Botun Ping Durumun Gösterir. \ns!bilgi = Bot Hakkında Bilgi Verir.  \ns!davet = Botun Davet Linkini Atar.. ',
              '**Müzik Komutları**\n\n\n' + 's!oynat = Müzik Açmanıza Yarar. \ns!radyo = radyo .D \ns!geç = Açılan Müziği Kuyrukta Olan Başka Müziklere Geçer. \ns!kapat = Çalınan Müziği Kapatır.\ns!ses = Çalınan Müziğin Sesini Değiştirir.  \ns!durdur = Çalınan Müziği Durdurur. \ns!devam = Durdurulan Son Müziği Devam Ettirir. \ns!kuyruk = Kuyrukta Olan Müzikleri Gösterir.',
              '**Eğlence**\n\n\n' + 's!winner = Profil Fotoğrafınıza Winner Efekti EKler. \ns!koş = koşma gif gösterir .D..  \ns!tr = profil resminize türk bayrağı ekelr. \ns!aze = profil resminize azeri bayrak ekler. \ns!slots = oyun kumar . \ns!dcnitro = s!dcintro yazmanız yeterli. \ndefkarölçer = efkarnızı ölçer ettiketleyin kimin efkarını ölçenenizi efkar-vs ile karıştırmayın .\ns!efkar-vs = efkarınızı ölçer 2 kişiyi ettiketleyin. \ns!8ball = 8ball sikoru gösterir. \ns!bravery = resminizin üstüne bravery olur. \ns!dolar  = doların fiyarını gösterir. \ns!youtube  = youtube aradınız videoları filan gösterir. \ns!hastebin   = görmek istediğiniz şeyi yazarsınız oda size bir site atar yazdığınız şey oraya gider. \ns!mcödül  = minecraft aldığınız başarlıları gösterir. \ns!fortine  = fortinedeki hesabınızı gösterir. \ns!steamoyun   = steam daki oyun fiyatlarını filan gösterir. \ns!tersavatar = avatarınızı test gösterir. \ns!ailemiz  = ailenizi gösterir sunucuda. \ns!gifara = istediğin gifi arar kedi filan. \ns!kafasınasık = İstediğiniz Birisinin Kafasına sıkar. \ns!sigara = Sigara Yakar \ns!slots = Slots oyunu oynatır \ns!aşkölçer [@Kulanıcı] = AşkÖlçer Anlatmaya Gerek Yok :D  \ns!wasted = Profil Fotonuza Wasted Efekti Ekler \ns!atatürk = Atatürk Fotoraflarını Gösterir \ns!steamoyun [oyun adı] = Steamdan Oyun Bilgilerini Gösterir\ns!atam = Proflinize Atatürk Efekti Ekler \ns!espri = Espri Yapar  \ns!sniper = Profline Resmine Sniper Efekti Ekler \ns!hacked = Profline Resmine Hacker Efekti Ekler \ns!köpek = Köpek Resimleri Atar \ns!kedi = Kedi Resimleri Atar  \ns!havadurumu [Şehir] = Seçtiğiniz Şehrin Havadurumunu Gösterir  \ns!asci [yazı] = Yazdığın yazıyı büyük bir şekilde yazar',
              '**Yetkili**\n\n\n ' + 's!söv = İstediğiniz Kişiye Söver Şaka Amaçlıdır.  \ns!kanalbilgi = sunucunuzun bilgilerini filan gösterir işte. \ns!top10 = botun oldğu en fazla kişi olan 10 sunucuyu gösterir.\ns!ticket = kulanmanız yeterli .D \ns!yetkilerim = sunucuda rolünüzün yetkilerini gösterir. \ns!seviye = seviyenizi gösterir. \ns!havadurumu = hava durumunu gösterir. \ns!afk = afk moda gecersiniz. \ns!yavaş-mod = en fazla 120 saniye s!yavaş-mod sayı yazmanız yeterli. \ns!sayaç = sayaç kanalı oluşturun ve s!sayac miktar yazın.  \ns!temizle [sayı] = Belirlenen Miktarda Sayı Siler Max 99 \ns!kick = ettiketlediğiniz kişiyi sunucudan atar sebebinide yazın. [mod-log] diye metin kanal acın.  \ns!sunucutanıt = Yetkililer icin  Yetkisi OLmayan Biri Yapınca Calışmaz \ns!ban [@Kulanıcı] {sebebi] =Belirlediğiniz Kişiyi Sunucudan Banlar \ns!kilit [süre] kanalı Belirlediğiniz süreye kadar Kilitler',
              '**Yapımcılarım **\n\n\n ' + 'Yapımcım : ?SaFIRTINA?#0892',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('http://oi51.tinypic.com/2jg4gg6.jpg')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filterd
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
   message.react(":white_check_mark: ")
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
