import React from 'react'
import SearchInput from './searchInput'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 w-full sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            AnimeList
          </Link>
        </div>
        <div className="flex-1 max-w-md ml-8">
          <SearchInput />
        </div>
      </div>
    </nav>
  )
}

export default Navbar