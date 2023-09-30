import Header from '../../components/Header'
import Layout from '../../components/Layout'
import './globals.css'
import type { Metadata } from 'next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../components/Footer';


export const metadata: Metadata = {
  title: {
    template: "shopping_mart",
    default: "Shopping Mart - A place for all"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont w-full bg-main-bg text-darkText'>
        <Layout>
        <Header/>
        {children}
        <Footer/>
        </Layout>
      </body>
    </html>
  )
}
