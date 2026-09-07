import QRCode from 'qrcode';
const origin=process.argv[2];
if(!origin||!origin.startsWith('https://'))throw new Error('Pass your public HTTPS site origin.');
const site=new URL(origin);if(site.pathname!=='/')throw new Error('Pass the site origin without /board or another path.');
const repo=process.argv[3]||'https://github.com/MediazooGroup/capability-lab';
for(const [name,url] of Object.entries({board:site.origin+'/board',brain:site.origin+'/brain',github:repo})) await QRCode.toFile(`public/qr-${name}.svg`,url,{type:'svg',width:320,margin:2,errorCorrectionLevel:'M',color:{dark:'#102030',light:'#ffffff'}});
await QRCode.toFile('public/join-qr.svg',site.origin+'/board',{type:'svg',width:320,margin:2,errorCorrectionLevel:'M'});
console.log('Updated board, brain and GitHub QR codes.');
