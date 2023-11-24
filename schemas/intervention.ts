import { reactive } from 'vue'
import { activityDefaults, activityForm } from '~/schemas/activity'
import { responsibilityDefaults, responsibilityForm } from '~/schemas/responsibility'

export const interventionTypes = [
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

export const fsRatings = ['A', 'B', 'C', 'no rating']
export const flfhRatings = ['A', 'B', 'C', 'D', 'E', 'no rating']

// function riskRatingIsValid (node) {
//   return false
// }

export function getRiskRatings (responsibilityTypeCode: string) {
  console.log('getRiskRatings', responsibilityTypeCode)
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
}

const interventionDefaults = {
  activity: 'Intervention',
  interventionTypeId: 1

  // return riskRatings.filter(riskRating => riskRating.responsibility === responsibilityTypeCode)
}

function riskRatingIsValid (node: any) {
  const ratings = getRiskRatings('FS')
  console.log('ratings', ratings, node.value)
  return ratings.includes(node.value)
}

export const formData = {
  id: '123456',
  ...activityDefaults,
  ...responsibilityDefaults,
  ...interventionDefaults
}
//
// export const interventionForm =
//     [
//       ...activityForm,
//       ...responsibilityForm,
//       {
//         $formkit: 'group',
//         name: 'intervention',
//         children: [
//           {
//             $formkit: 'dropdown',
//             name: 'interventionsTypeId',
//             label: 'Intervention Type',
//             // help: 'Intervention Type',
//             validation: 'required',
//             options: interventionTypes,
//             value: 1
//           },
//           {
//             $formkit: 'dropdown',
//             name: 'riskRatingAtIntervention',
//             label: 'Risk Rating At Intervention',
//             // help: 'Risk Rating At Intervention',
//             validation: 'required|riskRatingIsValid',
//             validationVisibility: 'dirty',
//             options: '$getRiskRating($responsibilityTypeCode)',
//             alwaysLoadOnOpen: true,
//             validationMessages: { riskRatingIsValid: 'Risk Rating is not valid for this Responsibility Type' }
//           }
//         ]
//       }
//     ]
