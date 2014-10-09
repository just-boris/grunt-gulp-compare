# Gulp vs Grunt benchmark

## Setup

* `npm install -g gulp grunt`
* `npm install && bower install`

## Test cases

* `gulp` &mdash; simple gulp build
* `grunt` &mdash; same with grunt 
* `grunt --gruntfile Gruntfile_concurrent.js` &mdash; grunt with concurrent plugin for running tasks in parallel
* `make` &mdash; use Makefile

Use `time` to know how long takes each builder

## Single tasks

You can compare on single tasks `js` and `css` by calling, for example, `gulp js` and `grunt js`
