const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const kayıtet = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Gelişmiş  Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .setDescription('**__KAYIT OL__**',true)
        .addField('**__Kayıt Erkek__**', '`-erkek @kullanıcı isim yaş` Üyeyi Erkek olarak kayıdeder.',false)
        .addField('**__Kayıt Kız__**','`-kız @kullanıcı isim yaş` Üyeyi Kız olarak kayıdeder.',false)
msg.channel.send(kayıtet)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt', 'kayıt-yardım','k'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kayıt-yardım'
};