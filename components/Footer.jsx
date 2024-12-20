"use client"
import { useState } from "react"
import github from '@/public/images/github.png'
import linkedIn from '@/public/images/linkedin_footer.png'
import twitter from '@/public/images/twitter_footer.png'
import hashnode from '@/public/images/hashnode.png'
import Image from 'next/image'

export default function Footer() {

    const [emailData, setEmailData] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
        console.log(emailData)
    }

    const submitMail = async () => {
        if (!emailData.email) {
            return
        }
        await fetch('/api/extra/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailData.email,
                subject: emailData.subject,
                message: emailData.message
            })
        })

        setEmailData({
            email: '',
            subject: '',
            message: ''
        })


    }


    return (
        <footer className="bg-[#0F0F0F] text-white px-4 lg:px-16 pt-7 pb-14">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Work with Me</h2>
                    <p className="text-gray-400">Ready to collaborate? Let’s discuss your project.</p>
                    <div className='flex flex-wrap gap-2 mt-6 items-center'>

                        <a href='https://github.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
                            <Image alt='img' src={github} className='w-10 h-10' />
                        </a>

                        <a href='https://www.linkedin.com/in/chetan-dighole-197b80205/' target="_blank" rel="noopener noreferrer">
                            <Image alt='img' src={linkedIn} className='w-10 h-10 invert' />
                        </a>

                        <a href='https://twitter.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
                            <Image alt='img' src={twitter} className='w-10 h-10 invert' />
                        </a>

                        <a href='https://codewithchetan.hashnode.dev/' target="_blank" rel="noopener noreferrer">
                            <Image alt='img' src={hashnode} className='w-10 h-10 invert' />
                        </a>

                    </div>
                </div>
                <div>
                    <div className="space-y-4">
                        <input type="email" placeholder="Your Email" onChange={handleChange} name="email" value={emailData.email}
                            className="w-full bg-slate-800 p-2 rounded text-gray-100 border border-gray-600 placeholder-gray-400"
                        />

                        <input type="text" placeholder="Subject" onChange={handleChange} name="subject" value={emailData.subject}
                            className="w-full bg-slate-800 p-2 rounded text-gray-100 border border-gray-600 placeholder-gray-400"
                        />

                        <textarea placeholder="Message" onChange={handleChange} name="message" value={emailData.message}
                            className="w-full bg-slate-800 p-2 rounded text-gray-100 border border-gray-600 placeholder-gray-400"
                            rows="3" ></textarea>

                        <button onClick={() => submitMail()} className="bg-[#F5F5F5] text-[#0F0F0F] rounded-md shadow-md hover:shadow-lg active:shadow-inner active:translate-y-1 transition-all font-mono px-4 h-12 text-lg w-full">
                            Send
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    )
}