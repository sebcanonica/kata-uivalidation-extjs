module.exports = function(config) {
    config.set({
  
      frameworks: ['jasmine', 'sinon'],
      
      files: [
        { pattern: 'ext-6.2.0-gpl/build/ext-modern-all.js', watched: false },
        'test/TestsStarter.js',
        { pattern: 'script/MyApp/**/*.js', watched: true, served: true, included: false },

        'test/**/*.Test.js'
      ],
        
      preprocessors: config.coverage ? {
        'script/**/*.js': 'coverage'
      } : {},
  
      reporters: ['progress','coverage'],
    
      coverageReporter: {
        includeAllSources: true
      },
  
      port: 9876,
    
      colors: true,
  
      logLevel: config.LOG_INFO,
  
      autoWatch: true,
      
      browsers: ['Chrome'],
    
      singleRun: false,
  
      concurrency: Infinity  
    })
  }
  