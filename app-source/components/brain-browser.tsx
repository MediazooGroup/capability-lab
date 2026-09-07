'use client';
import {useState} from 'react';
import {FileText,Folder,ArrowUpRight,Download} from 'lucide-react';
import {Tabs,TabsList,TabsTrigger} from '@/components/ui/tabs';
import files from '@/lib/brain-files.json';
import {REPO_URL} from '@/lib/model';
const sourceFiles=files as Record<string,string>;
export function BrainBrowser({compact=false}:{compact?:boolean}){
 const[collection,setCollection]=useState('learning-brain'),[selected,setSelected]=useState('learning-brain/00-brief.md');
 const paths=Object.keys(sourceFiles).filter(p=>p.startsWith(collection+'/')).sort();
 const content=sourceFiles[selected]||'';
 return <section className={`brain-browser ${compact?'compact-brain':''}`}><Tabs value={collection} onValueChange={v=>{setCollection(String(v));setSelected(v==='learning-brain'?'learning-brain/00-brief.md':'second-brain/01-session/brief.md')}}><TabsList className="brain-tabs"><TabsTrigger value="learning-brain">The learning board’s brain</TabsTrigger><TabsTrigger value="second-brain">This session’s brain</TabsTrigger></TabsList></Tabs><div className="brain-workspace"><nav aria-label="Brain files"><p><Folder size={17}/>{collection}/</p>{paths.map(p=><button key={p} onClick={()=>setSelected(p)} aria-current={p===selected?'page':undefined}><FileText size={16}/>{p.slice(collection.length+1).replace('.md','')}</button>)}</nav><article className="brain-document"><div className="brain-document-bar"><span>{selected}</span><a href={REPO_URL+'/blob/main/'+selected} target="_blank" rel="noreferrer" aria-label="Open selected file on GitHub"><ArrowUpRight size={18}/></a></div><div className="brain-prose" tabIndex={0}>{content.split('\n').map((line,i)=>line.startsWith('# ')?<h2 key={i}>{line.slice(2)}</h2>:line.startsWith('## ')?<h3 key={i}>{line.slice(3)}</h3>:line.startsWith('### ')?<h4 key={i}>{line.slice(4)}</h4>:line.trim()?<p key={i}>{line}</p>:null)}</div></article></div>{!compact&&<div className="brain-bottom"><p>These are the actual source files. Download them, change the subject and build your own learning asset.</p><a className="button" href={REPO_URL+'/archive/refs/heads/main.zip'}><Download size={18}/>Download the brain & skill</a></div>}</section>
}
