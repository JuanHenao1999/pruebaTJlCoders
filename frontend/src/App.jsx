import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import CompLogin from './components/Login.js'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompLogin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
