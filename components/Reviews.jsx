'use client';
import {Card,CardDescription,CardHeader,CardTitle} from '@/components/ui/card';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';


const reviewDta = [
    {
        avatar: "/hero/image.jpeg",
        name: 'Harrison Nwaogugu',
        job: "Software Developer",
        review: 'As a Software Developer, I have worked with numerous tools and applications, but this one stands out for its intuitive design and seamless functionality. It has significantly streamlined our workflow, enabling us to focus more on strategic tasks rather than getting bogged down by technical issues.'
    },
    {
        avatar: "/about/blessing.jpeg",
        name: 'Asuelimeu Blessing Ayotomiwa',
        job: "Software Developer",
        review: 'This website is fantastic! It’s easy to navigate and has really improved our daily tasks. Highly recommend!'
    },
    {
        avatar: "/hero/image.jpeg",
        name: 'Harrison Nwaogugu',
        job: "Product Manager",
        review: 'As a Product Manager, I have worked with numerous tools and applications, but this one stands out for its intuitive design and seamless functionality. It has significantly streamlined our workflow, enabling us to focus more on strategic tasks rather than getting bogged down by technical issues.'
    },
    {
        avatar: "/hero/image.jpeg",
        name: 'Harrison Nwaogugu',
        job: "Product Manager",
        review: 'As a Product Manager, I have worked with numerous tools and applications, but this one stands out for its intuitive design and seamless functionality. It has significantly streamlined our workflow, enabling us to focus more on strategic tasks rather than getting bogged down by technical issues.'
    },
    {
        avatar: "/hero/image.jpeg",
        name: 'Harrison Nwaogugu',
        job: "Product Manager",
        review: 'As a Product Manager, I have worked with numerous tools and applications, but this one stands out for its intuitive design and seamless functionality. It has significantly streamlined our workflow, enabling us to focus more on strategic tasks rather than getting bogged down by technical issues.'
    },

]

const Reviews = () => {
  return (
    <section className='dark:bg-none bg-plain h-[560px] xl:h-[700px]'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            <Swiper
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2},
                1400: { slidesPerView: 3},
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            className='h-[480px]'
            >
                {
                    reviewDta.map((person, index)=>{
                        return <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4'>
                                    <Image
                                        className='rounded-full'
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=''
                                        priority
                                    />
                                    <div className='flex flex-col'>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                            </Card>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews