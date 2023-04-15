<script lang="ts" setup>
import { formatDate, remainingTime } from '~/utils/utils'

const { changeTitle } = useLayout()

const { publications } = usePublications()

onMounted(() => changeTitle('My Publications'))

const statuses = { published: 'text-green-400 bg-green-400/10', inProgress: 'text-yellow-400 bg-yellow-400/10', inReview: 'text-yellow-400 bg-yellow-400/10', draft: 'text-rose-400 bg-rose-400/10' }
</script>

<template>
  <div w-full mt-32px>
    <table class="mt-6 w-full whitespace-nowrap text-left">
      <colgroup>
        <col class="w-full sm:w-4/12">
        <col class="lg:w-4/12">
        <col class="lg:w-2/12">
        <col class="lg:w-1/12">
        <col class="lg:w-1/12">
      </colgroup>
      <thead class="border-b border-white/10 text-sm leading-6 text-white">
        <tr>
          <th scope="col" class="py-2  font-semibold">
            Address
          </th>
          <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
            Title
          </th>
          <th scope="col" class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
            Status
          </th>
          <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
            Review Ends
          </th>
          <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
            Published at
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr v-for="article in publications" :key="article.address">
          <td class="py-8px pr-16px">
            <div class="flex items-center gap-x-4">
              <div class="truncate text-sm font-medium leading-6 text-white">
                {{ article.address }}
              </div>
            </div>
          </td>
          <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
            <div class="flex gap-x-3">
              <div class="font-mono text-sm leading-6 text-gray-400">
                {{ article.title }}
              </div>
            </div>
          </td>
          <td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
            <div class="flex items-center justify-end gap-x-2 sm:justify-start">
              <time v-if="article.reviewEnd" class="text-gray-400 sm:hidden" :datetime="article.reviewEnd.toString()">{{ article.reviewEnd }}</time>
              <div class="flex-none rounded-full p-1" :class="[statuses[article.state]]">
                <div class="h-1.5 w-1.5 rounded-full bg-current" />
              </div>
              <div class="hidden text-white sm:block">
                {{ article.state }}
              </div>
            </div>
          </td>
          <td class="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
            {{ remainingTime(article.reviewEnd!) }}
          </td>
          <td class="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
            <time v-if="article.publishedDate" :datetime="article.publishedDate.toString()">{{ formatDate(article.publishedDate) }}</time>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
