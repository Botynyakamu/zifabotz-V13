const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ROZI",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:ROZI;;;\nFN:ROZI\nitem1.TEL;waid=6285828764046:6285828764046\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:-\nitem2.X-ABLabel:💌 Email\nitem3.URL:-/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Otaku 🇯🇵\nitem5.X-ABLabel:───────[ ROZI ]───────\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:ZIFABOTZ;;;\nFN:ZIFABOTZ\nitem1.TEL;waid=6285828580078:6285828580078\nitem1.X-ABLabel:📍 bot\nitem2.EMAIL;type=INTERNET:-\nitem2.X-ABLabel:💌 Email\nitem3.URL:-/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ ZIFABOTZ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(tutorokteto)$/i

module.exports = handler
