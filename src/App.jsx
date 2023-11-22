import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import "@fontsource/inter";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
