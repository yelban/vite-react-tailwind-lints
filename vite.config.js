/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import cleanup from 'rollup-plugin-cleanup';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cleanup({
			comments: 'none',
		}),
	],
});
