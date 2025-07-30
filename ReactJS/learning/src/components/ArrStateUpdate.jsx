import React,{useState} from 'react'

let nextId = 3;
function ArrStateUpdate() {
const [PackList,setPackList] = useState([{id:1,text:"Biscuit"},{id:2,text:"choclate"}]);
const [inputVal,setInputVal] = useState("")
console.log("PackList",PackList);
console.log("inputVal>>>>>",inputVal);

const handleChange =(e)=>{
    setInputVal(e.target.value)
}

const handleAdd =()=>{
//PackList.push({id:nextId++,text:inputVal})
    setPackList([...PackList,{id:nextId++,text:inputVal}])
}

const handleRemove =(itemId)=>{
    console.log(itemId);
    
    const filterval = PackList.filter(a=>a.id !== itemId);
    console.log(filterval);
    
    setPackList(filterval)
}

  return (
    <div>
        <h1>Updating Array in state.</h1>
        <div>
            <input type='text' name="packingval" value={inputVal} onChange={handleChange}/>
            <button onClick={handleAdd}>ADD</button>
            <ul>
                {PackList.map((item,i)=>{
                    return(
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',margin:8}}>
                        
                        <li key={item.id}>{item.text}</li>
                        <button style={{marginLeft:3}} onClick={()=>handleRemove(item.id)}>remove</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ArrStateUpdate