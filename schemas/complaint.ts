import { ref } from 'vue'
import { activityForm, activityDefaults } from '~/schemas/activity'
import { responsibilityDefaults, responsibilityForm } from '~/schemas/responsibility'

export const complaintTypes = [
  {
    value: 0,
    label: 'Value not recognised'
  },
  {
    value: 1,
    label: 'Food'
  },
  {
    value: 2,
    label: 'Hygiene of premises'
  },
  {
    value: 3,
    label: 'Standards of premises'
  },
  {
    value: 4,
    label: 'Food Complaint'
  }
]

export const complaintDefaults = {
  activityTypeId: 1,
  activity: 'Complaint',
  date: '2022-11-01T00:00:00.000Z',
  responsibilityTypeCode: 'FS',
  complaint: {
    complaintsTypeId: 3
  }
}

export const formData = ref({
  ...activityDefaults,
  ...responsibilityDefaults,
  ...complaintDefaults
  // ...complaintDefaults
}
)

export const complaintForm =
    [
      ...activityForm,
      ...responsibilityForm,
      {
        $formkit: 'group',
        name: 'complaint',
        children: [{
          $formkit: 'dropdown',
          name: 'complaintsTypeId',
          label: 'Complaint Type',
          validation: 'required',
          value: 1,
          options: complaintTypes
        }]
      }
    ]
