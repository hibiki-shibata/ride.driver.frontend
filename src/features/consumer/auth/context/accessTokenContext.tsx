import { createContext, useContext, useState } from 'react'

type AccessTokenContextType = {
  contextAccessToken: string | null;
  setContextAccessToken: (token: string | null) => void;
}

const AccessTokenContext = createContext<AccessTokenContextType>({
  contextAccessToken: null,
  setContextAccessToken: () => {},
})

export function ConsumerAccessTokenProvider({children}: {children: React.ReactNode}) {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  return (
    <AccessTokenContext value={{ 
      contextAccessToken: accessToken,
      setContextAccessToken: setAccessToken
    }}>
      {children}
    </AccessTokenContext>
  )
}

export function useConsumerAccessTokenContext() {
  const context = useContext(AccessTokenContext)
  if (context === undefined) {
    throw new Error('useAccessToken must be used within an AccessTokenProvider')
  }
  return context
}
// Memo:
// The idea here is that passing useState into the context allows us to interact with the useState data via the context. 