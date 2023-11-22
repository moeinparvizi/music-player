import { Figtree } from 'next/font/google'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'spotify clone',
  description: 'listen to music!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        { children }
      </body>
    </html>
  )
}
