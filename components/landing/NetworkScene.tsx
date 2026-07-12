'use client'

import { useRef, useMemo } from 'react'
<<<<<<< HEAD
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera,
  Environment,
  Points,
  PointMaterial,
  Line
} from '@react-three/drei'
import * as THREE from 'three'
=======
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeScene } from './ThreeScene'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)

function ConnectionNodes() {
  const count = 40
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10
      p[i * 3 + 1] = (Math.random() - 0.5) * 10
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [count])

  const ref = useRef<THREE.Points>(null!)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t / 10
    ref.current.rotation.z = t / 20
  })

  return (
    <group>
      <Points ref={ref} positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#FF5400"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Add some connecting lines between random points */}
      {Array.from({ length: 15 }).map((_, i) => {
        const start = [points[i * 3], points[i * 3 + 1], points[i * 3 + 2]]
        const end = [points[(i + 1) * 3], points[(i + 1) * 3 + 1], points[(i + 1) * 3 + 2]]
        return (
          <Line
            key={i}
            points={[new THREE.Vector3(...start), new THREE.Vector3(...end)]}
            color="#FF5400"
            lineWidth={0.5}
            transparent
            opacity={0.2}
          />
        )
      })}
    </group>
  )
}

export function NetworkScene() {
  return (
<<<<<<< HEAD
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5400" />
        
        <ConnectionNodes />
        <Environment preset="city" />
      </Canvas>
    </div>
=======
    <ThreeScene className="absolute inset-0 z-0 pointer-events-none opacity-40" cameraPosition={[0, 0, 10]}>
      <ConnectionNodes />
    </ThreeScene>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  )
}
