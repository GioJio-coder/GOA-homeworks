import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

async function fetchUsers() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    fetchUsers();
}, []);

if (loading) {
    return 
} }
