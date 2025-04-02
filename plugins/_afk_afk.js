let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.fakeReply(m.chat, `@${m.sender.split`@`[0]} sekarang AFK ${text ? '\nDengan Alasan : ' + text : 'Tanpa Alasan'}`, '0@s.whatsapp.net', 'AFK Notification', 'status@broadcast')
}

handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler