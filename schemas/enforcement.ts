import { reactive, watch } from 'vue'
import { activityDefaults, activityForm } from '~/schemas/activity'
import { responsibilityDefaults, responsibilityForm } from '~/schemas/responsibility'

export const enforcementTypes = [
  {
    value: 1,
    label: 'Hygiene Improvement Notice.'
  },
  {
    value: 2,
    label: 'Improvement Notice.'
  },
  {
    value: 3,
    label: 'Regulation 27- Certificate That Food Has Not Been Produced, Processed or Distributed in Compliance With The Hygiene Regulations.'
  },
  {
    value: 4,
    label: 'Detention Seizure and Surrender of food (FH and FS). (N.B. Food Standards Responsibility Type- This relates to introduction of new powers relating to detention,'
  },
  {
    value: 5,
    label: 'Hygiene Emergency Prohibition Notice.'
  },
  {
    value: 6,
    label: 'Hygiene Emergency Prohibition Order.'
  },
  {
    value: 7,
    label: 'Hygiene Prohibition Order.'
  },
  {
    value: 8,
    label: 'Voluntary Closure.'
  },
  {
    value: 9,
    label: 'Simple Caution.'
  },
  {
    value: 10,
    label: 'Detention Notice. (Approved Businesses).'
  },
  {
    value: 11,
    label: 'Suspension of Approval.'
  },
  {
    value: 12,
    label: 'Withdrawal of Approval.'
  },
  {
    value: 13,
    label: 'Remedial Action Notice.'
  },
  {
    value: 14,
    label: 'Contravention letter (formerly written warning on LAEMS).'
  },
  {
    value: 15,
    label: 'Food Standards Contravention letter'
  },
  {
    value: 16,
    label: 'Detention Seizure and Voluntary Surrender of Food Information'
  },
  {
    value: 17,
    label: 'Detention Seizure and Voluntary Surrender of Novel Food'
  },
  {
    value: 18,
    label: 'Contravention Letter Food Law'
  },
  {
    value: 19,
    label: 'Prosecution'
  },
  {
    value: 20,
    label: 'Advice Letter Food Hygiene'
  },
  {
    value: 21,
    label: 'Advice Letter Food Standards'
  },
  {
    value: 22,
    label: 'Advice Letter Food Law'
  },
  {
    value: 23,
    label: 'Compliance Notice'
  },
  {
    value: 24,
    label: 'Fixed Penalty Notice'
  },
  {
    value: 25,
    label: 'Food Incident / Recall / Withdrawal'
  },
  {
    value: 26,
    label: 'Temporary Closure Notice'
  },
  {
    value: 27,
    label: 'Fiscal Warning'
  },
  {
    value: 28,
    label: 'Withdrawal of RAN'
  }
]

export const enforcementDefaults = {
  activityTypeId: 2,
  activity: 'Enforcement',
  date: '2022-11-01T00:00:00.000Z',
  responsibilityTypeCode: 'FS',
  enforcement: {
    enforcementsTypeId: 1
  }
}

export const data = reactive({
  ...activityDefaults,
  ...responsibilityDefaults,
  ...enforcementDefaults
}
)

export const enforcementForm =
    [
      ...activityForm,
      ...responsibilityForm,
      {
        $formkit: 'group',
        name: 'enforcement',
        children: [{
          $formkit: 'dropdown',
          name: 'enforcementsTypeId',
          label: 'Enforcement Type',
          validation: 'required',
          value: 1,
          options: enforcementTypes
        }]
      }
    ]
