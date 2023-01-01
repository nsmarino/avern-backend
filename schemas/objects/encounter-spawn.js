export default {
    name: 'encounter-monster-spawn',
    type: 'object',
    title: 'monster spawn',
    fields: [
        {
            name: 'vertexName',
            type: 'string',
        },
        {
            name: "power-level",
            type: 'integer',
        },
        {
            name: "entity",
            type: 'reference',
            to: [
                {type: 'monster'},
            ]
        }
    ]
  }