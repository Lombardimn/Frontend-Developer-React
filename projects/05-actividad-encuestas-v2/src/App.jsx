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
  const  { surveys: mappedSurveys, hasSurvey } = useSurvey()
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home 
            mappedSurveys={mappedSurveys}
            hasSurvey={hasSurvey} 
          /> }
        />
        <Route 
          path='/survey/create' 
          element= {<CreateQuestion 
            mappedSurveys={mappedSurveys}
          />} 
        />
        <Route 
          path='/survey/:id' 
          element={<Survey 
            mappedSurveys={mappedSurveys}
          />}
        />
        <Route 
          path='/prueba' 
          element={<Prueba/>}
        />
        <Route 
          path='*' 
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
