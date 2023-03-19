import {FaTelegramPlane} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'

const FooterRight = () => {
    return(
        <>
       <    div className='footerRightSide'>
                <h5>Контакты</h5>
                <span>+7 555 555-55-55</span>
                <div className='footerIcon'>
                    <a className='icon'><FaTelegramPlane/></a>
                    <a className='icon'><BiPhoneCall/></a>
                    <a className='icon'><BsWhatsapp/></a>
                </div>
                <span>Москва, Путевой проезд 3c1, к 902</span>
            </div>
            <div className='rights'>
                <h6>©WELBEX 2022. Bce права защищены.</h6>
                <h6 className='politic'>Политика конфиденциальности</h6>
            </div>
        </>
        
    )
}

export default FooterRight