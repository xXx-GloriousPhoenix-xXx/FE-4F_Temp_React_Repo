import cl from './ImageReference.module.css'

const ImageReference = ({imgSrc, imgWidth, imgHeight}) => {
    return ( 
        <div
            className={cl.Wrapper}
            style={{backgroundImage: `url(${imgSrc})`}}
        >
            {/* <img 
                className={cl.Image}
                src={imgSrc}
                alt="img"
            /> */}
        </div>
    );
}
 
export default ImageReference;