import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeUser, setActiveUser] = useState(null);

useEffect(() => {
    const getData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await res.json());
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
}
    };
    getData();
}, []);

const styles = {
        container: { padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' },
    card: { 
        border: '1px solid #ddd', padding: '15px', marginBottom: '10px', 
        borderRadius: '8px', cursor: 'pointer', backgroundColor: '#fff' 
    },
    detail: { padding: '15px', background: '#f0f4ff', borderRadius: '8px', marginBottom: '20px' }
};


return (
    <div style={styles.container}>
        <h2>User Dashboard</h2>

    {activeUser && (
        <div style={styles.detail}>
            <h3>{activeUser.name} Details</h3>
            <p><strong>Phone:</strong> {activeUser.phone}</p>
            <p><strong>Company:</strong> {activeUser.company.name}</p>
            <button onClick={() => setActiveUser(null)}>Close</button>
        </div>
    )}


    {users.map(u => (
        <div key={u.id} style={styles.card} onClick>
            <div style={{ color: '#666', fontSize: '14px' }}>{u.email}</div>
        </div>
    ))}
    </div>
);
};

export default Dashboard;