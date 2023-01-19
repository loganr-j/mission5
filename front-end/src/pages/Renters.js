import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"
import Footer from "../components/Footer"
import Linedivider from '../components/Linedivider';
import herobanner from '../HeroBanner.png';
import Emailform from '../components/Emailform'; 
import { Container, Box } from '@mui/material';


const Renters = () => {
    return (
        
        <Container maxWidth="xl" >
            <Box sx={{backgroundImage:`url(${herobanner})`, backgroundSize: 'cover' ,backgroundRepeat:"no-repeat", height:"200px"}}>
                <Navbar />
            </Box>
            <Searchbar />
            <Linedivider />
            
            <Footer />
        </Container>
        
        
    )
}

export default Renters