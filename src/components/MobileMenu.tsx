'use client'

import {FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CodeIcon from '@mui/icons-material/Code';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-scroll';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface MobileMenuProps {
}

interface Lien{
    name: React.Key,
    lien: string,
    icon?: React.ReactElement;
}

const liens : Lien[] =[
    {
        name:'Home',
        lien:'home',
        icon: <HomeIcon color="primary" />
    },
    {
        name:'About',
        lien:'about',
        icon: <InfoIcon color="primary"/>
    },
    {
        name:'Resume',
        lien:'resume',
        icon: <ContactPageIcon color="primary"/>
    },
    {
        name:'Skills',
        lien:'skills',
        icon: <CodeIcon color="primary"/>
    },
    {
      name:'Works',
      lien:'works',
      icon: <WorkIcon color="primary"/>
    },
    {
      name:'Contact',
      lien:'contact',
      icon: <AccountCircleIcon color="primary"/>
    },
]

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      className='flex flex-col gap-4 justify-center bg-slate-900 h-screen z-50'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="Mobile menu"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {liens.map((rep, index) => (
          rep.name === 'divider' 
            ? <Divider key={`divider-${index}`} />
            : <ListItem key={rep.name} disablePadding className='hover:bg-amber-500 text-white'>
                <Link to={rep.lien} smooth={true} duration={500} name={rep.lien} onClick={()=>{
                  setState({ ...state, left: false });
                }}>
                  <ListItemButton>
                    <ListItemIcon>
                      {rep.icon}
                    </ListItemIcon>
                    <ListItemText primary={rep.name} className='w-48'/>
                  </ListItemButton>
                </Link>
              </ListItem>
          ))}
        </List>
    </Box>
  );

  return (
    <div className='flex lg:hidden items-center fixed top-2 right-0 m-[-1px] z-20'>
        <React.Fragment key='left'>
          <Button onClick={toggleDrawer('left', true)} name='mobile_button'>
            <FaBars className='text-base'/>
          </Button>
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default MobileMenu