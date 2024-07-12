import React from 'react'
import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc,style}) => {
  return (
    <div className = {`${containerStyles}`}>
     <Image src={imgSrc} fill priority  alt='' className={`${style}`}/>
    </div>
  )
}

export default DevImg