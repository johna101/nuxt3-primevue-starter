<script setup lang="ts">

const interventionTypes = [
  {
    value: 1,
    label: 'Inspections and audits'
  },
  {
    value: 2,
    label: 'Revisits and other visits'
  },
  {
    value: 3,
    label: 'Sampling visits'
  },
  {
    value: 4,
    label: 'Advice and education'
  },
  {
    value: 5,
    label: 'Information/intelligence gathering'
  },
  {
    value: 6,
    label: 'OCV Start'
  },
  {
    value: 7,
    label: 'OCV '
  },
  {
    value: 8,
    label: 'OCV Complete'
  }
]

const fsRatings = ['A', 'B', 'C', 'no rating']
const flfhRatings = ['A', 'B', 'C', 'D', 'E', 'no rating']

function isValid(node) {
  const ratings = this.getRiskRating('FS')
  console.log('ratings', ratings, node.value)
  return ratings.includes(node.value)
}

function getRiskRating (responsibilityTypeCode: string) {
  switch (responsibilityTypeCode) {
    case 'FH':
      return flfhRatings
    case 'FS':
      return fsRatings
    case 'FL':
      return flfhRatings
    default:
      return []
  }
  // return riskRatings.filter(riskRating => riskRating.responsibility === responsibilityTypeCode)
}
</script>

<template>
  <FormKit
    type="group"
    name="intervention"
  >
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
      validation="required"
      :options="getRiskRating('FS')"
    />
  </formkit>
</template>

<style scoped>

</style>
