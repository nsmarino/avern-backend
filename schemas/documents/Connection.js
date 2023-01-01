export default {
    title: 'Connection',
    name: 'connection',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
          title: "Destination",
          name:"destination",
          type: "reference",
          to: [{type: "area"}]
        }
    ]
}