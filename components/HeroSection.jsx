import MainImage from '@/public/images/mainImage.png'
import Image from 'next/image'
import yellowHeart from '@/public/images/yellow-heart.svg'

export default function HeroSection() {

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[80vh] gap-x-14 mt-4 px-4 lg:px-0">

            <Image alt='Hero Image' src={MainImage} className='mainImageClass' />

            <div className='mt-6 lg:mt-0'>
                <p className='text-[#9E9E9E] text-lg md:text-xl lg:text-3xl font-light'>Hi there! I am</p>
                <h1 className='text-[32px] md:text-[46px] lg:text-[64px] font-semibold' >CHETAN DIGHOLE</h1>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium'>Full-Stack Web Developer</p>
                <p className='text-lg md:text-xl font-normal'> Bringing websites to life, one pixel at a time.</p>
                <p className='text-lg md:text-xl font-normal flex items-center gap-2'>Mumbai, India <Image alt='heart' src={yellowHeart} className='w-7 h-7' /></p>
            </div>
        </div>
    )
}