import cl from "./GearShop.module.css";

import ImageContainer from "../UI/Image/ImageContainer/ImageContainer";

const GearShop = ({gearProps}) => {
    return (
        <section className={cl.Wrapper}>
            <div className={cl.TextWrapper}>
                <h1>What gear we recommend for your adventure</h1>
                <p>For those who love the outdoors and eco-friendly adventures</p>
            </div>
            <div className={cl.GearList}>
                {
                    gearProps.map((gear, index) => 
                        <div key={index} className={cl.GearItem}>
                            <div className={cl.ImageWrapper}>
                                <ImageContainer>
                                    <img
                                        className={cl.Image}
                                        src={gear.src}
                                        alt={gear.alt}
                                    />
                                </ImageContainer>
                            </div>
                            <h3>{gear.alt}</h3>
                            <p className={cl.Price}>{gear.price}</p>
                            <p>{gear.description}</p>
                        </div>    
                    )

                }
            </div>
        </section>
    );
}
 
export default GearShop;