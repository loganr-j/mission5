const Propertycard = ({ property }) => {
    return (
        <div className="property-card">
            <h4>{property.address}</h4>
            <p>Beds: {property.bed}</p>
        </div>
    )
}

export default Propertycard