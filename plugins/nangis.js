let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sad_* 
*📮: KENAPA NANGIS!? ADA AKU DI SINI KOK SETIA MENEMANI KAMU*
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'JANGAN SEDIH')).buffer(), ext, 'sedih ya', 'COMMAND', '.menu2', 'RULES', '.rules', m)

}
handler.customPrefix = /^(😭|😔|🙃|🙂|🥺|😟|😥|😢|☹️|😓|😞|😖|😣|😩|😫)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
