let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*TUTORIAL BERBAYAR!*
├●────────┤
◁ㅤ ❚❚ㅤ▷`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "cara membuat bot", rows: [
        {title: 'tutorial replit', description: "tutorial? Cht nomor yg udah bot kirim", rowId:".tutorreplit"},
        {title: 'tutorial okteto', description: "tutorial? Cht nomor yg udah bot kirim", rowId:".tutorokteto"},
        {title: 'Script', description: "SC yang bot ini gunakan", rowId:".sc"},
        {title: 'Donasi', description: "Donasi agar selalu online", rowId:".donasi"},
        {title: 'halaman menu', description: "halaman semula", rowId:".menu"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(tutorial|tutorialbuatbot)$/i
handler.help = ['tutorial']
module.exports = handler
