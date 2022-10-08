import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2019-05-28'})

const patchSpawnReferences = async (areaDocumentId, spawnReferences) => {
  console.log("Sent to", areaDocumentId, spawnReferences)
  return client
    .patch(areaDocumentId)
    .set({ spawns: spawnReferences })
    .commit()
}

export default patchSpawnReferences