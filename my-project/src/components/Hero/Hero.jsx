import React from 'react'
import Rocket from '../../assets/roc.png'
//import line from '../../assets/image1.png'
import star from '../../assets/stars2.png'
import planet from '../../assets/planets.png'
import clouds from '../../assets/cloud2.png'

// const backgroundLine = {
//     backgroundImage: `url(${line})`,
//     backgroundReapet: 'no-repeat',
//     backgroundPosition: 'bottom',
//     backgroundSize: 'contain',
// }

const cloud = {
    backgroundImage: `url(${clouds})`,
    backgroundReapet: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
}

const stars = {
    backgroundImage: `url(${star})`,
    backgroundReapet: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
}

const Hero = () => {
  return (
    <>
        <div style={cloud} className='bg-primary text-white min-h-[630px] flex justify-center items-center overflow-hidden'>
            <div className='container grid md:grid-cols-2 place-items-center'>
                {/* text info section */}
                <div className='text-center md:text-left space-y-6 py-10 md:py-0 relative z-10'>
                    <p data-aos="fade-up">EXPOLRE THE UNIVERSE</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl md:text-6xl font-bold'>Start Exploring <br/>All over the <span>space</span></h1>
                    <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
                        Start to Explore in the space, Navigate and discover all the wonders ot the universe.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
                        <button className='bg-secondry text-white rounded-full px-8 py-2 shadow-custom-inset hover:scale-105 transition duration-200'>Get Started</button>
                    </div>
                </div>
                {/* animated rocket section*/}
                <div style={stars} className='relative'>
                    {/* animated rocket */}
                    <div data-aos="fade-up-right" data-aos-delay="700" data-aos-duration="1000">
                        <img src={Rocket} alt="" className='max-h-[450px] relative z-10 animate-rocket'/>
                    </div>
                    {/* planet image */}
                    <img src={planet} alt="" className='absolute top-10 -left-36 opacity-90 h-[150px]' data-aos="fade" data-aos-offset="0" data-aos-ease="ease-out-quad" data-aos-delay="600"/>
                    <img src={planet} alt="" className='absolute -top-10 -right-20 opacity-70 h-[70px]' data-aos="fade" data-aos-offset="0" data-aos-ease="ease-out-quad" data-aos-delay="900"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero