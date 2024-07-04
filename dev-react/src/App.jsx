import { Outlet } from "react-router-dom";

import Footer from './components/Footer/Footer';

import './App.css'

function App() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
