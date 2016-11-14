//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',
	frameworks: ['jasmine'],
    files: [
	  'lib/jquery.min.js',
      'lib/angular.min.js',
      'lib/angular-route.min.js',
      'lib/angular-mocks.js',
	  'lib/firebase.js',
	  'lib/angularfire.min.js',	  
	  'js/*.js',
      'unit_tests/*.js'	  
    ],
	exclude: [
	],
	preprocessors: {	 	
		 'baichunyan/js/bai.js' : ['coverage'],		
		 'Fenghaoan/js/homepage.js' : ['coverage'],
		 'fish/js/fish.js': ['coverage'],
		 'JiaHe/teamleader.js': ['coverage'],
		 'Samuel-personalDashboard/personal-dashboard-main.js' : ['coverage'],
		 'WU_YUNCHEN/form.js' : ['coverage'],
		 'ZhaoLucen/admin.js' : ['coverage'],
		 'zhuxinyu/myctrl.js': ['coverage']
	},
	reporters: ['progress', 'coverage'],
	coverageReporter: {
			type: 'html',
			dir: 'coverage/',
			subdir: '.'
	},
	port: 8080,
	colors: true,
    browsers: ['Chrome'],
	singleRun: true,
    plugins: [
      'karma-chrome-launcher',      
      'karma-jasmine',
	  'karma-coverage'
    ]    

  });
};
