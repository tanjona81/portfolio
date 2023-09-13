import {FC} from 'react'
import { Element } from 'react-scroll';
import { H1Title } from '../components/UI/H1Titles';
import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface ResumeProps {
   
}

const Resume: FC<ResumeProps> = ({}) => {
    const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

   return (
        <Element name='resume' className='flex flex-col gap-10 lg:gap-28 items-center justify-center lg:w-[80%] w-[100%] lg:h-[100svh] h-auto'>
            <H1Title>My Background</H1Title>
            <div className='flex lg:flex-row flex-col justify-center lg:gap-12 gap-8 lg:w-[80%] w-full px-6'>
                <div className='flex flex-col w-full rounded-xl bg-amber-500 bg-opacity-80 hover:bg-opacity-95 duration-300
                 p-4 gap-5'>
                    <h2 className='font-bold text-lg text-center text-slate-900'>EXPERIENCE</h2>
                    <section className='gap-2'>
                        <p className='font-light'>AUG. 2022 - NOV. 2022</p>
                        <button className='text-slate-900 text-lg'
                        onClick={handleClickOpen('paper')} name='open'>
                            Intern Laravel Developer
                        </button>
                        <p className='font-light'>INSTAT Madagascar</p>
                    </section>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Intern Laravel Developer</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <p>Type: Website</p><br/>
                            <p>Technologies: Laravel, MySql, Ajax</p><br/>
                            <p>About: The objective of this project is to enhance the functionality of the Instat Madagascar 
                                website by incorporating additional features and capabilities.</p><br/>
                            <p>Functionalities: The project entails implementing several key functionalities. Firstly, it 
                                enables the administrator to dynamically modify website menus and content blocks. Secondly, 
                                it allows the admin to effortlessly import critical data from Excel files and visualize this 
                                data through graphs or structured tables. Concurrently, front-end users gain the ability to 
                                access and interpret imported data graphically. Thirdly, the system equips the admin with the 
                                capability to track user visits on the site without relying on external tools like Google 
                                Analytics. Lastly, it provides the admin with insights into the number of downloads per file, 
                                enhancing data-driven decision-making.</p>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} name='close'>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className='flex flex-col w-full rounded-xl bg-amber-500 bg-opacity-80 hover:bg-opacity-95 duration-300
                 p-4 gap-5'>
                    <h2 className='font-bold text-lg text-center text-slate-900'>EDUCATION</h2>
                    <section className='gap-2'>
                        <p className='font-light'>2019 - 2022</p>
                        <h3 className='text-slate-900 text-lg'>Bachelor's degree in Development</h3>
                        <p className='font-light'>ITUniversity Madagascar</p>
                    </section>
                    <section className='gap-2'>
                        <p className='font-light'>JAN. 2023</p>
                        <h3 className='text-slate-900 text-lg'>Certificate in Web Development</h3>
                        <p className='font-light'>Orange Digital Center</p>
                    </section>
                </div>
            </div>
        </Element>
    )
}

export default Resume