const { parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();

function browsersync() {
  browserSync.init({
    server: { baseDir: "./" },
    notify: false,
    online: true
  })
}

function watcher() {
  watch("./**/*").on("change", browserSync.reload);
}

exports.browsersync = browsersync;

exports.default = parallel(browsersync, watcher);
