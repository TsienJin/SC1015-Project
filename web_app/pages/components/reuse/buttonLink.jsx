import React from 'react'

export default function ButtonLink({ text="Button", link="/" }) {
  return (
    <a href={link} className='bg-white px-2 py-1 text-xl font-normal text-blue-600 rounded-lg'>
        {text}    
    </a>
  )
}
