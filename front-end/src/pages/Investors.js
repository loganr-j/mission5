import Navbar from "../components/Navbar"
import Propertysearch from "../components/Propertysearch"
import Searchbar from "../components/Searchbar"

const Investors = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Propertysearch value="3"/>
        </div>
        

        // <div className="investors">
        //     <h2>Investors</h2>
        // </div>
    )
}

export default Investors