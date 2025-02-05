"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

    html {
        width: 100%;
        height:100%;

/* energy */
--energy-dashBoard-tv-dark-100: #1D2A2F;
--energy-dashBoard-tv-dark-200: #2A3C44;
--energy-dashBoard-tv-dark-300: #3A4E58;
--energy-dashBoard-tv-dark-400: #516873;
--energy-dashBoard-tv-dark-500: #8299A4;
--energy-dashBoard-tv-dark-600: #C4D5DD;
--energy-dashBoard-color-white: #FFFFFF;
--energy-dashBoard-title-color: #000000;
--energy-dashBoard-body-text-color-primary: #2C3449;
--energy-dashBoard-body-text-color-secondary: #C4D5DD;
--energy-dashBoard-body-text-color-tertiary :#1D1D1D;
--energy-usc-area-color-1: #3DD598;
--energy-usc-tv-red: #FF565E;
--energy-usc-area-color-3: #FFC542;


--energy-font-size-xxs: 10px;   /* Extra Small */
--energy-font-size-xs: 12px;   /* Extra Small */
--energy-font-size-s: 14px;    /* Small */
--energy-font-size-m: 16px;    /* Medium Small */
--energy-font-size-ml: 18px;   /* Medium */
--energy-font-size-mxl: 20px;   /* Medium Large */
--energy-font-size-l: 24px;    /* Large */
--energy-font-size-xl: 26px;   /* Extra Large */
--energy-font-size-xxl: 28px;  /* Double Extra Large */
--energy-font-size-xxxl: 32px;  /* Double Extra */ // 임시
--energy-font-size-xxxxl: 36px; /* Triple Extra Large */

--energy-font-size-dashBoard-xxs: 1.625rem;   /* Extra Large */
--energy-font-size-dashBoard-xs: 1.75rem;   /* Extra Large */
--energy-font-size-dashBoard-s: 1.938rem; /* Triple Extra Large */
--energy-font-size-dashBoard-m: 2.125rem; /* Triple Extra Large */
--energy-font-size-dashBoard-l: 2.75rem; /* Triple Extra Large */
--energy-font-size-dashBoard-xl: 3.25rem; /* Triple Extra Large */
--energy-font-size-dashBoard-xxl: 3.75rem; /* Triple Extra Large */

/* reset.css */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}

button, select {
    text-transform: none;
}

    button{
        cursor: pointer;
        background: none;
    }
:where(*, *::before, *::after) {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
  }

}

    


    /* 스크롤바 설정*/
    ::-webkit-scrollbar{
      width: 2px;
      height: 6px;
    }

    /* 스크롤바 막대 설정*/
    ::-webkit-scrollbar-thumb{
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background-color:#CBD2DC;
    outline: none;
    }

    /* 스크롤바 뒷 배경 설정*/
    ::-webkit-scrollbar-track{
      background-color: transparent;
      box-shadow: none;
    }
`;

export default GlobalStyle;
