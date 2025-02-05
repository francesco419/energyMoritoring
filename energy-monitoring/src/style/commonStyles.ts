"use client";

import styled from "styled-components";

interface FlexAreaProps {
  $width?: string;
  $height?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: string;
  $margin?: string;
  $backgroundColor?: string;
  $padding?: string;
  $mediaXsmallflexDirection?: string; // @media (min-width: 320px) flexDirection
  $mediaSmallflexDirection?: string; // @media (min-width: 480px) flexDirection
  $mediaXMediumflexDirection?: string; // @media (min-width: 768px) flexDirection
  $mediaLargeflexDirection?: string; // @media (min-width: 1024px) flexDirection
}

export const FlexArea = styled.div<FlexAreaProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "auto"};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "center"};
  gap: ${(props) => props.$gap || "0"};
  margin: ${(props) => props.$margin || "0"};
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  padding: ${(props) => (props.$padding ? props.$padding : "unset")};
`;
