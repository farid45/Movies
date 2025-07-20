import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  const { movies } = useLoaderData();
  
  return (
    <div className="page-content">
      <h1>Каталог фильмов</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}