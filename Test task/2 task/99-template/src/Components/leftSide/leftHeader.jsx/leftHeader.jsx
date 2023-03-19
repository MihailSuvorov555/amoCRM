import './leftHeader.css';

const LeftHeader = () => {
    return(
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
    )
}

export default LeftHeader