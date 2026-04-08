// import { createContext, useContext, useState } from 'react'
// import type { ConsumerAuthContextType } from '../type/authContextType'
// import { loginReq, LoginReqDTO, LoginResDTO } from '../api/loginReq'
// import { CONSUMER_PROFILE_API_URI } from '../../../../shared/constant/apiUri'

// const ConsumerAuthContext = createContext<ConsumerAuthContextType>({
//     consumerProfile: null,
//     setConsumerProfile: () => {},
//     login: async () => {},
//     logout: async () => {}
// })

// export function ConsumerAuthContextProvider({children}: {children: React.ReactNode}) {
//   const [consumerProfile, setConsumerProfile] = useState<ConsumerAuthContextType['consumerProfile']>(null)
//   const [accessToken, setAccessToken] = useState<string | null>(null)

//   async function handleLogin(loginData: LoginReqDTO) {
//     try {
//       const res: LoginResDTO = await loginReq(loginData)
//       setAccessToken(res.accessToken)
//     } catch (error) {
//       console.error("Login failed:", error)
//       throw error
//     }    
//   }



//   async function handleLogout() {
//     setAccessToken(null)
//   }

//   return (
//     <ConsumerAuthContext.Provider value={{
//       consumerProfile: consumerProfile,
//       setConsumerProfile: setConsumerProfile,
//       login: handleLogin,
//       logout: handleLogout
//     }}>
//       {children}
//     </ConsumerAuthContext.Provider>
//   )
// }

// export function useConsumerAccessTokenContext() {
//   const context = useContext(AccessTokenContext)
//   if (context === undefined) {
//     throw new Error('useAccessToken must be used within an AccessTokenProvider')
//   }
//   return context
// }
// // Memo:
// // The idea here is that passing useState into the context allows us to interact with the useState data via the context. 