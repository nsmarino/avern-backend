export default {
    title: 'Enemy',
    name: 'enemy',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Field Enemy Mesh',
            name: 'mesh',
            type: 'file',
            fields: [
              {
                name: 'meshName',
                type: 'string',
                title: 'Mesh Name'
              }
            ]
        }
    ]
}