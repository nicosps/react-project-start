import React, { useState } from "react";

function CounterExample(params) {
    const [count, setCount] = useState(0);
    return (
        <head>

            <div className="content">
                <h1>{count}</h1>
                <h1 onClick={() => setCount(count + 1)}>
                    Click to increase
                </h1>
                <button onClick={() => setCount(count - 1)}>
                    Click to decrease
                </button>

            </div>
        </head>
    );
}

export default CounterExample;