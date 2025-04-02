const axios = require('axios');

let handler = async (m, { text }) => {
  if (!text) return m.reply('Mau Tanya Apa');
  try {
    let { data } = await axios.get(`https://fgsi1-restapi.hf.space/api/ai/copilot?text=${encodeURIComponent(text)}`);
    m.reply(data?.data?.answer || 'Tidak ada jawaban.');
  } catch (e) {
    m.reply('Terjadi kesalahan.');
  }
};

handler.help = ['ai2'];
handler.command = ['ai2'];
handler.tags = ['ai'];
module.exports = handler;