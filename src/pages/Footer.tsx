import {FC} from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

interface FooterProps {
   
}

const Footer: FC<FooterProps> = ({}) => {
   return (
        <div className='h-auto p-4 lg:p-0 lg:h-[30vh] flex flex-col bg-slate-950 w-full justify-center items-center gap-6 overflow-hidden'>
            <p className='text-3xl text-teal-100'>Tanjona Rajoelison</p>
            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/tanjona-rajoelison-19b04524b" target='_blank' rel="nofollow" 
                className='flex items-center gap-2 text-lg'>
                    <FaLinkedin size={30} className='text-teal-100'/>
                </a>
                <a href="https://github.com/tanjona81" target='_blank' rel="nofollow" 
                className='flex items-center gap-2 text-lg'>
                    <BsGithub size={30} className='text-teal-100'/>
                </a>
                <a href="https://web.facebook.com/tanjona.rajoelison.9" target='_blank' rel="nofollow" 
                className='flex items-center gap-2 text-lg'>
                    <FaFacebookSquare size={30} className='text-teal-100'/>
                </a>
                <a href="https://www.instagram.com/tanjonarajoelison/" target='_blank' rel="nofollow" 
                className='flex items-center gap-2 text-lg'>
                    <FaInstagram size={30} className='text-teal-100'/>
                </a>
            </div>
            
            <div className='flex lg:gap-4 gap-2 text-teal-100 lg:flex'>
                <Link to='home' smooth={true} duration={500} name='l_home'>
                    <button name='b_home'>Home</button>
                </Link>
                <Link to='about'smooth={true} duration={500} name='l_about'>
                    <button name='b_about'>About</button>
                </Link>
                <Link to='resume'smooth={true} duration={500} name='l_resume'>
                    <button name='b_resume'>Resume</button>
                </Link>
                <Link to='skills'smooth={true} duration={500} name='l_works'>
                    <button name='b_skills'>Skills</button>
                </Link>
                <Link to='works'smooth={true} duration={500} name='l_works'>
                    <button name='b_works'>Works</button>
                </Link>
                <Link to='contact'smooth={true} duration={500} name='l_contact'>
                    <button name='b_contact'>Contact</button>
                </Link>
            </div>
            <div className='text-teal-100 text-sm'>
                © 2023 Tanjona Rajoelison
            </div>
        </div>
    )
}

export default Footer