import { useLoaderData } from 'react-router-dom';

export default function MovieDetails() {
  const { movie } = useLoaderData();
  
  return (
    <div className="page-content movie-details">
      <h1>{movie.title}</h1>
      <p><strong>Год:</strong> {movie.year}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
    </div>
  );
}