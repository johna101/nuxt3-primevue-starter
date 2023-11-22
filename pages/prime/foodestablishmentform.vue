<template>
  <div class="card flex flex-wrap gap-12">
    <FormKit
        type="form"
        #default="{value}">
      <FormKit
          type="primeInputText"
          name="name"
          label="Name"/>
          <pre>{{ value }}</pre>
    </FormKit>
  </div>

</template>

<script setup lang="ts">
</script>
