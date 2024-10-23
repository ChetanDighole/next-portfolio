import Image from 'next/image'
import lemonyellowLogo from '@/public/images/lemon_yellow_logo.svg'
import cognizantLogo from '@/public/images/cognizant_logo.png'


export default async function Experience() {
    return (
        <div className="px-4 lg:px-16 pt-7 pb-14">
            <div className="text-3xl md:text-5xl font-light">Experience Matters</div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 font-[400] md:font-[500] text-[16px] md:text-[20px] pb-10 md:pb-[116px] lg:pb-16">
                Where Knowledge Meets Application
                <span className="bg-[#9E9E9E] h-[1px] w-full md:w-[273px] opacity-40"></span>
            </div>

            {/* lemon yellow */}

            <div className='border border-[#9E9E9E] w-full p-4 flex flex-col gap-2'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div>
                        <a className='flex items-center gap-3' rel="noopener noreferrer" target='_blank' href='https://www.lemonyellow.design/'>
                            <Image alt='img' src={lemonyellowLogo} className='w-12 h-12 sm:w-16 sm:h-16' />
                            <h2 className='text-lg md:text-3xl underline underline-offset-2'>Lemon Yellow LLP</h2>
                            <div className='hidden md:flex w-4 h-[2px] bg-black'></div>
                            <div className='hidden md:flex text-lg md:text-3xl'>Frontend Developer</div>
                        </a>
                    </div>
                    <div className='mt-2 md:mt-0 flex md:hidden font-medium text-lg'>Frontend Developer</div>
                    <div className='text-[#9E9E9E] text-base md:text-xl text-center`'>May 2023 - Present</div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-2 sm:w-16 sm:h-8'></div>
                    <ul className='list-disc'>
                        <li>Developed a frontend application for the international shipping client <span className='font-bold'>Torm</span> using the <span className='font-bold'>Angular.js</span> framework as the <span className='font-bold'>project owner</span>.</li>
                        <li>Partnered with <span className='font-bold'>Sony Liv</span> on their <span className='font-bold'>UEFA Euro Cup</span> and <span className='font-bold'>Asian Games</span> events, creating and promptly updating key web pages like the medals and match schedule pages, and have been serving as a dedicated resource for all Sony Liv requirements from December 2023 to the present.</li>
                        <li>Collaborated with <span className='font-bold'>India Shelter</span> to enhance their loan application process by utilizing <span className='font-bold'>React.js</span>.</li>
                        <li>Utilized the <span className='font-bold'>Django</span> framework to enhance <a className='font-medium underline underline-offset-1' rel="noopener noreferrer" target='_blank' href='https://www.lemonyellow.design/'>lemonyellow.design</a>, focusing on upgrading the user interface and backend functionality for a sleek and responsive site.</li>
                    </ul>
                </div>
            </div>

            {/* cognizant */}

            <div className='border border-[#9E9E9E] w-full p-4 flex flex-col gap-2 mt-6'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div>
                        <a className='flex items-center gap-3' rel="noopener noreferrer" target='_blank' href='https://www.cognizant.com/in/en'>
                            <Image alt='img' src={cognizantLogo} className='w-48 lg:w-80' />
                            <div className='hidden md:flex w-4 h-[2px] bg-black'></div>
                            <div className='hidden md:flex text-lg md:text-3xl'>Java Full-Stack Developer</div>
                        </a>
                    </div>
                    <div className='mt-2 md:mt-0 flex md:hidden font-medium text-lg'>Java Full-Stack Developer</div>
                    <div className='text-[#9E9E9E] text-base md:text-xl text-center`'>Oct 2022 - Feb 2023</div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-2 sm:w-16 sm:h-8'></div>
                    <ul className='list-disc'>
                        <li>Designed and developed dynamic and responsive websites using <span className='font-bold'>HTML, CSS, JavaScript, bootstrap, Angular.js and Java</span>.</li>
                        <li>Contributed to the development of a claim management application, which enabled users to submit insurance claims directly to the insurance company, resulting in an 80% reduction in processing time. As a member of a team of 4, this experience provided me with practical exposure to <span className='font-bold'>Java Full Stack Development</span>, where I specifically worked on the <span className='font-bold'>front-end</span> of the application.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}