<script lang="ts" setup>
const { isConnected } = storeToRefs(useWallet())

const { title } = useLayout()

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: 'i-heroicons-solid-cloud-arrow-up',
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: 'i-heroicons-solid-lock-closed',
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: 'i-heroicons-solid-refresh',
  },
]
</script>

<template>
  <div h-full>
    <main flex flex-col w-full h-full>
      <div grid :class="[isConnected ? 'grid-cols-3' : 'grid-cols-2']" items-center py-12px>
        <h1 text-start text="32px" font-700>
          {{ title }}
        </h1>
        <h3 v-if="isConnected" text="18px center">
          <span text="gray-500">Balance:</span> <span>130 PUB</span>
        </h3>
        <ConnectWallet />
      </div>
      <div w-full h-1px bg-gray-700 />
      <NuxtPage v-if="isConnected" />
      <div v-else class="bg-gray-900 py-24 sm:py-32" mt-72px rounded-xl>
        <div class="mx-auto max-w-7xl pl-32px pr-16px lg:pl-48px lg:pr-24px">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-app-primary/90">
              Deploy faster
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div v-for="feature in features" :key="feature.name" class="flex flex-col ">
                <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div :class="feature.icon" class="h-5 w-5 flex-none text-app-primary/90" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                <dd class="mt-4 flex flex-auto flex-col  text-base leading-7 text-gray-300">
                  <p class="flex-auto">
                    {{ feature.description }}
                  </p>
                  <p class="mt-6">
                    <a :href="feature.href" class="text-sm font-semibold leading-6 text-app-primary/90">Learn more <span aria-hidden="true">→</span></a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
