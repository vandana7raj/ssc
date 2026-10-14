import type {Metadata} from 'next';import './globals.css';import Header from '@/components/Header';import Footer from '@/components/Footer';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';
export const metadata:Metadata={title:{default:'PrepWise | SSC Exam Preparation',template:'%s | PrepWise'},description:'Prepare smarter for SSC CGL, CHSL, MTS, CPO and GD with structured lessons, practice questions and mock tests.',metadataBase:new URL(siteUrl),openGraph:{title:'PrepWise | SSC Exam Preparation',description:'Structured SSC lessons and practice for every learner.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
