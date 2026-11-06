import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

function MouseSphere() {
  const group = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;
    const g = group.current;
    g.rotation.y += (x * 0.6 - g.rotation.y) * 0.05;
    g.rotation.x += (-y * 0.6 - g.rotation.x) * 0.05;
    g.position.x += (x * 0.5 - g.position.x) * 0.05;
    g.position.y += (y * 0.3 - g.position.y) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            distort={0.45}
            speed={2}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-20 pt-20 overflow-hidden"
    >
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: sphereY }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I build <span className="text-zinc-500">modern websites</span>
          <br /> with React & Tailwind.
        </h1>
        <p className="text-zinc-400 mt-6 text-lg">Web Developer from Pakistan.</p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full">
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            My Projects
          </a>
        </div>
      </motion.div>

      <motion.div style={{ y: sphereY }} className="absolute inset-0 md:left-1/2">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          eventSource={ref}
          eventPrefix="client"
          style={{ touchAction: "pan-y" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={2} />
          <MouseSphere />
        </Canvas>
      </motion.div>
    </section>
  );
}

export default Hero;