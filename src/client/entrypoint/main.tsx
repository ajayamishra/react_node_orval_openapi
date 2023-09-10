import { Buffer } from 'buffer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppRoutes } from '../routes'
import { worker } from '../mocks/browser'

if (import.meta.env.DEV && import.meta.env.VITE_API_MOCK_ENABLED) {
  console.log('Mock Server Activated !!!!')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

globalThis.Buffer = globalThis.Buffer || Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>,
)
