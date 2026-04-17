const API_BASE_URL = "http://localhost:3000"

export const FRONTEND_URI = "https://hibiki-shibata.github.io/ride.driver.frontend"

export const CONSUMER_API_URI = {
    LOGIN: API_BASE_URL + "/api/v1/consumer/auth/login",
    SIGNUP: API_BASE_URL + "/api/v1/consumer/auth/signup",
    LOGOUT: API_BASE_URL + "/api/v1/consumer/auth/logout",
    REFRESH_TOKEN: API_BASE_URL + "/api/v1/consumer/auth/refresh-token",
    ME: API_BASE_URL + "/api/v1/consumer/me",
    GET_ORDER_HISTORY: API_BASE_URL + "/api/v1/consumer/order/history",
    GET_AVAILABLE_MERCHANTS: API_BASE_URL + `/api/v1/consumer/explore/merchants`, // + ?page={page}&size={pageSize}
    GET_MERCHANT_MENU: API_BASE_URL + `/api/v1/consumer/explore/merchant`, // + /{merchantId}
    GET_ACTIVE_TASK: API_BASE_URL + `/api/v1/consumer/task/active`,
    CREATE_ORDER: API_BASE_URL + `/api/v1/consumer/task/create`,
}

export const COURIER_API_URI = {
    LOGIN: API_BASE_URL + "/api/v1/courier/auth/login",
    SIGNUP: API_BASE_URL + "/api/v1/courier/auth/signup",
    REFRESH_TOKEN: API_BASE_URL + "/api/v1/courier/auth/refresh-token",
    ME: API_BASE_URL + "/api/v1/courier/me",
    UPDATE_LOCATION: API_BASE_URL + "/api/v1/courier/location",
    UPDATE_ONLINE_STATUS: API_BASE_URL + "/api/v1/courier/online",
    GET_TASK_HISTORY: API_BASE_URL + "/api/v1/courier/tasks/history",
}

export const MERCHANT_API_URI = {
    LOGIN: API_BASE_URL + "/api/v1/auth/merchant/login",
    SIGNUP: API_BASE_URL + "/api/v1/auth/merchant/signup",
    REFRESH_TOKEN: API_BASE_URL + "/api/v1/auth/merchant/refresh-token",
    ME: API_BASE_URL + "/api/v1/merchant/me",
    UPDATE_ONLINE_STATUS: API_BASE_URL + "/api/v1/merchant/online",
    GET_ORDER_HISTORY: API_BASE_URL + "/api/v1/merchant/order/history",
}

export const MERCHANT_ITEM_API_URI = {
    ME: API_BASE_URL + "/api/v1/merchant/item/me",
}