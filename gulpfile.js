"use strict";
var path = require("path");
var gulp = require("gulp");
var less = require("gulp-less");
var haml = require("gulp-haml");

var files = {
	style: {
		src: path.join(__dirname, "less/*.less"),
		dest: path.join(__dirname, "css")
	},
	template: {
		src: path.join(__dirname, "haml/*.haml"),
		dest: path.join(__dirname, "html")
	}
};

gulp.task('style', function () {
	return gulp.src(files.style.src)
		.pipe(less())
		.pipe(gulp.dest(files.style.dest));
}).task('template', function () {
	return gulp.src(files.template.src)
		.pipe(haml(// {
		// 	compiler: 'visionmedia',
		// 	compilerOpts: {
		// 		cache: false
		// 	}			
		// }
		))
		.pipe(gulp.dest(files.template.dest));
});

gulp.task('default', ['style', 'template']);
gulp.task('watch', ['default'], function () {
	return gulp.watch(files.style.scr, ['style']).watch(files.template.src, ['template']);
});
