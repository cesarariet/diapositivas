const { task, watch, src, dest } = require("gulp");
const math = require("gulp-mathjax-node");
const inject = require("gulp-inject");
const sass = require("gulp-sass");
const cssmin = require("gulp-cssmin");
const pug = require("gulp-pug-3");
const { default: gulpConfig } = require("./gulp.config");

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

task("watch", function () {
  watch("./src/content/**/*.pug", task("compilaPug"));
  watch("./src/style/*.scss", task("compilaSass"));
  watch(
    ["./src/content/**/*", "!./src/content/**/*.pug"],
    task("copiarArchivos")
  );
});
