import React from 'react'
import { useParams } from 'react-router-dom'

function StudentProfile() {
    const {id}=useParams();
  return (
    <div>StudentProfile={id}</div>
  )
}

export default StudentProfile