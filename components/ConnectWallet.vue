<script lang="ts" setup>
const wallet = useWallet()
const { connectMM, disconnect } = wallet
const { address, ensName, isConnected } = storeToRefs(wallet)

const shortAddress = computed(() => (ensName.value ?? shortenAddress(address.value ?? '')))
</script>

<template>
  <div flex justify-end gap-16px>
    <h2 text="16px gray-300">
      {{ shortAddress }}
    </h2>
    <button type="button" class="rounded bg-app-primary px-8px py-4px text-xs font-semibold text-white shadow-sm hover:bg-app-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-primary/80" @click="isConnected ? disconnect() : connectMM()">
      {{ isConnected ? 'Disconnect' : 'Connect' }}
    </button>
  </div>
</template>
