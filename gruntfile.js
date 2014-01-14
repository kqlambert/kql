/* ------------------------------------------------
// GLOBALS
------------------------------------------------ */

/*global module*/
/*node browser: true*/

module.exports = function (grunt) {
	'use strict';
	var $jsFiles = [
		'js/build/*.js' // All Javascript files in the js folder
	];
	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: $jsFiles,
				dest: 'js/production/production.js'
			}
		},
		uglify: {
			build: {
				src: 'js/production/production.js',
				dest: 'js/scripts.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'i/build/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'i/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/build/global-expand.css': 'css/build/global.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version']
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'css/build/global-expand.css',
				dest: 'css/build'
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/global.css': ['css/build/global-expand.css']
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: $jsFiles,
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['css/build/*.scss'],
				tasks: ['sass', 'autoprefixer', 'cssmin'],
				options: {
					spawn: false
				}
			}
		}
	});

	// 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'cssmin', 'watch']);
};

// -------------------------------------
// INSTALLING GRUNT ON A PROJECT
// -------------------------------------
// 1. save this file and package.json to root of project
// 2. from command line navigate to project directory
//    a. npm install
//    b. npm install -g grunt-cli
//    c. npm install grunt-contrib-concat --save-dev // as well as all the other plug-ins needed
