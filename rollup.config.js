import buble from 'rollup-plugin-buble'
import livereload from 'rollup-plugin-livereload'

export default {
  dest: 'build/bundle.js',
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    buble(),
    process.argv.indexOf('--live') !== -1 && livereload('build')
  ]
}
