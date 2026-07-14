'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeScene } from './ThreeScene'


function ShieldObject() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t / 4
    ref.current.rotation.x = t / 8
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <TorusKnot ref={ref} args={[2, 0.4, 128, 32]}>
        <meshStandardMaterial 
          color="#FF5400" 
          roughness={0} 
          metalness={0.9} 
          emissive="#FF5400" 
          emissiveIntensity={0.2} 
        />
      </TorusKnot>
    </Float>
  )
}

export function ShieldScene() {
  return (
    <ThreeScene 
      className="absolute inset-0 z-0 pointer-events-none opacity-20" 
      cameraPosition={[0, 0, 10]}
      includeSpotLight={true}
    >
      <ShieldObject />
    </ThreeScene>

  )
}
