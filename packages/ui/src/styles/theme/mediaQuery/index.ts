const mediaQueryPx = {
  mobile: "767px",
  tablet: "768px",
  desktop: "1440px",
  landscape: "(orientation: landscape)",
  portrait: "(orientation: portrait)",
};

const mediaQuery = {
  mobile: `all and (max-width: ${mediaQueryPx.mobile})`,
  tablet: `all and (min-width: ${mediaQueryPx.tablet})`,
  desktop: `all and (min-width: ${mediaQueryPx.desktop})`,
  landscape: `all and ${mediaQueryPx.landscape}`,
  portrait: `all and ${mediaQueryPx.portrait}`,
};

export default mediaQuery;
