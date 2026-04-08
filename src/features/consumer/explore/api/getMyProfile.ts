// import { useConsumerAccessTokenContext } from '../../auth/context/accessTokenContext'
// import { CONSUMER_PROFILE_API_URI } from '../../../../shared/constant/apiUri'
// import  type{ ConsumerProfile } from '../../auth/type/consumerProfile'

// async function getMyProfile(): Promise<ConsumerProfile> {
//     const res = await fetch(
//         CONSUMER_PROFILE_API_URI.ME,
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${useConsumerAccessTokenContext().contextAccessToken}`
//             },
//         },
//     )

//     if (!res.ok) {
//         throw new Error(
//             `Get my profile request failed (${res.status}): ${res.statusText}`,
//         )
//     }

//     return res.json() as Promise<ConsumerProfile>
// }

// export default getMyProfile