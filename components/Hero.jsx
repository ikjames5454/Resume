'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import {RiBriefcase4Fill,RiTeamFill,RiTodoFill,RiArrowDownSLine} from "react-icons/ri"
import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  const handleDownloadCV = () => {
    if (typeof window !== 'undefined') {
      window.open("/file/resume3.pdf");
    }
  };
  return (
   <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
   
    <div className="container mx-auto">
    
     <div className="flex justify-between gap-x-8">
        <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
          
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ikenna James</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">A brief introduction to who I am, an insightful look into my career journey, and an overview of my professional endeavors.
            </p>
           <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
            <Link href='/contact'>
            <Button className="gap-x-2">Contact me <Send size={18}/></Button>
            </Link>
            <Button 
            variant='secondary' 
            className="gap-x-2"
            onClick={handleDownloadCV}
            >Download CV <Download size={18}/></Button>
           </div>
           <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
           iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
           />
        </div>
        <div className="hidden xl:flex relative">
        <Badge
        containerStyles='absolute top-[24%] -right-[1rem]'
        icon={<RiBriefcase4Fill/>}
        endCountNum={1}
        badgeText={'Years of experience'}
        />
        <Badge
        containerStyles='absolute top-[80%] right-[1rem]'
        icon={<RiTodoFill/>}
        endCountNum={10}
        badgeText={'Finished Projects'}
        />
        <Badge
        containerStyles='absolute top-[55%] right-[32rem]'
        icon={<RiTeamFill/>}
        endCountNum={1}
        endCountText='K'
        badgeText={'Impressed Client'}
        />
          <div className=" bg-hero_shape dark:bg-hero_shape_dark w-[550px] h-[550px] bg-no-repeat absolute -top-1 -right-1 bg-cover ">
          <DevImg 
          containerStyles='w-[400px] h-[400px] bg-no-repeat relative bg-bottom rounded-full'
          imgSrc='/hero/my.jpeg'
          style='bg-hero_shape dark:bg-hero_shape_dark w-[580px] h-[580px] bg-no-repeat relative bg-bottom rounded-full mt-10'
          />
          </div>
        </div>
     </div>
     <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
      <RiArrowDownSLine className='text-3xl text-primary'/>
    </div>
    </div>
   </section>
  )
}

export default Hero