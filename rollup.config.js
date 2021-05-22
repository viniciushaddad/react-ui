import typescript from 'rollup-plugin-typescript2'
import url from 'rollup-plugin-url'
import analyze from 'rollup-plugin-analyzer'
import { createTransformer } from 'typescript-plugin-styled-components'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    external(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.ttf'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
    typescript({
      transformers: [
        () => ({
          before: [createTransformer()],
        }),
      ],
    }),
    analyze(),
  ],
}
