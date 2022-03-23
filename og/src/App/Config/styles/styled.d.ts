import "styled-components";
import { THEMEAPP } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof THEMEAPP;

  export interface DefaultTheme extends ThemeType {}
}
