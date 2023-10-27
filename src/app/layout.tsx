import { Providers } from '~/components/Providers'
import { cn } from '~/server/utils'
import '~/app/styles/globals.css'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({subsets: ['latin']})

export const metadata = {
  title: 'Toast',
  description: 'A Journal App with good UI!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang='en' className={`class`} >
      <body className={cn(playfairDisplay.className,
        'bg-[#eaebe3] text-slate-900 dark:bg-[#23232b] dark:text-slate-100 min-h-screen h-screen max-w-screen overflow-x-hidden'
        )}
        >
          <Providers>
              {children}
          </Providers>
      </body>
    </html>
  )
}
