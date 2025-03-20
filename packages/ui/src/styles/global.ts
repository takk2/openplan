import { css } from "@emotion/react";
import { pretendard } from "./fonts/pretendard";

export const globals = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  :root {
    --font-pretendard: ${pretendard.style.fontFamily};
  }

  body {
    font-family:
      var(--font-pretendard),
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      sans-serif;
  }

  /* Remove default margin and padding */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Additional common resets */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    cursor: pointer;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
