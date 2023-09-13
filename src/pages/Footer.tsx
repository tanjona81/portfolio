import {FC} from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

interface FooterProps {
   
}

const Footer: FC<FooterProps> = ({}) => {
   return (
        <div className='h-[30vh] flex flex-col bg-slate-950 w-full justify-center items-center gap-6 overflow-hidden'>
            <p className='text-3xl text-teal-100'>Tanjona Rajoelison</p>
            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/tanjona-rajoelison-19b04524b" target='blank' 
                className='flex items-center gap-2 text-lg'>
                    <FaLinkedin size={30} className='text-teal-100'/>
                </a>
                <a href="https://github.com/tanjona81" target='blank' 
                className='flex items-center gap-2 text-lg'>
                    <BsGithub size={30} className='text-teal-100'/>
                </a>
                <a href="https://web.facebook.com/tanjona.rajoelison.9" target='blank' 
                className='flex items-center gap-2 text-lg'>
                    <FaFacebookSquare size={30} className='text-teal-100'/>
                </a>
                <a href="https://www.instagram.com/tanjonarajoelison/" target='blank' 
                className='flex items-center gap-2 text-lg'>
                    <FaInstagram size={30} className='text-teal-100'/>
                </a>
            </div>
            
            <div className='flex gap-4 text-teal-100 md:flex'>
                <Link to='home' smooth={true} duration={500}>
                    <button>Home</button>
                </Link>
                <Link to='about'smooth={true} duration={500}>
                    <button>About</button>
                </Link>
                <Link to='resume'smooth={true} duration={500}>
                    <button>Resume</button>
                </Link>
                <Link to='skills'smooth={true} duration={500}>
                    <button>Skills</button>
                </Link>
                <Link to='works'smooth={true} duration={500}>
                    <button>Works</button>
                </Link>
                <Link to='contact'smooth={true} duration={500}>
                    <button>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Footer