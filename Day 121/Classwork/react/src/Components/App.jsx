import MyInfo from "./Components/MyInfo.jsx"




export default function  App () {
    return (
        <div>
            <MyInfo myName="Giorgi" mySurname="Jioshvili" myAcademy="GOA"/>
        </div>
    )
};


function logInfo() {
    return <p>Giorgi Jioshvili</p>;
}
return (
    <div>
    <Info logInfo={logInfo} />
    </div>
);