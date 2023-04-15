<script lang="ts" setup>
const { changeTitle } = useLayout()
onMounted(() => changeTitle('New Publication'))
</script>

<template>
  <div flex flex-col items-center justify-center mt-32px>
    <div w="1/3">
      <label for="cover-photo" class="block text-sm font-medium leading-6 text-white">Article PDF</label>
      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
        <div class="text-center">
          <PhotoIcon class="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
          <div class="mt-4 flex text-sm leading-6 text-gray-400">
            <label for="file-upload" px-8px class="relative cursor-pointer rounded-md bg-app-primary font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:bg-app-primary/60">
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only">
            </label>
            <p class="pl-1">
              or drag and drop
            </p>
          </div>
          <p class="text-xs leading-5 text-gray-400">
            PDF up to 10MB
          </p>
        </div>
      </div>
      <div flex justify-center>
        <button bg="app-primary hover:app-primary/60" rounded-16px px-16px py-10px text="16px" w-full mt-24px w-auto>
          Send to Review
        </button>
      </div>
    </div>
  </div>
</template>
