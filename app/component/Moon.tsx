'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Ellipse from './Ellipse';

export default function Moon() {
  const [pos, setPos] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateWindowHeight();

    window.addEventListener('resize', updateWindowHeight);
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  return (
    <div className="flex flex-row border">
      <div className="left-0 absolute">
        <button className="w-[50px] text-lg" onClick={() => setPos(pos + 5)}>
          +
        </button>
        <button className="w-[50px] text-lg" onClick={() => setPos(pos - 5)}>
          -
        </button>
      </div>
      <Ellipse pos={pos} />
      {/* <Shadow width={windowHeight} pos={pos} /> */}
      <Image
        src="/full-moon.webp"
        alt="Vercel Logo"
        width={windowHeight}
        height={windowHeight}
        priority
      />
    </div>
  );
}

function Shadow({ width, pos }: { width: number; pos: number }) {
  return (
    <div
      className={`absolute border self-center `}
      style={{
        // left: 12,
        width: width / 2,
        height: width / 2,
        borderRadius: width / 2,
        // backgroundColor: 'rgb(0,0,0,1)',
      }}
    ></div>
  );
}
