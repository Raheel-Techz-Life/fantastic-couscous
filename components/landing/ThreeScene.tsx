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
  // The HDR environment map is a real network fetch + GPU decode, only
  // worth paying for on scenes that are clearly visible. Off by default.
  useEnvironment?: boolean
}

export function ThreeScene({
  children,
  className = "absolute inset-0 z-0 pointer-events-none opacity-30",
  cameraPosition = [0, 0, 8],
  fov = 50,
  pointLightColor = "#FF5400",
  pointLightIntensity = 1.4,
  ambientLightIntensity = 0.65,
  includeSpotLight = false,
  spotLightPosition = [-10, 10, 10],
  preset = "city",
  useEnvironment = false
}: ThreeSceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.5]} // Restrict DPR on high-res displays to prevent GPU lag
        gl={{
          // Decorative, low-opacity background — antialiasing cost isn't visible, so skip it
          antialias: false,
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

        {useEnvironment && <Environment preset={preset} />}
      </Canvas>
    </div>
  )
}
