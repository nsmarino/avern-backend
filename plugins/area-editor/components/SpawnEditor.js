import React, { useEffect, useState } from 'react'
import { Select } from '@sanity/ui'

import patchSpawnReferences from '../patchSpawnReferences'

// TODO: Refactor so every variable isnt a variant of the word "spawn"
const SpawnEditor = ({ area, loader, params, availableReferences }) => {
  const [spawns, setSpawns] = useState([])
  const [spawnReferences, setSpawnReferences] = useState(area.spawns || [])

  const updateSpawnReferences = (e, vertexName) => {
    const newSpawnRef = {
      _type: "spawn",
      vertexName,
      entity: {
        _type: "reference",
        _ref: e.target.value
      }
    }

    if (!e.target.value) { 
      // Remove content from spawn point
      setSpawnReferences([spawnReferences.filter(s => s.vertexName !== vertexName)])
    } if (!spawnReferences || spawnReferences.length === 0) {
      // Add to empty array
      setSpawnReferences([newSpawnRef])
    } else if (spawnReferences.find(s => s.vertexName === newSpawnRef.vertexName)) {
      // Replace content on spawn point
      setSpawnReferences(spawnReferences.map(s =>  s.vertexName === newSpawnRef.vertexName ? newSpawnRef : s))
    } else {
      // Add content to spawn point
      setSpawnReferences([...spawnReferences, newSpawnRef])
    }
  }

  useEffect(() => {
    const spawnsFromScene = []
    loader.load(area.url, res => {
      res.scene.traverse(object3d => {
        const isSpawnLocation = object3d.userData.gltfExtensions.EXT_collections.collections && object3d.userData.gltfExtensions.EXT_collections.collections[0] === params.spawnCollectionName
        if (isSpawnLocation) {
          spawnsFromScene.push(object3d)
        }
      })
      setSpawns(spawnsFromScene)
    })
  },[])

  useEffect(() => {
    // I hate useEffect so much
    patchSpawnReferences(area._id, spawnReferences)
  }, [ spawnReferences ])

  return (
    <div>
        <h2>{area.title}</h2>
        {spawns.map(spawn => {
          const vertexOnDocument = area.spawns.find(s =>s.vertexName===spawn.name)
          return <SpawnReferenceSelect 
            spawn={spawn} 
            key={spawn.uuid}
            options={availableReferences}
            selectedEntityId={vertexOnDocument && vertexOnDocument.entity._ref}
            handleChange={updateSpawnReferences}
            />
          }
          )}
    </div>
  )
}

const SpawnReferenceSelect = ({spawn, options, selectedEntityId, handleChange}) => {

  return (
    <div style={{maxWidth: "600px", marginBottom: "2rem"}}>
      <h3>Spawn Point: {spawn.name}</h3>
          <Select
            fontSize={[2, 2, 3, 4]}
            padding={[3, 3, 4]}
            space={[3, 3, 4]}
            onChange={e=>handleChange(e, spawn.name)}
          >
            <option value=""></option>
            {
              options.map(option => {
                const isSelected = selectedEntityId===option._id
                if (isSelected) {
                  return <option selected value={option._id} key={option._id}>{option.title}</option>
                } else {
                  return <option value={option._id} key={option._id}>{option.title}</option>
                }
              })
            }

            {/* <optgroup label="Interactions">
              <option></option>
            </optgroup>

            <optgroup label="Enemies">
              <option></option>
            </optgroup>

            <optgroup label="Connections">
              <option></option>
            </optgroup> */}
          </Select>
          
    </div>
  )
}

export default SpawnEditor