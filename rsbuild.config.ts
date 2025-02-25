import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html'
  },
  source: {
    entry: {
      index: './src/index.tsx'
    },
  },
  output: {
    distPath: {
      root: 'invitacion',
      js: 'assets/js',
      css: 'assets/css',
      image: 'assets/images',
      media: 'assets/media',
      html: ''
    }
  }
});
