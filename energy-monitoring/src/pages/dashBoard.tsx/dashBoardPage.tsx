"use client";
import DashBoardText from "@/components/common/pTag";
// import React, { useState } from "react";

// import UiseongMap from "../images/map.svg";
import MapImg from "@/components/mapImg";
import Image from "next/image";
import styled from "styled-components";
import dayjs from "dayjs";
import { FlexArea } from "@/style/commonStyles";
// import {
//   CircularProgressbar,
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";

const DailyStatus = [
  {
    name: "정상가동",
    color: "var(--energy-usc-area-color-1)",
    img: "replay",
    progress: 20,
  },
  {
    name: "오류",
    color: "var(--energy-usc-tv-red)",
    img: "error",
    progress: 20,
  },
  {
    name: "중지",
    color: "var(--energy-usc-area-color-3)",
    img: "do_not_disturb_on",
    progress: 20,
  },
];

const AreaIntallData = [
  {
    name: "설비 갯수",
    value: "300개",
  },
  {
    name: "설비 용량",
    value: "452.34 m2",
  },
  {
    name: "누적 사용량",
    value: "829.29 Gcal",
  },
];

const DashBoardWrapper = styled.section`
  position: relative;
  background-color: var(--energy-dashBoard-tv-dark-200);
  //overflow: hidden;
  height: 100%;
  width: 100%;
`;

const DashBoardHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 120px 50px 90px;
  width: 100%;
  height: 227px;
  background-color: var(--energy-dashBoard-tv-dark-100);
  z-index: 99;
`;

const DashBoardContent = styled.div`
  position: relative;
  height: 100%;
  padding: 227px 0 0;
`;

const DashBoardInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: var(--energy-dashBoard-tv-dark-100);
  border-radius: 30px;
  padding: 50px;
  gap: 50px;
`;

const DashBoardTodayStatus = styled(DashBoardInfo)`
  position: absolute;
  top: 297px;
  left: 90px;
  width: 1680px;
  height: 384px;
`;

const DashBoardAreaAmount = styled(DashBoardInfo)`
  position: absolute;
  bottom: 70px;
  left: 90px;
  width: 703px;
  height: 244px;
  progress {
    position: relative;
    width: 405px;
    &::-webkit-progress-bar {
      background: var(--energy-dashBoard-tv-dark-200);
      border-radius: 9px;
      //border: 1px solid #eeeeee;
      height: 20px;
      width: 405px;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background: var(--energy-dashBoard-tv-dark-400);
      border-radius: 9px;
      height: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 20px;
      background: var(--energy-dashBoard-tv-dark-500);
      border-radius: 9px;
    }
  }
`;

const DashBoardDetail = styled(DashBoardInfo)`
  top: 297px;
  right: 90px;
  background-color: unset;
`;

const DashBoardDetailChild = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--energy-dashBoard-tv-dark-100);
  border-radius: 30px;
  padding: 50px;
  gap: 50px;
`;

const RealTimeAlarm = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 40px;
  gap: 30px;
  background-color: var(--energy-dashBoard-tv-dark-300);
  width: 770px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--energy-usc-tv-red);
  }
`;

const AlarmHead = styled.div`
  p {
    position: relative;
    width: max-content;
    &::before {
      position: absolute;
      top: -5px;
      right: -20px;
      content: "";
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: var(--energy-usc-tv-red);
    }
  }
`;

const TodayStatusBox = styled.div<{ $progressColor: string }>`
  display: flex;
  padding: 40px;
  border-radius: 20px;
  gap: 20px;
  width: 500px;
  background-color: var(--energy-dashBoard-tv-dark-300);
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: var(--energy-usc-area-color-1);
    border-radius: 18.06px;
  }
  progress {
    margin: 34px 0 0;
    width: 300px;
    &::-webkit-progress-bar {
      background: var(--energy-dashBoard-tv-dark-200);
      border-radius: 9px;
      //border: 1px solid #eeeeee;
      height: 16.17px;
      width: 100%;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background: ${(props) => props.$progressColor};
      border-radius: 9px;
      height: 16.17px;
    }
  }
`;

const HeadChangeArea = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 auto;
`;

const ElectProgress = styled.div`
  display: flex;
  progress {
    position: relative;
    width: 405px;
    transform-origin: 0 100%;
    transform: rotate(90deg);
    &::-webkit-progress-bar {
      background: var(--energy-dashBoard-tv-dark-200);
      border-radius: 9px;
      //border: 1px solid #eeeeee;
      height: 20px;
      width: 405px;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background: var(--energy-dashBoard-tv-dark-400);
      border-radius: 9px;
      height: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 20px;
      background: var(--energy-dashBoard-tv-dark-500);
      border-radius: 9px;
    }
  }
`;

export default function Dashboard() {
  //const labels = ["January", "February", "March", "April", "May"];
  //const data = [65, 59, 80, 81, 56]; // y축 값
  const now = dayjs();

  return (
    <DashBoardWrapper>
      <DashBoardHeader>
        <FlexArea $gap="18.5px">
          <Image
            src="/images/uscLogo.svg"
            width={172}
            height={80}
            alt="headLogo"
          />
          <FlexArea $flexDirection="column" $alignItems="unset">
            <DashBoardText size={60} weight={700} color="white">
              의성군 에너지 모니터링
            </DashBoardText>
            <DashBoardText size={34} weight={500} color="white">
              Energy Monitoring System
            </DashBoardText>
          </FlexArea>
        </FlexArea>
        <FlexArea $gap="30px">
          <DashBoardText size={44} color="white">
            {`${now.format("YYYY-MM-DD hh:mm:ss")} 업데이트`}
          </DashBoardText>
          <div
            style={{
              border: "3px solid #fff",
              borderRadius: "12px",
            }}
          >
            <button
              style={{ padding: "12px" }}
              onClick={() => {
                //refreshButton
              }}
            >
              <Image
                src="/images/restart_alt.svg"
                width={60}
                height={60}
                alt="dashBaordRefresh"
              />
            </button>
          </div>
        </FlexArea>
      </DashBoardHeader>
      <DashBoardContent>
        {/** 태양광 금일 운영 현황 */}
        <DashBoardTodayStatus>
          <DashBoardText
            size={52}
            weight={700}
            color="white"
            lineHeight="62.05px"
          >
            태양광 금일 운영 현황 (총 300개)
          </DashBoardText>
          <FlexArea $gap="40px">
            {DailyStatus.map((status, idx) => {
              return (
                <TodayStatusBox
                  key={`dashBoardDailyStatus-${idx}`}
                  $progressColor={status.color}
                >
                  <span style={{ backgroundColor: status.color }}>
                    <Image
                      src={`/images/${status.img}.svg`}
                      width={50}
                      height={50}
                      alt={status.name}
                    />
                  </span>
                  <div>
                    <FlexArea $justifyContent="space-between" $width="100%">
                      <DashBoardText
                        size={34}
                        weight={700}
                        color="white"
                        lineHeight="40.57px"
                      >
                        {status.name}
                      </DashBoardText>
                      <DashBoardText
                        size={34}
                        weight={700}
                        color={status.color}
                        lineHeight="40.57px"
                        style={{ float: "right" }}
                      >
                        {`${status.progress}%`}
                      </DashBoardText>
                    </FlexArea>
                    <progress value={status.progress} max={100} />
                  </div>
                </TodayStatusBox>
              );
            })}
          </FlexArea>
        </DashBoardTodayStatus>
        {/**구역별 설비 용량 */}
        <DashBoardAreaAmount>
          <DashBoardText
            size={44}
            weight={700}
            color="white"
            lineHeight="52.51px"
          >
            구역별 설비 용량
          </DashBoardText>
          <FlexArea $justifyContent="space-between">
            <DashBoardText
              size={34}
              weight={700}
              color="white"
              lineHeight="40.57px"
            >
              낮음
            </DashBoardText>
            <progress value={66} max={100} />
            <DashBoardText
              size={34}
              weight={700}
              color="white"
              lineHeight="40.57px"
            >
              높음
            </DashBoardText>
          </FlexArea>
        </DashBoardAreaAmount>
        {/**실시간알림 + 상세정보 */}
        <DashBoardDetail>
          {/**실시간알림 */}
          <DashBoardDetailChild>
            <AlarmHead>
              <DashBoardText
                size={52}
                weight={700}
                color="white"
                lineHeight="62.05px"
              >
                실시간 알림
              </DashBoardText>
            </AlarmHead>
            <FlexArea $flexDirection="column" $gap="24px">
              {[1, 2].map((x, idx) => {
                return (
                  <RealTimeAlarm key={`${x}-${idx}`}>
                    <span>
                      <Image
                        src={`/images/error.svg`}
                        width={50}
                        height={50}
                        alt={"알람"}
                      />
                    </span>
                    <div style={{ flexGrow: 1 }}>
                      <FlexArea $justifyContent="space-between">
                        <DashBoardText
                          size={34}
                          weight={700}
                          color="white"
                          lineHeight="40.57px"
                        >
                          오류알림
                        </DashBoardText>
                        <DashBoardText
                          size={26}
                          color="var(--energy-dashBoard-tv-dark-600)"
                        >
                          4:20PM
                        </DashBoardText>
                      </FlexArea>
                      <DashBoardText
                        size={31}
                        color="var(--energy-dashBoard-tv-dark-600)"
                        margin="20px 0 0 "
                        lineHeight="36.99px"
                      >
                        다인면 23A689기계 작동 오류
                      </DashBoardText>
                    </div>
                  </RealTimeAlarm>
                );
              })}
            </FlexArea>
          </DashBoardDetailChild>
          {/**상세정보 */}
          <DashBoardDetailChild>
            <HeadChangeArea>
              <button>
                <Image
                  src={`/images/expand_circle_right.svg`}
                  width={50}
                  height={50}
                  alt="지역변경이전"
                />
              </button>
              <DashBoardText
                size={52}
                weight={700}
                color="white"
                lineHeight="62.05px"
              >
                의성군 태양광 상세정보
              </DashBoardText>
              <button>
                <Image
                  src={`/images/expand_circle_left.svg`}
                  width={50}
                  height={50}
                  alt="지역변경이후"
                />
              </button>
            </HeadChangeArea>
            <FlexArea $flexDirection="column" $gap="24px">
              <FlexArea
                $justifyContent="center"
                $gap="40px"
                style={{
                  backgroundColor: "var(--energy-dashBoard-tv-dark-300)",
                  borderRadius: "20px",
                  padding: "50px 0",
                  textAlign: "center",
                }}
              >
                {AreaIntallData.map((data, idx) => {
                  return (
                    <>
                      {idx !== 0 && (
                        <div
                          style={{
                            height: "88.5px",
                            borderLeft:
                              "1px solid var(--energy-dashBoard-tv-dark-500)",
                          }}
                        />
                      )}
                      <div key={`${data.name}-${idx}`}>
                        <DashBoardText
                          weight={700}
                          size={34}
                          color="white"
                          margin="0 0 15px"
                        >{`${data.name}`}</DashBoardText>
                        <DashBoardText
                          weight={700}
                          size={34}
                          color="white"
                        >{`${data.value}`}</DashBoardText>
                      </div>
                    </>
                  );
                })}
              </FlexArea>

              <FlexArea
                $gap="40px"
                $padding="40px"
                style={{
                  backgroundColor: "var(--energy-dashBoard-tv-dark-300)",
                  borderRadius: "20px",
                }}
              >
                <DashBoardText
                  size={44}
                  weight={700}
                  color="white"
                  lineHeight="52.51px"
                >
                  2025년 월간 평균 발전량 추이
                </DashBoardText>
                <ElectProgress>
                  <progress value={50} max={100} />
                  <progress value={50} max={100} />
                  <progress value={50} max={100} />
                  <progress value={50} max={100} />
                  <progress value={50} max={100} />
                  <progress value={50} max={100} />
                </ElectProgress>
              </FlexArea>
            </FlexArea>
          </DashBoardDetailChild>
        </DashBoardDetail>
        <div style={{ margin: "156px 0 0 200px" }}>
          <MapImg />
        </div>
      </DashBoardContent>
    </DashBoardWrapper>
  );
}

// <CircularProgressChart
//         size={"450px"}
//         value={68}
//         pathColor={"#25C685"}
//         trailColor={"#D4F5E9"}
//         textColor={"#000000"}
//         strokeLinecap={"butt"}
//         fontSize={"16px"}
//         strokeWidthPath={20}
//         strokeWidthTrail={20}
//       />
//       <CircularProgressChart
//         size={"450px"}
//         value={100}
//         pathColor={"#25C685"}
//         trailColor={"#D4F5E9"}
//         textColor={"#000000"}
//         strokeLinecap={"butt"}
//         fontSize={"16px"}
//         strokeWidthPath={10}
//         strokeWidthTrail={10}
//         background="#ffb0b0"
//       />
//       <CircularProgressChart
//         size={"450px"}
//         value={68}
//         pathColor={"#25C685"}
//         trailColor={"#D4F5E9"}
//         strokeLinecap={"butt"}
//         strokeWidthPath={40}
//         strokeWidthTrail={40}
//         WithChildren={true}
//         textColor="#000000"
//         fontSize="16px"
//       >
//         {/* 자식 요소를 이곳에 추가 */}
//         <div
//           style={{
//             width: "250px",
//             height: "250px",
//             borderRadius: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#ffffff",
//             boxShadow: "0px 34.49px 71.01px 0px #0000001F",
//           }}
//         ></div>
//         {/* 또는 자식 요소를 원하는대로 추가 */}
//       </CircularProgressChart>
//       <BarChart
//         size={{ width: "1500px", height: "1500px" }}
//         label={"test"}
//         labels={labels}
//         value={data}
//         backgroundColor="yellow"
//         borderColor="#000"
//         borderWidth={1}
//       />

// <div>
//                 <CircularProgressbarWithChildren
//                   value={80}
//                   styles={buildStyles({
//                     pathColor: "#f00",
//                     //trailColor: "#eee",
//                     strokeLinecap: "butt",
//                   })}
//                 >
//                   {/* Foreground path */}
//                   <CircularProgressbar
//                     value={70}
//                     styles={buildStyles({
//                       pathColor: "#000",
//                       trailColor: "transparent",
//                       strokeLinecap: "butt",
//                     })}
//                   />
//                 </CircularProgressbarWithChildren>

//               </div>
