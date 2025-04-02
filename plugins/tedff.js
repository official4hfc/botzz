const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const handler = m => m;
handler.before = async function(m, { user, isBotAdmin, isAdmin, text }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true;
  const chat = global.db.data.chats[m.chat];
  const regex = /whatsapp.com\/channel\/([0-9A-Za-z]{20,24})/i;
  const isLinkCh = regex.exec(m.text);

  if (chat.antiChannel && isLinkCh && isBotAdmin) {
    if (!isBotAdmin)
      return m.reply(
        "Maaf, Aku bukan admin group ini. 😔",
      );
    if (isAdmin)
      return m.reply(
        "Admin mah bebas ye kan 😏",
      );
    if (isLinkCh)
      m.reply("*「 CHANNEL LINK DETECTOR 」*\n\nTerdeteksi mengirim link channel, Maaf pesan kamu akan saya hapus");
    return conn.sendMessage(m.chat, { delete: m.key });
  }

  return true;
};

module.exports = { handler, delay };