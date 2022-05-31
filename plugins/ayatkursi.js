let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
Bacaan ayat Kursi
ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ
Allahu laa ilaaha illaa huw al-hayyul qayyuum. Laa ta’ khuzuhu sinatuw wa laa na’um, lahuu maa fisamaawaati wa maa fil-ard, man zallazi yasyfa’u ‘indahuu illaa bi iznih, ya’lamu maa baina aidiihim wa maa khalfahum, wa laa yuhiituna bisyai im min ‘ilmihii illaa bimaa syaa wasi’a kursiyyuhus samaawaati wal-ard, wa laa ya ‘uduhu hifzuhumaa wa huwal-‘aliyyul-‘aziim.
Artinya:
“Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.”`.trim()
  const button = {
        buttonText: 'PILIHAN',
        description: kontol,
        sections:  [{title: "zifabotz pilihan", rows: [
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
