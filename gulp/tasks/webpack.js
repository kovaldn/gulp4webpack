module.exports = function() {
    $.gulp.task('webpack', function() {
        return $.gulp.src('./source/js/pages/index.js')
            .pipe($.gp.webpack({
                entry: {
                    index: './source/js/pages/index.js',
                    about: './source/js/pages/about.js',
                    blog: './source/js/pages/blog.js'
                },
                output: {
                    filename: '[name].js'
                }
            }))
            .pipe($.gulp.dest('./build/assets/js'))
    })
};