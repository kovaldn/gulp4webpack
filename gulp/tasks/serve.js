module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: false,
            server: './build'
        });
        $.browserSync.watch('./build', $.browserSync.reload);
    });
};