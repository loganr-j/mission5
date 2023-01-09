import Navbar from '../components/Navbar';
import Herobanner from '../components/Herobanner';
import '../style.css';
import Footer from '../components/Footer';
import herobanner from '../HeroBanner.png';

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${herobanner})`, backgroundSize: 'cover' ,backgroundRepeat:"no-repeat", height:"628px"}}>
            <Navbar />

            {/* <Herobanner /> */}
            <Footer />
        </div>
    )
}

export default Home