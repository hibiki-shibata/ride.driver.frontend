import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Consumer from './features/consumer'
import Courier from './features/courier'
import CourierApply from './features/courier/apply'
import Explore from './features/explore'
import LoginOrSignIn from './features/explore/loginSignin'

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
        <Route path="/ride.driver.frontend/consumer" element={<Consumer />} />
        <Route path="/ride.driver.frontend/courier" element={<Courier />} />
        <Route path="/ride.driver.frontend/courier/apply" element={<CourierApply />} />
        <Route path="/ride.driver.frontend/explore" element={<Explore />} />
        <Route path="/ride.driver.frontend/explore/login" element={<LoginOrSignIn isLogin={true} />} />
        <Route path="/ride.driver.frontend/explore/signup" element={<LoginOrSignIn isLogin={false} />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
