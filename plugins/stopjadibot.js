var path = require("path");
var fs = require("fs");

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (global.conn.user.jid == conn.user.jid) return conn.reply(m.chat, '```Command Ini Hanya Untuk User Yang Sudah Jadibot```', m);
    if (!text) return conn.reply(m.chat, '• *Example :* .stopjadibot 6288980870067', m);
    await conn.reply(m.chat, '```Sayonara ~_~```', m);

    let filePath = path.join(process.cwd(), `./jadibot/${text}`);
    if (fs.existsSync(filePath)) {
        if (fs.statSync(filePath).isDirectory()) {
            fs.rmdirSync(filePath, { recursive: true });
        } else {
            fs.unlinkSync(filePath);
        }
    } else {
        return conn.reply(m.chat, '```Path tidak ditemukan```', m);
    }

    let nomer = `${text}@s.whatsapp.net`;
    let del = global.conns.findIndex(conn => conn.user.jid === nomer);
    if (del !== -1) {
        global.conns[del].ws.close();
        global.conns.splice(del, 1);
    } else {
        return conn.reply(m.chat, '```Nomor tersebut tidak ditemukan dalam daftar jadibot```', m);
    }
}
handler.help = ['stopjadibot *<number>*'];
handler.tags = ['jadibot'];
handler.command = /^(stopjadibot)$/i;
handler.owner = true;

module.exports = handler;