import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3 className="movie-title">
        <Link to={`/movies/${movie.id}`} className="movie-link">
          {movie.title}
        </Link>
      </h3>
      <p><strong>Год:</strong> {movie.year}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
    </div>
  );
}