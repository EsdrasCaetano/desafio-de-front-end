import './globals.css'

export const metadata = {
  title: 'Desafio TDS',
  description: 'Desafio TDS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
