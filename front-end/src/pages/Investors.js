import Navbar from "../components/Navbar"
import Propertysearch from "../components/Propertysearch"
import Searchbar from "../components/Searchbar"
import herobanner from '../HeroBanner.png';
import { Container, Box } from '@mui/material';
import Footer from "../components/Footer";
import Emailform from '../components/Emailform';



const Investors = () => {
    return (
        
        <Container maxWidth="xl" >
            <Box sx={{backgroundImage:`url(${herobanner})`, backgroundSize: 'cover' ,backgroundRepeat:"no-repeat", height:"200px"}}>
                <Navbar />
            </Box>
            <Box sx={{height: "600px"}}>
                <h1>PAGE UNDER CONSTRUCTION</h1>
            </Box>
            <Emailform />
            <Footer />
            
        </Container >
            
       
        

        // <div className="investors">
        //     <h2>Investors</h2>
        // </div>
    )
}

export default Investors