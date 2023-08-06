import './index.css'
import { Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import ProjectDetails from './components/ProjectDetails';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Projects/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='Project' element={<ProjectDetails id={0} name={'Hello'} description={'Hello'} problem={''} liveLink={''} githubLink={''} images={[]} packages={[]}/>}></Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
