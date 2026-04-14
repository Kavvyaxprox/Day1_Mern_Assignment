import { useState } from 'react'
import Student_Form from './Compo1/Student_Form'
import StudentList from './Compo2/Student_List'
import './App.css'

function App() {
  const [learners, setLearners] = useState([])

  const handleAddLearner = (newStudent) => {
    const student = {
      id: Date.now(),
      ...newStudent
    }
    setLearners([...learners, student])
  }

  const handleRemoveLearner = (id) => {
    setLearners(learners.filter(learner => learner.id !== id))
  }

  return (
    <>
      <Student_Form onAddLearner={handleAddLearner} />
      <StudentList learners={learners} onRemove={handleRemoveLearner} />
    </>
  )
}

export default App;
