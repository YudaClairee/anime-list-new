'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchInput = () => {

  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${keyword}`);
  }

  
  return (
    <div>
      <form onSubmit={handleSearch} className='flex gap-2 bg-white p-2 rounded-md'>
        <input type="text" placeholder="Search" className="w-full p-2 rounded-md" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button className="bg-indigo-400 text-white p-2 rounded-md">
          <Search />
        </button>
      </form>
    </div>
  )
}

export default SearchInput