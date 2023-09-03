'use client';

import createScene from '@/utils/createScene';
import { useEffect } from 'react';

import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export default function Cube() {
  useEffect(() => {
    const { scene, camera, renderer } = createScene();
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div></div>;
}
