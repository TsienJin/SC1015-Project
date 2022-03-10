import React from 'react'

export default function ImgContainer(props) {
  return (
    <div className='w-full flex justify-center items-center mb-6'>
        {props.children}
    </div>
  )
}
