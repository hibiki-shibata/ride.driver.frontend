import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import ConsumerHome from './features/consumer/home'
import ConsumerExplore from './features/consumer/explore'
import ConsumerAuth from './features/consumer/auth/'
// import { ConsumerAccessTokenProvider } from './features/consumer/auth/context/accessTokenContext'
import Courier from './features/courier'
import CourierApply from './features/courier/signup'
import { CONSUMER_ROUTE, COURIER_ROUTE } from './shared/constant/routePath'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* <ConsumerAccessTokenProvider> */}
          <Route path="/*" element={<Navigate to="/ride.driver.frontend/consumer/home" />} />
          <Route path={CONSUMER_ROUTE.HOME} element={<ConsumerHome />} />
          <Route path={CONSUMER_ROUTE.EXPLORE} element={<ConsumerExplore />} />
          <Route path={CONSUMER_ROUTE.SIGNUP} element={<ConsumerAuth isLogin={false} />} />
          <Route path={CONSUMER_ROUTE.LOGIN} element={<ConsumerAuth isLogin={true} />} />
        {/* </ConsumerAccessTokenProvider> */}
        <Route path={COURIER_ROUTE.HOME} element={<Courier />} />
        <Route path={COURIER_ROUTE.SIGNUP} element={<CourierApply />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
