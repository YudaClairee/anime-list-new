'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchInput = () => {

  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (keyword.trim() === '') {
      return;
    }

    e.preventDefault();
    router.push(`/search/${keyword}`);
  }

  
  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSearch} className='relative flex items-center'>
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Cari anime kesukaanmu..." 
            className="w-full py-3 pl-4 pr-12 text-gray-700 bg-white border-2 border-gray-200 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-300" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white p-2 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchInput