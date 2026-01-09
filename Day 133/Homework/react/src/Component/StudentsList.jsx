import { useContext } from "react";
import { StudentsContext } from "../Context/StudentsContext";

function StudentsList() {
    const Students = useContext(StudentsContext);

    return (
        <div>
            {Students.map(Student => (
                <p key={Student}>{Student}</p>
            ))}
        </div>
    );
}

export default StudentsList;