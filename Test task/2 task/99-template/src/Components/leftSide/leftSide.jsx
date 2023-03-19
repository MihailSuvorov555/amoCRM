import LeftHeader from "./leftHeader/leftHeader"
import Tagline from "./tagline/tagline"
import Footer from "./footer/footer"

const LeftSide = () => {
    return (
    <div className="leftSide">
        <LeftHeader></LeftHeader>
        <Tagline></Tagline>
        <Footer></Footer>
    </div>
    )
}

export default LeftSide