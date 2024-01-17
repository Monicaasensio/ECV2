import React from 'react'
import Hero from '../Components/Hero/Hero'
import Newsletter from '../Components/Newsletter/Newsletter'
import Slider from '../Components/Slider/Slider'
import NewArrivals from '../Components/NewArrivals/NewArrivals'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Slider />
      <Newsletter />
    </div>
  )
}
