import React, { useMemo, useState } from "react";

function Fibonacci() {
  const [input, setInput] = useState("");
  const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
  };
  const result = useMemo(() => {
    const num = parseInt(input);
    if (isNaN(num) || num < 0 || num > 40) return "invalid Number";
    return fib(num);
  }, [input]);
  return (
    <div>
  
      <section className='rounded w-fit p-5 m-auto bg-blue-200'>
            <h1 className="text-center text-2xl  uppercase bg-zinc-800 text-white w-fit p-1 m-auto rounded mb-3">
        Fibonacci
      </h1>
        <input
          className="border-1  bg-white border-none rounded mr-2 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setInput(input)}>Fibonacci</button>
        <p className="text-red-500 font-semibold mt-3">
          Fibonacci of {input} is {result}
        </p>
      </section>

    </div>
  );
}

export default Fibonacci;
