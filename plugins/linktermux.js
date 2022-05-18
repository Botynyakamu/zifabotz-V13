let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
✧─────···───────✧

Nih Bang Link Termux Nya

https://f-droid.org/en/packages/com.termux/

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'TERMUX')).buffer(), ext, '© zifabotz', 'MENU', '.menu', 'Script', '.sc', m)

}
handler.help = ['linktermux']
handler.tags = ['main']
handler.command = /^(linktermux)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
