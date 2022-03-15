import React from 'react'






function StressBar({ stressLvl=1 }){

    if(stressLvl<1){
        stressLvl=1
    }


    return(
        <div className='w-full flex flex-col'>
            <div className='flex flex-row w-full justify-between gap-x-1'>
                <div className={`w-full p-2 border border-gray-500 rounded ${0>stressLvl?"bg-white":"bg-yellow-100"}`}></div>
                <div className={`w-full p-2 border border-gray-500 rounded ${1>=stressLvl?"bg-white":"bg-yellow-200"}`}></div>
                <div className={`w-full p-2 border border-gray-500 rounded ${2>=stressLvl?"bg-white":"bg-yellow-300"}`}></div>
                <div className={`w-full p-2 border border-gray-500 rounded ${3>=stressLvl?"bg-white":"bg-yellow-400"}`}></div>
                <div className={`w-full p-2 border border-gray-500 rounded ${4>=stressLvl?"bg-white":"bg-yellow-500"}`}></div>
            </div>
            <div className='flex flex-row w-full justify-between'>
                <span className="text-xs font-normal text-gray-500">Low</span>
                <span className="text-xs font-normal text-gray-500">High</span>
            </div>
        </div>
    )
}


function StressText({ stressLvl=1 }){

    const text = {
        1: 'Little to no stress.',
        2: 'Healthy amount of stress.',
        3: 'Moderate level of stress.',
        4: 'Noticably stressed stressed.',
        5: 'You are very stressed, it will be advisable to find a way to manage your stress.',

    }


    return(
        <p>{text[stressLvl]}</p>
    )
}



export default function StressIndicator({ stressLvl=1 }) {
  return (
    <div className="flex flex-col w-full">
        <StressBar stressLvl={stressLvl}/>
        <span className='font-bold mt-2'>You have a stress level of {stressLvl}.</span>
        <StressText stressLvl={stressLvl} />
    </div>
  )
}
