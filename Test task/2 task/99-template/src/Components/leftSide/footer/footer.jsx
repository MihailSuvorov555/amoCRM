
const Footer = () => {
    return (
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
    )
}

export default Footer