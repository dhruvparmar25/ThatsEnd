import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack'

function CallBack() {
    const [query, setQuery] = useState("")
    const [theme, setTheme] = useState("light")
    const [arrItems,setArrItems]=useState(["Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Mango",
  "Pineapple",
  "Kiwi",
  "Peach",
  "Pear",
  "Plum",
  "Cherry",
  "Lemon",
  "Lime",
  "Watermelon",
  "Blueberry",
  "Raspberry",
  "Coconut",
  "Pomegranate",
  "Avocado"])

    const handelfillter = useCallback((item)=>
        item.toLowerCase().includes(query.toLowerCase()),[query])

    


    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", margin: "0px", padding: "0px", width: "100%", height: "100vh", backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
            <h1 style={{ margin: "0px", padding: "0px" }}>CallBack</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}>{theme}</button>
            <ChildCallBack item={arrItems} fillterData={handelfillter}/>
        </div>
    )
}

export default CallBack