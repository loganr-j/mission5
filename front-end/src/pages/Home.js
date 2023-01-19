import Navbar from '../components/Navbar';
import '../style.css';
import Footer from '../components/Footer';
import herobanner from '../HeroBanner.png';
import Contactblock from '../components/Contactblock';
import Linedivider from '../components/Linedivider';
import Services from '../components/Services';
import Emailform from '../components/Emailform';   
import { Container, Box } from '@mui/material';


const Home = () => {
    return (
        <Container maxWidth="xl" >
            <Box sx={{backgroundImage:`url(${herobanner})`, backgroundSize: 'cover' ,backgroundRepeat:"no-repeat", height:"600px"}}>
                <Navbar />
            </Box>

            <Linedivider />
            <Contactblock />
            {/* <Box sx={{height:"1000px", border: '3px dashed red'}}>
                <Contactblock />
                <Linedivider />
            </Box> */}
            <Linedivider />
            <Services />
            <Linedivider />
            <Emailform />
            <Linedivider />
            <Box  sx={{border: '3px dashed blue'}}>
                <Footer />
            </Box>
                
        </Container>
    )
}

export default Home