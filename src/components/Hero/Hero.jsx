import cl from './Hero.module.css';

import ImageReference from '../UI/Image/ImageReference/ImageReference';

const Hero = () => {
    return (
        <section className={cl.Wrapper}>
            <ImageReference imgSrc="/img/camping-banner.png"/>
        </section>
    );
}
 
export default Hero;