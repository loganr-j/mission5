import './propertyCard.css'


const Infotile = ( { value, qty } ) => {
    return (
        <div className="info-card">
            <img src={require(`./icons/${value}Icon.png`)} alt="text"></img>
            <p className='info'>{qty}</p>
           
            
        </div>
    )
}

export default Infotile