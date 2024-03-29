import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { Navigate, useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation()
  return (
    <>
      <Header />
      {location.pathname !== '/404' ? <Navigate to="/404" /> : null}
      <section className="erreur-404">
        <h1 className="erreur-404__h1">404</h1>
        <h2 className="erreur-404__h2">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/home" className="erreur-404__a">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </>
  )
}

export default NotFound
