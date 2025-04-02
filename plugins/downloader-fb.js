const axios = require("axios");
const FormData = require("form-data");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

const handler = async (m, { args, conn }) => {
    if (!args[0]) {
        throw 'Gunakan perintah dengan format: .fb <url>\nContoh: .fb https://www.facebook.com/watch?v=272591278381388';
    }

    try {
        m.reply('⏳ Sedang memproses, mohon tunggu...');

        // Scrape data dari fdown.net
        let form = new FormData();
        form.append("URLz", args[0]);

        let headers = {
            headers: {
                ...form.getHeaders(),
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Host": "fdown.net",
                "Origin": "https://fdown.net",
                "Pragma": "no-cache",
                "Referer": "https://fdown.net/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        };

        let { data } = await axios.post("https://fdown.net/download.php", form, headers);
        let $ = cheerio.load(data);

        let title = $(".lib-header").text().trim() || "Tanpa Judul";
        let hdLink = $("#hdlink").attr("href") || "";
        let sdLink = $("#sdlink").attr("href") || "";

        if (!hdLink && !sdLink) {
            throw 'Gagal mendapatkan link video. Pastikan URL valid!';
        }

        // Pilih HD jika tersedia, jika tidak ambil SD
        let videoUrl = hdLink || sdLink;
        let quality = hdLink ? 'HD' : 'SD';

        try {
            const response = await fetch(videoUrl);
            const buffer = await response.buffer();
            await conn.sendMessage(m.chat, { 
                video: buffer, 
                caption: `🎥 *${title}*\n✅ Video berhasil diunduh dalam kualitas *${quality}*` 
            }, { quoted: m });
        } catch (error) {
            console.error('Gagal mengirim video:', error);
            throw 'Gagal mengirim video, coba lagi nanti.';
        }
    } catch (error) {
        console.error('Error:', error);
        throw 'Terjadi kesalahan saat mengunduh video. Pastikan URL valid dan coba lagi!';
    }
};

handler.help = ['fb <url>'];
handler.tags = ['downloader'];
handler.limit = 2;
handler.register = true;
handler.command = /^(fb)$/i;

module.exports = handler;