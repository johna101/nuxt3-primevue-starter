<script setup lang='ts'>
import { FormKit, FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import { complaintForm as form, formData } from '~/schemas/complaint'
// import {enforcementForm as form, data} from "~/schemas/enforcement";
// import { interventionForm as form, formData } from '~/schemas/intervention'

const schema = reactive(form)
const data = ref(formData)

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  data.value.activity = 'Changed by submitHandler'
  data.value.id = 'Changed by submitHandler'
  console.log('submitHandler', data)
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div class="card flex flex-wrap gap-12">
    <div class="basis-1/2 md:basis-1/3">
      <span class="" />
      <div class="myFormkit">
        <FormKit
          id="form"
          v-slot="{ value }"
          v-model="data"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
          @submit="submitHandler"
        >
          <FormKitSchema :schema="schema" :data="data" />
        </FormKit>
      </div>
    </div>
    <div class="basis-1/2 md:basis-1/3">
      <h2>Formkit Debug</h2>
      <h3>Data</h3>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
<style scoped></style>
