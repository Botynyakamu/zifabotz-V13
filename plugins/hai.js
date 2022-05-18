let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_Online_* 
*📮: HAI SAYA ZIFABOTZ SILAHKAN KLIK BUTTON DI BAWAH!*
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'uy apaan')).buffer(), ext, 'bot online', 'COMMAND', '.command', 'OWNER', '.owner2', m)

}
handler.customPrefix = /^(zifa|zifabotz|zif|menu|hai|hallo|hii|hello|cuy)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
