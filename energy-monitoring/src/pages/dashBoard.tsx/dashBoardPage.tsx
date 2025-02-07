"use client";
import DashBoardText from "@/components/common/pTag";
// import React, { useState } from "react";

// import UiseongMap from "../images/map.svg";
import MapImg from "@/components/mapImg";
import Image from "next/image";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { FlexArea } from "@/style/commonStyles";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { countBy, random, sum, sumBy } from "lodash";
import { AreaElectData } from "@/config/dashBoardData";
import ProgressBar from "@/components/progress/progressBar";
import { useInterval } from "usehooks-ts";
import RealTimeAlarm from "./components/realTimeAlarm";
// import {
//   CircularProgressbar,
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [3, 2, 1, 1.5],
      backgroundColor: ["#3DD598", "#FFC542", "#FF565E", "#1D2A2F"],
      borderColor: "none",
      borderWidth: 0,
      borderRadius: 9,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "80%", // 도넛 중앙 빈 공간을 늘려서 바를 얇게
};

ChartJS.register(ArcElement, Tooltip, Legend);

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
    color: "var(--energy-usc-tv-yellow)",
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

const ElectictData = [
  {
    id: 0,
    max: "133px",
    value: "85%",
  },
  {
    id: 1,
    max: "171px",
    value: "80%",
  },
  {
    id: 2,
    max: "113.38px",
    value: "90%",
  },
  {
    id: 3,
    max: "92.93px",
    value: "40%",
  },
  {
    id: 4,
    max: "91.08px",
    value: "60%",
  },
  {
    id: 5,
    max: "98.51px",
    value: "85%",
  },
  {
    id: 6,
    max: "83.64px",
    value: "70%",
  },
  {
    id: 7,
    max: "92.93px",
    value: "30%",
  },
  {
    id: 8,
    max: "98.51px",
    value: "90%",
  },
  {
    id: 9,
    max: "98.51px",
    value: "90%",
  },
  {
    id: 10,
    max: "83.64px",
    value: "60%",
  },
  {
    id: 11,
    max: "102.23px",
    value: "25%",
  },
  {
    id: 12,
    max: "83.64px",
    value: "70%",
  },
  {
    id: 13,
    max: "18.59px",
    value: "0",
  },
  {
    id: 14,
    max: "18.59px",
    value: "0",
  },
  {
    id: 15,
    max: "18.59px",
    value: "0",
  },
  {
    id: 16,
    max: "18.59px",
    value: "0",
  },
  {
    id: 17,
    max: "18.59px",
    value: "0",
  },
  {
    id: 18,
    max: "18.59px",
    value: "0",
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
  z-index: 10;
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
  gap: 28.5px;
  align-self: baseline;
  progress {
    position: relative;
    width: 405px;
    transform: rotate(-90deg) translateY(-1000%);
    transform-origin: 100% 0%;
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

const CustomProgress = styled.div<{ $percentage?: string; $max?: string }>`
  display: flex;
  height: ${(props) => (props.$max ? props.$max : "18.59px")};
  width: 7px;
  background-color: var(--energy-dashBoard-tv-dark-200);
  border-radius: 9px;
  align-items: end;
  transition: all 1s;
  margin: 0 0 30px;
  div {
    height: ${(props) => (props.$percentage ? props.$percentage : "0px")};
    width: 7px;
    background-color: var(--energy-usc-tv-yellow);
    border-radius: 9px;
    transition: all 1s;
  }
`;

export default function Dashboard() {
  //const labels = ["January", "February", "March", "April", "May"];
  //const data = [65, 59, 80, 81, 56]; // y축 값
  const now = dayjs();

  const [refresh, setRefresh] = useState<number>(0);
  const [lastRefresh, setLastRefresh] = useState<Dayjs>();
  const [mapData, setMapData] = useState<AreaElectData[]>([]);
  const [totalManage, setTotalManage] = useState<{
    total: number;
    good: number;
    bad: number;
    stop: number;
  }>({ total: 0, good: 0, bad: 0, stop: 0 });

  useEffect(() => {
    setLastRefresh(dayjs());
  }, [refresh]);

  const tempSetTime = 5000; //64000

  useInterval(() => {
    //interval 시작 시간
    const presentTime = dayjs();
    //5분 경과되면
    if (presentTime.diff(lastRefresh) >= tempSetTime) {
      //밀리 초 => 1000 = 1초
      setRefresh(random(0, 100));
    }
  }, tempSetTime);

  function getMapData(data: AreaElectData[]) {
    setMapData(data);
    const analysis = countBy(data, "status");

    const tempManage = {
      total: data.length,
      good: analysis["0"],
      bad: analysis["1"],
      stop: analysis["2"],
    };

    setTotalManage(tempManage);
  }

  const AlarmContainer = styled(FlexArea)`
    overflow-y: scroll;
    max-height: 384px;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  function getPercentage(child: number, parent: number) {
    console.log(child);
    if (child === undefined) {
      return 0;
    }
    return parseInt(((child / parent) * 100).toFixed(0));
  }

  function kiloWattConvertor(watt: number) {
    const val = parseFloat(watt.toFixed(2));
    if (val >= 1000) {
      return `${(val / 1000).toFixed(2)}Gcal`;
    } else {
      return val + "MW";
    }
  }

  function tempKiloWattConvertor(watt: number) {
    return (watt * 0.86).toFixed(2) + "Gcal";
  }

  //console.log(mapData);
  console.log(totalManage);

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
        <FlexArea $gap="30px" style={{ whiteSpace: "nowrap", width: "unset" }}>
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
                const presentTime = dayjs();
                if (presentTime.diff(lastRefresh) > 3000000) {
                }
                setRefresh(random(0, 100));
              }}
            >
              <Image
                src="/images/restart_alt.svg"
                width={60}
                height={60}
                alt="dashBoardRefresh"
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
            {`태양광 금일 운영 현황 (총 ${totalManage.total}개)`}
          </DashBoardText>
          <FlexArea $gap="40px">
            {DailyStatus.map((status, idx) => {
              const perentage = getPercentage(
                idx === 0
                  ? totalManage.good
                  : idx === 1
                  ? totalManage.bad
                  : totalManage.stop,
                totalManage.total
              );
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
                        {`${perentage}%`}
                      </DashBoardText>
                    </FlexArea>
                    {/* <progress value={perentage} max={100} /> */}
                    <ProgressBar target={perentage} duration={1000} />
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
            <AlarmContainer
              $flexDirection="column"
              $gap="24px"
              style={{ overflowY: "scroll", maxHeight: "384px" }}
            >
              {mapData.map((data, idx) => {
                if (data.status === 1) {
                  return (
                    <RealTimeAlarm name={data.name} key={`${data}-${idx}`} />
                  );
                }
              })}
            </AlarmContainer>
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
                        <DashBoardText weight={700} size={34} color="white">{`${
                          idx === 0
                            ? `${totalManage.total}개`
                            : idx === 1
                            ? kiloWattConvertor(sumBy(mapData, "intall"))
                            : tempKiloWattConvertor(sumBy(mapData, "electric"))
                        }`}</DashBoardText>
                      </div>
                    </>
                  );
                })}
              </FlexArea>
              {/**차트 */}
              <FlexArea
                $justifyContent="center"
                $gap="40px"
                style={{
                  backgroundColor: "var(--energy-dashBoard-tv-dark-300)",
                  borderRadius: "20px",
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "200px", height: "200px" }}>
                  <Doughnut
                    data={{
                      datasets: [
                        {
                          label: "# of Votes",
                          data: [
                            totalManage.good,
                            totalManage.bad,
                            totalManage.stop,
                          ],
                          backgroundColor: [
                            "#3DD598",
                            "#FFC542",
                            "#FF565E",
                            "#1D2A2F",
                          ],
                          borderColor: "none",
                          borderWidth: 0,
                          borderRadius: 9,
                        },
                      ],
                    }}
                    options={options}
                    width={"200px"}
                    height={"200px"}
                  />
                </div>
                <FlexArea
                  $flexDirection="column"
                  $gap="16px"
                  $alignItems="flex-start"
                >
                  <DashBoardText
                    size={44}
                    weight={700}
                    color="white"
                    lineHeight="52.51px"
                  >
                    운영 현황
                  </DashBoardText>
                  <FlexArea $gap="16px">
                    <span
                      style={{
                        backgroundColor: "var(--energy-usc-area-color-1)",
                        width: "36px",
                        height: "22px",
                        borderRadius: "14px",
                      }}
                    ></span>
                    <DashBoardText size={31} color="white">
                      {`정상가동 설비 ${totalManage.good}`}
                    </DashBoardText>
                  </FlexArea>
                  <FlexArea $gap="16px">
                    <span
                      style={{
                        backgroundColor: "var(--energy-usc-tv-red)",
                        width: "36px",
                        height: "22px",
                        borderRadius: "14px",
                      }}
                    ></span>
                    <DashBoardText size={31} color="white">
                      {`오류 설비 ${totalManage.bad}`}
                    </DashBoardText>
                  </FlexArea>
                  <FlexArea $gap="16px">
                    <span
                      style={{
                        backgroundColor: "var(--energy-usc-tv-yellow)",
                        width: "36px",
                        height: "22px",
                        borderRadius: "14px",
                      }}
                    ></span>
                    <DashBoardText size={31} color="white">
                      {`중단 설비 ${totalManage.stop}`}
                    </DashBoardText>
                  </FlexArea>
                </FlexArea>
              </FlexArea>
              {/**월간 발전량 추이 그래프 */}
              <FlexArea
                $flexDirection="column"
                $alignItems="flex-start"
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
                  {ElectictData.map((electric, idx) => {
                    return (
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "end",
                        }}
                        key={`electric_${electric.value}-${idx}`}
                      >
                        <CustomProgress
                          $percentage={electric.value}
                          $max={electric.max}
                        >
                          <div />
                        </CustomProgress>
                        <DashBoardText
                          size={28}
                          color={"var(--energy-dashBoard-tv-temp)"}
                          style={{
                            position: "absolute",
                            bottom: "-10px",
                            right: "33px",
                            textAlign: "center",
                          }}
                        >
                          {[1, 7, 14].includes(idx) ? idx.toString() : ""}
                        </DashBoardText>
                      </div>
                    );
                  })}
                </ElectProgress>
              </FlexArea>
            </FlexArea>
          </DashBoardDetailChild>
        </DashBoardDetail>
        <div style={{ margin: "156px 0 0 200px" }}>
          <MapImg refresh={refresh} sendData={getMapData} />
        </div>
      </DashBoardContent>
    </DashBoardWrapper>
  );
}
