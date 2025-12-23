import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/home/'
import Courier from './routes/courier/'
import CourierApply from './routes/courier/apply/'
import Explore from './routes/explore/'

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
        <Route path="/ride.driver.frontend/courier/apply" element={<CourierApply />} />
        <Route path="/ride.driver.frontend/explore" element={<Explore />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
