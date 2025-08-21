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
      <h1 className="text-center text-5xl mt-3  mb-3 uppercase bg-zinc-800 text-white w-fit p-3 m-auto rounded">
        Fibonacci
      </h1>
      <input
        className="border-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setInput(input)}>Fibonacci</button>
      <p>
        Fibonacci of {input} is {result}
      </p>
    </div>
  );
}

export default Fibonacci;
