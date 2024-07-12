'use client'
import React,{useState,useEffect} from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import styles from './Cta.module.css';


const messages = [
  "Ready to bring your vision to life? I'm here to provide expert assistance and support.",
  "Let's make your ideas a reality. I'm here to offer professional guidance and help.",
  "Need help turning your dreams into reality? Count on my expertise and support.",
  "Eager to transform your concepts into success? I'm here to provide skilled assistance and backing.",
  "Looking to achieve your goals? I’m ready to lend my expertise and support every step of the way.",
  "Want to see your project come to life? I'm here with expert advice and support.",
  "Ready to take your project to the next level? I'm here to offer my professional assistance and support.",
  "Have a vision you want to realize? I'm here to provide expert help and guidance.",
  "Need professional support to achieve your ambitions? I’m here to assist and support you.",
  "Dreaming of success? Let me provide the expertise and support you need to get there.",
  "Excited to see your ideas come to fruition? I'm here to offer skilled assistance and unwavering support."
];


const Cta = () => {

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className='dark:bg-none bg-plain py-24 bg-tertiary dark:bg-secondary/40'>
        <div className='container mx-auto'>
         <div className={`flex flex-col items-center`}>
          <h2 className={`h2 max-w-xl text-center mb-8  ${styles.slide} ${styles.slideIn}`}>
          {messages[currentMessageIndex]}
          </h2>
          <Link href='/contact'>
          <Button>Contact me</Button>
          </Link>
        </div>   
        </div>
    </section>
  )
}

export default Cta