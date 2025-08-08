import ChildrenTypes from '@/components/ChildrenTypes'
import ComponentTypes from '@/components/ComponentTypes'
import React from 'react'

const page = () => {
  return (
    <main>
      <ComponentTypes name={"John"} age={20}/>
      
      <ChildrenTypes>
        <p>This is a children element</p>
      </ChildrenTypes>
    </main>
  )
}

export default page