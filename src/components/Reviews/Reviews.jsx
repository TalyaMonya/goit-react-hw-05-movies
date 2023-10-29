import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "servises/api";
import { Author, NoReviewsText, Review, ReviewHeader, ReviewList, ReviewListItem, Wrapper } from "./Reviews.styled";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { results } = await fetchMovieReviews(movieId);
                setReviews(results);
            } catch (error) {
                toast.error('Something went wrong. Please reload the page')
            }
        };

        fetchReviews();
    }, [movieId]);


    return (
        <Wrapper>
            <ReviewHeader>Reviews</ReviewHeader>

            {reviews.length ? (
                <ReviewList>
                    {reviews.map(review => (
                        <ReviewListItem key={review.id}>
                            <Author>Author: {review.author}</Author>
                            <Review>{review.content}</Review>
                        </ReviewListItem>
                    ))}
                </ReviewList>
            ) : (
                <NoReviewsText>
                    We don't have any reviews for this movie yet.
                </NoReviewsText>
            )}
        </Wrapper>
    );
};


export default Reviews;