import React from 'react'






function StressBar({ stressLvl=1 }){


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

function StressIndicator_({ stressLvl=1}){
return (
    <div className="flex flex-col w-full">
        <StressBar stressLvl={stressLvl}/>
        <span className='font-bold mt-2'>You have a stress level of {stressLvl}.</span>
        <StressText stressLvl={stressLvl} />
    </div>
    )
}

function InputMissing(){
    return(
        <div className='w-full flex flex-row justify-center items-center gap-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Please fill in the required fields first!</span>
        </div>
    )
}

export default function StressIndicator({ stressLvl=1 }) {

    if(stressLvl<1){
        stressLvl=1
    }

    if(stressLvl>5){
        stressLvl=5
    }
  
    if(stressLvl){
        return(<StressIndicator_ stressLvl={stressLvl} />)
    }

    return(
        <InputMissing />
    )
}
