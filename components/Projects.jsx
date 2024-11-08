import projectImg from '@/public/images/project/taskMaster.png'
import dynamicQrImg from '@/public/images/dynamicqr.png'
import ProjectCards from '@/components/ProjectCard'
import AtoZ from "@/public/images/atoz.jpg"

export default function Projects() {
    const projects = [
        {
            title: "Dynamic QR",
            description: "The Dynamic QR is a versatile tool designed to generate QR codes that can dynamically update content without requiring a new code each time. Users can create QR codes linked to modifiable data, making it perfect for applications where quick access and content flexibility are key, such as event management, digital marketing, and contact sharing. The app offers a user-friendly interface for generating, customizing, and managing QR codes efficiently.",
            techStack: ["Nextjs", "Next-Auth", "PostgreSQL", "Prisma", "Tailwind"],
            image: dynamicQrImg,
            liveLink: "https://dynamicqrcode.vercel.app/",
            sourceCode: "https://github.com/ChetanDighole/dynamic-qr",
        },
        {
            title: "Task Master",
            description: "Task Master is a powerful productivity tool that lets you stay organized and on top of all your tasks and goals. With Task Master, you can easily create multiple lists for anything you need to keep track of, whether it's your grocery shopping, your work projects, your travel plans, or your daily routines.",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "Tailwind"],
            image: projectImg,
            liveLink: "https://task-master-aee6.vercel.app/",
            sourceCode: "https://github.com/ChetanDighole/Task-Master",
        },
        {
            title: "AtoZ ecommerce frontend",
            description: "This frontend React app provides a streamlined shopping experience by integrating with the Fakestore API to display a range of products. Users can easily add items to a cart and search for specific products. The app uses Redux for efficient state management, ensuring that the cart and search features respond quickly and maintain accurate data. With an intuitive UI and essential e-commerce functionality, this app serves as a robust foundation for an online shopping experience.",
            techStack: ["React.js", "Redux", "fakestoreapi", "Tailwind"],
            image: AtoZ,
            liveLink: "https://ecommerceatoz.netlify.app",
            sourceCode: "https://github.com/ChetanDighole/E-Commerce-Application-Clone-ineuron",
        },
    ];
    return (
        <div className="px-4 lg:px-16 pt-7 pb-14">
            <div className="text-3xl md:text-5xl font-light">Built with Purpose</div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 font-[400] md:font-[500] text-[16px] md:text-[20px] pb-10 md:pb-[116px] lg:pb-16">
                Projects that Blend Functionality with Creativity.
                <span className="bg-[#9E9E9E] h-[1px] w-full md:w-[273px] opacity-40"></span>
            </div>

            <div className="flex flex-col gap-6">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
                    {projects.map((project, index) => (
                        <ProjectCards {...project} key={index} />
                    ))}
                </div>


                <div className='flex items-center justify-center mt-4'>
                    <a href='https://github.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
                        <h1 className='underline underline-offset-2'>...more on github</h1>
                    </a>
                </div>

            </div>

        </div>
    )
}