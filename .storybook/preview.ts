/*
 * @Author: Diana Tang
 * @Date: 2024-11-04 19:11:25
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-components/.storybook/preview.ts
 */
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/App.css'; //里面包含tailwindcss的设置

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
