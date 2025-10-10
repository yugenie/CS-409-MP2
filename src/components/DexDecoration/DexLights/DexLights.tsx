import './DexLights.scss'
import { Link } from 'react-router-dom'

const DexLights = ({...props}) => {
    return (
        <div className="dexLights" {...props}>
            <Link to="/" className="bigLight"></Link>
            <span className="lights"></span>
            <span className="lights"></span>
            <span className="lights"></span>
        </div>
    )
}

export default DexLights