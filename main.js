(function(_0x10ee72,_0xd11726){const _0x2dfc18=_0x2f76,_0x566414=_0x10ee72();while(!![]){try{const _0x4d6a06=parseInt(_0x2dfc18(0xaf))/0x1*(-parseInt(_0x2dfc18(0x10f))/0x2)+parseInt(_0x2dfc18(0x122))/0x3+parseInt(_0x2dfc18(0xb7))/0x4*(parseInt(_0x2dfc18(0xbe))/0x5)+-parseInt(_0x2dfc18(0x127))/0x6*(-parseInt(_0x2dfc18(0xb9))/0x7)+parseInt(_0x2dfc18(0xf2))/0x8*(-parseInt(_0x2dfc18(0xd0))/0x9)+-parseInt(_0x2dfc18(0x11f))/0xa+parseInt(_0x2dfc18(0xcb))/0xb*(-parseInt(_0x2dfc18(0xc7))/0xc);if(_0x4d6a06===_0xd11726)break;else _0x566414['push'](_0x566414['shift']());}catch(_0x18afaf){_0x566414['push'](_0x566414['shift']());}}}(_0x37e5,0x35860),((async()=>{const _0x2cb1b2=_0x2f76;require('./config');const {useMultiFileAuthState:_0x284595,DisconnectReason:_0x24750c,generateForwardMessageContent:_0x1ddff4,prepareWAMessageMedia:_0x426909,generateWAMessageFromContent:_0x231555,generateMessageID:_0x36747,downloadContentFromMessage:_0x3b5fa9,makeInMemoryStore:_0xfb4d5a,jidDecode:_0x36eef6,fetchLatestBaileysVersion:_0x2c9de8,proto:_0x558a52}=require(_0x2cb1b2(0x123)),_0x45b424=require(_0x2cb1b2(0x114)),_0x5d73f1=require('ws'),_0x5159f3=require(_0x2cb1b2(0xb2)),_0x1ff47b=require('fs'),_0x4cb2f7=require('yargs/yargs'),_0x16ecc1=require(_0x2cb1b2(0x128)),_0x5ea44c=require(_0x2cb1b2(0x126)),_0x2491b6=require(_0x2cb1b2(0xff)),_0x1f478d=require(_0x2cb1b2(0x114)),_0x3736ca=require('os'),_0x2299c0=require('node-fetch'),_0x4fa861=require(_0x2cb1b2(0x108));let _0x439f13=require('./lib/simple');var _0x5abbfa;try{_0x5abbfa=require('lowdb');}catch(_0x448c0e){_0x5abbfa=require(_0x2cb1b2(0x110));}const {Low:_0x553822,JSONFile:_0x57e397}=_0x5abbfa,_0x3dea62=require(_0x2cb1b2(0xd4)),_0xd1e22e=require(_0x2cb1b2(0x12b)),_0x120faa=process[_0x2cb1b2(0x11a)][_0x2cb1b2(0xe8)](_0x2cb1b2(0xd1))||process[_0x2cb1b2(0x11a)]['includes'](_0x2cb1b2(0xd3)),_0x349295=process[_0x2cb1b2(0x11a)][_0x2cb1b2(0xe8)]('--mobile'),_0x5570e3=_0xd1e22e['createInterface']({'input':process[_0x2cb1b2(0xd6)],'output':process['stdout']}),_0x265f13=_0x2eee62=>new Promise(_0x54d88b=>_0x5570e3[_0x2cb1b2(0xf3)](_0x2eee62,_0x54d88b));global['API']=(_0x57d71a,_0x10943a='/',_0x65ae39={},_0x111c83)=>(_0x57d71a in global[_0x2cb1b2(0xe6)]?global['APIs'][_0x57d71a]:_0x57d71a)+_0x10943a+(_0x65ae39||_0x111c83?'?'+new URLSearchParams(Object[_0x2cb1b2(0xab)]({..._0x65ae39,..._0x111c83?{[_0x111c83]:global[_0x2cb1b2(0xd7)][_0x57d71a in global[_0x2cb1b2(0xe6)]?global[_0x2cb1b2(0xe6)][_0x57d71a]:_0x57d71a]}:{}})):''),global[_0x2cb1b2(0x11c)]={'start':new Date()};const _0x30f875=process[_0x2cb1b2(0xd8)][_0x2cb1b2(0x12a)]||0xbb8;global['opts']=new Object(_0x4cb2f7(process[_0x2cb1b2(0x11a)]['slice'](0x2))[_0x2cb1b2(0x103)](![])[_0x2cb1b2(0xee)]()),global[_0x2cb1b2(0x118)]=new RegExp('^['+(opts[_0x2cb1b2(0x118)]||'‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-')['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,_0x2cb1b2(0x105))+']'),global['db']=new _0x553822(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x2cb1b2(0x11e)](opts['db'])?new _0x3dea62(opts['db']):new _0x57e397((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x2cb1b2(0xf0))),global[_0x2cb1b2(0xbd)]=global['db'],global[_0x2cb1b2(0xae)]=async function _0x2787bc(){const _0x318f8d=_0x2cb1b2;if(global['db']['READ'])return new Promise(_0x477a1e=>setInterval(function(){const _0x47de36=_0x2f76;!global['db'][_0x47de36(0xf9)]?(clearInterval(this),_0x477a1e(global['db']['data']==null?global[_0x47de36(0xae)]():global['db'][_0x47de36(0x119)])):null;},0x1*0x3e8));if(global['db'][_0x318f8d(0x119)]!==null)return;global['db'][_0x318f8d(0xf9)]=!![],await global['db'][_0x318f8d(0xdb)](),global['db']['READ']=![],global['db'][_0x318f8d(0x119)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},...global['db']['data']||{}},global['db']['chain']=_0x5ea44c[_0x318f8d(0xbf)](global['db'][_0x318f8d(0x119)]);},loadDatabase();const _0x1f953d=''+(opts['_'][0x0]||_0x2cb1b2(0xbb));global[_0x2cb1b2(0xcc)]=!_0x1ff47b[_0x2cb1b2(0x10a)](_0x1f953d);const {state:_0x18697d,saveState:_0x5d5795,saveCreds:_0x395580}=await _0x284595(_0x1f953d),{version:_0x26b2f8,isLatest:_0x39c262}=await _0x2c9de8();console[_0x2cb1b2(0x113)](_0x4fa861[_0x2cb1b2(0x115)](_0x2cb1b2(0x12c)+_0x26b2f8[_0x2cb1b2(0xfc)]('.')+_0x2cb1b2(0x129)+_0x39c262+_0x2cb1b2(0xfb)));const _0x9b5721={'printQRInTerminal':!_0x120faa,'syncFullHistory':!![],'markOnlineOnConnect':!![],'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'generateHighQualityLinkPreview':!![],'patchMessageBeforeSending':_0x3be218=>{const _0x45990c=_0x2cb1b2,_0x3fde60=!!(_0x3be218[_0x45990c(0xfa)]||_0x3be218['templateMessage']||_0x3be218[_0x45990c(0x11d)]);return _0x3fde60&&(_0x3be218={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x3be218}}}),_0x3be218;},'auth':_0x18697d,'browser':[_0x2cb1b2(0xd5),_0x2cb1b2(0xba),_0x2cb1b2(0xd9)],'logger':_0x45b424({'level':'silent'}),'version':(await(await _0x2299c0('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json'))[_0x2cb1b2(0xd2)]())['version']};global[_0x2cb1b2(0x117)]=_0x439f13[_0x2cb1b2(0xb4)](_0x9b5721);if(!opts[_0x2cb1b2(0x11e)]){if(global['db'])setInterval(async()=>{const _0x375ef1=_0x2cb1b2;if(global['db'][_0x375ef1(0x119)])await global['db'][_0x375ef1(0xfd)]();if(!opts[_0x375ef1(0x125)]&&(global[_0x375ef1(0x107)]||{})[_0x375ef1(0xf8)])tmp=[_0x3736ca[_0x375ef1(0xcf)](),'tmp'],tmp[_0x375ef1(0xe7)](_0xa63ec5=>_0x16ecc1[_0x375ef1(0xc0)](_0x375ef1(0xf8),[_0xa63ec5,_0x375ef1(0xea),'3',_0x375ef1(0x100),'f','-delete']));},0x1e*0x3e8);}async function _0x1a66a4(_0x2edd2a){const _0x1ee96d=_0x2cb1b2,{connection:_0x56fbb3,lastDisconnect:_0x5dfa01}=_0x2edd2a;global[_0x1ee96d(0x11c)][_0x1ee96d(0x10e)]=new Date();_0x5dfa01&&_0x5dfa01['error']&&_0x5dfa01['error'][_0x1ee96d(0xdc)]&&_0x5dfa01[_0x1ee96d(0xce)][_0x1ee96d(0xdc)]['statusCode']!==_0x24750c['loggedOut']&&conn['ws']['readyState']!==_0x5d73f1[_0x1ee96d(0x10d)]&&console[_0x1ee96d(0x113)](global[_0x1ee96d(0xa5)](!![]));if(global['db']['data']==null)await loadDatabase();}(_0x120faa||_0x349295)&&_0x1ff47b['existsSync'](_0x2cb1b2(0x101))&&!conn[_0x2cb1b2(0xe4)]['creds']['registered']&&(console[_0x2cb1b2(0x113)](_0x4fa861[_0x2cb1b2(0xcd)]('--\x20WARNING:\x20creds.json\x20is\x20broken,\x20please\x20delete\x20it\x20first\x20--')),process[_0x2cb1b2(0xec)](0x0));if(_0x120faa&&!conn[_0x2cb1b2(0xe4)]['creds'][_0x2cb1b2(0x121)]){if(_0x349295)throw new Error(_0x2cb1b2(0xa0));let _0x588948='';do{_0x588948=await _0x265f13(_0x4fa861['blueBright']('ENTER\x20A\x20VALID\x20NUMBER\x20START\x20WITH\x20REGION\x20CODE.\x20Example\x20:\x2062xxx:\x0a')),(!/^\d+$/['test'](_0x588948)||_0x588948[_0x2cb1b2(0xe9)]<0xa)&&console['log'](_0x4fa861[_0x2cb1b2(0xe3)](_0x2cb1b2(0x106)));}while(!/^\d+$/[_0x2cb1b2(0x11e)](_0x588948)||_0x588948[_0x2cb1b2(0xe9)]<0xa);_0x5570e3['close'](),_0x588948=_0x588948['replace'](/\D/g,''),console['log'](_0x4fa861['bgWhite'](_0x4fa861['blue'](_0x2cb1b2(0x109)))),setTimeout(async()=>{const _0x56ff1c=_0x2cb1b2;let _0x747011=await conn[_0x56ff1c(0xc4)](_0x588948);_0x747011=_0x747011?.['match'](/.{1,4}/g)?.[_0x56ff1c(0xfc)]('-')||_0x747011,console[_0x56ff1c(0x113)](_0x4fa861[_0x56ff1c(0xe2)](_0x4fa861[_0x56ff1c(0xc3)]('Your\x20Pairing\x20Code\x20:\x20')),_0x4fa861[_0x56ff1c(0xe2)](_0x4fa861[_0x56ff1c(0xde)](_0x747011)));},0xbb8);}process['on']('uncaughtException',console[_0x2cb1b2(0xce)]);const _0x53cdb3=_0x471669=>{const _0x47bc70=_0x2cb1b2;_0x471669=require[_0x47bc70(0xe5)](_0x471669);let _0x5d068f,_0x1cc415=0x0;do{if(_0x471669 in require[_0x47bc70(0xe1)])delete require['cache'][_0x471669];_0x5d068f=require(_0x471669),_0x1cc415++;}while((!_0x5d068f||(Array[_0x47bc70(0xc2)](_0x5d068f)||_0x5d068f instanceof String)?!(_0x5d068f||[])[_0x47bc70(0xe9)]:typeof _0x5d068f==_0x47bc70(0x10b)&&!Buffer['isBuffer'](_0x5d068f)?!Object[_0x47bc70(0x111)](_0x5d068f||{})[_0x47bc70(0xe9)]:!![])&&_0x1cc415<=0xa);return _0x5d068f;};let _0x598870=!![];global[_0x2cb1b2(0xa5)]=function(_0x40dbcb){const _0x50d843=_0x2cb1b2;let _0x55cd5b=_0x53cdb3('./handler');if(_0x40dbcb){try{global[_0x50d843(0x117)]['ws'][_0x50d843(0xb3)]();}catch{}global[_0x50d843(0x117)]={...global['conn'],..._0x439f13[_0x50d843(0xb4)](_0x9b5721)};}return!_0x598870&&(conn['ev'][_0x50d843(0xa4)](_0x50d843(0xbc),conn[_0x50d843(0xa8)]),conn['ev'][_0x50d843(0xa4)](_0x50d843(0x124),conn['participantsUpdate']),conn['ev'][_0x50d843(0xa4)](_0x50d843(0xad),conn['onDelete']),conn['ev'][_0x50d843(0xa4)]('connection.update',conn[_0x50d843(0xaa)]),conn['ev'][_0x50d843(0xa4)](_0x50d843(0xa3),conn[_0x50d843(0xf5)])),conn['welcome']='Selamat\x20datang\x20@user\x20di\x20group\x20@subject\x20utamakan\x20baca\x20desk\x20ya\x20\x0a@desc',conn[_0x50d843(0x130)]='Selamat\x20tinggal\x20@user\x20👋',conn[_0x50d843(0x102)]=_0x50d843(0xb6),conn['demote']=_0x50d843(0xe0),conn[_0x50d843(0xa8)]=_0x55cd5b[_0x50d843(0xa8)]['bind'](conn),conn[_0x50d843(0x11b)]=_0x55cd5b[_0x50d843(0x11b)][_0x50d843(0xf7)](conn),conn[_0x50d843(0xdd)]=_0x55cd5b[_0x50d843(0xb1)][_0x50d843(0xf7)](conn),conn[_0x50d843(0xaa)]=_0x1a66a4[_0x50d843(0xf7)](conn),conn[_0x50d843(0xf5)]=_0x395580[_0x50d843(0xf7)](conn),conn['ev']['on']('messages.upsert',conn[_0x50d843(0xa8)]),conn['ev']['on'](_0x50d843(0x124),conn['participantsUpdate']),conn['ev']['on'](_0x50d843(0xad),conn['onDelete']),conn['ev']['on'](_0x50d843(0x12f),conn[_0x50d843(0xaa)]),conn['ev']['on'](_0x50d843(0xa3),conn['credsUpdate']),_0x598870=![],!![];};let _0x433636=_0x5159f3['join'](__dirname,_0x2cb1b2(0x116)),_0x5df2d7=_0x2f24bb=>/\.js$/[_0x2cb1b2(0x11e)](_0x2f24bb);global['plugins']={};for(let _0x226f12 of _0x1ff47b['readdirSync'](_0x433636)[_0x2cb1b2(0xfe)](_0x5df2d7)){try{global[_0x2cb1b2(0x116)][_0x226f12]=require(_0x5159f3[_0x2cb1b2(0xfc)](_0x433636,_0x226f12));}catch(_0x33ceaf){conn[_0x2cb1b2(0xf4)][_0x2cb1b2(0xce)](_0x33ceaf),delete global['plugins'][_0x226f12];}}console[_0x2cb1b2(0x113)](Object[_0x2cb1b2(0x111)](global[_0x2cb1b2(0x116)])),global[_0x2cb1b2(0xc6)]=(_0x6bf450,_0x1a46aa)=>{const _0x1a6eec=_0x2cb1b2;if(_0x5df2d7(_0x1a46aa)){let _0x23590d=_0x5159f3[_0x1a6eec(0xfc)](_0x433636,_0x1a46aa);if(_0x23590d in require[_0x1a6eec(0xe1)]){delete require[_0x1a6eec(0xe1)][_0x23590d];if(_0x1ff47b[_0x1a6eec(0x10a)](_0x23590d))conn[_0x1a6eec(0xf4)]['info'](_0x1a6eec(0xc1)+_0x1a46aa+'\x27');else return conn[_0x1a6eec(0xf4)][_0x1a6eec(0xf1)](_0x1a6eec(0xc9)+_0x1a46aa+'\x27'),delete global['plugins'][_0x1a46aa];}else conn[_0x1a6eec(0xf4)]['info'](_0x1a6eec(0xa6)+_0x1a46aa+'\x27');let _0x3a25a3=_0x2491b6(_0x1ff47b[_0x1a6eec(0xb5)](_0x23590d),_0x1a46aa);if(_0x3a25a3)conn[_0x1a6eec(0xf4)][_0x1a6eec(0xce)](_0x1a6eec(0xa2)+_0x1a46aa+'\x27\x0a'+_0x3a25a3);else try{global['plugins'][_0x1a46aa]=require(_0x23590d);}catch(_0x4de7de){conn[_0x1a6eec(0xf4)][_0x1a6eec(0xce)](_0x4de7de);}finally{global[_0x1a6eec(0x116)]=Object[_0x1a6eec(0xca)](Object['entries'](global[_0x1a6eec(0x116)])[_0x1a6eec(0x12e)](([_0x4e4800],[_0x11fa43])=>_0x4e4800[_0x1a6eec(0x9f)](_0x11fa43)));}}},Object[_0x2cb1b2(0x12d)](global['reload']),_0x1ff47b[_0x2cb1b2(0x10c)](_0x5159f3[_0x2cb1b2(0xfc)](__dirname,'plugins'),global[_0x2cb1b2(0xc6)]),global[_0x2cb1b2(0xa5)]();async function _0xe494f0(){const _0x3d6a47=_0x2cb1b2;let _0x310651=await Promise['all']([_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0xa7)),_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0xef)),_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0xa7),[_0x3d6a47(0xa9),_0x3d6a47(0xed),_0x3d6a47(0xce),_0x3d6a47(0xda),_0x3d6a47(0xc5),'-frames:v','1','-f',_0x3d6a47(0xb0),'-']),_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0xac)),_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0x104)),_0x16ecc1[_0x3d6a47(0xc0)]('gm'),_0x16ecc1[_0x3d6a47(0xc0)](_0x3d6a47(0xf8),[_0x3d6a47(0xf6)])][_0x3d6a47(0xdf)](_0x3b2537=>{const _0x59da54=_0x3d6a47;return Promise[_0x59da54(0xeb)]([new Promise(_0x392e46=>{const _0x599de6=_0x59da54;_0x3b2537['on'](_0x599de6(0xb3),_0x4a1816=>{_0x392e46(_0x4a1816!==0x7f);});}),new Promise(_0x50d1ad=>{const _0xb09597=_0x59da54;_0x3b2537['on'](_0xb09597(0xce),_0x1adb18=>_0x50d1ad(![]));})]);})),[_0xd1df12,_0x2266ae,_0x22ffac,_0x468044,_0x1bb945,_0x146fde,_0x5b3038]=_0x310651;console[_0x3d6a47(0x113)](_0x310651);let _0x3c663a=global[_0x3d6a47(0x107)]={'ffmpeg':_0xd1df12,'ffprobe':_0x2266ae,'ffmpegWebp':_0x22ffac,'convert':_0x468044,'magick':_0x1bb945,'gm':_0x146fde,'find':_0x5b3038};Object[_0x3d6a47(0x12d)](global[_0x3d6a47(0x107)]);if(!_0x3c663a['ffmpeg'])conn[_0x3d6a47(0xf4)][_0x3d6a47(0xf1)]('Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)');if(_0x3c663a[_0x3d6a47(0xa7)]&&!_0x3c663a['ffmpegWebp'])conn[_0x3d6a47(0xf4)]['warn'](_0x3d6a47(0x112));if(!_0x3c663a['convert']&&!_0x3c663a['magick']&&!_0x3c663a['gm'])conn[_0x3d6a47(0xf4)][_0x3d6a47(0xf1)]('Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)');}_0xe494f0()[_0x2cb1b2(0xc8)](()=>conn[_0x2cb1b2(0xf4)][_0x2cb1b2(0xa1)](_0x2cb1b2(0xb8)))[_0x2cb1b2(0x120)]('done');})()));function _0x2f76(_0x24cb70,_0x4c38b1){const _0x37e5c3=_0x37e5();return _0x2f76=function(_0x2f76c9,_0x2b2094){_0x2f76c9=_0x2f76c9-0x9f;let _0xc51154=_0x37e5c3[_0x2f76c9];return _0xc51154;},_0x2f76(_0x24cb70,_0x4c38b1);}function _0x37e5(){const _0x345b5d=['-type','./sessions/creds.json','promote','exitProcess','magick','\x5c$&','Invalid\x20phone\x20number.\x20Please\x20enter\x20a\x20valid\x20number.','support','chalk','--\x20Please\x20wait,\x20generating\x20code...\x20--','existsSync','object','watch','CONNECTING','connect','38094fXNupy','./lib/lowdb','keys','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','log','pino','magenta','plugins','conn','prefix','data','argv','participantsUpdate','timestamp','listMessage','test','3747820FWLhDq','catch','registered','743613AnAhfP','@adiwajshing/baileys','group-participants.update','tmp','lodash','906ipmryx','child_process',',\x20isLatest:\x20','PORT','readline','--\x20using\x20WA\x20v','freeze','sort','connection.update','bye','localeCompare','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','info','syntax\x20error\x20while\x20loading\x20\x27','creds.update','off','reloadHandler','requiring\x20new\x20plugin\x20\x27','ffmpeg','handler','-hide_banner','connectionUpdate','entries','convert','message.delete','loadDatabase','3LxDEkn','webp','delete','path','close','makeWASocket','readFileSync','@user\x20sekarang\x20admin!','668532DMPWFe','Quick\x20Test\x20Done','18599jkXyXY','Chrome','sessions','messages.upsert','DATABASE','10MEErgq','chain','spawn','re\x20-\x20require\x20plugin\x20\x27','isArray','bgGreen','requestPairingCode','color','reload','3118908eroTlC','then','deleted\x20plugin\x20\x27','fromEntries','11NpTwdv','isInit','yellow','error','tmpdir','325260NLqlfG','--code','json','--pairing','./lib/mongoDB','Ubuntu','stdin','APIKeys','env','20.0.04','-filter_complex','read','output','onDelete','white','map','@user\x20sekarang\x20bukan\x20admin!','cache','black','red','authState','resolve','APIs','forEach','includes','length','-amin','race','exit','-loglevel','parse','ffprobe','database.json','warn','16FuaVqg','question','logger','credsUpdate','--version','bind','find','READ','buttonsMessage','\x20--','join','write','filter','syntax-error'];_0x37e5=function(){return _0x345b5d;};return _0x37e5();}