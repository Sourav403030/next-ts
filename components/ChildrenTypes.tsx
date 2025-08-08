import React, { ReactNode } from 'react'

type ChildrenTypesProps = {children: ReactNode} //Defining types for children props

const ChildrenTypes = ({children}: ChildrenTypesProps) => {
  return (
    <div>{children}</div>
  )
}

export default ChildrenTypes