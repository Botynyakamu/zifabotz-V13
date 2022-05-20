let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sc yg bot gunakan_* 
*📮: SC NO ENC!*

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), ext, '©zifabotz', 'SC LAIN', '.sclain', 'OWNER', '.owner2', m)

}
handler.customPrefix = /^(sc|.sc|script|.script)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
