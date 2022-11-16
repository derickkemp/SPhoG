/**
 * @typedef {Object} backgroundPalette
 * @property {string} default
 * @property {string} paper
 */

/**
 * @typedef {Object} breakpointValues
 * @property {number} xs
 * @property {number} sm
 * @property {number} md
 * @property {number} lg
 * @property {number} xl
 */

/**
 * @typedef {Object} breakpointOptions
 * @property {string} values
 */

/**
 * @typedef {Object} colorPalette
 * @property {string} container
 * @property {string} contrastText
 * @property {string} main
 * @property {string} onContainer
 */

/**
 * @typedef {Object} textPalette
 * @property {string} primary
 */

/**
 * @typedef {Object} paletteOptions
 * @property {backgroundPalette} background
 * @property {colorPalette} error
 * @property {string} divider
 * @property {('dark'|'light')} mode
 * @property {colorPalette} primary
 * @property {colorPalette} secondary
 * @property {textPalette} text
 */

/**
 * @typedef {Object} getDesignTokens
 * @property {breakpointOptions} breakpoints
 * @property {paletteOptions} palette
 */

const darkThemeOptions = {
  palette: {
    background: {
      default: "#1c1b1e",
      paper: "#1c1b1e",
    },
    divider: "#948f99",
    error: {
      container: "#93000a",
      contrastText: "#690005",
      main: "#ffb4ab",
      onContainer: "#ffdad6",
    },
    mode: "dark",
    primary: {
      container: "#4f378a",
      contrastText: "#381e72",
      main: "#cfbcff",
      onContainer: "#e9ddff",
    },
    secondary: {
      container: "#4a4458",
      contrastText: "#332d41",
      main: "#cbc2db",
      onContainer: "#e8def8",
    },
    text: {
      primary: "#e6e1e6",
    },
  },
};

const lightThemeOptions = {
  palette: {
    background: {
      default: "#fffbff",
      paper: "#fffbff",
    },
    divider: "#7a757f",
    error: {
      container: "#ffdad6",
      contrastText: "#ffffff",
      main: "#ba1a1a",
      onContainer: "#410002",
    },
    mode: "light",
    primary: {
      container: "#e9ddff",
      contrastText: "#ffffff",
      main: "#6750a4",
      onContainer: "#22005d",
    },
    secondary: {
      container: "#e8def8",
      contrastText: "#ffffff",
      main: "#625b71",
      onContainer: "#1e192b",
    },
    text: {
      primary: "#1c1b1e",
    },
  },
};

/**
 * Get a set of design tokens based on color mode
 *
 * @param {('dark'|'light')} mode
 * @returns {}
 */
function getDesignTokens(mode) {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 600,
        lg: 720,
        xl: 840,
      },
    },
    ...(mode === "dark" ? darkThemeOptions : lightThemeOptions),
  };
}

export default getDesignTokens;
