const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const imagecomp = require("compress-images");
const del = require("del");

function browsersync() {
  browserSync.init({
    server: { baseDir: "source/" },
    notify: false,
    online: true
  })
}

function scripts() {
  return src([
    "source/js/createNewDomElement.js",
    "source/js/records.js",
    "source/js/theme.js",
    "source/js/form.js"
  ])
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(dest("source/js/"))
    .pipe(browserSync.stream())
}

function styles() {
  return src("source/sass/index.scss")
    .pipe(sass())
    .pipe(concat("index.min.css"))
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 3 versions"],
      grid: true
    }))
    .pipe(cleancss({
      level: {
        1: {
          specialComments: 0
        }
      }
    }))
    .pipe(dest("source/css/"))
    .pipe(browserSync.stream())
}

async function images() {
  imagecomp(
    "source/images/src/**/*",
    "source/images/dest/",
    { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "75"] } },
    { png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (err, completed) {
      if (completed === true) {
        browserSync.reload()
      }
    }
  )
}

function cleanimg() {
  return del("source/images/dest/**/*", { force: true })
}

function watcher() {
  watch(["source/**/*.js", "!source/**/*.min.js"], scripts);
  watch("source/**/sass/**/*", styles);
  watch("source/**/*.html").on("change", browserSync.reload);
  watch("source/images/src/**/*", images);
}

function buildcopy() {
  return src([
    "source/css/**/*.min.css",
    "source/js/**/*.min.js",
    "source/images/dest/**/*",
    "source/**/*.html",
  ], { base: "source" })
    .pipe(dest("build"))
}

function cleanbuild() {
  return del("build/**/*", { force: true })
}
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(styles, scripts, images, browsersync, watcher);
exports.build = series(cleanbuild, styles, scripts, images, buildcopy);
