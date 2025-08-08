import ChildrenTypes from '@/components/ChildrenTypes'
import ComponentTypes from '@/components/ComponentTypes'
import ReusableUser from '@/components/ReusableUser'
import ReusableAdmin from '@/components/ReusableAdmin'
import UseStateTypes from '@/components/UseStateTypes'

import React from 'react'
import FormTypes from '@/components/FormTypes'

const page = () => {
  return (
    <main className='h-screen w-full bg-white '>
      <ComponentTypes name={"John"} age={20}/>
      <br />

      <ChildrenTypes>
        <p>This is a children element</p>
      </ChildrenTypes>
      <br />

      <ReusableUser name="Alex" age={20} email="alex@gmail.com" location={["NewYork", "USA"]} />

      <ReusableAdmin name="Willi" age={25} email="willi@gmail.com" location={["Manchester", "England"]} admin="yes" />
      <br/>

      <UseStateTypes/>
      <br />

      <FormTypes/>
    </main>
  )
}

export default page