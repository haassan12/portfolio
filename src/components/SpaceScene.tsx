import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Geometry = ({ position, color, type }: { position: [number, number, number]; color: string; type: "sphere" | "box" | "octa" | "torus" }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const geo =
    type === "sphere" ? <icosahedronGeometry args={[1, 0]} /> :
    type === "box" ? <boxGeometry args={[1.2, 1.2, 1.2]} /> :
    type === "octa" ? <octahedronGeometry args={[1.1, 0]} /> :
    <torusGeometry args={[0.9, 0.25, 16, 50]} />;

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        {geo}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

const SpaceScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />
        <Stars radius={120} depth={60} count={4000} factor={4} saturation={0} fade speed={0.5} />
        <Geometry position={[-5, 2, -2]} color="#22d3ee" type="octa" />
        <Geometry position={[5, -1.5, -3]} color="#a855f7" type="torus" />
        <Geometry position={[4, 3, -5]} color="#22d3ee" type="sphere" />
        <Geometry position={[-4, -2.5, -4]} color="#a855f7" type="box" />
        <Geometry position={[0, 3.5, -6]} color="#22d3ee" type="sphere" />
      </Canvas>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
    </div>
  );
};

export default SpaceScene;
