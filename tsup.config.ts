import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'index.ts',
    'atoms/index': 'atoms/index.ts',
    'molecules/index': 'molecules/index.ts',
    'organisms/index': 'organisms/index.ts',
    'tailwind-preset': 'tailwind-preset.ts',
    utils: 'utils.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  treeshake: true,
  splitting: false,
  minify: false,
})
