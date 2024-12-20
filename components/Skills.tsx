import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default async function Skills() {
  const prisma = new PrismaClient();

  const data = await prisma.skill.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="px-4 lg:px-16 pt-14 lg:pt-10 pb-14">
      <div className="text-3xl md:text-5xl font-light">Magic Happens Here</div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 font-[400] md:font-[500] text-[16px] md:text-[20px] pb-10 md:pb-[116px] lg:pb-16">
        A Collection of Tools and Technologies I Use to Bring Ideas to Life
        <span className="bg-[#9E9E9E] h-[1px] w-full md:w-[273px] opacity-40"></span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-8 justify-evenly items-center w-full text-center gap-4">
        {data.map((eachEle) => (
          <div
            className="filter grayscale hover:grayscale-0 flex flex-col items-center w-full max-w-[120px] border border-gray-300 rounded-md shadow-md p-2 md:p-4 transition-transform duration-300 hover:scale-105"
            key={eachEle.id}
          >
            <Image
              alt={`${eachEle.title} logo`}
              src={eachEle.image}
              width={80}
              height={80}
              className="w-20 h-20 object-contain transition-filter duration-300 ease-out"
            />
            <h4 className="text-center">{eachEle.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
