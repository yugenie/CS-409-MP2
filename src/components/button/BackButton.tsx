import { Link } from "react-router-dom"
import "./BackButton.scss"
const BackButton = ({path} : any) => {
    return (
        <Link to={path} id='back_button'>&lt;</Link>
    )
}

export default BackButton