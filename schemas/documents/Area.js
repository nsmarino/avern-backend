export default {
    title: 'Area',
    name: 'area',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
          name: 'info',
          title: 'Information',
          type: 'blockContent',
          description: 'Information about the area.',
        },
        {
            title: 'Mesh',
            name: 'mesh',
            type: 'file',
            fields: [
              {
                name: 'meshName',
                type: 'string',
                title: 'Mesh Name'
              },
            ]
        },
        {
          name: "spawns",
          type: "array",
          of: [
            { type: "spawn" }
          ],
          readOnly: true,
        },
    ]
}