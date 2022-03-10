import React from 'react'

import ButtonLink from './buttonLink'

export default function CTAtext({ title='', text='', btnText='', link='', children}) {
  return (
    <div className='bg-blue-600 p-4 rounded-lg shadow shadow-blue-600'>
        <h3 className='text-2xl font-bold text-white mb-4'>{title}</h3>
        <p className='text-lg font-light text-white mb-8'>{text}</p>
        <div className='w-full flex justify-end mt-2'>
            <ButtonLink text={btnText} link={link}/>
        </div>
    </div>
  )
}
