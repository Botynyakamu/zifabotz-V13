const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `♡   ❍ㅤ  ⎙ㅤ ⌲
╭─[ *_ZIFABOTZ_* ]─✧
╰─────···
📮 𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚙𝚒𝚕𝚒𝚑 𝚖𝚎𝚗𝚞 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒_____•••••••••

╭══════════════════๑—————————
*║╭──❉ 〔Utama〕*
║│➸.onketik
║│➸.sewazifa
║│➸.biodata
║│➸.groupbot
║│➸.iklan
║│➸.linktermux
║│➸.lucbot
║│➸.menu
║│➸.help
║│➸.?
║│➸.tutorbot
║│➸.panduan
║│➸.runbotmursid
║│➸.sewa
║│➸.sewasat
║│➸.sewazifabotz1
║│➸.menu
║│➸.help
║│➸.?
║│➸.tambah <judul>|<nomor>|<desc>
║│➸.Thanksto
║│➸.tqto
║│➸.heroku3
║│➸.tutorial
║│➸.replit2
*╰───❉*

*║╭──❉ 〔Game〕*
║│➸.asahotak
║│➸.bansos  (Premium)
║│➸.caklontong
║│➸.dailyreward
║│➸.dare
║│➸.family100
║│➸.math <mode>
║│➸.siapakahaku
║│➸.slot <angka>
║│➸.suitpvp @tag
║│➸.suit @tag
║│➸.susunkata
║│➸.tebakgambar
║│➸.tebakkabupaten
║│➸.tebakkata
║│➸.tebakkimia
║│➸.tebakkota
║│➸.tebaklirik
║│➸.tekateki
║│➸.tictactoe [nama room]
║│➸.ttt [nama room]
║│➸.tttexit [nama room]
║│➸.truth
*╰───❉*

*║╭──❉ 〔Exp & Limit〕*
║│➸.buy<jumlah limit>
║│➸.buy <jumlah limit>
║│➸.buyall
║│➸.daily
║│➸.claim
║│➸.leaderboard [jumlah user]
║│➸.lb [jumlah user]
║│➸.my [@user]
║│➸.pay @user <jumlah>
║│➸.paylimit @user <jumlah>
║│➸.daftar <nama>.<umur>
║│➸.reg <nama>.<umur>
║│➸.register <nama>.<umur>
║│➸.unreg <SN|SERIAL NUMBER>
║│➸.unregister <SN|SERIAL NUMBER>
*╰───❉*

*║╭──❉ 〔NSFW (Dinonaktifkan)〕*
*╰───❉*

*║╭──❉ 〔Stiker〕*
║│➸.attp1 <teks>
║│➸.attp2 <teks>
║│➸.getexif
║│➸.semoji
║│➸.sfire (Limit)
║│➸.stiker (caption|reply media)
║│➸.stiker <url>
║│➸.stikergif (caption|reply media)
║│➸.stikergif <url>
║│➸.stikerline <url> (Limit)
║│➸.stikerly <pencarian> (Limit)
║│➸.stikermeme <teks atas>|<teks bawah> (Limit)
║│➸.stickernobg
║│➸.stickernobg <url>
║│➸.stikertele <url> (Limit)
║│➸.stikerfilter
║│➸.stikermaker
║│➸.togif
║│➸.toimg
║│➸.toimg2
║│➸.tovideo
║│➸.trigger <reply foto>
║│➸.ttp1 <teks>
║│➸.ttp2 <teks>
║│➸.ttp3 <teks>
║│➸.ttp4 <teks>
║│➸.wm <packname>|<author> (Limit)
*╰───❉*

*║╭──❉ 〔Edukasi〕*
║│➸.brainly <teks>
*╰───❉*

*║╭──❉ 〔News〕*
*╰───❉*

*║╭──❉ 〔Kerang Ajaib〕*
║│➸apakah <teks>?
║│➸.apakah <pertanyaan>
║│➸.artinama [nama]
║│➸kapan <teks>?
║│➸kapankah <teks>?
║│➸.kapan <pertanyaan>
║│➸.kapankah <pertanyaan>
║│➸.wangy <pasangan> (Limit)
║│➸.siapa <teks>
║│➸.siapakah <teks>
║│➸siapa <teks>?
║│➸siapakah <teks>?
*╰───❉*

*║╭──❉ 〔Quotes〕*
║│➸.bucin
║│➸.galau
║│➸.gombal
║│➸.katailham
*╰───❉*

*║╭──❉ 〔Admin (Dinonaktifkan)〕*
║│➸.add nomor,nomor (Limit)
║│➸.+ nomor,nomor (Limit)
║│➸.demote @user
║│➸.member @user
║│➸.↓ @user
║│➸.kick @user (Limit)
║│➸.- @user (Limit)
║│➸.demote @user
║│➸.member @user
║│➸.↓ @user
║│➸.promote @user
║│➸.admin @user
║│➸.^ @user
║│➸.↑ @user
*╰───❉*

*║╭──❉ 〔Epic Rpg〕*
║│➸.adventure
║│➸.kerja
║│➸.petualang
║│➸.berpetualang
║│➸.mulung
║│➸.work
║│➸.wallet
║│➸.dompet
║│➸.inventory
║│➸.inv
║│➸.mining
║│➸.open <crate>
║│➸.gacha <create>
║│➸.buka <crate>
║│➸.shop <sell|buy> <args>
║│➸.toko <sell|buy> <args>
*╰───❉*

*║╭──❉ 〔Grup〕*
║│➸.afk <alasan>
║│➸.on <opsi>
║│➸.off <opsi>
║│➸.getsider
║│➸.grubsettings
║│➸.infogrup
║│➸.grubsettings
║│➸.linkgroup
║│➸.here
║│➸.online
║│➸.hidetag [teks]
║│➸.revoke
║│➸.setbye <teks>
║│➸.setpp
║│➸.setwelcome <teks>
║│➸.tagall <pesan>
║│➸.everyone <pesan>
║│➸.tagme
║│➸.totalpesan
║│➸.unban
*╰───❉*

*║╭──❉ 〔Anime〕*
║│➸.kanna (Limit)
║│➸.logololi <text> (Limit)
║│➸.loli (Limit)
║│➸.ppcouple (Limit)
║│➸.ppcp (Limit)
║│➸.waifu2 (Limit)
║│➸.shota (Limit)
║│➸.yotsuba (Limit)
║│➸.shinomiya (Limit)
║│➸.yumeko (Limit)
║│➸.tejina (Limit)
║│➸.chiho (Limit)
║│➸.boruto (Limit)
║│➸.kaori (Limit)
║│➸.shizuka (Limit)
║│➸.kaga (Limit)
║│➸.kotori (Limit)
║│➸.mikasa (Limit)
║│➸.akiyama (Limit)
║│➸.gremory (Limit)
║│➸.isuzu (Limit)
║│➸.shina (Limit)
║│➸.kagura (Limit)
║│➸.shinka (Limit)
║│➸.eba (Limit)
║│➸.elaina (Limit)
║│➸.erza (Limit)
║│➸.hinata (Limit)
║│➸.minato (Limit)
║│➸.naruto (Limit)
║│➸.sagiri (Limit)
║│➸.nezuko (Limit)
║│➸.rize (Limit)
║│➸.ana (Limit)
║│➸.deidara (Limit)
║│➸.yuki (Limit)
║│➸.asuna (Limit)
║│➸.ayuzawa (Limit)
║│➸.chitoge (Limit)
║│➸.emilia (Limit)
║│➸.hestia (Limit)
║│➸.inori (Limit)
║│➸.itachi (Limit)
║│➸.madara (Limit)
║│➸.sakura (Limit)
║│➸.sasuke (Limit)
║│➸.tsunade (Limit)
║│➸.onepiece (Limit)
║│➸.mobil (Limit)
║│➸.montor (Limit)
║│➸.keneki (Limit)
║│➸.toukachan (Limit)
║│➸.akira (Limit)
║│➸.itori (Limit)
║│➸.kurumi (Limit)
║│➸.pokemon (Limit)
║│➸.simpcard
║│➸.waifu
*╰───❉*

*║╭──❉ 〔Premium〕*
║│➸.bansos  (Premium)
*╰───❉*

*║╭──❉ 〔Internet〕*
║│➸.filebokep (Limit) (Premium)
║│➸.alkitab <pencarian>
║│➸.animal
║│➸.bitly
║│➸.short
║│➸.covid <negara>
║│➸.weather
║│➸.fetch <url>
║│➸.get <url>
║│➸.gimage <pencarian>
║│➸.image <pencarian>
║│➸.google <pencarian>
║│➸.googlef <pencarian>
║│➸.judul <reply audio>
║│➸.kanna (Limit)
║│➸.katabijak <opsi>
║│➸.kbbi <teks>
║│➸.lirik <teks>
║│➸.meme
║│➸.neko
║│➸.nhsearch <query>
║│➸pikachu
║│➸.pinterest <pencarian>
║│➸.pinterest <query>
║│➸.ppcouple (Limit)
║│➸.ppcp (Limit)
║│➸.shopee <query> (Limit)
║│➸.ss <url>
║│➸.ssf <url>
║│➸.subreddit <pencarian>
║│➸.tbc @<user> (Limit)
║│➸.wallpaperanime (Limit)
║│➸.wallpaperq <pencarian> (Limit)
║│➸.wikipedia <pencarian>
║│➸.yts <pencarian>
║│➸.ytsearch <pencarian>
*╰───❉*

*║╭──❉ 〔Random Image〕*
*╰───❉*

*║╭──❉ 〔Anonymous Chat〕*
║│➸.start
║│➸.leave
║│➸.next
*╰───❉*

*║╭──❉ 〔MagerNulis & Logo〕*
║│➸.tahta <teks> (Limit)
║│➸.gura <text>
║│➸.logokaneki <text> (Limit)
║│➸.logololi <text> (Limit)
║│➸.logoneko <text|text>
║│➸.magernulis1 <teks> (Limit)
║│➸.magernulis2 <teks> (Limit)
║│➸.magernulis3 <teks> (Limit)
║│➸.magernulis4 <teks> (Limit)
║│➸.magernulis5 <teks> (Limit)
║│➸.magernulis6 <teks> (Limit)
║│➸.nulis <teks>
║│➸.quotemaker <teks>|<wm> (Limit)
║│➸.quotemaker2 <teks | wm> (Limit)
║│➸.sadboylogo <text|text> (Limit)
*╰───❉*

*║╭──❉ 〔Downloader〕*
║│➸.fb <url> (Limit)
║│➸.githubdl <username> <repo> (Limit)
║│➸.ig <url> (Limit)
║│➸.ighighlight <username>
║│➸.igstory <username> (Limit)
║│➸.joox <judul>
║│➸.pinterestvideo <url> (Limit)
║│➸.play <pencarian>
║│➸.tiktok (Limit)
║│➸.twitter <url> (Limit)
║│➸.ytmp3 <url> [server: id4, en60, en61, en68] (Limit)
║│➸.yta <url> [server: id4, en60, en61, en68] (Limit)
║│➸.ytmp4 <url> [server: id4, en60, en61, en68] (Limit)
║│➸.ytv <url> [server: id4, en60, en61, en68] (Limit)
║│➸.yt <url> [server: id4, en60, en61, en68] (Limit)
*╰───❉*

*║╭──❉ 〔Tools〕*
║│➸.aksara <opsi> <teks> (Limit)
║│➸.base64 <teks>
║│➸.calc <expression>
║│➸.carigrup <pencarian>
║│➸.caripesan <pesan>|<jumlah>
║│➸.save @mention <nama kontak>
║│➸.hd
║│➸.enhance
║│➸.enphoto <efek> <teks>|[teks2]|[teks3]
║│➸.ephe [on]
║│➸.filter <foto>
║│➸.fitnah <teks> @user <teks>
║│➸.githubsearch <pencarian>
║│➸.halah <teks>
║│➸.hilih <teks>
║│➸.huluh <teks>
║│➸.heleh <teks>
║│➸.holoh <teks>
║│➸.igstalk <username> (Limit)
║│➸.tobraille
║│➸.inspect <chat.whatsapp.com>
║│➸.jedagjedug <query> (Limit)
║│➸.join <chat.whatsapp.com> (Limit) (Premium)
║│➸.jadiyt text1|text2
║│➸.kodepos <kota> (Limit)
║│➸.mememaker <teks atas>|<teks bawah>
║│➸.mention <teks>
║│➸.removebg
║│➸.nobg
║│➸.nulis2 <teks>
║│➸.profile [@user]
║│➸.qr <teks>
║│➸.qrcode <teks>
║│➸.readmore <teks>|<teks>
║│➸.spoiler <teks>|<teks>
║│➸.run (Limit)
║│➸.say <teks>
║│➸.scan [nomor]
║│➸.style <text>
║│➸.harta2 <teks> (Limit)
║│➸.textpro <efek> <teks>|[teks2]
║│➸.translate <lang> <teks>
║│➸.tts <lang> <teks>
║│➸.upload
║│➸.readviewonce
║│➸.wait
║│➸.zodiac *2002 02 25*
*╰───❉*

*║╭──❉ 〔cristian〕*
*╰───❉*

*║╭──❉ 〔Fun〕*
║│➸.asupan
║│➸.coin
║│➸.koin
║│➸.jodohin
║│➸.jodohku
║│➸.ref
║│➸.simi <teks>
║│➸.simsimi <teks>
║│➸.simih <teks>
║│➸.tod
*╰───❉*

*║╭──❉ 〔Database〕*
║│➸.addvn <teks>
║│➸.addmsg <teks>
║│➸.addvideo <teks>
║│➸.addaudio <teks>
║│➸.addimg <teks>
║│➸.addstiker <teks>
║│➸.addgif <teks>
║│➸.delcmd <teks>
║│➸.delmsg <teks>
║│➸.getvn <teks>
║│➸.getmsg <teks>
║│➸.getvideo <teks>
║│➸.getgif <teks>
║│➸.getaudio <teks>
║│➸.getimg <teks>
║│➸.getsticker <teks>
║│➸.listcmd <text>
║│➸.listall
║│➸.listdoc
║│➸.listvn
║│➸.listmsg
║│➸.listvideo
║│➸.listgif
║│➸.listaudio
║│➸.listimg
║│➸.liststicker
║│➸.unlockcmd
║│➸.lockcmd
║│➸.setcmd <teks>
*╰───❉*

*║╭──❉ 〔Voting〕*
║│➸.cekvote
║│➸.hapusvote
║│➸.mulaivote [alasan] (Limit)
║│➸.upvote
║│➸.devote
*╰───❉*

*║╭──❉ 〔Absen〕*
║│➸.cekabsen
║│➸.hapusabsen
║│➸.mulaiabsen [teks]
║│➸.absen
*╰───❉*

*║╭──❉ 〔Islam〕*
║│➸.doaharian
║│➸.salat <daerah>
*╰───❉*

*║╭──❉ 〔Pengubah Suara〕*
║│➸.tomp3
║│➸.tovn
║│➸.bass [vn]
║│➸.blown [vn]
║│➸.deep [vn]
║│➸.earrape [vn]
║│➸.fast [vn]
║│➸.fat [vn]
║│➸.nightcore [vn]
║│➸.reverse [vn]
║│➸.robot [vn]
║│➸.slow [vn]
║│➸.smooth [vn]
║│➸.tupai [vn]
*╰───❉*

*║╭──❉ 〔Jadi Bot〕*
║│➸.getcode
║│➸.jadibot (Limit)
║│➸.listjadibot
║│➸.ljb
║│➸.berhenti
║│➸.stop
*╰───❉*

*║╭──❉ 〔Info〕*
║│➸.onketik
║│➸.apikey
║│➸.asal
║│➸.kota
║│➸.bannedlist
║│➸.blocklist
║│➸.botstatus
║│➸.owner
║│➸.creator
║│➸.del
║│➸.delete
║│➸.donasi
║│➸.donasi
║│➸.github
║│➸.groups
║│➸.grouplist
║│➸.haori1
║│➸.menu2
║│➸.nekel1
║│➸.payment
║│➸.premium
║│➸.premlist [angka]
║│➸.bug <laporan>
║│➸.report <laporan>
║│➸.runtime
║│➸.rules
║│➸.ping
║│➸.totalfitur
║│➸.tiktok
║│➸.owner
║│➸.creator
║│➸.owner
║│➸.creator
║│➸.viadana
║│➸.viapulsa
║│➸.yutube
║│➸.zifa1
║│➸.zifa2
║│➸.owner
║│➸.creator
║│➸.owner
║│➸.creator
*╰───❉*

*║╭──❉ 〔Tanpa Kategori〕*
*╰───❉*


  ⬣━〔Powered By Rozi〕━⬣
©️ zifabotz`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(menu)).buffer()
  image = (await conn.prepareMessage('6287773973818@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "𝚃𝙰𝙼𝙿𝙸𝙻𝙰𝙽 𝙼𝙴𝙽𝚄 𝚉𝙸𝙵𝙰𝙱𝙾𝚃𝚉",
        "description": '\n' + watermark + '\n' + str,
        "retailerId": "Thanks For zifabotz !",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6287773973818@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['menu2', 'help2', '2']
handler.tags = ['info']
handler.command = /^(menu2|help2|/2)$/

module.exports = handler

let wm = global.botwm
