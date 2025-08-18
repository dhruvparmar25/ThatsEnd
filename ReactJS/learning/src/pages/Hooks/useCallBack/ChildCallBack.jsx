import React, { memo } from 'react'

function ChildCallBack({item,fillterData}) {
    console.log("arrItems : ",item);
    console.log("fillterData : ",fillterData);

    
    const fltrval = item.filter(fillterData)
    console.log("fltre",fltrval);
    
  return (
    
    <div>
        <h1>ChildCallBack</h1>
        {fltrval.map((value,i)=>{
            return( <li key={i} style={{textAlign:"start"}}>{value}</li>)
        })}
    </div>
  )
}

export default memo(ChildCallBack) 