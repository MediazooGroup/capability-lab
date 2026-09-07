'use client';
import {useEffect,useState,type ReactNode} from 'react';
export function ClientReady({children}:{children:ReactNode}){const[ready,setReady]=useState(false);useEffect(()=>{setReady(true)},[]);return <div id="main" inert={!ready} data-ready={ready?'true':'false'}>{children}<noscript>This interactive workshop needs JavaScript. Download the plain text brain and skills from github.com/MediazooGroup/capability-lab.</noscript></div>}
