import React from "react";
import CartCountButton from "../../components/Common/CartCountButton";
import Footer from "../../components/Common/Footer";
import Menu from "../../components/Common/Menu";
import Banner from "../../components/Home/Banner";
const Home =()=>{
    return(<div>
        {/* Banner*/}
        <Banner/>
        {/* Menu*/}
        <Menu/>
        {/*Footer*/}
        <Footer/>
        {/*cart count button*/}
        <CartCountButton/>

    </div>

    )
}
export default Home