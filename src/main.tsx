import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import ConsumerHome from './feature/consumer/home'
import ConsumerMerchantList from './feature/consumer/exploreMerchant'
import ConsumerAuth from './feature/consumer/auth'
import ConsumerMenuCheckout from './feature/consumer/menuAndCheckout'
import ActiveOrder from './feature/consumer/activeOrder'
import ConsumerRoot from './feature/consumer/shared/app/ConsumerRoot'
import Courier from './feature/courier'
import CourierApply from './feature/courier/signup'
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
        <Route element={<ConsumerRoot />}>
          <Route path="*" element={<Navigate to={CONSUMER_ROUTE.HOME} />} />
          <Route path={CONSUMER_ROUTE.HOME} element={<ConsumerHome />} />
          <Route path={CONSUMER_ROUTE.MERCHANTS} element={<ConsumerMerchantList />} />
          <Route path={CONSUMER_ROUTE.ORDER_STATUS} element={<ActiveOrder />} />
          <Route path={CONSUMER_ROUTE.MENU} element={<ConsumerMenuCheckout />} />
          <Route path={CONSUMER_ROUTE.SIGNUP} element={<ConsumerAuth isLogin={false} />} />
          <Route path={CONSUMER_ROUTE.LOGIN} element={<ConsumerAuth isLogin={true} />} />
        </Route>
        <Route path={COURIER_ROUTE.HOME} element={<Courier />} />
        <Route path={COURIER_ROUTE.SIGNUP} element={<CourierApply />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
