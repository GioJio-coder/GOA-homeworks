import React, { useState, useEffect } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/items/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('მონაცემების წამოღება ვერ მოხერხდა');
                }
                return response.json();
            })
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>იტვირთება მონაცემები...</p>;
    if (error) return <p>შეცდომა: {error}</p>;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>ელემენტები Django ბაზიდან:</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id} style={{ marginBottom: '10px' }}>
                        <strong>{item.name}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;