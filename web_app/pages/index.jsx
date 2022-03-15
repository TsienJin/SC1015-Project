import React from 'react'
import { useState, useEffect } from 'react'


import Container from './components/reuse/container'
import CTAtext from './components/reuse/ctaText'
import FieldText from './components/reuse/field'
import FormSection from './components/reuse/formSection'
import ImgContainer from './components/reuse/imgContainer'
import StressIndicator from './components/reuse/home/stressIndicator'



function snoreRate(sleepHour, bodyTemp, bloodOxy, heartRate){

  const formula = {
    'b': 18.64486395,
    'sleepHour': -1.93603405*sleepHour,
    'bodyTemp': 5.74601578*bodyTemp,
    'bloodOxy': 2.5387048*bloodOxy,
    'heartRate': 1.5012626*heartRate,
  }

  return (formula.sleepHour + formula.bodyTemp + formula.bloodOxy + formula.heartRate + formula.b)
}









export default function Home(){

  const [heartRate, setHeartRate] = useState(0.0)
  const [sleepHour, setSleepHour] = useState(0.0)
  const [bodyTemp, setBodyTemp] = useState(0.0)
  const [bloodOxy, setBloodOxy] = useState(0.0)

  const [snoreRate, setSnoreRate] = useState(0.0)
  const [respRate, setRespRate] = useState(0.0)
  const [limbMove, setLimbMove] = useState(0.0)
  const [rem, setRem] = useState(0.0)


  return(
    <div className='w-full min-h-screen bg-gradient-to-t from-blue-200 via-white to-white bg-fixed'>
      <Container>
        <ImgContainer>
          <img src='/img/index/img1.svg' alt="Am I stressed?"/>
        </ImgContainer>
        <CTAtext title="How stressed are you?" text="Using a Machine Learning model, we try and predict your stress level on a range of 1 to 5, where 5 is the highest level of stress, based on indicators from when you sleep." btnText='Learn more' link='/'/>
        <FormSection title="Basic Information" collapseable={false}>
          <FieldText title="Resting Heart Rate" type='number' required={true}/>
          <FieldText title="Hours of Sleep" type='number' required={true}/>
          <FieldText title="Resting Body Temperature (ºC)" type='number' required={true}/>
          <FieldText title="Blood Oxygen Saturation" type='number' required={true}/>
        </FormSection>
        <FormSection title="Advanced" description='We use Machine Learning to predict harder to get data.' collapseable={true} expand={false}>
          <FieldText title="Snoring Rate" type='number' required={false}/>
          <FieldText title="Respiration Rate" type='number' required={false}/>
          <FieldText title="Limb Movement" type='number' required={false}/>
          <FieldText title="Rapid Eye Movement" type='number' required={false}/>
        </FormSection>
        <FormSection title="Stress Meter" expand={true} collapseable={false}>
          <StressIndicator/>
        </FormSection> 
      </Container>
    </div>
  )
}
