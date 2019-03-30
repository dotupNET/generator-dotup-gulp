'use strict';
//const skill = require('./secrets/skill.config.json');
const BuildMode = require('./tools/gulp/gulpBuildMode');

const Paths = {
  // source
  sourcePath: '<%= sourcePath %>',

  // test
  testPath: '<%= testPath %>',

  // target
  targetPath: '<%= targetPath %>',

  // docs
  docsPath: '<%= docsPath %>'
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
      sourcePath: `${Paths.sourcePath}/assets/**`,
      targetPath: `${Paths.targetPath}`
    }
  ]

  // lambda: [
  //   {
  //     sourcePath: `${Paths.targetPath}/skill`,
  //     targetFile: `${Paths.targetPath}/lambda.zip`,
  //     params: {
  //       FunctionName: skill.functionArn,
  //       Publish: false
  //     }
  //   }
  // ]
}


module.exports = GulpConfig;
