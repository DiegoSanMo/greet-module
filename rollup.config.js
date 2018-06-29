export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/greet.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'greet',
    globals: {
      '@angular/core': 'ng.core',
    }
  }