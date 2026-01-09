
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
    <MyContext.Provider value="hellom this is context">
        <App />
    </MyContext.Provider>
);