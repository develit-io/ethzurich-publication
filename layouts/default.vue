<script lang="ts" setup>
const logged = ref(false)
</script>

<template>
  <div h-full>
    <NuxtPage v-if="logged" />
    <ConnectWallet v-else @connect="logged = true" />
  </div>
</template>
