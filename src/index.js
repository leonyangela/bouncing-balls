import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.js'
import Interface from './Interface'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.3,
                far: 50,
                position: [0, 2, 10],
            }}
        >
            <App />
        </Canvas>
        <Interface />
    </>
)