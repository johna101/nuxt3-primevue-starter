import {reactive} from "vue";
import {activityDefaults, activityForm} from "~/schemas/activity";
import {responsibilityDefaults, responsibilityForm} from "~/schemas/responsibility";

// const riskRatings = [
//     {
//         value: 73,
//         label: "A",
//         responsibility: "FH"
//     },
//     {
//         value: 74,
//         label: "B",
//         responsibility: "FH"
//     },
//     {
//         value: 75,
//         label: "C",
//         responsibility: "FH"
//     },
//     {
//         value: 76,
//         label: "D",
//         responsibility: "FH"
//     },
//     {
//         value: 77,
//         label: "E",
//         responsibility: "FH"
//     },
//     {
//         value: 81,
//         label: "no rating",
//         responsibility: "FH"
//     },
//     {
//         value: 83,
//         label: "A",
//         responsibility: "FS"
//     },
//     {
//         value: 84,
//         label: "B",
//         responsibility: "FS"
//     },
//     {
//         value: 85,
//         label: "C",
//         responsibility: "FS"
//     },
//     {
//         value: 87,
//         label: "no rating",
//         responsibility: "FS"
//     },
//     {
//         value: 89,
//         label: "A",
//         responsibility: "FL"
//     },
//     {
//         value: 90,
//         label: "B",
//         responsibility: "FL"
//     },
//     {
//         value: 91,
//         label: "C",
//         responsibility: "FL"
//     },
//     {
//         value: 92,
//         label: "D",
//         responsibility: "FL"
//     },
//     {
//         value: 93,
//         label: "E",
//         responsibility: "FL"
//     },
//     {
//         value: 95,
//         label: "no rating",
//         responsibility: "FL"
//     }
// ]


const interventionTypes = [
    {
        "value": 1,
        "label": "Inspections and audits"
    },
    {
        "value": 2,
        "label": "Revisits and other visits"
    },
    {
        "value": 3,
        "label": "Sampling visits"
    },
    {
        "value": 4,
        "label": "Advice and education"
    },
    {
        "value": 5,
        "label": "Information/intelligence gathering"
    },
    {
        "value": 6,
        "label": "OCV Start"
    },
    {
        "value": 7,
        "label": "OCV "
    },
    {
        "value": 8,
        "label": "OCV Complete"
    }
]

const interventionDefaults = {
    activity: 'Intervention',
    interventionsTypeId: 1,
    getRiskRating: function (responsibilityTypeCode: string) {
        switch (responsibilityTypeCode) {
            case "FH":
                return ['A', 'B', 'C', 'D', 'E', 'no rating']
            case "FS":
                return ['A', 'B', 'C', 'no rating']
            case "FL":
                return ['A', 'B', 'C', 'D', 'E', 'no rating']
            default:
                return []
        }
        // return riskRatings.filter(riskRating => riskRating.responsibility === responsibilityTypeCode)
    }
}

export const formData = {
    id: '123456',
    ...activityDefaults,
    ...responsibilityDefaults,
    ...interventionDefaults,
}


export const interventionForm =
    [
        ...activityForm,
        ...responsibilityForm,
        {
            $formkit: 'group',
            name: 'intervention',
            children: [
                {
                    $formkit: 'dropdown',
                    name: 'interventionsTypeId',
                    label: 'Intervention Type',
                    // help: 'Intervention Type',
                    validation: 'required',
                    options: interventionTypes,
                    value: 1
                },
                {
                    $formkit: 'dropdown',
                    name: 'riskRatingAtIntervention',
                    label: 'Risk Rating At Intervention',
                    // help: 'Risk Rating At Intervention',
                    validation: 'required',
                    options: '$getRiskRating($responsibilityTypeCode)',
                    alwaysLoadOnOpen: true,
                }
            ]
        }
    ]

