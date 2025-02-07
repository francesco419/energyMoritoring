"use client";

import styled from "styled-components";
import Image from "next/image";
import DashBoardText from "@/components/common/pTag";
import { FlexArea } from "@/style/commonStyles";
import dayjs from "dayjs";

const RealTimeAlarmStyle = styled.div`
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

interface RealTimeAlarmProps {
  name: string;
}

export default function RealTimeAlarm({ name }: RealTimeAlarmProps) {
  const now = dayjs().format("h:mm A");

  return (
    <RealTimeAlarmStyle>
      <span>
        <Image src={`/images/error.svg`} width={50} height={50} alt={"알람"} />
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
          <DashBoardText size={26} color="var(--energy-dashBoard-tv-dark-600)">
            {`${now}`}
          </DashBoardText>
        </FlexArea>
        <DashBoardText
          size={31}
          color="var(--energy-dashBoard-tv-dark-600)"
          margin="20px 0 0 "
          lineHeight="36.99px"
        >
          {`${name} 23A689기계 작동 오류`}
        </DashBoardText>
      </div>
    </RealTimeAlarmStyle>
  );
}
