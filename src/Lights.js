import * as THREE from 'three'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'

export default function Lights() {
    const light = useRef()

    // useHelper(light, THREE.DirectionalLightHelper, 1)

    return <>
        <directionalLight
            ref={light}
            castShadow
            position={[0, 5, 7]}
            intensity={0.7}
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={20}
            shadow-camera-top={10}
            shadow-camera-right={10}
            shadow-camera-bottom={- 10}
            shadow-camera-left={- 10}
        />
        <ambientLight intensity={0.5} />
    </>
}