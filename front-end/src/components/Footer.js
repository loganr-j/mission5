import footerbackground from "../footerbackground.png"
import { Container, Box, Grid, TextField, Button } from '@mui/material'
import '../index.css'
import { positions, spacing,  } from "@mui/system";
import  {ReactComponent as FacebookIcon} from '../components/icons/facebookIcon.svg';
import  {ReactComponent as InstagramIcon} from '../components/icons/instagramIcon.svg';
import  {ReactComponent as LinkedinIcon} from '../components/icons/linkedinIcon.svg';
import  {ReactComponent as TwitterIcon} from '../components/icons/twitterIcon.svg';




const Footer = () => {

    return (
        <Box className="footer"  maxWidth="xl" sx={{backgroundImage:`url(${footerbackground})`}}>
            
            <img className="logo" src={require('../metro.png')} />
            <Box className="blurb">
                Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally
            </Box>
            <Grid container spacing={3} className="links">
                <Grid item >
                    <item ><FacebookIcon /></item>
                </Grid>
                <Grid item >
                    <item><InstagramIcon /></item>
                </Grid>
                <Grid item >
                    <item><LinkedinIcon /></item>
                </Grid>
                <Grid item  >
                    <item><TwitterIcon /></item>
                </Grid>
            </Grid>

            <Box className="search" >
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    // color="white"
                    focused
                />   
                <Button variant="contained" >
                    SUBSCRIBE
                </Button>        
            </Box>

        
            
        </Box>
    )     
}

export default Footer