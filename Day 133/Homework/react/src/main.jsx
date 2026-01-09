
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StudentsContext } from './Context/StudentsContext.jsx'

const students = [
  "რეზი",
  "მათე",
  "გიორგი",
  "ტატო",
  "სოსო",
  "საბა",
  "ბაჩი",
  "ბიბა",
  "დავით",
  "ლუკა"
];

createRoot(document.getElementById('root')).render(
    <StudentsContext.Provider value={StudentsContext}><App />
    </StudentsContext.Provider>
)
