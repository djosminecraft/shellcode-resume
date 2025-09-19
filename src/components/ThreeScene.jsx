import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'
import { FaCube } from 'react-icons/fa'

// Floating cube component
function FloatingCube({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} />
    </Box>
  )
}

// Floating sphere component
function FloatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed
      meshRef.current.rotation.y += 0.005 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 1) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  )
}

// Floating torus component
function FloatingTorus({ position, color, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008 * speed
      meshRef.current.rotation.y += 0.008 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 2) * 0.4
    }
  })

  return (
    <Torus ref={meshRef} position={position} args={[0.6, 0.2, 16, 32]}>
      <meshStandardMaterial color={color} />
    </Torus>
  )
}

// Main 3D scene component
function Scene() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  const objects = useMemo(() => [
    { type: 'cube', position: [-3, 0, -2], color: '#3B82F6', speed: 1 },
    { type: 'sphere', position: [3, 0, -2], color: '#8B5CF6', speed: 1.2 },
    { type: 'torus', position: [0, 0, 2], color: '#10B981', speed: 0.8 },
    { type: 'cube', position: [-1, 2, 0], color: '#F59E0B', speed: 1.5 },
    { type: 'sphere', position: [1, -2, 0], color: '#EF4444', speed: 0.9 },
  ], [])

  return (
    <group ref={groupRef}>
      {objects.map((obj, index) => {
        switch (obj.type) {
          case 'cube':
            return (
              <FloatingCube
                key={index}
                position={obj.position}
                color={obj.color}
                speed={obj.speed}
              />
            )
          case 'sphere':
            return (
              <FloatingSphere
                key={index}
                position={obj.position}
                color={obj.color}
                speed={obj.speed}
              />
            )
          case 'torus':
            return (
              <FloatingTorus
                key={index}
                position={obj.position}
                color={obj.color}
                speed={obj.speed}
              />
            )
          default:
            return null
        }
      })}
    </group>
  )
}

// Main 3D Scene component
const ThreeScene = ({ className = '' }) => {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setWebglSupported(false)
    }
  }, [])

  if (!webglSupported) {
    return (
      <div className={`w-full h-full ${className} flex items-center justify-center`}>
        <div className="text-center text-white/50">
          <div className="text-4xl mb-2">
            <FaCube className="text-blue-400 mx-auto" />
          </div>
          <div className="text-sm">3D эффекты недоступны</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
        onError={(error) => {
          console.warn('WebGL error:', error)
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#8B5CF6" />
        
        {/* 3D Objects */}
        <Scene />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default ThreeScene
