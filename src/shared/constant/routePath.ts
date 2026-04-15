const BASE_ROUTE = "/ride.driver.frontend/"

export const CONSUMER_ROUTE = {
    SIGNUP: BASE_ROUTE + "consumer/signup",
    LOGIN: BASE_ROUTE + "consumer/login",
    HOME: BASE_ROUTE + "consumer/home",
    MERCHANTS: BASE_ROUTE + "consumer/explore/merchants",
    MENU: BASE_ROUTE + "consumer/explore/menu",
    ORDER_STATUS: BASE_ROUTE + "consumer/order/status",
}

export const COURIER_ROUTE = {
    HOME: BASE_ROUTE + "courier/home",
    SIGNUP: BASE_ROUTE + "courier/signup",
}

export const MERCHANT_ROUTE = {
    HOME: BASE_ROUTE + "merchant/home",
}