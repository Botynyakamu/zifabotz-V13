let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group haori 📮: https://chat.whatsapp.com/ESeBcdKcHFm7BnyNiSZPvi*
`.trim()
conn.sendButton(m.chat, str, `watermark`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['haori1']
handler.tags = ['info']
handler.command = /^haori1$/i

module.exports = handler
