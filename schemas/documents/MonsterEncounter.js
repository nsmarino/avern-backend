export default {
    title: 'Monster Encounter',
    name: 'monster-encounter',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },

        {
            name: "field-monster",
            type: 'reference',
            to: [
                {type: 'monster'},
            ]
        },

        {
            name: "encounter-area",
            type: 'reference',
            to: [
                {type: 'encounter-area'},
            ]
        },

        // use "Encounter Editor" plugin to set monster types, locations and power levels
        {
            name: "monsters",
            type: 'reference',
            to: [
                {type: 'encounter-area'},
            ]
        }

    ]
}