case 'cmd':{
roti = `──⭓*Menu* ⭓──
⭔ Prefix : ( ${prefix} )
⭔ Nama Bot : zifabotz
⭔ Nama Owner : rozi
⭔ Runtime : ${runtime(process.uptime())}
  ⭓──────⭓`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `${roti}`,
                    buttonText: "LIST MENU >_<",
                    footerText: "Kel Md",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "───────•「 🌍 Fitur Grup 🌍 」•────────",
								"rows": [
									{
										"title": "👥︱ Grup Fitur ",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "───────•「 😋 Suport 😋  」•────────",
								"rows": [
									{
										"title": "🌥️︱ Sewa Bot ",
										"description": "Klik Untuk Melihat Daftar Sewabot",
										"rowId": `${prefix}sewabot`
									},{
										"title": "❤️︱ Donasi ",
										"description": "Klik Untuk Melihat Daftar Sewabot",
										"rowId": `${prefix}donasi`
									}
								]
							},
							{
								"title": "───────•「 🤔 Tutorial 🤔   」•────────",
								"rows": [
									{
										"title": "✨︱Tutorial ",
										"description": "Klik Untuk Melihat Tutorial",
										"rowId": `${prefix}tutorial`
									}
								]
							},
							{
								"title": "───────•「 👤 Info Tentang Owner? 👤 」•────────",
								"rows": [
									{
										"title": "😼︱ Owner ",
										"description": "Menampilkan nomor owner",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "───────•「 😁 Bot Menu 😁 」•────────",
								"rows": [
									{
										"title": "🌀︱ Main Menu ",
										"description": "Menampilkan Main Menu!",
										"rowId": `${prefix}mainmenu`
									},
									{
										"title": "🌈︱Download Menu ",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "🔥︱ Search Menu ",
										"description": "Menampilkan Search Menu dan Stalk menu",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "🌱︱ Wibu Menu ",
										"description": "Menampilkan wibu Menu",
										"rowId": `${prefix}photomenu`
										},
										{
											"title": "🏔️︱Fun Menu ",
										"description": "Menampilkan Random menu",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "🌿︱Sound Menu ",
										"description": "Menampilkan Sound Menu!",
										"rowId": `${prefix}soundmenu`
									},
										{
										"title": "🌷︱ Nsfw Menu ",
										"description": "Menampilkan Nsfw Menu",
										"rowId": `${prefix}nsfwmenu`
										},
										{
											"title": "⛄︱Maker Menu ",
										"description": "Menampilkan Maker Menu",
										"rowId": `${prefix}ephotomenu`
										},
										{
											"title": "🌫️︱Voice Changer Menu ",
										"description": "Menampilkan Voice Changer Menu",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "💮︱ Database Menu ",
										"description": "Menampilkan Database Menu",
										"rowId": `${prefix}datamenu`
										},
										{
											"title": "🏖️ ︱Primbon Menu ",
										"description": "Menampilkan Primbon Menu",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "🌾 ︱Anonymous Menu ",
											"description": "Menampilkan Anonymous Menu",
											"rowId": `${prefix}anonymousmenu`
										},
										{
											"title": "🍃 ︱Convert Menu ",
										"description": "Menampilkan Convert Menu",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "🌙 ︱ Islamic Menu ",
										"description": "Menampilkan Islamic Menu",
										"rowId": `${prefix}islammenu`
										},
										{
											"title": "🐼 ︱ WebZone Menu ",
										"description": "Menampilkan WebzoneMenu",
										"rowId": `${prefix}webzonem`
										},
										{
											"title": "🥀︱ Owner Menu ",
										"description": "Menampilkan Owner Menu",
										"rowId": `${prefix}ownermenu`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            mikel.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
