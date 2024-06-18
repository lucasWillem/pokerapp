const theme = {
  colors: {
    black: "rgb(0, 0, 0)",
    red: "rgb(128, 0, 32)",
    green: "rgb(12, 54, 31)",
    gold: "rgb(255, 215, 0)",
    success: "rgb(40, 167, 69)",
    info: "rgb(23, 162, 184)",
    warning: "rgb(255, 193, 7)",
    danger: "rgb(220, 53, 69)",
    light: "rgb(248, 249, 250)",
  },
  fonts: ["Arial", "sans-serif"],
};

enum ColorOptions {
  Black = "black",
  Red = "red",
  Green = "green",
  Gold = "gold",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
}

export { theme, ColorOptions };
