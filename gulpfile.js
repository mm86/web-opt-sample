var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyHTML = require('gulp-htmlmin'),
	minifyCSS = require('gulp-clean-css'),
    ;


//minify JS files
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/'));
});

//minify css files
gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('build/css/'));
});

//minify HTML files
gulp.task('html', function(){
	gulp.src('*.html')
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(gulp.dest('build/'));
});

//minify files in the views folder
gulp.task('scriptsView', function(){
	gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/views/js/'));
});

gulp.task('stylesView', function(){
	gulp.src('views/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('build/views/css/'));
});

gulp.task('htmlView', function(){
	gulp.src('views/*.html')
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(gulp.dest('build/views/'));
});

gulp.task('default', ['scripts', 'styles', 'html','scriptsView', 'stylesView', 'htmlView']);