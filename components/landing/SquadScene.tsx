'use client'

import { useRef, useMemo } from 'react'
<<<<<<< HEAD
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera,
  Environment,
  Dodecahedron,
  Octahedron,
  Icosahedron
} from '@react-three/drei'
import * as THREE from 'three'
=======
import { useFrame } from '@react-three/fiber'
import { Float, Dodecahedron, Octahedron, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeScene } from './ThreeScene'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)

function Shrapnel({ count = 20 }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      const child = meshRef.current.children[i] as THREE.Mesh
      child.position.set(
        (xFactor + Math.cos(t / 10) * factor) / 10,
        (yFactor + Math.sin(t / 10) * factor) / 10,
        (zFactor + Math.cos(t / 10) * factor) / 10
      )
      child.rotation.set(s * 5, s * 5, s * 5)
    })
  })

  return (
    <group ref={meshRef}>
      {Array.from({ length: count }).map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
          {i % 3 === 0 ? (
            <Octahedron args={[0.2, 0]}>
              <meshStandardMaterial color="#FF5400" transparent opacity={0.4} metalness={0.8} roughness={0.2} />
            </Octahedron>
          ) : i % 3 === 1 ? (
            <Dodecahedron args={[0.2, 0]}>
              <meshStandardMaterial color="#ffffff" transparent opacity={0.2} metalness={0.9} roughness={0.1} />
            </Dodecahedron>
          ) : (
            <Icosahedron args={[0.15, 0]}>
              <meshStandardMaterial color="#FF5400" transparent opacity={0.6} metalness={0.5} roughness={0.5} />
            </Icosahedron>
          )}
        </Float>
      ))}
    </group>
  )
}

export function SquadScene() {
  return (
<<<<<<< HEAD
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5400" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <Shrapnel count={30} />
        <Environment preset="city" />
      </Canvas>
    </div>
=======
    <ThreeScene 
      className="absolute inset-0 z-0 pointer-events-none" 
      cameraPosition={[0, 0, 15]}
      includeSpotLight={true}
    >
      <Shrapnel count={30} />
    </ThreeScene>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  )
}
