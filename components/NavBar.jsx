import Image from "next/image"
import Logo from '@/public/images/logo.png'
import GithubLogo from '@/public/images/github.png'
import LinkedInLogo from '@/public/images/linkedin.png'

export default function NavBar() {
    return (
        <div className="px-4 lg:px-16 flex justify-between items-center py-4 lg:py-1">
            {/* logo */}
            <div className="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer">
                <Image alt="logo" src={Logo} className="w-full h-full" />
            </div>
            <div className="hidden lg:flex items-center gap-6 lg:gap-6">
                {/* <div className="w-6 h-6 lg:w-10 lg:h-10">
                    <Image alt="github" className="w-full h-full invert" src={GithubLogo} />
                </div> */}
                <div className="w-6 h-6 lg:w-10 lg:h-10">
                    <Image alt="github" className="w-full h-full" src={LinkedInLogo} />
                </div>
            </div>
        </div>
    )
}
