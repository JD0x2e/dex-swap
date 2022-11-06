"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorisation\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDakM7QUFDSDtBQUU5QixpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsU0FBUyxFQUFFO1FBQ1RILHNFQUFtQixDQUFDO1lBQ2xCSSxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNYQyxPQUFPLEVBQUU7b0JBQ1BDLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNuQjtnQkFDREMsU0FBUyxFQUFFO29CQUNUSCxLQUFLLEVBQUUsV0FBVztvQkFDbEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDbkI7YUFDRjtZQUNELE1BQU1FLFNBQVMsRUFBQ04sV0FBVyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLHlEQUF5RDtvQkFDekQsMkNBQTJDO29CQUMzQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUksU0FBUyxHQUFFLEdBQUdMLFdBQVc7b0JBRTFDLE1BQU1ILG9EQUFhLENBQUM7d0JBQUVXLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7cUJBQUUsQ0FBQyxDQUFDO29CQUU3RCxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEdBQUcsQ0FBQyxNQUFNaEIsMERBQW1CLENBQUM7d0JBQUVJLE9BQU87d0JBQUVJLFNBQVM7d0JBQUVXLE9BQU8sRUFBRSxLQUFLO3FCQUFFLENBQUMsQ0FBQyxDQUFDQyxHQUFHO29CQUV0RyxNQUFNQyxJQUFJLEdBQUc7d0JBQUVOLE9BQU87d0JBQUVDLFNBQVM7d0JBQUVSLFNBQVM7cUJBQUU7b0JBQzlDLG9EQUFvRDtvQkFDcEQsT0FBT2EsSUFBSSxDQUFDO2lCQUNiLENBQUMsT0FBT0MsQ0FBQyxFQUFFO29CQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7SUFDRCw4Q0FBOEM7SUFDOUNHLFNBQVMsRUFBRTtRQUNULE1BQU1DLEdBQUcsRUFBQyxFQUFFQyxLQUFLLEdBQUVOLElBQUksR0FBRSxFQUFFO1lBQ3pCQSxJQUFJLElBQUksQ0FBQ00sS0FBSyxDQUFDTixJQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFDO1lBQzVCLE9BQU9NLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTUMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUQsS0FBSyxHQUFFLEVBQUU7WUFDaENDLE9BQU8sQ0FBQ1AsSUFBSSxHQUFHTSxLQUFLLENBQUNOLElBQUksQ0FBQztZQUMxQixPQUFPTyxPQUFPLENBQUM7U0FDaEI7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNhdXRoLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSBcIm1vcmFsaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiTW9yYWxpc0F1dGhcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICBsYWJlbDogXCJNZXNzYWdlXCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMHgwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIGxhYmVsOiBcIlNpZ25hdHVyZVwiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjB4MFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFwibWVzc2FnZVwiIGFuZCBcInNpZ25hdHVyZVwiIGFyZSBuZWVkZWQgZm9yIGF1dGhvcmlzYXRpb25cbiAgICAgICAgICAvLyB3ZSBkZXNjcmliZWQgdGhlbSBpbiBcImNyZWRlbnRpYWxzXCIgYWJvdmVcbiAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSB9ID0gY3JlZGVudGlhbHM7XG5cbiAgICAgICAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHByb2ZpbGVJZCB9ID0gKGF3YWl0IE1vcmFsaXMuQXV0aC52ZXJpZnkoeyBtZXNzYWdlLCBzaWduYXR1cmUsIG5ldHdvcms6IFwiZXZtXCIgfSkpLnJhdztcblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IGFkZHJlc3MsIHByb2ZpbGVJZCwgc2lnbmF0dXJlIH07XG4gICAgICAgICAgLy8gcmV0dXJuaW5nIHRoZSB1c2VyIG9iamVjdCBhbmQgY3JlYXRpbmcgIGEgc2Vzc2lvblxuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgLy8gYWRkaW5nIHVzZXIgaW5mbyB0byB0aGUgdXNlciBzZXNzaW9uIG9iamVjdFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJNb3JhbGlzIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2lnbmF0dXJlIiwiYXV0aG9yaXplIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsInByb2ZpbGVJZCIsIkF1dGgiLCJ2ZXJpZnkiLCJuZXR3b3JrIiwicmF3IiwidXNlciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();