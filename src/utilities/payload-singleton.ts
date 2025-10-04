import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

let cachedPayload: Payload | null = null
let payloadPromise: Promise<Payload> | null = null

/**
 * Get Payload instance using singleton pattern to prevent multiple initializations
 */
export async function getPayloadSingleton(): Promise<Payload> {
  // Return cached instance if available
  if (cachedPayload) {
    return cachedPayload
  }

  // Return existing promise if initialization is in progress
  if (payloadPromise) {
    return payloadPromise
  }

  // Create new instance
  payloadPromise = getPayload({ config })
    .then((payload) => {
      cachedPayload = payload
      payloadPromise = null // Clear promise after successful initialization
      return payload
    })
    .catch((error) => {
      payloadPromise = null // Clear promise on error to allow retry
      throw error
    })

  return payloadPromise
}

/**
 * Clear the cached Payload instance (useful for testing or manual resets)
 */
export function clearPayloadCache(): void {
  cachedPayload = null
  payloadPromise = null
}