(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/travis/build/DailyCardinalAlumni/DC125/app/assets/scripts/main.js":[function(require,module,exports){
'use strict';

console.log('It is the time you have wasted for your rose that makes your rose so important.');

var hamburger = document.querySelector('.collecticon-hamburger-menu');
var burgerInsides = document.querySelector('.sub-menu');

hamburger.addEventListener('click', function () {
  if (burgerInsides.classList.contains('hidden') || burgerInsides.classList.contains('fadeOut')) {
    burgerInsides.className = 'sub-menu fadeIn';
  } else {
    burgerInsides.className = 'sub-menu fadeOut';
  }
});

},{}]},{},["/home/travis/build/DailyCardinalAlumni/DC125/app/assets/scripts/main.js"])

//# sourceMappingURL=bundle.js.map
