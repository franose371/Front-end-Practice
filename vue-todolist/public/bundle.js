/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nVue.component('my-component', {\n\ttemplate: '<li @click=\"finished\">{{data}}<button class=\"show\" :style=\"{display:status}\" @click.stop=\"del\">完成</button></li>',\n\tprops: [\"data\", \"status\"],\n\tmethods: {\n\t\tfinished: function finished() {\n\t\t\tthis.$emit('togglefinish');\n\t\t},\n\t\tdel: function del() {\n\t\t\tthis.$emit('delitem');\n\t\t}\n\t}\n});\n\nnew Vue({\n\tel: \"#todolist\",\n\tdata: {\n\t\titems: [],\n\t\tnextItemId: 0,\n\t\tmyItem: \"\"\n\t},\n\tmethods: {\n\t\taddItem: function addItem() {\n\t\t\tthis.items.push({\n\t\t\t\t\"id\": ++this.nextItemId,\n\t\t\t\t\"content\": this.myItem,\n\t\t\t\t\"isFinished\": false,\n\t\t\t\t\"display\": \"none\"\n\t\t\t});\n\t\t\tthis.myItem = \"\";\n\t\t},\n\t\ttoggleItem: function toggleItem(item) {\n\t\t\titem.isFinished = !item.isFinished;\n\t\t\tif (item.display === \"none\") {\n\t\t\t\titem.display = \"inline-block\";\n\t\t\t} else {\n\t\t\t\titem.display = \"none\";\n\t\t\t}\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsInRlbXBsYXRlIiwicHJvcHMiLCJtZXRob2RzIiwiZmluaXNoZWQiLCIkZW1pdCIsImRlbCIsImVsIiwiZGF0YSIsIml0ZW1zIiwibmV4dEl0ZW1JZCIsIm15SXRlbSIsImFkZEl0ZW0iLCJwdXNoIiwidG9nZ2xlSXRlbSIsIml0ZW0iLCJpc0ZpbmlzaGVkIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsSUFBSUMsU0FBSixDQUFjLGNBQWQsRUFBOEI7QUFDN0JDLFdBQVUsaUhBRG1CO0FBRTdCQyxRQUFPLENBQUMsTUFBRCxFQUNOLFFBRE0sQ0FGc0I7QUFLN0JDLFVBQVM7QUFDUkMsWUFBVSxvQkFBVztBQUNwQixRQUFLQyxLQUFMLENBQVcsY0FBWDtBQUNBLEdBSE87QUFJUkMsT0FBSyxlQUFXO0FBQ2YsUUFBS0QsS0FBTCxDQUFXLFNBQVg7QUFDQTtBQU5PO0FBTG9CLENBQTlCOztBQWVBLElBQUlOLEdBQUosQ0FBUTtBQUNQUSxLQUFJLFdBREc7QUFFUEMsT0FBTTtBQUNMQyxTQUFPLEVBREY7QUFFTEMsY0FBWSxDQUZQO0FBR0xDLFVBQVE7QUFISCxFQUZDO0FBT1BSLFVBQVM7QUFDUlMsV0FBUyxtQkFBVztBQUNuQixRQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0I7QUFDZixVQUFNLEVBQUUsS0FBS0gsVUFERTtBQUVmLGVBQVcsS0FBS0MsTUFGRDtBQUdmLGtCQUFjLEtBSEM7QUFJZixlQUFXO0FBSkksSUFBaEI7QUFNQSxRQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNBLEdBVE87QUFVUkcsY0FBWSxvQkFBU0MsSUFBVCxFQUFlO0FBQzFCQSxRQUFLQyxVQUFMLEdBQWtCLENBQUNELEtBQUtDLFVBQXhCO0FBQ0EsT0FBSUQsS0FBS0UsT0FBTCxLQUFpQixNQUFyQixFQUE2QjtBQUM1QkYsU0FBS0UsT0FBTCxHQUFlLGNBQWY7QUFDQSxJQUZELE1BRU87QUFDTkYsU0FBS0UsT0FBTCxHQUFlLE1BQWY7QUFDQTtBQUNEO0FBakJPO0FBUEYsQ0FBUiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLmNvbXBvbmVudCgnbXktY29tcG9uZW50Jywge1xyXG5cdHRlbXBsYXRlOiAnPGxpIEBjbGljaz1cImZpbmlzaGVkXCI+e3tkYXRhfX08YnV0dG9uIGNsYXNzPVwic2hvd1wiIDpzdHlsZT1cIntkaXNwbGF5OnN0YXR1c31cIiBAY2xpY2suc3RvcD1cImRlbFwiPuWujOaIkDwvYnV0dG9uPjwvbGk+JyxcclxuXHRwcm9wczogW1wiZGF0YVwiLFxyXG5cdFx0XCJzdGF0dXNcIlxyXG5cdF0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0ZmluaXNoZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCd0b2dnbGVmaW5pc2gnKTtcclxuXHRcdH0sXHJcblx0XHRkZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdkZWxpdGVtJyk7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbm5ldyBWdWUoe1xyXG5cdGVsOiBcIiN0b2RvbGlzdFwiLFxyXG5cdGRhdGE6IHtcclxuXHRcdGl0ZW1zOiBbXSxcclxuXHRcdG5leHRJdGVtSWQ6IDAsXHJcblx0XHRteUl0ZW06IFwiXCJcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFkZEl0ZW06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLml0ZW1zLnB1c2goe1xyXG5cdFx0XHRcdFwiaWRcIjogKyt0aGlzLm5leHRJdGVtSWQsXHJcblx0XHRcdFx0XCJjb250ZW50XCI6IHRoaXMubXlJdGVtLFxyXG5cdFx0XHRcdFwiaXNGaW5pc2hlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcImRpc3BsYXlcIjogXCJub25lXCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubXlJdGVtID0gXCJcIjtcclxuXHRcdH0sXHJcblx0XHR0b2dnbGVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGl0ZW0uaXNGaW5pc2hlZCA9ICFpdGVtLmlzRmluaXNoZWQ7XHJcblx0XHRcdGlmIChpdGVtLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpdGVtLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);