import { FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-300 w-full h-50 '>
      <div className='flex flex-row gap-6 justify-evenly pt-3'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl'>CareerLink</h1>
            <span className='w-40'>Best platform for your sucessfull career</span>
            <h4 className='font-bold'>
                contact us on
            </h4>
            <div className=" flex flex-row gap-2 text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
            </div>
            

        </div>
        <div className='flex flex-col items-start gap-2'>
            <Link to="/" >About us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Employer Home</Link>
            <Link to="/">Credits</Link>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <Link to="/">Help Center</Link>
            <Link to="/">Summons/Notices</Link>
            <Link to="/">Grievances</Link>
            <Link to="/">Report issue</Link>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Fraud alert</Link>
            <Link to="/">Trust & Safety</Link>
        </div>
        <div className='w-xs h-xs mt-4'>
        <iframe
        title="Teks Academy Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3962554485183!2d78.4975973736907!3d17.441187501255985!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b897e76455f%3A0xf7c268ee0c8a2f80!2sTeks%20Academy!5e1!3m2!1sen!2sin!4v1785005455556!5m2!1sen!2sin"
        className="w-full h-full rounded-lg shadow-lg"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe></div>
      </div>
    </div>
  )
}

export default Footer
