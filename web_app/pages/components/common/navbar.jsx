import React from 'react'

import ButtonLink from '../reuse/buttonLink'

export default function Navbar() {
  return (
      <nav className='bg-blue-600 w-full py-3 px-6
                    flex justify-between items-center
                        '>
        <a href="/" className='text-white font-bold text-xl'>Stress-o-Meter</a>
        <ButtonLink text={"GitHub"} />
      </nav>
  )
}
