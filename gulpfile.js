const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});
gulp.task('default', () =>
    gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
);
gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.sass', ['sass']);
});