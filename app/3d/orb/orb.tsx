'use client';

import { useEffect } from 'react';

import createScene from '@/utils/createScene';

import * as THREE from 'three';

export default function Orb() {
  useEffect(() => {
    const { scene, camera, renderer } = createScene();
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 50;
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div></div>;
}
