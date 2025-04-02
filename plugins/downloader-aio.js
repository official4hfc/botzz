const axios = require("axios");

let handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return m.reply("❌ Harap masukkan tautan video.");
  }

  let url = args[0];

  try {
    const response = await axios.post(
      "https://anydownloader.com/wp-json/aio-dl/video-data/",
      new URLSearchParams({ url }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: "https://anydownloader.com/",
          Token:
            "5b64d1dc13a4b859f02bcf9e572b66ea8e419f4b296488b7f32407f386571a0d",
        },
      }
    );

    let data = response.data;

    if (!data || !data.medias?.length) {
      return m.reply("❌ Tidak ditemukan video yang valid.");
    }

    let video = data.medias.find((media) => media.quality === "HD No Watermark") || data.medias[0];

    let caption = `🎥 *Judul:* ${data.title}\n🔗 *Tautan:* ${data.url}`;
    
    await conn.sendFile(m.chat, video.url, "tiktok.mp4", caption, m);
  } catch (error) {
    console.error("Error fetching TikTok data:", error);
    m.reply("❌ Terjadi kesalahan saat mengambil video. Coba lagi nanti.");
  }
};

handler.help = ["aio"];
handler.tags = ["downloader"];
handler.command = ["aio"];

module.exports = handler;