var
        gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        cleanCSS = require('gulp-clean-css'),
        htmlmin = require('gulp-htmlmin'),
        debug = require('gulp-debug'),
        ngAnnotate = require('gulp-ng-annotate'),
        inject = require('gulp-inject'),
        browserSync = require('browser-sync').create(),
        clean = require('gulp-clean'),
        sass = require('gulp-sass');


gulp.task('build-html', function () {
    return  gulp.src('src/**/*.html')
            .pipe(debug())
            .pipe(inject(gulp.src([
                'target/js/vendor.js',
                'target/js/app.min.js',

                'target/css/vendor.css',
                'target/css/app.min.css'
            ]),
                    {ignorePath: 'target', addRootSlash: false}
            ))
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('target'));
});

gulp.task('build-js', function () {
    //app
    gulp.src('src/**/*.js')
            .pipe(debug())
            .pipe(concat('app.min.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest('target/js'));

    //vendor
    return gulp.src([
        "bower_components/angular/angular.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-cookies/angular-cookies.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-sanitize/angular-sanitize.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/angular-ui-notification/dist/angular-ui-notification.min.js"

    ])
            .pipe(debug())
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest('target/js'));
});

gulp.task('build-css', function () {
    //sass
    gulp.src('src/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest('target/css'));


   
    //vendor
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/animate.css/animate.min.css',
        'bower_components/angular-ui-notification/dist/angular-ui-notification.min.css'
    ])
            .pipe(debug())
            .pipe(concat('vendor.css'))
            .pipe(gulp.dest('target/css'));
});

gulp.task('build-other', function () {
    //images
    gulp.src('src/img/*.*')
            .pipe(debug())
            .pipe(gulp.dest('target/img'));
    //web fonts
    gulp.src('bower_components/bootstrap/dist/fonts/*.*')
            .pipe(debug())
            .pipe(gulp.dest('target/fonts'));
});

gulp.task('build', ['build-html', 'build-js', 'build-css', 'build-other']);

gulp.task('serve', ['build', 'watch'], function () {
    browserSync.init({
        server: {
            baseDir: 'target'
        }
    });
});

gulp.task('serve-html', ['build-html'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve-js', ['build-js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve-css', ['build-css'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['serve-html']);
    gulp.watch('src/**/*.js', ['serve-js']);
    gulp.watch(['src/**/*.css', 'src/**/*.scss'], ['serve-css']);
});

gulp.task('clean', function () {
    gulp.src('src/main/resources/static', {read: false})
            .pipe(clean({force: true}));
});

gulp.task('default', ['build']);
        