import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blue-600 flex flex-col justify-center items-center gap-y-px py-4
                    text-white
                    '>
        <span>Visit our <a href="/" className='underline'>GitHub</a></span>
        <span>© 2022, Ong Tsien Jin, Xin Han, Yu Ze</span>
    </div>
  )
}
