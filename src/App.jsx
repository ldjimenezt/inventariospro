import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routes/routes";
import { createContext, useState } from "react";
import { Light, Dark } from "./styles/themes";
export const ThemeContext = createContext(null);
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <section className="contentSidebar">

              </section>
              <section className="contentMenuambur">

              </section>
              <section className="ContentRoutes">

              </section>
              <MyRoutes />
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${(props) => props.theme.bgtotal};

`;

export default App;
