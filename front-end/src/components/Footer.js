import footerbackground from "../footerbackground.png"
import '../index.css'

const Footer = () => {

    return (
        <div className="footer" style={{backgroundImage:`url(${footerbackground})`}}>
            hello world
        </div>
    )     
}

export default Footer