import {FC} from 'react'
import { Element } from 'react-scroll'
import { H1Title } from '../components/UI/H1Titles'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill, BsGithub, BsSendFill, BsWhatsapp } from 'react-icons/bs'
import TextField from '@mui/material/TextField'

interface ContactProps {
   
}

const Contact: FC<ContactProps> = ({}) => {
    const handlePhoneIconClickTelma = () => {
        const phoneNumber = '+261343741310';
        window.location.href = `tel:${phoneNumber}`;
    };
    const handlePhoneIconClickOrange = () => {
        const phoneNumber = '+261328103527';
        window.location.href = `tel:${phoneNumber}`;
    };

   return (
        <Element name='contact' className='flex flex-col gap-10 md:gap-28 items-center justify-center md:w-[60%] w-[90%] 
        md:h-[100svh] h-auto'>
            <H1Title>Let's work together</H1Title>
            <div className='flex flex-col md:flex-row w-full items-center justify-center gap-10'>
                <div className='flex flex-col md:w-[35%] w-full justify-center items-start 
                bg-slate-900 text-slate-200 gap-5'>
                    <div className='flex flex-col border-4 border-amber-500 rounded-3xl p-4 gap-3 w-full justify-center items-center'>
                        <span className='text-2xl text-center'>Check My Profile</span>
                        <a href="https://www.linkedin.com/in/tanjona-rajoelison-19b04524b" target='blank' 
                        className='flex items-center gap-2 text-lg'>
                            <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                                <FaLinkedin/>
                                Tanjona Rajoelison
                            </span>
                        </a>
                        <a href="https://github.com/tanjona81" target='blank' className='flex items-center gap-2 text-lg'>
                            <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                                <BsGithub/>
                                tanjona81
                            </span>
                        </a>
                    </div>
                    <div className='flex flex-col border-4 border-amber-500 rounded-3xl p-4 gap-3 w-full justify-center items-center'>
                        <span className='text-2xl text-center'>Text Me</span>
                        <span className='flex justify-center items-center gap-2'>
                            <BsWhatsapp/>
                            +261 34 37 413 10
                        </span>
                        <a href="https://web.facebook.com/tanjona.rajoelison.9" target='blank' 
                        className='flex items-center gap-2 text-lg'>
                            <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                                <FaFacebookSquare/>
                                Tanjona Rajoelison
                            </span>
                        </a>
                        <a href="https://www.instagram.com/tanjonarajoelison/" target='blank' 
                        className='flex items-center gap-2 text-lg'>
                            <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                                <FaInstagram/>
                                tanjonarajoelison
                            </span>
                        </a>
                        <p className='flex items-center gap-2 text-lg'>
                            <AiOutlineMail/>
                            trajoelison81@gmail.com
                        </p>
                    </div>
                    <div className='flex flex-col border-4 border-amber-500 rounded-3xl p-4 gap-3 w-full'>
                        <span className='text-2xl text-center'>Call Me</span>
                        <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                                <button className='flex items-center gap-2 text-lg'
                            onClick={()=>{
                                handlePhoneIconClickOrange();
                            }}>
                                <BsFillTelephoneFill/>
                                +261 32 81 035 27
                            </button>
                        </span>
                        <span className='flex justify-center items-center hover:scale-110 duration-300 gap-2 
                            hover:text-amber-500 hover:ease-in'>
                            <button className='flex items-center gap-2 text-lg'
                            onClick={()=>{
                            handlePhoneIconClickTelma();
                            }}>
                                <BsFillTelephoneFill/>
                                +261 34 37 413 10
                            </button>
                        </span>
                    </div>
                </div>
                
                {/* <div className='flex flex-col md:w-[65%] w-full justify-center items-center gap-4 max-w-[700px]'> */}
                <form action='https://getform.io/f/f1c0736c-f10c-48fb-9328-263100550d78' method='POST'
                className='flex flex-col md:w-[65%] w-full justify-center items-center gap-4 max-w-[700px]'>
                    <TextField 
                        name='name'
                        id="outlined-basic" 
                        label="Your name" 
                        variant="outlined" 
                        className='w-full text-slate-300'
                        required
                        color='primary'
                        InputProps={{
                            style: {
                                color:'black',
                                backgroundColor: 'rgb(203 213 225)',
                            },
                        }}
                    />
                    <TextField 
                        name='email'
                        id="outlined-basic" 
                        label="Your email" 
                        variant="outlined" 
                        className='w-full text-slate-300'
                        required
                        color='primary'
                        InputProps={{
                            style: {
                                color:'black',
                                backgroundColor: 'rgb(203 213 225)',
                            },
                        }}
                    />
                    <TextField 
                        name='message'
                        id="outlined-basic" 
                        label="Your messages" 
                        variant="outlined" 
                        className='w-full text-slate-300'
                        required
                        multiline
                        rows={10}
                        color='primary'
                        InputProps={{
                            style: {
                                color:'black',
                                backgroundColor: 'rgb(203 213 225)',
                            },
                        }}
                    />
                    <button className='bg-amber-500 shadow-lg shadow-amber-500/50 p-6 h-14 rounded-3xl font-semibold
                    hover:scale-90 hover:ease-in-out duration-300 flex items-center justify-center gap-2 group'>
                        
                        Let's collaborate
                        <span className='rotate-45 group-hover:-rotate-12 duration-300'><BsSendFill/></span>
                    </button>
                    </form>
                {/* </div> */}
            </div>
        </Element>
    )
}

export default Contact