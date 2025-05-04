'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import whatsappLogo from '@/assets/images/whatsapp-logo.png'

const WhatsappLive = () => {

    const whatsappNumber = process.env.WHATSAPPNUMBER
    const basUrl = 'https://api.whatsapp.com/send/'
    const encodedMessage = 'Hello, there your iptv provider is here continue chat if there is any query ☺'
    const whatsappLink = `${basUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`

    useEffect(() => {
        const handleScroll = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link")
            if (window.scrollY > 100) {
                whatsappLinkElement?.classList.add("visible")
            }
            else {
                whatsappLinkElement?.classList.remove("visible")
            }
        }

        const checkScrollVisibility = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link")
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight

            if (scrollHeight > clientHeight) {
                handleScroll();
                window.addEventListener("scroll", handleScroll);
            } else {
                whatsappLinkElement?.classList.add("visible")
            }
        }

        checkScrollVisibility();

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            <a href={whatsappLink}
                className='whatsapp-link relative'
                target='_blank'
                rel='noreferrer noopener'>
                <span className='absolute left-[7px] top-[7px] -z-50 size-10'>
                    <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75 '></span>
                </span>
                <Image src={whatsappLogo} alt='' 
                    className='whatsapp-icon z-50 rounded-full' />
            </a>
        </div>
    )
}

export default WhatsappLive