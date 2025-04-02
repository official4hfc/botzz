const handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silakan masukkan nama baru untuk bot.', m);

    try {
        await conn.updateProfileName(text);
        conn.reply(m.chat, 'Nama bot berhasil diubah.', m);
    } catch (err) {
        conn.reply(m.chat, 'Terjadi kesalahan saat mengganti nama bot.', m);
        console.error(err);
    }
};

handler.help = ['setname nama baru'];
handler.tags = ['owner'];
handler.command = /^(setname|gantinama)$/i;
handler.owner = true;

module.exports = handler;