const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');



function css() {
    return gulp
        .src('main.scss')
        .pipe(autoprefixer ({
            overrideBrowserList: ['last 2 version'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', //nested, compact, compressed
        }))
        .pipe(gulp.dest('css') ); //Este css se ejecuta de manera automatica, para el css del navegador

}

function watchFiles() {
                gulp.watch('*.scss', css);
                gulp.watch('index.html');
}

// registrar las funciones de las tareas
gulp.task('css', css); // Aca le decimos que se ejecute la tarea
gulp.task('watch', gulp.parallel(watchFiles));