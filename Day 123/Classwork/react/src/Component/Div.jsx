function Div(){
    const [count, setCount] = usestate(0)

    const handleClick = () => {
        setCount(count + 1)
    };

    return (
        <div onClick={handleClick}>
            <p>HI {count}</p>
        </div>
    );
}

export default Div;