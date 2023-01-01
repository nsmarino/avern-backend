import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import PlayerSettings from './documents/singletons/PlayerSettings'
import Interaction from './documents/Interaction'
import Area from './documents/Area'
import Connection from './documents/Connection'
import Enemy from './documents/Enemy'
import Item from './documents/Item'

import blockContent from "./objects/blockContent"
import spawn from "./objects/spawn"
import contentNode from './objects/contentNode'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
      PlayerSettings, // SINGLETON

      Area,
      Connection,
      Interaction,
      Enemy,
      Item,

    // Objects
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      blockContent,
      spawn,
      contentNode,
  ]),
})