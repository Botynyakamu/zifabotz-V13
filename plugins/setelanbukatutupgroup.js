let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\n*setelan buka/tutup group*`,
                        "description": "\n\n*@zifabotz*",
                        "footerText": "jika ada bug atau erorr Jangan tanya saya,karna saya juga gak tau.",
                        "buttonText": "SETELAN GROUP",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "GROUP TUTUP",
                                        "description": "tutup group dengan bot",
                                        "rowId": ".group close"
                                        },{
                                    	"title": "GROUP BUKA",
                                        "description": "buka group dengan bot",
                                        "rowId": ".group open"
                                        },{
                                    	"title": "MENU",
                                        "description": "menampilkan menu zifabotz",
                                        "rowId": ".menu"
                                        },{
                                        "title": "RULES",
                                        "description": "peraturan bot",
                                        "rowId": ".rules2"
                                        },{
                                        "title": "OWNER",
                                        "description": "pemilik bot ini",
                                        "rowId": ".owner2"
                                        },{
                                        "title": "SCRIPT",
                                        "description": "SC zifabotz yg bot ini gunakan",
                                        "rowId": ".sc"             
                                        },{
                                        "title": "PROFILE",
                                        "description": "menampilkan profile dan data anda di bot",
                                        "rowId": ".profile"
                                        },{
                                        "title": "DAFTAR",
                                        "description": "daftar diri anda di sini",
                                        "rowId": ".daftar member zifabotz.19"
                                        },{
                                    	"title": "SETELAN GROUP",
                                        "description": "menampilkan setelan group",
                                        "rowId": ".setelangrub"
                                        },{
                                    	"title": "OFF ANTIBADWORD",
                                        "description": "menonaktifkan fitur antibadword",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "ANTILINK❗",
                                        "description": "mengaktifkan fitur antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINK❗",
                                        "description": "menonaktifkan fitur antilink",
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['setelanbukatutupgroup']
handler.tags = ['group']
handler.command = /^(setelanbukatutupgroup|grubbukatutup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
