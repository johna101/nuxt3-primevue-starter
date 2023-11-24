

export const responsibilityDefaults = {
    responsibilityTypeCode: 'FL'
}

export const responsibilityForm = [
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
    },
]
