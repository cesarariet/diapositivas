"use strict";

const gulp = require("gulp");
const { src, dest, parallel } = gulp;
const sass = require("gulp-sass");
const pug = require("gulp-pug-3");
const math = require("gulp-mathjax-node");
sass.compiler = require("node-sass");

function compiladorPug(cb) {
  src("./**/*.pug").pipe(pug()).pipe(math()).pipe(dest("./dist"));
  console.log("Compilando archivos pug");
  cb();
}

function compiladorSass(cb) {
  src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/estilos"));
  console.log("Compilando sass");
  cb();
}
function pugWatch(cb) {
  // Mira las plantillas en contenidos
  gulp.watch("./src/**/*.pug", function (cb) {
    console.log("Revisando contenido");
    compiladorPug(cb);
  });
  cb();
}
function scssWatch(cb) {
  // Mira los estilos globales
  gulp.watch("./src/**/*.scss", function (cb) {
    console.log("Revisando estilos globales");
    compiladorSass(cb);
  });
  cb();
}
function jsWatch(cb) {
  // Mira los script globales
  gulp.watch("./src/**/*.js", function (cb) {
    console.log("Pasando js");
    src("./src/contenido/**/*.js").pipe(dest("./dist"));
    cb();
  });
  cb();
}

exports.default = parallel(pugWatch, scssWatch, jsWatch);
