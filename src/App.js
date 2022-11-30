import { Perf } from 'r3f-perf'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import Ambience from './Ambience.js'
import Lights from './Lights.js'
import Sphere from './Sphere.js'

export default function App() {

    return <>
        {/* <Perf position="bottom-right" /> */}

        {/* <OrbitControls makedefault /> */}
        <PresentationControls
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
        <Lights />

        <Physics>
            {/* <Debug /> */}
            <Ambience />
            <Sphere />
        </Physics>
        </PresentationControls>
    </>
}
