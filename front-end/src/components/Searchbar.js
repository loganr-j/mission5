
import Propertysearch from "./Propertysearch";
import { useState, useEffect } from "react";

const Searchbar = ({props1}) => {

    const [searchTermBeds, setSearchTermBeds] = useState("");
    const [searchTermBath, setSearchTermBath] = useState("");

    const handleChange = (event) => {
    // 👇 Get input value from "event"
    setSearchTermBeds(event.target.value);
    };
    
    return(
        <div className="searchbar">
            <input className="Bedsearch"
                value={searchTermBeds}
                onChange={(e) => setSearchTermBeds(e.target.value)}
                // onChange={(e) => console.log(e.target.value)}
                
                placeholder="beds"
            />
            <input className="Bathsearch"
                value={searchTermBath}
                onChange={(e) => setSearchTermBath(e.target.value)}
                // onChange={(e) => console.log(e.target.value)}
                
                placeholder="Bath"
            />
            
            <Propertysearch key={searchTermBeds} beds={searchTermBeds}/>
        </div>
    )
    
}


export default Searchbar