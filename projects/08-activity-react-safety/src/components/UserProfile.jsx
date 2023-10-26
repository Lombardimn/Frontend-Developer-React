import { useAuth0 } from "@auth0/auth0-react"
import { Card, Container, Image } from "react-bootstrap"


export const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0()

    if (!isAuthenticated) {
        return <p className="text-bg-info p-3 text-center fs-4">Debes iniciar sesion para ver tu perfil</p>
    }

    return (
        <Container className="mt-5 text-center">
            <Card style={{width: '18rem', margin: '0 auto'}}>
                <Card.Body>
                    <Image src={user.picture} roundedCircle fluid alt="User profile" />
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}