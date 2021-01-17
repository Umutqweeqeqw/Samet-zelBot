const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const yetkili = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Gelişmiş  Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Kayıt Alıncak Rol__**','`-alınacak-rol @rol` \n Alınacak Rolü Ayarlarsınız.',true )
        .addField('**__Kayıt Üye Rol__**','`-üye-rol-ayarla @rol` \n Üye Rolü Ayarlarsınız',true)
        .addField('**__Kayıt Erkek Rol__**','`-erkek-rol-ayarla @rol` \n Erkek Rolü Ayarlarsınız',true)
        .addField('**__Kayıt Kız Rol__**','`-kız-rol-ayarla @rol` Kız Rolü Ayarlarsınız.',false)
        .addField('**__Kayıt Yetkili Rol__**','`-yetkili-rol-ayarla @rol` Kayıt Yetkilisi Rolü Ayarlarsınız. ',true)
        .addField('**__Kayıt Kanal__**','`-kayıt-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('**__Kayıt Kanal__**','`-kayıt-log-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('**__Hoşglendin Kanal__**','`-hg-kanal #kanal` Hoşgeldin Mesajı atılacak olan Odayı Ayarlarsınız.',true)
        .addField('**__Hoşglendin Mesaj__**','`-hg-mesaj mesaj` Hoşgeldin Mesajı Ayarlarsınız.',true)
msg.channel.send(yetkili)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt-yetkili', 'yetkili'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yetkili',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yetkili-yardım'
};