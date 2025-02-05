import styled from "styled-components";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { ReactNode, useState, useEffect, JSX } from "react";
import "react-circular-progressbar/dist/styles.css";
import { gsap } from "gsap";

interface BaseCircularProgressProps {
  size: string; // 컴포넌트 크기
  value: number; // 진행 상태 값 (0 ~ 100)
  pathColor?: string; // 진행 경로 색상
  trailColor?: string; // 전체 경로 색상
  textColor?: string; // 텍스트 색상
  fontSize?: string; // 텍스트 크기
  strokeWidthPath?: number; // path 굵기
  strokeWidthTrail?: number; // trail  굵기
  strokeLinecap: "butt" | "round";
  background?: string;
}

interface CircularProgressWithChildrenProps extends BaseCircularProgressProps {
  WithChildren: true; // 자식 요소 포함 여부
  children: ReactNode | JSX.Element; // 자식 요소 필수
  // textColor: never;
  // fontSize: never;
  fontSize: string;
  textColor: string;
}

interface CircularProgressWithoutChildrenProps
  extends BaseCircularProgressProps {
  WithChildren?: false; // 자식 요소 포함 여부 (기본값: false)
  children?: never; // 자식 요소 허용되지 않음
  fontSize: string;
  textColor: string;
}

// 조건부 타입으로 두 타입을 합침
type CircularProgressChartProps =
  | CircularProgressWithChildrenProps
  | CircularProgressWithoutChildrenProps;

export const CircularProgressChart = ({
  size,
  value,
  pathColor,
  trailColor,
  textColor,
  strokeLinecap,
  strokeWidthPath,
  strokeWidthTrail,
  WithChildren,
  children,
  fontSize,
  background,
}: CircularProgressChartProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 목표값이 progress와 다르면 애니메이션을 실행합니다.
    if (progress !== value) {
      gsap.to(
        { progress },
        {
          progress: value, // 목표값은 props로 받은 value
          duration: 4, // 2초 동안 애니메이션
          ease: "power4.inOut", // 애니메이션 easing
          onUpdate: () => {
            // onUpdate에서 progress 값을 1씩 증가시키면서 setProgress
            setProgress(Math.round(progress + 1));
          },
        }
      );
    }
  }, [value, progress]); // value와 progress가 변경될 때마다 애니메이션 실행

  return (
    <ProgressbarContainer $size={size}>
      {WithChildren ? (
        // WithChildren이 true인 경우 CircularProgressbarWithChildren 사용
        <CircularProgressbarWithChildren
          value={progress}
          // text={`${progress}%`}
          strokeWidth={strokeWidthPath ?? 10}
          background={background ? true : false}
          styles={{
            // SVG 루트 요소 스타일
            root: {},
            // 진행 경로 스타일
            path: {
              strokeLinecap: strokeLinecap, // 끝 모양 ('butt' 또는 'round')
              stroke: `${pathColor}, ${progress / 100})`, // 애니메이션 효과와 색상 변경
              transition: "  transition: stroke-dashoffset 0.5s ease 0s;", // 애니메이션 설정
              transform: "rotate(0turn)", // 경로 회전
              transformOrigin: "center center", // 회전 기준점
              // strokeWidth: strokeWidthPath ?? 10,
            },
            // 전체 경로 스타일
            trail: {
              stroke: trailColor, // 경로 배경 색상
              strokeLinecap: strokeLinecap, // 끝 모양
              transform: "rotate(0turn)", // 경로 회전
              transformOrigin: "center center", // 회전 기준점
              strokeWidth: strokeWidthTrail ?? 10,
            },
            background: {
              fill: background,
            },
          }}
        >
          {/* 자식 요소를 이곳에 추가 가능 */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "1",
              }}
            >
              {children}
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50% ,-50%)",
                zIndex: "2",
                fontSize: `${Number(fontSize.replace("px", "")) * 4}px`,
                color: textColor,
              }}
            >
              {progress}%
            </div>
          </div>
        </CircularProgressbarWithChildren>
      ) : (
        // WithChildren이 false인 경우 CircularProgressbar 사용
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={strokeWidthPath ?? 10}
          background={background ? true : false}
          backgroundPadding={0.5}
          styles={{
            root: {},
            path: {
              strokeLinecap: strokeLinecap, // 끝 모양 ('butt' 또는 'round')
              stroke: pathColor, // 애니메이션 효과와 색상 변경
              // strokeWidth: strokeWidthPath ?? 10,
              transition: "  transition: stroke-dashoffset 0.5s ease 0s;", // 애니메이션 설정
              transform: "rotate(0turn)", // 경로 회전
              transformOrigin: "center center", // 회전 기준점
            },
            trail: {
              stroke: trailColor,
              strokeWidth: strokeWidthTrail ?? 10,
              strokeLinecap: strokeLinecap,
              transform: "rotate(0turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: textColor,
              fontSize: fontSize,
            },
            background: {
              fill: background,
            },
          }}
        />
      )}
    </ProgressbarContainer>
  );
};

interface ContainerProps {
  $size: string; // 컨테이너 크기
}

const ProgressbarContainer = styled.div<ContainerProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
`;
