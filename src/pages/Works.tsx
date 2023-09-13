import {FC} from 'react'
import { Element } from 'react-scroll'
import { H1Title } from '../components/UI/H1Titles'
import { HiArrowNarrowRight } from 'react-icons/hi'

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

interface WorksProps {
   
}

const Works: FC<WorksProps> = ({}) => {
    const [open_infrastructure, setOpen_infrastructure] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const [open_restaurant, setOpen_restaurant] = React.useState(false);
    const [open_audit, setOpen_audit] = React.useState(false);
    const [open_commerce, setOpen_commerce] = React.useState(false);

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen_infrastructure(true);
        setScroll(scrollType);
    };
    const handleClickOpen_a = (scrollType: DialogProps['scroll']) => () => {
        setOpen_audit(true);
        setScroll(scrollType);
    };
    const handleClickOpen_e = (scrollType: DialogProps['scroll']) => () => {
        setOpen_commerce(true);
        setScroll(scrollType);
    };
    const handleClickOpen_restaurant = (scrollType: DialogProps['scroll']) => () => {
        setOpen_restaurant(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen_infrastructure(false);
    };
    const handleClose_r = () => {
        setOpen_restaurant(false);
    };
    const handleClose_a = () => {
        setOpen_audit(false);
    };
    const handleClose_e = () => {
        setOpen_commerce(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open_infrastructure) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open_infrastructure]);

   return (
        <Element name='works' className='flex flex-col gap-10 md:gap-10 items-center justify-center md:w-[80%] w-[90%] 
        md:h-[100vh] h-auto'>
            <H1Title>My Works</H1Title>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className="flex flex-col items-center p-4 md:justify-self-end justify-self-center border border-slate-500 rounded-2xl 
                bg-slate-500 gap-2 w-full">
                    <div className="bg-[url('assets/images/p1.jpg')] group w-full h-44 bg-cover bg-center bg-no-repeat border 
                    border-slate-500 shadow-lg rounded-2xl flex items-center justify-center">
                        <button className='items-center justify-center gap-2 border rounded-md p-2 
                        border-slate-800 hover:skew-x-6 duration-300 hover:ease-in-out bg-slate-800 
                        text-slate-200 hover:scale-95 flex 2xl:hidden 2xl:group-hover:flex text-2xl'
                        onClick={handleClickOpen('paper')}>
                            Details 
                            <span><HiArrowNarrowRight/></span>
                        </button>
                    </div>
                    <p className='font-light'>Type: Website and Modile application</p>
                    <p className='font-medium'>Infrastructure problem reporting</p>
                    <Dialog
                        open={open_infrastructure}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Infrastructure problem reporting</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <p>Status: <span className='text-green-400'>Not deployed</span></p><br/>
                            <p>Type: Website and Modile application</p><br/>
                            <p>Technologies: <span className=''>JAVA(Spring boot), Ionic, Angular, PostgreSql</span></p><br/>
                            <p>About: This university project, assigned by ITUniversity, focused on simplifying infrastructure 
                                reporting for end-users. Its goal was to create an accessible web platform that streamlines the 
                                generation and access of infrastructure-related reports, enhancing efficiency in infrastructure 
                                management.
                            </p><br/>
                            <p>Functionalities: Using Ionic, I developed a mobile application enabling users to submit reports, 
                                each requiring photographic evidence of the issue. These reports are subsequently managed by 
                                administrators in a Java Spring Boot and Angular-based web application. Within 
                                the back office, administrators have the capability to view and organize reports, either through
                                 a comprehensive map interface or a structured table format.
                            </p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <button onClick={handleClose}>Close</button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='flex flex-col items-center p-4 border md:justify-self-start justify-self-center 
                border-slate-500 rounded-2xl bg-slate-500 gap-2 w-[100%]'>
                    <div className="bg-[url('assets/images/p3.jpg')] group w-full h-44 bg-cover bg-center bg-no-repeat border 
                    border-slate-500 shadow-lg rounded-2xl flex items-center justify-center">
                        <button className='items-center justify-center gap-2 border rounded-md p-2 
                        border-slate-800 hover:skew-x-6 duration-300 hover:ease-in-out bg-slate-800 
                        text-slate-200 hover:scale-95 flex 2xl:hidden 2xl:group-hover:flex text-2xl'
                        onClick={handleClickOpen_restaurant('paper')}>
                            Details 
                            <span><HiArrowNarrowRight/></span>
                        </button>
                    </div>
                    <p className='font-light'>Type: Windows Application</p>
                    <p className='font-medium'>Restaurant management</p>
                    <Dialog
                        open={open_restaurant}
                        onClose={handleClose_r}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Restaurant management</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <p>Status: <span className='text-green-400'>Not deployed</span></p><br/>
                            <p>Type: Windows Application</p><br/>
                            <p>Technologies: <span className=''>C#, MSSQL</span></p><br/>
                            <p>About: This project, a part of my studies at ITUniversity, aims to simplify restaurant operations.
                            </p><br/>
                            <p>Functionalities: I developed a Windows application using C# and MSSQL to streamline restaurant 
                                operations. This application allows waitstaff to take orders via tablets, which are then 
                                transmitted to the kitchen. Upon order completion, chefs send notifications for order readiness. Finally, cashiers easily review and process payments by checking order details.
                            </p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <button onClick={handleClose_r}>Close</button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='flex flex-col items-center p-4 justify-self-center md:justify-self-end border border-slate-500 rounded-2xl 
                bg-slate-500 gap-2 w-[100%]'>
                    <div className="bg-[url('assets/images/p2.png')] group w-full h-44 bg-cover bg-center bg-no-repeat border 
                    border-slate-500 shadow-lg rounded-2xl flex items-center justify-center">
                        <button className='items-center justify-center gap-2 border rounded-md p-2 
                        border-slate-800 hover:skew-x-6 duration-300 hover:ease-in-out bg-slate-800 
                        text-slate-200 hover:scale-95 flex 2xl:hidden 2xl:group-hover:flex text-2xl'
                        onClick={handleClickOpen_a('paper')}>
                            Details 
                            <span><HiArrowNarrowRight/></span>
                        </button>
                    </div>
                    <p className='font-light'>Type: Mobile application</p>
                    <p className='font-medium'>Audit management</p>
                    <Dialog
                        open={open_audit}
                        onClose={handleClose_a}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Audit management</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <p>Status: <span className='text-green-400'>Not deployed</span></p><br/>
                            <p>Type: Mobile Application</p><br/>
                            <p>Technologies: <span className=''>Flutter, PostgreSql, Sqlite</span></p><br/>
                            <p>About: The goal of this project is to improve the efficiency of the audit process by automating 
                                repetitive tasks, such as scheduling, assignment, and report generation, reducing manual 
                                efforts and the risk of errors.
                            </p><br/>
                            <p>Functionalities: The audit process begins with an administrator initiating the audit and 
                                designating an audit lead. Subsequently, the assigned auditor conducts the assessment and 
                                submits the completed audit for review. Finally, the administrator has the option to analyze 
                                the audit data through graphical visualizations or structured tables. Additionally, the 
                                administrator can export the audit report in both PDF and Excel formats for further analysis or 
                                documentation.
                            </p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <button onClick={handleClose_a}>Close</button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='flex flex-col items-center p-4 justify-self-center md:justify-self-start border border-slate-500 rounded-2xl bg-slate-500 gap-2 
                w-[100%]'>
                    <div className="bg-[url('assets/images/p4.png')] group w-full h-44 bg-cover bg-center bg-no-repeat border 
                    border-slate-500 shadow-lg rounded-2xl flex items-center justify-center">
                        <button className='items-center justify-center gap-2 border rounded-md p-2 
                        border-slate-800 hover:skew-x-6 duration-300 hover:ease-in-out bg-slate-800 
                        text-slate-200 hover:scale-95 flex 2xl:hidden 2xl:group-hover:flex text-2xl'
                        onClick={handleClickOpen_e('paper')}>
                            Details 
                            <span><HiArrowNarrowRight/></span>
                        </button>
                    </div>
                    <p className='font-light'>Type: Website</p>
                    <p className='font-medium'>E-commerce</p>
                    <Dialog
                        open={open_commerce}
                        onClose={handleClose_e}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">E-commerce</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <p>Status: <span className='text-green-400'>Not deployed</span></p><br/>
                            <p>Type: Website</p><br/>
                            <p>Technologies: <span className=''>Node.js, Next (Typescript), PostgreSql</span></p><br/>
                            <p>About: The goal of this project is to provide a digital marketplace where businesses can 
                                showcase and sell their products or services to a wide audience, thereby boosting sales and 
                                revenue
                            </p><br/>
                            <p>Functionalities: In the back office, sellers upload their products for display and purchase by 
                                client users. Once clients browse, compare, and select the products they desire, they can 
                                easily make purchases from the convenience of their own homes.
                            </p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <button onClick={handleClose_e}>Close</button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </Element>
    )
}

export default Works