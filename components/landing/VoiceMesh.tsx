'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const wireframeRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.15
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = time * 0.12
      wireframeRef.current.rotation.y = time * 0.17
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <group>
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.2}>
          <MeshDistortMaterial
            color="#FF5400"
            speed={4}
            distort={0.5}
            radius={1}
            metalness={0.8}
            roughness={0.1}
            emissive="#FF5400"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </Sphere>
        {/* Wireframe overlay for technical feel */}
        <Sphere ref={wireframeRef} args={[1.05, 40, 40]} scale={2.2}>
          <meshStandardMaterial
            wireframe
            color="#FF5400"
            transparent
            opacity={0.2}
            emissive="#FF5400"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </group>
    </Float>
  )
}

function ParticleField() {
  const count = 2000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
      pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF5400"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export function VoiceMesh() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 bg-background" />
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FF5400" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0D2344" />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} color="#FF5400" />
        <AnimatedSphere />
        <ParticleField />
      </Canvas>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </div>
  )
}
