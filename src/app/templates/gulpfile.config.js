'use strict';

class GulpConfig {

  constructor() {

    // source
    this.sourcePath = '<%= sourcePath %>';
    this.tsSourceFiles = this.sourcePath + '/**/*.ts';

    // test
    this.testPath = '<%= testPath %>';
    this.testFiles = `${this.testPath}/**/*.ts`;

    // target
    this.targetPath = '<%= targetPath %>';

    // docs
    this.docsPath = '<%= docsPath %>';
    this.docsFiles = this.docsPath + '/**/*';

    // Static files
    this.statics = [
      {
        sourcePath: `${this.sourcePath}/assets/**`,
        targetPath: `${this.targetPath}/assets`
      }
    ];
  }

}
module.exports = GulpConfig;
