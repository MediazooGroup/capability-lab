'use client';
import {useEffect,useRef,useState} from 'react';
import {Excalidraw,exportToSvg,serializeAsJSON,viewportCoordsToSceneCoords} from '@excalidraw/excalidraw';
import type {ExcalidrawImperativeAPI} from '@excalidraw/excalidraw/types';
import type {ExcalidrawElement} from '@excalidraw/excalidraw/element/types';
import '@excalidraw/excalidraw/index.css';
import scene from '@/lib/board-scene.json';
import firstDraft from '@/lib/board-draft.json';

export type CanvasActions={save:()=>void;svg:()=>void};
function saveFile(name:string,value:string,type:string){const url=URL.createObjectURL(new Blob([value],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
export default function ExcalidrawCanvas({topic,onTopic,editing=false,draft=false,onReady}:{topic:string|null;onTopic:(id:string)=>void;editing?:boolean;draft?:boolean;onReady?:(actions:CanvasActions)=>void}){
 const[api,setApi]=useState<ExcalidrawImperativeAPI|null>(null);const container=useRef<HTMLDivElement>(null);
 const data=draft?firstDraft:scene;const down=useRef<{x:number;y:number}|null>(null);
 useEffect(()=>{if(!api)return;api.updateScene({elements:data.elements as unknown as ExcalidrawElement[]});},[api,data]);
 useEffect(()=>{if(!api)return;const fit=()=>{api.refresh();const all=api.getSceneElements();const targets=topic?all.filter(e=>e.id===topic||e.id.startsWith(topic+'-')):all;api.scrollToContent(targets.length?targets:all,{fitToViewport:true,animate:!matchMedia('(prefers-reduced-motion: reduce)').matches,viewportZoomFactor:.86})};const tick=setTimeout(fit,80);const observer=new ResizeObserver(()=>requestAnimationFrame(fit));if(container.current)observer.observe(container.current);return()=>{clearTimeout(tick);observer.disconnect()}},[api,topic,draft]);
 useEffect(()=>{if(!api||!onReady)return;onReady({save:()=>saveFile('my-learning-board.excalidraw',serializeAsJSON(api.getSceneElements(),api.getAppState(),api.getFiles(),'local'),'application/json'),svg:()=>{void exportToSvg({elements:api.getSceneElements(),appState:{...api.getAppState(),exportBackground:true,exportWithDarkMode:false},files:api.getFiles()}).then((svg:SVGSVGElement)=>saveFile('learning-board.svg',svg.outerHTML,'image/svg+xml'))}})},[api,onReady]);
 return <div ref={container} className="excalidraw-host" data-canvas-ready={!!api} onPointerDownCapture={e=>{down.current={x:e.clientX,y:e.clientY}}} onPointerUpCapture={e=>{const start=down.current;down.current=null;if(!api||editing||!start||!(e.target instanceof HTMLCanvasElement)||Math.hypot(e.clientX-start.x,e.clientY-start.y)>7)return;const point=viewportCoordsToSceneCoords({clientX:e.clientX,clientY:e.clientY},api.getAppState());const target=api.getSceneElements().find(el=>el.type==='rectangle'&&scene.elements.some(original=>original.id===el.id)&&point.x>=el.x&&point.x<=el.x+el.width&&point.y>=el.y&&point.y<=el.y+el.height);if(target)onTopic(target.id)}}><Excalidraw initialData={{elements:data.elements as unknown as ExcalidrawElement[],appState:{viewBackgroundColor:'#f7f9fc',currentItemFontFamily:2},scrollToContent:true}} excalidrawAPI={setApi} viewModeEnabled={!editing} zenModeEnabled={!editing} theme="light" handleKeyboardGlobally={false} autoFocus={false} UIOptions={{canvasActions:{loadScene:false,saveToActiveFile:false,export:false,saveAsImage:false,changeViewBackgroundColor:false,toggleTheme:false}}} onLinkOpen={(element,event)=>{const id=element.link?.split('#')[1];if(id&&scene.elements.some(e=>e.id===id)){event.preventDefault();onTopic(id)}}}/></div>
}
