import buble from 'rollup-plugin-buble'
export default {
  dest: 'build/bundle.js',
  entry: 'src/main.js',
  format: 'iife',
  plugins: [buble()]
}
