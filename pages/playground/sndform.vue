<script setup lang='ts'>
import {FormKit, FormKitSchema} from '@formkit/vue'
import {ref, reactive} from 'vue'
// import {intervention as schema, riskRatings} from '~/schemas/Intervention'
import {enforcement as enforcementForm, initialEnforcement as initialEnforcement} from "~/schemas/enforcement";
import {complaintForm as complaintForm, complaintDefaults} from "~/schemas/complaint";
import {activityForm, activityDefaults} from "~/schemas/activity";

const schema = reactive(activityForm)

const data = ref({
      ...activityDefaults,
      // ...complaintDefaults
    }
)

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  console.log('submitHandler', data)
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div class="card flex flex-wrap gap-12">
    <div class="basis-1/2 md:basis-1/3">
      <span class=""/>
      <div class="myFormkit">
        <FormKit
            #default="{ value }"
            id="form"
            v-model="data"
            type="form"
            :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
            @submit="submitHandler"
        >
          <FormKitSchema :schema="schema" :data="data"/>
          <pre>{{ value }}</pre>
          <FormKit type="group" name="complaint">
            <FormKitSchema :schema="complaintForm"/>
          </FormKit>
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
