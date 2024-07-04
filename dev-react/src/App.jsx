import './App.css'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
