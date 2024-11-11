import React from 'react'
import BannerTitle from './BannerTitle'
import BannerImage from './BannerImage'

export default function Banner() {
  return (
    <>
      <div className="w-[90%] mx-auto lg:w-4/5 lg:mx-auto lg:flex flex-col lg:flex-row lg:items-center lg:justify-between lg:py-32 lg:relative">
        <BannerTitle />
        <BannerImage />
      </div>
    </>
  )
}
