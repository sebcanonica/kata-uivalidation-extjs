module.exports = function (wallaby) {
    return {
      files: [
        { pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false },
        { pattern: 'ext-6.2.0-gpl/build/ext-modern-all.js', instrument: false },
        { pattern: 'test/TestsStarter.js', instrument: false },
        { pattern: 'script/MyApp/**/*.js', load: false, instrument: true },
      ],

      tests: [
        'test/**/*.Test.js'
      ],

      env : {
        kind: 'chrome'
      },

      debug: false,

      setup: function (wallaby) {
        wallaby.delayStart();
        startTests( wallaby.start );
      }
    };
  };