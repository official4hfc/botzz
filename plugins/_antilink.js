let handler = m => m;

let groupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let channelLinkRegex = /whatsapp.com\/channel\/([0-9A-Za-z]{20,24})/i;

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true;
  let chat = global.db.data.chats[m.chat];
  let isGroupLink = groupLinkRegex.exec(m.text);
  let isChannelLink = channelLinkRegex.exec(m.text);

  if (chat.antiLink && (isGroupLink || isChannelLink)) {
    if (isAdmin) return m.reply('*Eh sorry you admins, you will not be kicked. hehe..*');
    if (!isBotAdmin) return m.reply('*Bots are not admins, how can they kick people _-*');
    if (isGroupLink) {
      let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat));
      let isLinkconnGc = new RegExp(linkGC, 'i');
      let isgclink = isLinkconnGc.test(m.text);
      if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nOrder denied, bot will not kick you.\nBecause the group link itself');
    }
    if (isChannelLink) {
      m.reply('*「 CHANNEL LINK DETECTOR 」*\n\nTerdeteksi mengirim link channel, Maaf pesan kamu akan saya kick');
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
    await conn.sendMessage(m.chat, { delete: m.key });
  }
  return true;
};

module.exports = handler;