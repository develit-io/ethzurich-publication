<script lang="ts" setup>
const showForm = ref(false)
</script>

<template>
  <div flex items-center justify-center h-full>
    <button v-if="!showForm" bg="white/10 hover:white/20" rounded-16px px-24px py-16px text="white 24px" @click="showForm = true">
      Register Yourself
    </button>
    <RegisterForm v-else />
  </div>
</template>
