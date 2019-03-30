'use strict';
const BuildMode = require('./tools/gulp/gulpBuildMode');

const Paths = {
  // source
  sourcePath: 'src/skill',

  // test
  testPath: 'test',

  // target
  targetPath: 'dist',

  // docs
  docsPath: 'docs'
}

const GulpConfig =  {

  buildMode: BuildMode.dev,

  // Root path
  rootPath: __dirname,

  // source
  sourcePath: Paths.sourcePath,
  tsSourceFiles: Paths.sourcePath + '/**/*.ts',

  // test
  testPath: Paths.testPath,
  testFiles: `${Paths.testPath}/**/*.ts`,

  // target
  targetPath: Paths.targetPath,

  // docs
  docsPath: Paths.docsPath,
  docsFiles: Paths.docsPath + '/**/*',

  // Static files
  statics: [
    {
      sourcePath: `${Paths.sourcePath}/**/templates/**/*`,
      targetPath: `${Paths.targetPath}`
    }
  ]
}

module.exports = GulpConfig;
