import { defineConfig } from 'tsup'

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    skipNodeModulesBundle: true,
    outDir: 'dist',
    shims: true,
    clean: true,
    dts: true,
})