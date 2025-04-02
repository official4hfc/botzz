let handler = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }

    let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
    
    // Kalo mau kick semua anggota
    let groupMembers = await conn.groupMetadata(m.chat).then(g => g.participants);
    let usersToKick = groupMembers.map(member => member.jid).filter(user => !(user == ownerGroup || user.includes(conn.user.jid)));

    for (let user of usersToKick) {
        await conn.groupParticipantsUpdate(m.chat, [user], "remove");
    }
};

handler.help = ['kickall']
handler.tags = ['group']
handler.command = /^(kickall|tendangsemua)$/i

handler.group = true
handler.botAdmin = true

module.exports = handler;