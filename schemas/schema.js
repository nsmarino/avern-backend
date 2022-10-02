import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import PlayerSettings from './documents/singletons/PlayerSettings'
import Interaction from './documents/Interaction'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
      PlayerSettings, // SINGLETON

      Interaction,

    // Objects
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      //     basicInfo, // Example
  ]),
})

// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// // Documents
// import galleryProject from './documents/gallery-project'
// import singleImage from './documents/singleImage'
// import siteSettings from './documents/singletons/siteSettings'
// import about from './documents/singletons/about'
// import thumbnailVideo from './documents/thumbnailVideo'
// import thumbnailImage from './documents/thumbnailImage'

// // Objects
// import basicInfo from './objects/basicInfo'
// import blockContent from './objects/blockContent'
// import excerpt from './objects/excerptPortableText'
// import video from './objects/video'
// import heroColors from './objects/hero-colors'
// import projectImage from './objects/projectImage'
// import socialMedia from './objects/socialMedia'
// import primary from './objects/primary'
// import gridInfo from './objects/gridInfo'

// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([
//     // 1. DOCUMENTS:
//     galleryProject,
//     singleImage,
//     thumbnailImage,
//     thumbnailVideo,
//     siteSettings, // Singleton
//     about, // Singleton

//     // 2. OBJECTS:
//     // When added to this list, object types can be used as
//     // { type: 'typename' } in other document schemas
//     basicInfo,
//     blockContent,
//     excerpt,
//     gridInfo,
//     heroColors,
//     primary,
//     projectImage,
//     socialMedia,
//     video,
//   ]),
// })
