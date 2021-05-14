const { task, watch, src, dest, series, parallel } = require("gulp");
const math = require("gulp-mathjax-node");
const sass = require("gulp-sass");
const cssmin = require("gulp-cssmin");
const pug = require("gulp-pug-3");
const gulpWatch = require("gulp-watch");

task("compilaPug", function (cb) {
  src("./src/content/**/*.pug").pipe(pug()).pipe(math()).pipe(dest("dist"));
  cb();
});

task("compilaSass", function (cb) {
  src("./src/style/*.scss")
    .pipe(sass())
    .pipe(cssmin())
    .pipe(dest("dist/style"));
  cb();
});

task("copiarArchivos", function (cb) {
  src(["./src/content/**/*", "!./src/content/**/*.pug"]).pipe(dest("dist"));
  cb();
});

task("copiarUtilidades", function (cb) {
  src("./src/utils/**/*").pipe(dest("dist/utils"));
  cb();
});

task("watchViejo", function () {
  watch("./src/content/**/*.pug", task("compilaPug"));
  watch("./src/style/*.scss", task("compilaSass"));
  watch(
    ["./src/content/**/*", "!./src/content/**/*.pug"],
    task("copiarArchivos")
  );
  watch("./src/utils/**/*", task("copiarUtilidades"));
});

task(
  "build",
  parallel(
    task("compilaPug"),
    task("compilaSass"),
    task("copiarArchivos"),
    task("copiarUtilidades")
  )
);
task("watch", function () {
  gulpWatch("./src/content/**/*.pug")
    .pipe(pug())
    .pipe(math())
    .pipe(dest("dist"));

  gulpWatch("./src/style/*.scss")
    .pipe(sass())
    .pipe(cssmin())
    .pipe(dest("dist/style"));

  gulpWatch(["./src/content/**/*", "!./src/content/**/*.pug"]).pipe(
    dest("dist")
  );

  gulpWatch("./src/utils/**/*").pipe(dest("dist/utils"));
});
