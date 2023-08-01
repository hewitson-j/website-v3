import './index.css'
import Navbar from './components/Navbar'
import MediaCard from './components/MediaCard'
import { Container, Grid } from '@mui/material'
import Routes from './components/Routes'

function App() {

  return (
    <>
      <Navbar/>
      <Container sx={{mt: '2rem'}}>
        <Routes/>
      </Container>
    </>
  )
}

export default App
