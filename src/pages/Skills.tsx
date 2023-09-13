import { Element } from 'react-scroll';
import { H1Title } from '../components/UI/H1Titles';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Skills(){
    return (
        <Element name='skills' className='flex flex-col gap-10 md:gap-28 items-center justify-center md:w-[100%] w-[90%] 
        md:h-[100svh] h-auto'>
            <H1Title>My Skills</H1Title>
            <div className='flex md:w-[80%] w-full justify-center md:gap-12 gap-8 md:flex-row flex-col'>
                <div className='flex flex-col w-full rounded-3xl bg-slate-950 border-slate-900 border-2 bg-opacity-80 hover:bg-opacity-95 duration-300
                 p-4 gap-5'>
                    <h2 className='font-bold text-amber-500 text-center text-lg'>Backend Developer</h2>
                    <section className='grid grid-cols-2 justify-items-center gap-12'>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Node.js (Express.js)</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>PHP (Laravel)</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>JAVA (Spring boot)</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>PostgreSql</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Advanced</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>MySql</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>MongoDB</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
            
                <div className='flex flex-col w-full rounded-3xl bg-slate-950 border-slate-900 border-2 bg-opacity-80 hover:bg-opacity-95 duration-300
                 p-4 gap-5 justify-center items-center'>
                    <h2 className='font-bold text-amber-500 text-center text-lg'>Frontend Developer</h2>
                    <section className='grid grid-cols-2 justify-items-center gap-12'>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>React</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Next</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Tailwindcss</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Bootstrap</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            {/* <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>MongoDB</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div> */}
                        </div>
                    </section>
                </div>
                <div className='flex flex-col w-full rounded-3xl bg-slate-950 border-slate-900 border-2 bg-opacity-80 hover:bg-opacity-95 duration-300
                 p-4 gap-5 justify-center items-center'>
                    <h2 className='font-bold text-amber-500 text-center text-lg'>Mobile Developer</h2>
                    <section className='grid grid-cols-2 justify-items-center gap-12'>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Flutter</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Ionic</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-slate-100'/>
                                    <span className='text-slate-100'>Sqlite</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='opacity-0'/>
                                    <span className='text-slate-300 font-light'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Element>
    )
}
