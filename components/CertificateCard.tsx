"use client";
import Image from "next/image";
import { useState } from "react";

export default function CertificateCard({ url, title, subTitle }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <div className="p-2 md:p-4 flex flex-col justify-center items-center gap-4">
        <Image
          alt="img"
          src={url}
          width={400}
          height={400}
          className="h-[150px] md:h-[250px] max-h-[400px] w-full border border-gray-300 object-fill rounded-md transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-base md:text-xl lg:text-2xl text-center font-semibold text-gray-800">
          {title}
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">
          {subTitle.length > 100 ? (
            !toggle ? (
              <>
                {subTitle.slice(0, 100) + " "}
                <span
                  className="text-blue-600 font-medium cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  ...read
                </span>
              </>
            ) : (
              subTitle
            )
          ) : (
            subTitle
          )}
        </p>
      </div>
    </div>
  );
}
