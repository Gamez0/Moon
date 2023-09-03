import React, { useEffect, useRef, useState } from 'react';

export default function Ellipse({ pos }: { pos: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, [pos]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // context.fillStyle = '';
    // context.fillRect(0, 0, windowWidth, windowHeight);

    // 시작점, 끝점, 제어점의 좌표
    const startPoint = { x: windowWidth / 4, y: 12 };
    const endPoint = { x: windowWidth / 4, y: windowHeight / 2 - 12 };
    const controlPoint = {
      x: getControlPos(pos, windowWidth),
      y: windowHeight / 4,
    };

    // 곡선 그리기
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    context.quadraticCurveTo(
      controlPoint.x,
      controlPoint.y,
      endPoint.x,
      endPoint.y
    );

    context.fillStyle = 'rgb(0,0,0,0.9)';
    context.fill();
    // context.strokeStyle = 'black';
    context.stroke();
  }, [canvasRef, canvasRef.current, pos]);

  // useEffect(() => {
  //   const backgroundCanvas = backgroundCanvasRef.current;
  //   const bgContext = backgroundCanvas?.getContext('2d');
  //   if (!backgroundCanvas || !bgContext) return;

  //   bgContext.fillStyle = 'black';
  //   bgContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  // }, [backgroundCanvasRef, windowWidth, windowHeight]);

  return (
    <>
      {/* <canvas
        className="absolute"
        ref={backgroundCanvasRef}
        width={windowWidth / 2}
        height={windowHeight / 2}
        style={{
          width: windowWidth / 2,
          height: windowHeight,
        }}
      /> */}
      <canvas
        className="absolute ?"
        ref={canvasRef}
        width={windowWidth / 2}
        height={windowHeight / 2}
        style={{
          width: windowWidth / 2,
          height: windowHeight,
        }}
      />
    </>
  );
}

function getControlPos(pos: number, windowWidth: number): number {
  return -windowWidth / 4 + (pos * windowWidth) / 32;
}
