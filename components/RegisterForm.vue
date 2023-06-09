<script lang="ts" setup>
const router = useRouter()
const { changeTitle } = useLayout()
const { register } = useUser()

onMounted(() => changeTitle('New Account'))

interface Topic { id: number; title: string }
interface Role {id: number; name: string}

const roles: Role[] = [
  {
    id: 1,
    name: 'Scientist',
  },
  {
    id: 2,
    name: 'Reviewer',
  },
  {
    id: 3,
    name: 'Designer',
  },
]

const selectedRole = ref<Role>()

const topics: Topic[] = [
  {
    id: 1,
    title: 'Topic 1',
  },
  {
    id: 2,
    title: 'Topic 2',
  },
  {
    id: 3,
    title: 'Topic 3',
  },
  {
    id: 4,
    title: 'Topic 4',
  },
]

const selectedTopics = ref<Topic[]>([])

const query = ref('')

const filteredTopics = computed(() =>
  query.value === ''
    ? topics
    : topics.filter((topic) => {
      return topic.title.toLowerCase().includes(query.value.toLowerCase())
    }),
)

function submit() {
  register()
  router.push('/publications')
}
</script>

<template>
  <div class="mx-auto max-w-4xl sm:px-24px lg:px-32px">
    <div class="relative isolate  bg-gray-900 px-24px py-32px shadow-2xl sm:rounded-24px sm:px-48px xl:py-48px">
      <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Creat new account
      </h2>
      <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
        Reprehenderit ad esse et non officia in nulla. Id proident tempor.
      </p>
      <div flex flex-col items-end justify-center gap-24px mt-16px>
        <HeadlessListbox v-model="selectedRole" as="div" w-full>
          <HeadlessListboxLabel class="block text-sm font-medium leading-6">
            Role
          </HeadlessListboxLabel>
          <div class="relative mt-2">
            <HeadlessListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-1y sm:text-sm sm:leading-6">
              <span class="block truncate">{{ selectedRole?.name ?? 'Select Role' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <div i-heroicons-solid-chevron-down class="h-24px w-24px text-gray-400" aria-hidden="true" />
              </span>
            </HeadlessListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <HeadlessListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <HeadlessListboxOption v-for="role in roles" :key="role.id" v-slot="{ active, selected }" as="template" :value="role">
                  <li class="relative cursor-default select-none py-2 pl-3 pr-9" :class="[active ? 'bg-app-primary text-white' : 'text-gray-900']">
                    <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">{{ role.name }}</span>

                    <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="[active ? 'text-white' : 'text-app-primary']">
                      <div i-heroicons-solid-check class="h-24px w-24px" aria-hidden="true" />
                    </span>
                  </li>
                </HeadlessListboxOption>
              </HeadlessListboxOptions>
            </transition>
          </div>
        </HeadlessListbox>
        <HeadlessCombobox v-model="selectedTopics" as="div" multiple w-full>
          <HeadlessComboboxLabel class="block text-sm font-medium leading-6 ">
            Favorit Topics
          </HeadlessComboboxLabel>
          <div v-if="selectedTopics.length" flex items-center gap-4px mt-4px>
            <span v-for="topic in selectedTopics" :key="topic.id" class="inline-flex items-center rounded bg-app-primary px-2 py-0.5 text-xs font-medium">{{ topic.title }}</span>
          </div>
          <div class="relative mt-2">
            <HeadlessComboboxButton w-full>
              <HeadlessComboboxInput placeholder="Search for Topic" class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 placeholder:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-app-primary sm:text-sm sm:leading-6" @change="query = $event.target.value" />
            </HeadlessComboboxButton>
            <HeadlessComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <div i-heroicons-solid-chevron-down class="h-24px w-24px text-gray-400" aria-hidden="true" />
            </HeadlessComboboxButton>

            <HeadlessComboboxOptions v-if="filteredTopics.length > 0" class="absolute z-10 mt-1 max-h-60 w-full  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <HeadlessComboboxOption v-for="topic in filteredTopics" :key="topic.id" v-slot="{ active, selected }" :value="topic" as="template">
                <li class="relative cursor-default select-none py-2 pl-3 pr-9" :class="[active ? 'bg-app-primary text-white' : 'text-gray-900']">
                  <span class="block truncate" :class="[selected && 'font-semibold']">
                    {{ topic.title }}
                  </span>

                  <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="[active ? 'text-white' : 'text-app-primary']">
                    <div i-heroicons-solid-check class="h-24px w-24px" aria-hidden="true" />
                  </span>
                </li>
              </HeadlessComboboxOption>
            </HeadlessComboboxOptions>
          </div>
        </HeadlessCombobox>
        <button mt-16px type="button" w-auto class="rounded-md bg-app-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-app-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-primary/80" @click="submit">
          Create Account
        </button>
      </div>
      <!-- <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg> -->
    </div>
  </div>
</template>
