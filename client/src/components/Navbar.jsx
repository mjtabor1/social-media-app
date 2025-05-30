import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { text: 'Home', path: '/feed' },
    { text: 'Profile', path: '/profile' },
    { text: 'Settings', path: '/settings' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar 
      position="static"
      elevation={6}
      sx={{
        background: '#968dff', // Gradient effect
        boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="secondary"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          color='secondary'
          fontWeight={'bold'}
          sx={{ flexGrow: 1, cursor: 'pointer', paddingLeft: '1rem' }}
          onClick={() => handleNav('/feed')}
        >
          SocialSphere
        </Typography>
        <>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box
              sx={{ width: 200 }}
              role="presentation"
              onClick={() => setDrawerOpen(false)}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem sx={{ cursor: 'pointer' }} button key={item.text} onClick={() => handleNav(item.path)}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.text} color="secondary" onClick={() => handleNav(item.path)}>
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );

}