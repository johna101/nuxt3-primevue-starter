<script setup lang='ts'>
import { FormKit, FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
// import {complaintForm as form, data} from "~/schemas/complaint";
// import {enforcementForm as form, data} from "~/schemas/enforcement";
import { formData, interventionTypes, getRiskRatings, flfhRatings, fsRatings } from '~/schemas/intervention'
import ResponsibilitySchema from '~/schemas/responsibility-schema.vue'
import { FormKitMessages } from '@formkit/vue'
const data = ref(formData)

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  data.value.activity = 'Changed by submitHandler'
  data.value.id = 'Changed by submitHandler'
  console.log('submitHandler', data)
  await new Promise(resolve => setTimeout(resolve, 1000))
}

const bla = computed(() => {
  switch (data.value.responsibilityTypeCode) {
    case 'FH':
      return flfhRatings
    case 'FS':
      return fsRatings
    case 'FL':
      return flfhRatings
    default:
      return []
  }
})

const riskRatingIsValid = function (node: any) {
  const ratings = getRiskRatings(node.value.responsibilityTypeCode)
  console.log('ratings', ratings, node.value.riskRatingAtIntervention)
  const result = ratings.includes(node.value.riskRatingAtIntervention)
  console.log('result', result)
  return result
}
const monday = function (node: any) {
  console.log('monday', node.value)
  return node.value.dummy === data.value.responsibilityTypeCode
}
</script>

<template>
  <div class="card flex flex-wrap gap-12">
    <div class="basis-1/2 md:basis-1/3">
      <span class="" />
      <div class="myFormkit">
        <FormKit
          id="form"
          v-model="data"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
          :validation-rules="{riskRatingIsValid}"
          validation="riskRatingIsValid"
          :validation-messages="{riskRatingIsValid: 'Risk rating is not valid for this responsibility type'}"
          @submit="submitHandler"
        >
          <ResponsibilitySchema />
          <FormKit
            type="dropdown"
            name="interventionTypeId"
            label="Intervention Type"
            help="Intervention Type"
            validation="required"
            :options="interventionTypes"
          />
          <FormKit
            type="dropdown"
            name="riskRatingAtIntervention"
            label="Risk Rating"
            help="At date of intervention"
            :options="bla"
          />
          <FormKit
            type="text"
            name="dummy"
            label="Monday"
            help="At date of intervention"
            validation-visibility="live"
          />
          <FormKitMessages />
        </formkit>
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
