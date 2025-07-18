import React from 'react'
import ChildProps from './ChildProps'

function Avatar({person,size}){
    return(
        <img 
        src={ChildProps(person)}
         alt={person.name}
         width={size} 
         height={size}
         />
    )
}
function ParentProps() {
  return (
    <>
   <Avatar 
   size={100}
   person={{name:'Dhruv Parmar',imageId:'YfeOqp2s'}}
   />
      <Avatar 
   size={100}
   person={{name:'Jay Parmar',imageId:'OKS67lh'}}
   />
      <Avatar 
   size={100}
   person={{name:'Ram Parmar',imageId:'1bX5QH6'}}
   /></>
  )
}

export default ParentProps