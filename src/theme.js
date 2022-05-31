import { createTheme } from "@mui/material";
// Importing the createTheme feature from material UI

export const theme = createTheme({
  // K.I.S.S. - Creating a reusable theme palette
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },

    secondary: {
      main: "#15c630",
    },

    otherColor: {
      main: "#999",
    }
  }
})