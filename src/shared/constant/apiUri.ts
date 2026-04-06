const API_BASE_URL = "http://localhost:3000"

export const FRONTEND_URI = "https://hibiki-shibata.github.io/ride.driver.frontend"

export const COURIER_PROFILE_API_URI = {
    LOGIN: `${API_BASE_URL}/api/v1/auth/courier/login`,
    SIGNUP: `${API_BASE_URL}/api/v1/auth/courier/signup`,
    REFRESH_TOKEN: `${API_BASE_URL}/api/v1/auth/courier/refresh-token`,
    ME: `${API_BASE_URL}/api/v1/courier/me`,
    UPDATE_LOCATION: `${API_BASE_URL}/api/v1/courier/location`,
    UPDATE_ONLINE_STATUS: `${API_BASE_URL}/api/v1/courier/online`,
    GET_TASK_HISTORY: `${API_BASE_URL}/api/v1/courier/tasks/history`,
}

export const CONSUMER_PROFILE_API_URI = {
    LOGIN: `${API_BASE_URL}/api/v1/auth/consumer/login`,
    SIGNUP: `${API_BASE_URL}/api/v1/auth/consumer/signup`,
    REFRESH_TOKEN: `${API_BASE_URL}/api/v1/auth/consumer/refresh-token`,
    ME: `${API_BASE_URL}/api/v1/consumer/me`,
    GET_ORDER_HISTORY: `${API_BASE_URL}/api/v1/consumer/order/history`,
}

export const MERCHANT_PROFILE_API_URI = {
    LOGIN: `${API_BASE_URL}/api/v1/auth/merchant/login`,
    SIGNUP: `${API_BASE_URL}/api/v1/auth/merchant/signup`,
    REFRESH_TOKEN: `${API_BASE_URL}/api/v1/auth/merchant/refresh-token`,
    ME: `${API_BASE_URL}/api/v1/merchant/me`,
    UPDATE_ONLINE_STATUS: `${API_BASE_URL}/api/v1/merchant/online`,
    GET_ORDER_HISTORY: `${API_BASE_URL}/api/v1/merchant/order/history`,
}

export const MERCHANT_ITEM_API_URI = {
    ME: `${API_BASE_URL}/api/v1/merchant/item/me`,
}