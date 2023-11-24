export const activityTypes = [
    {
        value: 0,
        label: "Intervention"
    },
    {
        value: 1,
        label: "Complaint"
    },
    {
        value: 2,
        label: "Enforcement"
    },
    {
        value: 3,
        label: "Other"
    }
]

// export const activityTypes =
//     [
//         "Intervention",
//         "Complaint",
//         "Enforcement",
//         "Other"
//     ]

export const activityDefaults = {
    activityTypeId: 0,
    activityLabel: function () {
        return activityTypes.find((activityType) =>
            activityType.__original === this.activityTypeId)?.label ?? 'Activity Type'
    }
}

export const activityForm = [
    {
        $formkit: 'text',
        name: 'id',
        label: 'Id',
        readonly: true,
    },
    {
        $formkit: 'dropdown',
        name: 'activityTypeId',
        label: 'Activity Type',
        // help: 'Complaint Type',
        validation: 'required',
        options: activityTypes,
        value: '1',
    },
    {
        $formkit: 'datepicker',
        name: 'date',
        label: '$activityLabel($activityTypeId) + " Date"',
        placeholder: '$activityTypeId',
        // help: 'Date of enforcement',
        validation: 'required',
        value: new Date(),
    },
    {
        $formkit: 'dropdown',
        name: 'responsibilityTypeCode',
        label: 'Responsibility Type',
        // help: 'Responsibility Type',
        validation: 'required',
        options: [
            {label: 'Food Law', value: 'FL'},
            {label: 'Food Hygiene', value: 'FH'},
            {label: 'Food Standards', value: 'FS'},
        ],
        value: 'FL',

    }
]
