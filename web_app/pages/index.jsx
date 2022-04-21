import React from 'react'
import { useState, useEffect } from 'react'


import Container from './components/reuse/container'
import CTAtext from './components/reuse/ctaText'
import FieldText from './components/reuse/field'
import FormSection from './components/reuse/formSection'
import ImgContainer from './components/reuse/imgContainer'
import StressIndicator from './components/reuse/home/stressIndicator'





function calcRes({data={}}){

  const sum=0

  for(const item in data){
    sum+=data[item]

  }

  return sum
}


function calcStressLvl({snoreRate, respRate, bodyTemp, limbMove, bloodOxy, rem, sleepHour, heartRate}={}){
  const formula = {
    'b': 2.30958516,
    'snoreRate': 0.00967718*snoreRate,
    'respRate': 0.01734862*respRate,
    'bodyTemp': -0.29588161*bodyTemp,
    'limbMove': -0.07744968*limbMove,
    'bloodOxy': 0.04731092*bloodOxy,
    'rem': 0.03202785*rem,
    'sleepHour': -0.11154598*sleepHour,
    'heartRate': 0.04337155*heartRate,
  }


  return(calcRes({data:formula}))

}


function calcSnoreRate({sleepHour, bodyTemp, bloodOxy, heartRate} = {}){
  const formula = {
    'b': 8.18795405,
    'sleepHour': -2.0357379*sleepHour,
    'bodyTemp': 5.54741098*bodyTemp,
    'bloodOxy': 2.35046571*bloodOxy,
    'heartRate': 1.50806063*heartRate,
  }
  return (formula.sleepHour + formula.bodyTemp + formula.bloodOxy + formula.heartRate + formula.b)
}

function calcRespRate({sleepHour, bodyTemp, bloodOxy, heartRate} = {}){
  const formula = {
    'b': -4,
    'sleepHour': ((-9.71025912)**(-17))*sleepHour,
    'bodyTemp': (2.16493490**(-16))*bodyTemp,
    'bloodOxy': ((-1.23512311)**(-15))*bloodOxy,
    'heartRate': (4.00000000**(-1))*heartRate,
  }
  return (formula.sleepHour + formula.bodyTemp + formula.bloodOxy + formula.heartRate + formula.b)
}

function calcLimbMove({sleepHour, bodyTemp, bloodOxy, heartRate} = {}){
  const formula = {
    'b': 4.14328878,
    'sleepHour': -0.1426558*sleepHour,
    'bodyTemp': 1.57034965*bodyTemp,
    'bloodOxy': -0.77681288*bloodOxy,
    'heartRate': 0.39773008*heartRate,
  }
  return (formula.sleepHour + formula.bodyTemp + formula.bloodOxy + formula.heartRate + formula.b)
}

function calcRem({sleepHour, bodyTemp, bloodOxy, heartRate} = {}){
  const formula = {
    'b': 111.92770076,
    'sleepHour': -2.28738406*sleepHour,
    'bodyTemp': 13.55333375*bodyTemp,
    'bloodOxy': -5.81145234*bloodOxy,
    'heartRate': 0.85946461*heartRate,
  }
  return (formula.sleepHour + formula.bodyTemp + formula.bloodOxy + formula.heartRate + formula.b)
}






export default function Home(){

  const [stressLvl, setStressLvl] = useState(NaN)

  const [heartRate, setHeartRate] = useState(NaN)
  const [sleepHour, setSleepHour] = useState(NaN)
  const [bodyTemp, setBodyTemp] = useState(NaN)
  const [bloodOxy, setBloodOxy] = useState(NaN)

  const [snoreRate, setSnoreRate] = useState(NaN)
  const [respRate, setRespRate] = useState(NaN)
  const [limbMove, setLimbMove] = useState(NaN)
  const [rem, setRem] = useState(NaN)

  const updateHeartRate = val => {
    setHeartRate(val)
  }

  const updateSleepHour = val => {
    setSleepHour(val)
  }

  const updateBodyTemp = val => {
    setBodyTemp(val)
  }

  const updateBloodOxy = val => {
    setBloodOxy(val)
  }

  const updateSnoreRate = val => {
    setSnoreRate(val)
  }

  const updateRespRate = val => {
    setRespRate(val)
  }

  const updateLimbMove = val => {
    setLimbMove(val)
  }

  const updateRem = val => {
    setRem(val)
  }

  useEffect(()=>{
    // console.log(heartRate, sleepHour, bodyTemp, bloodOxy)

    if(heartRate && sleepHour && bodyTemp && bloodOxy){

      if(!snoreRate){
        setSnoreRate(calcSnoreRate({sleepHour:sleepHour, heartRate:heartRate, bodyTemp:bodyTemp, bloodOxy:bloodOxy}))
      }

      if(!respRate){
        setRespRate(calcRespRate({sleepHour:sleepHour, heartRate:heartRate, bodyTemp:bodyTemp, bloodOxy:bloodOxy}))
      }

      if(!limbMove){
        setLimbMove(calcLimbMove({sleepHour:sleepHour, heartRate:heartRate, bodyTemp:bodyTemp, bloodOxy:bloodOxy}))
      }

      if(!rem){
        setRem(calcRem({sleepHour:sleepHour, heartRate:heartRate, bodyTemp:bodyTemp, bloodOxy:bloodOxy}))
      }
    }

  }, [heartRate, sleepHour, bodyTemp, bloodOxy])


  useEffect(()=>{

    if(heartRate && sleepHour && bodyTemp && bloodOxy && snoreRate && respRate && limbMove && rem){
      setStressLvl(Math.round(calcStressLvl({snoreRate:snoreRate, respRate:respRate, bodyTemp:bodyTemp, limbMove:limbMove, bloodOxy:bloodOxy, rem:rem, sleepHour:sleepHour, heartRate:heartRate})))
    }

  },[heartRate, sleepHour, bodyTemp, bloodOxy, snoreRate, respRate, limbMove, rem] )


  useEffect(()=>{
    // console.log("Stress level: ", stressLvl)
  }, [stressLvl])


  return(
    <div className='w-full min-h-screen bg-gradient-to-t from-blue-200 via-white to-white bg-fixed'>
      <Container>
        <ImgContainer>
          <img src='/img/index/img1.svg' alt="Am I stressed?"/>
        </ImgContainer>
        <CTAtext title="How stressed are you?" text="Using a Machine Learning model, we try and predict your stress level on a range of 1 to 5, where 5 is the highest level of stress, based on indicators from when you sleep." btnText='Learn more' link='/'/>
        <FormSection title="Basic Information" collapseable={false}>
          <FieldText title="Resting Heart Rate" type='number' required={true} method={updateHeartRate}/>
          <FieldText title="Hours of Sleep" type='number' required={true} method={updateSleepHour}/>
          <FieldText title="Resting Body Temperature (ºC)" type='number' required={true} method={updateBodyTemp}/>
          <FieldText title="Blood Oxygen Saturation" type='number' required={true} method={updateBloodOxy}/>
        </FormSection>
        <FormSection title="Advanced" description='We use Machine Learning to predict harder to get data.' collapseable={true} expand={false}>
          <FieldText title="Snoring Rate" type='number' required={false} method={updateSnoreRate}/>
          <FieldText title="Respiration Rate" type='number' required={false} method={updateRespRate}/>
          <FieldText title="Limb Movement" type='number' required={false} method={updateLimbMove}/>
          <FieldText title="Rapid Eye Movement" type='number' required={false} method={updateRem}/>
        </FormSection>
        <FormSection title="Stress Meter" expand={true} collapseable={false}>
          <StressIndicator stressLvl={stressLvl}/>
        </FormSection> 
      </Container>
    </div>
  )
}
