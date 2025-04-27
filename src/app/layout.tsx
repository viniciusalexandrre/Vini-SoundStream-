import type { Metadata } from 'next'
import '../style/globals.scss'

export const metadata: Metadata = {
  title: 'soundstream',
  description: 'Aplicativo de música',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
