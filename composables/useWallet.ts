import { InjectedConnector, connect, disconnect } from '@wagmi/core'

export const useWallet = defineStore('wallet', () => {
  const { address, isConnected } = useAccount()

  const ensName = ref()

  async function connectMM() {
    await connect({
      connector: new InjectedConnector(),
    })
  }

  return {
    address,
    isConnected,
    ensName,
    connectMM,
    disconnect,
  }
})
