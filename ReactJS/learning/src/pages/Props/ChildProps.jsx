import React from 'react'

function ChildProps(person,size) {
  return (
   'https://i.imgur.com/'+ 	
   person.imageId+
   size+'.jpg'
  )
}

export default ChildProps