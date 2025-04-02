let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) 
    throw `✳️ Masukkan nomor yang mau dikirimin undangan grup\n\n📌 Contoh:\n*${usedPrefix + command}*917605902011`
  if (text.includes('+')) throw `Masukkan nomor tanpa *+*`
  if (isNaN(text)) throw '📌 Masukkan hanya angka tanpa kode negara dan tanpa spasi'
  
  let group = m.chat
  let link = 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(group))

  await conn.reply(
    text + '@s.whatsapp.net',
    `≡ *UNDANGAN KE GRUP*\n\nSeorang pengguna mengundang kamu untuk bergabung ke grup ini \n\n${link}`,
    m,
    { mentions: [m.sender] }
  )
  
  m.reply(`✅ Link undangan udah dikirim ke pengguna`)
}

handler.help = ['invite2 <917xxx>']
handler.tags = ['group']
handler.command = ['invite2', 'invitar2']
handler.group = true
handler.admin = true

module.exports = handler;