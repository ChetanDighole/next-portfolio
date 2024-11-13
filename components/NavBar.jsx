import Image from "next/image"
import Logo from '@/public/images/logo.png'
import LinkedInLogo from '@/public/images/linkedin.png'

export default function NavBar() {
    return (
        <div className="px-4 lg:px-16 flex justify-between items-center py-4 lg:py-1">
            {/* logo */}
            <div className="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer">
                <a className="w-full h-full" href='/'>
                    <Image alt="logo" src={Logo} className="w-full h-full" />
                </a>
            </div>
            <div className="hidden lg:flex items-center gap-6 lg:gap-6">
                {/* <div className="w-6 h-6 lg:w-10 lg:h-10">
                    <Image alt="github" className="w-full h-full invert" src={GithubLogo} />
                </div> */}
                <div className="w-6 h-6 lg:w-10 lg:h-10">
                    <a className="w-full h-full" href='https://www.linkedin.com/in/chetan-dighole-197b80205/' target="_blank" rel="noopener noreferrer">
                        <Image alt="linkedin" className="w-full h-full" src={LinkedInLogo} />
                    </a>
                </div>
            </div>
        </div>
    )
}
