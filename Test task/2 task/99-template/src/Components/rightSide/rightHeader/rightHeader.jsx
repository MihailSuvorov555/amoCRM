import {FaTelegramPlane} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import './rightHeader.css'

const RightHeader = () => {
    return(
        <div className="menuRight">
            <span>+7 555 555-55-55</span>
            <a className='icon'><FaTelegramPlane/></a>
            <a className='icon'><BiPhoneCall/></a>
            <a className='icon'><BsWhatsapp/></a>
        </div>
    )
}
export default RightHeader