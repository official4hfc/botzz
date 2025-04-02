const yts = require('yt-search');
const axios = require('axios');

let handler = async (m, { conn, text, command }) => {
    if (!text) return m.reply(`Please enter a song title, example *${command} lucid dreams*`);

    try {
        conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

        let searchResults = await yts(text);
        if (searchResults.all.length === 0) return m.reply("Video not found or cannot be downloaded.");

        let videos = searchResults.all.filter(v => v.type === 'video');
        if (videos.length === 0) return m.reply("No videos found.");

        let video = videos[0];
        let thumbnailUrl = `https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`;

        let caption = `*Playing music from YouTube*\n\n` +
                      `📺 *Channel* : ${video.author.name}\n` +
                      `👀 *Views* : ${video.views} times\n` +
                      `⏱️ *Duration* : ${video.timestamp}\n` +
                      `🔗 *Play URL* : ${video.url}\n\n` +
                      `\n*Sending audio...!*`;

        await conn.sendMessage(m.chat, {
            contextInfo: { 
                externalAdReply: { 
                    showAdAttribution: true, 
                    title: video.title,
                    body: new Date().toLocaleString(),														
                    mediaType: 2,  
                    renderLargerThumbnail: true,
                    thumbnailUrl: thumbnailUrl,
                    mediaUrl: video.url,
                    sourceUrl: video.url
                }
            },
            image: { url: thumbnailUrl },
            text: caption
        }, { quoted: m });

        let response = await axios.get(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`).then(res => res.data);
        let audioUrl = response.result.download.audio;

        const audioMessage = await conn.sendMessage(m.chat, { 
            audio: { url: audioUrl }, 
            mimetype: 'audio/mpeg', 
            ptt: false 
        }, { quoted: m });

        await conn.sendMessage(m.chat, { react: { text: '🎶', key: audioMessage.key } });

    } catch (err) {
        console.error(err);
        m.reply(`An error occurred: ${err.message}`);
    }
};

handler.help = handler.command = ['play'];
handler.tags = ['downloader'];
handler.limit = true;
module.exports = handler;