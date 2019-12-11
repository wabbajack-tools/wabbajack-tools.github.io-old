const { src, dest, series } = require('gulp');
const run = require('gulp-run');
const change = require('gulp-change');
const rename = require('gulp-rename');

function reactBuild(){
    return run('npm run build').exec();
}

function moveFiles(){
    return src(['./public/CNAME', './public/404.html', './README.md','./LICENSE.txt'])
    .pipe(dest('./build/'));
}

function ghDeploy(){
    return run('npm run publish').exec();
}

exports.deploy = series(reactBuild, moveFiles, ghDeploy);
