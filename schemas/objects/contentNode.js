export default {
    name: 'contentNode',
    type: 'object',
    title: 'Content Node',
    fields: [
        {
            name: 'text',
            type: 'string',
        },
        {
            name: "item",
            type: 'reference',
            to: [
                {type: 'item'},
            ]
        }
    ]
  }