import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <header className='navbar-container'>
            <nav className='navbar'>
                <h1 className='navbar-title'><a href="/">MyQuest</a></h1>
                <ul className='navbar-links'>
                    <li className='navbar-link'>
                        <Link to="/" className='navbar-link-item'>Inicio</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to="/survey/create" className='navbar-link-item'>Nueva Encuesta</Link>
                    </li>
                    <li className='navbar-link '>
                        <Link to="/testing" className='navbar-link-item developers'>Developers</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}