export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

type HttpRequestOptions = {
    method: HttpMethod
    uri: string
    headers?: Record<string, string>
    body?: unknown
    requiresAuth?: boolean
}

export async function httpRequest<TResponse>(
    options: HttpRequestOptions
): Promise<TResponse> {
    try {
        const { method, uri, headers, body } = options

        const finalHeaders: Record<string, string> = {
            "Content-Type": "application/json",
            ...headers,
        }

        const res = await fetch(uri, {
            method,
            headers: finalHeaders,
            credentials: "include",
            body: body !== undefined ? JSON.stringify(body) : undefined,
        })

        if (!res.ok) {
            const errorText = await res.text()
            throw new Error(
                `HTTP request failed (${res.status}): ${errorText || res.statusText}`,
            )
        }

        return res.json() as Promise<TResponse>
    } catch (err) {
        console.error("HTTP request error:", err)
        throw err
    }
}