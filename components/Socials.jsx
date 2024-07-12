"use client"
import {RiYoutubeFill,RiLinkedinFill,RiGithubFill,RiFacebookFill,RiInstagramFill} from "react-icons/ri"
import Link from "next/link";

const icons = [
  {
    path: 'https://www.linkedin.com/in/ikenna-james-582ba2264/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/ikjames5454?tab=repositories',
    name:<RiGithubFill/>
  },
  {
    path: 'https://www.facebook.com/james.ikennajunior',
    name:<RiFacebookFill/>
  }
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon,index) => {
          return (
            <Link href={icon.path} key={index}>
              <div className={`${iconsStyles}`}>
                {icon.name}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials