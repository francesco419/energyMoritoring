import React, { useRef, useState } from "react";
import { MapSvg } from "@/config/mapSvg";

interface MapImgProps {
  active?: string;
  background?: string;
  color?: string;
}
const MapImg = ({}: MapImgProps) => {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [active, setActive] = useState("");

  return (
    <svg
      width="2368"
      height="1640"
      viewBox="0 0 2369 1641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_44_2679)">
        {MapSvg.mapDrawing.map((item, idx) => (
          <path
            key={idx}
            ref={(el) => {
              // 반환값 없이 ref 배열에 저장
              pathRefs.current[idx] = el;
            }}
            id={item.name}
            d={item.d}
            fill={active === item.name ? "#3DD598" : item.fill}
            stroke={active === item.name ? "none" : item.stroke}
            strokeWidth={active === item.name ? "none" : item.strokeWidth}
            strokeMiterlimit={
              active === item.name ? "none" : item.strokeMiterlimit
            }
            onClick={() => setActive(item.name)}
          />
        ))}
        {MapSvg.areaName.map((text, idx) => (
          <path
            key={idx}
            ref={(el) => {
              // 반환값 없이 ref 배열에 저장
              pathRefs.current[idx] = el;
            }}
            id={text.name}
            d={text.d}
            fill={active === text.name ? "#000" : text.fill}
            onClick={() => setActive(text.name)}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_44_2679">
          <rect
            width="2367.47"
            height="1640.11"
            fill="white"
            transform="translate(0.974121 0.891602)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MapImg;
