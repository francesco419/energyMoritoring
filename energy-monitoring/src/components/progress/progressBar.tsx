import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  target: number; // 목표 값 (최대 100)
  duration?: number; // 애니메이션 지속 시간 (기본 1초)
}

export default function ProgressBar({
  target,
  duration = 1000,
}: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0); // progress 초기값을 0으로 설정
  const progressRef = useRef<number>(0); // progress 값을 useRef로 안전하게 관리

  useEffect(() => {
    const startValue = progressRef.current; // progressRef로 초기 값 가져옴
    const startTime = performance.now(); // 애니메이션 시작 시간 기록

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      // 애니메이션 진행 시간에 따라 progress 값 계산
      const progressValue =
        startValue + Math.min(elapsed / duration, 1) * (target - startValue);

      // progress 값이 NaN이 아니면 상태 업데이트
      if (!isNaN(progressValue)) {
        setProgress(progressValue); // progress 상태 업데이트
        progressRef.current = progressValue; // progressRef에도 값 저장
      }

      // 목표 값에 도달할 때까지 계속 애니메이션 진행
      if (Math.abs(progressValue - target) > 0.5) {
        requestAnimationFrame(updateProgress); // 애니메이션 계속 진행
      }
    };

    requestAnimationFrame(updateProgress); // 애니메이션 시작
  }, [target, duration]);

  console.log(progress);

  return <progress value={progress} max={100} />;
}
