<script lang='ts' setup>
import { FormKit, FormKitMessages } from '@formkit/vue'
import { ref } from 'vue'
// import {complaintForm as form, data} from "~/schemas/complaint";
// import {enforcementForm as form, data} from "~/schemas/enforcement";
import { flfhRatings, formData, fsRatings, getRiskRatings, interventionTypes } from '~/schemas/intervention'
import ResponsibilitySchema from '~/schemas/responsibility-schema.vue'

const data = ref(formData)
data.value.activity = 'Intervention'

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  data.value.activity = 'Changed by submitHandler'
  data.value.id = 'Changed by submitHandler'
  await new Promise(resolve => setTimeout(resolve, 1000))
}

const riskRatingOptions = computed(() => {
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

const load = function () {
  data.value = {
    ...data.value,
    ...{
      id: '999999',
      responsibilityTypeCode: 'FH',
      interventionTypeId: 1,
      riskRatingAtIntervention: 'A'
    }
  }
}

const riskRatingIsValid = function (node: any) {
  const ratings = getRiskRatings(node.value.responsibilityTypeCode)
  const result = ratings.includes(node.value.riskRatingAtIntervention)
  return result
}
const monday = function (node: any) {
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
          :actions="false"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
          :validation-messages="{ riskRatingIsValid: 'Risk rating is not valid for this responsibility type'}"
          :validation-rules="{ riskRatingIsValid }"
          type="form"
          validation="riskRatingIsValid"
          @submit="submitHandler"
        >
          <FormKit
            label="Load"
            type="button"
            @click="load"
          />
          <ResponsibilitySchema />
          <FormKit
            :options="interventionTypes"
            help="Intervention Type"
            label="Intervention Type"
            name="interventionTypeId"
            type="dropdown"
            validation="required"
          />
          <FormKit
            :options="riskRatingOptions"
            help="At date of intervention"
            label="Risk Rating"
            name="riskRatingAtIntervention"
            type="dropdown"
          />
          <FormKit
            help="At date of intervention"
            label="Monday"
            name="dummy"
            type="text"
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
