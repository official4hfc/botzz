/*
Jangan Hapus Wm Bang 

*Remove Background Plugins Esm*

Mungkin Ada Yang butuh 

*[Sumber]*
https://whatsapp.com/channel/0029Vb3u2awADTOCXVsvia28

*[Sumber Scrape]*
Dari SC Axell 
*/

const axios = require('axios');

async function removebg(buffer) {
    try {
        const image = buffer.toString("base64");
        let res = await axios.post(
            "https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto", {
                image: `data:image/png;base64,${image}`,
                model: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
            }
        );
        const data = res.data?.replace(`"`, "");
        if (!data) throw "Gagal menghapus background!";
        return data;
    } catch (e) {
        throw `Error: ${e.message}`;
    }
}

let handler = async (m, { conn }) => {
    try {
        await conn.sendMessage(m.chat, { text: '⌛ Memproses...' }, { quoted: m });

        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (!mime || !mime.startsWith('image/')) 
            throw 'Mana Gambar Nya?.';

        let media = await q.download();
        let resultUrl = await removebg(media);

        await conn.sendMessage(m.chat, { 
            image: { url: resultUrl },
            caption: '✅ Background berhasil dihapus!'
        }, { quoted: m });

    } catch (error) {
        await conn.sendMessage(m.chat, { text: `❌ *Error:* ${error}` }, { quoted: m });
    }
};

handler.help = ['removebg'];
handler.command = ['removebg', 'rbg'];
handler.tags = ['tools']
handler.limit = false;

module.exports = handler;