import Link from "next/link"
import Image from "next/image"
import star from "../asset/image/star.png"

const Logo = () => {
  return (
    <Link href='/'>
      {/* <Image src={star} 
      alt='logo' width={54} height={54} priority/> */
      }
      <div>
        <h1 className="text-2xl font-bold w-16 h-16 bg-primary flex justify-center items-center rounded-full">IJ</h1>
      </div>
    </Link>
  )
}

export default Logo