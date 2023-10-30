import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams, Link } from "react-router-dom";
import { fetchMovieById } from "servises/api";
import { ButtonBack, Container } from "./MovieDetails.styled";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MovieCard from "components/MovieCard/MovieCard";
import { Loader } from "components/Loader/Loader";


const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        const fetchSelectedMovie = async movieId => {
            try {
                const movieData = await fetchMovieById(movieId);
                setSelectedMovie(movieData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSelectedMovie(movieId)
    }, [movieId]);

    return (
        <main>
            <Container>
                <Link to={location?.state.from ?? '/'}>
                    <ButtonBack type="button">
                        <AiOutlineArrowLeft
                            style={{ width: '25px', height: '25px', display: 'inline-block' }} />
                        Go back
                    </ButtonBack>
                </Link>

                <MovieCard movie={selectedMovie} />

                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
        </main>
    );
};


export default MovieDetails;