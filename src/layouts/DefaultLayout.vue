<template>
  <div class="max-h-screen max-w-screen min-h-screen max-h-screen">
    <div class="max-h-screen max-w-screen min-h-screen max-h-screen flex flex-col">
      <Header></Header>
      <div class="grow">
        <slot name="mainContent"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'

defineOptions({
  name: 'DefaultLayout'
})
</script>
