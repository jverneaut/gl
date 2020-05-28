import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/gl.js',
    name: 'gl',
    format: 'umd',
    exports: 'named',
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
