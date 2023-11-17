import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationBar } from '../components'
import { Callback, Home, Login, ProductPage, ProtectedPage, UserProfile } from '../pages'




export function AppRoutes () {
  return (
    <Router>
      <NavigationBar />
      <main className='mt-5'>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/login' element={<Login />} />
          <Route path='/callback' element={<Callback />} />
          <Route path='/products' element={<ProtectedPage />}>
            <Route index element={<ProductPage />} />
          </Route>
          <Route path="/profile" element={<ProtectedPage />}>
            <Route index element={<UserProfile />} />
          </Route>
        </Routes>
      </main>
    </Router>
  )
}