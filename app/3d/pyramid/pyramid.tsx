'use client';

import createScene from '@/utils/createScene';
import { useEffect, useState } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  CylinderGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three';

export default function Pyramid() {
  const [radius, setRadius] = useState<{ bottom: number }>({ bottom: 4 });
  const [height, setHeight] = useState(5);

  useEffect(() => {
    const { scene, camera, renderer } = createScene();

    const geometry = new CylinderGeometry(0, radius.bottom, height, 4, 1);
    const material = new MeshNormalMaterial();
    const pyramid = new Mesh(geometry, material);
    scene.add(pyramid);

    camera.position.z = 10;

    const render = () => {
      requestAnimationFrame(render);
      pyramid.rotation.x += 0.0;
      pyramid.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    render();
  }, [radius]);

  return (
    <div>
      <div className="flex flex-row">
        <p>radius</p>
        <button
          onClick={() =>
            setRadius((prev) => ({ ...prev, bottom: prev.bottom + 1 }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            setRadius((prev) => ({ ...prev, bottom: prev.bottom - 1 }))
          }
        >
          -
        </button>
      </div>
    </div>
  );
}
