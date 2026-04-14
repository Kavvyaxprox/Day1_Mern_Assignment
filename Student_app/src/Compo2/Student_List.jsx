import React from 'react';
import './Student_List.css'

const deleteButtonStyle = {
  backgroundColor: '#e53e3e',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px'
};

export default function StudentList({ learners, onRemove }) {
  return (
    <div className="list-container">
      <h2>Enrolled Participants</h2>
      
     
      {learners.length === 0 ? (
        <p >No records found.</p>
      ) 
      :
      
      (
        <div className="card-grid">
          
          {learners.map((person) => (
            <div key={person.id} className="student-card">
              <h3>{person.fullName}</h3>
              <p><strong>Age:</strong> {person.age}</p>
              <p><strong>Program:</strong> {person.course}</p>
              
             
              <button 
                onClick={() => onRemove(person.id)}
                style={deleteButtonStyle}
              >
                Delete Record
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};




