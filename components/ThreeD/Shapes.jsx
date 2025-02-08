"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useThemeContext } from "../ThemeProvider";

export function Shapes() {
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        maxWidth: "800px",
        maxHeight: "600px",
      }}
      className="row-span-1 row-start-1 aspect-square  md:col-span-1 md:col-start-2 md:mt-0"
    >
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 45, near: 5, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Shapes;

function Geometries() {
  const { mode } = useThemeContext();
  const geometries = [
    {
      position: [0, 1.5, 0],
      rate: 0.3,
      geometry: new THREE.IcosahedronGeometry(6), // Gem
    },
    {
      position: [3, -0.5, 4],
      rate: 0.4,
      geometry: new THREE.CapsuleGeometry(1, 3.2, 4, 16), // Pill
    },
    {
      position: [-6, 2.5, -4],
      rate: 0.6,
      geometry: new THREE.DodecahedronGeometry(3), // Soccer ball
    },
    {
      position: [-2, -0.5, 5],
      rate: 0.5,
      geometry: new THREE.TorusGeometry(1.2, 0.5, 32, 64), // Donut
    },
    {
      position: [5, 4, -3],
      rate: 0.7,
      geometry: new THREE.OctahedronGeometry(3), // Diamond
    },
  ];

  const soundEffectsDark = [
    new Audio("/sounds/Mining1.ogg"),
    new Audio("/sounds/Mining2.ogg"),
    new Audio("/sounds/Mining3.ogg"),
  ];

  const soundEffectsLight = [
    new Audio("/sounds/Metal5.ogg"),
    new Audio("/sounds/Metal4.ogg"),
    new Audio("/sounds/Metal2.ogg"),
  ];

  const metal = mode == "light" ? 0 : 1;
  const materials = [
    new THREE.MeshStandardMaterial({
      color: 0x2ecc71,
      metalness: metal,
      roughness: 0,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xf1c40f,
      metalness: metal,
      roughness: 0.4,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe74c3c,
      metalness: metal,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x8e44ad,
      metalness: metal,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x1abc9c,
      metalness: metal,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: metal,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      roughness: 0.1,
      metalness: metal,
      color: 0x2c3e50,
    }),
  ];

  return geometries.map(({ position, rate, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={mode === "light" ? soundEffectsLight : soundEffectsDark}
      materials={materials}
      rate={rate}
    />
  ));
}

function Geometry({ rate, position, geometry, materials, soundEffects }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;
    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
    });

    return () => ctx.revert(); /// cleanUp!
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float
        speed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
