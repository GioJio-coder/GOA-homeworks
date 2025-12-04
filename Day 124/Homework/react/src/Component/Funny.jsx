import { useState } from "react";

export default function App() {
    const all = ["bachi bedinadze", "david ", "soso rtveliashvili", "saba sabanashvili", "datuna sisauri", "biba", "giorgi jioshvili", "mate chubinidze"];
    const [selected, setSelected] = useState(all);

return (
    <div>
        <h1 style={s.title}>Selected names</h1>

    {selected.map(n => (
        <div key={n}>
    </div>
))}

    <button style={s.reset} onClick={() => setSelected(all)}>Reset</button>
    <hr style={{ margin: "25px 0", borderColor: "#555" }} />

        <div key={n} style={s.row}>
            <button style={s.add} onClick={() => setSelected([selected])}>
        </button>
        </div>
    </div>
);
}