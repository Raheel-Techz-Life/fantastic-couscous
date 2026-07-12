'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import React, { ReactNode } from 'react'

interface ThreeSceneProps {
  children: ReactNode
  className?: string
  cameraPosition?: [number, number, number]
  fov?: number
  pointLightColor?: string
  pointLightIntensity?: number
  ambientLightIntensity?: number
  includeSpotLight?: boolean
  spotLightPosition?: [number, number, number]
  preset?: "aperture" | "canon" | "dawn" | "forest" | "futurism" | "groove" | "indoor" | "industrial" | "sunset" | "warehouse" | "city"
}

export function ThreeScene({
  children,
  className = "absolute inset-0 z-0 pointer-events-none opacity-30",
  cameraPosition = [0, 0, 8],
  fov = 50,
  pointLightColor = "#FF5400",
  pointLightIntensity = 1,
  ambientLightIntensity = 0.5,
  includeSpotLight = false,
  spotLightPosition = [-10, 10, 10],
  preset = "city"
}: ThreeSceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.5]} // Restrict DPR on high-res displays to prevent GPU lag
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
        <ambientLight intensity={ambientLightIntensity} />
        <pointLight position={[10, 10, 10]} intensity={pointLightIntensity} color={pointLightColor} />
        {includeSpotLight && (
          <spotLight position={spotLightPosition} angle={0.15} penumbra={1} intensity={1} />
        )}
        
        {children}
        
        <Environment preset={preset} />
      </Canvas>
    </div>
  )
}
