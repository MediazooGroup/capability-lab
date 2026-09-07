import {SiteHeader,SiteFooter} from '@/components/site-shell';
import {BrainBrowser} from '@/components/brain-browser';
export default function Brain(){return <><SiteHeader/><main className="brain-main"><p className="eyebrow">THE INPUT / REAL FILES, READY TO REUSE</p><h1>Open the brain.<br/><em>See what it knows.</em></h1><p className="brain-lead">The learning brief, audience, knowledge and quality bar behind the board. Plus the working brain behind this session.</p><BrainBrowser/></main><SiteFooter/></>}
