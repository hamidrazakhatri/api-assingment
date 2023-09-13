import React from 'react'
import { BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import Screen from '../pages/Screen';
// import form from '../pages/Form'
import SmForm from '../pages/SmForm'

export default function Approuter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen />} />
        <Route path='form' element={<SmForm />} />
        <Route path='form/:id' element={<SmForm />} />


        {/* <Route path='form' element={<Form />} /> */}



      </Routes>
      </BrowserRouter>
    </div>
  )
}
