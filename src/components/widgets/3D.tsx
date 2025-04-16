'use client'
import { Center, ContactShadows, Environment, Float, OrbitControls, PerspectiveCamera, useGLTF, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

interface ModelViewerProps {
  modelPath?: string;
}

function Model({ modelPath }: { modelPath: string }) {
  try {
    // Add null check for modelPath
    if (!modelPath) {
      console.error('Model path is not provided');
      return null;
    }

    const { scene } = useGLTF(modelPath, true);
    return <primitive object={scene} />;
  } catch (error) {
    console.error('Failed to load model:', error);
    return null;
  }
}
export function ModelViewer({ modelPath }: ModelViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}

        />

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2.5, 2, 5]}
          intensity={1.5}
          shadow-mapSize={1024}
        />

        <Environment preset="studio" />

        <Suspense fallback={null}>
          <Bounds fit margin={1.6}>  {/* This will auto-scale your model */}
            <Center>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <Model modelPath={modelPath!} />
              </Float>
            </Center>
          </Bounds>
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />  {/* Fixed color syntax */}
        </mesh>

        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  );
}