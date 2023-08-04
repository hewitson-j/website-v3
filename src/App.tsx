import './index.css'
import Navbar from './components/Navbar'
import { Container, Grid } from '@mui/material'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
// import Routes from './components/Routes'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Projects/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
