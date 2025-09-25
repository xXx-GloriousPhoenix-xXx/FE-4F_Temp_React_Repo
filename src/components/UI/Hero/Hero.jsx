import cl from './Hero.module.css';

import ImageReference from '../Image/ImageReference/ImageReference'

const Hero = () => {
    return (
        <div className={cl.Wrapper}>
            <ImageReference imgSrc="/img/camping-banner.png"/>
        </div>
    );
}
 
export default Hero;