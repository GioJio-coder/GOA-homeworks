
import { createRoot } from 'react-dom/client'
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)


function Info({ logInfo }) {
return (
    <div>
    {logInfo()} 
    </div>
);
}
export default Info;