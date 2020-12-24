import Link from 'next/link'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/signin', label: 'Login' },
]

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Home
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
                <Link href={href}>
                    <a href={href} className="no-underline btn-blue">
                        {label}
                    </a>
                </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}