import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Главная</Link></li>
        <li><Link to="/about" className="nav-link">О сайте</Link></li>
        <li><Link to="/movies" className="nav-link">Фильмы</Link></li>
        <li><Link to="/subscribe" className="nav-link">Подписаться</Link></li>
      </ul>
    </nav>
  );
}