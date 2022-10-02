export default {
    title: 'Player Settings',
    name: 'player',
    type: 'document',
    __experimental_actions: [/*'create', */ 'update', /*'delete',*/ 'publish'], 

    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
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
              }
            ]
          }
    ]
}