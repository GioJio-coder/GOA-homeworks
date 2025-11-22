import Students from "./components/Students";

const App = () => {
const students = [
    {name: "Aleksandre", surname: "Wowkolauri"},
    {name: "Davit", surname: "Iioshvili"},
    {name: "Giorgi", surname: "Chokheli"},
    {name: "Datuna", surname: "Sisauri"},
    {name: "Luka", surname: "Amashukeli"},
    {name: "Luka", surname: "Ivanishvili"},
    {name: "Luka", surname: "Tsikhelashvili"},
    {name: "Mate", surname: "Chubinidze"},
    {name: "Rezi", surname: "Kurdadze"},
    {name: "Saba", surname: "Sabanashvili"},
    {name: "Soso", surname: "Rtveliashvili"},
    {name: "Tato", surname: "Mchedlidze"}
];

return (
    <main>
    <Students studentsArr={students} />
    </main>
);
};

export default App;