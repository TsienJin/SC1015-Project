import React from 'react'

import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-blue-600 flex flex-col justify-center items-center gap-y-px py-4
                    text-white
                    '>
        <span>Visit our <Link href='https://github.com/TsienJin/SC1015-Project'><a className='underline'>GitHub</a></Link></span>
        <span>© 2022, Ong Tsien Jin, Xin Han, Yu Ze</span>
    </div>
  )
}
