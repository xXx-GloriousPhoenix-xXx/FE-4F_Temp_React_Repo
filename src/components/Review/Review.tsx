import cl from './Review.module.css';

interface ReviewItem {
    description: string;
    rating: number;
    author: string;
}

interface ReviewProps {
    feedbackProps: ReviewItem[];
}

const Review: React.FC<ReviewProps> = ({ feedbackProps }) => {
    return (
        <section className={cl.Wrapper}>
            <div className={cl.TextWrapper}>
                <h1>What campers say about us</h1>
                <p>who are in extreme love with outdoor adventures</p>
            </div>
            <div className={cl.FeedbackList}>

            </div>
        </section>
    )
}
 
export default Review;