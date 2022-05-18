const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `╭─────[ *RULES* ]─────✧
┴
│¹ Dilarang Hina zifabotz / Owner
│² Dilarang Spam Command
│³ Dilarang Kirim Virtex ke zifabotz
│⁴ Dilarang Spam Menu Ga Jelas
│⁵ Dilarang Telp / Vc
│⁶ Dilarang Culik Bot
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru pesan Bot
│⁹ Bot Tidak Menerima Save Kontak
│¹⁰ Dilarang Chat Owner Ga Jelas
│¹¹ No plagiat
┬
╰──────────···

╭─────[ *HUKUM* ]─────✧
┴
│ 1 & 11 = Block + banned permanent
│ 2,4,6 & 8 = Banned sementara
│ 3 = War
│ 5 = Block sementara
│ 9 & 10 = Block permanent
┬
╰──────────···
  ⬣━〔Powered By Rozi〕━⬣
©️ zifabotz`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(fla + 'RULES')).buffer()
  image = (await conn.prepareMessage('6285826114932@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "RULES ZIFABOTZ",
        "description": '\n' + wm + '\n' + str,
        "retailerId": "Thanks For zifabotz !",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6285828764046@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/

module.exports = handler

let wm = global.botwm
