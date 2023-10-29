import { Loader } from "components/Loader/Loader";
import { useLocation } from "react-router-dom";
import { MovieCardContainer, Img, MovieInfo, MovieName, MovieInfoText, MovieInfoTextBold, MoreInfowrapper, MoreInfoHeader, List, ListItem, StyledLink } from "./MovieCard.styled";
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { title, release_date, poster_path, vote_average, overview, genres } = movie;
    const location = useLocation();
    const releaseDate = new Date(release_date);

    const releaseYear = isNaN(releaseDate)
        ? 'Unknown'
        : releaseDate.getFullYear();
    
    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg';
    
    const userScore = vote_average
        ? `${(vote_average * 10).toFixed(0)}%`
        : 'Not rated yet';
    
    if (!title) {
        return <Loader />
    }

    return (
        <>
            <MovieCardContainer>
                <Img src={posterUrl} alt={`${title} poster`} />

                <MovieInfo>
                    <MovieName>
                        {title ?? 'Unknown'} ({releaseYear})
                    </MovieName>
                    <MovieInfoText>User Score: {userScore}</MovieInfoText>
                    <MovieInfoText>
                        <MovieInfoTextBold>Overview:</MovieInfoTextBold>
                        {overview}
                    </MovieInfoText>

                    {genres && genres.length > 0 && (
                        <MovieInfoText>
                            <MovieInfoTextBold>Genres:</MovieInfoTextBold>
                            {genres.map(genre => genre.name).join(', ')}
                        </MovieInfoText>
                    )}
                </MovieInfo>
            </MovieCardContainer>

            <MoreInfowrapper>
                <MoreInfoHeader>Additional information</MoreInfoHeader>

                <List>
                    <ListItem>
                        <StyledLink
                            to="cast"
                            state={{ from: location?.state?.from ?? '/' }}
                        >
                            Cast
                        </StyledLink>
                    </ListItem>

                    <ListItem>
                        <StyledLink
                            to="reviews"
                            state={{ from: location?.state?.from ?? '/' }}
                        >
                            Reviews
                        </StyledLink>
                    </ListItem>
                </List>
            </MoreInfowrapper>
        </>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({name: PropTypes.string.isRequired})
        ),
    }).isRequired,
}


export default MovieCard;