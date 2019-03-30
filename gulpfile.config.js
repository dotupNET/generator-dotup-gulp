'use strict';
const skill = require('./secrets/skill.config.json');
const BuildMode = require('./tools/gulp/gulpBuildMode');

// class GulpConfig {

//   constructor(buildMode) {

//     GulpConfig.buildMode = buildMode;
//     this.buildMode = buildMode || BuildMode.dev;

//     // source
//     this.sourcePath = 'src/skill';
//     this.tsSourceFiles = this.sourcePath + '/**/*.ts';

//     // test
//     this.testPath = 'test';
//     this.testFiles = `${this.testPath}/**/*.ts`;

//     // target
//     this.targetPath = 'dist';

//     // docs
//     this.docsPath = 'docs';
//     this.docsFiles = this.docsPath + '/**/*';

//     // Static files
//     this.statics = [
//       {
//         sourcePath: `${this.sourcePath}/assets/**`,
//         targetPath: `${this.targetPath}/skill/assets`
//       },
//       {
//         sourcePath: `package.json`,
//         targetPath: `${this.targetPath}/skill`
//       }
//     ];

//     this.lambda = [
//       {
//         sourcePath: `${this.targetPath}/skill`,
//         targetFile: `${this.targetPath}/lambda.zip`,
//         params: {
//           // FunctionName: "arn:aws:lambda:eu-west-1:977739547106:function:test-function",
//           FunctionName: skill.functionArn,
//           Publish: false
//         }
//       }
//     ];
//   }

// }
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
      sourcePath: `${Paths.sourcePath}/assets/**`,
      targetPath: `${Paths.targetPath}/skill/assets`
    },
    {
      sourcePath: `package.json`,
      targetPath: `${Paths.targetPath}/skill`
    }
  ],

  lambda: [
    {
      sourcePath: `${Paths.targetPath}/skill`,
      targetFile: `${Paths.targetPath}/lambda.zip`,
      params: {
        // FunctionName: "arn:aws:lambda:eu-west-1:977739547106:function:test-function",
        FunctionName: skill.functionArn,
        Publish: false
      }
    }
  ]
}


module.exports = GulpConfig;
