import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Themes from './components/Themes.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Themes>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      
    </Themes>
  </React.StrictMode>,
)
