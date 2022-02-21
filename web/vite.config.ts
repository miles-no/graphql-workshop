import reactPlugin from '@vitejs/plugin-react';
import checkPlugin from 'vite-plugin-checker';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const config = () => ({
  plugins: [
    tsconfigPathsPlugin(),
    reactPlugin(),
    checkPlugin({
      typescript: true,
      overlay: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
});

export default config;
