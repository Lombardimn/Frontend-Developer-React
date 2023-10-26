import { Navbar, Nav, Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

export const NavigationBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0()

    if (isLoading) {
        return <span className="loader"></span>
    }

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">Seguridad React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/profile">Perfil</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>
                {
                    !isAuthenticated 
                        ? <Button variant='primary' onClick={() => loginWithRedirect()}>Iniciar sesión</Button>
                        : <Button variant='danger' onClick={() => logout({ returnTo: "http://localhost:5173/" })}>Cerrar sesión</Button>
                }
            </Navbar.Brand>
        </Navbar>
    )
}