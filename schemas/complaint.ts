export const complaintTypes = [
    {
        value: 0,
        label: "Value not recognised"
    },
    {
        value: 1,
        label: "Food"
    },
    {
        value: 2,
        label: "Hygiene of premises"
    },
    {
        value: 3,
        label: "Standards of premises"
    },
    {
        value: 4,
        label: "Food Complaint"
    }
]

export const complaintDefaults = {
    complaintsTypeId: 1,
}

export const complaintForm = [
    {
        $formkit: 'dropdown',
        name: 'complaintsTypeId',
        label: 'Complaint Type',
        // help: 'Complaint Type',
        validation: 'required',
        value: 1,
        options: complaintTypes,
    },
]
