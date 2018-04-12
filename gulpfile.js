/**
 * Created by levy on 2018/4/9.
 */
const gulp = require('gulp');
const lint = require('gulp-eslint');
const nodemon =require('gulp-nodemon');
const babel = require('gulp-babel');

function lintFiles(files) {
    return gulp.src(files)
        .pipe(lint())
        .pipe(lint.format())
}

gulp.task('babel', function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/javascript"));
});

gulp.task('eslint', ()=>lintFiles(['**/*.js', '!node_modules/**']));

gulp.task('eslint_nodemon', ['eslint'], ()=>{
    return nodemon({
        script: './index.js',
        tasks(changeFiles){
            lintFiles(changeFiles)
            return []
        },
        ignore: ['build/**', 'dist/**', '.git', 'node_modules/**']
    })
});

gulp.task('default', ['eslint_nodemon','babel']); //默认开启这个任务