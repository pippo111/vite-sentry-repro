import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      commonjsOptions: {
        include: [/node_modules/, /types/],
      },
      sourcemap: true,
    },
    worker: {
      format: 'es'
    },
    server: {
      host: '127.0.0.1',
      port: 3000
    },
    preview: {
      host: true,
      port: 3000,
      strictPort: true
    },
    plugins: [
      react(),
      // Remove this plugin so you can observe that the build process is working
      sentryVitePlugin({
        authToken: 'sntrys_',
        org: 'org',
        project: 'project',
        telemetry: false
      }),
    ],
    publicDir: 'public',
    optimizeDeps: {
      include: ['common-types'],
    },
  };
});
