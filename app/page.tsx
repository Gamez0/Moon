'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

export default function Home() {
  const router = useRouter();
  const setRoute = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { route } = e.currentTarget.dataset;
    router.push(route ?? '');
  };
  return (
    <main className="flex min-h-screen ">
      <div className="flex gap-[20px]">
        <button data-route="/moon2d" onClick={setRoute}>
          Go to Moon2d
        </button>
        <button data-route="/3d" onClick={setRoute}>
          Go to 3d
        </button>
      </div>
    </main>
  );
}
