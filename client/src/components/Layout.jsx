import React from 'react';
import {NavBar} from './Navbar'
import { Container } from '@mui/material';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <Container sx={{ mt: 4 }}>
      {children}
    </Container>
  </>
);

export default Layout;
