//dependencias
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//rutas
import {Home} from './components/Home'
import {CreateQuestion} from './components/CreateQuestion'
import {Survey} from './components/Survey'
import {Testing} from './components/Testing'
import {NotFound} from './components/NotFound'
import {Navbar} from './components/Navbar'

//complementos
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/survey/create" 
          element={<CreateQuestion />} 
        />
        <Route 
          path='/survey/:id' 
          element={<Survey />} 
        />
        <Route 
          path="/testing" 
          element={<Testing />} 
        />
        <Route 
          path="/*" 
          element={<NotFound />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App