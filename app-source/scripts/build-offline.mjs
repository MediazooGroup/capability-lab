import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
execFileSync('npx',['vite','build','--config','vite.offline.config.ts'],{stdio:'inherit'});
let html=fs.readFileSync('offline-dist/index.html','utf8');
html=html.replace(/<script[^>]*src="([^"]+)"[^>]*><\/script>/g,(_,src)=>{let js=fs.readFileSync(path.join('offline-dist',src),'utf8');for(const [file,mime] of [['brand/finer-vision.svg','image/svg+xml'],['brand/capability-loop.png','image/png'],['join-qr.svg','image/svg+xml'],['qr-board.svg','image/svg+xml'],['qr-brain.svg','image/svg+xml'],['qr-github.svg','image/svg+xml'],['board-preview.svg','image/svg+xml'],['brand/john-gordon.png','image/png']]){const data=`data:${mime};base64,${fs.readFileSync('public/'+file).toString('base64')}`;js=js.replaceAll(JSON.stringify('/'+file),JSON.stringify(data)).replaceAll('`/'+file+'`',JSON.stringify(data))}return `<script type="module">${js.replaceAll('</script','<\\/script')}</script>`});
html=html.replace(/<link[^>]*href="([^"]+\.css)"[^>]*>/g,(_,src)=>`<style>${fs.readFileSync(path.join('offline-dist',src),'utf8')}</style>`);
html=html.replaceAll("'/excalidraw-assets/'","'./excalidraw-assets/'");
fs.writeFileSync('public/offline-presentation.html',html);console.log('Offline presentation:',Math.round(Buffer.byteLength(html)/1024),'KB');
