import {FC} from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsFillTelephoneFill } from 'react-icons/bs';
import Social_menu from './UI/Social_menu';
import { Link } from 'react-scroll';

interface SideMenuProps {
   
}

const handlePhoneIconClick = () => {
    const phoneNumber = '+261343741310';
    window.location.href = `tel:${phoneNumber}`;
  };

const SideMenu: FC<SideMenuProps> = ({}) => {
   return (
        <div>
            
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                <li>
                    <Social_menu color='bg-blue-600'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/tanjona-rajoelison-19b04524b'
                        target='_blank' rel="nofollow"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </Social_menu>
                </li>
                <li>
                    <Social_menu color='bg-[#333333]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/tanjona81'
                        target='_blank' rel="nofollow"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </Social_menu>
                </li>
                <li>
                    <Social_menu color='bg-green-600'>
                        <button className='flex justify-between items-center w-full text-gray-300'
                        onClick={()=>(handlePhoneIconClick())} name='b_call'>
                            Call <BsFillTelephoneFill size={30} />
                        </button>
                    </Social_menu>
                </li>
                <li>
                    <Link to='contact'smooth={true} duration={500}>
                        <Social_menu color='bg-[#565f69]'>
                            <button className='flex justify-between items-center w-full text-gray-300' name='b_contact'>
                                Contact me <HiOutlineMail size={30} />
                            </button>
                        </Social_menu>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
   )
}

export default SideMenu