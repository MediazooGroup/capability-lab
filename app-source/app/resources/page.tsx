import {SiteHeader,SiteFooter} from '@/components/site-shell';
import {Kit,CourseLinks} from '@/components/kit';
import {TakeawayLinks,SimpleLaunch} from '@/components/takeaway-links';
export default function Resources(){return <><SiteHeader/><main className="resources-main"><section className="resource-opening"><p className="eyebrow">THE BOARD. THE BRAIN. THE BUILD SKILL.</p><h1>Everything you need.<br/><em>Yours to make your own.</em></h1><TakeawayLinks/></section><section className="resource-launch"><h2>Download it. Get it live.</h2><SimpleLaunch/></section><Kit/><CourseLinks/></main><SiteFooter/></>}
