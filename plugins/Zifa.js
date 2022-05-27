let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_PRIVASI* 

╭═[ *SCRIPT* ]═────···
┴
📮: SC PRIVATE!!
*PEMILIK SC:* wa.me//6285828764046
╭═[ [❗] kalau mau beli sc silahkan chat pemilik sc aja ]═────···
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'PRIVASI')).buffer(), ext, '©zifabotz', 'MENU', '.menu', 'SC LAIN', '.sclain', m)

}
handler.customPrefix = /^(sc|.sc|script|.script)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
