import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaLocationCrosshairs, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center space-y-8'>
            <h1 className='text-6xl mt-8 mb-8 text-center font-semibold'>Contact <span className='text-amber-300'>Me</span></h1>
            <div className=' space-y-3'>
                <a className='flex items-center gap-2 text-3xl ' href="hkrobin48@gmail.com"><MdEmail className='text-4xl text-amber-300' /> hkrobin48@gmail.com</a>
                <a className='flex items-center gap-2 text-3xl ' href="hkrobin48@gmail.com"><FaPhone className='text-4xl text-amber-300' />01302012386</a>
                <a className='flex items-center gap-2 text-3xl t' href="hkrobin48@gmail.com"><FaLocationCrosshairs className='text-4xl text-amber-300' /> 
                Dhaka, Bangladesh</a>
                
            </div>
            <div className='flex gap-6 text-4xl'>
                <a href="https://www.linkedin.com/in/hk-robin/"><FaLinkedin /></a>
                 <a href="https://x.com/HkRobin8"><FaSquareXTwitter /></a> 
                 <a href="https://www.facebook.com/mdhk.robin.5"><FaFacebookSquare /></a>   
                 <a href="https://github.com/hkrobinbrother"><FaGithub /></a>
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default Contact;