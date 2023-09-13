import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Element, Link } from 'react-scroll';

const Home =() => {
    function DownloadExistingPDF() {
        const pdfUrl = 'cv.pdf';
    
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'CV.pdf';
        a.style.display = 'none';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <Element name='home' className='flex flex-col md:flex-row md:justify-between items-center justify-center w-[80%] h-screen 
        overflow-hidden md:gap-0 gap-4'>
            <div className='flex items-center justify-center w-full'>
            {/* <img src='/place.png' alt='Tanjona pick' className='h-[65%]'></img> */}
                {/* <img src='/1_decoupe.png' alt='Tanjona pick' className='h-[65%]'></img> */}
                <img src='/place1.png' alt='Tanjona pick' className=''></img>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 w-full'>
                <h2 className='text-lg md:text-xl text-slate-100'>Hello, I am </h2>
                <h1 className='text-3xl md:text-4xl text-amber-500'>Tanjona Rajoelison</h1>
                <h2 className='text-lg md:text-xl text-slate-100 font-semibold'>a FullStack and Mobile Developer</h2>
                <p className='text-sm md:text-base text-slate-100' >
                    Welcome to my official portfolio website, where I take immense pride in presenting a comprehensive 
                    display of my personalities, works, and skills.
                </p>
                <div className='flex justify-center items-center gap-4'>
                    <button className='border-2 p-4 rounded-3xl bg-slate-100 text-black font-bold
                    hover:bg-amber-500 hover:border-amber-500 hover:scale-110 ease-in-out duration-300'
                    onClick={()=>{
                        DownloadExistingPDF();
                    }}>
                        Download CV
                    </button>
                    <Link to='contact'smooth={true} duration={500}>
                        <button className='flex group items-center justify-center border-2 p-4 rounded-3xl bg-slate-100 
                        text-black font-bold hover:bg-amber-500 hover:border-amber-500 hover:scale-110 ease-in-out 
                        duration-300 gap-2'>
                            Contact Me
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight/></span>
                        </button>
                    </Link>
                </div>
            </div>
            
        </Element>
    )
}

export default Home;