module.exports = function (grunt) {

  /*
      Grunt set-up:
        npm install -g grunt-cli
        npm install -g grunt-init
        npm init

      Requirements: 
        npm install grunt@devel --save-dev
        npm install grunt-contrib-watch --save-dev
        npm install grunt-contrib-sass --save-dev
       
   */

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['./sass/screen.scss'],
      tasks: ['compass','autoprefixer']
    },

    compass: {
    	dist: {
			options: {}
		},
    },
	autoprefixer: {
		options: {},
		multiple_files: {
		            expand: true,
		            flatten: true,
		            src: './css/*.css',
					dest: './css/'
		        },
	}

  });

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	// Default Task
	grunt.registerTask('default', ['compass','autoprefixer']);

};
