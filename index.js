const webpackBootstrapFunc = function () {// webpackBootstrap
  /******/ 	var __webpack_modules__ = ENTRY_MODULE
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {}
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		if (__webpack_module_cache__[moduleId]) {
  /******/ 			return __webpack_module_cache__[moduleId].exports
      /******/
    }
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
      /******/
    }
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports
    /******/
  }
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => module['default'] :
  /******/ 				() => module
  /******/ 			__webpack_require__.d(getter, { a: getter })
  /******/ 			return getter
      /******/
    }
    /******/
  })();
  /******/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for (var key in definition) {
  /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/ 	/* webpack/runtime/global */
  /******/ 	(() => {
  /******/ 		__webpack_require__.g = (function () {
  /******/ 		if (Object.prototype.toString.call(self) === '[object Object]') return self
  /******/ 			try {
  /******/ 				return this || new Function('return this')()
        /******/
      } catch (e) {
  /******/ 				if (Object.prototype.toString.call(window) === '[object Object]') return window
        /******/
      }
      /******/
    })()
    /******/
  })();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  /******/ 	// module factories are used so entry inlining is disabled
  /******/ 	// startup
  /******/ 	// Load entry module
  /******/ 	var result = __webpack_require__(ENTRY_MODULE)
  /******/  return result.default || result
}
webpackBootstrapFunc.toString()
var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)'
function quoteRegExp(str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function isNumeric(n) {
  return !isNaN(1 * n)
}
function getModuleDependencies(sources, module, queueName) {
  var retval = {}
  retval[queueName] = []
  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/) || fnString.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/)
  if (!wrapperSignature) return retval
  var webpackRequireName = wrapperSignature[1]
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
  var match
  while ((match = re.exec(fnString))) {
    if (match[3] === 'dll-reference') continue
    retval[queueName].push(match[3])
  }
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
  while ((match = re.exec(fnString))) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1])
      sources[match[2]] = __webpack_require__(match[1]).m
    }
    retval[match[2]] = retval[match[2]] || []
    retval[match[2]].push(match[4])
  }
  var keys = Object.keys(retval)
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j]
      }
    }
  }
  return retval
}

function hasValuesInQueues(queues) {
  var keys = Object.keys(queues)
  return keys.reduce((hasValues, key) => hasValues || queues[key].length > 0, false)
}
function getRequiredModules(sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  }
  var requiredModules = {
    main: []
  }
  var seenModules = {
    main: {}
  }
  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue)
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i]
      var queue = modulesQueue[queueName]
      var moduleToCheck = queue.pop()
      seenModules[queueName] = seenModules[queueName] || {}
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
      seenModules[queueName][moduleToCheck] = true
      requiredModules[queueName] = requiredModules[queueName] || []
      requiredModules[queueName].push(moduleToCheck)
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
      var newModulesKeys = Object.keys(newModules)
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
      }
    }
  }
  return requiredModules
}
function getWebpackStrting(requiredModules, sources, entryModule, key) {
  let moduleString = requiredModules[key].map((id) => `"${id}": ${sources[key][id].toString()}`).join(",")
  let webpackBootstrapFuncArr = webpackBootstrapFunc.toString().split("ENTRY_MODULE")
  return `${webpackBootstrapFuncArr[0]}{${moduleString}}${webpackBootstrapFuncArr[1]}"${entryModule}"${webpackBootstrapFuncArr[2]}`
}
export default function (moduleId, options) {
  options = options || {}
  var sources = {
    main: __webpack_modules__
  }
  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId)
  var src = ''
  Object.keys(requiredModules).filter((m) => m !== 'main').forEach((module) => {
    var entryModule = 0
    while (requiredModules[module][entryModule]) {
      entryModule++
    }
    requiredModules[module].push(entryModule)
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
    src = src + `var ${module} = (${getWebpackStrting(requiredModules, sources, entryModule, modules)})();\n`
  })
  src = src + `(${getWebpackStrting(requiredModules, sources, moduleId, "main")})();`
  var blob = new window.Blob([src], {
    type: 'text/javascript'
  })
  if (options.bare) {
    return blob
  }
  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL
  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl
  return worker
}