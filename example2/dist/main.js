webpackJsonp([1],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

const moment = __webpack_require__(0);
const _ = __webpack_require__(120);
const ele = document.querySelectorAll('p');

document.addEventListener("DOMContentLoaded", function(event) {
    ele[0].innerText = moment().format();
    ele[1].innerText = _.drop([1, 2, 3], 0);
});

/***/ })

},[121]);