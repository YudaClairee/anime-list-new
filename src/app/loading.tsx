import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center space-y-8">
        {/* Main Loading Animation */}
        <div className="relative flex items-center justify-center w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute w-20 h-20 border-4 border-white/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-orange-400 rounded-full"></div>
          </div>
          
          {/* Inner Ring */}
          <div className="absolute w-14 h-14 border-4 border-white/10 rounded-full animate-spin-reverse">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-b-yellow-400 rounded-full"></div>
          </div>
          
          {/* Center Dot */}
          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white animate-pulse">
            Memuat...
          </h2>
          <p className="text-white/70 text-sm">
            Sedang mengambil data anime terbaru
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
