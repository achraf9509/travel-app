import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex-col flexCenter bg-feature-bg bg-no-repeat bg-center overflow-hidden py-24 '>
      <div className='max-container padding-container relative w-full flex justify-end '>
        <div className='flex flex-1 lg:min-h-[950px]'>
        <Image src='/phone.png' alt='phone' width={400} height={1000} className='feature-phone' />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image src='/camp.svg' alt='camp' width={50} height={50} className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] ' />
            <h2 className='bold-40 lg:bold-64'> Features</h2>
            <ul className='mt-10 grid gap-10 md:grid-cols-2 '>
              {FEATURES.map((feature)=>(
                <FeatureItem key={feature.title} 
                              title={feature.title} 
                              icon={feature.icon} 
                              description={feature.description} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
type FeatureItem={
  title:string;
  icon:string;
  description:string;
}

const FeatureItem = ({title,icon,description}:FeatureItem) => {
 return(
  <li className='flex flex-col w-full flex-1 items-start'>
    <div className='rounded-full p-5  lg:p-7 bg-green-50 '>
        <Image src={icon} alt='map' width={28} height={28} />
    </div>
    <h2 className='bold-20 lg:bold-40 capitalize mt-5'>{title}</h2>
    <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
  </li>
 )
}

export default Features
