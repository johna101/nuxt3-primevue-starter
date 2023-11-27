<script lang="ts" setup>
import { FormKit, FormKitMessages } from '@formkit/vue'
import { ref } from 'vue'
// import {complaintForm as form, data} from "~/schemas/complaint";
// import {enforcementForm as form, data} from "~/schemas/enforcement";
import { getNode } from '@formkit/core'
import { flfhRatings, formData, fsRatings, getRiskRatings, interventionTypes } from '~/schemas/intervention'
import ResponsibilitySchema from '~/schemas/responsibility-schema.vue'
import { activityForm } from '~/schemas/activity'

const data = ref(formData)
data.value.activity = 'Intervention'

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  data.value.activity = 'Changed by submitHandler'
  data.value.id = 'Changed by submitHandler'
  console.log('submitHandler', data)
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
      activity: 'Intervention',
      responsibilityTypeCode: 'FH',
      interventionTypeId: 1,
      riskRatingAtIntervention: 'A'
    }
  }

  // const node = createNode({
  //   type: 'input',
  //   name: 'dummy',
  //   value: 'FH'
  // })
  // const form = getNode('form')
  // form?.children?.push(node)
  // console.log('node', node, parent.value)
  const node = getNode('interventionTypeId')
  node!.input(5)
  console.log('node', node)
}

const riskRatingIsValid = function (node: any) {
  const ratings = getRiskRatings(node.value.responsibilityTypeCode)
  return ratings.includes(node.value.riskRatingAtIntervention)
}

const state = computed(() => {
  return form?.value?.node?.context.state
})

const form = ref(null)
</script>

<template>
  <div class="card flex flex-wrap gap-12">
    <div class="basis-1/2 md:basis-1/3">
      <span class="" />
      <div class="myFormkit">
        <FormKit
          id="form"
          ref="form"
          v-slot="{ state: formState }"
          v-model="data"
          dirty-behavior="touched"
          :submit-attrs="{
            inputClass: 'p-button p-component',
            wrapperClass: '',
            outerClass: ''
          }"
          :validation-messages="{ riskRatingIsValid: 'Risk rating is not valid for this responsibility type'}"
          :validation-rules="{ riskRatingIsValid }"
          actions="submit"
          type="form"
          validation="riskRatingIsValid"
          validation-visibility="touched"
          @submit="submitHandler"
        >
          <pre>Touched: {{ formState.dirty }}</pre>
          <FormKit
            label="Load"
            type="button"
            @click="load"
          />
          <FormKitSchema
            :data="data"
            :schema="activityForm"
          />
          <ResponsibilitySchema />
          <FormKit
            id="interventionTypeId"
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
          <FormKitMessages />
        </formkit>
      </div>
    </div>
    <div class="basis-1/2 md:basis-1/3">
      <h2>Formkit Debug</h2>
      <h3>Data</h3>
      <pre>{{ data }}</pre>
      <h3>State</h3>
      <pre>{{ state }}</pre>
    </div>
  </div>
</template>
<style scoped></style>
