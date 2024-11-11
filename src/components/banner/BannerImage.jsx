import React from 'react'
import bannerImage from '../../assets/bannerImage.png'
import offer from "../../assets/Offer.png"
import vector from "../../assets/Vector.png"

export default function BannerImage() {
  return (
    <>
      <div className=''>
        <img className=' lg:w-[680px] lg:h-[649px] py-5 ' src={bannerImage} alt="" />
        <img className=' absolute top-[630px] right-5 lg:top-[700px] lg:-right-[40px] lg:w-24' src={offer} alt="" />
        <img className='absolute top-[300px] right-4 lg:top-[100px] lg:-right-3' src={vector} alt="" />
      </div>
    </>
  )
}
