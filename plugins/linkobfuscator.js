let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
✧─────···───────✧

*Nih Bang LinkNya*

https://obfuscator.io/

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'obfuscator')).buffer(), ext, '©️ zifabotz', 'MENU', '.menu', 'Script', '.sc', m)

}
handler.help = ['linkenc']
handler.tags = ['main']
handler.command = /^(linkenc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
