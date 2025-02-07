import React, { useEffect, useRef, useState } from "react";
import { MapSvg } from "@/config/mapSvg";
import { FlexArea } from "@/style/commonStyles";
import Image from "next/image";
import DashBoardText from "./common/pTag";
import styled from "styled-components";
import { AreaElectData } from "@/config/dashBoardData";
import { random } from "lodash";

const AreaElectircTotal = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $bckColor: number;
}>`
  position: absolute;
  top: ${(props) => (props.$top ? props.$top : "unset")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "unset")};
  left: ${(props) => (props.$left ? props.$left : "unset")};
  right: ${(props) => (props.$right ? props.$right : "unset")};
  width: 376px;
  //height: 223px;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.$bckColor === 0
      ? "var(--energy-usc-area-color-1)"
      : props.$bckColor === 1
      ? "var(--energy-usc-tv-red)"
      : "var(--energy-usc-tv-yellow)"};
  border-radius: 20px;
  overflow: hidden;
  z-index: 9;
  span {
    display: flex;
    justify-content: center;
    font-size: var(--energy-font-size-dashBoard-xxs);
    padding: 20px 0;
    width: 187.57px;
    border-color: var(--energy-dashBoard-tv-dark-600) !important;
    &:first-child {
      background-color: var(--energy-dashBoard-tv-light-grey);
      //border-bottom: 1px solid #000;
    }
    &:last-child {
      background-color: var(--energy-dashBoard-color-white);
    }
  }
`;

interface MapImgProps {
  active?: string;
  background?: string;
  color?: string;
  refresh?: number;
  sendData: (data: AreaElectData[]) => void;
}
const MapImg = (props: MapImgProps) => {
  const { refresh, sendData } = props;
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [active, setActive] = useState("");
  //const [temp, setTemp] = useState<boolean>(false);
  const [data, setData] = useState<AreaElectData[]>([]);

  useEffect(() => {
    const newData = generateData();
    //랜덤변수를 주입한 새로운 데이터 갱신
    setData(newData);
    sendData(newData);
  }, [refresh]);

  function generateData() {
    return [
      {
        id: 0,
        name: "단북면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "500px",
        bottom: "",
        left: "-50px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 1,
        name: "단밀면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "550px",
        left: "-90px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 2,
        name: "구천면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "300px",
        left: "200px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 3,
        name: "비안면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "420px",
        left: "620px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 4,
        name: "봉양면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "150px",
        left: "850px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 5,
        name: "금성면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "50px",
        left: "1300px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 6,
        name: "가음면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "-10px",
        left: "",
        right: "1450px",
        status: random(0, 2),
      },
      {
        id: 7,
        name: "춘산면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "180px",
        left: "",
        right: "1100px",
        status: random(0, 2),
      },
      {
        id: 8,
        name: "사곡면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "",
        bottom: "450px",
        left: "",
        right: "1230px",
        status: random(0, 2),
      },
      {
        id: 9,
        name: "옥산면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "520px",
        bottom: "",
        left: "",
        right: "1140px",
        status: random(0, 2),
      },
      {
        id: 10,
        name: "점곡면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "250px",
        bottom: "",
        left: "1900px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 11,
        name: "단순면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "200px",
        bottom: "",
        left: "1500px",
        right: "",
        status: 0, //random(0, 2),
      },
      {
        id: 12,
        name: "안평면",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "400px",
        bottom: "",
        left: "900px",
        right: "",
        status: random(0, 2),
      },
      {
        id: 13,
        name: "의성읍",
        intall: random(0, 100),
        electric: parseFloat(random(0, 255, true).toFixed(2)),
        top: "800px",
        bottom: "",
        left: "1100px",
        right: "",
        status: random(0, 2),
      },
    ];
  }

  return (
    <div style={{ position: "relative" }}>
      {data.map((data, idx) => {
        return (
          <AreaElectircTotal
            key={`map_${data.name}-${idx}`}
            $top={data.top}
            $bottom={data.bottom}
            $left={data.left}
            $right={data.right}
            $bckColor={data.status}
          >
            <FlexArea $justifyContent="center" $padding="24px 0">
              <Image
                style={{ display: "inline" }}
                src={`/images/wb_sunny.svg`}
                width={27.5}
                height={27.5}
                alt={"태양광"}
              />
              <DashBoardText
                inline
                size={28}
                weight={700}
                color="white"
                margin="0 0 0 10px"
                lineHeight="33.41px"
              >
                {data.name}
              </DashBoardText>
            </FlexArea>
            <FlexArea>
              <div>
                <span style={{ borderRight: "1px solid" }}>설비 용량</span>
                <span style={{ borderRight: "1px solid" }}>
                  {data.intall}kW
                </span>
              </div>
              <div>
                <span>누적 발전량</span>
                <span>{data.electric} MWh</span>
              </div>
            </FlexArea>
          </AreaElectircTotal>
        );
      })}
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
              style={{ position: "relative" }}
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
    </div>
  );
};

export default MapImg;
