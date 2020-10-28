import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_STUDENT = gql`
  query GetAllStudents {
    students {
        name
    }
  }
`;

export const Student = () => {
    const { loading, error, data } = useQuery(GET_STUDENT);
    if (loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h2>{error}</h2>
    }
    const {students}=data
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student ,id)=>{
                    return (
                        <li key={id}>{student.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
