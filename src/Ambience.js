import * as THREE from 'three'
import { useRef, useState } from 'react'
import { CuboidCollider, BallCollider, RigidBody, Attractor } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

THREE.ColorManagement.legacyMode = false

function Pointer({ vec = new THREE.Vector3() }) {
    const pointerRef = useRef()

    useFrame(({ mouse }) => {
        vec.lerp({ x: (mouse.x * 10) / 2, y: 0.5, z: -(mouse.y * 10) / 2 }, 1)
        pointerRef.current.setNextKinematicTranslation(vec)
    })

    return <>
        <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={pointerRef} >
            <BallCollider args={[1]} />
        </RigidBody>
    </>
}

function Walls() {
    return <>
        <group position={[0, 0, 0]}>
            <RigidBody
                type="fixed"
                friction={1}
                restitution={0.5}
            >
                {/* X axis (BACK FRONT) */}
                {/* <mesh
                    position={[0, 3, -6]}
                    scale={[10, 8, 2]}
                    receiveShadow
                >
                    <boxGeometry />
                    <meshStandardMaterial color="#f4eee1" />
                </mesh> */}

                <CuboidCollider
                    args={[5,4, 1]}
                    position={[0, 3, -6]}
                />

                <CuboidCollider
                    args={[5, 4, 1]}
                    position={[0, 3, 6]}
                />

                <CuboidCollider
                    args={[1, 4,5]}
                    position={[6, 3, 0]}
                />
                <CuboidCollider
                    args={[1, 4, 5]}
                    position={[-6, 3, 0]}
                />

                {/* <mesh
                    geometry={boxGeometry}
                    position={[0, 1, 5.25]}
                    scale={[10, 4, 0.5]}
                    material={floorMaterial}
                    receiveShadow
                >
                </mesh> */}

                {/* Y axis (RIGHT LEFT) */}
                {/* <mesh
                    position={[6, 3, 0]}
                    scale={[2, 8, 10]}
                    receiveShadow
                >
                    <boxGeometry />
                    <meshBasicMaterial color="#c3cdbf" />
                </mesh>
                <mesh
                    position={[-6, 3, 0]}
                    scale={[2, 8, 10]}
                    receiveShadow
                >
                    <boxGeometry />
                    <meshBasicMaterial color="#c3cdbf" />
                </mesh> */}

            </RigidBody>
        </group>
    </>
}

export function Floor() {
    const body = useRef()
    // const [smoothedCameraPosition] = useState(() => new THREE.Vector3(-50, -30, 0))
    // const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

    // useFrame((state, delta) => {
    //     const bodyPosition = body.current.translation()

    //     const cameraPosition = new THREE.Vector3()
    //     cameraPosition.copy(bodyPosition)
    //     cameraPosition.z += 10
    //     cameraPosition.y += 2

    //     const cameraTarget = new THREE.Vector3()
    //     cameraTarget.copy(bodyPosition)
    //     cameraTarget.y -= 0.5

    //     smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
    //     smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

    //     state.camera.position.copy(smoothedCameraPosition)
    //     state.camera.lookAt(smoothedCameraTarget)
    // })

    return <>
        <RigidBody
            ref={body}
            type="fixed"
            friction={0.7}
            restitution={0}
        >
            <mesh
                scale={[10, 2, 10]}
                position-y={- 2}
                receiveShadow
            >
                <boxGeometry />
                <meshStandardMaterial color="#E8C4C4" />
            </mesh>
        </RigidBody>
    </>
}

export default function Ambience() {
    return <>
        <Floor />
        <Walls />
        <Pointer />
    </>
}