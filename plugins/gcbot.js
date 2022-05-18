let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: '⋮☰group zifa1', description: "📣join kuy", rowId:".zifa1"},
        {title: '⋮☰group zifa2', description: "📣join kuy", rowId:".zifa2"},
        {title: '⋮☰group haori', description: "📣join kuy", rowId:".haori1"},
        {title: '⋮☰group nekel', description: "📣join kuy", rowId:".nekel1"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['groupbot']
module.exports = handler
