See issues https://github.com/ivogabe/gulp-typescript/issues/90 and https://github.com/ivogabe/gulp-typescript/issues/134

Commands to execute:

- ./node_modules/.bin/gulp => compiles everything

- ./node_modules/.bin/gulp styles => compiles app/_all.ts to .tmp/app/app.js + .tmp/app/app.js.map
- ./node_modules/.bin/gulp styles:test => compiles test/unit/_all.ts to .tmp/test/unit/test.js + .tmp/test/unit/test.js.map

- ./node_modules/.bin/gulp scripts => compiles app/app.scss to .tmp/test/unit/app.css + .tmp/test/unit/app.css.map
- ./node_modules/.bin/gulp scripts:test => compiles test/unit/test.scss to .tmp/test/unit/test.css + .tmp/test/unit/test.css.map

To check source maps, launch index.html and your browser dev tools.
