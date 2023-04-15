<script lang="ts" setup>
const router = useRouter()

const { user } = useUser()

onMounted(() => {
  if (!user.value)
    router.push('register')
})
</script>

<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        Back End Developer
      </h2>
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <div i-heroicons-solid-briefcase class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
          Full-time
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <div i-heroicons-solid-map-pin class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
          Remote
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <div i-heroicons-solid-currency-dollar class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
          $120k – $140k
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-300">
          <div i-heroicons-solid-calendar class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
          Closing on January 9, 2020
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:ml-4 lg:mt-0">
      <span class="hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
          <div i-heroicons-solid-pencil class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Edit
        </button>
      </span>
      <span class="ml-3 hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
          <div i-heroicons-solid-link class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          View
        </button>
      </span>
      <span class="sm:ml-3">
        <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <div i-heroicons-solid-check class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Publish
        </button>
      </span>

      <!-- Dropdown -->
      <HeadlessMenu as="div" class="relative ml-3 sm:hidden">
        <HeadlessMenuButton class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
          More
          <div i-heroicons-solid-chevron-down class="-mr-1 ml-1.5 h-5 w-5" aria-hidden="true" />
        </HeadlessMenuButton>
        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <HeadlessMenuItems class="absolute left-0 z-10 -ml-1 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <HeadlessMenuItem v-slot="{ active }">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" :class="[active ? 'bg-gray-100' : '']">Edit</a>
            </HeadlessMenuItem>
            <HeadlessMenuItem v-slot="{ active }">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" :class="[active ? 'bg-gray-100' : '']">View</a>
            </HeadlessMenuItem>
          </HeadlessMenuItems>
        </Transition>
      </HeadlessMenu>
    </div>
  </div>
</template>
