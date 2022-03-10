import React from 'react'

export default function Container(props) {
  return (
    <div className="mx-4 py-8 flex flex-col justify-start items-center">
        <div className='md:max-w-md flex flex-col justify-start items-center space-y-4'>
            {props.children}
        </div>
    </div>
  )
}
