/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
		function App() {
			_classCallCheck(this, App);

			this.todoInput = document.querySelector('.todo__input');
			this.todoList = document.querySelector('.todo__list');
			this.addEvents();
		}

		_createClass(App, [{
			key: 'addEvents',
			value: function addEvents() {
				var _this = this;

				document.addEventListener('click', function (e) {
					if (e.target.localName === 'li') {
						e.target.classList.toggle('todo--completed');
					}

					if (e.target.localName === 'span') {
						var todo = e.target;
						_this.deleteTodo(todo);
					}
				});

				this.todoInput.addEventListener('keydown', function (e) {
					// if the key is Return key
					if (e.keyCode === 13) {
						_this.addTodo();
					}
				});
			}
		}, {
			key: 'addTodo',
			value: function addTodo() {
				var li = document.createElement('li');
				var span = document.createElement('span');

				li.append(this.todoInput.value);
				this.todoInput.value = "";

				span.append('x');
				li.append(span);

				this.todoList.append(li);
			}
		}, {
			key: 'deleteTodo',
			value: function deleteTodo(todo) {
				todo.parentElement.remove();
			}
		}]);

		return App;
	}();

	exports.default = new App();

/***/ }
/******/ ]);