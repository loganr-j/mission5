import { style } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';
import './Contact.css'; 

const Contactblock = () => {
  return (
    
    <Grid className="row">
      <Grid item className="left-col">
        <img src={require('./icons/officestock.png')} />
      </Grid>
      <Grid item className="right-col">
        <h1>Helping clients to achieve harmony through our expertise and skills</h1>
        <p>Metro NZ is one of the top Auckland Property Management companies. All of our staff are property investors who have expert knowledge of the property market and your best interest in mind at all times. Check out our tailored services we offer as an Auckland property management company.</p>
        <button>CALL</button>
        <button>EMAIL</button>
      </Grid>
    </Grid>
    
  );
}

export default Contactblock;