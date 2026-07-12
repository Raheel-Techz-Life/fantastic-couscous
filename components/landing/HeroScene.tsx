'use client'

import { useRef } from 'react'
<<<<<<< HEAD
import { Canvas, useFrame } from '@react-three/fiber'
=======
import { useFrame } from '@react-three/fiber'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
import { 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  Sphere, 
  Torus, 
<<<<<<< HEAD
  PerspectiveCamera,
  Environment,
  ContactShadows
} from '@react-three/drei'
import * as THREE from 'three'
=======
  ContactShadows
} from '@react-three/drei'
import * as THREE from 'three'
import { ThreeScene } from './ThreeScene'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)

function BackgroundElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Torus args={[2, 0.05, 16, 100]} position={[-4, 2, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#FF5400" emissive="#FF5400" emissiveIntensity={0.5} transparent opacity={0.3} />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[4, -2, -3]}>
          <MeshDistortMaterial
            color="#FF5400"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#FF5400"
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
          />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Torus args={[3, 0.02, 16, 100]} position={[0, 0, -5]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
        </Torus>
      </Float>
    </>
  )
}

function FloatingPhones() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.z = Math.sin(t / 4) / 10
    groupRef.current.rotation.y = Math.sin(t / 4) / 10
    groupRef.current.position.y = Math.sin(t / 2) / 10
  })

  return (
    <group ref={groupRef}>
      {/* Abstract Phone / Tablet Shape 1 */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2, 1, 0]} rotation={[0, 0.2, 0.1]}>
          <boxGeometry args={[0.8, 1.4, 0.05]} />
          <MeshWobbleMaterial color="#FF5400" factor={0.1} speed={1} roughness={0} metalness={0.8} />
        </mesh>
      </Float>

      {/* Abstract Phone / Tablet Shape 2 */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[2, 0.5, -1]} rotation={[0, -0.3, -0.2]}>
          <boxGeometry args={[0.7, 1.2, 0.05]} />
          <meshStandardMaterial color="#ffffff" roughness={0} metalness={0.9} transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

export function HeroScene() {
  return (
<<<<<<< HEAD
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5400" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <BackgroundElements />
        <FloatingPhones />
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -4, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2} 
          far={4.5} 
        />
      </Canvas>
    </div>
=======
    <ThreeScene 
      className="absolute inset-0 z-0 pointer-events-none opacity-60" 
      cameraPosition={[0, 0, 8]}
      includeSpotLight={true}
    >
      <BackgroundElements />
      <FloatingPhones />
      <ContactShadows 
        position={[0, -4, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2} 
        far={4.5} 
      />
    </ThreeScene>
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  )
}
