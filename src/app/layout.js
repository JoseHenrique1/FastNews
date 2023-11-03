import { Inter } from 'next/font/google'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FastNews',
  description: 'The best current news site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
