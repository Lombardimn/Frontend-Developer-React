import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { CreateQuestion } from './components/CreateQuestion'
import { Survey } from './components/Survey'
import { NotFound } from './components/NotFound'

import surveys from './mocks/surveys.json'
import './App.css'



function App() {

  const [listQuestions, setListQuestion] = useState(surveys)

  const addQuestions = (newquestion) => {
    newquestion.id = listQuestions.length + 1
    setListQuestion([...listQuestions, newquestion])
  }

  // const answerSurvey = (id, responses ) => {
  //   const survey = listQuestions.find(
  //     sur => sur.id === parseInt(id))
  //     survey.responses = [responses]
  // }

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={ <Home listQuestions={listQuestions} /> }
        />
        <Route 
          path='/survey/create' 
          element= {<CreateQuestion addQuestions={addQuestions} />} 
        />
        <Route 
          path='/survey/:id' 
          element={<Survey listQuestions={listQuestions}/>}
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
