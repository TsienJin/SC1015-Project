import React from 'react'
import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from './components/common/navbar'
import Container from './components/reuse/container'
import CTAtext from './components/reuse/ctaText'
import FormSection from './components/reuse/formSection'
import ImgContainer from './components/reuse/imgContainer'

export default function Home() {
  return(
    <div className='w-full min-h-screen bg-gradient-to-t from-blue-200 via-white to-white bg-fixed
                    '>
      <Container>
        <ImgContainer>
          <img src='/img/index/img1.svg' />
        </ImgContainer>
        <CTAtext title="How stressed are you?" text="Using a Machine Learning model, we try and predict your stress level on a range of 1 to 5, where 5 is the highest level of stress, based on indicators from when you sleep." btnText='Learn more' link='/'/>
        <FormSection title="Basic Information" collapseable={false}>
          <p>fields</p>
        </FormSection>
        <FormSection title="Advanced" description='We use Machine Learning to predict harder to get data.' collapseable={true} expand={false}>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
          <p>fields</p>
        </FormSection>
      </Container>
    </div>
  )
}
