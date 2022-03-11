import React from 'react'
import { useState, useEffect, useRef } from 'react'




function Chevron({ method, state }){

    const [localState, setLocalState] = useState(state)

    const updateParent = () => {
        setLocalState(!localState)
        method(localState)
    }

    return(
        <div className='absolute top-4 right-4'>
            <div onClick={()=>{updateParent()}} className={`transform-all duration-150 ${localState?"rotate-45 opacity-30":""}`}>
                <img src="../../../img/icons/plus.svg" className=''/>
            </div>
        </div>
    )
}



export default function FormSection({ children='', title='Title', description='' ,expand=true, collapseable=true }) {

    const ref = useRef(expand)

    const [expandState, setExpand] = useState(expand)

    const toggleExpand = () => {
        setExpand(!expandState)
    }

  return (
    <div className='w-full bg-white rounded-lg p-4 shadow relative transition-all duration-150'>
        {collapseable?<Chevron method={toggleExpand} state={ref.current}/>:""}
        <div className='w-full flex flex-col mb-2'>
            <h3 className='text-2xl font-bold text-black'>{title}</h3>
            {description.length>0?<p className='mt-2 font-light'>{description}</p>:""}
        </div>
        <div className={`overflow-hidden transition-all ${expandState?"max-h-screen duration-1000":"max-h-0 duration-150"}`}>
            {children}
        </div>
    </div>
  )
}
