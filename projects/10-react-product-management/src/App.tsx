import { AppRoutes } from './Routes'
import { Toaster } from 'sonner'
import './App.css'

function App() {

  return (
    <>
      <AppRoutes />
      <Toaster richColors />
    </>
  )
}

export default App
