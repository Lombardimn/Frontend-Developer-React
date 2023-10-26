import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function ProtectedRoute () {
    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login')
        return null
    }

    return <Outlet />
}