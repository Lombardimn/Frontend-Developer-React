import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationBar } from "./NavigationBar"
import { Home } from './Home'
import { Login } from './Login'
import { Callback } from './Callback'
import { ProtectedRoute } from './ProtectedRoute'
import { UserProfile } from './UserProfile'

export const AppRoutes = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/callback' element={<Callback />} />
                <Route path='/profile' element={<ProtectedRoute />}>
                    <Route index element={<UserProfile />} />
                </Route>
            </Routes>
        </Router>
    )
}