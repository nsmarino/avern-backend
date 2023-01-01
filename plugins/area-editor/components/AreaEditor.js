import React, { useEffect, useState } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

import SpawnEditor from './SpawnEditor';

const loader = new GLTFLoader()
const params = {
  spawnCollectionName: "spawns"
}
const AreaEditor = () => {
  const [areas, setAreas] = useState([])
  const [availableReferences, setAvailableReferences] = useState([])

  useEffect(() => {
    const fetchAreas = async () => {
      const fetchedAreas = await client.fetch(
        `*[_type in $types]{
          _id,
          title,
          "url": mesh.asset->url,
          spawns,
        }`,
        { 
          types: ["area",],
        }
      )
      const fetchedAvailableReferences = await client.fetch(
        `*[_type in $types]{
          _id,
          title,
        }`,
        { 
          types: ["interaction", "enemy", "connection"],
        }
      )
      setAvailableReferences(fetchedAvailableReferences)
      setAreas(fetchedAreas)
    }
    fetchAreas()
  },[])

  return (
    <div>
      <header style={headerStyle}>
        <h1>Area Editor</h1>
          {
            areas.map(area => 
              <SpawnEditor 
                area={area} 
                availableReferences={availableReferences}
                loader={loader} 
                params={params} 
                key={area.url} 
              />
            )
          }
      </header>
    </div>
  )
}

const headerStyle = {
  paddingLeft: '5rem'
}

export default AreaEditor