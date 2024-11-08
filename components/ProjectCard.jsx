'use client'
import Image from "next/image";
import { useState } from "react";

export default function ProjectCards({ title, description, techStack, image, liveLink, sourceCode }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
        >
            <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className={`text-gray-700 mb-4 ${!toggle ? "max-h-24 overflow-hidden" : ""}`}>

                    {
                        (description.length > 200) ?
                            !toggle ?

                                (<>
                                    {description.slice(0, 100) + " "}
                                    <span
                                        className="text-blue-600 font-medium cursor-pointer"
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        ...read
                                    </span>
                                </>) : (description)
                            : (description)

                    }

                </p>
                <div className="mb-4">
                    <h4 className="text-lg font-medium">Tech Stack:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                        {techStack.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Live Demo
                    </a>
                    <a
                        href={sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}