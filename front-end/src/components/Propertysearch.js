import { useEffect, useState } from 'react';
import Propertycard from './Propertycard'
import Tilegrid from './propertycard/Tilegrid';
import Searchbar from './Searchbar';
const API_URL = "/api/properties/beds/"


const Propertysearch = (props) => {
    const [properties, setProperties] = useState(null)
    useEffect(() => {
        const fetchProperty = async () => {
            const response = await fetch(`${API_URL}${props.beds}`)
            const json = await response.json()

            if (response.ok) {
                setProperties(json)
            }
        }
        
        fetchProperty()
    }, [])

    return (
        <div className='home'>

            
            <div className='properties'>
                {properties && properties.map((property) => (
                    <Tilegrid key={property._id} property={property} />
                ))}
            </div>
        </div>
    )
}


export default Propertysearch