import { useConsumerAccessTokenContext } from '../../auth/context/accessTokenContext'
import { CONSUMER_PROFILE_API_URI } from '../../../../shared/constant/apiUri'

async function getMyProfile() {
    const res = await fetch(
        CONSUMER_PROFILE_API_URI.ME,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${useConsumerAccessTokenContext().contextAccessToken}`
            },
        },
    );

    if (!res.ok) {
        throw new Error(
            `Get my profile request failed (${res.status}): ${res.statusText}`,
        );
    }

    return res.json();
}

export default getMyProfile