import '../styles/navbar.css'

import { Link } from 'react-router-dom'

export function Navbar () {
    return (
        <section className="navbar">
            <h1 className='logo'><a href="/">Logo</a></h1>
            <nav className="navbar-nav">
                <ul className='navbar-ul'>
                    <li className='navbar-li'>
                        <Link className="navbar-a" to="/">Inicio</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link className="navbar-a" to="/survey/create">Nueva Ecuesta</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}