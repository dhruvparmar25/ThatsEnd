import React, { useState } from 'react'

function Managing() {
    const [answer, setAnswer] = useState("");
    const [status,setStatus]=useState('typing');
    const [error,setError]=useState(null);

    if (status ==="success") {
        return <h1>That's Right</h1>
    }

    function handelTextareaChange(e) {
        setAnswer(e.target.value)
        console.log(e);

    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus("Success")
        } catch (error) {
           setStatus('typing');
           setError(error) 
        }
    }
   
    return (
        <>
            <h2>City quiz</h2>
            <p>
                <form  onSubmit={handleSubmit}>
                    <textarea
                        value={answer}
                        onChange={handelTextareaChange}
                        disabled={status==="submitting"}
                    /><br />

                    <button disabled={
                        answer.length===0||status==="submitting"
                    }>Submit</button>
                    {error!==null&&
                    <p>{error.message}</p>}
                </form>
            </p>
        </>
    )
}
 function submitForm(answer){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let shoulError=answer.toLowerCase()!=='lima'
            if (shoulError) {
                rej(new Error ('Good guess but a wrong answer. Try again!'))
            }else{
                res();
            }
        },1000)
    })
}
export default Managing