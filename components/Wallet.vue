<script lang="ts" setup>
import { shortenAddress } from '~/utils/utils'

const wallet = useWallet()
const { connectMM, disconnect } = wallet
const { address, ensName, isConnected } = storeToRefs(wallet)
const addr = computed(() => (ensName.value ?? shortenAddress(address.value ?? '')))
</script>

<template>
  <div>
    <div v-if="isConnected">
      {{ addr }} | <button type="button" @click="disconnect">
        Disconnect
      </button>
    </div>
    <button v-else type="button" @click="connectMM">
      Connect Wallet
    </button>
  </div>
</template>
