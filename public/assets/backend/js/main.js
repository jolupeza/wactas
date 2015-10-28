/*! watson-actas 1.0.0 scripts.js 2015-10-28 10:26:06 AM */
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var document = window.document, version = "2.1.4", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
            return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
        },
        isPlainObject: function(obj) {
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            return true;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (;j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (;i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: Date.now,
        support: support
    });
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = "length" in obj && obj.length, type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true;
            }
            return 0;
        }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for (;i < len; i++) {
                if (list[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
            setDocument();
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            nodeType = context.nodeType;
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
            }
            if (!seed && documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    } else if ((m = match[3]) && support.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType !== 1 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = attrs.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            parent = doc.defaultView;
            if (parent && parent !== parent.top) {
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false);
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler);
                }
            }
            documentIsHTML = !isXML(doc);
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag);
                } else if (support.qsa) {
                    return context.querySelectorAll(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                assert(function(div) {
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            sortInput = null;
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                while (node = elem[i++]) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var oldCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                return newCache[2] = oldCache[2];
                            } else {
                                outerCache[dir] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                if (outermost) {
                    outermostContext = context !== document && context;
                }
                for (;i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!match) {
                    match = tokenize(selector);
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector;
            }
            return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) {
                        break;
                    }
                    if (find = Expr.find[type]) {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
            });
        }
        return Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) >= 0 !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context) {
        var match, elem;
        if (!selector) {
            return this;
        }
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [ null, selector, null ];
            } else {
                match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {
                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match]);
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }
                    return this;
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem && elem.parentNode) {
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else if (!context || context.jquery) {
                return (context || rootjQuery).find(selector);
            } else {
                return this.constructor(context).find(selector);
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.extend({
        dir: function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        },
        sibling: function(n, elem) {
            var matched = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        }
    });
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (;i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.unique(matched);
                }
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g;
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                if (list && (!fired || stack)) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        jQuery.ready();
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);
            }
        }
        return readyList.promise(obj);
    };
    jQuery.ready.promise();
    var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (;i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    jQuery.acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        });
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.accepts = jQuery.acceptData;
    Data.prototype = {
        key: function(owner) {
            if (!Data.accepts(owner)) {
                return 0;
            }
            var descriptor = {}, unlock = owner[this.expando];
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    };
                    Object.defineProperties(owner, descriptor);
                } catch (e) {
                    descriptor[this.expando] = unlock;
                    jQuery.extend(owner, descriptor);
                }
            }
            if (!this.cache[unlock]) {
                this.cache[unlock] = {};
            }
            return unlock;
        },
        set: function(owner, data, value) {
            var prop, unlock = this.key(owner), cache = this.cache[unlock];
            if (typeof data === "string") {
                cache[data] = value;
            } else {
                if (jQuery.isEmptyObject(cache)) {
                    jQuery.extend(this.cache[unlock], data);
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop];
                    }
                }
            }
            return cache;
        },
        get: function(owner, key) {
            var cache = this.cache[this.key(owner)];
            return key === undefined ? cache : cache[key];
        },
        access: function(owner, key, value) {
            var stored;
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
            if (key === undefined) {
                this.cache[unlock] = {};
            } else {
                if (jQuery.isArray(key)) {
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key);
                    if (key in cache) {
                        name = [ key, camel ];
                    } else {
                        name = camel;
                        name = name in cache ? [ name ] : name.match(rnotwhite) || [];
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            }
        },
        hasData: function(owner) {
            return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
        },
        discard: function(owner) {
            if (owner[this.expando]) {
                delete this.cache[owner[this.expando]];
            }
        }
    };
    var data_priv = new Data();
    var data_user = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                data_user.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        data: function(elem, name, data) {
            return data_user.access(elem, name, data);
        },
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return data_priv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);
                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        data_priv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    data_user.set(this, key);
                });
            }
            return access(this, function(value) {
                var data, camelKey = jQuery.camelCase(key);
                if (elem && value === undefined) {
                    data = data_user.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }
                    return;
                }
                this.each(function() {
                    var data = data_user.get(this, camelKey);
                    data_user.set(this, camelKey, value);
                    if (key.indexOf("-") !== -1 && data !== undefined) {
                        data_user.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                data_user.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = data_priv.get(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = data_priv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = data_priv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };
    var rcheckableType = /^(?:checkbox|radio)$/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin" in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                data_priv.remove(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && jQuery.acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (data_priv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur !== this; cur = cur.parentNode || this) {
                    if (cur.disabled !== true || event.type !== "click") {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && e.preventDefault) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    data_priv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        data_priv.remove(doc, fix);
                    } else {
                        data_priv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (;i < l; i++) {
            data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        }
        if (data_priv.hasData(src)) {
            pdataOld = data_priv.access(src);
            pdataCur = data_priv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }
        if (data_user.hasData(src)) {
            udataOld = data_user.access(src);
            udataCur = jQuery.extend({}, udataOld);
            data_user.set(dest, udataCur);
        }
    }
    function getAll(context, tag) {
        var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        },
        cleanData: function(elems) {
            var data, elem, type, key, special = jQuery.event.special, i = 0;
            for (;(elem = elems[i]) !== undefined; i++) {
                if (jQuery.acceptData(elem)) {
                    key = elem[data_priv.expando];
                    if (key && (data = data_priv.cache[key])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (data_priv.cache[key]) {
                            delete data_priv.cache[key];
                        }
                    }
                }
                delete data_user.cache[elem[data_user.expando]];
            }
        }
    });
    jQuery.fn.extend({
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var arg = arguments[0];
            this.domManip(arguments, function(elem) {
                arg = this.parentNode;
                jQuery.cleanData(getAll(this));
                if (arg) {
                    arg.replaceChild(elem, this);
                }
            });
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, callback) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {};
    function actualDisplay(name, doc) {
        var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
        elem.detach();
        return display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = iframe[0].contentDocument;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        if (elem.ownerDocument.defaultView.opener) {
            return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
        }
        return window.getComputedStyle(elem, null);
    };
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
        }
        if (computed) {
            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }
            if (rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return;
                }
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    (function() {
        var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        container.appendChild(div);
        function computePixelPositionAndBoxSizingReliable() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            div.innerHTML = "";
            docElem.appendChild(container);
            var divStyle = window.getComputedStyle(div, null);
            pixelPositionVal = divStyle.top !== "1%";
            boxSizingReliableVal = divStyle.width === "4px";
            docElem.removeChild(container);
        }
        if (window.getComputedStyle) {
            jQuery.extend(support, {
                pixelPosition: function() {
                    computePixelPositionAndBoxSizingReliable();
                    return pixelPositionVal;
                },
                boxSizingReliable: function() {
                    if (boxSizingReliableVal == null) {
                        computePixelPositionAndBoxSizingReliable();
                    }
                    return boxSizingReliableVal;
                },
                reliableMarginRight: function() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    docElem.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
                    docElem.removeChild(container);
                    div.removeChild(marginDiv);
                    return ret;
                }
            });
        }
    })();
    jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = data_priv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || value !== value) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return jQuery.swap(elem, {
                display: "inline-block"
            }, curCSS, [ elem, "marginRight" ]);
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3];
                parts = parts || [];
                start = +target || 1;
                do {
                    scale = scale || ".5";
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            if (parts) {
                start = tween.start = +start || +target || 0;
                tween.unit = unit;
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = data_priv.access(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || data_priv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = data_priv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = data_priv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function() {
                clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === strundefined) {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = arguments.length === 0 || typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        finalValue = value ? jQuery.trim(cur) : "";
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (type === strundefined || type === "boolean") {
                    if (this.className) {
                        data_priv.set(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(option.value, values) >= 0) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var nonce = jQuery.now();
    var rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    };
    jQuery.parseXML = function(data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = window.location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    };
    jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    if (window.attachEvent) {
        window.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key]();
            }
        });
    }
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr(), id = ++xhrId;
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }
                    callback = function(type) {
                        return function() {
                            if (callback) {
                                delete xhrCallbacks[id];
                                callback = xhr.onload = xhr.onerror = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    complete(xhr.status, xhr.statusText);
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {
                                        text: xhr.responseText
                                    } : undefined, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    xhr.onload = callback();
                    xhr.onerror = callback("error");
                    callback = xhrCallbacks[id] = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        if (callback) {
                            throw e;
                        }
                    }
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        async: true,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        if (parsed) {
            return [ context.createElement(parsed[1]) ];
        }
        parsed = jQuery.buildFragment([ data ], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    var docElem = window.document.documentElement;
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            if (typeof elem.getBoundingClientRect !== strundefined) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var _jQuery = window.jQuery, _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    if (typeof noGlobal === strundefined) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});

if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");
}

+function($) {
    "use strict";
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
    }
}(jQuery);

+function($) {
    "use strict";
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                };
            }
        }
        return false;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = true;
        });
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
    };
    $(function() {
        $.support.transition = transitionEnd();
        if (!$.support.transition) return;
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);

+function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.5";
    Alert.TRANSITION_DURATION = 150;
    Alert.prototype.close = function(e) {
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = $(selector);
        if (e) e.preventDefault();
        if (!$parent.length) {
            $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            $parent.detach().trigger("closed.bs.alert").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.alert");
            if (!data) $this.data("bs.alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    };
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery);

+function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };
    Button.VERSION = "3.3.5";
    Button.DEFAULTS = {
        loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state += "Text";
        if (data.resetText == null) $el.data("resetText", $el[val]());
        setTimeout($.proxy(function() {
            $el[val](data[state] == null ? this.options[state] : data[state]);
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d).attr(d, d);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d).removeAttr(d);
            }
        }, this), 0);
    };
    Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked")) changed = false;
                $parent.find(".active").removeClass("active");
                this.$element.addClass("active");
            } else if ($input.prop("type") == "checkbox") {
                if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
                this.$element.toggleClass("active");
            }
            $input.prop("checked", this.$element.hasClass("active"));
            if (changed) $input.trigger("change");
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            this.$element.toggleClass("active");
        }
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.button");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this;
    };
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
        Plugin.call($btn, "toggle");
        if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery);

+function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    };
    Carousel.VERSION = "3.3.5";
    Carousel.TRANSITION_DURATION = 600;
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: true,
        keyboard: true
    };
    Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();
            break;

          case 39:
            this.next();
            break;

          default:
            return;
        }
        e.preventDefault();
    };
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this;
    };
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active);
    };
    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == "prev" ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
    };
    Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > this.$items.length - 1 || pos < 0) return;
        if (this.sliding) return this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        });
        if (activeIndex == pos) return this.pause().cycle();
        return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
    };
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $.support.transition) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
    };
    Carousel.prototype.next = function() {
        if (this.sliding) return;
        return this.slide("next");
    };
    Carousel.prototype.prev = function() {
        if (this.sliding) return;
        return this.slide("prev");
    };
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var that = this;
        if ($next.hasClass("active")) return this.sliding = false;
        var relatedTarget = $next[0];
        var slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
            $nextIndicator && $nextIndicator.addClass("active");
        }
        var slidEvent = $.Event("slid.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        if ($.support.transition && this.$element.hasClass("slide")) {
            $next.addClass(type);
            $next[0].offsetWidth;
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one("bsTransitionEnd", function() {
                $next.removeClass([ type, direction ].join(" ")).addClass("active");
                $active.removeClass([ "active", direction ].join(" "));
                that.sliding = false;
                setTimeout(function() {
                    that.$element.trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
            $active.removeClass("active");
            $next.addClass("active");
            this.sliding = false;
            this.$element.trigger(slidEvent);
        }
        isCycling && this.cycle();
        return this;
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.carousel");
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
            var action = typeof option == "string" ? option : options.slide;
            if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
            if (typeof option == "number") data.to(option); else if (action) data[action](); else if (options.interval) data.pause().cycle();
        });
    }
    var old = $.fn.carousel;
    $.fn.carousel = Plugin;
    $.fn.carousel.Constructor = Carousel;
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old;
        return this;
    };
    var clickHandler = function(e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if (!$target.hasClass("carousel")) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex) options.interval = false;
        Plugin.call($target, options);
        if (slideIndex) {
            $target.data("bs.carousel").to(slideIndex);
        }
        e.preventDefault();
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.5";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
            activesData = actives.data("bs.collapse");
            if (activesData && activesData.transitioning) return;
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        if (actives && actives.length) {
            Plugin.call(actives, "hide");
            activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(target);
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        if (!$this.attr("data-target")) e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        Plugin.call($target, option);
    });
}(jQuery);

+function($) {
    "use strict";
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.5";
    function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function() {
            var $this = $(this);
            var $parent = getParent($this);
            var relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("open")) return;
            if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
            $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.attr("aria-expanded", "false");
            $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget);
        });
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
            if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
            }
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.trigger("focus").attr("aria-expanded", "true");
            $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget);
        }
        return false;
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger("focus");
            return $this.trigger("click");
        }
        var desc = " li:not(.disabled):visible a";
        var $items = $parent.find(".dropdown-menu" + desc);
        if (!$items.length) return;
        var index = $items.index(e.target);
        if (e.which == 38 && index > 0) index--;
        if (e.which == 40 && index < $items.length - 1) index++;
        if (!~index) index = 0;
        $items.eq(index).trigger("focus");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.dropdown");
            if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old;
        return this;
    };
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
}(jQuery);

+function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    Modal.VERSION = "3.3.5";
    Modal.TRANSITION_DURATION = 300;
    Modal.BACKDROP_TRANSITION_DURATION = 150;
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) return;
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            that.$element.one("mouseup.dismiss.bs.modal", function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
            });
        });
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
            }
            that.$element.show().scrollTop(0);
            that.adjustDialog();
            if (transition) {
                that.$element[0].offsetWidth;
            }
            that.$element.addClass("in");
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$dialog.one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
        });
    };
    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault();
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) return;
        this.isShown = false;
        this.escape();
        this.resize();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide();
            }, this));
        } else if (!this.isShown) {
            this.$element.off("keydown.dismiss.bs.modal");
        }
    };
    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
        } else {
            $(window).off("resize.bs.modal");
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            that.$body.removeClass("modal-open");
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger("hidden.bs.modal");
        });
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return;
                }
                if (e.target !== e.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
            }, this));
            if (doAnimate) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            if (!callback) return;
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                that.removeBackdrop();
                callback && callback();
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
            callback();
        }
    };
    Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
    };
    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
    };
    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    };
    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    };
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) $this.data("bs.modal", data = new Modal(this, options));
            if (typeof option == "string") data[option](_relatedTarget); else if (options.show) data.show(_relatedTarget);
        });
    }
    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this;
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        if ($this.is("a")) e.preventDefault();
        $target.one("show.bs.modal", function(showEvent) {
            if (showEvent.isDefaultPrevented()) return;
            $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus");
            });
        });
        Plugin.call($target, option, this);
    });
}(jQuery);

+function($) {
    "use strict";
    var Tooltip = function(element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.5";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: false,
            hover: false,
            focus: false
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if (trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (trigger != "manual") {
                var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == "number") {
            options.delay = {
                show: options.delay,
                hide: options.delay
            };
        }
        return options;
    };
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value;
        });
        return options;
    };
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
        }
        if (self.tip().hasClass("in") || self.hoverState == "in") {
            self.hoverState = "in";
            return;
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show) return self.show();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "in") self.show();
        }, self.options.delay.show);
    };
    Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
            if (this.inState[key]) return true;
        }
        return false;
    };
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
        }
        if (self.isInStateTrue()) return;
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide) return self.hide();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "out") self.hide();
        }, self.options.delay.hide);
    };
    Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) return;
            var that = this;
            var $tip = this.tip();
            var tipId = this.getUID(this.type);
            this.setContent();
            $tip.attr("id", tipId);
            this.$element.attr("aria-describedby", tipId);
            if (this.options.animation) $tip.addClass("fade");
            var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) placement = placement.replace(autoToken, "") || "top";
            $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var pos = this.getPosition();
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement;
                var viewportDim = this.getPosition(this.$viewport);
                placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                var prevHoverState = that.hoverState;
                that.$element.trigger("shown.bs." + that.type);
                that.hoverState = null;
                if (prevHoverState == "out") that.leave(that);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;
        offset.top += marginTop;
        offset.left += marginLeft;
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0);
        $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
            offset.top = offset.top + height - actualHeight;
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left) offset.left += delta.left; else offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function(callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event("hide.bs." + this.type);
        function complete() {
            if (that.hoverState != "in") $tip.detach();
            that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
            callback && callback();
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        $tip.removeClass("in");
        $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        this.hoverState = null;
        return this;
    };
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
            $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
    };
    Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    };
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            });
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset();
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        };
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null;
        return $.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == "bottom" ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "top" ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "left" ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
                delta.top = viewportDimensions.top - topEdgeOffset;
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding;
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
                delta.left = viewportDimensions.left - leftEdgeOffset;
            } else if (rightEdgeOffset > viewportDimensions.right) {
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
            }
        }
        return delta;
    };
    Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title;
    };
    Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(Math.random() * 1e6); while (document.getElementById(prefix));
        return prefix;
    };
    Tooltip.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template);
            if (this.$tip.length != 1) {
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            }
        }
        return this.$tip;
    };
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    Tooltip.prototype.enable = function() {
        this.enabled = true;
    };
    Tooltip.prototype.disable = function() {
        this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
            self = $(e.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                $(e.currentTarget).data("bs." + this.type, self);
            }
        }
        if (e) {
            self.inState.click = !self.inState.click;
            if (self.isInStateTrue()) self.enter(self); else self.leave(self);
        } else {
            self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
        }
    };
    Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            that.$element.off("." + that.type).removeData("bs." + that.type);
            if (that.$tip) {
                that.$tip.detach();
            }
            that.$tip = null;
            that.$arrow = null;
            that.$viewport = null;
        });
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tooltip");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.5";
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    };
    Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").children().detach().end()[this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
    };
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
    };
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.popover");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.popover", data = new Popover(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.popover;
    $.fn.popover = Plugin;
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function() {
        $.fn.popover = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
        this.refresh();
        this.process();
    }
    ScrollSpy.VERSION = "3.3.5";
    ScrollSpy.DEFAULTS = {
        offset: 10
    };
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    };
    ScrollSpy.prototype.refresh = function() {
        var that = this;
        var offsetMethod = "offset";
        var offsetBase = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = "position";
            offsetBase = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
            var $el = $(this);
            var href = $el.data("target") || $el.attr("href");
            var $href = /^#./.test(href) && $(href);
            return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + offsetBase, href ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            that.offsets.push(this[0]);
            that.targets.push(this[1]);
        });
    };
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
            this.refresh();
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null;
            return this.clear();
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
    };
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
            active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
    };
    ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.scrollspy");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old;
        return this;
    };
    $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.VERSION = "3.3.5";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        if ($this.parent("li").hasClass("active")) return;
        var $previous = $ul.find(".active:last a");
        var hideEvent = $.Event("hide.bs.tab", {
            relatedTarget: $this[0]
        });
        var showEvent = $.Event("show.bs.tab", {
            relatedTarget: $previous[0]
        });
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: "hidden.bs.tab",
                relatedTarget: $this[0]
            });
            $this.trigger({
                type: "shown.bs.tab",
                relatedTarget: $previous[0]
            });
        });
    };
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (transition) {
                element[0].offsetWidth;
                element.addClass("in");
            } else {
                element.removeClass("fade");
            }
            if (element.parent(".dropdown-menu").length) {
                element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
            }
            callback && callback();
        }
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) $this.data("bs.tab", data = new Tab(this));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function() {
        $.fn.tab = old;
        return this;
    };
    var clickHandler = function(e) {
        e.preventDefault();
        Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery);

+function($) {
    "use strict";
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition();
    };
    Affix.VERSION = "3.3.5";
    Affix.RESET = "affix affix-top affix-bottom";
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };
    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();
        if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
        if (this.affixed == "bottom") {
            if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
            return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
        }
        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;
        if (offsetTop != null && scrollTop <= offsetTop) return "top";
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
        return false;
    };
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    };
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());
        if (typeof offset != "object") offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css("top", "");
            var affixType = "affix" + (affix ? "-" + affix : "");
            var e = $.Event(affixType + ".bs.affix");
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            this.affixed = affix;
            this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
        }
        if (affix == "bottom") {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            });
        }
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.affix");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.affix", data = new Affix(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.affix;
    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;
    $.fn.affix.noConflict = function() {
        $.fn.affix = old;
        return this;
    };
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this);
            var data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop != null) data.offset.top = data.offsetTop;
            Plugin.call($spy, data);
        });
    });
}(jQuery);

window.FormValidation = {
    AddOn: {},
    Framework: {},
    I18n: {},
    Validator: {}
};

if (typeof jQuery === "undefined") {
    throw new Error("FormValidation requires jQuery");
}

(function($) {
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (+version[0] < 2 && +version[1] < 9 || +version[0] === 1 && +version[1] === 9 && +version[2] < 1) {
        throw new Error("FormValidation requires jQuery version 1.9.1 or higher");
    }
})(jQuery);

(function($) {
    FormValidation.Base = function(form, options, namespace) {
        this.$form = $(form);
        this.options = $.extend({}, $.fn.formValidation.DEFAULT_OPTIONS, options);
        this._namespace = namespace || "fv";
        this.$invalidFields = $([]);
        this.$submitButton = null;
        this.$hiddenButton = null;
        this.STATUS_NOT_VALIDATED = "NOT_VALIDATED";
        this.STATUS_VALIDATING = "VALIDATING";
        this.STATUS_INVALID = "INVALID";
        this.STATUS_VALID = "VALID";
        this.STATUS_IGNORED = "IGNORED";
        var ieVersion = function() {
            var v = 3, div = document.createElement("div"), a = div.all || [];
            while (div.innerHTML = "<!--[if gt IE " + ++v + "]><br><![endif]-->", a[0]) {}
            return v > 4 ? v : !v;
        }();
        var el = document.createElement("div");
        this._changeEvent = ieVersion === 9 || !("oninput" in el) ? "keyup" : "input";
        this._submitIfValid = null;
        this._cacheFields = {};
        this._init();
    };
    FormValidation.Base.prototype = {
        constructor: FormValidation.Base,
        _exceedThreshold: function($field) {
            var ns = this._namespace, field = $field.attr("data-" + ns + "-field"), threshold = this.options.fields[field].threshold || this.options.threshold;
            if (!threshold) {
                return true;
            }
            var cannotType = $.inArray($field.attr("type"), [ "button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit" ]) !== -1;
            return cannotType || $field.val().length >= threshold;
        },
        _init: function() {
            var that = this, ns = this._namespace, options = {
                addOns: {},
                autoFocus: this.$form.attr("data-" + ns + "-autofocus"),
                button: {
                    selector: this.$form.attr("data-" + ns + "-button-selector") || this.$form.attr("data-" + ns + "-submitbuttons"),
                    disabled: this.$form.attr("data-" + ns + "-button-disabled")
                },
                control: {
                    valid: this.$form.attr("data-" + ns + "-control-valid"),
                    invalid: this.$form.attr("data-" + ns + "-control-invalid")
                },
                err: {
                    clazz: this.$form.attr("data-" + ns + "-err-clazz"),
                    container: this.$form.attr("data-" + ns + "-err-container") || this.$form.attr("data-" + ns + "-container"),
                    parent: this.$form.attr("data-" + ns + "-err-parent")
                },
                events: {
                    formInit: this.$form.attr("data-" + ns + "-events-form-init"),
                    formError: this.$form.attr("data-" + ns + "-events-form-error"),
                    formSuccess: this.$form.attr("data-" + ns + "-events-form-success"),
                    fieldAdded: this.$form.attr("data-" + ns + "-events-field-added"),
                    fieldRemoved: this.$form.attr("data-" + ns + "-events-field-removed"),
                    fieldInit: this.$form.attr("data-" + ns + "-events-field-init"),
                    fieldError: this.$form.attr("data-" + ns + "-events-field-error"),
                    fieldSuccess: this.$form.attr("data-" + ns + "-events-field-success"),
                    fieldStatus: this.$form.attr("data-" + ns + "-events-field-status"),
                    localeChanged: this.$form.attr("data-" + ns + "-events-locale-changed"),
                    validatorError: this.$form.attr("data-" + ns + "-events-validator-error"),
                    validatorSuccess: this.$form.attr("data-" + ns + "-events-validator-success"),
                    validatorIgnored: this.$form.attr("data-" + ns + "-events-validator-ignored")
                },
                excluded: this.$form.attr("data-" + ns + "-excluded"),
                icon: {
                    valid: this.$form.attr("data-" + ns + "-icon-valid") || this.$form.attr("data-" + ns + "-feedbackicons-valid"),
                    invalid: this.$form.attr("data-" + ns + "-icon-invalid") || this.$form.attr("data-" + ns + "-feedbackicons-invalid"),
                    validating: this.$form.attr("data-" + ns + "-icon-validating") || this.$form.attr("data-" + ns + "-feedbackicons-validating"),
                    feedback: this.$form.attr("data-" + ns + "-icon-feedback")
                },
                live: this.$form.attr("data-" + ns + "-live"),
                locale: this.$form.attr("data-" + ns + "-locale"),
                message: this.$form.attr("data-" + ns + "-message"),
                onError: this.$form.attr("data-" + ns + "-onerror"),
                onSuccess: this.$form.attr("data-" + ns + "-onsuccess"),
                row: {
                    selector: this.$form.attr("data-" + ns + "-row-selector") || this.$form.attr("data-" + ns + "-group"),
                    valid: this.$form.attr("data-" + ns + "-row-valid"),
                    invalid: this.$form.attr("data-" + ns + "-row-invalid"),
                    feedback: this.$form.attr("data-" + ns + "-row-feedback")
                },
                threshold: this.$form.attr("data-" + ns + "-threshold"),
                trigger: this.$form.attr("data-" + ns + "-trigger"),
                verbose: this.$form.attr("data-" + ns + "-verbose"),
                fields: {}
            };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit." + ns, function(e) {
                e.preventDefault();
                that.validate();
            }).on("click." + ns, this.options.button.selector, function() {
                that.$submitButton = $(this);
                that._submitIfValid = true;
            });
            if (this.options.declarative === true || this.options.declarative === "true") {
                this.$form.find("[name], [data-" + ns + "-field]").each(function() {
                    var $field = $(this), field = $field.attr("name") || $field.attr("data-" + ns + "-field"), opts = that._parseOptions($field);
                    if (opts) {
                        $field.attr("data-" + ns + "-field", field);
                        options.fields[field] = $.extend({}, opts, options.fields[field]);
                    }
                });
            }
            this.options = $.extend(true, this.options, options);
            if ("string" === typeof this.options.err.parent) {
                this.options.err.parent = new RegExp(this.options.err.parent);
            }
            if (this.options.container) {
                this.options.err.container = this.options.container;
                delete this.options.container;
            }
            if (this.options.feedbackIcons) {
                this.options.icon = $.extend(true, this.options.icon, this.options.feedbackIcons);
                delete this.options.feedbackIcons;
            }
            if (this.options.group) {
                this.options.row.selector = this.options.group;
                delete this.options.group;
            }
            if (this.options.submitButtons) {
                this.options.button.selector = this.options.submitButtons;
                delete this.options.submitButtons;
            }
            if (!FormValidation.I18n[this.options.locale]) {
                this.options.locale = $.fn.formValidation.DEFAULT_OPTIONS.locale;
            }
            if (this.options.declarative === true || this.options.declarative === "true") {
                this.options = $.extend(true, this.options, {
                    addOns: this._parseAddOnOptions()
                });
            }
            this.$hiddenButton = $("<button/>").attr("type", "submit").prependTo(this.$form).addClass("fv-hidden-submit").css({
                display: "none",
                width: 0,
                height: 0
            });
            this.$form.on("click." + this._namespace, '[type="submit"]', function(e) {
                if (!e.isDefaultPrevented()) {
                    var $target = $(e.target), $button = $target.is('[type="submit"]') ? $target.eq(0) : $target.parent('[type="submit"]').eq(0);
                    if (that.options.button.selector && !$button.is(that.options.button.selector) && !$button.is(that.$hiddenButton)) {
                        that.$form.off("submit." + that._namespace).submit();
                    }
                }
            });
            for (var field in this.options.fields) {
                this._initField(field);
            }
            for (var addOn in this.options.addOns) {
                if ("function" === typeof FormValidation.AddOn[addOn].init) {
                    FormValidation.AddOn[addOn].init(this, this.options.addOns[addOn]);
                }
            }
            this.$form.trigger($.Event(this.options.events.formInit), {
                bv: this,
                fv: this,
                options: this.options
            });
            if (this.options.onSuccess) {
                this.$form.on(this.options.events.formSuccess, function(e) {
                    FormValidation.Helper.call(that.options.onSuccess, [ e ]);
                });
            }
            if (this.options.onError) {
                this.$form.on(this.options.events.formError, function(e) {
                    FormValidation.Helper.call(that.options.onError, [ e ]);
                });
            }
        },
        _initField: function(field) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                fields = this.getFieldElements(field);
                fields.attr("data-" + ns + "-field", field);
                break;

              default:
                break;
            }
            if (fields.length === 0) {
                return;
            }
            if (this.options.fields[field] === null || this.options.fields[field].validators === null) {
                return;
            }
            var validatorName;
            for (validatorName in this.options.fields[field].validators) {
                if (!FormValidation.Validator[validatorName]) {
                    delete this.options.fields[field].validators[validatorName];
                }
            }
            if (this.options.fields[field].enabled === null) {
                this.options.fields[field].enabled = true;
            }
            var that = this, total = fields.length, type = fields.attr("type"), updateAll = total === 1 || "radio" === type || "checkbox" === type, trigger = this._getFieldTrigger(fields.eq(0)), events = $.map(trigger, function(item) {
                return item + ".update." + ns;
            }).join(" ");
            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i), row = this.options.fields[field].row || this.options.row.selector, $parent = $field.closest(row), container = "function" === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container) ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this) : this.options.fields[field].container || this.options.fields[field].err || this.options.err.container, $message = container && container !== "tooltip" && container !== "popover" ? $(container) : this._getMessageContainer($field, row);
                if (container && container !== "tooltip" && container !== "popover") {
                    $message.addClass(this.options.err.clazz);
                }
                $message.find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + ns + "-validator][data-" + ns + '-for="' + field + '"]').remove();
                $parent.find("i[data-" + ns + '-icon-for="' + field + '"]').remove();
                $field.off(events).on(events, function() {
                    that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
                });
                $field.data(ns + ".messages", $message);
                for (validatorName in this.options.fields[field].validators) {
                    $field.data(ns + ".result." + validatorName, this.STATUS_NOT_VALIDATED);
                    if (!updateAll || i === total - 1) {
                        $("<small/>").css("display", "none").addClass(this.options.err.clazz).attr("data-" + ns + "-validator", validatorName).attr("data-" + ns + "-for", field).attr("data-" + ns + "-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(field, validatorName)).appendTo($message);
                    }
                    if ("function" === typeof FormValidation.Validator[validatorName].init) {
                        FormValidation.Validator[validatorName].init(this, $field, this.options.fields[field].validators[validatorName]);
                    }
                }
                if (this.options.fields[field].icon !== false && this.options.fields[field].icon !== "false" && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!updateAll || i === total - 1)) {
                    $parent.addClass(this.options.row.feedback);
                    var $icon = $("<i/>").css("display", "none").addClass(this.options.icon.feedback).attr("data-" + ns + "-icon-for", field).insertAfter($field);
                    (!updateAll ? $field : fields).data(ns + ".icon", $icon);
                    if ("tooltip" === container || "popover" === container) {
                        (!updateAll ? $field : fields).on(this.options.events.fieldError, function() {
                            $parent.addClass("fv-has-tooltip");
                        }).on(this.options.events.fieldSuccess, function() {
                            $parent.removeClass("fv-has-tooltip");
                        });
                        $field.off("focus.container." + ns).on("focus.container." + ns, function() {
                            that._showTooltip($field, container);
                        }).off("blur.container." + ns).on("blur.container." + ns, function() {
                            that._hideTooltip($field, container);
                        });
                    }
                    if ("string" === typeof this.options.fields[field].icon && this.options.fields[field].icon !== "true") {
                        $icon.appendTo($(this.options.fields[field].icon));
                    } else {
                        this._fixIcon($field, $icon);
                    }
                }
            }
            fields.on(this.options.events.fieldSuccess, function(e, data) {
                var onSuccess = that.getOptions(data.field, null, "onSuccess");
                if (onSuccess) {
                    FormValidation.Helper.call(onSuccess, [ e, data ]);
                }
            }).on(this.options.events.fieldError, function(e, data) {
                var onError = that.getOptions(data.field, null, "onError");
                if (onError) {
                    FormValidation.Helper.call(onError, [ e, data ]);
                }
            }).on(this.options.events.fieldStatus, function(e, data) {
                var onStatus = that.getOptions(data.field, null, "onStatus");
                if (onStatus) {
                    FormValidation.Helper.call(onStatus, [ e, data ]);
                }
            }).on(this.options.events.validatorError, function(e, data) {
                var onError = that.getOptions(data.field, data.validator, "onError");
                if (onError) {
                    FormValidation.Helper.call(onError, [ e, data ]);
                }
            }).on(this.options.events.validatorSuccess, function(e, data) {
                var onSuccess = that.getOptions(data.field, data.validator, "onSuccess");
                if (onSuccess) {
                    FormValidation.Helper.call(onSuccess, [ e, data ]);
                }
            });
            this.onLiveChange(fields, "live", function() {
                if (that._exceedThreshold($(this))) {
                    that.validateField($(this));
                }
            });
            fields.trigger($.Event(this.options.events.fieldInit), {
                bv: this,
                fv: this,
                field: field,
                element: fields
            });
        },
        _isExcluded: function($field) {
            var ns = this._namespace, excludedAttr = $field.attr("data-" + ns + "-excluded"), field = $field.attr("data-" + ns + "-field") || $field.attr("name");
            switch (true) {
              case !!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === "true" || this.options.fields[field].excluded === true):
              case excludedAttr === "true":
              case excludedAttr === "":
                return true;

              case !!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === "false" || this.options.fields[field].excluded === false):
              case excludedAttr === "false":
                return false;

              case !!field && this.options.fields && this.options.fields[field] && "function" === typeof this.options.fields[field].excluded:
                return this.options.fields[field].excluded.call(this, $field, this);

              case !!field && this.options.fields && this.options.fields[field] && "string" === typeof this.options.fields[field].excluded:
              case excludedAttr:
                return FormValidation.Helper.call(this.options.fields[field].excluded, [ $field, this ]);

              default:
                if (this.options.excluded) {
                    if ("string" === typeof this.options.excluded) {
                        this.options.excluded = $.map(this.options.excluded.split(","), function(item) {
                            return $.trim(item);
                        });
                    }
                    var length = this.options.excluded.length;
                    for (var i = 0; i < length; i++) {
                        if ("string" === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]) || "function" === typeof this.options.excluded[i] && this.options.excluded[i].call(this, $field, this) === true) {
                            return true;
                        }
                    }
                }
                return false;
            }
        },
        _getFieldTrigger: function($field) {
            var ns = this._namespace, trigger = $field.data(ns + ".trigger");
            if (trigger) {
                return trigger;
            }
            var type = $field.attr("type"), name = $field.attr("data-" + ns + "-field"), event = "radio" === type || "checkbox" === type || "file" === type || "SELECT" === $field.get(0).tagName ? "change" : this._changeEvent;
            trigger = ((this.options.fields[name] ? this.options.fields[name].trigger : null) || this.options.trigger || event).split(" ");
            $field.data(ns + ".trigger", trigger);
            return trigger;
        },
        _getMessage: function(field, validatorName) {
            if (!this.options.fields[field] || !FormValidation.Validator[validatorName] || !this.options.fields[field].validators || !this.options.fields[field].validators[validatorName]) {
                return "";
            }
            switch (true) {
              case !!this.options.fields[field].validators[validatorName].message:
                return this.options.fields[field].validators[validatorName].message;

              case !!this.options.fields[field].message:
                return this.options.fields[field].message;

              case !!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][validatorName] && !!FormValidation.I18n[this.options.locale][validatorName]["default"]:
                return FormValidation.I18n[this.options.locale][validatorName]["default"];

              default:
                return this.options.message;
            }
        },
        _getMessageContainer: function($field, row) {
            if (!this.options.err.parent) {
                throw new Error("The err.parent option is not defined");
            }
            var $parent = $field.parent();
            if ($parent.is(row)) {
                return $parent;
            }
            var cssClasses = $parent.attr("class");
            if (!cssClasses) {
                return this._getMessageContainer($parent, row);
            }
            if (this.options.err.parent.test(cssClasses)) {
                return $parent;
            }
            return this._getMessageContainer($parent, row);
        },
        _parseAddOnOptions: function() {
            var ns = this._namespace, names = this.$form.attr("data-" + ns + "-addons"), addOns = this.options.addOns || {};
            if (names) {
                names = names.replace(/\s/g, "").split(",");
                for (var i = 0; i < names.length; i++) {
                    if (!addOns[names[i]]) {
                        addOns[names[i]] = {};
                    }
                }
            }
            var addOn, attrMap, attr, option;
            for (addOn in addOns) {
                if (!FormValidation.AddOn[addOn]) {
                    delete addOns[addOn];
                    continue;
                }
                attrMap = FormValidation.AddOn[addOn].html5Attributes;
                if (attrMap) {
                    for (attr in attrMap) {
                        option = this.$form.attr("data-" + ns + "-addons-" + addOn.toLowerCase() + "-" + attr.toLowerCase());
                        if (option) {
                            addOns[addOn][attrMap[attr]] = option;
                        }
                    }
                }
            }
            return addOns;
        },
        _parseOptions: function($field) {
            var ns = this._namespace, field = $field.attr("name") || $field.attr("data-" + ns + "-field"), validators = {}, validator, v, attrName, enabled, optionName, optionAttrName, optionValue, html5AttrName, html5AttrMap;
            for (v in FormValidation.Validator) {
                validator = FormValidation.Validator[v];
                attrName = "data-" + ns + "-" + v.toLowerCase(), enabled = $field.attr(attrName) + "";
                html5AttrMap = "function" === typeof validator.enableByHtml5 ? validator.enableByHtml5($field) : null;
                if (html5AttrMap && enabled !== "false" || html5AttrMap !== true && ("" === enabled || "true" === enabled || attrName === enabled.toLowerCase())) {
                    validator.html5Attributes = $.extend({}, {
                        message: "message",
                        onerror: "onError",
                        onsuccess: "onSuccess",
                        transformer: "transformer"
                    }, validator.html5Attributes);
                    validators[v] = $.extend({}, html5AttrMap === true ? {} : html5AttrMap, validators[v]);
                    for (html5AttrName in validator.html5Attributes) {
                        optionName = validator.html5Attributes[html5AttrName];
                        optionAttrName = "data-" + ns + "-" + v.toLowerCase() + "-" + html5AttrName, optionValue = $field.attr(optionAttrName);
                        if (optionValue) {
                            if ("true" === optionValue || optionAttrName === optionValue.toLowerCase()) {
                                optionValue = true;
                            } else if ("false" === optionValue) {
                                optionValue = false;
                            }
                            validators[v][optionName] = optionValue;
                        }
                    }
                }
            }
            var opts = {
                autoFocus: $field.attr("data-" + ns + "-autofocus"),
                err: $field.attr("data-" + ns + "-err-container") || $field.attr("data-" + ns + "-container"),
                excluded: $field.attr("data-" + ns + "-excluded"),
                icon: $field.attr("data-" + ns + "-icon") || $field.attr("data-" + ns + "-feedbackicons") || (this.options.fields && this.options.fields[field] ? this.options.fields[field].feedbackIcons : null),
                message: $field.attr("data-" + ns + "-message"),
                onError: $field.attr("data-" + ns + "-onerror"),
                onStatus: $field.attr("data-" + ns + "-onstatus"),
                onSuccess: $field.attr("data-" + ns + "-onsuccess"),
                row: $field.attr("data-" + ns + "-row") || $field.attr("data-" + ns + "-group") || (this.options.fields && this.options.fields[field] ? this.options.fields[field].group : null),
                selector: $field.attr("data-" + ns + "-selector"),
                threshold: $field.attr("data-" + ns + "-threshold"),
                transformer: $field.attr("data-" + ns + "-transformer"),
                trigger: $field.attr("data-" + ns + "-trigger"),
                verbose: $field.attr("data-" + ns + "-verbose"),
                validators: validators
            }, emptyOptions = $.isEmptyObject(opts), emptyValidators = $.isEmptyObject(validators);
            if (!emptyValidators || !emptyOptions && this.options.fields && this.options.fields[field]) {
                opts.validators = validators;
                return opts;
            } else {
                return null;
            }
        },
        _submit: function() {
            var isValid = this.isValid();
            if (isValid === null) {
                return;
            }
            var eventType = isValid ? this.options.events.formSuccess : this.options.events.formError, e = $.Event(eventType);
            this.$form.trigger(e);
            if (this.$submitButton) {
                isValid ? this._onSuccess(e) : this._onError(e);
            }
        },
        _onError: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }
            if ("submitted" === this.options.live) {
                this.options.live = "enabled";
                var that = this;
                for (var field in this.options.fields) {
                    (function(f) {
                        var fields = that.getFieldElements(f);
                        if (fields.length) {
                            that.onLiveChange(fields, "live", function() {
                                if (that._exceedThreshold($(this))) {
                                    that.validateField($(this));
                                }
                            });
                        }
                    })(field);
                }
            }
            var ns = this._namespace;
            for (var i = 0; i < this.$invalidFields.length; i++) {
                var $field = this.$invalidFields.eq(i), autoFocus = this.isOptionEnabled($field.attr("data-" + ns + "-field"), "autoFocus");
                if (autoFocus) {
                    $field.focus();
                    break;
                }
            }
        },
        _onFieldValidated: function($field, validatorName) {
            var ns = this._namespace, field = $field.attr("data-" + ns + "-field"), validators = this.options.fields[field].validators, counter = {}, numValidators = 0, data = {
                bv: this,
                fv: this,
                field: field,
                element: $field,
                validator: validatorName,
                result: $field.data(ns + ".response." + validatorName)
            };
            if (validatorName) {
                switch ($field.data(ns + ".result." + validatorName)) {
                  case this.STATUS_INVALID:
                    $field.trigger($.Event(this.options.events.validatorError), data);
                    break;

                  case this.STATUS_VALID:
                    $field.trigger($.Event(this.options.events.validatorSuccess), data);
                    break;

                  case this.STATUS_IGNORED:
                    $field.trigger($.Event(this.options.events.validatorIgnored), data);
                    break;

                  default:
                    break;
                }
            }
            counter[this.STATUS_NOT_VALIDATED] = 0;
            counter[this.STATUS_VALIDATING] = 0;
            counter[this.STATUS_INVALID] = 0;
            counter[this.STATUS_VALID] = 0;
            counter[this.STATUS_IGNORED] = 0;
            for (var v in validators) {
                if (validators[v].enabled === false) {
                    continue;
                }
                numValidators++;
                var result = $field.data(ns + ".result." + v);
                if (result) {
                    counter[result]++;
                }
            }
            if (counter[this.STATUS_VALID] + counter[this.STATUS_IGNORED] === numValidators) {
                this.$invalidFields = this.$invalidFields.not($field);
                $field.trigger($.Event(this.options.events.fieldSuccess), data);
            } else if ((counter[this.STATUS_NOT_VALIDATED] === 0 || !this.isOptionEnabled(field, "verbose")) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
                this.$invalidFields = this.$invalidFields.add($field);
                $field.trigger($.Event(this.options.events.fieldError), data);
            }
        },
        _onSuccess: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }
            this.disableSubmitButtons(true).defaultSubmit();
        },
        _fixIcon: function($field, $icon) {},
        _createTooltip: function($field, message, type) {},
        _destroyTooltip: function($field, type) {},
        _hideTooltip: function($field, type) {},
        _showTooltip: function($field, type) {},
        defaultSubmit: function() {
            var ns = this._namespace;
            if (this.$submitButton) {
                $("<input/>").attr({
                    type: "hidden",
                    name: this.$submitButton.attr("name")
                }).attr("data-" + ns + "-submit-hidden", "").val(this.$submitButton.val()).appendTo(this.$form);
            }
            this.$form.off("submit." + ns).submit();
        },
        disableSubmitButtons: function(disabled) {
            if (!disabled) {
                this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled);
            } else if (this.options.live !== "disabled") {
                this.$form.find(this.options.button.selector).attr("disabled", "disabled").addClass(this.options.button.disabled);
            }
            return this;
        },
        getFieldElements: function(field) {
            if (!this._cacheFields[field]) {
                if (this.options.fields[field] && this.options.fields[field].selector) {
                    var f = this.$form.find(this.options.fields[field].selector);
                    this._cacheFields[field] = f.length ? f : $(this.options.fields[field].selector);
                } else {
                    this._cacheFields[field] = this.$form.find('[name="' + field + '"]');
                }
            }
            return this._cacheFields[field];
        },
        getFieldValue: function(field, validatorName) {
            var $field, ns = this._namespace;
            if ("string" === typeof field) {
                $field = this.getFieldElements(field);
                if ($field.length === 0) {
                    return null;
                }
            } else {
                $field = field;
                field = $field.attr("data-" + ns + "-field");
            }
            if (!field || !this.options.fields[field]) {
                return $field.val();
            }
            var transformer = (this.options.fields[field].validators && this.options.fields[field].validators[validatorName] ? this.options.fields[field].validators[validatorName].transformer : null) || this.options.fields[field].transformer;
            return transformer ? FormValidation.Helper.call(transformer, [ $field, validatorName, this ]) : $field.val();
        },
        getNamespace: function() {
            return this._namespace;
        },
        getOptions: function(field, validator, option) {
            var ns = this._namespace;
            if (!field) {
                return option ? this.options[option] : this.options;
            }
            if ("object" === typeof field) {
                field = field.attr("data-" + ns + "-field");
            }
            if (!this.options.fields[field]) {
                return null;
            }
            var options = this.options.fields[field];
            if (!validator) {
                return option ? options[option] : options;
            }
            if (!options.validators || !options.validators[validator]) {
                return null;
            }
            return option ? options.validators[validator][option] : options.validators[validator];
        },
        getStatus: function(field, validatorName) {
            var ns = this._namespace;
            switch (typeof field) {
              case "object":
                return field.data(ns + ".result." + validatorName);

              case "string":
              default:
                return this.getFieldElements(field).eq(0).data(ns + ".result." + validatorName);
            }
        },
        isOptionEnabled: function(field, option) {
            if (this.options.fields[field] && (this.options.fields[field][option] === "true" || this.options.fields[field][option] === true)) {
                return true;
            }
            if (this.options.fields[field] && (this.options.fields[field][option] === "false" || this.options.fields[field][option] === false)) {
                return false;
            }
            return this.options[option] === "true" || this.options[option] === true;
        },
        isValid: function() {
            for (var field in this.options.fields) {
                var isValidField = this.isValidField(field);
                if (isValidField === null) {
                    return null;
                }
                if (isValidField === false) {
                    return false;
                }
            }
            return true;
        },
        isValidContainer: function(container) {
            var that = this, ns = this._namespace, fields = [], $container = "string" === typeof container ? $(container) : container;
            if ($container.length === 0) {
                return true;
            }
            $container.find("[data-" + ns + "-field]").each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });
            var total = fields.length;
            for (var i = 0; i < total; i++) {
                var $f = fields[i], field = $f.attr("data-" + ns + "-field"), $errors = $f.data(ns + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + ns + "-validator][data-" + ns + '-for="' + field + '"]');
                if ($errors.filter("[data-" + ns + '-result="' + this.STATUS_INVALID + '"]').length > 0) {
                    return false;
                }
                if ($errors.filter("[data-" + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || $errors.filter("[data-" + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0) {
                    return null;
                }
            }
            return true;
        },
        isValidField: function(field) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return true;
            }
            var type = fields.attr("type"), total = "radio" === type || "checkbox" === type ? 1 : fields.length, $field, validatorName, status;
            for (var i = 0; i < total; i++) {
                $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }
                for (validatorName in this.options.fields[field].validators) {
                    if (this.options.fields[field].validators[validatorName].enabled === false) {
                        continue;
                    }
                    status = $field.data(ns + ".result." + validatorName);
                    if (status === this.STATUS_VALIDATING || status === this.STATUS_NOT_VALIDATED) {
                        return null;
                    } else if (status === this.STATUS_INVALID) {
                        return false;
                    }
                }
            }
            return true;
        },
        offLiveChange: function($fields, namespace) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }
            var ns = this._namespace, trigger = this._getFieldTrigger($fields.eq(0)), events = $.map(trigger, function(item) {
                return item + "." + namespace + "." + ns;
            }).join(" ");
            $fields.off(events);
            return this;
        },
        onLiveChange: function($fields, namespace, handler) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }
            var ns = this._namespace, trigger = this._getFieldTrigger($fields.eq(0)), events = $.map(trigger, function(item) {
                return item + "." + namespace + "." + ns;
            }).join(" ");
            switch (this.options.live) {
              case "submitted":
                break;

              case "disabled":
                $fields.off(events);
                break;

              case "enabled":
              default:
                $fields.off(events).on(events, function(e) {
                    handler.apply(this, arguments);
                });
                break;
            }
            return this;
        },
        updateMessage: function(field, validator, message) {
            var that = this, ns = this._namespace, $fields = $([]);
            switch (typeof field) {
              case "object":
                $fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                $fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            $fields.each(function() {
                $(this).data(ns + ".messages").find("." + that.options.err.clazz + "[data-" + ns + '-validator="' + validator + '"][data-' + ns + '-for="' + field + '"]').html(message);
            });
            return this;
        },
        updateStatus: function(field, status, validatorName) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            if (!field || !this.options.fields[field]) {
                return this;
            }
            if (status === this.STATUS_NOT_VALIDATED) {
                this._submitIfValid = false;
            }
            var that = this, type = fields.attr("type"), row = this.options.fields[field].row || this.options.row.selector, total = "radio" === type || "checkbox" === type ? 1 : fields.length;
            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }
                var $parent = $field.closest(row), $message = $field.data(ns + ".messages"), $allErrors = $message.find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + ns + "-validator][data-" + ns + '-for="' + field + '"]'), $errors = validatorName ? $allErrors.filter("[data-" + ns + '-validator="' + validatorName + '"]') : $allErrors, $icon = $field.data(ns + ".icon"), container = "function" === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container) ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this) : this.options.fields[field].container || this.options.fields[field].err || this.options.err.container, isValidField = null, isValidating, isNotValidated;
                if (validatorName) {
                    $field.data(ns + ".result." + validatorName, status);
                } else {
                    for (var v in this.options.fields[field].validators) {
                        $field.data(ns + ".result." + v, status);
                    }
                }
                $errors.attr("data-" + ns + "-result", status);
                switch (status) {
                  case this.STATUS_VALIDATING:
                    isValidField = null;
                    this.disableSubmitButtons(true);
                    $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                    $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                    if ($icon) {
                        $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();
                    }
                    break;

                  case this.STATUS_INVALID:
                    isValidField = false;
                    this.disableSubmitButtons(true);
                    $field.removeClass(this.options.control.valid).addClass(this.options.control.invalid);
                    $parent.removeClass(this.options.row.valid).addClass(this.options.row.invalid);
                    if ($icon) {
                        $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();
                    }
                    break;

                  case this.STATUS_VALID:
                  case this.STATUS_IGNORED:
                    isValidating = $allErrors.filter("[data-" + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0;
                    isNotValidated = $allErrors.filter("[data-" + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0;
                    isValidField = isValidating || isNotValidated ? null : $allErrors.filter("[data-" + ns + '-result="' + this.STATUS_VALID + '"]').length + $allErrors.filter("[data-" + ns + '-result="' + this.STATUS_IGNORED + '"]').length === $allErrors.length;
                    $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                    if (isValidField === true) {
                        this.disableSubmitButtons(this.isValid() === false);
                        if (status === this.STATUS_VALID) {
                            $field.addClass(this.options.control.valid);
                        }
                    } else if (isValidField === false) {
                        this.disableSubmitButtons(true);
                        if (status === this.STATUS_VALID) {
                            $field.addClass(this.options.control.invalid);
                        }
                    }
                    if ($icon) {
                        $icon.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid);
                        if (status === this.STATUS_VALID) {
                            $icon.addClass(isValidField === null ? "" : isValidField ? this.options.icon.valid : isValidating ? this.options.icon.validating : this.options.icon.invalid).show();
                        }
                    }
                    var isValidContainer = this.isValidContainer($parent);
                    if (isValidContainer !== null) {
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if (status === this.STATUS_VALID || $allErrors.length > 1) {
                            $parent.addClass(isValidContainer ? this.options.row.valid : this.options.row.invalid);
                        }
                    }
                    break;

                  case this.STATUS_NOT_VALIDATED:
                  default:
                    isValidField = null;
                    this.disableSubmitButtons(false);
                    $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                    $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                    if ($icon) {
                        $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide();
                    }
                    break;
                }
                if ($icon && ("tooltip" === container || "popover" === container)) {
                    isValidField === false ? this._createTooltip($field, $allErrors.filter("[data-" + ns + '-result="' + that.STATUS_INVALID + '"]').eq(0).html(), container) : this._destroyTooltip($field, container);
                } else {
                    status === this.STATUS_INVALID ? $errors.show() : $errors.hide();
                }
                $field.trigger($.Event(this.options.events.fieldStatus), {
                    bv: this,
                    fv: this,
                    field: field,
                    element: $field,
                    status: status
                });
                this._onFieldValidated($field, validatorName);
            }
            return this;
        },
        validate: function() {
            if ($.isEmptyObject(this.options.fields)) {
                this._submit();
                return this;
            }
            this.disableSubmitButtons(true);
            this._submitIfValid = false;
            for (var field in this.options.fields) {
                this.validateField(field);
            }
            this._submit();
            this._submitIfValid = true;
            return this;
        },
        validateField: function(field) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return this;
            }
            var that = this, type = fields.attr("type"), total = "radio" === type || "checkbox" === type ? 1 : fields.length, updateAll = "radio" === type || "checkbox" === type, validators = this.options.fields[field].validators, verbose = this.isOptionEnabled(field, "verbose"), validatorName, validateResult;
            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }
                var stop = false;
                for (validatorName in validators) {
                    if ($field.data(ns + ".dfs." + validatorName)) {
                        $field.data(ns + ".dfs." + validatorName).reject();
                    }
                    if (stop) {
                        break;
                    }
                    var result = $field.data(ns + ".result." + validatorName);
                    if (result === this.STATUS_VALID || result === this.STATUS_INVALID) {
                        this._onFieldValidated($field, validatorName);
                        continue;
                    } else if (validators[validatorName].enabled === false) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALID, validatorName);
                        continue;
                    }
                    $field.data(ns + ".result." + validatorName, this.STATUS_VALIDATING);
                    validateResult = FormValidation.Validator[validatorName].validate(this, $field, validators[validatorName]);
                    if ("object" === typeof validateResult && validateResult.resolve) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALIDATING, validatorName);
                        $field.data(ns + ".dfs." + validatorName, validateResult);
                        validateResult.done(function($f, v, response) {
                            $f.removeData(ns + ".dfs." + v).data(ns + ".response." + v, response);
                            if (response.message) {
                                that.updateMessage($f, v, response.message);
                            }
                            that.updateStatus(updateAll ? $f.attr("data-" + ns + "-field") : $f, response.valid === true ? that.STATUS_VALID : response.valid === false ? that.STATUS_INVALID : that.STATUS_IGNORED, v);
                            if (response.valid && that._submitIfValid === true) {
                                that._submit();
                            } else if (response.valid === false && !verbose) {
                                stop = true;
                            }
                        });
                    } else if ("object" === typeof validateResult && validateResult.valid !== undefined) {
                        $field.data(ns + ".response." + validatorName, validateResult);
                        if (validateResult.message) {
                            this.updateMessage(updateAll ? field : $field, validatorName, validateResult.message);
                        }
                        this.updateStatus(updateAll ? field : $field, validateResult.valid === true ? this.STATUS_VALID : validateResult.valid === false ? this.STATUS_INVALID : this.STATUS_IGNORED, validatorName);
                        if (validateResult.valid === false && !verbose) {
                            break;
                        }
                    } else if ("boolean" === typeof validateResult) {
                        $field.data(ns + ".response." + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, validateResult ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
                        if (!validateResult && !verbose) {
                            break;
                        }
                    } else if (null === validateResult || undefined === validateResult) {
                        $field.data(ns + ".response." + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, this.STATUS_IGNORED, validatorName);
                    }
                }
            }
            return this;
        },
        addField: function(field, options) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field") || field.attr("name");
                break;

              case "string":
                delete this._cacheFields[field];
                fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            fields.attr("data-" + ns + "-field", field);
            var type = fields.attr("type"), total = "radio" === type || "checkbox" === type ? 1 : fields.length;
            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                var opts = this._parseOptions($field);
                opts = opts === null ? options : $.extend(true, opts, options);
                this.options.fields[field] = $.extend(true, this.options.fields[field], opts);
                this._cacheFields[field] = this._cacheFields[field] ? this._cacheFields[field].add($field) : $field;
                this._initField("checkbox" === type || "radio" === type ? field : $field);
            }
            this.disableSubmitButtons(false);
            this.$form.trigger($.Event(this.options.events.fieldAdded), {
                field: field,
                element: fields,
                options: this.options.fields[field]
            });
            return this;
        },
        destroy: function() {
            var ns = this._namespace, i, field, fields, $field, validator, $icon, row;
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    for (validator in this.options.fields[field].validators) {
                        if ($field.data(ns + ".dfs." + validator)) {
                            $field.data(ns + ".dfs." + validator).reject();
                        }
                        $field.removeData(ns + ".result." + validator).removeData(ns + ".response." + validator).removeData(ns + ".dfs." + validator);
                        if ("function" === typeof FormValidation.Validator[validator].destroy) {
                            FormValidation.Validator[validator].destroy(this, $field, this.options.fields[field].validators[validator]);
                        }
                    }
                }
            }
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                row = this.options.fields[field].row || this.options.row.selector;
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    $field.data(ns + ".messages").find("." + this.options.err.clazz.split(" ").join(".") + "[data-" + ns + "-validator][data-" + ns + '-for="' + field + '"]').remove().end().end().removeData(ns + ".messages").closest(row).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("." + ns).removeAttr("data-" + ns + "-field");
                    var container = "function" === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container) ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this) : this.options.fields[field].container || this.options.fields[field].err || this.options.err.container;
                    if ("tooltip" === container || "popover" === container) {
                        this._destroyTooltip($field, container);
                    }
                    $icon = $field.data(ns + ".icon");
                    if ($icon) {
                        $icon.remove();
                    }
                    $field.removeData(ns + ".icon").removeData(ns + ".trigger");
                }
            }
            for (var addOn in this.options.addOns) {
                if ("function" === typeof FormValidation.AddOn[addOn].destroy) {
                    FormValidation.AddOn[addOn].destroy(this, this.options.addOns[addOn]);
                }
            }
            this.disableSubmitButtons(false);
            this.$hiddenButton.remove();
            this.$form.removeClass(this.options.elementClass).off("." + ns).removeData("bootstrapValidator").removeData("formValidation").find("[data-" + ns + "-submit-hidden]").remove().end().find('[type="submit"]').off("click." + ns);
        },
        enableFieldValidators: function(field, enabled, validatorName) {
            var validators = this.options.fields[field].validators;
            if (validatorName && validators && validators[validatorName] && validators[validatorName].enabled !== enabled) {
                this.options.fields[field].validators[validatorName].enabled = enabled;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validatorName);
            } else if (!validatorName && this.options.fields[field].enabled !== enabled) {
                this.options.fields[field].enabled = enabled;
                for (var v in validators) {
                    this.enableFieldValidators(field, enabled, v);
                }
            }
            return this;
        },
        getDynamicOption: function(field, option) {
            var $field = "string" === typeof field ? this.getFieldElements(field) : field, value = $field.val();
            if ("function" === typeof option) {
                return FormValidation.Helper.call(option, [ value, this, $field ]);
            } else if ("string" === typeof option) {
                var $f = this.getFieldElements(option);
                if ($f.length) {
                    return $f.val();
                } else {
                    return FormValidation.Helper.call(option, [ value, this, $field ]) || option;
                }
            }
            return null;
        },
        getForm: function() {
            return this.$form;
        },
        getInvalidFields: function() {
            return this.$invalidFields;
        },
        getLocale: function() {
            return this.options.locale;
        },
        getMessages: function(field, validator) {
            var that = this, ns = this._namespace, messages = [], $fields = $([]);
            switch (true) {
              case field && "object" === typeof field:
                $fields = field;
                break;

              case field && "string" === typeof field:
                var f = this.getFieldElements(field);
                if (f.length > 0) {
                    var type = f.attr("type");
                    $fields = "radio" === type || "checkbox" === type ? f.eq(0) : f;
                }
                break;

              default:
                $fields = this.$invalidFields;
                break;
            }
            var filter = validator ? "[data-" + ns + '-validator="' + validator + '"]' : "";
            $fields.each(function() {
                messages = messages.concat($(this).data(ns + ".messages").find("." + that.options.err.clazz + "[data-" + ns + '-for="' + $(this).attr("data-" + ns + "-field") + '"][data-' + ns + '-result="' + that.STATUS_INVALID + '"]' + filter).map(function() {
                    var v = $(this).attr("data-" + ns + "-validator"), f = $(this).attr("data-" + ns + "-for");
                    return that.options.fields[f].validators[v].enabled === false ? "" : $(this).html();
                }).get());
            });
            return messages;
        },
        getSubmitButton: function() {
            return this.$submitButton;
        },
        removeField: function(field) {
            var ns = this._namespace, fields = $([]);
            switch (typeof field) {
              case "object":
                fields = field;
                field = field.attr("data-" + ns + "-field") || field.attr("name");
                fields.attr("data-" + ns + "-field", field);
                break;

              case "string":
                fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            if (fields.length === 0) {
                return this;
            }
            var type = fields.attr("type"), total = "radio" === type || "checkbox" === type ? 1 : fields.length;
            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                this.$invalidFields = this.$invalidFields.not($field);
                this._cacheFields[field] = this._cacheFields[field].not($field);
            }
            if (!this._cacheFields[field] || this._cacheFields[field].length === 0) {
                delete this.options.fields[field];
            }
            if ("checkbox" === type || "radio" === type) {
                this._initField(field);
            }
            this.disableSubmitButtons(false);
            this.$form.trigger($.Event(this.options.events.fieldRemoved), {
                field: field,
                element: fields
            });
            return this;
        },
        resetField: function(field, resetValue) {
            var ns = this._namespace, $fields = $([]);
            switch (typeof field) {
              case "object":
                $fields = field;
                field = field.attr("data-" + ns + "-field");
                break;

              case "string":
                $fields = this.getFieldElements(field);
                break;

              default:
                break;
            }
            var total = $fields.length;
            if (this.options.fields[field]) {
                for (var i = 0; i < total; i++) {
                    for (var validator in this.options.fields[field].validators) {
                        $fields.eq(i).removeData(ns + ".dfs." + validator);
                    }
                }
            }
            if (resetValue) {
                var type = $fields.attr("type");
                "radio" === type || "checkbox" === type ? $fields.prop("checked", false).removeAttr("selected") : $fields.val("");
            }
            this.updateStatus(field, this.STATUS_NOT_VALIDATED);
            return this;
        },
        resetForm: function(resetValue) {
            for (var field in this.options.fields) {
                this.resetField(field, resetValue);
            }
            this.$invalidFields = $([]);
            this.$submitButton = null;
            this.disableSubmitButtons(false);
            return this;
        },
        revalidateField: function(field) {
            this.updateStatus(field, this.STATUS_NOT_VALIDATED).validateField(field);
            return this;
        },
        setLocale: function(locale) {
            this.options.locale = locale;
            this.$form.trigger($.Event(this.options.events.localeChanged), {
                locale: locale,
                bv: this,
                fv: this
            });
            return this;
        },
        updateOption: function(field, validator, option, value) {
            var ns = this._namespace;
            if ("object" === typeof field) {
                field = field.attr("data-" + ns + "-field");
            }
            if (this.options.fields[field] && this.options.fields[field].validators[validator]) {
                this.options.fields[field].validators[validator][option] = value;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validator);
            }
            return this;
        },
        validateContainer: function(container) {
            var that = this, ns = this._namespace, fields = [], $container = "string" === typeof container ? $(container) : container;
            if ($container.length === 0) {
                return this;
            }
            $container.find("[data-" + ns + "-field]").each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });
            var total = fields.length;
            for (var i = 0; i < total; i++) {
                this.validateField(fields[i]);
            }
            return this;
        }
    };
    $.fn.formValidation = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this = $(this), data = $this.data("formValidation"), options = "object" === typeof option && option;
            if (!data) {
                var framework = (options.framework || $this.attr("data-fv-framework") || "bootstrap").toLowerCase(), clazz = framework.substr(0, 1).toUpperCase() + framework.substr(1);
                if (typeof FormValidation.Framework[clazz] === "undefined") {
                    throw new Error("The class FormValidation.Framework." + clazz + " is not implemented");
                }
                data = new FormValidation.Framework[clazz](this, options);
                $this.addClass("fv-form-" + framework).data("formValidation", data);
            }
            if ("string" === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };
    $.fn.formValidation.Constructor = FormValidation.Base;
    $.fn.formValidation.DEFAULT_OPTIONS = {
        autoFocus: true,
        declarative: true,
        elementClass: "fv-form",
        events: {
            formInit: "init.form.fv",
            formError: "err.form.fv",
            formSuccess: "success.form.fv",
            fieldAdded: "added.field.fv",
            fieldRemoved: "removed.field.fv",
            fieldInit: "init.field.fv",
            fieldError: "err.field.fv",
            fieldSuccess: "success.field.fv",
            fieldStatus: "status.field.fv",
            localeChanged: "changed.locale.fv",
            validatorError: "err.validator.fv",
            validatorSuccess: "success.validator.fv",
            validatorIgnored: "ignored.validator.fv"
        },
        excluded: [ ":disabled", ":hidden", ":not(:visible)" ],
        fields: null,
        live: "enabled",
        locale: "en_US",
        message: "This value is not valid",
        threshold: null,
        verbose: true,
        button: {
            selector: '[type="submit"]',
            disabled: ""
        },
        control: {
            valid: "",
            invalid: ""
        },
        err: {
            clazz: "",
            container: null,
            parent: null
        },
        icon: {
            valid: null,
            invalid: null,
            validating: null,
            feedback: ""
        },
        row: {
            selector: null,
            valid: "",
            invalid: "",
            feedback: ""
        }
    };
})(jQuery);

(function($) {
    FormValidation.Helper = {
        call: function(functionName, args) {
            if ("function" === typeof functionName) {
                return functionName.apply(this, args);
            } else if ("string" === typeof functionName) {
                if ("()" === functionName.substring(functionName.length - 2)) {
                    functionName = functionName.substring(0, functionName.length - 2);
                }
                var ns = functionName.split("."), func = ns.pop(), context = window;
                for (var i = 0; i < ns.length; i++) {
                    context = context[ns[i]];
                }
                return typeof context[func] === "undefined" ? null : context[func].apply(this, args);
            }
        },
        date: function(year, month, day, notInFuture) {
            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                return false;
            }
            if (day.length > 2 || month.length > 2 || year.length > 4) {
                return false;
            }
            day = parseInt(day, 10);
            month = parseInt(month, 10);
            year = parseInt(year, 10);
            if (year < 1e3 || year > 9999 || month <= 0 || month > 12) {
                return false;
            }
            var numDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
            if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
                numDays[1] = 29;
            }
            if (day <= 0 || day > numDays[month - 1]) {
                return false;
            }
            if (notInFuture === true) {
                var currentDate = new Date(), currentYear = currentDate.getFullYear(), currentMonth = currentDate.getMonth(), currentDay = currentDate.getDate();
                return year < currentYear || year === currentYear && month - 1 < currentMonth || year === currentYear && month - 1 === currentMonth && day < currentDay;
            }
            return true;
        },
        format: function(message, parameters) {
            if (!$.isArray(parameters)) {
                parameters = [ parameters ];
            }
            for (var i in parameters) {
                message = message.replace("%s", parameters[i]);
            }
            return message;
        },
        luhn: function(value) {
            var length = value.length, mul = 0, prodArr = [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], [ 0, 2, 4, 6, 8, 1, 3, 5, 7, 9 ] ], sum = 0;
            while (length--) {
                sum += prodArr[mul][parseInt(value.charAt(length), 10)];
                mul ^= 1;
            }
            return sum % 10 === 0 && sum > 0;
        },
        mod11And10: function(value) {
            var check = 5, length = value.length;
            for (var i = 0; i < length; i++) {
                check = ((check || 10) * 2 % 11 + parseInt(value.charAt(i), 10)) % 10;
            }
            return check === 1;
        },
        mod37And36: function(value, alphabet) {
            alphabet = alphabet || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var modulus = alphabet.length, length = value.length, check = Math.floor(modulus / 2);
            for (var i = 0; i < length; i++) {
                check = ((check || modulus) * 2 % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
            }
            return check === 1;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            base64: {
                "default": "Please enter a valid base 64 encoded"
            }
        }
    });
    FormValidation.Validator.base64 = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "base64");
            if (value === "") {
                return true;
            }
            return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            between: {
                "default": "Please enter a value between %s and %s",
                notInclusive: "Please enter a value between %s and %s strictly"
            }
        }
    });
    FormValidation.Validator.between = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max",
            inclusive: "inclusive"
        },
        enableByHtml5: function($field) {
            if ("range" === $field.attr("type")) {
                return {
                    min: $field.attr("min"),
                    max: $field.attr("max")
                };
            }
            return false;
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "between");
            if (value === "") {
                return true;
            }
            value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }
            var locale = validator.getLocale(), min = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min), max = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max), minValue = this._format(min), maxValue = this._format(max);
            value = parseFloat(value);
            return options.inclusive === true || options.inclusive === undefined ? {
                valid: value >= minValue && value <= maxValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between["default"], [ min, max ])
            } : {
                valid: value > minValue && value < maxValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between.notInclusive, [ min, max ])
            };
        },
        _format: function(value) {
            return (value + "").replace(",", ".");
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            bic: {
                "default": "Please enter a valid BIC number"
            }
        }
    });
    FormValidation.Validator.bic = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "bic");
            if (value === "") {
                return true;
            }
            return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.Validator.blank = {
        validate: function(validator, $field, options) {
            return true;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            callback: {
                "default": "Please enter a valid value"
            }
        }
    });
    FormValidation.Validator.callback = {
        html5Attributes: {
            message: "message",
            callback: "callback"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "callback"), dfd = new $.Deferred(), result = {
                valid: true
            };
            if (options.callback) {
                var response = FormValidation.Helper.call(options.callback, [ value, validator, $field ]);
                result = "boolean" === typeof response || null === response ? {
                    valid: response
                } : response;
            }
            dfd.resolve($field, "callback", result);
            return dfd;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            choice: {
                "default": "Please enter a valid value",
                less: "Please choose %s options at minimum",
                more: "Please choose %s options at maximum",
                between: "Please choose %s - %s options"
            }
        }
    });
    FormValidation.Validator.choice = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        validate: function(validator, $field, options) {
            var locale = validator.getLocale(), ns = validator.getNamespace(), numChoices = $field.is("select") ? validator.getFieldElements($field.attr("data-" + ns + "-field")).find("option").filter(":selected").length : validator.getFieldElements($field.attr("data-" + ns + "-field")).filter(":checked").length, min = options.min ? $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min) : null, max = options.max ? $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max) : null, isValid = true, message = options.message || FormValidation.I18n[locale].choice["default"];
            if (min && numChoices < parseInt(min, 10) || max && numChoices > parseInt(max, 10)) {
                isValid = false;
            }
            switch (true) {
              case !!min && !!max:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.between, [ parseInt(min, 10), parseInt(max, 10) ]);
                break;

              case !!min:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.less, parseInt(min, 10));
                break;

              case !!max:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.more, parseInt(max, 10));
                break;

              default:
                break;
            }
            return {
                valid: isValid,
                message: message
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            color: {
                "default": "Please enter a valid color"
            }
        }
    });
    FormValidation.Validator.color = {
        html5Attributes: {
            message: "message",
            type: "type"
        },
        enableByHtml5: function($field) {
            return "color" === $field.attr("type");
        },
        SUPPORTED_TYPES: [ "hex", "rgb", "rgba", "hsl", "hsla", "keyword" ],
        KEYWORD_COLORS: [ "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen" ],
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "color");
            if (value === "") {
                return true;
            }
            if (this.enableByHtml5($field)) {
                return /^#[0-9A-F]{6}$/i.test(value);
            }
            var types = options.type || this.SUPPORTED_TYPES;
            if (!$.isArray(types)) {
                types = types.replace(/s/g, "").split(",");
            }
            var method, type, isValid = false;
            for (var i = 0; i < types.length; i++) {
                type = types[i];
                method = "_" + type.toLowerCase();
                isValid = isValid || this[method](value);
                if (isValid) {
                    return true;
                }
            }
            return false;
        },
        _hex: function(value) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        },
        _hsl: function(value) {
            return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
        },
        _hsla: function(value) {
            return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
        },
        _keyword: function(value) {
            return $.inArray(value, this.KEYWORD_COLORS) >= 0;
        },
        _rgb: function(value) {
            var regexInteger = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/, regexPercent = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        },
        _rgba: function(value) {
            var regexInteger = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/, regexPercent = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            creditCard: {
                "default": "Please enter a valid credit card number"
            }
        }
    });
    FormValidation.Validator.creditCard = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "creditCard");
            if (value === "") {
                return true;
            }
            if (/[^0-9-\s]+/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, "");
            if (!FormValidation.Helper.luhn(value)) {
                return false;
            }
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [ 15 ],
                    prefix: [ "34", "37" ]
                },
                DINERS_CLUB: {
                    length: [ 14 ],
                    prefix: [ "300", "301", "302", "303", "304", "305", "36" ]
                },
                DINERS_CLUB_US: {
                    length: [ 16 ],
                    prefix: [ "54", "55" ]
                },
                DISCOVER: {
                    length: [ 16 ],
                    prefix: [ "6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65" ]
                },
                JCB: {
                    length: [ 16 ],
                    prefix: [ "3528", "3529", "353", "354", "355", "356", "357", "358" ]
                },
                LASER: {
                    length: [ 16, 17, 18, 19 ],
                    prefix: [ "6304", "6706", "6771", "6709" ]
                },
                MAESTRO: {
                    length: [ 12, 13, 14, 15, 16, 17, 18, 19 ],
                    prefix: [ "5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766" ]
                },
                MASTERCARD: {
                    length: [ 16 ],
                    prefix: [ "51", "52", "53", "54", "55" ]
                },
                SOLO: {
                    length: [ 16, 18, 19 ],
                    prefix: [ "6334", "6767" ]
                },
                UNIONPAY: {
                    length: [ 16, 17, 18, 19 ],
                    prefix: [ "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925" ]
                },
                VISA: {
                    length: [ 16 ],
                    prefix: [ "4" ]
                }
            };
            var type, i;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (value.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i] && $.inArray(value.length, cards[type].length) !== -1) {
                        return {
                            valid: true,
                            type: type
                        };
                    }
                }
            }
            return false;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            cusip: {
                "default": "Please enter a valid CUSIP number"
            }
        }
    });
    FormValidation.Validator.cusip = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "cusip");
            if (value === "") {
                return true;
            }
            value = value.toUpperCase();
            if (!/^[0-9A-Z]{9}$/.test(value)) {
                return false;
            }
            var converted = $.map(value.split(""), function(item) {
                var code = item.charCodeAt(0);
                return code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0) ? code - "A".charCodeAt(0) + 10 : item;
            }), length = converted.length, sum = 0;
            for (var i = 0; i < length - 1; i++) {
                var num = parseInt(converted[i], 10);
                if (i % 2 !== 0) {
                    num *= 2;
                }
                if (num > 9) {
                    num -= 9;
                }
                sum += num;
            }
            sum = (10 - sum % 10) % 10;
            return sum === parseInt(converted[length - 1], 10);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            cvv: {
                "default": "Please enter a valid CVV number"
            }
        }
    });
    FormValidation.Validator.cvv = {
        html5Attributes: {
            message: "message",
            ccfield: "creditCardField"
        },
        init: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.onLiveChange(creditCardField, "live_cvv", function() {
                    var status = validator.getStatus($field, "cvv");
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },
        destroy: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.offLiveChange(creditCardField, "live_cvv");
            }
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "cvv");
            if (value === "") {
                return true;
            }
            if (!/^[0-9]{3,4}$/.test(value)) {
                return false;
            }
            if (!options.creditCardField) {
                return true;
            }
            var creditCard = validator.getFieldElements(options.creditCardField).val();
            if (creditCard === "") {
                return true;
            }
            creditCard = creditCard.replace(/\D/g, "");
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [ 15 ],
                    prefix: [ "34", "37" ]
                },
                DINERS_CLUB: {
                    length: [ 14 ],
                    prefix: [ "300", "301", "302", "303", "304", "305", "36" ]
                },
                DINERS_CLUB_US: {
                    length: [ 16 ],
                    prefix: [ "54", "55" ]
                },
                DISCOVER: {
                    length: [ 16 ],
                    prefix: [ "6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65" ]
                },
                JCB: {
                    length: [ 16 ],
                    prefix: [ "3528", "3529", "353", "354", "355", "356", "357", "358" ]
                },
                LASER: {
                    length: [ 16, 17, 18, 19 ],
                    prefix: [ "6304", "6706", "6771", "6709" ]
                },
                MAESTRO: {
                    length: [ 12, 13, 14, 15, 16, 17, 18, 19 ],
                    prefix: [ "5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766" ]
                },
                MASTERCARD: {
                    length: [ 16 ],
                    prefix: [ "51", "52", "53", "54", "55" ]
                },
                SOLO: {
                    length: [ 16, 18, 19 ],
                    prefix: [ "6334", "6767" ]
                },
                UNIONPAY: {
                    length: [ 16, 17, 18, 19 ],
                    prefix: [ "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925" ]
                },
                VISA: {
                    length: [ 16 ],
                    prefix: [ "4" ]
                }
            };
            var type, i, creditCardType = null;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (creditCard.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i] && $.inArray(creditCard.length, cards[type].length) !== -1) {
                        creditCardType = type;
                        break;
                    }
                }
            }
            return creditCardType === null ? false : "AMERICAN_EXPRESS" === creditCardType ? value.length === 4 : value.length === 3;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            date: {
                "default": "Please enter a valid date",
                min: "Please enter a date after %s",
                max: "Please enter a date before %s",
                range: "Please enter a date in the range %s - %s"
            }
        }
    });
    FormValidation.Validator.date = {
        html5Attributes: {
            message: "message",
            format: "format",
            min: "min",
            max: "max",
            separator: "separator"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "date");
            if (value === "") {
                return true;
            }
            options.format = options.format || "MM/DD/YYYY";
            if ($field.attr("type") === "date") {
                options.format = "YYYY-MM-DD";
            }
            var locale = validator.getLocale(), message = options.message || FormValidation.I18n[locale].date["default"], formats = options.format.split(" "), dateFormat = formats[0], timeFormat = formats.length > 1 ? formats[1] : null, amOrPm = formats.length > 2 ? formats[2] : null, sections = value.split(" "), date = sections[0], time = sections.length > 1 ? sections[1] : null;
            if (formats.length !== sections.length) {
                return {
                    valid: false,
                    message: message
                };
            }
            var separator = options.separator;
            if (!separator) {
                separator = date.indexOf("/") !== -1 ? "/" : date.indexOf("-") !== -1 ? "-" : date.indexOf(".") !== -1 ? "." : null;
            }
            if (separator === null || date.indexOf(separator) === -1) {
                return {
                    valid: false,
                    message: message
                };
            }
            date = date.split(separator);
            dateFormat = dateFormat.split(separator);
            if (date.length !== dateFormat.length) {
                return {
                    valid: false,
                    message: message
                };
            }
            var year = date[$.inArray("YYYY", dateFormat)], month = date[$.inArray("MM", dateFormat)], day = date[$.inArray("DD", dateFormat)];
            if (!year || !month || !day || year.length !== 4) {
                return {
                    valid: false,
                    message: message
                };
            }
            var minutes = null, hours = null, seconds = null;
            if (timeFormat) {
                timeFormat = timeFormat.split(":");
                time = time.split(":");
                if (timeFormat.length !== time.length) {
                    return {
                        valid: false,
                        message: message
                    };
                }
                hours = time.length > 0 ? time[0] : null;
                minutes = time.length > 1 ? time[1] : null;
                seconds = time.length > 2 ? time[2] : null;
                if (hours === "" || minutes === "" || seconds === "") {
                    return {
                        valid: false,
                        message: message
                    };
                }
                if (seconds) {
                    if (isNaN(seconds) || seconds.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    seconds = parseInt(seconds, 10);
                    if (seconds < 0 || seconds > 60) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
                if (hours) {
                    if (isNaN(hours) || hours.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    hours = parseInt(hours, 10);
                    if (hours < 0 || hours >= 24 || amOrPm && hours > 12) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
                if (minutes) {
                    if (isNaN(minutes) || minutes.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    minutes = parseInt(minutes, 10);
                    if (minutes < 0 || minutes > 59) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
            }
            var valid = FormValidation.Helper.date(year, month, day), min = null, max = null, minOption = options.min, maxOption = options.max;
            if (minOption) {
                if (isNaN(Date.parse(minOption))) {
                    minOption = validator.getDynamicOption($field, minOption);
                }
                min = minOption instanceof Date ? minOption : this._parseDate(minOption, dateFormat, separator);
                minOption = minOption instanceof Date ? this._formatDate(minOption, options.format) : minOption;
            }
            if (maxOption) {
                if (isNaN(Date.parse(maxOption))) {
                    maxOption = validator.getDynamicOption($field, maxOption);
                }
                max = maxOption instanceof Date ? maxOption : this._parseDate(maxOption, dateFormat, separator);
                maxOption = maxOption instanceof Date ? this._formatDate(maxOption, options.format) : maxOption;
            }
            date = new Date(year, month - 1, day, hours, minutes, seconds);
            switch (true) {
              case minOption && !maxOption && valid:
                valid = date.getTime() >= min.getTime();
                message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.min, minOption);
                break;

              case maxOption && !minOption && valid:
                valid = date.getTime() <= max.getTime();
                message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.max, maxOption);
                break;

              case maxOption && minOption && valid:
                valid = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();
                message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.range, [ minOption, maxOption ]);
                break;

              default:
                break;
            }
            return {
                valid: valid,
                message: message
            };
        },
        _parseDate: function(date, format, separator) {
            var minutes = 0, hours = 0, seconds = 0, sections = date.split(" "), dateSection = sections[0], timeSection = sections.length > 1 ? sections[1] : null;
            dateSection = dateSection.split(separator);
            var year = dateSection[$.inArray("YYYY", format)], month = dateSection[$.inArray("MM", format)], day = dateSection[$.inArray("DD", format)];
            if (timeSection) {
                timeSection = timeSection.split(":");
                hours = timeSection.length > 0 ? timeSection[0] : null;
                minutes = timeSection.length > 1 ? timeSection[1] : null;
                seconds = timeSection.length > 2 ? timeSection[2] : null;
            }
            return new Date(year, month - 1, day, hours, minutes, seconds);
        },
        _formatDate: function(date, format) {
            format = format.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss");
            var replacer = {
                d: function(date) {
                    return date.getDate();
                },
                dd: function(date) {
                    var d = date.getDate();
                    return d < 10 ? "0" + d : d;
                },
                m: function(date) {
                    return date.getMonth() + 1;
                },
                mm: function(date) {
                    var m = date.getMonth() + 1;
                    return m < 10 ? "0" + m : m;
                },
                yy: function(date) {
                    return ("" + date.getFullYear()).substr(2);
                },
                yyyy: function(date) {
                    return date.getFullYear();
                },
                h: function(date) {
                    return date.getHours() % 12 || 12;
                },
                hh: function(date) {
                    var h = date.getHours() % 12 || 12;
                    return h < 10 ? "0" + h : h;
                },
                H: function(date) {
                    return date.getHours();
                },
                HH: function(date) {
                    var H = date.getHours();
                    return H < 10 ? "0" + H : H;
                },
                M: function(date) {
                    return date.getMinutes();
                },
                MM: function(date) {
                    var M = date.getMinutes();
                    return M < 10 ? "0" + M : M;
                },
                s: function(date) {
                    return date.getSeconds();
                },
                ss: function(date) {
                    var s = date.getSeconds();
                    return s < 10 ? "0" + s : s;
                }
            };
            return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(match) {
                return replacer[match] ? replacer[match](date) : match.slice(1, match.length - 1);
            });
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            different: {
                "default": "Please enter a different value"
            }
        }
    });
    FormValidation.Validator.different = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        init: function(validator, $field, options) {
            var fields = options.field.split(",");
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.onLiveChange(compareWith, "live_different", function() {
                    var status = validator.getStatus($field, "different");
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },
        destroy: function(validator, $field, options) {
            var fields = options.field.split(",");
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.offLiveChange(compareWith, "live_different");
            }
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "different");
            if (value === "") {
                return true;
            }
            var fields = options.field.split(","), isValid = true;
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                if (compareWith == null || compareWith.length === 0) {
                    continue;
                }
                var compareValue = validator.getFieldValue(compareWith, "different");
                if (value === compareValue) {
                    isValid = false;
                } else if (compareValue !== "") {
                    validator.updateStatus(compareWith, validator.STATUS_VALID, "different");
                }
            }
            return isValid;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            digits: {
                "default": "Please enter only digits"
            }
        }
    });
    FormValidation.Validator.digits = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "digits");
            if (value === "") {
                return true;
            }
            return /^\d+$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            ean: {
                "default": "Please enter a valid EAN number"
            }
        }
    });
    FormValidation.Validator.ean = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "ean");
            if (value === "") {
                return true;
            }
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(value)) {
                return false;
            }
            var length = value.length, sum = 0, weight = length === 8 ? [ 3, 1 ] : [ 1, 3 ];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = (10 - sum % 10) % 10;
            return sum + "" === value.charAt(length - 1);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            ein: {
                "default": "Please enter a valid EIN number"
            }
        }
    });
    FormValidation.Validator.ein = {
        CAMPUS: {
            ANDOVER: [ "10", "12" ],
            ATLANTA: [ "60", "67" ],
            AUSTIN: [ "50", "53" ],
            BROOKHAVEN: [ "01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65" ],
            CINCINNATI: [ "30", "32", "35", "36", "37", "38", "61" ],
            FRESNO: [ "15", "24" ],
            KANSAS_CITY: [ "40", "44" ],
            MEMPHIS: [ "94", "95" ],
            OGDEN: [ "80", "90" ],
            PHILADELPHIA: [ "33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99" ],
            INTERNET: [ "20", "26", "27", "45", "46" ],
            SMALL_BUSINESS_ADMINISTRATION: [ "31" ]
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "ein");
            if (value === "") {
                return true;
            }
            if (!/^[0-9]{2}-?[0-9]{7}$/.test(value)) {
                return false;
            }
            var campus = value.substr(0, 2) + "";
            for (var key in this.CAMPUS) {
                if ($.inArray(campus, this.CAMPUS[key]) !== -1) {
                    return {
                        valid: true,
                        campus: key
                    };
                }
            }
            return false;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            emailAddress: {
                "default": "Please enter a valid email address"
            }
        }
    });
    FormValidation.Validator.emailAddress = {
        html5Attributes: {
            message: "message",
            multiple: "multiple",
            separator: "separator"
        },
        enableByHtml5: function($field) {
            return "email" === $field.attr("type");
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "emailAddress");
            if (value === "") {
                return true;
            }
            var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, allowMultiple = options.multiple === true || options.multiple === "true";
            if (allowMultiple) {
                var separator = options.separator || /[,;]/, addresses = this._splitEmailAddresses(value, separator);
                for (var i = 0; i < addresses.length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return false;
                    }
                }
                return true;
            } else {
                return emailRegExp.test(value);
            }
        },
        _splitEmailAddresses: function(emailAddresses, separator) {
            var quotedFragments = emailAddresses.split(/"/), quotedFragmentCount = quotedFragments.length, emailAddressArray = [], nextEmailAddress = "";
            for (var i = 0; i < quotedFragmentCount; i++) {
                if (i % 2 === 0) {
                    var splitEmailAddressFragments = quotedFragments[i].split(separator), splitEmailAddressFragmentCount = splitEmailAddressFragments.length;
                    if (splitEmailAddressFragmentCount === 1) {
                        nextEmailAddress += splitEmailAddressFragments[0];
                    } else {
                        emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);
                        for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                            emailAddressArray.push(splitEmailAddressFragments[j]);
                        }
                        nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                    }
                } else {
                    nextEmailAddress += '"' + quotedFragments[i];
                    if (i < quotedFragmentCount - 1) {
                        nextEmailAddress += '"';
                    }
                }
            }
            emailAddressArray.push(nextEmailAddress);
            return emailAddressArray;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            file: {
                "default": "Please choose a valid file"
            }
        }
    });
    FormValidation.Validator.file = {
        html5Attributes: {
            extension: "extension",
            maxfiles: "maxFiles",
            minfiles: "minFiles",
            maxsize: "maxSize",
            minsize: "minSize",
            maxtotalsize: "maxTotalSize",
            mintotalsize: "minTotalSize",
            message: "message",
            type: "type"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "file");
            if (value === "") {
                return true;
            }
            var ext, extensions = options.extension ? options.extension.toLowerCase().split(",") : null, types = options.type ? options.type.toLowerCase().split(",") : null, html5 = window.File && window.FileList && window.FileReader;
            if (html5) {
                var files = $field.get(0).files, total = files.length, totalSize = 0;
                if (options.maxFiles && total > parseInt(options.maxFiles, 10) || options.minFiles && total < parseInt(options.minFiles, 10)) {
                    return false;
                }
                for (var i = 0; i < total; i++) {
                    totalSize += files[i].size;
                    ext = files[i].name.substr(files[i].name.lastIndexOf(".") + 1);
                    if (options.minSize && files[i].size < parseInt(options.minSize, 10) || options.maxSize && files[i].size > parseInt(options.maxSize, 10) || extensions && $.inArray(ext.toLowerCase(), extensions) === -1 || files[i].type && types && $.inArray(files[i].type.toLowerCase(), types) === -1) {
                        return false;
                    }
                }
                if (options.maxTotalSize && totalSize > parseInt(options.maxTotalSize, 10) || options.minTotalSize && totalSize < parseInt(options.minTotalSize, 10)) {
                    return false;
                }
            } else {
                ext = value.substr(value.lastIndexOf(".") + 1);
                if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
                    return false;
                }
            }
            return true;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            greaterThan: {
                "default": "Please enter a value greater than or equal to %s",
                notInclusive: "Please enter a value greater than %s"
            }
        }
    });
    FormValidation.Validator.greaterThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function($field) {
            var type = $field.attr("type"), min = $field.attr("min");
            if (min && type !== "date") {
                return {
                    value: min
                };
            }
            return false;
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "greaterThan");
            if (value === "") {
                return true;
            }
            value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }
            var locale = validator.getLocale(), compareTo = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value), compareToValue = this._format(compareTo);
            value = parseFloat(value);
            return options.inclusive === true || options.inclusive === undefined ? {
                valid: value >= compareToValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan["default"], compareTo)
            } : {
                valid: value > compareToValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan.notInclusive, compareTo)
            };
        },
        _format: function(value) {
            return (value + "").replace(",", ".");
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            grid: {
                "default": "Please enter a valid GRId number"
            }
        }
    });
    FormValidation.Validator.grid = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "grid");
            if (value === "") {
                return true;
            }
            value = value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, "").replace(/-/g, "");
            if ("GRID:" === value.substr(0, 5)) {
                value = value.substr(5);
            }
            return FormValidation.Helper.mod37And36(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            hex: {
                "default": "Please enter a valid hexadecimal number"
            }
        }
    });
    FormValidation.Validator.hex = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "hex");
            if (value === "") {
                return true;
            }
            return /^[0-9a-fA-F]+$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            iban: {
                "default": "Please enter a valid IBAN number",
                country: "Please enter a valid IBAN number in %s",
                countries: {
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AL: "Albania",
                    AO: "Angola",
                    AT: "Austria",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BR: "Brazil",
                    CH: "Switzerland",
                    CI: "Ivory Coast",
                    CM: "Cameroon",
                    CR: "Costa Rica",
                    CV: "Cape Verde",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DK: "Denmark",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EE: "Estonia",
                    ES: "Spain",
                    FI: "Finland",
                    FO: "Faroe Islands",
                    FR: "France",
                    GB: "United Kingdom",
                    GE: "Georgia",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GR: "Greece",
                    GT: "Guatemala",
                    HR: "Croatia",
                    HU: "Hungary",
                    IE: "Ireland",
                    IL: "Israel",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JO: "Jordan",
                    KW: "Kuwait",
                    KZ: "Kazakhstan",
                    LB: "Lebanon",
                    LI: "Liechtenstein",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MG: "Madagascar",
                    MK: "Macedonia",
                    ML: "Mali",
                    MR: "Mauritania",
                    MT: "Malta",
                    MU: "Mauritius",
                    MZ: "Mozambique",
                    NL: "Netherlands",
                    NO: "Norway",
                    PK: "Pakistan",
                    PL: "Poland",
                    PS: "Palestine",
                    PT: "Portugal",
                    QA: "Qatar",
                    RO: "Romania",
                    RS: "Serbia",
                    SA: "Saudi Arabia",
                    SE: "Sweden",
                    SI: "Slovenia",
                    SK: "Slovakia",
                    SM: "San Marino",
                    SN: "Senegal",
                    TN: "Tunisia",
                    TR: "Turkey",
                    VG: "Virgin Islands, British"
                }
            }
        }
    });
    FormValidation.Validator.iban = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        REGEX: {
            AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
            AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
            AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
            AO: "AO[0-9]{2}[0-9]{21}",
            AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
            AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
            BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
            BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
            BF: "BF[0-9]{2}[0-9]{23}",
            BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
            BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
            BI: "BI[0-9]{2}[0-9]{12}",
            BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
            BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
            CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
            CM: "CM[0-9]{2}[0-9]{23}",
            CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
            CV: "CV[0-9]{2}[0-9]{21}",
            CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
            CZ: "CZ[0-9]{2}[0-9]{20}",
            DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
            DK: "DK[0-9]{2}[0-9]{14}",
            DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
            DZ: "DZ[0-9]{2}[0-9]{20}",
            EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
            ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
            FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
            FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
            GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
            GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
            GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
            HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
            HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
            IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
            IR: "IR[0-9]{2}[0-9]{22}",
            IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
            IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
            KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
            KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
            LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
            LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
            MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            MD: "MD[0-9]{2}[A-Z0-9]{20}",
            ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            MG: "MG[0-9]{2}[0-9]{23}",
            MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
            ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
            MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
            MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
            MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
            MZ: "MZ[0-9]{2}[0-9]{21}",
            NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
            NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
            PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
            PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
            QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
            SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
            SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
            SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
            SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
            TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
            VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "iban");
            if (value === "") {
                return true;
            }
            value = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            var country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== "string" || !this.REGEX[country]) {
                country = validator.getDynamicOption($field, country);
            }
            var locale = validator.getLocale();
            if (!this.REGEX[country]) {
                return true;
            }
            if (!new RegExp("^" + this.REGEX[country] + "$").test(value)) {
                return {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
                };
            }
            value = value.substr(4) + value.substr(0, 4);
            value = $.map(value.split(""), function(n) {
                var code = n.charCodeAt(0);
                return code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0) ? code - "A".charCodeAt(0) + 10 : n;
            });
            value = value.join("");
            var temp = parseInt(value.substr(0, 1), 10), length = value.length;
            for (var i = 1; i < length; ++i) {
                temp = (temp * 10 + parseInt(value.substr(i, 1), 10)) % 97;
            }
            return {
                valid: temp === 1,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            id: {
                "default": "Please enter a valid identification number",
                country: "Please enter a valid identification number in %s",
                countries: {
                    BA: "Bosnia and Herzegovina",
                    BG: "Bulgaria",
                    BR: "Brazil",
                    CH: "Switzerland",
                    CL: "Chile",
                    CN: "China",
                    CZ: "Czech Republic",
                    DK: "Denmark",
                    EE: "Estonia",
                    ES: "Spain",
                    FI: "Finland",
                    HR: "Croatia",
                    IE: "Ireland",
                    IS: "Iceland",
                    LT: "Lithuania",
                    LV: "Latvia",
                    ME: "Montenegro",
                    MK: "Macedonia",
                    NL: "Netherlands",
                    PL: "Poland",
                    RO: "Romania",
                    RS: "Serbia",
                    SE: "Sweden",
                    SI: "Slovenia",
                    SK: "Slovakia",
                    SM: "San Marino",
                    TH: "Thailand",
                    ZA: "South Africa"
                }
            }
        }
    });
    FormValidation.Validator.id = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: [ "BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "PL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA" ],
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "id");
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== "string" || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                country = validator.getDynamicOption($field, country);
            }
            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }
            var method = [ "_", country.toLowerCase() ].join("");
            return this[method](value) ? true : {
                valid: false,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].id.country, FormValidation.I18n[locale].id.countries[country.toUpperCase()])
            };
        },
        _validateJMBG: function(value, countryCode) {
            if (!/^\d{13}$/.test(value)) {
                return false;
            }
            var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 3), 10), rr = parseInt(value.substr(7, 2), 10), k = parseInt(value.substr(12, 1), 10);
            if (day > 31 || month > 12) {
                return false;
            }
            var sum = 0;
            for (var i = 0; i < 6; i++) {
                sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
            }
            sum = 11 - sum % 11;
            if (sum === 10 || sum === 11) {
                sum = 0;
            }
            if (sum !== k) {
                return false;
            }
            switch (countryCode.toUpperCase()) {
              case "BA":
                return 10 <= rr && rr <= 19;

              case "MK":
                return 41 <= rr && rr <= 49;

              case "ME":
                return 20 <= rr && rr <= 29;

              case "RS":
                return 70 <= rr && rr <= 99;

              case "SI":
                return 50 <= rr && rr <= 59;

              default:
                return true;
            }
        },
        _ba: function(value) {
            return this._validateJMBG(value, "BA");
        },
        _mk: function(value) {
            return this._validateJMBG(value, "MK");
        },
        _me: function(value) {
            return this._validateJMBG(value, "ME");
        },
        _rs: function(value) {
            return this._validateJMBG(value, "RS");
        },
        _si: function(value) {
            return this._validateJMBG(value, "SI");
        },
        _bg: function(value) {
            if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, "");
            var year = parseInt(value.substr(0, 2), 10) + 1900, month = parseInt(value.substr(2, 2), 10), day = parseInt(value.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            } else if (month > 20) {
                year -= 100;
                month -= 20;
            }
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            var sum = 0, weight = [ 2, 4, 8, 5, 10, 9, 7, 3, 6 ];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11 % 10;
            return sum + "" === value.substr(9, 1);
        },
        _br: function(value) {
            value = value.replace(/\D/g, "");
            if (!/^\d{11}$/.test(value) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)) {
                return false;
            }
            var d1 = 0;
            for (var i = 0; i < 9; i++) {
                d1 += (10 - i) * parseInt(value.charAt(i), 10);
            }
            d1 = 11 - d1 % 11;
            if (d1 === 10 || d1 === 11) {
                d1 = 0;
            }
            if (d1 + "" !== value.charAt(9)) {
                return false;
            }
            var d2 = 0;
            for (i = 0; i < 10; i++) {
                d2 += (11 - i) * parseInt(value.charAt(i), 10);
            }
            d2 = 11 - d2 % 11;
            if (d2 === 10 || d2 === 11) {
                d2 = 0;
            }
            return d2 + "" === value.charAt(10);
        },
        _ch: function(value) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, "").substr(3);
            var length = value.length, sum = 0, weight = length === 8 ? [ 3, 1 ] : [ 1, 3 ];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return sum + "" === value.charAt(length - 1);
        },
        _cl: function(value) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
                return false;
            }
            value = value.replace(/\-/g, "");
            while (value.length < 9) {
                value = "0" + value;
            }
            var sum = 0, weight = [ 3, 2, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            } else if (sum === 10) {
                sum = "K";
            }
            return sum + "" === value.charAt(8).toUpperCase();
        },
        _cn: function(value) {
            value = value.trim();
            if (!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)) {
                return false;
            }
            var adminDivisionCodes = {
                11: {
                    0: [ 0 ],
                    1: [ [ 0, 9 ], [ 11, 17 ] ],
                    2: [ 0, 28, 29 ]
                },
                12: {
                    0: [ 0 ],
                    1: [ [ 0, 16 ] ],
                    2: [ 0, 21, 23, 25 ]
                },
                13: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 7, 8, 21, [ 23, 33 ], [ 81, 85 ] ],
                    2: [ [ 0, 5 ], [ 7, 9 ], [ 23, 25 ], 27, 29, 30, 81, 83 ],
                    3: [ [ 0, 4 ], [ 21, 24 ] ],
                    4: [ [ 0, 4 ], 6, 21, [ 23, 35 ], 81 ],
                    5: [ [ 0, 3 ], [ 21, 35 ], 81, 82 ],
                    6: [ [ 0, 4 ], [ 21, 38 ], [ 81, 84 ] ],
                    7: [ [ 0, 3 ], 5, 6, [ 21, 33 ] ],
                    8: [ [ 0, 4 ], [ 21, 28 ] ],
                    9: [ [ 0, 3 ], [ 21, 30 ], [ 81, 84 ] ],
                    10: [ [ 0, 3 ], [ 22, 26 ], 28, 81, 82 ],
                    11: [ [ 0, 2 ], [ 21, 28 ], 81, 82 ]
                },
                14: {
                    0: [ 0 ],
                    1: [ 0, 1, [ 5, 10 ], [ 21, 23 ], 81 ],
                    2: [ [ 0, 3 ], 11, 12, [ 21, 27 ] ],
                    3: [ [ 0, 3 ], 11, 21, 22 ],
                    4: [ [ 0, 2 ], 11, 21, [ 23, 31 ], 81 ],
                    5: [ [ 0, 2 ], 21, 22, 24, 25, 81 ],
                    6: [ [ 0, 3 ], [ 21, 24 ] ],
                    7: [ [ 0, 2 ], [ 21, 29 ], 81 ],
                    8: [ [ 0, 2 ], [ 21, 30 ], 81, 82 ],
                    9: [ [ 0, 2 ], [ 21, 32 ], 81 ],
                    10: [ [ 0, 2 ], [ 21, 34 ], 81, 82 ],
                    11: [ [ 0, 2 ], [ 21, 30 ], 81, 82 ],
                    23: [ [ 0, 3 ], 22, 23, [ 25, 30 ], 32, 33 ]
                },
                15: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], [ 21, 25 ] ],
                    2: [ [ 0, 7 ], [ 21, 23 ] ],
                    3: [ [ 0, 4 ] ],
                    4: [ [ 0, 4 ], [ 21, 26 ], [ 28, 30 ] ],
                    5: [ [ 0, 2 ], [ 21, 26 ], 81 ],
                    6: [ [ 0, 2 ], [ 21, 27 ] ],
                    7: [ [ 0, 3 ], [ 21, 27 ], [ 81, 85 ] ],
                    8: [ [ 0, 2 ], [ 21, 26 ] ],
                    9: [ [ 0, 2 ], [ 21, 29 ], 81 ],
                    22: [ [ 0, 2 ], [ 21, 24 ] ],
                    25: [ [ 0, 2 ], [ 22, 31 ] ],
                    26: [ [ 0, 2 ], [ 24, 27 ], [ 29, 32 ], 34 ],
                    28: [ 0, 1, [ 22, 27 ] ],
                    29: [ 0, [ 21, 23 ] ]
                },
                21: {
                    0: [ 0 ],
                    1: [ [ 0, 6 ], [ 11, 14 ], [ 22, 24 ], 81 ],
                    2: [ [ 0, 4 ], [ 11, 13 ], 24, [ 81, 83 ] ],
                    3: [ [ 0, 4 ], 11, 21, 23, 81 ],
                    4: [ [ 0, 4 ], 11, [ 21, 23 ] ],
                    5: [ [ 0, 5 ], 21, 22 ],
                    6: [ [ 0, 4 ], 24, 81, 82 ],
                    7: [ [ 0, 3 ], 11, 26, 27, 81, 82 ],
                    8: [ [ 0, 4 ], 11, 81, 82 ],
                    9: [ [ 0, 5 ], 11, 21, 22 ],
                    10: [ [ 0, 5 ], 11, 21, 81 ],
                    11: [ [ 0, 3 ], 21, 22 ],
                    12: [ [ 0, 2 ], 4, 21, 23, 24, 81, 82 ],
                    13: [ [ 0, 3 ], 21, 22, 24, 81, 82 ],
                    14: [ [ 0, 4 ], 21, 22, 81 ]
                },
                22: {
                    0: [ 0 ],
                    1: [ [ 0, 6 ], 12, 22, [ 81, 83 ] ],
                    2: [ [ 0, 4 ], 11, 21, [ 81, 84 ] ],
                    3: [ [ 0, 3 ], 22, 23, 81, 82 ],
                    4: [ [ 0, 3 ], 21, 22 ],
                    5: [ [ 0, 3 ], 21, 23, 24, 81, 82 ],
                    6: [ [ 0, 2 ], 4, 5, [ 21, 23 ], 25, 81 ],
                    7: [ [ 0, 2 ], [ 21, 24 ], 81 ],
                    8: [ [ 0, 2 ], 21, 22, 81, 82 ],
                    24: [ [ 0, 6 ], 24, 26 ]
                },
                23: {
                    0: [ 0 ],
                    1: [ [ 0, 12 ], 21, [ 23, 29 ], [ 81, 84 ] ],
                    2: [ [ 0, 8 ], 21, [ 23, 25 ], 27, [ 29, 31 ], 81 ],
                    3: [ [ 0, 7 ], 21, 81, 82 ],
                    4: [ [ 0, 7 ], 21, 22 ],
                    5: [ [ 0, 3 ], 5, 6, [ 21, 24 ] ],
                    6: [ [ 0, 6 ], [ 21, 24 ] ],
                    7: [ [ 0, 16 ], 22, 81 ],
                    8: [ [ 0, 5 ], 11, 22, 26, 28, 33, 81, 82 ],
                    9: [ [ 0, 4 ], 21 ],
                    10: [ [ 0, 5 ], 24, 25, 81, [ 83, 85 ] ],
                    11: [ [ 0, 2 ], 21, 23, 24, 81, 82 ],
                    12: [ [ 0, 2 ], [ 21, 26 ], [ 81, 83 ] ],
                    27: [ [ 0, 4 ], [ 21, 23 ] ]
                },
                31: {
                    0: [ 0 ],
                    1: [ 0, 1, [ 3, 10 ], [ 12, 20 ] ],
                    2: [ 0, 30 ]
                },
                32: {
                    0: [ 0 ],
                    1: [ [ 0, 7 ], 11, [ 13, 18 ], 24, 25 ],
                    2: [ [ 0, 6 ], 11, 81, 82 ],
                    3: [ [ 0, 5 ], 11, 12, [ 21, 24 ], 81, 82 ],
                    4: [ [ 0, 2 ], 4, 5, 11, 12, 81, 82 ],
                    5: [ [ 0, 9 ], [ 81, 85 ] ],
                    6: [ [ 0, 2 ], 11, 12, 21, 23, [ 81, 84 ] ],
                    7: [ 0, 1, 3, 5, 6, [ 21, 24 ] ],
                    8: [ [ 0, 4 ], 11, 26, [ 29, 31 ] ],
                    9: [ [ 0, 3 ], [ 21, 25 ], 28, 81, 82 ],
                    10: [ [ 0, 3 ], 11, 12, 23, 81, 84, 88 ],
                    11: [ [ 0, 2 ], 11, 12, [ 81, 83 ] ],
                    12: [ [ 0, 4 ], [ 81, 84 ] ],
                    13: [ [ 0, 2 ], 11, [ 21, 24 ] ]
                },
                33: {
                    0: [ 0 ],
                    1: [ [ 0, 6 ], [ 8, 10 ], 22, 27, 82, 83, 85 ],
                    2: [ 0, 1, [ 3, 6 ], 11, 12, 25, 26, [ 81, 83 ] ],
                    3: [ [ 0, 4 ], 22, 24, [ 26, 29 ], 81, 82 ],
                    4: [ [ 0, 2 ], 11, 21, 24, [ 81, 83 ] ],
                    5: [ [ 0, 3 ], [ 21, 23 ] ],
                    6: [ [ 0, 2 ], 21, 24, [ 81, 83 ] ],
                    7: [ [ 0, 3 ], 23, 26, 27, [ 81, 84 ] ],
                    8: [ [ 0, 3 ], 22, 24, 25, 81 ],
                    9: [ [ 0, 3 ], 21, 22 ],
                    10: [ [ 0, 4 ], [ 21, 24 ], 81, 82 ],
                    11: [ [ 0, 2 ], [ 21, 27 ], 81 ]
                },
                34: {
                    0: [ 0 ],
                    1: [ [ 0, 4 ], 11, [ 21, 24 ], 81 ],
                    2: [ [ 0, 4 ], 7, 8, [ 21, 23 ], 25 ],
                    3: [ [ 0, 4 ], 11, [ 21, 23 ] ],
                    4: [ [ 0, 6 ], 21 ],
                    5: [ [ 0, 4 ], 6, [ 21, 23 ] ],
                    6: [ [ 0, 4 ], 21 ],
                    7: [ [ 0, 3 ], 11, 21 ],
                    8: [ [ 0, 3 ], 11, [ 22, 28 ], 81 ],
                    10: [ [ 0, 4 ], [ 21, 24 ] ],
                    11: [ [ 0, 3 ], 22, [ 24, 26 ], 81, 82 ],
                    12: [ [ 0, 4 ], 21, 22, 25, 26, 82 ],
                    13: [ [ 0, 2 ], [ 21, 24 ] ],
                    14: [ [ 0, 2 ], [ 21, 24 ] ],
                    15: [ [ 0, 3 ], [ 21, 25 ] ],
                    16: [ [ 0, 2 ], [ 21, 23 ] ],
                    17: [ [ 0, 2 ], [ 21, 23 ] ],
                    18: [ [ 0, 2 ], [ 21, 25 ], 81 ]
                },
                35: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 11, [ 21, 25 ], 28, 81, 82 ],
                    2: [ [ 0, 6 ], [ 11, 13 ] ],
                    3: [ [ 0, 5 ], 22 ],
                    4: [ [ 0, 3 ], 21, [ 23, 30 ], 81 ],
                    5: [ [ 0, 5 ], 21, [ 24, 27 ], [ 81, 83 ] ],
                    6: [ [ 0, 3 ], [ 22, 29 ], 81 ],
                    7: [ [ 0, 2 ], [ 21, 25 ], [ 81, 84 ] ],
                    8: [ [ 0, 2 ], [ 21, 25 ], 81 ],
                    9: [ [ 0, 2 ], [ 21, 26 ], 81, 82 ]
                },
                36: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 11, [ 21, 24 ] ],
                    2: [ [ 0, 3 ], 22, 81 ],
                    3: [ [ 0, 2 ], 13, [ 21, 23 ] ],
                    4: [ [ 0, 3 ], 21, [ 23, 30 ], 81, 82 ],
                    5: [ [ 0, 2 ], 21 ],
                    6: [ [ 0, 2 ], 22, 81 ],
                    7: [ [ 0, 2 ], [ 21, 35 ], 81, 82 ],
                    8: [ [ 0, 3 ], [ 21, 30 ], 81 ],
                    9: [ [ 0, 2 ], [ 21, 26 ], [ 81, 83 ] ],
                    10: [ [ 0, 2 ], [ 21, 30 ] ],
                    11: [ [ 0, 2 ], [ 21, 30 ], 81 ]
                },
                37: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 12, 13, [ 24, 26 ], 81 ],
                    2: [ [ 0, 3 ], 5, [ 11, 14 ], [ 81, 85 ] ],
                    3: [ [ 0, 6 ], [ 21, 23 ] ],
                    4: [ [ 0, 6 ], 81 ],
                    5: [ [ 0, 3 ], [ 21, 23 ] ],
                    6: [ [ 0, 2 ], [ 11, 13 ], 34, [ 81, 87 ] ],
                    7: [ [ 0, 5 ], 24, 25, [ 81, 86 ] ],
                    8: [ [ 0, 2 ], 11, [ 26, 32 ], [ 81, 83 ] ],
                    9: [ [ 0, 3 ], 11, 21, 23, 82, 83 ],
                    10: [ [ 0, 2 ], [ 81, 83 ] ],
                    11: [ [ 0, 3 ], 21, 22 ],
                    12: [ [ 0, 3 ] ],
                    13: [ [ 0, 2 ], 11, 12, [ 21, 29 ] ],
                    14: [ [ 0, 2 ], [ 21, 28 ], 81, 82 ],
                    15: [ [ 0, 2 ], [ 21, 26 ], 81 ],
                    16: [ [ 0, 2 ], [ 21, 26 ] ],
                    17: [ [ 0, 2 ], [ 21, 28 ] ]
                },
                41: {
                    0: [ 0 ],
                    1: [ [ 0, 6 ], 8, 22, [ 81, 85 ] ],
                    2: [ [ 0, 5 ], 11, [ 21, 25 ] ],
                    3: [ [ 0, 7 ], 11, [ 22, 29 ], 81 ],
                    4: [ [ 0, 4 ], 11, [ 21, 23 ], 25, 81, 82 ],
                    5: [ [ 0, 3 ], 5, 6, 22, 23, 26, 27, 81 ],
                    6: [ [ 0, 3 ], 11, 21, 22 ],
                    7: [ [ 0, 4 ], 11, 21, [ 24, 28 ], 81, 82 ],
                    8: [ [ 0, 4 ], 11, [ 21, 23 ], 25, [ 81, 83 ] ],
                    9: [ [ 0, 2 ], 22, 23, [ 26, 28 ] ],
                    10: [ [ 0, 2 ], [ 23, 25 ], 81, 82 ],
                    11: [ [ 0, 4 ], [ 21, 23 ] ],
                    12: [ [ 0, 2 ], 21, 22, 24, 81, 82 ],
                    13: [ [ 0, 3 ], [ 21, 30 ], 81 ],
                    14: [ [ 0, 3 ], [ 21, 26 ], 81 ],
                    15: [ [ 0, 3 ], [ 21, 28 ] ],
                    16: [ [ 0, 2 ], [ 21, 28 ], 81 ],
                    17: [ [ 0, 2 ], [ 21, 29 ] ],
                    90: [ 0, 1 ]
                },
                42: {
                    0: [ 0 ],
                    1: [ [ 0, 7 ], [ 11, 17 ] ],
                    2: [ [ 0, 5 ], 22, 81 ],
                    3: [ [ 0, 3 ], [ 21, 25 ], 81 ],
                    5: [ [ 0, 6 ], [ 25, 29 ], [ 81, 83 ] ],
                    6: [ [ 0, 2 ], 6, 7, [ 24, 26 ], [ 82, 84 ] ],
                    7: [ [ 0, 4 ] ],
                    8: [ [ 0, 2 ], 4, 21, 22, 81 ],
                    9: [ [ 0, 2 ], [ 21, 23 ], 81, 82, 84 ],
                    10: [ [ 0, 3 ], [ 22, 24 ], 81, 83, 87 ],
                    11: [ [ 0, 2 ], [ 21, 27 ], 81, 82 ],
                    12: [ [ 0, 2 ], [ 21, 24 ], 81 ],
                    13: [ [ 0, 3 ], 21, 81 ],
                    28: [ [ 0, 2 ], 22, 23, [ 25, 28 ] ],
                    90: [ 0, [ 4, 6 ], 21 ]
                },
                43: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 11, 12, 21, 22, 24, 81 ],
                    2: [ [ 0, 4 ], 11, 21, [ 23, 25 ], 81 ],
                    3: [ [ 0, 2 ], 4, 21, 81, 82 ],
                    4: [ 0, 1, [ 5, 8 ], 12, [ 21, 24 ], 26, 81, 82 ],
                    5: [ [ 0, 3 ], 11, [ 21, 25 ], [ 27, 29 ], 81 ],
                    6: [ [ 0, 3 ], 11, 21, 23, 24, 26, 81, 82 ],
                    7: [ [ 0, 3 ], [ 21, 26 ], 81 ],
                    8: [ [ 0, 2 ], 11, 21, 22 ],
                    9: [ [ 0, 3 ], [ 21, 23 ], 81 ],
                    10: [ [ 0, 3 ], [ 21, 28 ], 81 ],
                    11: [ [ 0, 3 ], [ 21, 29 ] ],
                    12: [ [ 0, 2 ], [ 21, 30 ], 81 ],
                    13: [ [ 0, 2 ], 21, 22, 81, 82 ],
                    31: [ 0, 1, [ 22, 27 ], 30 ]
                },
                44: {
                    0: [ 0 ],
                    1: [ [ 0, 7 ], [ 11, 16 ], 83, 84 ],
                    2: [ [ 0, 5 ], 21, 22, 24, 29, 32, 33, 81, 82 ],
                    3: [ 0, 1, [ 3, 8 ] ],
                    4: [ [ 0, 4 ] ],
                    5: [ 0, 1, [ 6, 15 ], 23, 82, 83 ],
                    6: [ 0, 1, [ 4, 8 ] ],
                    7: [ 0, 1, [ 3, 5 ], 81, [ 83, 85 ] ],
                    8: [ [ 0, 4 ], 11, 23, 25, [ 81, 83 ] ],
                    9: [ [ 0, 3 ], 23, [ 81, 83 ] ],
                    12: [ [ 0, 3 ], [ 23, 26 ], 83, 84 ],
                    13: [ [ 0, 3 ], [ 22, 24 ], 81 ],
                    14: [ [ 0, 2 ], [ 21, 24 ], 26, 27, 81 ],
                    15: [ [ 0, 2 ], 21, 23, 81 ],
                    16: [ [ 0, 2 ], [ 21, 25 ] ],
                    17: [ [ 0, 2 ], 21, 23, 81 ],
                    18: [ [ 0, 3 ], 21, 23, [ 25, 27 ], 81, 82 ],
                    19: [ 0 ],
                    20: [ 0 ],
                    51: [ [ 0, 3 ], 21, 22 ],
                    52: [ [ 0, 3 ], 21, 22, 24, 81 ],
                    53: [ [ 0, 2 ], [ 21, 23 ], 81 ]
                },
                45: {
                    0: [ 0 ],
                    1: [ [ 0, 9 ], [ 21, 27 ] ],
                    2: [ [ 0, 5 ], [ 21, 26 ] ],
                    3: [ [ 0, 5 ], 11, 12, [ 21, 32 ] ],
                    4: [ 0, 1, [ 3, 6 ], 11, [ 21, 23 ], 81 ],
                    5: [ [ 0, 3 ], 12, 21 ],
                    6: [ [ 0, 3 ], 21, 81 ],
                    7: [ [ 0, 3 ], 21, 22 ],
                    8: [ [ 0, 4 ], 21, 81 ],
                    9: [ [ 0, 3 ], [ 21, 24 ], 81 ],
                    10: [ [ 0, 2 ], [ 21, 31 ] ],
                    11: [ [ 0, 2 ], [ 21, 23 ] ],
                    12: [ [ 0, 2 ], [ 21, 29 ], 81 ],
                    13: [ [ 0, 2 ], [ 21, 24 ], 81 ],
                    14: [ [ 0, 2 ], [ 21, 25 ], 81 ]
                },
                46: {
                    0: [ 0 ],
                    1: [ 0, 1, [ 5, 8 ] ],
                    2: [ 0, 1 ],
                    3: [ 0, [ 21, 23 ] ],
                    90: [ [ 0, 3 ], [ 5, 7 ], [ 21, 39 ] ]
                },
                50: {
                    0: [ 0 ],
                    1: [ [ 0, 19 ] ],
                    2: [ 0, [ 22, 38 ], [ 40, 43 ] ],
                    3: [ 0, [ 81, 84 ] ]
                },
                51: {
                    0: [ 0 ],
                    1: [ 0, 1, [ 4, 8 ], [ 12, 15 ], [ 21, 24 ], 29, 31, 32, [ 81, 84 ] ],
                    3: [ [ 0, 4 ], 11, 21, 22 ],
                    4: [ [ 0, 3 ], 11, 21, 22 ],
                    5: [ [ 0, 4 ], 21, 22, 24, 25 ],
                    6: [ 0, 1, 3, 23, 26, [ 81, 83 ] ],
                    7: [ 0, 1, 3, 4, [ 22, 27 ], 81 ],
                    8: [ [ 0, 2 ], 11, 12, [ 21, 24 ] ],
                    9: [ [ 0, 4 ], [ 21, 23 ] ],
                    10: [ [ 0, 2 ], 11, 24, 25, 28 ],
                    11: [ [ 0, 2 ], [ 11, 13 ], 23, 24, 26, 29, 32, 33, 81 ],
                    13: [ [ 0, 4 ], [ 21, 25 ], 81 ],
                    14: [ [ 0, 2 ], [ 21, 25 ] ],
                    15: [ [ 0, 3 ], [ 21, 29 ] ],
                    16: [ [ 0, 3 ], [ 21, 23 ], 81 ],
                    17: [ [ 0, 3 ], [ 21, 25 ], 81 ],
                    18: [ [ 0, 3 ], [ 21, 27 ] ],
                    19: [ [ 0, 3 ], [ 21, 23 ] ],
                    20: [ [ 0, 2 ], 21, 22, 81 ],
                    32: [ 0, [ 21, 33 ] ],
                    33: [ 0, [ 21, 38 ] ],
                    34: [ 0, 1, [ 22, 37 ] ]
                },
                52: {
                    0: [ 0 ],
                    1: [ [ 0, 3 ], [ 11, 15 ], [ 21, 23 ], 81 ],
                    2: [ 0, 1, 3, 21, 22 ],
                    3: [ [ 0, 3 ], [ 21, 30 ], 81, 82 ],
                    4: [ [ 0, 2 ], [ 21, 25 ] ],
                    5: [ [ 0, 2 ], [ 21, 27 ] ],
                    6: [ [ 0, 3 ], [ 21, 28 ] ],
                    22: [ 0, 1, [ 22, 30 ] ],
                    23: [ 0, 1, [ 22, 28 ] ],
                    24: [ 0, 1, [ 22, 28 ] ],
                    26: [ 0, 1, [ 22, 36 ] ],
                    27: [ [ 0, 2 ], 22, 23, [ 25, 32 ] ]
                },
                53: {
                    0: [ 0 ],
                    1: [ [ 0, 3 ], [ 11, 14 ], 21, 22, [ 24, 29 ], 81 ],
                    3: [ [ 0, 2 ], [ 21, 26 ], 28, 81 ],
                    4: [ [ 0, 2 ], [ 21, 28 ] ],
                    5: [ [ 0, 2 ], [ 21, 24 ] ],
                    6: [ [ 0, 2 ], [ 21, 30 ] ],
                    7: [ [ 0, 2 ], [ 21, 24 ] ],
                    8: [ [ 0, 2 ], [ 21, 29 ] ],
                    9: [ [ 0, 2 ], [ 21, 27 ] ],
                    23: [ 0, 1, [ 22, 29 ], 31 ],
                    25: [ [ 0, 4 ], [ 22, 32 ] ],
                    26: [ 0, 1, [ 21, 28 ] ],
                    27: [ 0, 1, [ 22, 30 ] ],
                    28: [ 0, 1, 22, 23 ],
                    29: [ 0, 1, [ 22, 32 ] ],
                    31: [ 0, 2, 3, [ 22, 24 ] ],
                    34: [ 0, [ 21, 23 ] ],
                    33: [ 0, 21, [ 23, 25 ] ],
                    35: [ 0, [ 21, 28 ] ]
                },
                54: {
                    0: [ 0 ],
                    1: [ [ 0, 2 ], [ 21, 27 ] ],
                    21: [ 0, [ 21, 29 ], 32, 33 ],
                    22: [ 0, [ 21, 29 ], [ 31, 33 ] ],
                    23: [ 0, 1, [ 22, 38 ] ],
                    24: [ 0, [ 21, 31 ] ],
                    25: [ 0, [ 21, 27 ] ],
                    26: [ 0, [ 21, 27 ] ]
                },
                61: {
                    0: [ 0 ],
                    1: [ [ 0, 4 ], [ 11, 16 ], 22, [ 24, 26 ] ],
                    2: [ [ 0, 4 ], 22 ],
                    3: [ [ 0, 4 ], [ 21, 24 ], [ 26, 31 ] ],
                    4: [ [ 0, 4 ], [ 22, 31 ], 81 ],
                    5: [ [ 0, 2 ], [ 21, 28 ], 81, 82 ],
                    6: [ [ 0, 2 ], [ 21, 32 ] ],
                    7: [ [ 0, 2 ], [ 21, 30 ] ],
                    8: [ [ 0, 2 ], [ 21, 31 ] ],
                    9: [ [ 0, 2 ], [ 21, 29 ] ],
                    10: [ [ 0, 2 ], [ 21, 26 ] ]
                },
                62: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], 11, [ 21, 23 ] ],
                    2: [ 0, 1 ],
                    3: [ [ 0, 2 ], 21 ],
                    4: [ [ 0, 3 ], [ 21, 23 ] ],
                    5: [ [ 0, 3 ], [ 21, 25 ] ],
                    6: [ [ 0, 2 ], [ 21, 23 ] ],
                    7: [ [ 0, 2 ], [ 21, 25 ] ],
                    8: [ [ 0, 2 ], [ 21, 26 ] ],
                    9: [ [ 0, 2 ], [ 21, 24 ], 81, 82 ],
                    10: [ [ 0, 2 ], [ 21, 27 ] ],
                    11: [ [ 0, 2 ], [ 21, 26 ] ],
                    12: [ [ 0, 2 ], [ 21, 28 ] ],
                    24: [ 0, 21, [ 24, 29 ] ],
                    26: [ 0, 21, [ 23, 30 ] ],
                    29: [ 0, 1, [ 21, 27 ] ],
                    30: [ 0, 1, [ 21, 27 ] ]
                },
                63: {
                    0: [ 0 ],
                    1: [ [ 0, 5 ], [ 21, 23 ] ],
                    2: [ 0, 2, [ 21, 25 ] ],
                    21: [ 0, [ 21, 23 ], [ 26, 28 ] ],
                    22: [ 0, [ 21, 24 ] ],
                    23: [ 0, [ 21, 24 ] ],
                    25: [ 0, [ 21, 25 ] ],
                    26: [ 0, [ 21, 26 ] ],
                    27: [ 0, 1, [ 21, 26 ] ],
                    28: [ [ 0, 2 ], [ 21, 23 ] ]
                },
                64: {
                    0: [ 0 ],
                    1: [ 0, 1, [ 4, 6 ], 21, 22, 81 ],
                    2: [ [ 0, 3 ], 5, [ 21, 23 ] ],
                    3: [ [ 0, 3 ], [ 21, 24 ], 81 ],
                    4: [ [ 0, 2 ], [ 21, 25 ] ],
                    5: [ [ 0, 2 ], 21, 22 ]
                },
                65: {
                    0: [ 0 ],
                    1: [ [ 0, 9 ], 21 ],
                    2: [ [ 0, 5 ] ],
                    21: [ 0, 1, 22, 23 ],
                    22: [ 0, 1, 22, 23 ],
                    23: [ [ 0, 3 ], [ 23, 25 ], 27, 28 ],
                    28: [ 0, 1, [ 22, 29 ] ],
                    29: [ 0, 1, [ 22, 29 ] ],
                    30: [ 0, 1, [ 22, 24 ] ],
                    31: [ 0, 1, [ 21, 31 ] ],
                    32: [ 0, 1, [ 21, 27 ] ],
                    40: [ 0, 2, 3, [ 21, 28 ] ],
                    42: [ [ 0, 2 ], 21, [ 23, 26 ] ],
                    43: [ 0, 1, [ 21, 26 ] ],
                    90: [ [ 0, 4 ] ],
                    27: [ [ 0, 2 ], 22, 23 ]
                },
                71: {
                    0: [ 0 ]
                },
                81: {
                    0: [ 0 ]
                },
                82: {
                    0: [ 0 ]
                }
            };
            var provincial = parseInt(value.substr(0, 2), 10), prefectural = parseInt(value.substr(2, 2), 10), county = parseInt(value.substr(4, 2), 10);
            if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
                return false;
            }
            var inRange = false, rangeDef = adminDivisionCodes[provincial][prefectural];
            for (var i = 0; i < rangeDef.length; i++) {
                if ($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1] || !$.isArray(rangeDef[i]) && county === rangeDef[i]) {
                    inRange = true;
                    break;
                }
            }
            if (!inRange) {
                return false;
            }
            var dob;
            if (value.length === 18) {
                dob = value.substr(6, 8);
            } else {
                dob = "19" + value.substr(6, 6);
            }
            var year = parseInt(dob.substr(0, 4), 10), month = parseInt(dob.substr(4, 2), 10), day = parseInt(dob.substr(6, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            if (value.length === 18) {
                var sum = 0, weight = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                for (i = 0; i < 17; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (12 - sum % 11) % 11;
                var checksum = value.charAt(17).toUpperCase() !== "X" ? parseInt(value.charAt(17), 10) : 10;
                return checksum === sum;
            }
            return true;
        },
        _cz: function(value) {
            if (!/^\d{9,10}$/.test(value)) {
                return false;
            }
            var year = 1900 + parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10) % 50 % 20, day = parseInt(value.substr(4, 2), 10);
            if (value.length === 9) {
                if (year >= 1980) {
                    year -= 100;
                }
                if (year > 1953) {
                    return false;
                }
            } else if (year < 1954) {
                year += 100;
            }
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            if (value.length === 10) {
                var check = parseInt(value.substr(0, 9), 10) % 11;
                if (year < 1985) {
                    check = check % 10;
                }
                return check + "" === value.substr(9, 1);
            }
            return true;
        },
        _dk: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, "");
            var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 2), 10);
            switch (true) {
              case "5678".indexOf(value.charAt(6)) !== -1 && year >= 58:
                year += 1800;
                break;

              case "0123".indexOf(value.charAt(6)) !== -1:
              case "49".indexOf(value.charAt(6)) !== -1 && year >= 37:
                year += 1900;
                break;

              default:
                year += 2e3;
                break;
            }
            return FormValidation.Helper.date(year, month, day);
        },
        _ee: function(value) {
            return this._lt(value);
        },
        _es: function(value) {
            var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value), isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value), isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
            if (!isDNI && !isNIE && !isCIF) {
                return false;
            }
            value = value.replace(/-/g, "");
            var check;
            if (isDNI || isNIE) {
                var index = "XYZ".indexOf(value.charAt(0));
                if (index !== -1) {
                    value = index + value.substr(1) + "";
                }
                check = parseInt(value.substr(0, 8), 10);
                check = "TRWAGMYFPDXBNJZSQVHLCKE"[check % 23];
                return check === value.substr(8, 1);
            } else {
                check = value.substr(1, 7);
                var letter = value[0], control = value.substr(-1), sum = 0;
                for (var i = 0; i < check.length; i++) {
                    if (i % 2 !== 0) {
                        sum += parseInt(check[i], 10);
                    } else {
                        var tmp = "" + parseInt(check[i], 10) * 2;
                        sum += parseInt(tmp[0], 10);
                        if (tmp.length === 2) {
                            sum += parseInt(tmp[1], 10);
                        }
                    }
                }
                var lastDigit = sum - Math.floor(sum / 10) * 10;
                if (lastDigit !== 0) {
                    lastDigit = 10 - lastDigit;
                }
                if ("KQS".indexOf(letter) !== -1) {
                    return control === "JABCDEFGHI"[lastDigit];
                } else if ("ABEH".indexOf(letter) !== -1) {
                    return control === "" + lastDigit;
                } else {
                    return control === "" + lastDigit || control === "JABCDEFGHI"[lastDigit];
                }
            }
        },
        _fi: function(value) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
                return false;
            }
            var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 2), 10), centuries = {
                "+": 1800,
                "-": 1900,
                A: 2e3
            };
            year = centuries[value.charAt(6)] + year;
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            var individual = parseInt(value.substr(7, 3), 10);
            if (individual < 2) {
                return false;
            }
            var n = value.substr(0, 6) + value.substr(7, 3) + "";
            n = parseInt(n, 10);
            return "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(n % 31) === value.charAt(10);
        },
        _hr: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },
        _ie: function(value) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
                return false;
            }
            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = "0" + value;
                }
                var alphabet = "WABCDEFGHIJKLMNOPQRSTUV", sum = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };
            if (value.length === 9 && ("A" === value.charAt(8) || "H" === value.charAt(8))) {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + "");
            } else {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7));
            }
        },
        _is: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, "");
            var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 2), 10), century = parseInt(value.charAt(9), 10);
            year = century === 9 ? 1900 + year : (20 + century) * 100 + year;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            var sum = 0, weight = [ 3, 2, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            return sum + "" === value.charAt(8);
        },
        _lt: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var gender = parseInt(value.charAt(0), 10), year = parseInt(value.substr(1, 2), 10), month = parseInt(value.substr(3, 2), 10), day = parseInt(value.substr(5, 2), 10), century = gender % 2 === 0 ? 17 + gender / 2 : 17 + (gender + 1) / 2;
            year = century * 100 + year;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            var sum = 0, weight = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1 ];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum !== 10) {
                return sum + "" === value.charAt(10);
            }
            sum = 0;
            weight = [ 3, 4, 5, 6, 7, 8, 9, 1, 2, 3 ];
            for (i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return sum + "" === value.charAt(10);
        },
        _lv: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, "");
            var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 2), 10);
            year = year + 1800 + parseInt(value.charAt(6), 10) * 100;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            var sum = 0, weight = [ 10, 5, 8, 4, 2, 1, 6, 3, 7, 9 ];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum + 1) % 11 % 10;
            return sum + "" === value.charAt(10);
        },
        _nl: function(value) {
            while (value.length < 9) {
                value = "0" + value;
            }
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)) {
                return false;
            }
            value = value.replace(/\./g, "");
            if (parseInt(value, 10) === 0) {
                return false;
            }
            var sum = 0, length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += (9 - i) * parseInt(value.charAt(i), 10);
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return sum + "" === value.charAt(length - 1);
        },
        _pl: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var sum = 0, length = value.length, weight = [ 1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7 ];
            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(value.charAt(i), 10);
            }
            sum = sum % 10;
            if (sum === 0) {
                sum = 10;
            }
            sum = 10 - sum;
            return sum + "" === value.charAt(length - 1);
        },
        _ro: function(value) {
            if (!/^[0-9]{13}$/.test(value)) {
                return false;
            }
            var gender = parseInt(value.charAt(0), 10);
            if (gender === 0 || gender === 7 || gender === 8) {
                return false;
            }
            var year = parseInt(value.substr(1, 2), 10), month = parseInt(value.substr(3, 2), 10), day = parseInt(value.substr(5, 2), 10), centuries = {
                "1": 1900,
                "2": 1900,
                "3": 1800,
                "4": 1800,
                "5": 2e3,
                "6": 2e3
            };
            if (day > 31 && month > 12) {
                return false;
            }
            if (gender !== 9) {
                year = centuries[gender + ""] + year;
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
            }
            var sum = 0, weight = [ 2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9 ], length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 1;
            }
            return sum + "" === value.charAt(length - 1);
        },
        _se: function(value) {
            if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/[^0-9]/g, "");
            var year = parseInt(value.substr(0, 2), 10) + 1900, month = parseInt(value.substr(2, 2), 10), day = parseInt(value.substr(4, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
        },
        _sk: function(value) {
            return this._cz(value);
        },
        _sm: function(value) {
            return /^\d{5}$/.test(value);
        },
        _th: function(value) {
            if (value.length !== 13) {
                return false;
            }
            var sum = 0;
            for (var i = 0; i < 12; i++) {
                sum += parseInt(value.charAt(i), 10) * (13 - i);
            }
            return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
        },
        _za: function(value) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
                return false;
            }
            var year = parseInt(value.substr(0, 2), 10), currentYear = new Date().getFullYear() % 100, month = parseInt(value.substr(2, 2), 10), day = parseInt(value.substr(4, 2), 10);
            year = year >= currentYear ? year + 1900 : year + 2e3;
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            identical: {
                "default": "Please enter the same value"
            }
        }
    });
    FormValidation.Validator.identical = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        init: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.onLiveChange(compareWith, "live_identical", function() {
                var status = validator.getStatus($field, "identical");
                if (status !== validator.STATUS_NOT_VALIDATED) {
                    validator.revalidateField($field);
                }
            });
        },
        destroy: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.offLiveChange(compareWith, "live_identical");
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "identical"), compareWith = validator.getFieldElements(options.field);
            if (compareWith === null || compareWith.length === 0) {
                return true;
            }
            var compareValue = validator.getFieldValue(compareWith, "identical");
            if (value === compareValue) {
                validator.updateStatus(compareWith, validator.STATUS_VALID, "identical");
                return true;
            }
            return false;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            imei: {
                "default": "Please enter a valid IMEI number"
            }
        }
    });
    FormValidation.Validator.imei = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "imei");
            if (value === "") {
                return true;
            }
            switch (true) {
              case /^\d{15}$/.test(value):
              case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):
              case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):
                value = value.replace(/[^0-9]/g, "");
                return FormValidation.Helper.luhn(value);

              case /^\d{14}$/.test(value):
              case /^\d{16}$/.test(value):
              case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):
              case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):
                return true;

              default:
                return false;
            }
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            imo: {
                "default": "Please enter a valid IMO number"
            }
        }
    });
    FormValidation.Validator.imo = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "imo");
            if (value === "") {
                return true;
            }
            if (!/^IMO \d{7}$/i.test(value)) {
                return false;
            }
            var sum = 0, digits = value.replace(/^.*(\d{7})$/, "$1");
            for (var i = 6; i >= 1; i--) {
                sum += digits.slice(6 - i, -i) * (i + 1);
            }
            return sum % 10 === parseInt(digits.charAt(6), 10);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            integer: {
                "default": "Please enter a valid number"
            }
        }
    });
    FormValidation.Validator.integer = {
        enableByHtml5: function($field) {
            return "number" === $field.attr("type") && ($field.attr("step") === undefined || $field.attr("step") % 1 === 0);
        },
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }
            var value = validator.getFieldValue($field, "integer");
            if (value === "") {
                return true;
            }
            return /^(?:-?(?:0|[1-9][0-9]*))$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            ip: {
                "default": "Please enter a valid IP address",
                ipv4: "Please enter a valid IPv4 address",
                ipv6: "Please enter a valid IPv6 address"
            }
        }
    });
    FormValidation.Validator.ip = {
        html5Attributes: {
            message: "message",
            ipv4: "ipv4",
            ipv6: "ipv6"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "ip");
            if (value === "") {
                return true;
            }
            options = $.extend({}, {
                ipv4: true,
                ipv6: true
            }, options);
            var locale = validator.getLocale(), ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, valid = false, message;
            switch (true) {
              case options.ipv4 && !options.ipv6:
                valid = ipv4Regex.test(value);
                message = options.message || FormValidation.I18n[locale].ip.ipv4;
                break;

              case !options.ipv4 && options.ipv6:
                valid = ipv6Regex.test(value);
                message = options.message || FormValidation.I18n[locale].ip.ipv6;
                break;

              case options.ipv4 && options.ipv6:
              default:
                valid = ipv4Regex.test(value) || ipv6Regex.test(value);
                message = options.message || FormValidation.I18n[locale].ip["default"];
                break;
            }
            return {
                valid: valid,
                message: message
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            isbn: {
                "default": "Please enter a valid ISBN number"
            }
        }
    });
    FormValidation.Validator.isbn = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "isbn");
            if (value === "") {
                return true;
            }
            var type;
            switch (true) {
              case /^\d{9}[\dX]$/.test(value):
              case value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value):
              case value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value):
                type = "ISBN10";
                break;

              case /^(978|979)\d{9}[\dX]$/.test(value):
              case value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value):
              case value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value):
                type = "ISBN13";
                break;

              default:
                return false;
            }
            value = value.replace(/[^0-9X]/gi, "");
            var chars = value.split(""), length = chars.length, sum = 0, i, checksum;
            switch (type) {
              case "ISBN10":
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(chars[i], 10) * (10 - i);
                }
                checksum = 11 - sum % 11;
                if (checksum === 11) {
                    checksum = 0;
                } else if (checksum === 10) {
                    checksum = "X";
                }
                return checksum + "" === chars[length - 1];

              case "ISBN13":
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += i % 2 === 0 ? parseInt(chars[i], 10) : parseInt(chars[i], 10) * 3;
                }
                checksum = 10 - sum % 10;
                if (checksum === 10) {
                    checksum = "0";
                }
                return checksum + "" === chars[length - 1];

              default:
                return false;
            }
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            isin: {
                "default": "Please enter a valid ISIN number"
            }
        }
    });
    FormValidation.Validator.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "isin");
            if (value === "") {
                return true;
            }
            value = value.toUpperCase();
            var regex = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$");
            if (!regex.test(value)) {
                return false;
            }
            var converted = "", length = value.length;
            for (var i = 0; i < length - 1; i++) {
                var c = value.charCodeAt(i);
                converted += c > 57 ? (c - 55).toString() : value.charAt(i);
            }
            var digits = "", n = converted.length, group = n % 2 !== 0 ? 0 : 1;
            for (i = 0; i < n; i++) {
                digits += parseInt(converted[i], 10) * (i % 2 === group ? 2 : 1) + "";
            }
            var sum = 0;
            for (i = 0; i < digits.length; i++) {
                sum += parseInt(digits.charAt(i), 10);
            }
            sum = (10 - sum % 10) % 10;
            return sum + "" === value.charAt(length - 1);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            ismn: {
                "default": "Please enter a valid ISMN number"
            }
        }
    });
    FormValidation.Validator.ismn = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "ismn");
            if (value === "") {
                return true;
            }
            var type;
            switch (true) {
              case /^M\d{9}$/.test(value):
              case /^M-\d{4}-\d{4}-\d{1}$/.test(value):
              case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                type = "ISMN10";
                break;

              case /^9790\d{9}$/.test(value):
              case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):
              case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                type = "ISMN13";
                break;

              default:
                return false;
            }
            if ("ISMN10" === type) {
                value = "9790" + value.substr(1);
            }
            value = value.replace(/[^0-9]/gi, "");
            var length = value.length, sum = 0, weight = [ 1, 3 ];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return sum + "" === value.charAt(length - 1);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            issn: {
                "default": "Please enter a valid ISSN number"
            }
        }
    });
    FormValidation.Validator.issn = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "issn");
            if (value === "") {
                return true;
            }
            if (!/^\d{4}\-\d{3}[\dX]$/.test(value)) {
                return false;
            }
            value = value.replace(/[^0-9X]/gi, "");
            var chars = value.split(""), length = chars.length, sum = 0;
            if (chars[7] === "X") {
                chars[7] = 10;
            }
            for (var i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return sum % 11 === 0;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            lessThan: {
                "default": "Please enter a value less than or equal to %s",
                notInclusive: "Please enter a value less than %s"
            }
        }
    });
    FormValidation.Validator.lessThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function($field) {
            var type = $field.attr("type"), max = $field.attr("max");
            if (max && type !== "date") {
                return {
                    value: max
                };
            }
            return false;
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "lessThan");
            if (value === "") {
                return true;
            }
            value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }
            var locale = validator.getLocale(), compareTo = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value), compareToValue = this._format(compareTo);
            value = parseFloat(value);
            return options.inclusive === true || options.inclusive === undefined ? {
                valid: value <= compareToValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan["default"], compareTo)
            } : {
                valid: value < compareToValue,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan.notInclusive, compareTo)
            };
        },
        _format: function(value) {
            return (value + "").replace(",", ".");
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            mac: {
                "default": "Please enter a valid MAC address"
            }
        }
    });
    FormValidation.Validator.mac = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "mac");
            if (value === "") {
                return true;
            }
            return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            meid: {
                "default": "Please enter a valid MEID number"
            }
        }
    });
    FormValidation.Validator.meid = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "meid");
            if (value === "") {
                return true;
            }
            switch (true) {
              case /^[0-9A-F]{15}$/i.test(value):
              case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value):
              case /^\d{19}$/.test(value):
              case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value):
                var cd = value.charAt(value.length - 1);
                value = value.replace(/[- ]/g, "");
                if (value.match(/^\d*$/i)) {
                    return FormValidation.Helper.luhn(value);
                }
                value = value.slice(0, -1);
                var cdCalc = "";
                for (var i = 1; i <= 13; i += 2) {
                    cdCalc += (parseInt(value.charAt(i), 16) * 2).toString(16);
                }
                var sum = 0;
                for (i = 0; i < cdCalc.length; i++) {
                    sum += parseInt(cdCalc.charAt(i), 16);
                }
                return sum % 10 === 0 ? cd === "0" : cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16);

              case /^[0-9A-F]{14}$/i.test(value):
              case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value):
              case /^\d{18}$/.test(value):
              case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):
                return true;

              default:
                return false;
            }
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            notEmpty: {
                "default": "Please enter a value"
            }
        }
    });
    FormValidation.Validator.notEmpty = {
        enableByHtml5: function($field) {
            var required = $field.attr("required") + "";
            return "required" === required || "true" === required;
        },
        validate: function(validator, $field, options) {
            var type = $field.attr("type");
            if ("radio" === type || "checkbox" === type) {
                var ns = validator.getNamespace();
                return validator.getFieldElements($field.attr("data-" + ns + "-field")).filter(":checked").length > 0;
            }
            if ("number" === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return true;
            }
            var value = validator.getFieldValue($field, "notEmpty");
            return $.trim(value) !== "";
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            numeric: {
                "default": "Please enter a valid float number"
            }
        }
    });
    FormValidation.Validator.numeric = {
        html5Attributes: {
            message: "message",
            separator: "separator"
        },
        enableByHtml5: function($field) {
            return "number" === $field.attr("type") && $field.attr("step") !== undefined && $field.attr("step") % 1 !== 0;
        },
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }
            var value = validator.getFieldValue($field, "numeric");
            if (value === "") {
                return true;
            }
            var separator = options.separator || ".";
            if (separator !== ".") {
                value = value.replace(separator, ".");
            }
            return !isNaN(parseFloat(value)) && isFinite(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            phone: {
                "default": "Please enter a valid phone number",
                country: "Please enter a valid phone number in %s",
                countries: {
                    AE: "United Arab Emirates",
                    BG: "Bulgaria",
                    BR: "Brazil",
                    CN: "China",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DK: "Denmark",
                    ES: "Spain",
                    FR: "France",
                    GB: "United Kingdom",
                    IN: "India",
                    MA: "Morocco",
                    NL: "Netherlands",
                    PK: "Pakistan",
                    RO: "Romania",
                    RU: "Russia",
                    SK: "Slovakia",
                    TH: "Thailand",
                    US: "USA",
                    VE: "Venezuela"
                }
            }
        }
    });
    FormValidation.Validator.phone = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: [ "AE", "BG", "BR", "CN", "CZ", "DE", "DK", "ES", "FR", "GB", "IN", "MA", "NL", "PK", "RO", "RU", "SK", "TH", "US", "VE" ],
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "phone");
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), country = options.country;
            if (typeof country !== "string" || $.inArray(country, this.COUNTRY_CODES) === -1) {
                country = validator.getDynamicOption($field, country);
            }
            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }
            var isValid = true;
            switch (country.toUpperCase()) {
              case "AE":
                value = $.trim(value);
                isValid = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(value);
                break;

              case "BG":
                value = value.replace(/\+|\s|-|\/|\(|\)/gi, "");
                isValid = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(value);
                break;

              case "BR":
                value = $.trim(value);
                isValid = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(value);
                break;

              case "CN":
                value = $.trim(value);
                isValid = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(value);
                break;

              case "CZ":
                isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                break;

              case "DE":
                value = $.trim(value);
                isValid = /^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[ \-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-\/]?))[0-9]{1,7}([ \-\/]?[0-9]{1,5})?)$/.test(value);
                break;

              case "DK":
                value = $.trim(value);
                isValid = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(value);
                break;

              case "ES":
                value = $.trim(value);
                isValid = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(value);
                break;

              case "FR":
                value = $.trim(value);
                isValid = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(value);
                break;

              case "GB":
                value = $.trim(value);
                isValid = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(value);
                break;

              case "IN":
                value = $.trim(value);
                isValid = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(value);
                break;

              case "MA":
                value = $.trim(value);
                isValid = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(value);
                break;

              case "NL":
                value = $.trim(value);
                isValid = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(value);
                break;

              case "PK":
                value = $.trim(value);
                isValid = /^0?3[0-9]{2}[0-9]{7}$/.test(value);
                break;

              case "RO":
                isValid = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(value);
                break;

              case "RU":
                isValid = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(value);
                break;

              case "SK":
                isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                break;

              case "TH":
                isValid = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(value);
                break;

              case "VE":
                value = $.trim(value);
                isValid = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(value);
                break;

              case "US":
              default:
                isValid = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(value);
                break;
            }
            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].phone.country, FormValidation.I18n[locale].phone.countries[country])
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            regexp: {
                "default": "Please enter a value matching the pattern"
            }
        }
    });
    FormValidation.Validator.regexp = {
        html5Attributes: {
            message: "message",
            regexp: "regexp"
        },
        enableByHtml5: function($field) {
            var pattern = $field.attr("pattern");
            if (pattern) {
                return {
                    regexp: pattern
                };
            }
            return false;
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "regexp");
            if (value === "") {
                return true;
            }
            var regexp = "string" === typeof options.regexp ? new RegExp(options.regexp) : options.regexp;
            return regexp.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            remote: {
                "default": "Please enter a valid value"
            }
        }
    });
    FormValidation.Validator.remote = {
        html5Attributes: {
            crossdomain: "crossDomain",
            data: "data",
            datatype: "dataType",
            delay: "delay",
            message: "message",
            name: "name",
            type: "type",
            url: "url",
            validkey: "validKey"
        },
        destroy: function(validator, $field, options) {
            var ns = validator.getNamespace(), timer = $field.data(ns + ".remote.timer");
            if (timer) {
                clearTimeout(timer);
                $field.removeData(ns + ".remote.timer");
            }
        },
        validate: function(validator, $field, options) {
            var ns = validator.getNamespace(), value = validator.getFieldValue($field, "remote"), dfd = new $.Deferred();
            if (value === "") {
                dfd.resolve($field, "remote", {
                    valid: true
                });
                return dfd;
            }
            var name = $field.attr("data-" + ns + "-field"), data = options.data || {}, url = options.url, validKey = options.validKey || "valid";
            if ("function" === typeof data) {
                data = data.call(this, validator);
            }
            if ("string" === typeof data) {
                data = JSON.parse(data);
            }
            if ("function" === typeof url) {
                url = url.call(this, validator);
            }
            data[options.name || name] = value;
            var ajaxOptions = {
                data: data,
                dataType: options.dataType || "json",
                headers: options.headers || {},
                type: options.type || "GET",
                url: url
            };
            if (options.crossDomain !== null) {
                ajaxOptions.crossDomain = options.crossDomain === true || options.crossDomain === "true";
            }
            function runCallback() {
                var xhr = $.ajax(ajaxOptions);
                xhr.success(function(response) {
                    response.valid = response[validKey] === true || response[validKey] === "true" ? true : response[validKey] === false || response[validKey] === "false" ? false : null;
                    dfd.resolve($field, "remote", response);
                }).error(function(response) {
                    dfd.resolve($field, "remote", {
                        valid: false
                    });
                });
                dfd.fail(function() {
                    xhr.abort();
                });
                return dfd;
            }
            if (options.delay) {
                if ($field.data(ns + ".remote.timer")) {
                    clearTimeout($field.data(ns + ".remote.timer"));
                }
                $field.data(ns + ".remote.timer", setTimeout(runCallback, options.delay));
                return dfd;
            } else {
                return runCallback();
            }
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            rtn: {
                "default": "Please enter a valid RTN number"
            }
        }
    });
    FormValidation.Validator.rtn = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "rtn");
            if (value === "") {
                return true;
            }
            if (!/^\d{9}$/.test(value)) {
                return false;
            }
            var sum = 0;
            for (var i = 0; i < value.length; i += 3) {
                sum += parseInt(value.charAt(i), 10) * 3 + parseInt(value.charAt(i + 1), 10) * 7 + parseInt(value.charAt(i + 2), 10);
            }
            return sum !== 0 && sum % 10 === 0;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            sedol: {
                "default": "Please enter a valid SEDOL number"
            }
        }
    });
    FormValidation.Validator.sedol = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "sedol");
            if (value === "") {
                return true;
            }
            value = value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 1, 3, 1, 7, 3, 9, 1 ], length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(value.charAt(i), 36);
            }
            sum = (10 - sum % 10) % 10;
            return sum + "" === value.charAt(length - 1);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            siren: {
                "default": "Please enter a valid SIREN number"
            }
        }
    });
    FormValidation.Validator.siren = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "siren");
            if (value === "") {
                return true;
            }
            if (!/^\d{9}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            siret: {
                "default": "Please enter a valid SIRET number"
            }
        }
    });
    FormValidation.Validator.siret = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "siret");
            if (value === "") {
                return true;
            }
            var sum = 0, length = value.length, tmp;
            for (var i = 0; i < length; i++) {
                tmp = parseInt(value.charAt(i), 10);
                if (i % 2 === 0) {
                    tmp = tmp * 2;
                    if (tmp > 9) {
                        tmp -= 9;
                    }
                }
                sum += tmp;
            }
            return sum % 10 === 0;
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            step: {
                "default": "Please enter a valid step of %s"
            }
        }
    });
    FormValidation.Validator.step = {
        html5Attributes: {
            message: "message",
            base: "baseValue",
            step: "step"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "step");
            if (value === "") {
                return true;
            }
            options = $.extend({}, {
                baseValue: 0,
                step: 1
            }, options);
            value = parseFloat(value);
            if (!$.isNumeric(value)) {
                return false;
            }
            var round = function(x, precision) {
                var m = Math.pow(10, precision);
                x = x * m;
                var sign = x > 0 | -(x < 0), isHalf = x % 1 === .5 * sign;
                if (isHalf) {
                    return (Math.floor(x) + (sign > 0)) / m;
                } else {
                    return Math.round(x) / m;
                }
            }, floatMod = function(x, y) {
                if (y === 0) {
                    return 1;
                }
                var dotX = (x + "").split("."), dotY = (y + "").split("."), precision = (dotX.length === 1 ? 0 : dotX[1].length) + (dotY.length === 1 ? 0 : dotY[1].length);
                return round(x - y * Math.floor(x / y), precision);
            };
            var locale = validator.getLocale(), mod = floatMod(value - options.baseValue, options.step);
            return {
                valid: mod === 0 || mod === options.step,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].step["default"], [ options.step ])
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            stringCase: {
                "default": "Please enter only lowercase characters",
                upper: "Please enter only uppercase characters"
            }
        }
    });
    FormValidation.Validator.stringCase = {
        html5Attributes: {
            message: "message",
            "case": "case"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "stringCase");
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), stringCase = (options["case"] || "lower").toLowerCase();
            return {
                valid: "upper" === stringCase ? value === value.toUpperCase() : value === value.toLowerCase(),
                message: options.message || ("upper" === stringCase ? FormValidation.I18n[locale].stringCase.upper : FormValidation.I18n[locale].stringCase["default"])
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            stringLength: {
                "default": "Please enter a value with valid length",
                less: "Please enter less than %s characters",
                more: "Please enter more than %s characters",
                between: "Please enter value between %s and %s characters long"
            }
        }
    });
    FormValidation.Validator.stringLength = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max",
            trim: "trim",
            utf8bytes: "utf8Bytes"
        },
        enableByHtml5: function($field) {
            var options = {}, maxLength = $field.attr("maxlength"), minLength = $field.attr("minlength");
            if (maxLength) {
                options.max = parseInt(maxLength, 10);
            }
            if (minLength) {
                options.min = parseInt(minLength, 10);
            }
            return $.isEmptyObject(options) ? false : options;
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "stringLength");
            if (options.trim === true || options.trim === "true") {
                value = $.trim(value);
            }
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), min = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min), max = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max), utf8Length = function(str) {
                var s = str.length;
                for (var i = str.length - 1; i >= 0; i--) {
                    var code = str.charCodeAt(i);
                    if (code > 127 && code <= 2047) {
                        s++;
                    } else if (code > 2047 && code <= 65535) {
                        s += 2;
                    }
                    if (code >= 56320 && code <= 57343) {
                        i--;
                    }
                }
                return s;
            }, length = options.utf8Bytes ? utf8Length(value) : value.length, isValid = true, message = options.message || FormValidation.I18n[locale].stringLength["default"];
            if (min && length < parseInt(min, 10) || max && length > parseInt(max, 10)) {
                isValid = false;
            }
            switch (true) {
              case !!min && !!max:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.between, [ parseInt(min, 10), parseInt(max, 10) ]);
                break;

              case !!min:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.more, parseInt(min, 10));
                break;

              case !!max:
                message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.less, parseInt(max, 10));
                break;

              default:
                break;
            }
            return {
                valid: isValid,
                message: message
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            uri: {
                "default": "Please enter a valid URI"
            }
        }
    });
    FormValidation.Validator.uri = {
        html5Attributes: {
            message: "message",
            allowlocal: "allowLocal",
            allowemptyprotocol: "allowEmptyProtocol",
            protocol: "protocol"
        },
        enableByHtml5: function($field) {
            return "url" === $field.attr("type");
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "uri");
            if (value === "") {
                return true;
            }
            var allowLocal = options.allowLocal === true || options.allowLocal === "true", allowEmptyProtocol = options.allowEmptyProtocol === true || options.allowEmptyProtocol === "true", protocol = (options.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, ""), urlExp = new RegExp("^" + "(?:(?:" + protocol + ")://)" + (allowEmptyProtocol ? "?" : "") + "(?:\\S+(?::\\S*)?@)?" + "(?:" + (allowLocal ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" + "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" + "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (allowLocal ? "?" : "") + ")" + "(?::\\d{2,5})?" + "(?:/[^\\s]*)?" + "$", "i");
            return urlExp.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            uuid: {
                "default": "Please enter a valid UUID number",
                version: "Please enter a valid UUID version %s number"
            }
        }
    });
    FormValidation.Validator.uuid = {
        html5Attributes: {
            message: "message",
            version: "version"
        },
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "uuid");
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), patterns = {
                "3": /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                "4": /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                "5": /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            }, version = options.version ? options.version + "" : "all";
            return {
                valid: null === patterns[version] ? true : patterns[version].test(value),
                message: options.version ? FormValidation.Helper.format(options.message || FormValidation.I18n[locale].uuid.version, options.version) : options.message || FormValidation.I18n[locale].uuid["default"]
            };
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            vat: {
                "default": "Please enter a valid VAT number",
                country: "Please enter a valid VAT number in %s",
                countries: {
                    AT: "Austria",
                    BE: "Belgium",
                    BG: "Bulgaria",
                    BR: "Brazil",
                    CH: "Switzerland",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DK: "Denmark",
                    EE: "Estonia",
                    ES: "Spain",
                    FI: "Finland",
                    FR: "France",
                    GB: "United Kingdom",
                    GR: "Greek",
                    EL: "Greek",
                    HU: "Hungary",
                    HR: "Croatia",
                    IE: "Ireland",
                    IS: "Iceland",
                    IT: "Italy",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    MT: "Malta",
                    NL: "Netherlands",
                    NO: "Norway",
                    PL: "Poland",
                    PT: "Portugal",
                    RO: "Romania",
                    RU: "Russia",
                    RS: "Serbia",
                    SE: "Sweden",
                    SI: "Slovenia",
                    SK: "Slovakia",
                    VE: "Venezuela",
                    ZA: "South Africa"
                }
            }
        }
    });
    FormValidation.Validator.vat = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: [ "AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA" ],
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "vat");
            if (value === "") {
                return true;
            }
            var locale = validator.getLocale(), country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== "string" || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                country = validator.getDynamicOption($field, country);
            }
            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }
            var method = [ "_", country.toLowerCase() ].join("");
            return this[method](value) ? true : {
                valid: false,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].vat.country, FormValidation.I18n[locale].vat.countries[country.toUpperCase()])
            };
        },
        _at: function(value) {
            if (/^ATU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^U[0-9]{8}$/.test(value)) {
                return false;
            }
            value = value.substr(1);
            var sum = 0, weight = [ 1, 2, 1, 2, 1, 2, 1 ], temp = 0;
            for (var i = 0; i < 7; i++) {
                temp = parseInt(value.charAt(i), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
            }
            sum = 10 - (sum + 4) % 10;
            if (sum === 10) {
                sum = 0;
            }
            return sum + "" === value.substr(7, 1);
        },
        _be: function(value) {
            if (/^BE[0]{0,1}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0]{0,1}[0-9]{9}$/.test(value)) {
                return false;
            }
            if (value.length === 9) {
                value = "0" + value;
            }
            if (value.substr(1, 1) === "0") {
                return false;
            }
            var sum = parseInt(value.substr(0, 8), 10) + parseInt(value.substr(8, 2), 10);
            return sum % 97 === 0;
        },
        _bg: function(value) {
            if (/^BG[0-9]{9,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9,10}$/.test(value)) {
                return false;
            }
            var sum = 0, i = 0;
            if (value.length === 9) {
                for (i = 0; i < 8; i++) {
                    sum += parseInt(value.charAt(i), 10) * (i + 1);
                }
                sum = sum % 11;
                if (sum === 10) {
                    sum = 0;
                    for (i = 0; i < 8; i++) {
                        sum += parseInt(value.charAt(i), 10) * (i + 3);
                    }
                }
                sum = sum % 10;
                return sum + "" === value.substr(8);
            } else if (value.length === 10) {
                var egn = function(value) {
                    var year = parseInt(value.substr(0, 2), 10) + 1900, month = parseInt(value.substr(2, 2), 10), day = parseInt(value.substr(4, 2), 10);
                    if (month > 40) {
                        year += 100;
                        month -= 40;
                    } else if (month > 20) {
                        year -= 100;
                        month -= 20;
                    }
                    if (!FormValidation.Helper.date(year, month, day)) {
                        return false;
                    }
                    var sum = 0, weight = [ 2, 4, 8, 5, 10, 9, 7, 3, 6 ];
                    for (var i = 0; i < 9; i++) {
                        sum += parseInt(value.charAt(i), 10) * weight[i];
                    }
                    sum = sum % 11 % 10;
                    return sum + "" === value.substr(9, 1);
                }, pnf = function(value) {
                    var sum = 0, weight = [ 21, 19, 17, 13, 11, 9, 7, 3, 1 ];
                    for (var i = 0; i < 9; i++) {
                        sum += parseInt(value.charAt(i), 10) * weight[i];
                    }
                    sum = sum % 10;
                    return sum + "" === value.substr(9, 1);
                }, vat = function(value) {
                    var sum = 0, weight = [ 4, 3, 2, 7, 6, 5, 4, 3, 2 ];
                    for (var i = 0; i < 9; i++) {
                        sum += parseInt(value.charAt(i), 10) * weight[i];
                    }
                    sum = 11 - sum % 11;
                    if (sum === 10) {
                        return false;
                    }
                    if (sum === 11) {
                        sum = 0;
                    }
                    return sum + "" === value.substr(9, 1);
                };
                return egn(value) || pnf(value) || vat(value);
            }
            return false;
        },
        _br: function(value) {
            if (value === "") {
                return true;
            }
            var cnpj = value.replace(/[^\d]+/g, "");
            if (cnpj === "" || cnpj.length !== 14) {
                return false;
            }
            if (cnpj === "00000000000000" || cnpj === "11111111111111" || cnpj === "22222222222222" || cnpj === "33333333333333" || cnpj === "44444444444444" || cnpj === "55555555555555" || cnpj === "66666666666666" || cnpj === "77777777777777" || cnpj === "88888888888888" || cnpj === "99999999999999") {
                return false;
            }
            var length = cnpj.length - 2, numbers = cnpj.substring(0, length), digits = cnpj.substring(length), sum = 0, pos = length - 7;
            for (var i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }
            var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result !== parseInt(digits.charAt(0), 10)) {
                return false;
            }
            length = length + 1;
            numbers = cnpj.substring(0, length);
            sum = 0;
            pos = length - 7;
            for (i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            return result === parseInt(digits.charAt(1), 10);
        },
        _ch: function(value) {
            if (/^CHE[0-9]{9}(MWST)?$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^E[0-9]{9}(MWST)?$/.test(value)) {
                return false;
            }
            value = value.substr(1);
            var sum = 0, weight = [ 5, 4, 3, 2, 7, 6, 5, 4 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                return false;
            }
            if (sum === 11) {
                sum = 0;
            }
            return sum + "" === value.substr(8, 1);
        },
        _cy: function(value) {
            if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                return false;
            }
            if (value.substr(0, 2) === "12") {
                return false;
            }
            var sum = 0, translation = {
                "0": 1,
                "1": 0,
                "2": 5,
                "3": 7,
                "4": 9,
                "5": 13,
                "6": 15,
                "7": 17,
                "8": 19,
                "9": 21
            };
            for (var i = 0; i < 8; i++) {
                var temp = parseInt(value.charAt(i), 10);
                if (i % 2 === 0) {
                    temp = translation[temp + ""];
                }
                sum += temp;
            }
            sum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[sum % 26];
            return sum + "" === value.substr(8, 1);
        },
        _cz: function(value) {
            if (/^CZ[0-9]{8,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8,10}$/.test(value)) {
                return false;
            }
            var sum = 0, i = 0;
            if (value.length === 8) {
                if (value.charAt(0) + "" === "9") {
                    return false;
                }
                sum = 0;
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }
                return sum + "" === value.substr(7, 1);
            } else if (value.length === 9 && value.charAt(0) + "" === "6") {
                sum = 0;
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i + 1), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }
                sum = [ 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10 ][sum - 1];
                return sum + "" === value.substr(8, 1);
            } else if (value.length === 9 || value.length === 10) {
                var year = 1900 + parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10) % 50 % 20, day = parseInt(value.substr(4, 2), 10);
                if (value.length === 9) {
                    if (year >= 1980) {
                        year -= 100;
                    }
                    if (year > 1953) {
                        return false;
                    }
                } else if (year < 1954) {
                    year += 100;
                }
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
                if (value.length === 10) {
                    var check = parseInt(value.substr(0, 9), 10) % 11;
                    if (year < 1985) {
                        check = check % 10;
                    }
                    return check + "" === value.substr(9, 1);
                }
                return true;
            }
            return false;
        },
        _de: function(value) {
            if (/^DE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },
        _dk: function(value) {
            if (/^DK[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 2, 7, 6, 5, 4, 3, 2, 1 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 11 === 0;
        },
        _ee: function(value) {
            if (/^EE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 3, 7, 1, 3, 7, 1, 3, 7, 1 ];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 10 === 0;
        },
        _es: function(value) {
            if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                return false;
            }
            var dni = function(value) {
                var check = parseInt(value.substr(0, 8), 10);
                check = "TRWAGMYFPDXBNJZSQVHLCKE"[check % 23];
                return check + "" === value.substr(8, 1);
            }, nie = function(value) {
                var check = [ "XYZ".indexOf(value.charAt(0)), value.substr(1) ].join("");
                check = parseInt(check, 10);
                check = "TRWAGMYFPDXBNJZSQVHLCKE"[check % 23];
                return check + "" === value.substr(8, 1);
            }, cif = function(value) {
                var first = value.charAt(0), check;
                if ("KLM".indexOf(first) !== -1) {
                    check = parseInt(value.substr(1, 8), 10);
                    check = "TRWAGMYFPDXBNJZSQVHLCKE"[check % 23];
                    return check + "" === value.substr(8, 1);
                } else if ("ABCDEFGHJNPQRSUVW".indexOf(first) !== -1) {
                    var sum = 0, weight = [ 2, 1, 2, 1, 2, 1, 2 ], temp = 0;
                    for (var i = 0; i < 7; i++) {
                        temp = parseInt(value.charAt(i + 1), 10) * weight[i];
                        if (temp > 9) {
                            temp = Math.floor(temp / 10) + temp % 10;
                        }
                        sum += temp;
                    }
                    sum = 10 - sum % 10;
                    if (sum === 10) {
                        sum = 0;
                    }
                    return sum + "" === value.substr(8, 1) || "JABCDEFGHI"[sum] === value.substr(8, 1);
                }
                return false;
            };
            var first = value.charAt(0);
            if (/^[0-9]$/.test(first)) {
                return dni(value);
            } else if (/^[XYZ]$/.test(first)) {
                return nie(value);
            } else {
                return cif(value);
            }
        },
        _fi: function(value) {
            if (/^FI[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 7, 9, 10, 5, 8, 4, 2, 1 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 11 === 0;
        },
        _fr: function(value) {
            if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                return false;
            }
            if (!FormValidation.Helper.luhn(value.substr(2))) {
                return false;
            }
            if (/^[0-9]{2}$/.test(value.substr(0, 2))) {
                return value.substr(0, 2) === parseInt(value.substr(2) + "12", 10) % 97 + "";
            } else {
                var alphabet = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ", check;
                if (/^[0-9]{1}$/.test(value.charAt(0))) {
                    check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;
                } else {
                    check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;
                }
                return (parseInt(value.substr(2), 10) + 1 + Math.floor(check / 11)) % 11 === check % 11;
            }
        },
        _gb: function(value) {
            if (/^GB[0-9]{9}$/.test(value) || /^GB[0-9]{12}$/.test(value) || /^GBGD[0-9]{3}$/.test(value) || /^GBHA[0-9]{3}$/.test(value) || /^GB(GD|HA)8888[0-9]{5}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value) && !/^[0-9]{12}$/.test(value) && !/^GD[0-9]{3}$/.test(value) && !/^HA[0-9]{3}$/.test(value) && !/^(GD|HA)8888[0-9]{5}$/.test(value)) {
                return false;
            }
            var length = value.length;
            if (length === 5) {
                var firstTwo = value.substr(0, 2), lastThree = parseInt(value.substr(2), 10);
                return "GD" === firstTwo && lastThree < 500 || "HA" === firstTwo && lastThree >= 500;
            } else if (length === 11 && ("GD8888" === value.substr(0, 6) || "HA8888" === value.substr(0, 6))) {
                if ("GD" === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) >= 500 || "HA" === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) < 500) {
                    return false;
                }
                return parseInt(value.substr(6, 3), 10) % 97 === parseInt(value.substr(9, 2), 10);
            } else if (length === 9 || length === 12) {
                var sum = 0, weight = [ 8, 7, 6, 5, 4, 3, 2, 10, 1 ];
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 97;
                if (parseInt(value.substr(0, 3), 10) >= 100) {
                    return sum === 0 || sum === 42 || sum === 55;
                } else {
                    return sum === 0;
                }
            }
            return true;
        },
        _gr: function(value) {
            if (/^(GR|EL)[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            if (value.length === 8) {
                value = "0" + value;
            }
            var sum = 0, weight = [ 256, 128, 64, 32, 16, 8, 4, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11 % 10;
            return sum + "" === value.substr(8, 1);
        },
        _el: function(value) {
            return this._gr(value);
        },
        _hu: function(value) {
            if (/^HU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 9, 7, 3, 1, 9, 7, 3, 1 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 10 === 0;
        },
        _hr: function(value) {
            if (/^HR[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },
        _ie: function(value) {
            if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                return false;
            }
            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = "0" + value;
                }
                var alphabet = "WABCDEFGHIJKLMNOPQRSTUV", sum = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };
            if (/^[0-9]+$/.test(value.substr(0, 7))) {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + "");
            } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(value.charAt(1)) !== -1) {
                return value.charAt(7) === getCheckDigit(value.substr(2, 5) + value.substr(0, 1) + "");
            }
            return true;
        },
        _is: function(value) {
            if (/^IS[0-9]{5,6}$/.test(value)) {
                value = value.substr(2);
            }
            return /^[0-9]{5,6}$/.test(value);
        },
        _it: function(value) {
            if (/^IT[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            if (parseInt(value.substr(0, 7), 10) === 0) {
                return false;
            }
            var lastThree = parseInt(value.substr(7, 3), 10);
            if (lastThree < 1 || lastThree > 201 && lastThree !== 999 && lastThree !== 888) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
        },
        _lt: function(value) {
            if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                return false;
            }
            var length = value.length, sum = 0, i;
            for (i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * (1 + i % 9);
            }
            var check = sum % 11;
            if (check === 10) {
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * (1 + (i + 2) % 9);
                }
            }
            check = check % 11 % 10;
            return check + "" === value.charAt(length - 1);
        },
        _lu: function(value) {
            if (/^LU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }
            return parseInt(value.substr(0, 6), 10) % 89 + "" === value.substr(6, 2);
        },
        _lv: function(value) {
            if (/^LV[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var first = parseInt(value.charAt(0), 10), sum = 0, weight = [], i, length = value.length;
            if (first > 3) {
                sum = 0;
                weight = [ 9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1 ];
                for (i = 0; i < length; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                return sum === 3;
            } else {
                var day = parseInt(value.substr(0, 2), 10), month = parseInt(value.substr(2, 2), 10), year = parseInt(value.substr(4, 2), 10);
                year = year + 1800 + parseInt(value.charAt(6), 10) * 100;
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
                sum = 0;
                weight = [ 10, 5, 8, 4, 2, 1, 6, 3, 7, 9 ];
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (sum + 1) % 11 % 10;
                return sum + "" === value.charAt(length - 1);
            }
        },
        _mt: function(value) {
            if (/^MT[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 3, 4, 6, 7, 8, 9, 10, 1 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 37 === 0;
        },
        _nl: function(value) {
            if (/^NL[0-9]{9}B[0-9]{2}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}B[0-9]{2}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 9, 8, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return sum + "" === value.substr(8, 1);
        },
        _no: function(value) {
            if (/^NO[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 3, 2, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            }
            return sum + "" === value.substr(8, 1);
        },
        _pl: function(value) {
            if (/^PL[0-9]{10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 6, 5, 7, 2, 3, 4, 5, 6, 7, -1 ];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            return sum % 11 === 0;
        },
        _pt: function(value) {
            if (/^PT[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            var sum = 0, weight = [ 9, 8, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return sum + "" === value.substr(8, 1);
        },
        _ro: function(value) {
            if (/^RO[1-9][0-9]{1,9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9]{1,9}$/.test(value)) {
                return false;
            }
            var length = value.length, weight = [ 7, 5, 3, 2, 1, 7, 5, 3, 2 ].slice(10 - length), sum = 0;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 10 * sum % 11 % 10;
            return sum + "" === value.substr(length - 1, 1);
        },
        _ru: function(value) {
            if (/^RU([0-9]{10}|[0-9]{12})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{10}|[0-9]{12})$/.test(value)) {
                return false;
            }
            var i = 0;
            if (value.length === 10) {
                var sum = 0, weight = [ 2, 4, 10, 3, 5, 9, 4, 6, 8, 0 ];
                for (i = 0; i < 10; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                if (sum > 9) {
                    sum = sum % 10;
                }
                return sum + "" === value.substr(9, 1);
            } else if (value.length === 12) {
                var sum1 = 0, weight1 = [ 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0 ], sum2 = 0, weight2 = [ 3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0 ];
                for (i = 0; i < 11; i++) {
                    sum1 += parseInt(value.charAt(i), 10) * weight1[i];
                    sum2 += parseInt(value.charAt(i), 10) * weight2[i];
                }
                sum1 = sum1 % 11;
                if (sum1 > 9) {
                    sum1 = sum1 % 10;
                }
                sum2 = sum2 % 11;
                if (sum2 > 9) {
                    sum2 = sum2 % 10;
                }
                return sum1 + "" === value.substr(10, 1) && sum2 + "" === value.substr(11, 1);
            }
            return false;
        },
        _rs: function(value) {
            if (/^RS[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }
            var sum = 10, temp = 0;
            for (var i = 0; i < 8; i++) {
                temp = (parseInt(value.charAt(i), 10) + sum) % 10;
                if (temp === 0) {
                    temp = 10;
                }
                sum = 2 * temp % 11;
            }
            return (sum + parseInt(value.substr(8, 1), 10)) % 10 === 1;
        },
        _se: function(value) {
            if (/^SE[0-9]{10}01$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}01$/.test(value)) {
                return false;
            }
            value = value.substr(0, 10);
            return FormValidation.Helper.luhn(value);
        },
        _si: function(value) {
            var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
            if (!res) {
                return false;
            }
            if (res[1]) {
                value = value.substr(2);
            }
            var sum = 0, weight = [ 8, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 7; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return sum + "" === value.substr(7, 1);
        },
        _sk: function(value) {
            if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                return false;
            }
            return parseInt(value, 10) % 11 === 0;
        },
        _ve: function(value) {
            if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[VEJPG][0-9]{9}$/.test(value)) {
                return false;
            }
            var types = {
                V: 4,
                E: 8,
                J: 12,
                P: 16,
                G: 20
            }, sum = types[value.charAt(0)], weight = [ 3, 2, 7, 6, 5, 4, 3, 2 ];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i + 1), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11 || sum === 10) {
                sum = 0;
            }
            return sum + "" === value.substr(9, 1);
        },
        _za: function(value) {
            if (/^ZA4[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            return /^4[0-9]{9}$/.test(value);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            vin: {
                "default": "Please enter a valid VIN number"
            }
        }
    });
    FormValidation.Validator.vin = {
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "vin");
            if (value === "") {
                return true;
            }
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)) {
                return false;
            }
            value = value.toUpperCase();
            var chars = {
                A: 1,
                B: 2,
                C: 3,
                D: 4,
                E: 5,
                F: 6,
                G: 7,
                H: 8,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                P: 7,
                R: 9,
                S: 2,
                T: 3,
                U: 4,
                V: 5,
                W: 6,
                X: 7,
                Y: 8,
                Z: 9,
                "1": 1,
                "2": 2,
                "3": 3,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 7,
                "8": 8,
                "9": 9,
                "0": 0
            }, weights = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ], sum = 0, length = value.length;
            for (var i = 0; i < length; i++) {
                sum += chars[value.charAt(i) + ""] * weights[i];
            }
            var reminder = sum % 11;
            if (reminder === 10) {
                reminder = "X";
            }
            return reminder + "" === value.charAt(8);
        }
    };
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        en_US: {
            zipCode: {
                "default": "Please enter a valid postal code",
                country: "Please enter a valid postal code in %s",
                countries: {
                    AT: "Austria",
                    BG: "Bulgaria",
                    BR: "Brazil",
                    CA: "Canada",
                    CH: "Switzerland",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DK: "Denmark",
                    ES: "Spain",
                    FR: "France",
                    GB: "United Kingdom",
                    IE: "Ireland",
                    IN: "India",
                    IT: "Italy",
                    MA: "Morocco",
                    NL: "Netherlands",
                    PL: "Poland",
                    PT: "Portugal",
                    RO: "Romania",
                    RU: "Russia",
                    SE: "Sweden",
                    SG: "Singapore",
                    SK: "Slovakia",
                    US: "USA"
                }
            }
        }
    });
    FormValidation.Validator.zipCode = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: [ "AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PL", "PT", "RO", "RU", "SE", "SG", "SK", "US" ],
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, "zipCode");
            if (value === "" || !options.country) {
                return true;
            }
            var locale = validator.getLocale(), country = options.country;
            if (typeof country !== "string" || $.inArray(country, this.COUNTRY_CODES) === -1) {
                country = validator.getDynamicOption($field, country);
            }
            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }
            var isValid = false;
            country = country.toUpperCase();
            switch (country) {
              case "AT":
                isValid = /^([1-9]{1})(\d{3})$/.test(value);
                break;

              case "BG":
                isValid = /^([1-9]{1}[0-9]{3})$/.test($.trim(value));
                break;

              case "BR":
                isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
                break;

              case "CA":
                isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
                break;

              case "CH":
                isValid = /^([1-9]{1})(\d{3})$/.test(value);
                break;

              case "CZ":
                isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                break;

              case "DE":
                isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);
                break;

              case "DK":
                isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
                break;

              case "ES":
                isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(value);
                break;

              case "FR":
                isValid = /^[0-9]{5}$/i.test(value);
                break;

              case "GB":
                isValid = this._gb(value);
                break;

              case "IN":
                isValid = /^\d{3}\s?\d{3}$/.test(value);
                break;

              case "IE":
                isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);
                break;

              case "IT":
                isValid = /^(I-|IT-)?\d{5}$/i.test(value);
                break;

              case "MA":
                isValid = /^[1-9][0-9]{4}$/i.test(value);
                break;

              case "NL":
                isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
                break;

              case "PL":
                isValid = /^[0-9]{2}\-[0-9]{3}$/.test(value);
                break;

              case "PT":
                isValid = /^[1-9]\d{3}-\d{3}$/.test(value);
                break;

              case "RO":
                isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
                break;

              case "RU":
                isValid = /^[0-9]{6}$/i.test(value);
                break;

              case "SE":
                isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
                break;

              case "SG":
                isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
                break;

              case "SK":
                isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                break;

              case "US":
              default:
                isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
                break;
            }
            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].zipCode.country, FormValidation.I18n[locale].zipCode.countries[country])
            };
        },
        _gb: function(value) {
            var firstChar = "[ABCDEFGHIJKLMNOPRSTUWYZ]", secondChar = "[ABCDEFGHKLMNOPQRSTUVWXY]", thirdChar = "[ABCDEFGHJKPMNRSTUVWXY]", fourthChar = "[ABEHMNPRVWXY]", fifthChar = "[ABDEFGHJLNPQRSTUWXYZ]", regexps = [ new RegExp("^(" + firstChar + "{1}" + secondChar + "?[0-9]{1,2})(\\s*)([0-9]{1}" + fifthChar + "{2})$", "i"), new RegExp("^(" + firstChar + "{1}[0-9]{1}" + thirdChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", "i"), new RegExp("^(" + firstChar + "{1}" + secondChar + "{1}?[0-9]{1}" + fourthChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i ];
            for (var i = 0; i < regexps.length; i++) {
                if (regexps[i].test(value)) {
                    return true;
                }
            }
            return false;
        }
    };
})(jQuery);

(function($) {
    FormValidation.Framework.Bootstrap = function(element, options, namespace) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]',
                disabled: "disabled"
            },
            err: {
                clazz: "help-block",
                parent: "^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$"
            },
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: "form-control-feedback"
            },
            row: {
                selector: ".form-group",
                valid: "has-success",
                invalid: "has-error",
                feedback: "has-feedback"
            }
        }, options);
        FormValidation.Base.apply(this, [ element, options, namespace ]);
    };
    FormValidation.Framework.Bootstrap.prototype = $.extend({}, FormValidation.Base.prototype, {
        _fixIcon: function($field, $icon) {
            var ns = this._namespace, type = $field.attr("type"), field = $field.attr("data-" + ns + "-field"), row = this.options.fields[field].row || this.options.row.selector, $parent = $field.closest(row);
            if ("checkbox" === type || "radio" === type) {
                var $fieldParent = $field.parent();
                if ($fieldParent.hasClass(type)) {
                    $icon.insertAfter($fieldParent);
                } else if ($fieldParent.parent().hasClass(type)) {
                    $icon.insertAfter($fieldParent.parent());
                }
            }
            if ($parent.find("label").length === 0) {
                $icon.addClass("fv-icon-no-label");
            }
            if ($parent.find(".input-group").length !== 0) {
                $icon.addClass("fv-bootstrap-icon-input-group").insertAfter($parent.find(".input-group").eq(0));
            }
        },
        _createTooltip: function($field, message, type) {
            var ns = this._namespace, $icon = $field.data(ns + ".icon");
            if ($icon) {
                switch (type) {
                  case "popover":
                    $icon.css({
                        cursor: "pointer",
                        "pointer-events": "auto"
                    }).popover("destroy").popover({
                        container: "body",
                        content: message,
                        html: true,
                        placement: "auto top",
                        trigger: "hover click"
                    });
                    break;

                  case "tooltip":
                  default:
                    $icon.css({
                        cursor: "pointer",
                        "pointer-events": "auto"
                    }).tooltip("destroy").tooltip({
                        container: "body",
                        html: true,
                        placement: "auto top",
                        title: message
                    });
                    break;
                }
            }
        },
        _destroyTooltip: function($field, type) {
            var ns = this._namespace, $icon = $field.data(ns + ".icon");
            if ($icon) {
                switch (type) {
                  case "popover":
                    $icon.css({
                        cursor: "",
                        "pointer-events": "none"
                    }).popover("destroy");
                    break;

                  case "tooltip":
                  default:
                    $icon.css({
                        cursor: "",
                        "pointer-events": "none"
                    }).tooltip("destroy");
                    break;
                }
            }
        },
        _hideTooltip: function($field, type) {
            var ns = this._namespace, $icon = $field.data(ns + ".icon");
            if ($icon) {
                switch (type) {
                  case "popover":
                    $icon.popover("hide");
                    break;

                  case "tooltip":
                  default:
                    $icon.tooltip("hide");
                    break;
                }
            }
        },
        _showTooltip: function($field, type) {
            var ns = this._namespace, $icon = $field.data(ns + ".icon");
            if ($icon) {
                switch (type) {
                  case "popover":
                    $icon.popover("show");
                    break;

                  case "tooltip":
                  default:
                    $icon.tooltip("show");
                    break;
                }
            }
        }
    });
    $.fn.bootstrapValidator = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this = $(this), data = $this.data("formValidation") || $this.data("bootstrapValidator"), options = "object" === typeof option && option;
            if (!data) {
                data = new FormValidation.Framework.Bootstrap(this, $.extend({}, {
                    events: {
                        formInit: "init.form.bv",
                        formError: "error.form.bv",
                        formSuccess: "success.form.bv",
                        fieldAdded: "added.field.bv",
                        fieldRemoved: "removed.field.bv",
                        fieldInit: "init.field.bv",
                        fieldError: "error.field.bv",
                        fieldSuccess: "success.field.bv",
                        fieldStatus: "status.field.bv",
                        localeChanged: "changed.locale.bv",
                        validatorError: "error.validator.bv",
                        validatorSuccess: "success.validator.bv"
                    }
                }, options), "bv");
                $this.addClass("fv-form-bootstrap").data("formValidation", data).data("bootstrapValidator", data);
            }
            if ("string" === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };
    $.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap;
})(jQuery);

(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        es_ES: {
            base64: {
                "default": "Por favor introduce un valor válido en base 64"
            },
            between: {
                "default": "Por favor introduce un valor entre %s y %s",
                notInclusive: "Por favor introduce un valor sólo entre %s and %s"
            },
            bic: {
                "default": "Por favor introduce un número BIC válido"
            },
            callback: {
                "default": "Por favor introduce un valor válido"
            },
            choice: {
                "default": "Por favor introduce un valor válido",
                less: "Por favor elija %s opciones como mínimo",
                more: "Por favor elija %s optiones como máximo",
                between: "Por favor elija de %s a %s opciones"
            },
            color: {
                "default": "Por favor introduce un color válido"
            },
            creditCard: {
                "default": "Por favor introduce un número válido de tarjeta de crédito"
            },
            cusip: {
                "default": "Por favor introduce un número CUSIP válido"
            },
            cvv: {
                "default": "Por favor introduce un número CVV válido"
            },
            date: {
                "default": "Por favor introduce una fecha válida",
                min: "Por favor introduce una fecha posterior al %s",
                max: "Por favor introduce una fecha previa al %s",
                range: "Por favor introduce una fecha entre el %s y el %s"
            },
            different: {
                "default": "Por favor introduce un valor distinto"
            },
            digits: {
                "default": "Por favor introduce sólo dígitos"
            },
            ean: {
                "default": "Por favor introduce un número EAN válido"
            },
            ein: {
                "default": "Por favor introduce un número EIN válido"
            },
            emailAddress: {
                "default": "Por favor introduce un email válido"
            },
            file: {
                "default": "Por favor elija un archivo válido"
            },
            greaterThan: {
                "default": "Por favor introduce un valor mayor o igual a %s",
                notInclusive: "Por favor introduce un valor mayor que %s"
            },
            grid: {
                "default": "Por favor introduce un número GRId válido"
            },
            hex: {
                "default": "Por favor introduce un valor hexadecimal válido"
            },
            iban: {
                "default": "Por favor introduce un número IBAN válido",
                country: "Por favor introduce un número IBAN válido en %s",
                countries: {
                    AD: "Andorra",
                    AE: "Emiratos Árabes Unidos",
                    AL: "Albania",
                    AO: "Angola",
                    AT: "Austria",
                    AZ: "Azerbaiyán",
                    BA: "Bosnia-Herzegovina",
                    BE: "Bélgica",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Baréin",
                    BI: "Burundi",
                    BJ: "Benín",
                    BR: "Brasil",
                    CH: "Suiza",
                    CI: "Costa de Marfil",
                    CM: "Camerún",
                    CR: "Costa Rica",
                    CV: "Cabo Verde",
                    CY: "Cyprus",
                    CZ: "República Checa",
                    DE: "Alemania",
                    DK: "Dinamarca",
                    DO: "República Dominicana",
                    DZ: "Argelia",
                    EE: "Estonia",
                    ES: "España",
                    FI: "Finlandia",
                    FO: "Islas Feroe",
                    FR: "Francia",
                    GB: "Reino Unido",
                    GE: "Georgia",
                    GI: "Gibraltar",
                    GL: "Groenlandia",
                    GR: "Grecia",
                    GT: "Guatemala",
                    HR: "Croacia",
                    HU: "Hungría",
                    IE: "Irlanda",
                    IL: "Israel",
                    IR: "Iran",
                    IS: "Islandia",
                    IT: "Italia",
                    JO: "Jordania",
                    KW: "Kuwait",
                    KZ: "Kazajistán",
                    LB: "Líbano",
                    LI: "Liechtenstein",
                    LT: "Lituania",
                    LU: "Luxemburgo",
                    LV: "Letonia",
                    MC: "Mónaco",
                    MD: "Moldavia",
                    ME: "Montenegro",
                    MG: "Madagascar",
                    MK: "Macedonia",
                    ML: "Malí",
                    MR: "Mauritania",
                    MT: "Malta",
                    MU: "Mauricio",
                    MZ: "Mozambique",
                    NL: "Países Bajos",
                    NO: "Noruega",
                    PK: "Pakistán",
                    PL: "Poland",
                    PS: "Palestina",
                    PT: "Portugal",
                    QA: "Catar",
                    RO: "Rumania",
                    RS: "Serbia",
                    SA: "Arabia Saudita",
                    SE: "Suecia",
                    SI: "Eslovenia",
                    SK: "Eslovaquia",
                    SM: "San Marino",
                    SN: "Senegal",
                    TN: "Túnez",
                    TR: "Turquía",
                    VG: "Islas Vírgenes Británicas"
                }
            },
            id: {
                "default": "Por favor introduce un número de identificación válido",
                country: "Por favor introduce un número válido de identificación en %s",
                countries: {
                    BA: "Bosnia Herzegovina",
                    BG: "Bulgaria",
                    BR: "Brasil",
                    CH: "Suiza",
                    CL: "Chile",
                    CN: "China",
                    CZ: "República Checa",
                    DK: "Dinamarca",
                    EE: "Estonia",
                    ES: "España",
                    FI: "Finlandia",
                    HR: "Croacia",
                    IE: "Irlanda",
                    IS: "Islandia",
                    LT: "Lituania",
                    LV: "Letonia",
                    ME: "Montenegro",
                    MK: "Macedonia",
                    NL: "Países Bajos",
                    PL: "Poland",
                    RO: "Romania",
                    RS: "Serbia",
                    SE: "Suecia",
                    SI: "Eslovenia",
                    SK: "Eslovaquia",
                    SM: "San Marino",
                    TH: "Tailandia",
                    ZA: "Sudáfrica"
                }
            },
            identical: {
                "default": "Por favor introduce el mismo valor"
            },
            imei: {
                "default": "Por favor introduce un número IMEI válido"
            },
            imo: {
                "default": "Por favor introduce un número IMO válido"
            },
            integer: {
                "default": "Por favor introduce un número válido"
            },
            ip: {
                "default": "Por favor introduce una dirección IP válida",
                ipv4: "Por favor introduce una dirección IPv4 válida",
                ipv6: "Por favor introduce una dirección IPv6 válida"
            },
            isbn: {
                "default": "Por favor introduce un número ISBN válido"
            },
            isin: {
                "default": "Por favor introduce un número ISIN válido"
            },
            ismn: {
                "default": "Por favor introduce un número ISMN válido"
            },
            issn: {
                "default": "Por favor introduce un número ISSN válido"
            },
            lessThan: {
                "default": "Por favor introduce un valor menor o igual a %s",
                notInclusive: "Por favor introduce un valor menor que %s"
            },
            mac: {
                "default": "Por favor introduce una dirección MAC válida"
            },
            meid: {
                "default": "Por favor introduce un número MEID válido"
            },
            notEmpty: {
                "default": "Por favor introduce un valor"
            },
            numeric: {
                "default": "Por favor introduce un número decimal válido"
            },
            phone: {
                "default": "Por favor introduce un número válido de teléfono",
                country: "Por favor introduce un número válido de teléfono en %s",
                countries: {
                    AE: "Emiratos Árabes Unidos",
                    BG: "Bulgaria",
                    BR: "Brasil",
                    CN: "China",
                    CZ: "República Checa",
                    DE: "Alemania",
                    DK: "Dinamarca",
                    ES: "España",
                    FR: "Francia",
                    GB: "Reino Unido",
                    IN: "India",
                    MA: "Marruecos",
                    NL: "Países Bajos",
                    PK: "Pakistán",
                    RO: "Rumania",
                    RU: "Rusa",
                    SK: "Eslovaquia",
                    TH: "Tailandia",
                    US: "Estados Unidos",
                    VE: "Venezuela"
                }
            },
            regexp: {
                "default": "Por favor introduce un valor que coincida con el patrón"
            },
            remote: {
                "default": "Por favor introduce un valor válido"
            },
            rtn: {
                "default": "Por favor introduce un número RTN válido"
            },
            sedol: {
                "default": "Por favor introduce un número SEDOL válido"
            },
            siren: {
                "default": "Por favor introduce un número SIREN válido"
            },
            siret: {
                "default": "Por favor introduce un número SIRET válido"
            },
            step: {
                "default": "Por favor introduce un paso válido de %s"
            },
            stringCase: {
                "default": "Por favor introduce sólo caracteres en minúscula",
                upper: "Por favor introduce sólo caracteres en mayúscula"
            },
            stringLength: {
                "default": "Por favor introduce un valor con una longitud válida",
                less: "Por favor introduce menos de %s caracteres",
                more: "Por favor introduce más de %s caracteres",
                between: "Por favor introduce un valor con una longitud entre %s y %s caracteres"
            },
            uri: {
                "default": "Por favor introduce una URI válida"
            },
            uuid: {
                "default": "Por favor introduce un número UUID válido",
                version: "Por favor introduce una versión UUID válida para %s"
            },
            vat: {
                "default": "Por favor introduce un número IVA válido",
                country: "Por favor introduce un número IVA válido en %s",
                countries: {
                    AT: "Austria",
                    BE: "Bélgica",
                    BG: "Bulgaria",
                    BR: "Brasil",
                    CH: "Suiza",
                    CY: "Chipre",
                    CZ: "República Checa",
                    DE: "Alemania",
                    DK: "Dinamarca",
                    EE: "Estonia",
                    ES: "España",
                    FI: "Finlandia",
                    FR: "Francia",
                    GB: "Reino Unido",
                    GR: "Grecia",
                    EL: "Grecia",
                    HU: "Hungría",
                    HR: "Croacia",
                    IE: "Irlanda",
                    IS: "Islandia",
                    IT: "Italia",
                    LT: "Lituania",
                    LU: "Luxemburgo",
                    LV: "Letonia",
                    MT: "Malta",
                    NL: "Países Bajos",
                    NO: "Noruega",
                    PL: "Polonia",
                    PT: "Portugal",
                    RO: "Rumanía",
                    RU: "Rusa",
                    RS: "Serbia",
                    SE: "Suecia",
                    SI: "Eslovenia",
                    SK: "Eslovaquia",
                    VE: "Venezuela",
                    ZA: "Sudáfrica"
                }
            },
            vin: {
                "default": "Por favor introduce un número VIN válido"
            },
            zipCode: {
                "default": "Por favor introduce un código postal válido",
                country: "Por favor introduce un código postal válido en %s",
                countries: {
                    AT: "Austria",
                    BG: "Bulgaria",
                    BR: "Brasil",
                    CA: "Canadá",
                    CH: "Suiza",
                    CZ: "República Checa",
                    DE: "Alemania",
                    DK: "Dinamarca",
                    ES: "España",
                    FR: "Francia",
                    GB: "Reino Unido",
                    IE: "Irlanda",
                    IN: "India",
                    IT: "Italia",
                    MA: "Marruecos",
                    NL: "Países Bajos",
                    PL: "Poland",
                    PT: "Portugal",
                    RO: "Rumanía",
                    RU: "Rusa",
                    SE: "Suecia",
                    SG: "Singapur",
                    SK: "Eslovaquia",
                    US: "Estados Unidos"
                }
            }
        }
    });
})(jQuery);

(function() {
    var __slice = [].slice;
    (function($, window) {
        "use strict";
        var BootstrapSwitch;
        BootstrapSwitch = function() {
            function BootstrapSwitch(element, options) {
                if (options == null) {
                    options = {};
                }
                this.$element = $(element);
                this.options = $.extend({}, $.fn.bootstrapSwitch.defaults, {
                    state: this.$element.is(":checked"),
                    size: this.$element.data("size"),
                    animate: this.$element.data("animate"),
                    disabled: this.$element.is(":disabled"),
                    readonly: this.$element.is("[readonly]"),
                    indeterminate: this.$element.data("indeterminate"),
                    inverse: this.$element.data("inverse"),
                    radioAllOff: this.$element.data("radio-all-off"),
                    onColor: this.$element.data("on-color"),
                    offColor: this.$element.data("off-color"),
                    onText: this.$element.data("on-text"),
                    offText: this.$element.data("off-text"),
                    labelText: this.$element.data("label-text"),
                    handleWidth: this.$element.data("handle-width"),
                    labelWidth: this.$element.data("label-width"),
                    baseClass: this.$element.data("base-class"),
                    wrapperClass: this.$element.data("wrapper-class")
                }, options);
                this.$wrapper = $("<div>", {
                    "class": function(_this) {
                        return function() {
                            var classes;
                            classes = [ "" + _this.options.baseClass ].concat(_this._getClasses(_this.options.wrapperClass));
                            classes.push(_this.options.state ? "" + _this.options.baseClass + "-on" : "" + _this.options.baseClass + "-off");
                            if (_this.options.size != null) {
                                classes.push("" + _this.options.baseClass + "-" + _this.options.size);
                            }
                            if (_this.options.disabled) {
                                classes.push("" + _this.options.baseClass + "-disabled");
                            }
                            if (_this.options.readonly) {
                                classes.push("" + _this.options.baseClass + "-readonly");
                            }
                            if (_this.options.indeterminate) {
                                classes.push("" + _this.options.baseClass + "-indeterminate");
                            }
                            if (_this.options.inverse) {
                                classes.push("" + _this.options.baseClass + "-inverse");
                            }
                            if (_this.$element.attr("id")) {
                                classes.push("" + _this.options.baseClass + "-id-" + _this.$element.attr("id"));
                            }
                            return classes.join(" ");
                        };
                    }(this)()
                });
                this.$container = $("<div>", {
                    "class": "" + this.options.baseClass + "-container"
                });
                this.$on = $("<span>", {
                    html: this.options.onText,
                    "class": "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor
                });
                this.$off = $("<span>", {
                    html: this.options.offText,
                    "class": "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor
                });
                this.$label = $("<span>", {
                    html: this.options.labelText,
                    "class": "" + this.options.baseClass + "-label"
                });
                this.$element.on("init.bootstrapSwitch", function(_this) {
                    return function() {
                        return _this.options.onInit.apply(element, arguments);
                    };
                }(this));
                this.$element.on("switchChange.bootstrapSwitch", function(_this) {
                    return function() {
                        return _this.options.onSwitchChange.apply(element, arguments);
                    };
                }(this));
                this.$container = this.$element.wrap(this.$container).parent();
                this.$wrapper = this.$container.wrap(this.$wrapper).parent();
                this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off);
                if (this.options.indeterminate) {
                    this.$element.prop("indeterminate", true);
                }
                this._init();
                this._elementHandlers();
                this._handleHandlers();
                this._labelHandlers();
                this._formHandler();
                this._externalLabelHandler();
                this.$element.trigger("init.bootstrapSwitch");
            }
            BootstrapSwitch.prototype._constructor = BootstrapSwitch;
            BootstrapSwitch.prototype.state = function(value, skip) {
                if (typeof value === "undefined") {
                    return this.options.state;
                }
                if (this.options.disabled || this.options.readonly) {
                    return this.$element;
                }
                if (this.options.state && !this.options.radioAllOff && this.$element.is(":radio")) {
                    return this.$element;
                }
                if (this.options.indeterminate) {
                    this.indeterminate(false);
                }
                value = !!value;
                this.$element.prop("checked", value).trigger("change.bootstrapSwitch", skip);
                return this.$element;
            };
            BootstrapSwitch.prototype.toggleState = function(skip) {
                if (this.options.disabled || this.options.readonly) {
                    return this.$element;
                }
                if (this.options.indeterminate) {
                    this.indeterminate(false);
                    return this.state(true);
                } else {
                    return this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", skip);
                }
            };
            BootstrapSwitch.prototype.size = function(value) {
                if (typeof value === "undefined") {
                    return this.options.size;
                }
                if (this.options.size != null) {
                    this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size);
                }
                if (value) {
                    this.$wrapper.addClass("" + this.options.baseClass + "-" + value);
                }
                this._width();
                this._containerPosition();
                this.options.size = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.animate = function(value) {
                if (typeof value === "undefined") {
                    return this.options.animate;
                }
                value = !!value;
                if (value === this.options.animate) {
                    return this.$element;
                }
                return this.toggleAnimate();
            };
            BootstrapSwitch.prototype.toggleAnimate = function() {
                this.options.animate = !this.options.animate;
                this.$wrapper.toggleClass("" + this.options.baseClass + "-animate");
                return this.$element;
            };
            BootstrapSwitch.prototype.disabled = function(value) {
                if (typeof value === "undefined") {
                    return this.options.disabled;
                }
                value = !!value;
                if (value === this.options.disabled) {
                    return this.$element;
                }
                return this.toggleDisabled();
            };
            BootstrapSwitch.prototype.toggleDisabled = function() {
                this.options.disabled = !this.options.disabled;
                this.$element.prop("disabled", this.options.disabled);
                this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled");
                return this.$element;
            };
            BootstrapSwitch.prototype.readonly = function(value) {
                if (typeof value === "undefined") {
                    return this.options.readonly;
                }
                value = !!value;
                if (value === this.options.readonly) {
                    return this.$element;
                }
                return this.toggleReadonly();
            };
            BootstrapSwitch.prototype.toggleReadonly = function() {
                this.options.readonly = !this.options.readonly;
                this.$element.prop("readonly", this.options.readonly);
                this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly");
                return this.$element;
            };
            BootstrapSwitch.prototype.indeterminate = function(value) {
                if (typeof value === "undefined") {
                    return this.options.indeterminate;
                }
                value = !!value;
                if (value === this.options.indeterminate) {
                    return this.$element;
                }
                return this.toggleIndeterminate();
            };
            BootstrapSwitch.prototype.toggleIndeterminate = function() {
                this.options.indeterminate = !this.options.indeterminate;
                this.$element.prop("indeterminate", this.options.indeterminate);
                this.$wrapper.toggleClass("" + this.options.baseClass + "-indeterminate");
                this._containerPosition();
                return this.$element;
            };
            BootstrapSwitch.prototype.inverse = function(value) {
                if (typeof value === "undefined") {
                    return this.options.inverse;
                }
                value = !!value;
                if (value === this.options.inverse) {
                    return this.$element;
                }
                return this.toggleInverse();
            };
            BootstrapSwitch.prototype.toggleInverse = function() {
                var $off, $on;
                this.$wrapper.toggleClass("" + this.options.baseClass + "-inverse");
                $on = this.$on.clone(true);
                $off = this.$off.clone(true);
                this.$on.replaceWith($off);
                this.$off.replaceWith($on);
                this.$on = $off;
                this.$off = $on;
                this.options.inverse = !this.options.inverse;
                return this.$element;
            };
            BootstrapSwitch.prototype.onColor = function(value) {
                var color;
                color = this.options.onColor;
                if (typeof value === "undefined") {
                    return color;
                }
                if (color != null) {
                    this.$on.removeClass("" + this.options.baseClass + "-" + color);
                }
                this.$on.addClass("" + this.options.baseClass + "-" + value);
                this.options.onColor = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.offColor = function(value) {
                var color;
                color = this.options.offColor;
                if (typeof value === "undefined") {
                    return color;
                }
                if (color != null) {
                    this.$off.removeClass("" + this.options.baseClass + "-" + color);
                }
                this.$off.addClass("" + this.options.baseClass + "-" + value);
                this.options.offColor = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.onText = function(value) {
                if (typeof value === "undefined") {
                    return this.options.onText;
                }
                this.$on.html(value);
                this._width();
                this._containerPosition();
                this.options.onText = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.offText = function(value) {
                if (typeof value === "undefined") {
                    return this.options.offText;
                }
                this.$off.html(value);
                this._width();
                this._containerPosition();
                this.options.offText = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.labelText = function(value) {
                if (typeof value === "undefined") {
                    return this.options.labelText;
                }
                this.$label.html(value);
                this._width();
                this.options.labelText = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.handleWidth = function(value) {
                if (typeof value === "undefined") {
                    return this.options.handleWidth;
                }
                this.options.handleWidth = value;
                this._width();
                this._containerPosition();
                return this.$element;
            };
            BootstrapSwitch.prototype.labelWidth = function(value) {
                if (typeof value === "undefined") {
                    return this.options.labelWidth;
                }
                this.options.labelWidth = value;
                this._width();
                this._containerPosition();
                return this.$element;
            };
            BootstrapSwitch.prototype.baseClass = function(value) {
                return this.options.baseClass;
            };
            BootstrapSwitch.prototype.wrapperClass = function(value) {
                if (typeof value === "undefined") {
                    return this.options.wrapperClass;
                }
                if (!value) {
                    value = $.fn.bootstrapSwitch.defaults.wrapperClass;
                }
                this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" "));
                this.$wrapper.addClass(this._getClasses(value).join(" "));
                this.options.wrapperClass = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.radioAllOff = function(value) {
                if (typeof value === "undefined") {
                    return this.options.radioAllOff;
                }
                value = !!value;
                if (value === this.options.radioAllOff) {
                    return this.$element;
                }
                this.options.radioAllOff = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.onInit = function(value) {
                if (typeof value === "undefined") {
                    return this.options.onInit;
                }
                if (!value) {
                    value = $.fn.bootstrapSwitch.defaults.onInit;
                }
                this.options.onInit = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.onSwitchChange = function(value) {
                if (typeof value === "undefined") {
                    return this.options.onSwitchChange;
                }
                if (!value) {
                    value = $.fn.bootstrapSwitch.defaults.onSwitchChange;
                }
                this.options.onSwitchChange = value;
                return this.$element;
            };
            BootstrapSwitch.prototype.destroy = function() {
                var $form;
                $form = this.$element.closest("form");
                if ($form.length) {
                    $form.off("reset.bootstrapSwitch").removeData("bootstrap-switch");
                }
                this.$container.children().not(this.$element).remove();
                this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch");
                return this.$element;
            };
            BootstrapSwitch.prototype._width = function() {
                var $handles, handleWidth;
                $handles = this.$on.add(this.$off);
                $handles.add(this.$label).css("width", "");
                handleWidth = this.options.handleWidth === "auto" ? Math.max(this.$on.width(), this.$off.width()) : this.options.handleWidth;
                $handles.width(handleWidth);
                this.$label.width(function(_this) {
                    return function(index, width) {
                        if (_this.options.labelWidth !== "auto") {
                            return _this.options.labelWidth;
                        }
                        if (width < handleWidth) {
                            return handleWidth;
                        } else {
                            return width;
                        }
                    };
                }(this));
                this._handleWidth = this.$on.outerWidth();
                this._labelWidth = this.$label.outerWidth();
                this.$container.width(this._handleWidth * 2 + this._labelWidth);
                return this.$wrapper.width(this._handleWidth + this._labelWidth);
            };
            BootstrapSwitch.prototype._containerPosition = function(state, callback) {
                if (state == null) {
                    state = this.options.state;
                }
                this.$container.css("margin-left", function(_this) {
                    return function() {
                        var values;
                        values = [ 0, "-" + _this._handleWidth + "px" ];
                        if (_this.options.indeterminate) {
                            return "-" + _this._handleWidth / 2 + "px";
                        }
                        if (state) {
                            if (_this.options.inverse) {
                                return values[1];
                            } else {
                                return values[0];
                            }
                        } else {
                            if (_this.options.inverse) {
                                return values[0];
                            } else {
                                return values[1];
                            }
                        }
                    };
                }(this));
                if (!callback) {
                    return;
                }
                return setTimeout(function() {
                    return callback();
                }, 50);
            };
            BootstrapSwitch.prototype._init = function() {
                var init, initInterval;
                init = function(_this) {
                    return function() {
                        _this._width();
                        return _this._containerPosition(null, function() {
                            if (_this.options.animate) {
                                return _this.$wrapper.addClass("" + _this.options.baseClass + "-animate");
                            }
                        });
                    };
                }(this);
                if (this.$wrapper.is(":visible")) {
                    return init();
                }
                return initInterval = window.setInterval(function(_this) {
                    return function() {
                        if (_this.$wrapper.is(":visible")) {
                            init();
                            return window.clearInterval(initInterval);
                        }
                    };
                }(this), 50);
            };
            BootstrapSwitch.prototype._elementHandlers = function() {
                return this.$element.on({
                    "change.bootstrapSwitch": function(_this) {
                        return function(e, skip) {
                            var state;
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            state = _this.$element.is(":checked");
                            _this._containerPosition(state);
                            if (state === _this.options.state) {
                                return;
                            }
                            _this.options.state = state;
                            _this.$wrapper.toggleClass("" + _this.options.baseClass + "-off").toggleClass("" + _this.options.baseClass + "-on");
                            if (!skip) {
                                if (_this.$element.is(":radio")) {
                                    $("[name='" + _this.$element.attr("name") + "']").not(_this.$element).prop("checked", false).trigger("change.bootstrapSwitch", true);
                                }
                                return _this.$element.trigger("switchChange.bootstrapSwitch", [ state ]);
                            }
                        };
                    }(this),
                    "focus.bootstrapSwitch": function(_this) {
                        return function(e) {
                            e.preventDefault();
                            return _this.$wrapper.addClass("" + _this.options.baseClass + "-focused");
                        };
                    }(this),
                    "blur.bootstrapSwitch": function(_this) {
                        return function(e) {
                            e.preventDefault();
                            return _this.$wrapper.removeClass("" + _this.options.baseClass + "-focused");
                        };
                    }(this),
                    "keydown.bootstrapSwitch": function(_this) {
                        return function(e) {
                            if (!e.which || _this.options.disabled || _this.options.readonly) {
                                return;
                            }
                            switch (e.which) {
                              case 37:
                                e.preventDefault();
                                e.stopImmediatePropagation();
                                return _this.state(false);

                              case 39:
                                e.preventDefault();
                                e.stopImmediatePropagation();
                                return _this.state(true);
                            }
                        };
                    }(this)
                });
            };
            BootstrapSwitch.prototype._handleHandlers = function() {
                this.$on.on("click.bootstrapSwitch", function(_this) {
                    return function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.state(false);
                        return _this.$element.trigger("focus.bootstrapSwitch");
                    };
                }(this));
                return this.$off.on("click.bootstrapSwitch", function(_this) {
                    return function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.state(true);
                        return _this.$element.trigger("focus.bootstrapSwitch");
                    };
                }(this));
            };
            BootstrapSwitch.prototype._labelHandlers = function() {
                return this.$label.on({
                    "mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function(_this) {
                        return function(e) {
                            if (_this._dragStart || _this.options.disabled || _this.options.readonly) {
                                return;
                            }
                            e.preventDefault();
                            e.stopPropagation();
                            _this._dragStart = (e.pageX || e.originalEvent.touches[0].pageX) - parseInt(_this.$container.css("margin-left"), 10);
                            if (_this.options.animate) {
                                _this.$wrapper.removeClass("" + _this.options.baseClass + "-animate");
                            }
                            return _this.$element.trigger("focus.bootstrapSwitch");
                        };
                    }(this),
                    "mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function(_this) {
                        return function(e) {
                            var difference;
                            if (_this._dragStart == null) {
                                return;
                            }
                            e.preventDefault();
                            difference = (e.pageX || e.originalEvent.touches[0].pageX) - _this._dragStart;
                            if (difference < -_this._handleWidth || difference > 0) {
                                return;
                            }
                            _this._dragEnd = difference;
                            return _this.$container.css("margin-left", "" + _this._dragEnd + "px");
                        };
                    }(this),
                    "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function(_this) {
                        return function(e) {
                            var state;
                            if (!_this._dragStart) {
                                return;
                            }
                            e.preventDefault();
                            if (_this.options.animate) {
                                _this.$wrapper.addClass("" + _this.options.baseClass + "-animate");
                            }
                            if (_this._dragEnd) {
                                state = _this._dragEnd > -(_this._handleWidth / 2);
                                _this._dragEnd = false;
                                _this.state(_this.options.inverse ? !state : state);
                            } else {
                                _this.state(!_this.options.state);
                            }
                            return _this._dragStart = false;
                        };
                    }(this),
                    "mouseleave.bootstrapSwitch": function(_this) {
                        return function(e) {
                            return _this.$label.trigger("mouseup.bootstrapSwitch");
                        };
                    }(this)
                });
            };
            BootstrapSwitch.prototype._externalLabelHandler = function() {
                var $externalLabel;
                $externalLabel = this.$element.closest("label");
                return $externalLabel.on("click", function(_this) {
                    return function(event) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        if (event.target === $externalLabel[0]) {
                            return _this.toggleState();
                        }
                    };
                }(this));
            };
            BootstrapSwitch.prototype._formHandler = function() {
                var $form;
                $form = this.$element.closest("form");
                if ($form.data("bootstrap-switch")) {
                    return;
                }
                return $form.on("reset.bootstrapSwitch", function() {
                    return window.setTimeout(function() {
                        return $form.find("input").filter(function() {
                            return $(this).data("bootstrap-switch");
                        }).each(function() {
                            return $(this).bootstrapSwitch("state", this.checked);
                        });
                    }, 1);
                }).data("bootstrap-switch", true);
            };
            BootstrapSwitch.prototype._getClasses = function(classes) {
                var c, cls, _i, _len;
                if (!$.isArray(classes)) {
                    return [ "" + this.options.baseClass + "-" + classes ];
                }
                cls = [];
                for (_i = 0, _len = classes.length; _i < _len; _i++) {
                    c = classes[_i];
                    cls.push("" + this.options.baseClass + "-" + c);
                }
                return cls;
            };
            return BootstrapSwitch;
        }();
        $.fn.bootstrapSwitch = function() {
            var args, option, ret;
            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            ret = this;
            this.each(function() {
                var $this, data;
                $this = $(this);
                data = $this.data("bootstrap-switch");
                if (!data) {
                    $this.data("bootstrap-switch", data = new BootstrapSwitch(this, option));
                }
                if (typeof option === "string") {
                    return ret = data[option].apply(data, args);
                }
            });
            return ret;
        };
        $.fn.bootstrapSwitch.Constructor = BootstrapSwitch;
        return $.fn.bootstrapSwitch.defaults = {
            state: true,
            size: null,
            animate: true,
            disabled: false,
            readonly: false,
            indeterminate: false,
            inverse: false,
            radioAllOff: false,
            onColor: "primary",
            offColor: "default",
            onText: "ON",
            offText: "OFF",
            labelText: "&nbsp;",
            handleWidth: "auto",
            labelWidth: "auto",
            baseClass: "bootstrap-switch",
            wrapperClass: "wrapper",
            onInit: function() {},
            onSwitchChange: function() {}
        };
    })(window.jQuery, window);
}).call(this);

var j = jQuery.noConflict();

(function($) {
    var body = j("body");
    var msg_success = j("#js-msg-success");
    var msg_danger = j("#js-msg-danger");
    j(document).on("ready", function() {
        j('[name="status"]').bootstrapSwitch({
            size: "small",
            onColor: "success",
            radioAllOff: true,
            onText: '<i class="glyphicon glyphicon-ok"></i>',
            offText: '<i class="glyphicon glyphicon-remove"></i>'
        });
        body.on("click", ".js-delete", function(e) {
            e.preventDefault();
            var $this = j(this);
            var titles = $this.data("titles");
            var displayTotal = typeof $this.data("total") !== "undefined" ? $this.data("total") : false;
            var delForm = new DeleteForm(j("#form-delete"), j(this), titles);
            delForm.submit(function(response) {
                if (response.success) {
                    if (displayTotal) {
                        delForm.updateTotal(delForm.getTotal() - 1);
                    }
                    titles = titles.split(",");
                    msg_success.text("Se eliminó el " + titles[0] + ".");
                    msg_success.fadeIn("slow");
                    setTimeout(function() {
                        msg_success.fadeOut("slow", function() {
                            j(this).text("");
                        });
                    }, 3e3);
                }
            });
        });
        j(".js-display-form").on("click", function(ev) {
            ev.preventDefault();
            var $this = j(this);
            var type = $this.data("type");
            var icon = $this.data("icon");
            var form = j("#js-form-add-" + type);
            var title = type === "email" ? "Email" : "Teléfono";
            if ($this.hasClass("active")) {
                form.fadeOut("slow", function() {
                    $this.html("Agregar " + title + ' <i class="fa ' + icon + '"></i>').removeClass("btn-danger active").addClass("btn-success");
                });
                form.find('input[name="' + type + '"]').val("");
                form.data("formValidation").resetForm();
            } else {
                form.fadeIn("slow", function() {
                    $this.html('Cancelar <i class="fa ' + icon + '">').removeClass("btn-success").addClass("btn-danger active");
                    form.find('input[name="' + type + '"]').focus();
                });
            }
        });
        j("#js-form-add-email").formValidation({
            locale: "es_ES",
            framework: "bootstrap",
            icon: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh"
            }
        }).on("err.field.fv", function(e, data) {
            var field = e.target;
            j('small.help-block[data-bv-result="INVALID"]').addClass("hide");
        }).on("success.form.fv", function(e) {
            e.preventDefault();
            var form = j(this);
            var type = "email";
            var addForm = new AddForm(form, j("#js-add-" + type));
            addForm.submit(function(response) {
                if (response.success) {
                    var table = j("#js-table-" + type);
                    var content = '<tr data-id="' + response.employeeEmail.id + '" class="item">' + "<td>" + response.employeeEmail.id + "</td>" + "<td>" + response.employeeEmail.email + "</td>" + '<td align="center">' + '<a href="#" class="btn btn-danger js-delete" data-titles="Email,Emails" data-total="false">x</a>' + "</td>" + "</tr>";
                    if (table.find("tr").first().hasClass("js-no-" + type)) {
                        table.find("tr").first().remove();
                    }
                    table.append(content);
                    form.data("formValidation").resetForm();
                    form.fadeOut("slow", function() {
                        form.find('input[name="' + type + '"]').val("");
                        j("#js-add" + type).html('Agregar Email <i class="fa fa-envelope-o"></i>').removeClass("active btn-danger").addClass("btn-success");
                    });
                }
            });
        });
        j("#js-form-add-phone").formValidation({
            locale: "es_ES",
            framework: "bootstrap",
            icon: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh"
            }
        }).on("err.field.fv", function(e, data) {
            var field = e.target;
            j('small.help-block[data-bv-result="INVALID"]').addClass("hide");
        }).on("success.form.fv", function(e) {
            e.preventDefault();
            var form = j(this);
            var type = "phone";
            var addForm = new AddForm(form, j("#js-add-" + type));
            addForm.submit(function(response) {
                if (response.success) {
                    var table = j("#js-table-" + type);
                    var content = '<tr data-id="' + response.employeePhone.id + '" class="item">' + "<td>" + response.employeePhone.id + "</td>" + "<td>" + response.employeePhone.phone + "</td>" + '<td align="center">' + '<a href="#" class="btn btn-danger js-delete" data-titles="Teléfono,Teléfonos" data-total="false">x</a>' + "</td>" + "</tr>";
                    if (table.find("tr").first().hasClass("js-no-" + type)) {
                        table.find("tr").first().remove();
                    }
                    table.append(content);
                    form.data("formValidation").resetForm();
                    form.fadeOut("slow", function() {
                        j(this).find('input[name="' + type + '"]').val("");
                        j("#js-add" + type).html('Agregar Teléfono <i class="fa fa-phone"></i>').removeClass("active btn-danger").addClass("btn-success");
                    });
                }
            });
        });
    });
    function DeleteForm(form, button, titles) {
        var item = button.closest(".item");
        var id = item.data("id");
        var action = form.attr("action").replace(":id", id);
        var total = j("#js-total");
        titles = titles.split(",");
        this.getTotal = function() {
            return parseInt(total.text().split(" ")[1]);
        };
        this.updateTotal = function(numTotal) {
            var text = "";
            if (numTotal === 0) {
                text = "No hay " + titles[1];
            } else if (numTotal === 1) {
                text = "Hay 1 " + titles[0];
            } else {
                text = "Hay " + numTotal + " " + titles[1];
            }
            total.text(text);
        };
        this.submit = function(success) {
            j.post(action, form.serialize(), function(response) {
                item.fadeOut();
                success(response);
            }).fail(function() {
                msg_danger.text("No se pudo eliminar el " + titles[0] + ". Por favor vuelve a intentarlo.");
                msg_danger.fadeIn("slow");
                setTimeout(function() {
                    msg_danger.fadeOut("slow", function() {
                        j(this).text("");
                    });
                }, 3e3);
            });
        };
    }
    function AddForm(form, button) {
        var action = form.attr("action");
        this.submit = function(success) {
            j.post(action, form.serialize(), function(response) {
                success(response);
            }).fail(function() {
                msg_danger.text("No se pudo agregar. Por favor vuelve a intentarlo.");
                msg_danger.fadeIn("slow");
                setTimeout(function() {
                    msg_danger.fadeOut("slow", function() {
                        j(this).text("");
                    });
                }, 3e3);
            }, "json");
        };
    }
})(jQuery);