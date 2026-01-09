import { useContext } from "react";
import { MyContext } from "../Context/Mycontext";

function Comp() {
    const contextValue = useContext(MyContext);

    return <p>{contextValue}</p>;
}

export default Comp;