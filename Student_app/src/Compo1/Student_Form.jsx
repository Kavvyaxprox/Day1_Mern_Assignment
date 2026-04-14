import { useState } from 'react'
import './Student_Form.css'


export default function Student_Form({ onAddLearner }) {
    const [learnerName, setLearnerName] = useState('')  
    const [learnerAge, setLearnerAge] = useState('')
    const [courseTitle, setCourseTitle] = useState('')
    
    const handleSubmission = (e) => {
        e.preventDefault()
        if (!learnerName || !learnerAge || !courseTitle) {
            alert('Please fill in all the fields to proceed with enrollment.');
            return
        }

        const newStudent ={
            fullName: learnerName,
            age: learnerAge,
            course: courseTitle,
        }

        onAddLearner(newStudent)
        setLearnerName('')
        setLearnerAge('')
        setCourseTitle('')
    };


  return (
    
    <div className="form-container">
        <div className='card'>
      
      <h2>Student Form</h2>
      
      <form onSubmit={handleSubmission}>
        <div>
          {/* Modified Labels [cite: 76] */}
          <label>Full Name: </label>
          <input 
            type="text" 
            value={learnerName} 
            onChange={(e) => setLearnerName(e.target.value)} 
          />
        </div>
        
        <div>
          <label>Current Age: </label>
          <input 
            type="number" 
            value={learnerAge} 
            onChange={(e) => setLearnerAge(e.target.value)} 
          />
        </div>

        <div>
          <label>Course Selection: </label>
          <input 
            type="text" 
            value={courseTitle} 
            onChange={(e) => setCourseTitle(e.target.value)} 
          />
        </div>

        <div className="button-container">
        <button type="submit" className="button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}
