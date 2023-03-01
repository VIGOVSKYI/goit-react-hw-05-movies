import { lazy, Suspense, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

import NavBar from './components/NavBar/NavBar';

const Home = lazy(() => import('./pages/Home/Home'));
const MoviesSearch = lazy(() => import('./pages/MoviesSearch/MoviesSearch'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/movies" element={<MoviesSearch />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
