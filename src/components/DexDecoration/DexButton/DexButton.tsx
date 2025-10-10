import "./DexButton.scss"
const DexButton = ({...props}) => {
    const key = props.pokemon_type
    const val = props.val
    return (
        <div className='DexButton' style={{"backgroundColor": val}} onClick={props.onClick}>
            {key}
        </div>
    )
}

export default DexButton