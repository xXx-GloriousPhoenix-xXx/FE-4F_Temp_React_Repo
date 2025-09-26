import cl from "./Gallery.module.css";

import ImageReference from "../UI/Image/ImageReference/ImageReference";

const Gallery = () => {
    return (
        <section className={cl.Wrapper}>
            <div className={cl.TextWrapper}>
                <h1>Our Camping Adventures</h1>
                <p>who are in extreme love with nature and outdoor activities</p>
            </div>
            <div className={cl.Grid}>
                <div className={cl.TopLeft}>
                    <ImageReference imgSrc="img/gallery/choosing-place.webp"/>
                </div>
                <div className={cl.BottomLeft}>
                    <ImageReference imgSrc="img/gallery/tent-putting.webp"/>
                </div>
                <div className={cl.TopRight}>
                    <ImageReference imgSrc="img/gallery/campfire-making.jpg"/>
                </div>
                <div className={cl.BottomMiddle}>
                    <ImageReference imgSrc="img/gallery/camping-stove-cooking.jpg"/>
                </div>
                <div className={cl.BottomRight}>
                    <ImageReference imgSrc="img/gallery/camp-relaxing.webp"/>
                </div>
            </div>
        </section>
    );
}
 
export default Gallery;