import React from 'react'

export default function BannerTitle() {
    return (
        <>
            <div className='text-white'>
                <div className=' lg:bg-gradient-to-r from-transparent to-red-700 lg:absolute lg:w-[900px] lg:top-56'>
                    <h1 className='text-6xl lg:text-9xl bebas-neue-regular'>Taste the authentic</h1>
                    <h1 className='text-6xl lg:text-9xl bebas-neue-regular'>Saudi cuisine</h1>
                </div>
                <p className='text-lg lg:text-2xl lg:mt-56 mb-5 lg:w-[550px]'>Among the best Saudi chefs in the world, serving  you something beyond flavor. </p>
                <div className="navbar-end ">
                    <a className="btn text-[#0A1425] bg-[#FEBF00] rounded-none border-0 font-bold">EXPLORE MENU</a>
                </div>
            </div>
        </>
    )
}
