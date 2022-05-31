let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: '🌬️» MENU', description: "Tampilan menu", rowId:".menu"},
        {title: '🔖» SCRIPT', description: "Script yang bot gunakan", rowId:".sc"},
        {title: '🗃️» GROUP BOT', description: "Join yuk guys", rowId:".gcbot"},
        {title: '😼» OWNER BOT', description: "Pemilik bot", rowId:".owner2"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['islam']
handler.command = /^(ayatkursi)$/i
handler.help = ['ayatkursi']
module.exports = handler
