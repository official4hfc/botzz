const handler = async (m, { conn }) => {
  conn.fakeReply(m.chat, '> tes', '0@s.whatsapp.net', 'Test Notification', 'status@broadcast');
};

handler.command = ['tes'];

module.exports = handler;