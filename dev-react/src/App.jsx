import './App.css'
import { Outlet } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default App
