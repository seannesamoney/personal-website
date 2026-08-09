import './globals.css'

export const metadata = {
  title: 'Sean Nesamoney',
  description: 'Sean Nesamoney — design, technology, health, startups, and music.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
