import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSurvey } from "./hooks/useSurvey";

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { CreateQuestion } from './components/CreateQuestion'
import { Survey } from './components/Survey'
import { NotFound } from './components/NotFound'
import { Prueba } from './components/Prueba'

import './App.css'

function App() {
  const { mappedSurveys } = useSurvey()

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/survey/create'
          element={<CreateQuestion
            mappedSurveys={mappedSurveys}
          />}
        />
        <Route
          path='/survey/:id'
          element={<Survey />}
        />
        <Route
          path='/testing'
          element={<Prueba
            mappedSurveys={mappedSurveys}
          />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
