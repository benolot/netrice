var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('build', function () {
    gulp.src(['scss/netrice.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('docs/'))
});

gulp.task('watch', function () {
    gulp.watch("scss/**/*.scss", ['build'])
})

gulp.task('default', function () {
    gulp.watch("scss/**/*.scss", ['build']);
});
