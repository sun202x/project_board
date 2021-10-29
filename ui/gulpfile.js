const webserver = require('gulp-webserver'),
    typescript = require('rollup-plugin-typescript2'),
    rollup = require('rollup'),
    resolve = require('@rollup/plugin-node-resolve'),
    commonjs = require('@rollup/plugin-commonjs'),
    injectProcessEnv = require('rollup-plugin-inject-process-env'),
    gulp = require('gulp');

gulp.task('build', () => {
    return rollup
        .rollup({
            input: './src/index.tsx',
            // external: ['react', 'react-dom'],
            plugins: [
                resolve.nodeResolve(),
                commonjs(),
                typescript(),
                injectProcessEnv({
                    NODE_ENV: 'production'
                }),
            ]
        })
        .then(bundle => {
            return bundle.write({
                file: './dist/index.js',
                format: 'umd',
                name: 'Main',
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            });
        });
});

gulp.task('copy-html', function() {
    return gulp.src('./public/index.html')
        .pipe(gulp.dest('dist'));
});

// gulp 서버
gulp.task('webserver', function () {
    gulp.src('./dist')
        .pipe(webserver({
            fallback: "index.html",
            livereload: true,
            open: true,
            port: 8080
        }));
});

gulp.task('default', gulp.series(['build', 'copy-html', 'webserver']));