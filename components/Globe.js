"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { COUNTRIES } from "@/lib/data";

const COORDS = [[51, 10], [54, -2], [4, 102], [39, -98], [56, -106], [24, 54]];
const R = 2;
const toXYZ = (lat, lon, r = R) => {
  const la = (lat * Math.PI) / 180, lo = (lon * Math.PI) / 180;
  return [r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo)];
};
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Dots() {
  const geo = useMemo(() => {
    const n = 2200, arr = new Float32Array(n * 3), ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), t = ga * i;
      arr[i * 3] = Math.cos(t) * r * R; arr[i * 3 + 1] = y * R; arr[i * 3 + 2] = Math.sin(t) * r * R;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);
  return (
    <points geometry={geo}>
      <pointsMaterial size={0.028} color="#c9a3ad" transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function Marker({ pos, active }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const k = active ? 1.4 + Math.sin(clock.elapsedTime * 4) * 0.25 : 0.8;
    ref.current.scale.setScalar(k);
  });
  return (
    <group position={pos}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={active ? "#ff5b7a" : "#c9c3c6"} />
      </mesh>
      {active && (
        <mesh>
          <sphereGeometry args={[0.17, 16, 16]} />
          <meshBasicMaterial color="#ff5b7a" transparent opacity={0.25} />
        </mesh>
      )}
    </group>
  );
}

function World({ active }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    const [lat, lon] = COORDS[active];
    const ty = -(lon * Math.PI) / 180;
    const tx = (lat * Math.PI) / 180 * 0.6;
    let dy = ty - (ref.current.rotation.y % (Math.PI * 2));
    if (dy > Math.PI) dy -= Math.PI * 2;
    if (dy < -Math.PI) dy += Math.PI * 2;
    const k = reduced() ? 1 : Math.min(1, dt * 3);
    ref.current.rotation.y += dy * k;
    ref.current.rotation.x += (tx - ref.current.rotation.x) * k;
  });
  return (
    <group ref={ref}>
      <mesh><sphereGeometry args={[R * 0.985, 48, 48]} /><meshBasicMaterial color="#1a0a10" /></mesh>
      <Dots />
      {COORDS.map(([la, lo], i) => <Marker key={i} pos={toXYZ(la, lo, R * 1.01)} active={i === active} />)}
    </group>
  );
}

export default function Globe({ active }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.75]} gl={{ alpha: true, antialias: true }} aria-hidden="true">
      <World active={active} />
    </Canvas>
  );
}
