import Image from "next/image"
import CertificateCard from "./CertificateCard"
import { PrismaClient } from "@prisma/client"


export default async function Certification() {

    const prisma = new PrismaClient();
    const data = await prisma.certification.findMany({})

    return (
        <div className="px-4 lg:px-16 pt-7 pb-14">
            <div className="text-3xl md:text-5xl font-light">Proudly Certified</div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 font-[400] md:font-[500] text-[16px] md:text-[20px] pb-10 md:pb-[116px] lg:pb-16">
                Each Certification Tells a Story of Growth
                <span className="bg-[#9E9E9E] h-[1px] w-full md:w-[273px] opacity-40"></span>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                {data.map((eachEle, index) => (
                    <CertificateCard title={eachEle.title} url={eachEle.image} subTitle={eachEle.description} key={eachEle.id} />
                ))}


            </div>

        </div>
    )
}