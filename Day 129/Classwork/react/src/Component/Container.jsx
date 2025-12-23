
import React, { useState } from 'react';
import Presentational from './Presentational';

const Container = () => {
    const [setCount, count] = useState(0)

    const decrease = () => {
        setCount(count -1)
    }

    return (
        <div>
            <h2>Container Component</h2>
            <Presentational count={count} decrease={decrease} />
        </div>
    )
};

export default Container;