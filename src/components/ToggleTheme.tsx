import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ToggleTheme: React.FC = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentTheme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5", // Indigo 500
      },
      secondary: {
        main: "#f50057", // Pink 500
      },
      ...{ type: darkMode ? "dark" : "light" },
      background: {
        default: darkMode ? "#121212" : "#ffffff", // Dark grey or white
      },
    },
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      {/* {props.children} */}
    </ThemeProvider>
  );
};

export default ToggleTheme;
