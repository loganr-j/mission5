import { useEffect, useState } from 'react';
import Propertycard from './Propertycard'
const API_URL = "/api/properties/beds/"


const Propertysearch = (props) => {
    const [properties, setProperties] = useState(null)
    useEffect(() => {
        const fetchProperty = async () => {
            const response = await fetch(`${API_URL}${props.value}`)
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
                    <Propertycard key={property._id} property={property} />
                ))}
            </div>
        </div>
    )
}


export default Propertysearch