<template>
  <DefaultLayout>
    <template v-slot:mainContent>
      <!-- <div ref="containerRef" v-bind="containerProps" class="h-[600px] overflow-y-auto border p-4">
        <draggable v-model="homeStore.wordsData" item-key="order" class="space-y-2">
          <template #item="">
            <div v-bind="wrapperProps">
              <div
                v-for="item in list"
                :key="item.index"
                class="bg-blue-100 p-2 rounded shadow cursor-move"
              >
                {{ item.data.value }}
              </div>
            </div>
          </template>
        </draggable>
      </div> -->
      <div class="container p-4">
        <draggable v-model="homeStore.wordsData" item-key="order" class="space-y-2">
          <template #item="{ element }">
            <div class="bg-blue-100 p-2 rounded shadow cursor-move">
              {{ element.value }}
            </div>
          </template>
        </draggable>
      </div>
    </template>
  </DefaultLayout>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useHomeStore } from '@/store/homeStore'
import { useVirtualList } from '@vueuse/core'
import draggable from 'vuedraggable'
import type { WordItem } from '@/models/model'

defineOptions({
  name: 'DefaultLayout'
})

const homeStore = useHomeStore()

// const containerRef = ref(null)

// const wordsRef = ref<WordItem[]>([])

// const { list, containerProps, wrapperProps } = useVirtualList(homeStore.wordsData, {
//   itemHeight: 40
// })

onMounted(() => {
  homeStore.loadData()
})
</script>
