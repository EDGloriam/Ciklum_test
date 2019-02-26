'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const gcmq = require('gulp-group-css-media-queries');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


const isDevMode = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('clean', function(){
    return del('public');
});

gulp.task('styles', function(){
    return gulp.src('frontend/styles/*.*') 
        .pipe(gulpIf(isDevMode, sourcemaps.init()))
        .pipe(sass())
        .pipe(gcmq())
        .pipe(concat('all.css'))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulpIf(isDevMode, sourcemaps.write()))
        .pipe(gulp.dest('public/css'));
});

gulp.task('assets', function(){
    return gulp.src('frontend/assets/**/*.*', {since: gulp.lastRun('assets')})
        .pipe(gulp.dest('public'));
});

gulp.task('script', function() {
    return gulp.src('frontend/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpIf(isDevMode, uglify()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('styles', 'assets', 'script'))
);

gulp.task('watch', function(){
    gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
    gulp.watch('frontend/js/**/*.*', gulp.series('script'));
});

gulp.task('serve', function(){
    browserSync.init({
        server: "public"
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
})

gulp.task('dev', gulp.series(
    'build', 
    gulp.parallel('watch', 'serve'))
);


