import RightHeader from "./rightHeader/rightHeader"
import Product from "./product/product"
import FooterRight from "./footerRight/footerRight"

const RightSide = () => {
    return(
        <div className="rightSide">
            <RightHeader></RightHeader>
            <Product></Product>
            <FooterRight></FooterRight>
        </div>
    )
}
export default RightSide