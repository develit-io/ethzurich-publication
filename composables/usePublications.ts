import type { Article } from '~/types'

export const usePublications = defineStore('publications', () => {
  const { isConnected, address } = storeToRefs(useWallet())
  const publications = ref<Article[]>()

  const stopwatch = watch(isConnected, async () => {
    if (!address.value) {
      publications.value = []
      return
    }
    publications.value = await $fetch('/api/publications')
  }, { immediate: true })

  function dispose() {
    stopwatch()
  }

  return {
    publications,
    dispose,
  }
})
