const handler = async (m, { conn, isAdmin }) => {
    if (m.fromMe) throw 'Tidak';
    if (isAdmin) throw 'Kamu sudah menjadi admin grup pembuatku 🫡';
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
};

handler.help = ['autoadmin'];
handler.tags = ['owner'];
handler.command = /^admin.|atad|autoadmin$/i;
handler.owner = true;
handler.botAdmin = true;

module.exports = handler;