<script lang="ts" setup>
const { connected } = useUser()

const { title } = useLayout()
</script>

<template>
  <div h-full px-24px py-16px>
    <ConnectWallet v-if="!connected" @connect="connected = true" />
    <div v-else flex flex-col w-full h-full>
      <div flex items-center justify-between>
        <h2 text="32px" font-700>
          {{ title }}
        </h2>
        <button flex flex-col bg="app-primary hover:app-primary/60" rounded-16px px-14px py-10px text="16px" truncate @click="connected = false">
          <h2>0x858f21...01b1</h2>
          <h3 text="14px" font-500>
            Balance: 23 PUB
          </h3>
        </button>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
