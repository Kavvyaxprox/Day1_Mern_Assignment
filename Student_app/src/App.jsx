import { useState } from 'react'
import Student_Form from './Compo1/Student_Form'

import './App.css'

function App() {
  const [student, setStudent] = useState([])

  return (
    <>
    <Student_Form />
    </>
  )
}

export default App;
