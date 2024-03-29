"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Reviews.jsx":
/*!********************************!*\
  !*** ./components/Reviews.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n// import swiper react components\n\n// import swiper styles\n\n\n// import required modules\n\nconst reviewsData = [\n    {\n        avatar: \"/reviews/avatar-1.jpeg\",\n        name: \"Mortaza Baqeri\",\n        job: \"Fullstack Developer\",\n        review: \"Bonded over an innovation camp, Gurjot impressed me as dedicated and kind. Our shared school and work experiences, including teaching and ambassador roles, highlighted his team spirit and generosity. Excited for future projects together.\"\n    },\n    {\n        avatar: \"/reviews/avatar-2.jpeg\",\n        name: \"Tharusan Julian\",\n        job: \"Backend Developer\",\n        review: \"Gurjot, known for his kindness and eagerness to help, often puts others before himself. His capability in programming and problem-solving is matched by his leadership qualities. Gurjot's combination of technical skills and compassion sets him apart.\"\n    },\n    {\n        avatar: \"/reviews/avatar-3.jpg\",\n        name: \"Okab Mussie\",\n        job: \"Test Engineer\",\n        review: \"Gurjot excels in challenging environments, showing remarkable responsibility and teamwork skills. His helpful nature and leadership abilities stand out, making him a dependable group member.\"\n    }\n];\nconst Reviews = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"mb-12 xl:mb-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"section-title mb-12 text-center mx-auto\",\n                    children: \"Reviews\"\n                }, void 0, false, {\n                    fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    slidesPerView: 1,\n                    breakpoints: {\n                        640: {\n                            slidesPerView: 2\n                        },\n                        1400: {\n                            slidesPerView: 3\n                        }\n                    },\n                    spaceBetween: 30,\n                    modules: [\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Pagination\n                    ],\n                    pagination: {\n                        clickable: true\n                    },\n                    className: \"h-[350px]\",\n                    children: reviewsData.map((person, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                className: \"bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                                        className: \"p-0 mb-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-x-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"rounded-full\",\n                                                    src: person.avatar,\n                                                    width: 70,\n                                                    height: 70,\n                                                    alt: \"\",\n                                                    priority: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-col\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                                            className: \"pt-1\",\n                                                            children: person.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: person.job\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                        className: \"text-lg text-muted-foreground\",\n                                        children: person.review\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gurjotsinghaulakh/Documents/Nextjs React/Frontend/components/Reviews.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Reviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reviews);\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmV2aWV3cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRStCO0FBRTBDO0FBRXpFLGlDQUFpQztBQUNrQjtBQUVuRCx1QkFBdUI7QUFDSDtBQUNXO0FBRS9CLDBCQUEwQjtBQUNrQjtBQUU1QyxNQUFNUSxjQUFjO0lBQ2xCO1FBQ0VDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLFFBQ0E7SUFDRjtJQUNBO1FBQ0VILFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLFFBQ0U7SUFDSjtJQUNBO1FBQ0VILFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLFFBQ0U7SUFDSjtDQUNEO0FBRUQsTUFBTUMsVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUEwQzs7Ozs7OzhCQUV4RCw4REFBQ1YsZ0RBQU1BO29CQUNMYSxlQUFlO29CQUNmQyxhQUFhO3dCQUNYLEtBQUs7NEJBQUVELGVBQWU7d0JBQUU7d0JBQ3hCLE1BQU07NEJBQUVBLGVBQWU7d0JBQUU7b0JBQzNCO29CQUNBRSxjQUFjO29CQUNkQyxTQUFTO3dCQUFDZCxzREFBVUE7cUJBQUM7b0JBQ3JCZSxZQUFZO3dCQUNWQyxXQUFXO29CQUNiO29CQUNBUixXQUFVOzhCQUVUUCxZQUFZZ0IsR0FBRyxDQUFDLENBQUNDLFFBQVFDO3dCQUN4QixxQkFDRSw4REFBQ3BCLHFEQUFXQTtzQ0FDViw0RUFBQ0wsMENBQUlBO2dDQUFDYyxXQUFVOztrREFDZCw4REFBQ1osZ0RBQVVBO3dDQUFDWSxXQUFVO2tEQUNwQiw0RUFBQ0M7NENBQUlELFdBQVU7OzhEQUViLDhEQUFDZixrREFBS0E7b0RBQUNlLFdBQVU7b0RBQ2ZZLEtBQUtGLE9BQU9oQixNQUFNO29EQUNsQm1CLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JDLEtBQUk7b0RBQ0pDLFFBQVE7Ozs7Ozs4REFHViw4REFBQ2Y7b0RBQUlELFdBQVU7O3NFQUNiLDhEQUFDWCwrQ0FBU0E7NERBQUNXLFdBQVU7c0VBQVFVLE9BQU9mLElBQUk7Ozs7OztzRUFDeEMsOERBQUNzQjtzRUFBR1AsT0FBT2QsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSXBCLDhEQUFDVCxxREFBZUE7d0NBQUNhLFdBQVU7a0RBQ3hCVSxPQUFPYixNQUFNOzs7Ozs7Ozs7Ozs7MkJBcEJGYzs7Ozs7b0JBeUJ0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQW5ETWI7QUFxRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdzLmpzeD84NzIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgQ2FyZCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiLi91aS9jYXJkXCI7XG5cbi8vIGltcG9ydCBzd2lwZXIgcmVhY3QgY29tcG9uZW50c1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcblxuLy8gaW1wb3J0IHN3aXBlciBzdHlsZXNcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuXG4vLyBpbXBvcnQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xuXG5jb25zdCByZXZpZXdzRGF0YSA9IFtcbiAge1xuICAgIGF2YXRhcjogXCIvcmV2aWV3cy9hdmF0YXItMS5qcGVnXCIsXG4gICAgbmFtZTogXCJNb3J0YXphIEJhcWVyaVwiLFxuICAgIGpvYjogXCJGdWxsc3RhY2sgRGV2ZWxvcGVyXCIsXG4gICAgcmV2aWV3OlxuICAgIFwiQm9uZGVkIG92ZXIgYW4gaW5ub3ZhdGlvbiBjYW1wLCBHdXJqb3QgaW1wcmVzc2VkIG1lIGFzIGRlZGljYXRlZCBhbmQga2luZC4gT3VyIHNoYXJlZCBzY2hvb2wgYW5kIHdvcmsgZXhwZXJpZW5jZXMsIGluY2x1ZGluZyB0ZWFjaGluZyBhbmQgYW1iYXNzYWRvciByb2xlcywgaGlnaGxpZ2h0ZWQgaGlzIHRlYW0gc3Bpcml0IGFuZCBnZW5lcm9zaXR5LiBFeGNpdGVkIGZvciBmdXR1cmUgcHJvamVjdHMgdG9nZXRoZXIuXCIsXG4gIH0sXG4gIHtcbiAgICBhdmF0YXI6IFwiL3Jldmlld3MvYXZhdGFyLTIuanBlZ1wiLFxuICAgIG5hbWU6IFwiVGhhcnVzYW4gSnVsaWFuXCIsXG4gICAgam9iOiBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIsXG4gICAgcmV2aWV3OlxuICAgICAgXCJHdXJqb3QsIGtub3duIGZvciBoaXMga2luZG5lc3MgYW5kIGVhZ2VybmVzcyB0byBoZWxwLCBvZnRlbiBwdXRzIG90aGVycyBiZWZvcmUgaGltc2VsZi4gSGlzIGNhcGFiaWxpdHkgaW4gcHJvZ3JhbW1pbmcgYW5kIHByb2JsZW0tc29sdmluZyBpcyBtYXRjaGVkIGJ5IGhpcyBsZWFkZXJzaGlwIHF1YWxpdGllcy4gR3Vyam90J3MgY29tYmluYXRpb24gb2YgdGVjaG5pY2FsIHNraWxscyBhbmQgY29tcGFzc2lvbiBzZXRzIGhpbSBhcGFydC5cIixcbiAgfSxcbiAge1xuICAgIGF2YXRhcjogXCIvcmV2aWV3cy9hdmF0YXItMy5qcGdcIixcbiAgICBuYW1lOiBcIk9rYWIgTXVzc2llXCIsXG4gICAgam9iOiBcIlRlc3QgRW5naW5lZXJcIixcbiAgICByZXZpZXc6XG4gICAgICBcIkd1cmpvdCBleGNlbHMgaW4gY2hhbGxlbmdpbmcgZW52aXJvbm1lbnRzLCBzaG93aW5nIHJlbWFya2FibGUgcmVzcG9uc2liaWxpdHkgYW5kIHRlYW13b3JrIHNraWxscy4gSGlzIGhlbHBmdWwgbmF0dXJlIGFuZCBsZWFkZXJzaGlwIGFiaWxpdGllcyBzdGFuZCBvdXQsIG1ha2luZyBoaW0gYSBkZXBlbmRhYmxlIGdyb3VwIG1lbWJlci5cIixcbiAgfSxcbl07XG5cbmNvbnN0IFJldmlld3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMTIgeGw6bWItMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgbWItMTIgdGV4dC1jZW50ZXIgbXgtYXV0b1wiPlJldmlld3M8L2gyPlxuICAgICAgICB7Lyogc2xpZGVyICAqL31cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDY0MDogeyBzbGlkZXNQZXJWaWV3OiAyIH0sXG4gICAgICAgICAgICAxNDAwOiB7IHNsaWRlc1BlclZpZXc6IDMgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XG4gICAgICAgICAgbW9kdWxlcz17W1BhZ2luYXRpb25dfVxuICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzM1MHB4XVwiXG4gICAgICAgID5cbiAgICAgICAgICB7cmV2aWV3c0RhdGEubWFwKChwZXJzb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctdGVydGlhcnkgZGFyazpiZy1zZWNvbmRhcnkvNDAgcC04IG1pbi1oLVszMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInAtMCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogaW1hZ2UgICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwZXJzb24uYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eSBcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBuYW1lICAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicHQtMVwiPntwZXJzb24ubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwZXJzb24uam9ifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwZXJzb24ucmV2aWV3fVxuICAgICAgICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlBhZ2luYXRpb24iLCJyZXZpZXdzRGF0YSIsImF2YXRhciIsIm5hbWUiLCJqb2IiLCJyZXZpZXciLCJSZXZpZXdzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwic2xpZGVzUGVyVmlldyIsImJyZWFrcG9pbnRzIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtYXAiLCJwZXJzb24iLCJpbmRleCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Reviews.jsx\n"));

/***/ })

});