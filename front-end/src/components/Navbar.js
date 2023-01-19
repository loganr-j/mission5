import { Link } from 'react-router-dom'
import Banner from 'react-banner'
import { Container, Box } from '@mui/material';
import MyLogo from '../metro.png';




const Navbar = ({props}) => {

    return (
        
            <Banner
                css={{color: "white", fontSize: 20}}
                logo={<img src={require('../metro.png')}/>}
                url={ window.location.pathname }
                searchBar={false}
                items={[
                    { "content": "RENTALS", "url": "/renter" },
                    { "content": "PROPERTY MANAGMENT", "url": "/investor" },
                    { "content": "About", "url": "/about" },
                    { "content": "Contact", "url": "/about" }
                ]} />
               
         
        
            
        
    )
}

export default Navbar