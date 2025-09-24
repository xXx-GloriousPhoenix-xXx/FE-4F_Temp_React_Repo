import cl from './ImageReference.module.css'

const ImageReference = ({imgSrc, imgWidth, imgHeight}) => {
    return ( 
        <div
            className={cl.Wrapper}
            style={{width: imgWidth, height: imgHeight}}
        >
            <img 
                className={cl.ImageReference}
                src={`%public%/img/${imgSrc}`}
                alt="img"
            />
        </div>
    );
}
 
export default ImageReference;