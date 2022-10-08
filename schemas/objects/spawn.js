export default {
    name: 'spawn',
    type: 'object',
    title: 'area spawn point',
    fields: [
        {
            name: 'vertexName',
            type: 'string',
        },
        {
            name: "entity",
            type: 'reference',
            to: [
                {type: 'interaction'},
                {type: 'enemy'},
                {type: 'connection'}
            ]
        }
    ]
  }