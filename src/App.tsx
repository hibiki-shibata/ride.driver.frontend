import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './style/index.css'
import ConsumerHome from './feature/consumer/home'
import ConsumerMerchantList from './feature/consumer/exploreMerchant'
import ConsumerAuth from './feature/consumer/auth'
import ConsumerMenuCheckout from './feature/consumer/menuAndCheckout'
import ConsumerActiveOrder from './feature/consumer/orderHistory'
import ConsumerRoot from './feature/consumer/shared/app/ConsumerRoot'
import CourierRoot from './feature/courier/shared/app/courierRoot'
import CourierAuth from './feature/courier/auth'
import CourierHome from './feature/courier/home'
import { CONSUMER_ROUTE, COURIER_ROUTE } from './shared/constant/routePath'
import ServiceBanner from './shared/component/ServiceBanner'

export default function App() {
    return (
        <>
            <ServiceBanner />
            <BrowserRouter>
                <Routes>
                    <Route element={<ConsumerRoot />}>
                        <Route path="*" element={<Navigate to={CONSUMER_ROUTE.HOME} />} />
                        <Route path={CONSUMER_ROUTE.HOME} element={<ConsumerHome />} />
                        <Route path={CONSUMER_ROUTE.MERCHANTS} element={<ConsumerMerchantList />} />
                        <Route path={CONSUMER_ROUTE.ORDER_HISTORY} element={<ConsumerActiveOrder />} />
                        <Route path={CONSUMER_ROUTE.MENU} element={<ConsumerMenuCheckout />} />
                        <Route path={CONSUMER_ROUTE.SIGNUP} element={<ConsumerAuth isLogin={false} />} />
                        <Route path={CONSUMER_ROUTE.LOGIN} element={<ConsumerAuth isLogin={true} />} />
                    </Route>

                    <Route element={<CourierRoot />}>
                        <Route path="*" element={<Navigate to={COURIER_ROUTE.HOME} />} />
                        <Route path={COURIER_ROUTE.HOME} element={<CourierHome />} />
                        <Route path={COURIER_ROUTE.SIGNUP} element={<CourierAuth />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </>
    )
}