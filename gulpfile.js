var gulp = require('gulp');
var taskListing = require('gulp-task-listing')
var minifyCss = require('gulp-minify-css');

// Um diretório pode ser especificado através de regex.
var cssDir = 'src/css/**/*.css'

/**
 * Tarefa padrão a ser executada pelo gulp.
 */
gulp.task('default', taskListing);

/**
 * Tarefa para listar todas as tarefas a serem executas pelo gulp.
 */
gulp.task('help', taskListing);

/**
 * Tarefa de minificação de css.
 */
gulp.task('minificar-css', function() {
    gulp.src(cssDir)
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css/'));
});

/**
 * Identifica alterações em arquivos no diretório especificado
 * e executa tarefas pré-determinadas.
 */
gulp.task('monitorar-css', function() {
    gulp.watch(cssDir, ['minificar-css']);
});

