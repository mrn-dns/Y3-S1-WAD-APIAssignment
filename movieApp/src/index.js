import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import NowPlayingMoviePage from "./pages/nowPlayingMoviesPage";
import PopularMoviePage from "./pages/popularMoviesPage";
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import MovieActorsPage from "./pages/movieActorsPage";
import PopularMovieActorsPage from "./pages/popularMovieActorsPage";
import MovieActorDetailsPage from "./pages/movieActorsDetailsPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from './pages/signupPage';
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthContextProvider>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/upcomingmovies" element={<UpcomingMoviePage />} />
          <Route path="/movies/nowplayingmovies" element={<NowPlayingMoviePage />} />
          <Route path="/movies/popularmovies" element={<PopularMoviePage />} />
          <Route path="/movies/topratedmovies" element={<TopRatedMoviePage />} />
          <Route path="/actors/" element={<MovieActorsPage />} />
          <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
          <Route path="/actors/popularactors" element={<PopularMovieActorsPage />} />
          <Route path="/movies/discovermovies" element={<HomePage />} />
        </Route>
        <Route path="*" element={ <Navigate to="/movies/discovermovies" /> } />
        <Route path="/users/signup" element={<SignUpPage />} />
        <Route path="/users/login" element={<LoginPage />} />
      </Routes>
      </MoviesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);