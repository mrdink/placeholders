module.exports = {
	'default': [
		'styles',
		'scripts',
		'notify:default'
	],
	'setup': [
		'copy:fontawesome',
		'copy:fira'
	],
	'styles': [
		'clean:pre',
		'sass',
		'postcss:dev',
		'notify:styles'
	],
	'scripts': [
		'jshint',
		'concat',
		'notify:scripts'
	],
	'build': [
		'clean',
		'default',
		'postcss:build',
		'copy:main',
		'compress',
		'notify:build'
	],
	'server': [
		'browserSync',
		'watch'
	]
};
