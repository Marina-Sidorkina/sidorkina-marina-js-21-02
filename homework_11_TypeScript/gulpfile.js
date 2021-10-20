const gulp = require("gulp");
const browserify = require("browserify");
const tsify = require("tsify");
const source = require("vinyl-source-stream");
const watchify = require("watchify");
const fancyLog = require("fancy-log");
const browserSync = require("browser-sync").create();

const whatchifyBrowserify = watchify(browserify(
  {
    basedir: ".",
    entries: ["source/ts/index.ts"],
    cache: {},
    debug: true,
    packageCache: {}
  })
  .plugin(tsify)
)

const server = () => {
  browserSync.init({
    server: { baseDir: "build/" },
    notify: false,
    online: true
  })
}

const copyFiles = () => {
  return gulp.src(["source/**/*.html", "source/**/*.css"])
    .pipe(gulp.dest("build"))
}

const bundle = () => whatchifyBrowserify
  .bundle()
  .on("error", fancyLog)
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("build"))

function watcher() {
  gulp.watch("source/css/**/*").on("change", gulp.series(copyFiles, browserSync.reload));
  gulp.watch("source/**/*.html").on("change", gulp.series(copyFiles, browserSync.reload));
}

exports.default = gulp.series(copyFiles, bundle, gulp.parallel(server, watcher));
whatchifyBrowserify.on("update", gulp.series(bundle, browserSync.reload));
whatchifyBrowserify.on("log", fancyLog);
