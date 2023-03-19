const Product = () => {
    return(
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
    )
}


export default Product