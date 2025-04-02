const speed = require('performance-now');
const { exec } = require('child_process');

let handler = async (m, { conn }) => {
    let timestamp = speed();
    let latensi = speed() - timestamp;

    exec('neofetch --stdout', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return conn.fakeReply(m.chat, 'Ada error bro! 😅', '0@s.whatsapp.net', 'Error Notification', 'status@broadcast');
        }
        let child = stdout.toString("utf-8");
        let ssd = child.replace(/Memory:/, "Ram:");
        conn.fakeReply(m.chat, `${ssd} *Kecepatan* : ${latensi.toFixed(4)} _ms_`, '0@s.whatsapp.net', 'Ping Test Result', 'status@broadcast');
    });
}

handler.help = ['neofetch'];
handler.tags = ['info'];
handler.command = ['neofetch'];

module.exports = handler;