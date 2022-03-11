import React from 'react'
import { useState, useRef } from 'react'

export default function FieldText({title='Field', method=()=>{}, type="text", required=false}){

  const inputRef = useRef()

  return(
    <div className='w-full pt-8 mb-2'>
      <div className='relative rounded w-full group overflow-visible' onClick={()=>{inputRef.current.focus()}}>
        <input type={type} name={title} placeholder=' ' required={required} ref={inputRef}
            className='transition-all duration-150 w-full p-4 rounded peer
            outline-none border border-gray-500
            focus:border-blue-500
            '/>
        <label htmlFor={title} className='absolute transition-all duration-150
                                      text-lg text-gray-500
                                      peer-focus:text-blue-500
                                      peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                                      peer-focus:-top-7 peer-focus:left-1 peer-focus:text-lg
                                      -top-7 left-1
                                      '>{title}</label>
        <span className='absolute -top-6 right-1 text-gray-500 transition-all duration-150
                        peer-focus:text-blue-500
                        '>{required?"Required":""}</span>
      </div>
    </div>
  )
}
