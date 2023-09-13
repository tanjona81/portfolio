import {FC} from 'react'
import { Element, Link } from 'react-scroll';
import { H1Title } from '../components/UI/H1Titles';

interface AboutProps {
   
}

const About: FC<AboutProps> = ({}) => {
   return (
        <Element name='about' className='flex flex-col gap-10 md:gap-28 items-center justify-center md:w-[80%] w-[90%] 
        md:h-[100svh] h-auto'>
            <H1Title>About Me</H1Title>
            <div className='flex flex-col text-slate-100 gap-3'>
                <p>Hello, I'm Tanjona Rajoelison, from Madagascar, a dedicated FullStack and Mobile developer with a passion for crafting digital 
                    solutions that bridge the gap between creativity and functionality.</p>
                <p>I firmly believe that technology can be a force for positive change, and I'm committed to harnessing its 
                    potential to create elegant and user-centric solutions. With each project, my goal is not only to write 
                    clean, efficient code but also to craft experiences that seamlessly adapt to the needs of users.</p>
                <p>What sets me apart is my insatiable curiosity and commitment to staying at the forefront of technology.
                When I'm not immersed in my work, you can find me playing basketball or video games, which provides me 
                with fresh inspiration and a balanced perspective.
                </p>
                <p>As I look to the future, I see boundless opportunities in the ever-evolving landscape of web and mobile 
                    development. I'm excited to be part of a dynamic community of developers, and I'm enthusiastic about the 
                    potential for technology to shape the future in exciting and innovative ways.</p>
                <p>Thank you for visiting my portfolio. Feel free to explore my work, and if you'd like to connect or collaborate, 
                    don't hesitate to reach out. You can find my <Link to='contact'smooth={true} duration={500}>
                    <button className='text-amber-500'>contact</button></Link> information below.</p>
            </div>
            
        </Element>
    )
}

export default About