/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'wp-content/themes/furukawa/',
					src: ['**'],
					dest: '/Users/gurimmer/VagrantShare/vagrant-wp/www/wordpress/wp-content/themes/furukawa/'
				}]
			}
		},
	});

	// Auto load plugin
	require('matchdep').filterDev('grunt-*').forEach(function (name) {
		if (!/template/.test(name)) {
			grunt.loadNpmTasks(name);
		}
	});

	
};
