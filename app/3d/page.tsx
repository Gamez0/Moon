'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h3>3D list</h3>
      <div>
        <div onClick={() => router.push('/3d/cube')}>cube</div>
        <div onClick={() => router.push('/3d/orb')}>orb</div>
      </div>
    </main>
  );
}
