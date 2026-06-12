import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

function FloatingSphere() {
  return (
    <Float floatIntensity={0.8} rotationIntensity={0.6} floatRange={[0.1, 0.6]}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full max-w-2xl bg-transparent rounded-xl overflow-hidden">
      <div className="w-full h-[320px] sm:h-[380px] glass-card rounded-xl overflow-hidden">
        <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <FloatingSphere />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
