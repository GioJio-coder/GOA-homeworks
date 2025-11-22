import MyReact from "./Components/MyReact";

const App = () => {
  const myname = "Giorgi";
  const mysurname = "Jioshvili";
  return (
    <div>
      <h1>This is H1</h1>
      <MyReact username={myname}  name={mysurname}/>
    </div>
  )
};

export default App;