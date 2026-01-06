import useCounter from "./Component/Counter";

function SecondCounter() {
    const { count, increase, decrease, reset } = useCounter(1);

    return (
        <div>
            <h3>Second Counter</h3>
            <p>{count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default SecondCounter;