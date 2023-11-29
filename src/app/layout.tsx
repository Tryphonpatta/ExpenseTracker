import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MenuBar from './component/Menubar'
import SwitchTheme from './component/SwitchTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
      <html lang="en">
        <body className={inter.className}>
          <div className='h-full lg:h-screen flex flex-col'>
            <div className=' float-right self-end absolute m-2'>
            <SwitchTheme/>
            </div>
            <div className='w-full h-full max-sm:mb-20'>
              {children}
            </div>
            <div className=' top-[90%] flex justify-center w-screen fixed'>
              <MenuBar/>
            </div>
          </div>
        </body>
      </html>
  )
}
