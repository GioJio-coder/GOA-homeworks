import useInfo from "../Hooks/useInfo";

const Count = () => {
    const { count,  decrease, increase, reset } = useInfo();

    return(
        <div>
            <p>count {count}</p>

            <button onclick={increase}>increase</button>
            <button onclick={decrease}>decrease</button>
            <button onclick={reset}>reset</button>
        </div>
    );
};

export default Count;