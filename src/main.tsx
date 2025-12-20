import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/home/'
import Courier from './routes/courier/'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
  from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/*" element={<Navigate to="/ride.driver.frontend/home" />} />
        <Route path="/ride.driver.frontend/home" element={<Home />} />
        <Route path="/ride.driver.frontend/courier" element={<Courier />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
