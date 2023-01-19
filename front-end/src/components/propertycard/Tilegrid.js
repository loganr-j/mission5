import './propertyCard.css'
import Infotile from './Infotile'

const Tilegrid = ( { property } ) => {
    
    return (
        <div className='propertycard'>
            <img className='housebanner' src={require(`./images/${property.picture}`)} alt="text"></img>

            <div className='address'>{property.address}</div>
            <div className='rent'>${property.rent}</div>
            <div className='available'>available 01/01/22</div> 
        
            <div className="wrapper">

                <Infotile value={"bed"} qty={property.bed}/>
                <Infotile value={"bath"} qty={property.bath}/>
                <Infotile value={"carparks"} qty={property.carparks}/>
                <Infotile value={"streetparks"} qty={property.streetparks}/>
                <Infotile value={"heat"} qty={property.heat}/>
                <Infotile value={"pets"} qty={property.pet}/>
            
            </div>

        </div>
    )
}

export default Tilegrid