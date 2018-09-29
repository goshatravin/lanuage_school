'use strict';

var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});


// sass

gulp.task('sass',function(){
    return gulp.src('src/assets/sass/*.scss')
      .pipe(gp.plumber())
      .pipe(gp.sass({}))
      .pipe(gp.csso())
      .pipe(gp.autoprefixer({
        browsers: ['last 3 versions']

    }))
      .pipe(gp.csso())
      .pipe(gulp.dest('app/assets/css'))
      .pipe(browserSync.reload({
            stream: true
      }));
});

// pug

gulp.task('pug',function(){
    return gulp.src('src/html/index.html')
      .pipe(gp.plumber())
    //   .pipe(gp.pug({
    //       pretty: true
    //   }))
      .pipe(gulp.dest('app'))
      .on('end', browserSync.reload);

})

// js


gulp.task('scripts',function(){
    return gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/jquery.maskedinput/src/jquery.maskedinput.js'])
      .pipe(gp.concat('libs.min.js'))
      .pipe(gp.plumber())
      .pipe(gulp.dest('app/assets/js'))
      .pipe(browserSync.reload({
            stream: true
      }));
});


gulp.task('scripts:main',function(){
    return gulp.src('src/assets/js/main.js')
      .pipe(gp.plumber())
      .pipe(gulp.dest('app/assets/js'))
      .pipe(browserSync.reload({
            stream: true
      }));
});

// img 

gulp.task('img:dev',function(){
    return gulp.src('src/assets/img/*.{png,jpg,gif}')
    .pipe(gulp.dest('app/assets/img'));

})

gulp.task('img:build',function(){
    return gulp.src('src/assets/img/*.{png,jpg,gif}')
    .pipe(gp.tinypng('TiOzhXUPEiJxKclh6OgzYeyNH5nZROn1'))
    .pipe(gulp.dest('app/assets/img'));

})

// watch

gulp.task('watch', function(){
    gulp.watch('src/html/*.html',  gulp.series('pug'))
    gulp.watch('src/assets/sass/*.scss', gulp.series('sass'))
    gulp.watch('src/assets/js/main.js', gulp.series('scripts:main'))
    gulp.watch('src/assets/img/*', gulp.series('img:dev'))
});


// default 

gulp.task('default',gulp.series(
    gulp.parallel('sass', 'pug','scripts','scripts:main','img:dev'),
    gulp.parallel('watch','serve')

));


// img

gulp.task('build',gulp.series(
    gulp.parallel('sass', 'pug','scripts','scripts:main','img:build'),
    gulp.parallel('watch','serve')

));