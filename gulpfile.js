// GULP PACKAGES
// Most packages are lazy loaded
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync').create(),
	filter = require('gulp-filter'),
	plugin = require('gulp-load-plugins')();


// GULP VARIABLES
// Modify these variables to match your project needs

// Set local URL if using Browser-Sync
const LOCAL_URL = 'http://imgplaceholders.test/';

// Select Foundation components, remove components project will not use
const SOURCE = {
	scripts: [
		'node_modules/@fortawesome/fontawesome-pro/js/all.js',
		'node_modules/jscolor-picker/jscolor.js',

		// Place custom JS here, files will be concatenated, minified if ran with --production
		'src/js/**/*.js',
	],

	vendor_js: [
		'node_modules/foundation-sites/dist/js/foundation.min.js',
		'node_modules/foundation-sites/dist/js/foundation.min.js.map',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/jquery/dist/jquery.min.map'
	],

	// Scss files will be concatenated, minified if ran with --production
	styles: 'src/scss/**/*.scss',

	// Images placed here will be optimized
	images: 'src/img/**/*',

	php: '**/*.php'
};

const ASSETS = {
	styles: 'assets/css/',
	scripts: 'assets/js/',
	images: 'assets/img/',
	fonts: 'assets/fonts/',
	all: 'assets/'
};

const JSHINT_CONFIG = {
	"node": true,
	"globals": {
		"document": true,
		"jQuery": true
	}
};

// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript
gulp.task('scripts', function () {

	// Use a custom filter so we only lint custom JS
	const CUSTOMFILTER = filter(ASSETS.scripts + 'js/**/*.js', {restore: true});

	return gulp.src(SOURCE.scripts)
		.pipe(plugin.plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel({
			presets: ['@babel/preset-env'],
			compact: true,
			ignore: ['headroom.js']
		}))
		.pipe(CUSTOMFILTER)
		.pipe(plugin.jshint(JSHINT_CONFIG))
		.pipe(plugin.jshint.reporter('jshint-stylish'))
		.pipe(CUSTOMFILTER.restore)
		.pipe(plugin.concat('scripts.js'))
		.pipe(plugin.uglify())
		.pipe(plugin.sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest(ASSETS.scripts))
});

// Compile Sass, Autoprefix and minify
gulp.task('styles', function () {
	return gulp.src(SOURCE.styles)
		.pipe(plugin.plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass())
		.pipe(plugin.autoprefixer({
			cascade: false
		}))
		.pipe(plugin.cssnano())
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.styles))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Optimize images, move into assets directory
gulp.task('images', function () {
	return gulp.src(SOURCE.images)
		.pipe(plugin.imagemin())
		.pipe(gulp.dest(ASSETS.images))
});

gulp.task('copy-js', function () {
	return gulp.src(SOURCE.vendor_js)
		.pipe(gulp.dest(ASSETS.scripts));
});

gulp.task('copy-fonts', function () {
	return gulp.src(SOURCE.font)
		.pipe(gulp.dest(ASSETS.fonts));
});

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function () {

	// Watch these files
	var files = [
		SOURCE.php,
	];

	browserSync.init(files, {
		proxy: LOCAL_URL,
	});

	gulp.watch(SOURCE.styles, gulp.parallel('styles'));
	gulp.watch(SOURCE.scripts, gulp.parallel('scripts')).on('change', browserSync.reload);
	gulp.watch(SOURCE.images, gulp.parallel('images'));

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function () {

	// Watch .scss files
	gulp.watch(SOURCE.styles, gulp.parallel('styles'));

	// Watch scripts files
	gulp.watch(SOURCE.scripts, gulp.parallel('scripts'));

	// Watch images files
	gulp.watch(SOURCE.images, gulp.parallel('images'));

});

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'copy-js', 'scripts', 'images'));
