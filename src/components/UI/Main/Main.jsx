import cl from "./Main.module.css";

import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";

const Main = () => {
    return (
        <main className={cl.Wrapper}>
            <Hero/>
            <hr />
            <hr />

            <hr />

            <AboutUs/>
            {/* <GearShop /> */}
            {/* <Gallery /> */}
            {/* <Review /> */}
            {/* <Blog /> */}
        </main>
    );
}

export default Main;