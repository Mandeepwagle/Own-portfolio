import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function Particles() {
  const mesh = useRef();
  const count = 150;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (seededRandom(i * 3 + 1) - 0.5) * 25;
      pos[i * 3 + 1] = (seededRandom(i * 3 + 2) - 0.5) * 25;
      pos[i * 3 + 2] = (seededRandom(i * 3 + 3) - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.07} transparent opacity={0.5} />
    </points>
  );
}

function Ring({ radius, color, speed, tiltX }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * speed;
    ref.current.rotation.x = tiltX;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 16, 120]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}

function FloatingCube({ position, color, speed }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingOctahedron({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.6;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        wireframe
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0" style={{ opacity: 0.45 }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#00f5ff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#bf00ff" intensity={0.6} />

        <Particles />

        <Ring radius={2.5} color="#00f5ff" speed={0.25}  tiltX={0.4} />
        <Ring radius={4.0} color="#bf00ff" speed={-0.18} tiltX={1.1} />
        <Ring radius={5.5} color="#ff006e" speed={0.12}  tiltX={0.7} />

        <FloatingCube position={[-4,  2, -2]} color="#00f5ff" speed={0.5} />
        <FloatingCube position={[ 4, -2, -1]} color="#bf00ff" speed={0.4} />
        <FloatingCube position={[ 3,  3, -3]} color="#ff006e" speed={0.6} />

        <FloatingOctahedron position={[-3, -3, -2]} color="#39ff14" />
        <FloatingOctahedron position={[ 5,  1, -4]} color="#00f5ff" />
      </Canvas>
    </div>
  );
}
