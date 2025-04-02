const axios = require('axios');
const ytSearch = require('yt-search');

const handler = async (m, { conn, text }) => {
    if (!text) return m.reply("Masukkan judul atau kata kunci untuk mencari audio YouTube!");

    try {
        m.reply("🔍 Mencari lagu di YouTube, harap tunggu...");

        const searchResults = await ytSearch(text);
        const video = searchResults.videos.length ? searchResults.videos[0] : null;

        if (!video) return m.reply(" Lagu tidak ditemukan. Coba gunakan kata kunci lain.");

        const { title, url, duration, thumbnail } = video;

        if (duration.seconds > 3600)
            return m.reply(" Lagu terlalu panjang (maksimal 1jam).");

        m.reply(`🎵 *Lagu Ditemukan!*\n\n📌 *Judul*: ${title}\n⏱️ *Durasi*: ${duration.timestamp}\n🔗 *Link*: ${url}\n\n📥 *Sedang mendownload, harap tunggu...*`);

        const { data } = await axios.get(`https://ytdl.axeel.my.id/api/download/audio?url=${encodeURIComponent(url)}`);
        const { downloads } = data;

        if (downloads?.url) {
            conn.sendMessage(m.chat, {
                audio: { url: downloads.url },
                mimetype: downloads.mimetype || 'audio/mpeg',
                caption: `🎧 *${title}*\n\nAudio berhasil diunduh.`,
                thumbnail: { url: thumbnail },
            }, { quoted: m });
        } else {
            m.reply(" Gagal mendapatkan audio.");
        }
    } catch (e) {
        m.reply(" Terjadi kesalahan saat memproses permintaan.");
    }
};

handler.help = ["playaudio"];
handler.tags = ["downloader"];
handler.command = ["playaudio"];

module.exports = handler;