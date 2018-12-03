var gulp = require("gulp");

// Plug in the Gulp plugins
var sass = require("gulp-sass"), // переводит SASS в CSS
    cssnano = require("gulp-cssnano"), // Минимизация CSS
    //browsersync = require('browser-sync'), // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    imagemin = require('gulp-imagemin'), // Сжатие изображений
    concat = require("gulp-concat"), // Объединение файлов - конкатенация
    uglify = require("gulp-uglify"), // Минимизация javascript
    rename = require("gulp-rename"), // Переименование файлов
    //jshint = require('gulp-jshint'), // error js
    spritesmith = require('gulp.spritesmith'), //Sprite
    del = require('del'); // Подключаем библиотеку для удаления файлов и папок

/*gulp.task('browser-sync', function() {
 browsersync({
 server: {
 baseDir: 'dist'
 },
 notify: false,
 // open: false,
 // tunnel: true,
 // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
 })
 // Ссылка живет минут 20
 });*/

// clean folder dist
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

// Copy HTML files to the dist folder
gulp.task("html", function() {
    return gulp.src("app/*.html")
        .pipe(gulp.dest("dist"));
});

// Combine, compile Sass in CSS, install Vend. prefixes and further minimization of the code
gulp.task("sass", function() {
    return gulp.src("app/sass/*.scss")
        //.pipe(concat('style.scss'))
        .pipe(sass())
        /*.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))*/
        //.pipe(cssnano())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"));
});

// Joining and Compressing JS Files
gulp.task("libs-css", function() {
    return gulp.src("app/libs/*.css")
        .pipe(concat('libs.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"));
});

// Joining and Compressing JS Files
gulp.task("libs-js", function() {
    return gulp.src("app/libs/*.js") // директория откуда брать исходники
        .pipe(concat('scripts.js')) // объеденим все js-файлы в один
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("app/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task("scripts", function() {
    return gulp.src("app/js/**/*") // директория откуда брать исходники
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});


// Compress the pictures
gulp.task('images', function() {
    return gulp.src("app/images/**/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});

// Compress the pictures
gulp.task('img', function() {
    return gulp.src("app/img/**/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/img"))
});

// SPRITS
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('app/sprites/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                padding: 1,
                //cssTemplate: 'scss.template.mustache',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }//
            }));

    spriteData.img.pipe(gulp.dest('dist/css/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/sass/')); // путь, куда сохраняем стили
});

// error js
/*gulp.task('lint', function() {
 return gulp.src('app/js/*.js')
 .pipe(jshint())
 .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
 });*/

// fonts
var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

// post
var post = gulp.src("app//*.php") // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/'))

// video
var buildFonts = gulp.src('app/video/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/video'))

// The task of tracking changed files
gulp.task("watch", function() {
    gulp.watch("app/*.html", ["html"]);
    gulp.watch("app/js/*.js", ["scripts"]);
    gulp.watch("app/sass/*.scss", ["sass"]);
    gulp.watch("app/images/**/*.+(jpg|jpeg|png|gif)", ["images"]);
    gulp.watch("app/img/**/*.+(jpg|jpeg|png|gif)", ["img"]);
    //gulp.watch('app/*.html', browsersync.reload);
});

///// Tasks ///////////////////////////////////////

// Running Default Tasks
gulp.task("default", ["clean", "html", "sass", "libs-css", "scripts", "libs-js", "images", "img", "sprite", /*"browser-sync",*/ "watch"]);
