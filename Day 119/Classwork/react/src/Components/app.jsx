
import app0 from "./Components/app0.jsx";

function App() {
return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24}}>
    <Hello/>
    <Hello />
    <Hello />
    </main>
);
}

export default App;

import MainInfo from "./MainInfo";

function App() {
return (
    <div>
    <MainInfo />
    </div>
);
}