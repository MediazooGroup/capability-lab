import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const target=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'app-source');
if(!fs.existsSync(path.join(target,'package.json')))throw new Error('Target must be the application source folder.');
const session=JSON.parse(fs.readFileSync(path.join(root,'second-brain/01-session/session.json'),'utf8'));
if(!Array.isArray(session.frames)||session.frames.reduce((t,f)=>t+f.seconds,0)!==1800)throw new Error('The scene plan must total 1,800 seconds.');
const files={};
function scan(dir){for(const e of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const rel=path.join(dir,e.name);if(e.isDirectory())scan(rel);else if(e.name.endsWith('.md'))files[rel.split(path.sep).join('/')]=fs.readFileSync(path.join(root,rel),'utf8')}}
scan('second-brain');scan('learning-brain');scan('skills');files['START-HERE.md']=fs.readFileSync(path.join(root,'START-HERE.md'),'utf8');
fs.mkdirSync(path.join(target,'lib'),{recursive:true});
fs.writeFileSync(path.join(target,'lib/session.json'),JSON.stringify(session,null,2)+'\n');
fs.writeFileSync(path.join(target,'lib/brain-files.json'),JSON.stringify(files,null,2)+'\n');
console.log(`Synced ${session.frames.length} scenes and ${Object.keys(files).length} public source files.`);

fs.copyFileSync(path.join(root,'learning-brain/board.json'),path.join(target,'lib/learning-board.json'));
