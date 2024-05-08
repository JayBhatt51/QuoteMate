import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Search from './components/search'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
