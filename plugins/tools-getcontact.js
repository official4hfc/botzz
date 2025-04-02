/*
• wa.me/6285878836361
• `Sumber :` https://whatsapp.com/channel/0029VaFzWbMFy728xPwFBG00
• `Github :` https://github.com/rizkiwibu
• `by rizkiwibu`
• 'IG :' https://instagram.com/ikykunnnn

`Thanks to:` https://restapi.botwaaa.web.id (Rest api)
*/

const fetch = require('node-fetch');

let handler = async (m, { conn, text, mentionedJid }) => {
  mentionedJid = mentionedJid || []; // Pastikan mentionedJid adalah array

  if (!text && mentionedJid.length === 0) {
    return conn.sendMessage(
      m.chat,
      { 
        text: '⚠️ Silakan tambahkan nomor atau mention seseorang!\n\n📌 *Contoh penggunaan:*\n.getcontact 6281234567890\n.getcontact @nomor\n\n✅ *Format yang didukung:*\n- +628XXXXXXXXXX\n- 628XXXXXXXXXX\n- 08XXXXXXXXXX' 
      },
      { quoted: m }
    );
  }

  let number;
  if (mentionedJid.length > 0) {
    number = mentionedJid[0].replace(/@s.whatsapp.net/, '');
  } else {
    number = text.trim().replace(/[^0-9+]/g, '');
  }

  // Validasi format nomor
  if (!/^(\+62|62|08)\d+$/.test(number)) {
    return conn.sendMessage(
      m.chat,
      { 
        text: `⚠️ Format nomor tidak valid!\n\n✅ *Gunakan format yang benar:*\n- +628XXXXXXXXXX\n- 628XXXXXXXXXX\n- 08XXXXXXXXXX` 
      },
      { quoted: m }
    );
  }

  try {
    let url = `https://restapi.botwaaa.web.id/getcontact?number=${encodeURIComponent(number)}&apikey=free`;
    let res = await fetch(url, { headers: { accept: '*/*' } });
    if (!res.ok) throw `❌ Gagal mengambil data dari API! Status: ${res.status}`;

    let json = await res.json();

    // Pastikan ada nomor sebelum lanjut
    if (!json.phone) throw '❌ Tidak ada data yang ditemukan untuk nomor tersebut.';

    let { name, phone, provider, tags } = json;
    let message = `
📞 *Informasi Kontak* 📞
━━━━━━━━━━━━━━━━━━━
👤 *Nama*: ${name || 'Tidak diketahui'}
📱 *Nomor*: ${phone}
🌐 *Provider*: ${provider || 'Tidak diketahui'}

🏷️ *Tags*:
${tags && tags.length ? tags.map(tag => `- ${tag}`).join('\n') : 'Tidak ada tag.'}
    `.trim();

    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
  } catch (err) {
    await conn.sendMessage(m.chat, { text: `❌ Error: ${err.message || 'Gagal mengambil data.'}` }, { quoted: m });
  }
};

handler.help = ['getcontact <nomor>'];
handler.tags = ['tools'];
handler.command = /^(getcontact)$/i;

handler.limit = 4;
handler.register = true;

module.exports = handler;