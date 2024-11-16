import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import CreateEmployee from './screens/create/CreateEmployee'
import UpdateEmployee from './screens/update/UpdateEmployee'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-employee' element={<CreateEmployee />} />
        <Route path='/update-employee/:id' element={<UpdateEmployee />} />
      </Routes>

    </div>
  )
}

export default App
