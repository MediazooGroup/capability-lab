import type { Metadata } from 'next';
import './globals.css';
import {ClientReady} from '@/components/client-ready';
export const metadata: Metadata = {title:'The Capability Lab | John Gordon',description:'Build your first reusable AI skill. An interactive companion to AI Leadership in L&D with John Gordon, Finer Vision.',icons:{icon:'/brand/finer-vision.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-GB" className="theme-fv-midnight dark"><body><a className="skip-link" href="#main">Skip to content</a><ClientReady>{children}</ClientReady></body></html>}
