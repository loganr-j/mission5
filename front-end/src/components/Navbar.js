import { Link } from 'react-router-dom'
import Banner from 'react-banner'
import MyLogo from '../metro.png';

const Navbar = () => {

    return (
        <Banner
            logo={<img src={require('../metro.png')}/>}
            url={ window.location.pathname }
            searchBar={false}
            items={[
                { "content": "Renter", "url": "/renter" },
                { "content": "Investor", "url": "/investor" },
                { "content": "About", "url": "/about" },
                { "content": "Contact", "url": "/about" }
            ]} />
           
            
        
    )
}

export default Navbar