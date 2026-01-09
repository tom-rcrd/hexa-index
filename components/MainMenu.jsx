'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useFavoris } from '@/contexts/FavorisContext'
import { Heart } from 'lucide-react'

export default function MainMenu() {
  const pathname = usePathname()
  const { count } = useFavoris()

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`

  return (
    <nav className="flex gap-2 flex-wrap">
      <Link href="/" className={linkClass('/')}>
        Liste
      </Link>

      <Link href="/carte" className={linkClass('/carte')}>
        Carte
      </Link>

      <Link href="/random" className={linkClass('/random')}>
        Lieu aléatoire
      </Link>

      <Link href="/favoris" className={linkClass('/favoris')}>
        <span className="flex items-center gap-2">
          <Heart size={16} className={pathname === '/favoris' ? 'fill-white' : ''} />
          Favoris
          {count > 0 && (
            <span className={`
              px-2 py-0.5 rounded-full text-xs font-bold
              ${pathname === '/favoris' 
                ? 'bg-white text-blue-600' 
                : 'bg-red-500 text-white'
              }
            `}>
              {count}
            </span>
          )}
        </span>
      </Link>

      <Link href="/contribuer" className={linkClass('/contribuer')}>
        Contribuer
      </Link>
    </nav>
  )
}