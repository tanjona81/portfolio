import {FC, useState} from 'react'
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';
import SideMenu from './SideMenu';
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsFillTelephoneFill } from 'react-icons/bs';

interface NavbarProps {
   
}

const handlePhoneIconClick = () => {
    const phoneNumber = '+261343741310';
    window.location.href = `tel:${phoneNumber}`;
    // bg-[#474D6D]
  };

const Navbar: FC<NavbarProps> = ({}) => {
    const [activeLink,setActiveLink]=useState('home');

   return (
        <div className='z-10'>
            <div className='fixed top-0 left-0 overflow-hidden w-full h-14 bg-slate-900 border-b-2 text-amber-500 border-amber-500'>
                <div className='hidden lg:flex justify-center items-center gap-10 p-4'>
                    <Link to='home' smooth={true} duration={500} name='l_home'>
                        <button name='b_home'>Home</button>
                    </Link>
                    <Link to='about'smooth={true} duration={500} name='l_about'>
                        <button name='b_about'>About</button>
                    </Link>
                    <Link to='resume'smooth={true} duration={500} name='l_resume'>
                        <button name='b_resume'>Resume</button>
                    </Link>
                    <Link to='skills'smooth={true} duration={500} name='l_skills'>
                        <button name='b_skills'>Skills</button>
                    </Link>
                    <Link to='works'smooth={true} duration={500} name='l_works'>
                        <button name='b_works'>Works</button>
                    </Link>
                    <Link to='contact'smooth={true} duration={500} name='l_contact'>
                        <button name='b_contac'>Contact</button>
                    </Link>
                </div>
                <div className='flex lg:hidden justify-start gap-2 items-center'>
                    <a href='https://www.linkedin.com/in/tanjona-rajoelison-19b04524b' target='_blank' rel="nofollow">
                        <FaLinkedin className='text-2xl m-2 text-blue-700'/>
                    </a>
                    <a href='https://github.com/tanjona81' target='_blank' rel="nofollow">
                    <FaGithub className='text-2xl m-2'/>
                    </a>
                    <Link to='contact'smooth={true} duration={500} name='side_contact'>
                        <HiOutlineMail className='text-3xl m-2'/>
                    </Link>
                    <BsFillTelephoneFill className='text-2xl m-2 text-green-600' onClick={()=>(handlePhoneIconClick())}/>
                </div>
                <MobileMenu/>
            </div>
            
            
            <SideMenu/>
        </div>
    )
}

export default Navbar