import { useMemo, useRef } from 'react';
import { InstancedRigidBodies, RigidBody } from "@react-three/rapier"

export default function Sphere() {
    const balls = useRef()
    let ballsCount = 300

    const ballsTransforms = useMemo(() => {
        const positions = []
        const rotations = []
        const scales = []

        for (let i = 0; i < ballsCount; i++) {
            positions.push([(Math.random() - 0.5) * 3.5, 6 + i * 0.2, (Math.random() - 0.5) * 3.5])
            rotations.push([0, 0, 0])

            const scale = 0.2 + Math.random() * 0.3
            scales.push([scale, scale, scale])
        }

        return { positions, rotations, scales }
    }, [])

    return <>
        <InstancedRigidBodies
            colliders="ball"
            positions={ballsTransforms.positions}
            rotations={ballsTransforms.rotations}
            scales={ballsTransforms.scales}
        >
            <instancedMesh ref={balls} castShadow args={[null, null, ballsCount]}>
                <sphereGeometry />
                <meshStandardMaterial
                    color="#CE7777"
                    roughness={0.5}
                    metalness={0}
                />
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}