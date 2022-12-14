/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContextProvider = ({ children  })=>{\n    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const iQty = ()=>{\n        setQty((prevQty)=>prevQty + 1);\n    };\n    const dQty = ()=>{\n        setQty(1);\n    };\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function getItemQuantity(id) {\n        return cartItems.find((item)=>item.id === id)?.quantity || 0;\n    }\n    function increaseCartQuantity(id) {\n        setCartItems((currItems)=>{\n            if (currItems.find((item)=>item.id === id) == null) {\n                return [\n                    ...currItems,\n                    {\n                        id,\n                        quantity: 1\n                    }\n                ];\n            } else {\n                return currItems.map((item)=>{\n                    if (item.id === id) {\n                        return {\n                            ...item,\n                            quantity: item.quantity + 1\n                        };\n                    } else {\n                        return item;\n                    }\n                });\n            }\n        });\n    }\n    function decreaseCartQuantity(id) {\n        setCartItems((currItems)=>{\n            if (currItems.find((item)=>item.id === id)?.quantity === 1) {\n                return currItems.filter((item)=>item.id !== id);\n            } else {\n                return currItems.map((item)=>{\n                    if (item.id === id) {\n                        return {\n                            ...item,\n                            quantity: item.quantity - 1\n                        };\n                    } else {\n                        return item;\n                    }\n                });\n            }\n        });\n    }\n    function removeFromCart(id) {\n        setCartItems((currItems)=>{\n            return currItems.filter((item)=>item.id !== id);\n        });\n    }\n    const value = {\n        qty,\n        dQty,\n        iQty,\n        getItemQuantity,\n        increaseCartQuantity,\n        decreaseCartQuantity,\n        removeFromCart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\context\\\\StateContext.js\",\n        lineNumber: 66,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4RTtBQUU5RSxNQUFNSyx3QkFBVUosb0RBQWFBO0FBRXRCLE1BQU1LLGtCQUFrQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQy9DLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNTyxPQUFPLElBQU07UUFDakJELE9BQU8sQ0FBQ0UsVUFBWUEsVUFBVTtJQUNoQztJQUVBLE1BQU1DLE9BQU8sSUFBTTtRQUNqQkgsT0FBTztJQUNUO0lBRUEsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0MsU0FBU1ksZ0JBQWdCQyxFQUFFLEVBQUU7UUFDM0IsT0FBT0gsVUFBVUksSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtGLEVBQUUsS0FBS0EsS0FBS0csWUFBWTtJQUMvRDtJQUNBLFNBQVNDLHFCQUFxQkosRUFBRSxFQUFFO1FBQ2hDRixhQUFhLENBQUNPLFlBQWM7WUFDMUIsSUFBSUEsVUFBVUosSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtGLEVBQUUsS0FBS0EsT0FBTyxJQUFJLEVBQUU7Z0JBQ3BELE9BQU87dUJBQUlLO29CQUFXO3dCQUFFTDt3QkFBSUcsVUFBVTtvQkFBRTtpQkFBRTtZQUM1QyxPQUFPO2dCQUNMLE9BQU9FLFVBQVVDLEdBQUcsQ0FBQyxDQUFDSixPQUFTO29CQUM3QixJQUFJQSxLQUFLRixFQUFFLEtBQUtBLElBQUk7d0JBQ2xCLE9BQU87NEJBQUUsR0FBR0UsSUFBSTs0QkFBRUMsVUFBVUQsS0FBS0MsUUFBUSxHQUFHO3dCQUFFO29CQUNoRCxPQUFPO3dCQUNMLE9BQU9EO29CQUNULENBQUM7Z0JBQ0g7WUFDRixDQUFDO1FBQ0g7SUFDRjtJQUNBLFNBQVNLLHFCQUFxQlAsRUFBRSxFQUFFO1FBQ2hDRixhQUFhLENBQUNPLFlBQWM7WUFDMUIsSUFBSUEsVUFBVUosSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtGLEVBQUUsS0FBS0EsS0FBS0csYUFBYSxHQUFHO2dCQUM1RCxPQUFPRSxVQUFVRyxNQUFNLENBQUMsQ0FBQ04sT0FBU0EsS0FBS0YsRUFBRSxLQUFLQTtZQUNoRCxPQUFPO2dCQUNMLE9BQU9LLFVBQVVDLEdBQUcsQ0FBQyxDQUFDSixPQUFTO29CQUM3QixJQUFJQSxLQUFLRixFQUFFLEtBQUtBLElBQUk7d0JBQ2xCLE9BQU87NEJBQUUsR0FBR0UsSUFBSTs0QkFBRUMsVUFBVUQsS0FBS0MsUUFBUSxHQUFHO3dCQUFFO29CQUNoRCxPQUFPO3dCQUNMLE9BQU9EO29CQUNULENBQUM7Z0JBQ0g7WUFDRixDQUFDO1FBQ0g7SUFDRjtJQUNBLFNBQVNPLGVBQWVULEVBQUUsRUFBRTtRQUMxQkYsYUFBYSxDQUFDTyxZQUFjO1lBQzFCLE9BQU9BLFVBQVVHLE1BQU0sQ0FBQyxDQUFDTixPQUFTQSxLQUFLRixFQUFFLEtBQUtBO1FBQ2hEO0lBQ0Y7SUFFQSxNQUFNVSxRQUFRO1FBQ1psQjtRQUNBSTtRQUNBRjtRQUNBSztRQUNBSztRQUNBRztRQUNBRTtJQUNGO0lBRUEscUJBQU8sOERBQUNwQixRQUFRc0IsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUW5COzs7Ozs7QUFDMUMsRUFBRTtBQUVGLGlFQUFlRixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29ydXItZ2hhc2gvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGlRdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRRdHkoKHByZXZRdHkpID0+IHByZXZRdHkgKyAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkUXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0UXR5KDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEl0ZW1RdWFudGl0eShpZCkge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk/LnF1YW50aXR5IHx8IDA7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGluY3JlYXNlQ2FydFF1YW50aXR5KGlkKSB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoKGN1cnJJdGVtcykgPT4ge1xyXG4gICAgICBpZiAoY3Vyckl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5jdXJySXRlbXMsIHsgaWQsIHF1YW50aXR5OiAxIH1dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjdXJySXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlY3JlYXNlQ2FydFF1YW50aXR5KGlkKSB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoKGN1cnJJdGVtcykgPT4ge1xyXG4gICAgICBpZiAoY3Vyckl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKT8ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY3Vyckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjdXJySXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGlkKSB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoKGN1cnJJdGVtcykgPT4ge1xyXG4gICAgICByZXR1cm4gY3Vyckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIHF0eSxcclxuICAgIGRRdHksXHJcbiAgICBpUXR5LFxyXG4gICAgZ2V0SXRlbVF1YW50aXR5LFxyXG4gICAgaW5jcmVhc2VDYXJ0UXVhbnRpdHksXHJcbiAgICBkZWNyZWFzZUNhcnRRdWFudGl0eSxcclxuICAgIHJlbW92ZUZyb21DYXJ0LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInF0eSIsInNldFF0eSIsImlRdHkiLCJwcmV2UXR5IiwiZFF0eSIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImdldEl0ZW1RdWFudGl0eSIsImlkIiwiZmluZCIsIml0ZW0iLCJxdWFudGl0eSIsImluY3JlYXNlQ2FydFF1YW50aXR5IiwiY3Vyckl0ZW1zIiwibWFwIiwiZGVjcmVhc2VDYXJ0UXVhbnRpdHkiLCJmaWx0ZXIiLCJyZW1vdmVGcm9tQ2FydCIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.ContextProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQzJCO0FBRTFELFNBQVNDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsa0VBQWVBOzswQkFDZCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7O1lBQUk7Ozs7Ozs7QUFHbEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcnVyLWdoYXNoLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbiAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();