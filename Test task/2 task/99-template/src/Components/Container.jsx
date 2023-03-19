import './Container.css';
import {FaTelegramPlane} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'

const Container = () => {
    return (
<div className='container'>
    <div className="leftSide">
        <div className='menuLeft'>
            <div className='logo'>
                <a href="/">
                    <img src='https://welbex.ru/wp-content/themes/welbex/assets/img/logo-part1.svg'/>
                    <img src='https://welbex.ru/wp-content/themes/welbex/assets/img/logo-part2.svg'/>
                </a>
                <h6 className='textLogo'>крупный интегратор CRM <br /> в России и ещё 8 странах</h6>
            </div>
            <button className="Header">Услуги</button>
            <button className="Header">Виджеты</button>
            <button className="Header">Интеграции</button>
            <button className="Header">Кейсы</button>
            <button className="Header">Сертификаты</button>
        </div>
        <div className="tagline">
            <h1>Зарабатывайте <br /> больше <br /> <p className='welbex'>c WELBEX</p></h1>
            <br />
            <h4 className='txt'>Развиваем и контролируем <br /> продажи за вас</h4>
        </div>
        <div className='footer'>
            <div className='leftMenuFooter'>
                <h5>O компании</h5>
                <button className="btnFooter">Партнерская программа</button>
                <button className="btnFooter">Вакансии</button>
            </div>
            <div className='rigthFooter'>
                <div className='mmenu'>
                    <h5>Меню</h5>
                </div>
                <div className='menu'>
                    <div className='leftMenuFooter'>
                        <button className="btnFooter">Расчёт стоимости</button>
                        <button className="btnFooter">Услуги</button>
                        <button className="btnFooter">Виджеты</button>
                        <button className="btnFooter">Интеграции</button>
                        <button className="btnFooter">Наши клиенты</button>
                    </div>
                    <div className="rightMenuFooter">
                        <button className="btnFooter">Кейсы</button>
                        <button className="btnFooter">Благодарственные письма</button>
                        <button className="btnFooter">Сертификаты</button>
                        <button className="btnFooter">Блог на YouTube</button>
                        <button className="btnFooter">Вопрос / Ответ</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
        <div className="rightSide">
            <div className="menuRight">
                <span>+7 555 555-55-55</span>
                <a className='icon'><FaTelegramPlane/></a>
                <a className='icon'><BiPhoneCall/></a>
                <a className='icon'><BsWhatsapp/></a>
            </div>
            <div className="product">
                <div className="productFlex">
                    <div className="item1"><h3>Вместе c <span className='welbex'>БЕСПЛАТНОЙ</span><br /><span className='welbex'>КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h3></div>
                    <div className="item2"><h4>ВИДЖЕТЫ <br /><h5 className='indent'>30 готовых <br /><p className='identSolutions'> решений</p></h5></h4></div>
                    <div className="item3"><h4>DASHBOARD <br /><h5 className='indentBusines'>c показателями <br /><p className='indentBusines'> вашего бизнеса</p></h5></h4></div>
                    <div className="item4"><h4>SKYPE АУДИТ <br /><h5 className='indentSale'> отдела продаж<br /><p className='indentSale1'> и CRM системы</p></h5></h4></div>
                    <div className="item5"><h4><p className='indent35'> 35 ДНЕЙ<br /></p><h5 className='identUse'>использования<br /><p className='indentCRM'> CRM</p></h5></h4></div>
                    <br />
                    <div className="item6"><button className='consultation'>Получить консультацию</button></div>
                </div>
             </div>
            <div className='footerRightSide'>
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
        </div>
        <figure class="circle"></figure>
        <figure class="circle1"></figure>
        <figure class="circle2"></figure>
        <div className="redColor"></div>
        <div className="purpleColor"></div>
</div>
    )
}

export default Container