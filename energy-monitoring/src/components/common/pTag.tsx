"use client";

import React, { Attributes } from "react";
import styled, { css, CSSProperties } from "styled-components";

//대시보드 기준 폰트사이즈 설정
function getFontSize(size: number | undefined) {
  if (size === undefined) {
    return css`
      font-size: "var(--energy-font-size-dashBoard-m)";
    `;
  }
  let fontSize = "";
  switch (size) {
    case 26:
      fontSize = "var(--energy-font-size-dashBoard-xxs)";
      break;
    case 28:
      fontSize = "var(--energy-font-size-dashBoard-xs)";
      break;
    case 31:
      fontSize = "var(--energy-font-size-dashBoard-s)";
      break;
    case 34:
      fontSize = "var(--energy-font-size-dashBoard-m)";
      break;
    case 44:
      fontSize = "var(--energy-font-size-dashBoard-l)";
      break;
    case 52:
      fontSize = "var(--energy-font-size-dashBoard-xl)";
      break;
    case 60:
      fontSize = "var(--energy-font-size-dashBoard-xxl)";
      break;
  }
  return css`
    font-size: ${fontSize};
  `;
}

const ParagraphStyle = styled.p<{
  $color?: string;
  $size?: number;
  $weight?: number;
  $lineHeight?: string;
  $margin?: string;
}>`
  //색상
  color: ${(props) =>
    props.$color
      ? props.$color === "white"
        ? "var(--energy-dashBoard-color-white)"
        : props.$color
      : "#000"};
  //폰트사이즈
  ${(props) => getFontSize(props.$size)}
  //두께
  font-weight: ${(props) => (props.$weight ? props.$weight : 400)};
  //width: fit-content;
  word-break: keep-all;
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 1)};
  margin: ${(props) => (props.$margin ? props.$margin : "unset")};
`;

interface ComponentBasicProps {
  attr?: Attributes;
  style?: CSSProperties;
}

interface DashBoardTextProps extends ComponentBasicProps {
  children: string;
  color?: string;
  weight?: number;
  size?: number;
  lineHeight?: string;
  margin?: string;
}

export default function DashBoardText({
  children,
  attr,
  style,
  color,
  size,
  weight,
  lineHeight,
  margin,
}: DashBoardTextProps) {
  return (
    <ParagraphStyle
      {...attr}
      style={style}
      $color={color}
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      $margin={margin}
    >
      {children}
    </ParagraphStyle>
  );
}

// "use client";

// import { Attributes } from "react";
// import styled, { css, CSSProperties } from "styled-components";

// function getFontSize(size:number){
//     let fontSize = ""
//     switch(size){
//         case 26 : fontSize = 'var(--energy-font-size-dashBoard-xxs)';break;
//         case 28 : fontSize = 'var(--energy-font-size-dashBoard-xs)';break;
//         case 31 : fontSize = 'var(--energy-font-size-dashBoard-s)';break;
//         case 34 : fontSize = 'var(--energy-font-size-dashBoard-m)';break;
//         case 44 : fontSize = 'var(--energy-font-size-dashBoard-l)';break;
//         case 52 : fontSize = 'var(--energy-font-size-dashBoard-xl)';break;
//         case 60 : fontSize = 'var(--energy-font-size-dashBoard-xxl)';break;
//     }
//     return css`
//         font-size: ${fontSize};
//     `
// }

// const ParagraphStyle = styled.p<{ $color?: string }>`
//   color: ${(props) => (props.$color ? props.$color : "#000")};
//   font-size: ${};
// `;

// interface ComponentBasicProps {
//   attr: Attributes;
//   style: CSSProperties;
// }

// interface ParagraphProps extends ComponentBasicProps {
//   children: string;
//   color?: string;
// }

// export default function Paragraph({
//   children,
//   attr,
//   style,
//   color,
// }: ParagraphProps) {
//   return (
//     <ParagraphStyle {...attr} style={style} color={color}>
//       {children}
//     </ParagraphStyle>
//   );
// }
