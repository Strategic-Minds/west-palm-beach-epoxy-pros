import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'West Palm Beach Epoxy Pros | Premium Epoxy Flooring',
  description: "West Palm Beach's most trusted epoxy flooring contractor. Professional garage floor epoxy, commercial floors, and decorative concrete. Get a free quote today.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif", background: '#0a0a0f', color: '#f1f5f9' }}>
        {children}
      </body>
    </html>
  )
}
