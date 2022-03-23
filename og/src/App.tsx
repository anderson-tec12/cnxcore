import { Provider } from "react-redux";

import store from "./Store/index";

import { SingIn } from "./App/Views/SingIn";
import { ThemeProvider } from "styled-components";
import { THEMEAPP } from "./App/Config/styles/theme";
import GlobalStyles from "./App/Config/styles/default";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEMEAPP}>
        <SingIn />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
