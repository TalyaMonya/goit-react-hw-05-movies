import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchMovieByName } from "servises/api";
import SearchMovies from "components/SearchMovies/SearchMovies";
import { Section, SectionTitle, List, ListItem, StyledLink } from "components/MovieList/MovieList.styled";



const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (!query) return;

        const getMovie = async () => {
            try {
                const { results } = await fetchMovieByName(query);

                if (results.length === 0) {
                    toast.dismiss();
                    toast.error('No movies found');
                    setMovies([]);
                } else {
                    setMovies(results);
                }
            } catch (error) {
                toast.error(error.message);
                setMovies([]);
            }
        };

        getMovie();
    }, [searchParams]);


    const handleSubmit = query => {
        setSearchParams({ query });
    };


    return (
        <main>
            <Section>
                <SectionTitle>Movies Page</SectionTitle>

                <SearchMovies onSubmit={handleSubmit} />

                <List>
                    {movies.map(movie => (
                        <ListItem key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </StyledLink>
                        </ListItem>
                    ))}
                </List>
            </Section>
        </main>
    );
};


export default Movies;