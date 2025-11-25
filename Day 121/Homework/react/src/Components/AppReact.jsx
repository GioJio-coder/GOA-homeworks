
function AppReact({ name }) {
return <h1>Hello, {name}</h1>;
}

export default AppReact;


function AppReact() {
const handleClick = () => {
    alert("Button clicked!");
};

return (
    <div>
    <Hello name="Giorgi" />
    <HelloButton onClick={handleClick} />
    </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);