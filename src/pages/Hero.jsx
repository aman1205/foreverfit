import React from 'react'
import Header from '../components/Navbar'
import main from "../assets/main.png"
import HeroPic from '../assets/HeroPic.png';
import Event from '../components/Event';
// import ServiceCard from '../components/ServiceCard';
import Service from '../components/Service';



const Hero = () => {
  return (
    <>
      <Header />
      <div className="w-full px-28 bg-[#2F2B32]">

        <div className="mb-16 px-14 -mt-16">
          <div className="flex flex-row items-center h-screen">
            <div className="">
              <p className="text-6xl font-semibold text-white">Welcome to
                <span className="font-bold font-alkatra text-teal-400  underline-offset-3 ml-4 decoration-4 decoration-[#8685EF] ">
                  ForeverFit
                </span>{" "}
              </p>
              <p className="max-w-3xl pt-4 px-1 mt-8 text-white text-2xl">
              Navigating Your Journey to Optimal Health: Discover Comprehensive Medical Resources, Expert Health Insights, and Vital Tips on Our Dedicated Medical and Health Website
              </p>
            </div>
            <div className="w-[45%] ml-auto mt-8">
              <img className="" src={main} alt="Elder" />
            </div>
          </div>

          <section className='h-auto mb-16' id='service'>
            <div className="font-bold flex items-center justify-center  pl-4 mb-16 text-4xl bg-teal-300 text-blue-600 rounded-lg shadow-lg h-16">
              Services
            </div>
            <div className='max-w-7xl ml-12'>
              <p className='font-alkatra text-5xl text-center text-white font-bold mb-16'>We Believe Everyone Deserves <span className='text-teal-400'>Our Quality</span> Care</p>
              <Service />
            </div>

          </section>
          <section className='h-screen' id='events'>
            <div className="font-bold flex items-center justify-center pl-4 mb-16 text-4xl bg-teal-300 text-blue-600 rounded-lg shadow-lg h-16">
              Events Conducted by AgeWell
            </div>
            <div className='max-w-7xl ml-12'>
              <p className='font-alkatra text-5xl text-center text-white font-bold mb-16'>Join This Events for <span className='text-teal-400'>Exciting and Informative</span> experience!</p>
              <Event />
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Hero