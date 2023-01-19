import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import './Contact.css'

const Emailform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // add code here to send the email
    console.log("Form submitted")
  }

  return (

    <Grid className='emailform' container spacing={4} alignItems="Center" sx={{height: "400px"}}>
        <Grid item xl={6} lg={6} md={12} sm={12} alignItems="Center" >
            <br/>
            <h1>GET IN TOUCH</h1>
            <h2>09 391 4642</h2>
            <h2>info@metronz.co.nz</h2>
            <br/>
        </Grid>
        <Grid item  xl={6} lg={6} >
            <Grid item container spacing={2}  onSubmit={handleSubmit}>
                        
                <Grid item xl={6} lg={6} md={6} sm={6}  >
                    <input type="text" value={name} placeholder={"NAME"} onChange={e => setName(e.target.value)} />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6}>
                    <input type="email" value={email} placeholder={"EMAIL"} onChange={e => setEmail(e.target.value)} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <input type="text" value={subject} placeholder={"SUBJECT"} onChange={e => setSubject(e.target.value)} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>                        
                    <textarea value={message} placeholder={"MESSAGE"} onChange={e => setMessage(e.target.value)} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <button className='send' type="submit">SEND</button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>

  );
};

export default Emailform;