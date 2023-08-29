import Image from 'next/image';
import { useEffect, useState } from 'react';
import Moon from './component/Moon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Moon />
    </main>
  );
}
