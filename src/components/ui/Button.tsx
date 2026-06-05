import Link from 'next/link'

export function Button({ children, href }: { children: React.ReactNode; href?: string }) {
  const className = 'inline-block rounded bg-sky-600 text-white px-4 py-2'
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  )
}
