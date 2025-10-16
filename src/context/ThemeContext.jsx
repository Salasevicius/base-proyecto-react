import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // 1. Estado del tema, inicializado desde localStorage o por defecto "light"
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  // 2. Cada vez que el tema cambie, guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
