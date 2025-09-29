import cl from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={cl.Wrapper}>
            <div className={cl.ContentWrapper}>
                <div className={cl.VideoWrapper}>
                    <video
                        className={cl.Video}
                        src="vid/camp-setup.mp4"
                        type="video/mp4"
                        controls
                    ></video>
                </div>
                <div className={cl.CommentWrapper}>
                    <h2>LIVE CAMPING EXPERIENCE</h2>
                    <h3>We share real camping adventures</h3>
                    <p>
                        Watch our team set up camps, cook outdoors, and explore wild nature.  
                        Experience the spirit of adventure and learn how to prepare for your own trips.
                    </p>
                    <p>
                        <em>“Adventure is out there, join us!”</em>
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default AboutUs;