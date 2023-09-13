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
        <Element name='home' className='flex flex-col lg:flex-row lg:justify-between items-center justify-center 
        lg:w-[80%] w-[90%] lg:h-screen h-auto pt-16 lg:overflow-hidden lg:gap-0 gap-4'>
            <div className='flex items-center justify-center lg:w-full w-[60%]'>
                <img src='/place1.png' alt='Tanjona pick' className='w-full'></img>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 w-full'>
                <h2 className='text-lg lg:text-xl text-slate-100'>Hello, I am </h2>
                <h1 className='text-3xl lg:text-4xl text-amber-500'>Tanjona Rajoelison</h1>
                <h2 className='text-lg lg:text-xl text-slate-100 font-semibold'>a FullStack and Mobile Developer</h2>
                <p className='text-sm lg:text-base text-slate-100' >
                    Welcome to my official portfolio website, where I take immense pride in presenting a comprehensive 
                    display of my personalities, works, and skills.
                </p>
                <div className='flex justify-center items-center gap-4'>
                    <button className='border-2 p-4 rounded-3xl bg-slate-100 text-black font-bold
                    hover:bg-amber-500 hover:border-amber-500 hover:scale-110 ease-in-out duration-300 lg:text-base text-xs'
                    onClick={()=>{
                        DownloadExistingPDF();
                    }}
                    name='download_cv'>
                        Download CV
                    </button>
                    <Link to='contact'smooth={true} duration={500} name='link_contact'>
                        <button className='flex group items-center justify-center border-2 p-4 rounded-3xl bg-slate-100 
                        text-black font-bold hover:bg-amber-500 hover:border-amber-500 hover:scale-110 ease-in-out 
                        duration-300 gap-2 lg:text-base text-xs' name='contact'>
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