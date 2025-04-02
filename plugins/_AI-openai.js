const axios = require('axios');

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
  if (!text) return m.reply("Mau nanya apa sama gambar itu?");

  const prompt = ``; // isi prompt lu
  
  const requestData = { content: text, user: m.sender, prompt: prompt };

  const quoted = m && (m.quoted || m);

  try {
    let response;

    if (quoted && /image/.test(quoted.mimetype || quoted.msg?.mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;

    await m.reply(`${response}`);
  } catch (e) {
    m.reply(`Terjadi kesalahan: ${e.message}`);
  }
};

handler.help = ['ai'];
handler.tags = ['ai'];
handler.command = /^(ai)$/i;

module.exports = handler;