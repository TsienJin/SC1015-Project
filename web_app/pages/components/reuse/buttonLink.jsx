import React from 'react'

import Link from 'next/link'

export default function ButtonLink({ text="Button", link="/" }) {
  return (
    <Link href='https://github.com/TsienJin/SC1015-Project'>
      <a className='bg-white px-2 py-1 text-xl font-normal text-blue-600 rounded-lg'>
        {text}    
      </a>
    </Link>
  )
}
