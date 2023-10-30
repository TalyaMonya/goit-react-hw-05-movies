import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { StyleHeader, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <>
            <StyleHeader>
                <nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </nav>
            </StyleHeader>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};

export default SharedLayout;