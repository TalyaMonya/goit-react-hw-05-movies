import MovieList from "components/MovieList/MovieList";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchTrendMovies } from "servises/api";


const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setError(false);
                setIsLoading(true);
                const { results } = await fetchTrendMovies();
                setTrendingMovies(results);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <p>
                    Sorry, we could not find the trending movies. Pleasw try again later.
                </p>
            ) : (
                <MovieList trendingMovies={trendingMovies}/>
            )}
        </>
    )
};

export default Home;