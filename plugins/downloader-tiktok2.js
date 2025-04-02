const axios = require('axios');
const cheerio = require('cheerio');
const WebSocket = require('ws');

const tikvid = {
    link: 'https://tikvid.io',
    regex: /(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[\w.-]+\/video\/\d+|vm\.tiktok\.com\/\w+|vt\.tiktok\.com\/\w+)/,

    headers: {
        'accept': '*/*',
        'accept-language': 'id-MM,id;q=0.9',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://tikvid.io',
        'referer': 'https://tikvid.io/',
        'user-agent': 'Postify/1.0.0'
    },
    convert: async (vid, audio, image, exp, token, url) => {
        const params = new URLSearchParams({
            ftype: 'mp4',
            v_id: vid,
            audioUrl: audio,
            audioType: 'audio/mp3',
            imageUrl: image,
            fquality: '1080p',
            fname: 'TikVid.io',
            exp,
            token
        });
        try {
            const { data } = await axios.post(url, params, {
                headers: tikvid.headers
            });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    job: (jobId) => {
        return new Promise((resolve, reject) => {
            const ws = new WebSocket(`wss://s2.tik-cdn.com/sub/${jobId}?fname=TikVid.io`, {
                headers: {
                    'Origin': 'https://tikvid.io',
                    'User-Agent': tikvid.headers['user-agent']
                }
            });
            ws.on('message', (data) => {
                const message = JSON.parse(data);
                if (message.action === 'success') {
                    ws.close();
                    resolve(message);
                }
            });
            ws.on('error', (error) => {
                console.error(error);
                reject(error);
            });
            setTimeout(() => {
                ws.close();
                reject(new Error('Convert slide images nya gagal bree 😂'));
            }, 120000);
        });
    },

    download: async (url) => {
        if (!tikvid.regex.test(url)) return {
            error: "Link tiktoknya kagak valid! Coba link tiktok yang lain aja bree 👍🏻"
        };
        try {
            const { data } = await axios.post(`${tikvid.link}/api/ajaxSearch`, new URLSearchParams({
                q: url,
                lang: 'en'
            }), {
                headers: tikvid.headers
            });
            const $ = cheerio.load(data.data);
            const result = {
                title: $('.tik-video .content h3').text().trim(),
                thumbnail: $('.image-tik img').attr('src'),
                downloads: {
                    video: {},
                    images: [],
                    audio: null
                }
            };

            $('.dl-action a').each((_, el) => {
                const $el = $(el);
                const href = $el.attr('href');
                const text = $el.text().trim().toLowerCase();
                if (href && !href.includes('javascript:void(0);')) {
                    if (text.includes('mp4')) {
                        if (text.includes('hd')) result.downloads.video.hd = href;
                        else if (text.includes('[1]')) result.downloads.video.nowm = href;
                        else if (text.includes('[2]')) result.downloads.video.wm = href;
                    } else if (text.includes('mp3')) result.downloads.audio = href;
                }
            });

            result.downloads.video.source = $('#vid').attr('data-src');
            result.tiktokId = $('#TikTokId').val();

            const sc = $('script').last().html();
            const [, exp] = sc.match(/k_exp\s*=\s*"(\d+)"/) || [];
            const [, token] = sc.match(/k_token\s*=\s*"([a-f0-9]+)"/) || [];
            const [, convertUrl] = sc.match(/k_url_convert\s*=\s*"([^"]+)"/) || [];
            if (exp && token && convertUrl) result.convert = {
                exp,
                token,
                convertUrl
            };

            $('.photo-list .download-items').each((_, item) => {
                const $item = $(item);
                result.downloads.images.push({
                    thumbnail: $item.find('img').attr('src'),
                    dlink: $item.find('a').attr('href')
                });
            });

            if (result.downloads.images.length > 1) {
                const $convertButton = $('#ConvertToVideo');
                if ($convertButton.length) {
                    const audio = $convertButton.attr('data-audiourl');
                    const imageData = $convertButton.attr('data-imagedata');
                    if (result.tiktokId && audio && imageData && result.convert) {
                        result.slides = await tikvid.convert(result.tiktokId, audio, imageData, result.convert.exp, result.convert.token, result.convert.convertUrl);
                        if (result.slides?.jobId) {
                            try {
                                result.converts = await tikvid.job(result.slides.jobId);
                                result.downloads.video.converted = result.converts.url;
                            } catch (error) {
                                console.error(error);
                                result.error = 'Convert slide images nya gagal bree 😂';
                            }
                        }
                    }
                }
            }

            if (!Object.keys(result.downloads.video).length) result.downloads.video = null;
            if (!result.downloads.images.length) result.downloads.images = null;

            return result;
        } catch (error) {
            return {
                error: "Gagal bree, coba lagi nanti ae 😂",
                details: error.message
            };
        }
    }
};

let handler = async (m, {
    text,
    conn,
    info,
    config
}) => {
    if (!text) return m.reply("URUL HARUS VALID.");

    const result = await tikvid.download(text);

    if (result.error) {
        m.reply(result.error);
    } else {
        let all = `*Judul:* ${result.title}\n`;
        if (result.thumbnail) {
            await conn.sendMessage(m.chat, {
                text: all,
                contextInfo: {
                    externalAdReply: {
                        title: 'nazand',
                        body: 'A N O M A K I',
                        thumbnailUrl: result.thumbnail,
                        sourceUrl: text,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
        }
        if (result.downloads.video) {
            let videoUrl = result.downloads.video.hd || result.downloads.video.nowm || result.downloads.video.wm;
            if (videoUrl) {
                await conn.sendMessage(m.chat, {
                    text: `*Video TikTok - ${result.title}*`,
                    contextInfo: {
                        externalAdReply: {
                            title: 'nazand',
                            body: 'A N O M A K I',
                            thumbnailUrl: result.thumbnail,
                            sourceUrl: videoUrl,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                }).then(() => {
                    if (result.downloads.audio) {
                        if (config && config.sound) {
                            return conn.sendFile(m.chat, result.downloads.audio, '', null, m, true);
                        }
                    }
                    return conn.sendFile(m.chat, videoUrl, '', null, m, true);
                });
            }
        }

        if (result.downloads.audio && !config?.sound) {
            await conn.sendFile(m.chat, result.downloads.audio, '', null, m, true);
        }

        if (result.downloads.images && result.downloads.images.length > 0) {
            result.downloads.images.forEach((image, index) => {
                conn.sendMessage(m.chat, {
                    image: {
                        url: image.dlink
                    },
                    caption: `Gambar ${index + 1}: ${image.dlink}`,
                    contextInfo: {
                        externalAdReply: {
                            title: 'nazand',
                            body: 'A N O M A K I',
                            thumbnailUrl: image.thumbnail,
                            sourceUrl: image.dlink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });
            });
        }
    }
};

handler.help = ['tt2'];
handler.tags = ['downloader'];
handler.command = /^(tt2)$/i;

module.exports = handler;