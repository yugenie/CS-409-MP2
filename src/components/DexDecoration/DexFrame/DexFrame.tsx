import './DexFrame.scss'
import DexLights from '../DexLights/DexLights'

const DexFrame = ({...props}) => {
    return (
        <div className='dexFrame' {...props}>
            <DexLights className="dexLights" />
        </div>
    )
}

export default DexFrame