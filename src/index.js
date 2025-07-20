import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Subscribe from './pages/Subscribe'
import './styles/main.css'


const mockMovies = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994, genre: 'Drama' },
  { id: 2, title: 'The Godfather', year: 1972, genre: 'Crime' },
  { id: 3, title: 'Pulp Fiction', year: 1994, genre: 'Crime' }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { 
        path: 'movies',
        element: <Movies />,
        loader: () => {
          return new Promise(resolve => {
            setTimeout(() => resolve({ movies: mockMovies }), 500)
          })
        }
      },
      { 
        path: 'movies/:id',
        element: <MovieDetails />,
        loader: ({ params }) => {
          const movie = mockMovies.find(m => m.id === Number(params.id))
          return new Promise(resolve => {
            setTimeout(() => resolve({ movie }), 500)
          })
        }
      },
      { path: 'subscribe', element: <Subscribe /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)