import React from 'react'

type DynamicRoutingTypesProps = {
    params: {id: number}
}

const page = ({params: {id}}: DynamicRoutingTypesProps) => {
  return (
    <div>{id}</div>
  )
}

export default page