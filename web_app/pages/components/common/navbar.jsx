import React from 'react'

import Link from 'next/link'

import ButtonLink from '../reuse/buttonLink'

export default function Navbar() {
  return (
      <nav className='bg-blue-600 w-full py-3 px-6
                    flex justify-between items-center
                        '>
        <Link href='/'><a className='text-white font-bold text-xl'>Stress-o-Meter</a></Link>
        <ButtonLink text={"GitHub"} />
      </nav>
  )
}
