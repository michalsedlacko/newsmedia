import type { WordItem } from '@/models/model'
import { service } from '@/services/service'
import { defineStore } from 'pinia'

declare type HomeState = {
  isLoading: boolean
  wordsData: WordItem[]
}
declare type HomeGetters = {}
declare type HomeAction = {
  loadData(): Promise<void>
}

export const useHomeStore = defineStore<string, HomeState, HomeGetters, HomeAction>('homeStore', {
  persist: true,
  state: (): HomeState => {
    return {
      isLoading: false,
      wordsData: []
    }
  },
  actions: {
    async loadData() {
      if (this.wordsData.length === 0) {
        try {
          this.isLoading = true
          const data = await service.getWords()
          console.log(data)
          if (data && Array.isArray(data) && data.length > 0) {
            const loadedData: WordItem[] = []
            for (let i = 0; i < data.length; i++) {
              loadedData.push({ value: data[i], order: i + 1 })
            }
            this.wordsData = loadedData
          }
          this.isLoading = false
        } catch (e) {
          this.isLoading = false
          console.error('Error loading words:', e)
        }
      }
    }
  }
})
