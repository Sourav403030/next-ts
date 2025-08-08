
type UserProps = {name: string; age: number}; // Second method for defining types for props
interface UserPropsInterface { //Third method for defining types for props
    name: string;
    age: number;
}

const ComponentTypes = ({name, age}: {name: string; age: number}) => { //First method for defining types for props
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default ComponentTypes