import "./index.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (

    <Router>
    <Routes>
      <Route path='/' element={<LoginPage /> }/>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </Router>
  )
}

export default App
