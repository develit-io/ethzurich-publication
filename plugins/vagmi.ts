import type { Client } from '@wagmi/core'
import {
  configureChains,
  createClient,
  mainnet,
} from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import type { ShallowRef } from 'nuxt/dist/app/compat/vue-demi'

declare module '#app' {
  interface NuxtApp {
    $wagmiClient: ShallowRef<Client>
  }
}

export default defineNuxtPlugin(() => {
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()],
  )

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  })

  const reactiveClient = shallowRef(client)

  // todo register unmout hook
  const unsubscribe = client.subscribe(() => {
    triggerRef(markRaw(reactiveClient))
  })

  // const originalUnmount = nuxtApp.unmount
  // nuxtApp.unmount = function wagmiUnmount() {
  //   unsubscribe()
  // }

  return {
    provide: {
      wagmiClient: markRaw(reactiveClient),
    },
  }
})
