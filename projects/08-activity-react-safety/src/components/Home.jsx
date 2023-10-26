import { Container, Row, Col } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react"

export const Home = () => {
    const { user } = useAuth0()

    return(
        <Container className='mt-5'>
            <Row className='justify-content-center text-center'>
                <Col md={8}>
                    <h1>Bienvenidos a mi App</h1>
                    <p>
                        Esta es una aplicación para desmostrar la implementación de autenticación y seguridad con React y Auth0
                    </p>
                    <p>
                        {
                            user && (
                                <div>{user.name} ({user.email})</div>
                            )
                        }
                    </p>
                </Col>
            </Row>
        </Container>
    )
}