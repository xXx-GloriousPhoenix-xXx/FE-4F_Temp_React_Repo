import cl from "./Main.module.css";

import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import GearShop from "../GearShop/GearShop";
import Gallery from "../Gallery/Gallery";

const Main = () => {
    const gearProps = [
        { src: "img/shop-items/tent.jpg", alt: "Tent", description: "Spacious and waterproof, perfect for 2 people.", price: "$145" },
        { src: "img/shop-items/sleeping-bag.jpg", alt: "Sleeping Bag", description: "Warm and lightweight, ideal for all seasons.", price: "$85" },
        { src: "img/shop-items/camping-stove.webp", alt: "Camping Stove", description: "Portable and easy to use, ideal for cooking outdoors.", price: "$60" },
        { src: "img/shop-items/hiking-backpack.webp", alt: "Hiking Backpack", description: "Durable, ergonomic, with multiple compartments.", price: "$30" },
        { src: "img/shop-items/headlamp.webp", alt: "Headlamp", description: "Hands-free lighting for night hikes and camping.", price: "$30" },
        { src: "img/shop-items/portable-chair.webp", alt: "Portable Chair", description: "Comfortable, foldable, and easy to carry.", price: "$25" },
        { src: "img/shop-items/water-bottle.webp", alt: "Water Bottle", description: "Insulated and reusable, keeps drinks hot or cold.", price: "$20" },
        { src: "img/shop-items/multitool-kit.webp", alt: "Multitool Kit", description: "Versatile toolset for various outdoor tasks.", price: "$40" }
    ];
    return (
        <main className={cl.Wrapper}>
            <Hero/>
            <AboutUs/>
            <GearShop gearProps={gearProps}/>
            <Gallery />
            <Review />
            {/* <Blog /> */}
        </main>
    );
}

export default Main;