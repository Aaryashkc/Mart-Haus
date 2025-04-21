import React from 'react'
import Banner from '../components/Banner'
import Catagories from '../components/Catagories'
import WhyChooseUs from '../components/WhyChoose'
import BestSellers from '../components/BestSellers'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='relative'>
      <Banner/>
      <Catagories/>
      <BestSellers/>
      <WhyChooseUs/>
      <Newsletter/>
    </div>
  )
}

export default Home
