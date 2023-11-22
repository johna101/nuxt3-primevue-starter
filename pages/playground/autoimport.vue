<script setup lang="ts">

const counter = ref(0)
const double = computed(() => {
  return counter.value * 2
})

</script>

<template>
  <div class="border-"></div>
  <div class="grid grid-cols-2 p-2 gap-2 place-items-stretch">
    <div class="">
      <Button label="Increment counter" @click="counter++"/>
    </div>
    <div class="bg-blue-500 rounded px-2 py-4">..{{ double }}..</div>

    <div class="bg-blue-500 rounded p-4">..{{ double }}..</div>
  </div>
  <div class="grid place-items-stretch grid-cols-3 gap-3">
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
    <div class="bg-blue-500 rounded p-4">Item</div>
  </div>
</template>
