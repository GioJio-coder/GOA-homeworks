import React from "react";

const Presentatioanl = ({count, decrease}) =>  {
    return (
        <div>
            <h2>Presentatioanl Component</h2>
            <p>Count {count}</p>
            <button onClick={decrease}>click</button>
        </div>
    )
}

export default Presentatioanl;