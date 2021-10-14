const { src, dest, parallel, series, watch } = require("gulp");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");

function server() {
  browsersync.init({
    server: { baseDir: "source/" },
    notify: false,
    online: true
  })
}

function scripts() {
  return src([
    "source/js/tasks.js",
    "source/js/index.js"
	])
	.pipe(concat("index.min.js"))
	.pipe(uglify())
	.pipe(dest("source/js/"))
	.pipe(browsersync.stream())
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
	.pipe(browsersync.stream())
}

function watcher() {
 	watch(["source/**/*.js", "!source/**/*.min.js"], scripts);
 	watch("source/**/sass/**/*", styles);
 	watch("source/**/*.html").on("change", browsersync.reload);
}

function build() {
	return src([
		"source/css/**/*.min.css",
		"source/js/**/*.min.js",
		"source/**/*.html",
		], { base: "source" })
	.pipe(dest("build"))
}

exports.server = server;
exports.scripts = scripts;
exports.styles = styles;

exports.default = parallel(styles, scripts, server, watcher);
exports.build = series(styles, scripts, build);
