

'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';

export const projectData = [
  {
    image:"/hero/art.png",
    category:'react js',
    name:"Art Express",
    description:"An art website functions as a virtual gallery and community hub where artists can exhibit their artworks.",
    link:' https://artxpressfontend-d914.onrender.com',
    github:"https://github.com/artXpress-Project/artxpressFontend"
  },
  {
    image:"/hero/randomQuote.png",
    category:'html & css',
    name:"RandomQuote Generator",
    description:"The Random Quote Generator is a simple and intuitive web application designed to inspire and motivate users with random quotes.",
    link:'https://random-quote-generator-app-mics.vercel.app/',
    github:"https://github.com/ikjames5454/Random-quote-Generator-App"
  },
  {
    image:"/hero/digital.png",
    category:'html & css',
    name:"Digital Clock",
    description:" The Digital Clock is a sleek and user-friendly web application that provides an accurate and visually appealing display of the current time.",
    link:'https://digital-clock-eight-rouge.vercel.app/',
    github:"https://github.com/ikjames5454/Digital-Clock"
  },
  {
    image:"/hero/cohort.png",
    category:'react js / typescript',
    name:"Cohort Creation",
    description:": Cohort Creation is a platform designed for creating and managing cohorts. It allows users to form groups for various purposes.",
    link:'https://cohorts-plum.vercel.app/',
    github:"https://github.com/ikjames5454/CohortCreation",
  }
];

const Work = () => {
  return (
    <section className='dark:bg-none bg-plain relative h-[900px]  xl:h-[800px]'>
      <div className='container mx-auto'>
        <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left xl:mt-0  mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>Discover the most recent projects showcasing diverse skills and creativity. Explore detailed descriptions, view live demos, and check out the source code on GitHub.</p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            // modules={[Navigation, Pagination]}
            // navigation
            className='h-[550px] '
            slidesPerView ={1}
            breakpoints={{
              640: {
                slidesPerView: 2
                
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;