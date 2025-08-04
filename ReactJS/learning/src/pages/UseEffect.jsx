import React, { useEffect, useState } from 'react'

function UseEffect() {
    // const [city, setCity] = useState("Gujrat");
    // const [time, setTime] = useState(0);
    // const [value, setValue] = useState(0);
    // useEffect(() => {
    //     console.log("blank Dependency");
    //     setTimeout(() => {
    //         setCity("MP")
    //     }, 5000)
    // }, [])

    // useEffect(() => {
    //     console.log("Without dependency");
    //     let timer = setTimeout(() => {
    //     }, 1000);
    //     return (() => {
    //         console.log("return timer");
    //         clearTimeout(timer)
    //     })
    // })

    // useEffect(() => {
    //     console.log("with dependecy Array");
    //     let cal = 2 * time
    //     setValue(cal)
    // }, [time])
    // console.log("time>>>>>", time);


    ///////////////////////////////////////
        useEffect(() => {
        const interval = setInterval(() => {
            console.log("Time Now", new Date().toLocaleTimeString());

        }, 1000);
        return () => {
            console.log("Cleaning Up...");
            clearInterval(interval)

        }
    }, []);

    ///////////////////////////////
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            }).catch((err) => {
                console.error("Fecthing data Error", err);
                setLoading(false);
            }
            )
    }, [])

    if (loading) {
        return (
            <>
                <p>Loading.....</p>
                <h2>User List</h2>
            </>
        )
    }


    return (
        <div>
            {/* <h1>Practice Use Effect </h1>
            <h2>i am living in {city} state.</h2>
            <h2>Count is : {time}</h2>
            <h2>Value is : {value}</h2>
            <button onClick={() => setTime(time + 1)}>Update</button>
            <h2>set time out example {time}</h2> */}
            <h2>User List</h2>
            <ul>
                {users.map((user) => {
                    console.log(user.name);
                    return <li key={user.id}>
                        {user.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UseEffect