import React from 'react'

export type ReusableUserProps = { //For reusable types, we have to export the type
    name: string;
    age: number;
    email: string;
    location: string[];
    
}

const ReusableUser = ({name, age, email, location}: ReusableUserProps) => {
  return (
    <div>
      <li>{name}</li>
      <li>{age}</li>
      <li>{email}</li>
      <li>{location}</li>
    </div>
  )
}

export default ReusableUser