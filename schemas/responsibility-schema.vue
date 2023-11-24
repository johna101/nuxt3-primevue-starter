<template>
  <FormKit
    type="dropdown"
    name="responsibilityTypeCode"
    label="Responsibility Type..."
    help="Responsibility Type"
    validation="required"
    :options="options"
  />
</template>

<script lang='ts'>
export const responsibilityDefaults = {
  responsibilityTypeCode: 'FL'
}
</script>

<script setup lang='ts'>

const options = [
  { label: 'Food Law', value: 'FL' },
  { label: 'Food Hygiene', value: 'FH' },
  { label: 'Food Standards', value: 'FS' }
]
</script>
