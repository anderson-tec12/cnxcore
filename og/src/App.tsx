import { Provider } from "react-redux";

import store from "./Store/index";

import { Router } from "./App/Router";
import { ThemeProvider } from "styled-components";
import { THEMEAPP } from "./App/Config/styles/theme";
import GlobalStyles from "./App/Config/styles/default";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEMEAPP}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
