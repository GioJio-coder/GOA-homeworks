const Students = (props) => {
console.log(props)
 return (
    <ul>
    {
        props.studentsArr.map((stObj) => (
        <li key={stObj.name}>
            <p><b>Name:</b> {stObj.name}</p>
            <p><b>Surname:</b> {stObj.surname}</p>
            <p><b>Role:</b> student</p>
            <br />
        </li>
        ))
    }
    </ul>
);
};

export default Students;