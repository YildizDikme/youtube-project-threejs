"use client";

import { useRef, useEffect } from "react";
import { Group, LoopRepeat } from "three";
import { useThree, useFrame } from "@react-three/fiber"; 
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

type Props = {
  path: string;
};

const modelPositions = [
  {
    id: "banner-area",
    position: [0, -2.5, 0],
    rotation: [0, 0.4, 0],
  },
  {
    id: "profile-area",
    position: [1.5, -2.5, 0],
    rotation: [-0.5, -0.5, 0],
  },
  {
    id: "number-rate-area",
    position: [-3.5, -2.5, 0],
    rotation: [0, -0.5, 0],
  },
];

export default function Model({ path }: Props) {
  const group = useRef<Group>(null);
  const { camera } = useThree(); 
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     camera.position.z = 6; 
//   }, [camera]);

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.005;
//     }
//   });

  useEffect(() => {
    const firstAction = actions && Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset().setLoop(LoopRepeat, Infinity).play();
    }
  }, [actions]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentId: string | undefined;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentId = section.id;
        }
      });

      const config = modelPositions.find((entry) => entry.id === currentId);
      if (config && group.current) {
        gsap.to(group.current.position, {
          x: config.position[0],
          y: config.position[1],
          z: config.position[2],
          duration: 2,
          ease: "power2.out",
        });

        gsap.to(group.current.rotation, {
          x: config.rotation[0],
          y: config.rotation[1],
          z: config.rotation[2],
          duration: 2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <group
      ref={group}
      position={[0, -2.5, 0]}
      rotation={[0, 0.4, 0]}
      scale={[1.2, 1.2, 1.2]}
    >
      <primitive object={scene} />
    </group>
  );
}
