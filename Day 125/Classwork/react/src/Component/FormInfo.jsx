import { useState, useEffect } from "react";

function FormInfo() {
    const [username, setUsername] = useState("");

useEffect(() => {
    alert(username);
});

return (
    <form>
        <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
/>
    </form>
);
}

export default FormInfo;