'use client'

import { useRef } from 'react'
<<<<<<< HEAD
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera,
  Environment,
  Box
} from '@react-three/drei'
import * as THREE from 'three'
=======
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeScene } from './ThreeScene'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)

function GrowthBars() {
  const bars = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    bars.current.children.forEach((child, i) => {
      const bar = child as THREE.Mesh
      bar.scale.y = 1 + Math.sin(t + i) * 0.5
      bar.position.y = bar.scale.y / 2 - 2
    })
  })

  return (
    <group ref={bars}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Box
          key={i}
          args={[0.4, 4, 0.4]}
          position={[i * 1.2 - 4.2, 0, 0]}
        >
          <meshStandardMaterial 
            color="#FF5400" 
            emissive="#FF5400" 
            emissiveIntensity={0.2} 
            transparent 
            opacity={0.3 + i * 0.05} 
          />
        </Box>
      ))}
    </group>
  )
}

export function GrowthScene() {
  return (
<<<<<<< HEAD
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5400" />
        
        <GrowthBars />
        <Environment preset="city" />
      </Canvas>
    </div>
=======
    <ThreeScene className="absolute inset-0 z-0 pointer-events-none opacity-30" cameraPosition={[0, 0, 8]}>
      <GrowthBars />
    </ThreeScene>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  )
}
