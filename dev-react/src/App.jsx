import './App.css'
import { Outlet } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
