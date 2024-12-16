import React from 'react'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Hero2 from '@/components/Hero2'
import Hero3 from "@/components/Hero3"
import FurnitureGallery from '@/components/FurnitureGallery'
import Products from '@/components/Products'
 
const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Hero2/>
       <Products/>
       <Hero3/>
       <FurnitureGallery/>
    </div>
  )
}

export default page