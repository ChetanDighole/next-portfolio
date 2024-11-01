import { PrismaClient } from "@prisma/client";

export default async function Skills() {
  const prisma = new PrismaClient();

  const data = await prisma.skill.findMany({});

  return (
    <div className="px-4 lg:px-16 pt-7 pb-14">
      <div className="text-3xl md:text-5xl font-light">Magic Happens Here</div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 font-[400] md:font-[500] text-[16px] md:text-[20px] pb-10 md:pb-[116px] lg:pb-16">
        A Collection of Tools and Technologies I Use to Bring Ideas to Life
        <span className="bg-[#9E9E9E] h-[1px] w-full md:w-[273px] opacity-40"></span>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 justify-evenly items-center w-full text-center gap-4">
        {data.map((eachEle, index) => (
          <div
            className="filter grayscale hover:grayscale-0 flex flex-col w-max border border-gray-300 rounded-md shadow-md p-2 md:p-4 transition-transform duration-300 hover:scale-105"
            key={eachEle.id}
          >
            <img
              alt={`${eachEle.title} logo`}
              src={eachEle.image}
              className="w-14 h-14 sm:w-20 sm:h-20 transition-filter duration-300 ease-out"
            />
            <h4>{eachEle.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
