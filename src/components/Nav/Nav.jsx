import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';




//DRAWER


import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: '#3e3e3e',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  background: '#3e3e3e',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



function Nav() {
  const user = useSelector((store) => store.user);







  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfile = () => {
    console.log('profile')
  }

  const handleNavTag = () => {
    console.log('profile')
  }





  return (
    <div className="nav">



      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Typography noWrap sx={{ flexGrow: 1 }} component="div">


            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
          
            >


          <HomeIcon 
          fontSize='large'
          />


</IconButton>



            </Typography>
        
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon 
              fontSize='large'
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />

        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="temporary"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon className='chevron-right' fontSize='large'  />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className='nav-row'>
            {['Profile', 'Calendar', 'Add Event', 'Organizations', 'Pending', 'Events'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className='nav-tab'>
                  {index === 0 ? <PersonIcon fontSize='large' className='nav-icon' onClick={handleProfile} /> : <HomeIcon /> &&
                  index === 1 ? <HomeIcon  fontSize='large' className='nav-icon'/> : <InboxIcon /> &&
                  index === 2 ? <AddIcon  fontSize='large'className='nav-icon'/> : <InboxIcon /> &&
                  index === 3 ? <GroupIcon  fontSize='large'className='nav-icon'/> : <InboxIcon /> &&
                  index === 4 ? <PendingActionsIcon  fontSize='large' className='nav-icon'/> : <InboxIcon /> &&
                  index === 5 ? <EventAvailableIcon  fontSize='large' className='nav-icon'/> : <InboxIcon /> 
                  } 
                </ListItemIcon>
                <ListItemText primary={text} className='nav-text' onClick={handleNavTag}/>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className='nav-logout'>
            {['Logout'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <ExitToAppIcon  fontSize='large' className='nav-icon'/> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>















      {/* If a user is logged in, show these links */}
      {/* {user.id && (
        <>
          <Link className="navLink" to="/user">
            <HomeIcon
              fontSize='large'
            />
            <br></br>
            Home
          </Link>

          <Link className="navLink" to="/userprofile">
            <PersonIcon
              fontSize='large'
              flexDirection='column'
            />
            <br></br>
            Profile
          </Link>




          <div className="navLink" >
            <MenuIcon
              fontSize='large'
              color="inherit"
              aria-label="open drawer"


            />
            <br></br>
            Menu
          </div>


          <LogOutButton className="navLink" />
        </>
      )} */}

      {/* <Link className="navLink" to="/about">
          <ExitToAppIcon 
          fontSize='large'
          />
        </Link> */}





    </div>
  );
}

export default Nav;
