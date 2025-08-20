import Pagination from '@/components/Pagination';
import Link from 'next/link';
import React from 'react'

const Popular = async () => {

  return (
    <div className='space-y-8 py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl lg:text-3xl font-bold text-white mb-6 text-center'>🏆 Top Anime Keseluruhan</h2>
          <Link href="/" className='text-lg text-white/80 hover:text-white hover:underline'>Kembali ke Beranda</Link>
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Popular