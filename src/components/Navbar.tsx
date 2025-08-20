import React from 'react'
import SearchInput from './searchInput'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-indigo-400 w-full sticky top-0 left-0 right-0 z-50">
      <h1 className="text-2xl font-bold">Anime List</h1>
      <div className="flex gap-4">
        <SearchInput />
      </div>
    </div>
  )
}

export default Navbar