<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'connect'): void
}>()
</script>

<template>
  <div flex items-center justify-center h-full>
    <button bg="white/10 hover:white/20" rounded-16px px-24px py-16px text="white 24px" @click="emit('connect')">
      Connect Wallet
    </button>
  </div>
</template>
