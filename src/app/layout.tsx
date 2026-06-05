import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Cumpani',
  description: 'Cumpani — consensual adult social & entertainment platform (South Africa)'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <header className="border-b py-4">
            <div className="container mx-auto px-4">Cumpani</div>
          </header>
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t py-4 mt-8">
            <div className="container mx-auto px-4 text-sm text-slate-600">
              © {new Date().getFullYear()} Cumpani
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
