import React from 'react'
import { ReusableUserProps } from './ReusableUser'

type ReusableAdminProps = ReusableUserProps & { //We import the ReusableUserProps type and extend it with additional properties
  admin: string;
}

const ReusableAdmin = ({name, age, email, location, admin}:ReusableAdminProps) => {
  return (
    <div>
      <li>{name}</li>
      <li>{age}</li>
      <li>{email}</li>
      <li>{location}</li>
      <li>{admin}</li>
    </div>
  )
}

export default ReusableAdmin