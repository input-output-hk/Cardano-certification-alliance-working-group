"use strict";
window.respecVersion = "24.34.0";
! function(e) {
    function t(t) {
        for (var n, o, i = t[0], a = t[1], s = 0, u = []; s < i.length; s++) o = i[s], Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]), r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (c && c(t); u.length;) u.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function() {
        return Promise.resolve()
    }, o.m = e, o.c = n, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o.oe = function(e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        a = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var s = 0; s < i.length; s++) t(i[s]);
    var c = a;
    o(o.s = 20)
}([function(e, t, n) {
    var r, o;
    r = [t, n(3), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculateLeftPad = function(e) {
            if ("string" != typeof e) throw new TypeError("Invalid input");
            const t = e.split("\n").filter(e => e).reduce((e, t) => {
                if (0 === e) return e;
                const n = t.match(r)[0] || "";
                return Math.min(n.length, e)
            }, 1 / 0);
            return t === 1 / 0 ? 0 : t
        }, e.createResourceHint = function(e) {
            if (!e || "object" != typeof e) throw new TypeError("Missing options");
            if (!a.has(e.hint)) throw new TypeError("Invalid resources hint");
            const t = new URL(e.href, location.href),
                n = document.createElement("link");
            let {
                href: r
            } = t;
            switch (n.rel = e.hint, n.rel) {
                case "dns-prefetch":
                case "preconnect":
                    r = t.origin, (e.corsMode || t.origin !== document.location.origin) && (n.crossOrigin = e.corsMode || "anonymous");
                    break;
                case "preload":
                    "as" in e && "string" == typeof e.as && (s.has(e.as) || console.warn("Unknown request destination: ".concat(e.as)), n.setAttribute("as", e.as))
            }
            n.href = r, e.dontRemove || n.classList.add("removeOnSave");
            return n
        }, e.removeReSpec = function(e) {
            e.querySelectorAll(".remove, script[data-requiremodule]").forEach(e => {
                e.remove()
            })
        }, e.showInlineWarning = function(e, t, r) {
            Array.isArray(e) || (e = [e]);
            const o = e.map((e, n) => (u(e, t, r), l(e, n))).join(", ");
            (0, n.pub)("warn", "".concat(t, " at: ").concat(o, ".")), console.warn(t, e)
        }, e.showInlineError = function(e, t, r, {
            details: o
        } = {}) {
            Array.isArray(e) || (e = [e]);
            const i = e.map((e, n) => (u(e, t, r), l(e, n))).join(", ");
            let a = "".concat(t, " at: ").concat(i, ".");
            o && (a += "\n\n<details>".concat(o, "</details>"));
            (0, n.pub)("error", a), console.error(t, e)
        }, e.joinAnd = function(e = [], n = (e => e), r = t.lang) {
            const o = e.map(n);
            if (Intl.ListFormat && "function" == typeof Intl.ListFormat) {
                return new Intl.ListFormat(r, {
                    style: "long",
                    type: "conjunction"
                }).format(o)
            }
            switch (o.length) {
                case 0:
                case 1:
                    return o.toString();
                case 2:
                    return o.join(" and ");
                default: {
                    const e = o.join(", "),
                        t = e.lastIndexOf(",");
                    return "".concat(e.substr(0, t + 1), " and ").concat(e.slice(t + 2))
                }
            }
        }, e.xmlEscape = function(e) {
            return e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
        }, e.norm = d, e.concatDate = function(e, t = "") {
            return i.format(e).replace(o, t)
        }, e.toShortIsoDate = function(e) {
            return i.format(e)
        }, e.lead0 = function(e) {
            return 1 === String(e).length ? "0".concat(e) : e
        }, e.parseSimpleDate = function(e) {
            return new Date(e)
        }, e.parseLastModified = function(e) {
            return e ? new Date(Date.parse(e)) : new Date
        }, e.humanDate = function(e = new Date, t = document.documentElement.lang || "en") {
            e instanceof Date || (e = new Date(e));
            const n = [t, "en"],
                r = e.toLocaleString(n, {
                    day: "2-digit",
                    timeZone: "UTC"
                }),
                o = e.toLocaleString(n, {
                    month: "long",
                    timeZone: "UTC"
                }),
                i = e.toLocaleString(n, {
                    year: "numeric",
                    timeZone: "UTC"
                });
            return "".concat(r, " ").concat(o, " ").concat(i)
        }, e.isoDate = function(e) {
            return (e instanceof Date ? e : new Date(e)).toISOString()
        }, e.toKeyValuePairs = function(e, t = ", ", n = "=") {
            return Array.from(Object.entries(e)).map(([e, t]) => "".concat(e).concat(n).concat(JSON.stringify(t))).join(t)
        }, e.linkCSS = function(e, t) {
            const n = [].concat(t).map(t => {
                const n = e.createElement("link");
                return n.rel = "stylesheet", n.href = t, n
            }).reduce((e, t) => (e.appendChild(t), e), e.createDocumentFragment());
            e.head.appendChild(n)
        }, e.runTransforms = function(e, t) {
            let r = [this, e];
            const o = Array.from(arguments);
            if (o.shift(), o.shift(), r = r.concat(o), t) {
                const o = t.split(/\s+/);
                for (let t = 0; t < o.length; t++) {
                    const i = o[t],
                        a = window[i];
                    if (a) try {
                        e = a.apply(this, r)
                    } catch (e) {
                        (0, n.pub)("warn", "call to `".concat(i, "()` failed with: ").concat(e, ". See error console for stack trace.")), console.error(e)
                    }
                }
            }
            return e
        }, e.fetchAndCache = async function(e, t = 864e5) {
            const n = new Request(e),
                r = new URL(n.url);
            let o, i;
            if ("caches" in window) try {
                if (o = await caches.open(r.origin), (i = await o.match(n)) && new Date(i.headers.get("Expires")) > new Date) return i
            } catch (e) {
                console.error("Failed to use Cache API.", e)
            }
            const a = await fetch(n);
            if (!a.ok && i) return console.warn("Returning a stale cached response for ".concat(r)), i;
            if (o && a.ok) {
                const e = a.clone(),
                    r = new Headers(a.headers),
                    i = new Date(Date.now() + t);
                r.set("Expires", i.toString());
                const s = new Response(await e.blob(), {
                    headers: r
                });
                await o.put(n, s).catch(console.error)
            }
            return a
        }, e.flatten = function e(t, n) {
            const r = Array.isArray(n) ? n.slice().reduce(e, []) : [n];
            t.push(...r);
            return t
        }, e.addId = f, e.getTextNodes = function(e, t = [], n = {
            wsNodes: !0
        }) {
            const r = t.join(", "),
                o = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, e => n.wsNodes || e.data.trim() ? r && e.parentElement.closest(r) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
                i = [];
            let a;
            for (; a = o.nextNode();) i.push(a);
            return i
        }, e.getDfnTitles = p, e.getLinkTargets = function(e) {
            const t = e.closest("[data-link-for]"),
                n = t ? t.dataset.linkFor : "";
            return p(e).reduce((e, t) => {
                const r = t.split(".");
                return 2 === r.length && e.push({
                    for: r[0],
                    title: r[1]
                }), e.push({
                    for: n,
                    title: t
                }), "" !== n && e.push({
                    for: "",
                    title: t
                }), e
            }, [])
        }, e.renameElement = h, e.refTypeFromContext = function(e, t) {
            const n = t.closest(c);
            let r = !1;
            n && (r = !t.closest(".normative") || !n.querySelector(".normative"));
            if (e.startsWith("!")) {
                if (r) return {
                    type: "informative",
                    illegal: !0
                };
                r = !1
            } else e.startsWith("?") && (r = !0);
            return {
                type: r ? "informative" : "normative",
                illegal: !1
            }
        }, e.wrapInner = function(e, t) {
            return t.append(...e.childNodes), e.appendChild(t), e
        }, e.parents = function(e, t) {
            const n = [];
            let r = e.parentElement;
            for (; r;) {
                const e = r.closest(t);
                if (!e) break;
                n.push(e), r = e.parentElement
            }
            return n
        }, e.children = function(e, t) {
            try {
                return e.querySelectorAll(":scope > ".concat(t))
            } catch (n) {
                let r = "";
                e.id || (r = "temp-".concat(String(Math.random()).substr(2)), e.id = r);
                const o = "#".concat(e.id, " > ").concat(t),
                    i = e.parentElement.querySelectorAll(o);
                return r && (e.id = ""), i
            }
        }, e.msgIdGenerator = function(e, t = 0) {
            const n = function*(e, t) {
                for (;;) yield "".concat(e, ":").concat(t), t++
            }(e, t);
            return () => n.next().value
        }, e.makeSafeCopy = function(e) {
            const t = e.cloneNode(!0);
            t.querySelectorAll("[id]").forEach(e => e.removeAttribute("id")), t.querySelectorAll("dfn").forEach(e => h(e, "span")), t.hasAttribute("id") && t.removeAttribute("id");
            return g(t), t
        }, e.removeCommentNodes = g, e.InsensitiveStringSet = e.IDBKeyVal = e.nonNormativeSelector = e.ISODate = e.name = void 0;
        e.name = "core/utils";
        const r = /^[ |\t]*/,
            o = /-/g,
            i = new Intl.DateTimeFormat(["en-ca-iso8601"], {
                timeZone: "UTC",
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            });
        e.ISODate = i;
        const a = new Set(["dns-prefetch", "preconnect", "preload", "prerender"]),
            s = new Set(["document", "embed", "font", "image", "manifest", "media", "object", "report", "script", "serviceworker", "sharedworker", "style", "worker", "xslt", ""]),
            c = ".informative, .note, .issue, .example, .ednote, .practice, .introductory";

        function u(e, t, n) {
            e.classList.add("respec-offending-element"), e.hasAttribute("title") || e.setAttribute("title", n || t), e.id || f(e, "respec-offender")
        }

        function l(e, t) {
            return "[".concat(t + 1, "](#").concat(e.id, ")")
        }
        e.nonNormativeSelector = c;

        function d(e) {
            return e.trim().replace(/\s+/g, " ")
        }

        function f(e, t = "", n = "", r = !1) {
            if (e.id) return e.id;
            n || (n = (e.title ? e.title : e.textContent).trim());
            let o = r ? n : n.toLowerCase();
            if ((o = o.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\W+/gim, "-").replace(/^-+/, "").replace(/-+$/, "")) ? "example" === t ? o = n : !/\.$/.test(o) && /^[a-z]/i.test(o) || (o = "x".concat(o)) : o = "generatedID", t && (o = "".concat(t, "-").concat(o)), e.ownerDocument.getElementById(o)) {
                let t = 0,
                    n = "".concat(o, "-").concat(t);
                for (; e.ownerDocument.getElementById(n);) t += 1, n = "".concat(o, "-").concat(t);
                o = n
            }
            return e.id = o, o
        }

        function p(e) {
            const t = new Set,
                n = "ltNodefault" in e.dataset ? "" : d(e.textContent),
                r = e.children[0];
            return e.dataset.lt ? e.dataset.lt.split("|").map(e => d(e)).forEach(e => t.add(e)) : 1 === e.childNodes.length && 1 === e.getElementsByTagName("abbr").length && r.title ? t.add(r.title) : '""' === e.textContent && t.add("the-empty-string"), t.add(n), t.delete(""), [...t]
        }

        function h(e, t) {
            if (e.localName === t) return e;
            const n = e.ownerDocument.createElement(t);
            for (const {
                    name: t,
                    value: r
                }
                of e.attributes) n.setAttribute(t, r);
            return n.append(...e.childNodes), e.replaceWith(n), n
        }
        e.IDBKeyVal = class {
            constructor(e, t) {
                this.idb = e, this.storeName = t
            }
            async get(e) {
                return await this.idb.transaction(this.storeName).objectStore(this.storeName).get(e)
            }
            async getMany(e) {
                const t = new Set(e),
                    n = new Map;
                let r = await this.idb.transaction(this.storeName).store.openCursor();
                for (; r;) t.has(r.key) && n.set(r.key, r.value), r = await r.continue();
                return n
            }
            async set(e, t) {
                const n = this.idb.transaction(this.storeName, "readwrite");
                return n.objectStore(this.storeName).put(t, e), await n.done
            }
            async addMany(e) {
                const t = this.idb.transaction(this.storeName, "readwrite");
                for (const [n, r] of e) t.objectStore(this.storeName).put(r, n);
                return await t.done
            }
            async clear() {
                const e = this.idb.transaction(this.storeName, "readwrite");
                return e.objectStore(this.storeName).clear(), await e.done
            }
            async keys() {
                const e = this.idb.transaction(this.storeName),
                    t = e.objectStore(this.storeName).getAllKeys();
                return await e.done, t
            }
        };
        class m extends Set {
            constructor(e = []) {
                super();
                for (const t of e) this.add(t)
            }
            add(e) {
                return this.has(e) || this.getCanonicalKey(e) ? this : super.add(e)
            }
            has(e) {
                return super.has(e) || [...this.keys()].some(t => t.toLowerCase() === e.toLowerCase())
            }
            delete(e) {
                return super.has(e) ? super.delete(e) : super.delete(this.getCanonicalKey(e))
            }
            getCanonicalKey(e) {
                return super.has(e) ? e : [...this.keys()].find(t => t.toLowerCase() === e.toLowerCase())
            }
        }

        function g(e) {
            const t = document.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
            for (const e of [...b(t)]) e.remove()
        }

        function* b(e) {
            for (; e.nextNode();) yield e.currentNode
        }
        e.InsensitiveStringSet = m
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(9)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.pub = function e(t, ...n) {
            if (!r.has(t)) return;
            Array.from(r.get(t)).forEach(t => {
                try {
                    t(...n)
                } catch (n) {
                    e("error", "Error when calling function ".concat(t.name, ". See developer console.")), console.error(n)
                }
            });
            if (window.parent === window.self) return;
            const o = n.map(e => String(JSON.stringify(e.stack || e)));
            window.parent.postMessage({
                topic: t,
                args: o
            }, window.parent.location.origin)
        }, e.sub = o, e.unsub = i, e.name = void 0;
        const n = "core/pubsubhub";
        e.name = n;
        const r = new Map;

        function o(e, t, n = {
            once: !1
        }) {
            return n.once ? o(e, (function n(...r) {
                i({
                    topic: e,
                    cb: n
                }), t(...r)
            })) : (r.has(e) ? r.get(e).add(t) : r.set(e, new Set([t])), {
                topic: e,
                cb: t
            })
        }

        function i({
            topic: e,
            cb: t
        }) {
            const n = r.get(e);
            return n && n.has(t) ? n.delete(t) : (console.warn("Already unsubscribed:", e, t), !1)
        }
        o("error", e => {
            console.error(e, e.stack)
        }), o("warn", e => {
            console.warn(e)
        }), (0, t.expose)(n, {
            sub: o
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    /*! (c) Andrea Giammarchi - ISC */
    var r = {};
    try {
        r.WeakMap = WeakMap
    } catch (e) {
        r.WeakMap = function(e, t) {
            var n = t.defineProperty,
                r = t.hasOwnProperty,
                o = i.prototype;
            return o.delete = function(e) {
                return this.has(e) && delete e[this._]
            }, o.get = function(e) {
                return this.has(e) ? e[this._] : void 0
            }, o.has = function(e) {
                return r.call(e, this._)
            }, o.set = function(e, t) {
                return n(e, this._, {
                    configurable: !0,
                    value: t
                }), this
            }, i;

            function i(t) {
                n(this, "_", {
                    value: "_@ungap/weakmap" + e++
                }), t && t.forEach(a, this)
            }

            function a(e) {
                this.set(e[0], e[1])
            }
        }(Math.random(), Object)
    }
    var o = r.WeakMap,
        i = {};
    /*! (c) Andrea Giammarchi - ISC */
    try {
        i.WeakSet = WeakSet
    } catch (e) {
        ! function(e, t) {
            var n = r.prototype;

            function r() {
                t(this, "_", {
                    value: "_@ungap/weakmap" + e++
                })
            }
            n.add = function(e) {
                return this.has(e) || t(e, this._, {
                    value: !0,
                    configurable: !0
                }), this
            }, n.has = function(e) {
                return this.hasOwnProperty.call(e, this._)
            }, n.delete = function(e) {
                return this.has(e) && delete e[this._]
            }, i.WeakSet = r
        }(Math.random(), Object.defineProperty)
    }
    var a = i.WeakSet,
        s = {};
    /*! (c) Andrea Giammarchi - ISC */
    try {
        s.Map = Map
    } catch (e) {
        s.Map = function() {
            var e = 0,
                t = [],
                n = [];
            return {
                delete: function(o) {
                    var i = r(o);
                    return i && (t.splice(e, 1), n.splice(e, 1)), i
                },
                forEach: function(e, r) {
                    t.forEach((function(t, o) {
                        e.call(r, n[o], t, this)
                    }), this)
                },
                get: function(t) {
                    return r(t) ? n[e] : void 0
                },
                has: function(e) {
                    return r(e)
                },
                set: function(o, i) {
                    return n[r(o) ? e : t.push(o) - 1] = i, this
                }
            };

            function r(n) {
                return -1 < (e = t.indexOf(n))
            }
        }
    }
    var c = s.Map;
    const {
        indexOf: u
    } = [], l = (e, t, n, r, o, i) => {
        const a = "selectedIndex" in t;
        let s = a;
        for (; r < o;) {
            const o = e(n[r], 1);
            if (t.insertBefore(o, i), a && s && o.selected) {
                s = !s;
                let {
                    selectedIndex: e
                } = t;
                t.selectedIndex = e < 0 ? r : u.call(t.querySelectorAll("option"), o)
            }
            r++
        }
    }, d = (e, t) => e == t, f = e => e, p = (e, t, n, r, o, i, a) => {
        const s = i - o;
        if (s < 1) return -1;
        for (; n - t >= s;) {
            let s = t,
                c = o;
            for (; s < n && c < i && a(e[s], r[c]);) s++, c++;
            if (c === i) return t;
            t = s + 1
        }
        return -1
    }, h = (e, t, n, r, o) => n < r ? e(t[n], 0) : 0 < n ? e(t[n - 1], -0).nextSibling : o, m = (e, t, n, r, o) => {
        for (; r < o;) y(e(n[r++], -1), t)
    }, g = (e, t, n) => {
        let r = 1,
            o = t;
        for (; r < o;) {
            const t = (r + o) / 2 >>> 0;
            n < e[t] ? o = t : r = t + 1
        }
        return r
    }, b = (e, t, n, r, o, i, a, s, u, d, f, p, h) => {
        ((e, t, n, r, o, i, a, s, u) => {
            const d = new c,
                f = e.length;
            let p = a,
                h = 0;
            for (; h < f;) switch (e[h++]) {
                case 0:
                    o++, p++;
                    break;
                case 1:
                    d.set(r[o], 1), l(t, n, r, o++, o, p < s ? t(i[p], 0) : u);
                    break;
                case -1:
                    p++
            }
            for (h = 0; h < f;) switch (e[h++]) {
                case 0:
                    a++;
                    break;
                case -1:
                    d.has(i[a]) ? a++ : m(t, n, i, a++, a)
            }
        })(((e, t, n, r, o, i, a) => {
            const s = n + i,
                c = [];
            let u, l, d, f, p, h, m;
            e: for (u = 0; u <= s; u++) {
                if (u > 50) return null;
                for (m = u - 1, p = u ? c[u - 1] : [0, 0], h = c[u] = [], l = -u; l <= u; l += 2) {
                    for (d = (f = l === -u || l !== u && p[m + l - 1] < p[m + l + 1] ? p[m + l + 1] : p[m + l - 1] + 1) - l; f < i && d < n && a(r[o + f], e[t + d]);) f++, d++;
                    if (f === i && d === n) break e;
                    h[u + l] = f
                }
            }
            const g = Array(u / 2 + s / 2);
            let b = g.length - 1;
            for (u = c.length - 1; u >= 0; u--) {
                for (; f > 0 && d > 0 && a(r[o + f - 1], e[t + d - 1]);) g[b--] = 0, f--, d--;
                if (!u) break;
                m = u - 1, p = u ? c[u - 1] : [0, 0], (l = f - d) === -u || l !== u && p[m + l - 1] < p[m + l + 1] ? (d--, g[b--] = 1) : (f--, g[b--] = -1)
            }
            return g
        })(n, r, i, a, s, d, p) || ((e, t, n, r, o, i, a, s) => {
            let u = 0,
                l = r < s ? r : s;
            const d = Array(l++),
                f = Array(l);
            f[0] = -1;
            for (let e = 1; e < l; e++) f[e] = a;
            const p = new c;
            for (let e = i; e < a; e++) p.set(o[e], e);
            for (let r = t; r < n; r++) {
                const t = p.get(e[r]);
                null != t && -1 < (u = g(f, l, t)) && (f[u] = t, d[u] = {
                    newi: r,
                    oldi: t,
                    prev: d[u - 1]
                })
            }
            for (u = --l, --a; f[u] > a;) --u;
            l = s + r - u;
            const h = Array(l);
            let m = d[u];
            for (--n; m;) {
                const {
                    newi: e,
                    oldi: t
                } = m;
                for (; n > e;) h[--l] = 1, --n;
                for (; a > t;) h[--l] = -1, --a;
                h[--l] = 0, --n, --a, m = m.prev
            }
            for (; n >= t;) h[--l] = 1, --n;
            for (; a >= i;) h[--l] = -1, --a;
            return h
        })(n, r, o, i, a, s, u, d), e, t, n, r, a, s, f, h)
    };
    let y = (e, t) => {
        (y = "remove" in e ? e => {
            e.remove()
        } : (e, t) => {
            e.parentNode === t && t.removeChild(e)
        })(e, t)
    };
    /*! (c) 2018 Andrea Giammarchi (ISC) */
    var v = (e, t, n, r) => {
            r || (r = {});
            const o = r.compare || d,
                i = r.node || f,
                a = null == r.before ? null : i(r.before, 0),
                s = t.length;
            let c = s,
                u = 0,
                g = n.length,
                y = 0;
            for (; u < c && y < g && o(t[u], n[y]);) u++, y++;
            for (; u < c && y < g && o(t[c - 1], n[g - 1]);) c--, g--;
            const v = u === c,
                w = y === g;
            if (v && w) return n;
            if (v && y < g) return l(i, e, n, y, g, h(i, t, u, s, a)), n;
            if (w && u < c) return m(i, e, t, u, c), n;
            const x = c - u,
                k = g - y;
            let C = -1;
            if (x < k) {
                if (-1 < (C = p(n, y, g, t, u, c, o))) return l(i, e, n, y, C, i(t[u], 0)), l(i, e, n, C + x, g, h(i, t, c, s, a)), n
            } else if (k < x && -1 < (C = p(t, u, c, n, y, g, o))) return m(i, e, t, u, C), m(i, e, t, C + k, c), n;
            return x < 2 || k < 2 ? (l(i, e, n, y, g, i(t[u], 0)), m(i, e, t, u, c), n) : x === k && ((e, t, n, r, o, i) => {
                for (; r < o && i(n[r], e[t - 1]);) r++, t--;
                return 0 === t
            })(n, g, t, u, c, o) ? (l(i, e, n, y, g, h(i, t, c, s, a)), n) : (b(i, e, n, y, g, k, t, u, c, x, s, o, a), n)
        },
        w = {};
    /*! (c) Andrea Giammarchi - ISC */
    w.CustomEvent = "function" == typeof CustomEvent ? CustomEvent : function(e) {
        return t.prototype = new t("").constructor.prototype, t;

        function t(e, t) {
            t || (t = {});
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, !!t.bubbles, !!t.cancelable, t.detail), n
        }
    }();
    var x = w.CustomEvent;

    function k() {
        return this
    }
    const C = (e, t) => {
            const n = "_" + e + "$";
            return {
                get() {
                    return this[n] || S(this, n, t.call(this, e))
                },
                set(e) {
                    S(this, n, e)
                }
            }
        },
        S = (e, t, n) => Object.defineProperty(e, t, {
            configurable: !0,
            value: "function" == typeof n ? function() {
                return e._wire$ = n.apply(this, arguments)
            } : n
        })[t];
    Object.defineProperties(k.prototype, {
        ELEMENT_NODE: {
            value: 1
        },
        nodeType: {
            value: -1
        }
    });
    const E = {},
        O = {},
        T = [],
        j = O.hasOwnProperty;
    let _ = 0;
    var P, A, R = {
            attributes: E,
            define: (e, t) => {
                e.indexOf("-") < 0 ? (e in O || (_ = T.push(e)), O[e] = t) : E[e] = t
            },
            invoke: (e, t) => {
                for (let n = 0; n < _; n++) {
                    let r = T[n];
                    if (j.call(e, r)) return O[r](e[r], t)
                }
            }
        },
        D = Array.isArray || (A = (P = {}.toString).call([]), function(e) {
            return P.call(e) === A
        }),
        L = function(e) {
            var t = "fragment",
                n = "content" in o("template") ? function(e) {
                    var t = o("template");
                    return t.innerHTML = e, t.content
                } : function(e) {
                    var n = o(t),
                        i = o("template"),
                        a = null;
                    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)) {
                        var s = RegExp.$1;
                        i.innerHTML = "<table>" + e + "</table>", a = i.querySelectorAll(s)
                    } else i.innerHTML = e, a = i.childNodes;
                    return r(n, a), n
                };
            return function(e, t) {
                return ("svg" === t ? i : n)(e)
            };

            function r(e, t) {
                for (var n = t.length; n--;) e.appendChild(t[0])
            }

            function o(n) {
                return n === t ? e.createDocumentFragment() : e.createElementNS("http://www.w3.org/1999/xhtml", n)
            }

            function i(e) {
                var n = o(t),
                    i = o("div");
                return i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + e + "</svg>", r(n, i.firstChild.childNodes), n
            }
        }(document);
    var N, I =
        /*! (c) Andrea Giammarchi */
        function(e) {
            var t = e.Event,
                n = e.WeakSet,
                r = !0,
                o = null;
            return function(e) {
                return r && (r = !r, o = new n, function(e) {
                    var r = new n,
                        i = new n;
                    try {
                        new MutationObserver(u).observe(e, {
                            subtree: !0,
                            childList: !0
                        })
                    } catch (t) {
                        var a = 0,
                            s = [],
                            c = function(e) {
                                s.push(e), clearTimeout(a), a = setTimeout((function() {
                                    u(s.splice(a = 0, s.length))
                                }), 0)
                            };
                        e.addEventListener("DOMNodeRemoved", (function(e) {
                            c({
                                addedNodes: [],
                                removedNodes: [e.target]
                            })
                        }), !0), e.addEventListener("DOMNodeInserted", (function(e) {
                            c({
                                addedNodes: [e.target],
                                removedNodes: []
                            })
                        }), !0)
                    }

                    function u(e) {
                        for (var t, n = e.length, o = 0; o < n; o++) l((t = e[o]).removedNodes, "disconnected", i, r), l(t.addedNodes, "connected", r, i)
                    }

                    function l(e, n, r, o) {
                        for (var i, a = new t(n), s = e.length, c = 0; c < s; 1 === (i = e[c++]).nodeType && d(i, a, n, r, o));
                    }

                    function d(e, t, n, r, i) {
                        o.has(e) && !r.has(e) && (i.delete(e), r.add(e), e.dispatchEvent(t));
                        for (var a = e.children || [], s = a.length, c = 0; c < s; d(a[c++], t, n, r, i));
                    }
                }(e.ownerDocument)), o.add(e), e
            }
        },
        M = function(e, t, n, r, o) {
            var i = "importNode" in e,
                a = e.createDocumentFragment();
            return a.appendChild(e.createTextNode("g")), a.appendChild(e.createTextNode("")), (i ? e.importNode(a, !0) : a.cloneNode(!0)).childNodes.length < 2 ? function e(t, n) {
                for (var r = t.cloneNode(), o = t.childNodes || [], i = o.length, a = 0; n && a < i; a++) r.appendChild(e(o[a], n));
                return r
            } : i ? e.importNode : function(e, t) {
                return e.cloneNode(!!t)
            }
        }(document),
        W = "".trim || function() {
            return String(this).replace(/^\s+|\s+/g, "")
        },
        q = "-" + Math.random().toFixed(6) + "%",
        U = !1;
    /*! (c) Andrea Giammarchi - ISC */
    try {
        "content" in (N = document.createElement("template")) && (N.innerHTML = '<p tabindex="' + q + '"></p>', N.content.childNodes[0].getAttribute("tabindex") == q) || (q = "_dt: " + q.slice(1, -1) + ";", U = !0)
    } catch (e) {}
    var F = "\x3c!--" + q + "--\x3e",
        $ = 8,
        z = 1,
        H = 3,
        B = /^(?:style|textarea)$/i,
        G = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,
        V = function(e) {
            return e.join(F).replace(ee, oe).replace(Q, ne)
        },
        Z = " \\f\\n\\r\\t",
        X = "[^" + Z + "\\/>\"'=]+",
        Y = "[" + Z + "]+" + X,
        K = "<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",
        J = "(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|" + X.replace("\\/", "") + "))?)",
        Q = new RegExp(K + Y + J + "+)([" + Z + "]*/?>)", "g"),
        ee = new RegExp(K + Y + J + "*)([" + Z + "]*/>)", "g"),
        te = new RegExp("(" + Y + "\\s*=\\s*)(['\"]?)" + F + "\\2", "gi");

    function ne(e, t, n, r) {
        return "<" + t + n.replace(te, re) + r
    }

    function re(e, t, n) {
        return t + (n || '"') + q + (n || '"')
    }

    function oe(e, t, n) {
        return G.test(t) ? e : "<" + t + n + "></" + t + ">"
    }

    function ie(e, t) {
        for (var n = t.length, r = 0; r < n;) e = e.childNodes[t[r++]];
        return e
    }

    function ae(e, t, n, r) {
        for (var o = new c, i = e.attributes, a = [], s = a.slice.call(i, 0), u = s.length, l = 0; l < u;) {
            var d, f = s[l++],
                p = f.value === q;
            if (p || 1 < (d = f.value.split(F)).length) {
                var h = f.name;
                if (!o.has(h)) {
                    var m = n.shift().replace(p ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp("^(?:|[\\S\\s]*?\\s)(" + h + ")\\s*=\\s*('|\")", "i"), "$1"),
                        g = i[m] || i[m.toLowerCase()];
                    if (o.set(h, g), p) t.push(ce(g, r, m, null));
                    else {
                        for (var b = d.length - 2; b--;) n.shift();
                        t.push(ce(g, r, m, d))
                    }
                }
                a.push(f)
            }
        }
        l = 0;
        for (var y = (0 < (u = a.length) && U && !("ownerSVGElement" in e)); l < u;) {
            var v = a[l++];
            y && (v.value = ""), e.removeAttribute(v.name)
        }
        var w = e.nodeName;
        if (/^script$/i.test(w)) {
            var x = document.createElement(w);
            for (u = i.length, l = 0; l < u;) x.setAttributeNode(i[l++].cloneNode(!0));
            x.textContent = e.textContent, e.parentNode.replaceChild(x, e)
        }
    }

    function se(e, t) {
        return {
            type: "any",
            node: e,
            path: t
        }
    }

    function ce(e, t, n, r) {
        return {
            type: "attr",
            node: e,
            path: t,
            name: n,
            sparse: r
        }
    }

    function ue(e, t) {
        return {
            type: "text",
            node: e,
            path: t
        }
    }
    var le = function(e) {
            return function(t) {
                var n = fe.get(e);
                return null != n && n.template === t || (n = he(e, t)), n.updates.apply(null, arguments), n.content
            }
        },
        de = new o,
        fe = new o;

    function pe(e, t) {
        var n = (e.convert || V)(t),
            r = e.transform;
        r && (n = r(n));
        var o = L(n, e.type);
        ! function(e) {
            var t = e.childNodes,
                n = t.length;
            for (; n--;) {
                var r = t[n];
                1 !== r.nodeType && 0 === W.call(r.textContent).length && e.removeChild(r)
            }
        }
        /*! (c) Andrea Giammarchi - ISC */
        (o);
        var i = [];
        ! function e(t, n, r, o) {
            for (var i = t.childNodes, a = i.length, s = 0; s < a;) {
                var c = i[s];
                switch (c.nodeType) {
                    case z:
                        var u = o.concat(s);
                        ae(c, n, r, u), e(c, n, r, u);
                        break;
                    case $:
                        var l = c.textContent;
                        if (l === q) r.shift(), n.push(B.test(t.nodeName) ? ue(t, o) : se(c, o.concat(s)));
                        else switch (l.slice(0, 2)) {
                            case "/*":
                                if ("*/" !== l.slice(-2)) break;
                            case "👻":
                                t.removeChild(c), s--, a--
                        }
                        break;
                    case H:
                        B.test(t.nodeName) && W.call(c.textContent) === F && (r.shift(), n.push(ue(t, o)))
                }
                s++
            }
        }(o, i, t.slice(0), []);
        var a = {
            content: o,
            updates: function(n) {
                for (var r = [], o = i.length, a = 0, s = 0; a < o;) {
                    var c = i[a++],
                        u = ie(n, c.path);
                    switch (c.type) {
                        case "any":
                            r.push({
                                fn: e.any(u, []),
                                sparse: !1
                            });
                            break;
                        case "attr":
                            var l = c.sparse,
                                d = e.attribute(u, c.name, c.node);
                            null === l ? r.push({
                                fn: d,
                                sparse: !1
                            }) : (s += l.length - 2, r.push({
                                fn: d,
                                sparse: !0,
                                values: l
                            }));
                            break;
                        case "text":
                            r.push({
                                fn: e.text(u),
                                sparse: !1
                            }), u.textContent = ""
                    }
                }
                return o += s,
                    function() {
                        var e = arguments.length;
                        if (o !== e - 1) throw new Error(e - 1 + " values instead of " + o + "\n" + t.join("${value}"));
                        for (var i = 1, a = 1; i < e;) {
                            var s = r[i - a];
                            if (s.sparse) {
                                var c = s.values,
                                    u = c[0],
                                    l = 1,
                                    d = c.length;
                                for (a += d - 2; l < d;) u += arguments[i++] + c[l++];
                                s.fn(u)
                            } else s.fn(arguments[i++])
                        }
                        return n
                    }
            }
        };
        return de.set(t, a), a
    }

    function he(e, t) {
        var n = de.get(t) || pe(e, t),
            r = M.call(document, n.content, !0),
            o = {
                content: r,
                template: t,
                updates: n.updates(r)
            };
        return fe.set(e, o), o
    }
    var me = function() {
            var e = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
                t = /([^A-Z])([A-Z]+)/g;
            return function(e, t) {
                return "ownerSVGElement" in e ? function(e, t) {
                    var n;
                    t ? n = t.cloneNode(!0) : (e.setAttribute("style", "--hyper:style;"), n = e.getAttributeNode("style"));
                    return n.value = "", e.setAttributeNode(n), r(n, !0)
                }(e, t) : r(e.style, !1)
            };

            function n(e, t, n) {
                return t + "-" + n.toLowerCase()
            }

            function r(r, o) {
                var i, a;
                return function(s) {
                    var c, u, l, d;
                    switch (typeof s) {
                        case "object":
                            if (s) {
                                if ("object" === i) {
                                    if (!o && a !== s)
                                        for (u in a) u in s || (r[u] = "")
                                } else o ? r.value = "" : r.cssText = "";
                                for (u in c = o ? {} : r, s) l = "number" != typeof(d = s[u]) || e.test(u) ? d : d + "px", !o && /^--/.test(u) ? c.setProperty(u, l) : c[u] = l;
                                i = "object", o ? r.value = function(e) {
                                    var r, o = [];
                                    for (r in e) o.push(r.replace(t, n), ":", e[r], ";");
                                    return o.join("")
                                }(a = c) : a = s;
                                break
                            }
                        default:
                            a != s && (i = "string", a = s, o ? r.value = s || "" : r.cssText = s || "")
                    }
                }
            }
        }(),
        ge = function(e, t) {
            return (t = n.prototype).ELEMENT_NODE = 1, t.nodeType = 111, t.remove = function(e) {
                var t = this.childNodes,
                    n = this.firstChild,
                    r = this.lastChild;
                if (this._ = null, e && 2 === t.length) r.parentNode.removeChild(r);
                else {
                    var o = this.ownerDocument.createRange();
                    o.setStartBefore(e ? t[1] : n), o.setEndAfter(r), o.deleteContents()
                }
                return n
            }, t.valueOf = function(e) {
                var t = this._,
                    n = null == t;
                if (n && (t = this._ = this.ownerDocument.createDocumentFragment()), n || e)
                    for (var r = this.childNodes, o = 0, i = r.length; o < i; o++) t.appendChild(r[o]);
                return t
            }, n;

            function n(t) {
                var n = this.childNodes = e.call(t, 0);
                this.firstChild = n[0], this.lastChild = n[n.length - 1], this.ownerDocument = n[0].ownerDocument, this._ = null
            }
        }([].slice);
    const be = "ownerSVGElement",
        ye = k.prototype.nodeType,
        ve = ge.prototype.nodeType,
        we = I({
            Event: x,
            WeakSet: a
        }),
        xe = e => ({
            html: e
        }),
        ke = (e, t) => {
            switch (e.nodeType) {
                case ve:
                    return 1 / t < 0 ? t ? e.remove(!0) : e.lastChild : t ? e.valueOf(!0) : e.firstChild;
                case ye:
                    return ke(e.render(), t);
                default:
                    return e
            }
        },
        Ce = (e, t) => {
            t(e.placeholder), "text" in e ? Promise.resolve(e.text).then(String).then(t) : "any" in e ? Promise.resolve(e.any).then(t) : "html" in e ? Promise.resolve(e.html).then(xe).then(t) : Promise.resolve(R.invoke(e, t)).then(t)
        },
        Se = e => null != e && "then" in e,
        Ee = /^(?:form|list)$/i,
        Oe = [].slice,
        Te = (e, t) => e.ownerDocument.createTextNode(t);

    function je(e) {
        return this.type = e, le(this)
    }
    je.prototype = {
        attribute(e, t, n) {
            const r = be in e;
            let o;
            if ("style" === t) return me(e, n, r);
            if (/^on/.test(t)) {
                let n = t.slice(2);
                return "connected" === n || "disconnected" === n ? we(e) : t.toLowerCase() in e && (n = n.toLowerCase()), t => {
                    o !== t && (o && e.removeEventListener(n, o, !1), o = t, t && e.addEventListener(n, t, !1))
                }
            }
            if ("data" === t || !r && t in e && !Ee.test(t)) return n => {
                o !== n && (o = n, e[t] !== n && null == n ? (e[t] = "", e.removeAttribute(t)) : e[t] = n)
            };
            if (t in R.attributes) return n => {
                const r = R.attributes[t](e, n);
                o !== r && (o = r, null == r ? e.removeAttribute(t) : e.setAttribute(t, r))
            }; {
                let t = !1;
                const r = n.cloneNode(!0);
                return n => {
                    o !== n && (o = n, r.value !== n && (null == n ? (t && (t = !1, e.removeAttributeNode(r)), r.value = n) : (r.value = n, t || (t = !0, e.setAttributeNode(r)))))
                }
            }
        },
        any(e, t) {
            const n = {
                    node: ke,
                    before: e
                },
                r = be in e ? "svg" : "html";
            let o, i = !1;
            const a = s => {
                switch (typeof s) {
                    case "string":
                    case "number":
                    case "boolean":
                        i ? o !== s && (o = s, t[0].textContent = s) : (i = !0, o = s, t = v(e.parentNode, t, [Te(e, s)], n));
                        break;
                    case "function":
                        a(s(e));
                        break;
                    case "object":
                    case "undefined":
                        if (null == s) {
                            i = !1, t = v(e.parentNode, t, [], n);
                            break
                        }
                    default:
                        if (i = !1, o = s, D(s))
                            if (0 === s.length) t.length && (t = v(e.parentNode, t, [], n));
                            else switch (typeof s[0]) {
                                case "string":
                                case "number":
                                case "boolean":
                                    a({
                                        html: s
                                    });
                                    break;
                                case "object":
                                    if (D(s[0]) && (s = s.concat.apply([], s)), Se(s[0])) {
                                        Promise.all(s).then(a);
                                        break
                                    }
                                default:
                                    t = v(e.parentNode, t, s, n)
                            } else(e => "ELEMENT_NODE" in e)(s) ? t = v(e.parentNode, t, 11 === s.nodeType ? Oe.call(s.childNodes) : [s], n) : Se(s) ? s.then(a) : "placeholder" in s ? Ce(s, a) : "text" in s ? a(String(s.text)) : "any" in s ? a(s.any) : "html" in s ? t = v(e.parentNode, t, Oe.call(L([].concat(s.html).join(""), r).childNodes), n) : a("length" in s ? Oe.call(s) : R.invoke(s, a))
                }
            };
            return a
        },
        text(e) {
            let t;
            const n = r => {
                if (t !== r) {
                    t = r;
                    const o = typeof r;
                    "object" === o && r ? Se(r) ? r.then(n) : "placeholder" in r ? Ce(r, n) : n("text" in r ? String(r.text) : "any" in r ? r.any : "html" in r ? [].concat(r.html).join("") : "length" in r ? Oe.call(r).join("") : R.invoke(r, n)) : "function" === o ? n(r(e)) : e.textContent = null == r ? "" : r
                }
            };
            return n
        }
    };
    var _e = "object" != typeof document,
        Pe = function(e) {
            var t, n = (t = (document.defaultView.navigator || {}).userAgent, /(Firefox|Safari)\/(\d+)/.test(t) && !/(Chrom[eium]+|Android)\/(\d+)/.test(t)),
                r = !("raw" in e) || e.propertyIsEnumerable("raw") || !Object.isFrozen(e.raw);
            if (n || r) {
                var i = {},
                    a = function(e) {
                        for (var t = ".", n = 0; n < e.length; n++) t += e[n].length + "." + e[n];
                        return i[t] || (i[t] = e)
                    };
                if (r) Pe = a;
                else {
                    var s = new o;
                    Pe = function(e) {
                        return s.get(e) || function(e, t) {
                            return s.set(e, t), t
                        }(e, a(e))
                    }
                }
            } else _e = !0;
            return Re(e)
        },
        Ae = Re;

    function Re(e) {
        return _e ? e : Pe(e)
    }
    var De = function(e) {
        for (var t = arguments.length, n = [Ae(e)], r = 1; r < t;) n.push(arguments[r++]);
        return n
    };
    const Le = new o,
        Ne = e => {
            let t, n, r;
            return function() {
                const o = De.apply(null, arguments);
                return r !== o[0] ? (r = o[0], n = new je(e), t = Me(n.apply(n, o))) : n.apply(n, o), t
            }
        },
        Ie = (e, t) => {
            const n = t.indexOf(":");
            let r = Le.get(e),
                o = t;
            return -1 < n && (o = t.slice(n + 1), t = t.slice(0, n) || "html"), r || Le.set(e, r = {}), r[o] || (r[o] = Ne(t))
        },
        Me = e => {
            const t = e.childNodes,
                {
                    length: n
                } = t;
            return 1 === n ? t[0] : n ? new ge(t) : e
        };
    var We = (e, t) => null == e ? Ne(t || "html") : Ie(e, t || "html");
    const qe = new o;

    function Ue(e) {
        const t = new je(be in this ? "svg" : "html");
        qe.set(this, {
            tagger: t,
            template: e
        }), this.textContent = "", this.appendChild(t.apply(null, arguments))
    }
    var Fe = function() {
        const e = qe.get(this),
            t = De.apply(null, arguments);
        return e && e.template === t[0] ? e.tagger.apply(null, t) : Ue.apply(this, t), this
    };
    n.d(t, "bind", (function() {
        return $e
    })), n.d(t, "define", (function() {
        return ze
    })), n.d(t, "hyper", (function() {
        return Be
    })), n.d(t, "tagger", (function() {
        return He
    })), n.d(t, "default", (function() {
        return Be
    })), n.d(t, "Component", (function() {
        return k
    })), n.d(t, "diff", (function() {
        return v
    })), n.d(t, "observe", (function() {
        return we
    })), n.d(t, "wire", (function() {
        return We
    }));
    /*! (c) Andrea Giammarchi (ISC) */
    const $e = e => Fe.bind(e),
        ze = R.define,
        He = je.prototype;

    function Be(e) {
        return arguments.length < 2 ? null == e ? Ne("html") : "string" == typeof e ? Be.wire(null, e) : "raw" in e ? Ne("html")(e) : "nodeType" in e ? Be.bind(e) : Ie(e, "html") : ("raw" in e ? Ne("html") : Be.wire).apply(null, arguments)
    }
    Be.Component = k, Be.bind = $e, Be.define = ze, Be.diff = v, Be.hyper = Be, Be.observe = we, Be.tagger = He, Be.wire = We, Be._ = {
            WeakMap: o,
            WeakSet: a
        },
        function(e) {
            const t = new o,
                n = Object.create,
                r = (e, t) => {
                    const n = {
                        w: null,
                        p: null
                    };
                    return t.set(e, n), n
                };
            Object.defineProperties(k, {
                for: {
                    configurable: !0,
                    value(e, i) {
                        return ((e, t, i, a) => {
                            const s = t.get(e) || r(e, t);
                            switch (typeof a) {
                                case "object":
                                case "function":
                                    const t = s.w || (s.w = new o);
                                    return t.get(a) || ((e, t, n) => (e.set(t, n), n))(t, a, new e(i));
                                default:
                                    const r = s.p || (s.p = n(null));
                                    return r[a] || (r[a] = new e(i))
                            }
                        })(this, t.get(e) || (e => {
                            const n = new c;
                            return t.set(e, n), n
                        })(e), e, null == i ? "default" : i)
                    }
                }
            }), Object.defineProperties(k.prototype, {
                handleEvent: {
                    value(e) {
                        const t = e.currentTarget;
                        this["getAttribute" in t && t.getAttribute("data-call") || "on" + e.type](e)
                    }
                },
                html: C("html", e),
                svg: C("svg", e),
                state: C("state", (function() {
                    return this.defaultState
                })),
                defaultState: {
                    get: () => ({})
                },
                dispatch: {
                    value(e, t) {
                        const {
                            _wire$: n
                        } = this;
                        if (n) {
                            const r = new x(e, {
                                bubbles: !0,
                                cancelable: !0,
                                detail: t
                            });
                            return r.component = this, (n.dispatchEvent ? n : n.firstChild).dispatchEvent(r)
                        }
                        return !1
                    }
                },
                setState: {
                    value(e, t) {
                        const n = this.state,
                            r = "function" == typeof e ? e.call(this, n) : e;
                        for (const e in r) n[e] = r[e];
                        return !1 !== t && this.render(), this
                    }
                }
            })
        }(Ne)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";

        function t(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function n(e) {
            for (var n = 1; n < arguments.length; n++) {
                var o = null != arguments[n] ? arguments[n] : {};
                n % 2 ? t(o, !0).forEach((function(t) {
                    r(e, t, o[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(o).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }))
            }
            return e
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            e.l10n = a[s] || a.en
        }, e.lang = e.l10n = e.name = void 0;
        e.name = "core/l10n";
        const o = document.documentElement;
        o && !o.hasAttribute("lang") && (o.lang = "en", o.hasAttribute("dir") || (o.dir = "ltr"));
        const i = {
                about_respec: "About",
                abstract: "Abstract",
                author: "Author:",
                authors: "Authors:",
                bug_tracker: "Bug tracker:",
                close_parens: ")",
                definition_list: "Definitions",
                editor: "Editor:",
                editors_note: "Editor's note",
                editors: "Editors:",
                feature_at_risk: "(Feature at Risk) Issue",
                former_editor: "Former editor:",
                former_editors: "Former editors:",
                info_references: "Informative references",
                issue_summary: "Issue Summary",
                issue: "Issue",
                latest_editors_draft: "Latest editor's draft:",
                latest_published_version: "Latest published version:",
                list_of_definitions: "List of Definitions",
                norm_references: "Normative references",
                note: "Note",
                open_bugs: "open bugs",
                open_parens: "(",
                participate: "Participate",
                references: "References",
                save_as: "Save as",
                save_snapshot: "Export",
                search_specref: "Search Specref",
                sotd: "Status of This Document",
                this_version: "This version:",
                toc: "Table of Contents",
                warning: "Warning"
            },
            a = {
                en: n({}, i),
                ko: n({}, i, {}, {
                    abstract: "요약",
                    author: "저자:",
                    authors: "저자:",
                    latest_published_version: "최신 버전:",
                    sotd: "현재 문서의 상태",
                    this_version: "현재 버전:"
                }),
                zh: n({}, i, {}, {
                    about_respec: "关于",
                    abstract: "摘要",
                    bug_tracker: "错误跟踪：",
                    editor: "编辑：",
                    editors: "编辑：",
                    file_a_bug: "反馈错误",
                    former_editor: "原编辑：",
                    former_editors: "原编辑：",
                    latest_editors_draft: "最新编辑草稿：",
                    latest_published_version: "最新发布版本：",
                    note: "注",
                    open_bugs: "修正中的错误",
                    participate: "参与：",
                    sotd: "关于本文档",
                    this_version: "本版本：",
                    toc: "内容大纲"
                }),
                ja: n({}, i, {}, {
                    abstract: "要約",
                    author: "著者：",
                    authors: "著者：",
                    bug_tracker: "バグの追跡履歴：",
                    editor: "編者：",
                    editors: "編者：",
                    file_a_bug: "問題報告",
                    former_editor: "以前の版の編者：",
                    former_editors: "以前の版の編者：",
                    latest_editors_draft: "最新の編集用草案：",
                    latest_published_version: "最新バージョン：",
                    note: "注",
                    open_bugs: "改修されていないバグ",
                    participate: "参加方法：",
                    sotd: "この文書の位置付け",
                    this_version: "このバージョン：",
                    toc: "目次"
                }),
                nl: n({}, i, {}, {
                    about_respec: "Over",
                    abstract: "Samenvatting",
                    author: "Auteur:",
                    authors: "Auteurs:",
                    bug_tracker: "Meldingensysteem:",
                    definition_list: "Lijst van Definities",
                    editor: "Redacteur:",
                    editors_note: "Redactionele noot",
                    editors: "Redacteurs:",
                    file_a_bug: "Dien een melding in",
                    info_references: "Informatieve referenties",
                    issue_summary: "Lijst met issues",
                    latest_editors_draft: "Laatste werkversie:",
                    latest_published_version: "Laatst gepubliceerde versie:",
                    list_of_definitions: "Lijst van Definities",
                    norm_references: "Normatieve referenties",
                    note: "Noot",
                    open_bugs: "open meldingen",
                    participate: "Doe mee",
                    references: "Referenties",
                    save_as: "Bewaar als",
                    save_snapshot: "Bewaar Snapshot",
                    search_specref: "Doorzoek Specref",
                    sotd: "Status van dit document",
                    this_version: "Deze versie:",
                    toc: "Inhoudsopgave",
                    warning: "Waarschuwing"
                }),
                es: n({}, i, {}, {
                    abstract: "Resumen",
                    author: "Autor:",
                    authors: "Autores:",
                    bug_tracker: "Repositorio de bugs:",
                    close_parens: ")",
                    editor: "Editor:",
                    editors_note: "Nota de editor",
                    editors: "Editores:",
                    file_a_bug: "Nota un bug",
                    info_references: "Referencias informativas",
                    issue_summary: "Resumen de la cuestión",
                    issue: "Cuestión",
                    latest_editors_draft: "Borrador de editor mas reciente:",
                    latest_published_version: "Versión publicada mas reciente:",
                    norm_references: "Referencias normativas",
                    note: "Nota",
                    open_bugs: "Bugs abiertos",
                    open_parens: "(",
                    participate: "Participad",
                    references: "Referencias",
                    sotd: "Estado de este Document",
                    this_version: "Ésta versión:",
                    toc: "Tabla de Contenidos",
                    warning: "Aviso"
                })
            };
        e.l10n = a, a["zh-hans"] = a.zh, a["zh-cn"] = a.zh;
        const s = o && o.lang in a ? o.lang : "en";
        e.lang = s
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        const t = new WeakMap;
        e.default = class {
            constructor(e, n) {
                t.set(this, {
                    name: e,
                    lintingFunction: n
                })
            }
            get name() {
                return t.get(this).name
            }
            lint(e = {
                lint: {
                    [this.name]: !1
                }
            }, n = document) {
                if (function(e, t) {
                        return !(!1 === e.hasOwnProperty("lint") || !1 === e.lint || !e.lint[t])
                    }(e, this.name)) return t.get(this).lintingFunction(e, n)
            }
        }
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.registerDefinition = function(e, n) {
            for (const r of n.map(e => e.toLowerCase())) r in t == !1 ? t[r] = [e] : t[r].includes(e) || t[r].push(e)
        }, e.definitionMap = void 0;
        const t = Object.create(null);
        e.definitionMap = t
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r, o;
    r = [t, n(27), n(2), n(11), n(30), n(1)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {
            const e = g(["<div id='", "' class='respec-modal removeOnSave' role='dialog'>\n      <h3 id=\"", '">', "</h3>\n      <div class='inside'>", "</div>\n    </div>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = g(["<div id='respec-overlay' class='removeOnSave'></div>"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = g(["<li role=menuitem>", "</li>"]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = g(['<button id="', '" class="respec-option" title="', '">\n      <span class="respec-cmd-icon">', "</span> ", "…\n    </button>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = g(["<ol class='", "'></ol>"]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = g(["<button id='", "' class='respec-info-button'>"]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = g(["<button id='respec-pill' disabled>ReSpec</button>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = g(["<ul id=respec-menu role=menu aria-labelledby='respec-pill' hidden></ul>"]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = g(["<div id='respec-ui' class='removeOnSave' hidden></div>"]);
            return m = function() {
                return e
            }, e
        }

        function g(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ui = e.name = void 0, t = a(t), n = a(n), o = a(o);
        e.name = "core/ui";
        const b = document.createElement("style");

        function y(e, t) {
            e && Array.from(t).forEach(([t, n]) => {
                e.setAttribute("aria-".concat(t), n)
            })
        }
        b.id = "respec-ui-styles", b.textContent = t.default, b.classList.add("removeOnSave"), document.head.appendChild(b);
        const v = (0, n.default)(m()),
            w = (0, n.default)(h());
        let x, k;
        const C = [],
            S = [],
            E = {};
        (0, i.sub)("start-all", () => document.body.prepend(v), {
            once: !0
        }), (0, i.sub)("end-all", () => document.body.prepend(v), {
            once: !0
        });
        const O = (0, n.default)(p());
        v.appendChild(O), O.addEventListener("click", e => {
            e.stopPropagation(), w.hidden ? (w.classList.remove("respec-hidden"), w.classList.add("respec-visible")) : (w.classList.add("respec-hidden"), w.classList.remove("respec-visible")), O.setAttribute("aria-expanded", String(w.hidden)), w.hidden = !w.hidden
        }), document.documentElement.addEventListener("click", () => {
            w.hidden || (w.classList.remove("respec-visible"), w.classList.add("respec-hidden"), w.hidden = !0)
        }), v.appendChild(w);
        const T = new Map([
            ["controls", "respec-menu"],
            ["expanded", "false"],
            ["haspopup", "true"],
            ["label", "ReSpec Menu"]
        ]);

        function j(e, t, o, i) {
            t.push(e), E.hasOwnProperty(o) || (E[o] = function(e, t, o) {
                const i = "respec-pill-".concat(e),
                    a = (0, n.default)(f(), i);
                a.addEventListener("click", () => {
                    a.setAttribute("aria-expanded", "true");
                    const i = (0, n.default)(d(), "respec-".concat(e, "-list"));
                    for (const e of t) {
                        const t = document.createRange().createContextualFragment((0, r.markdownToHtml)(e)),
                            n = document.createElement("li");
                        t.firstElementChild === t.lastElementChild ? n.append(...t.firstElementChild.childNodes) : n.appendChild(t), i.appendChild(n)
                    }
                    _.freshModal(o, i, a)
                });
                const s = new Map([
                    ["expanded", "false"],
                    ["haspopup", "true"],
                    ["controls", "respec-pill-".concat(e, "-modal")],
                    ["label", "Document ".concat(o.toLowerCase())]
                ]);
                return y(a, s), a
            }(o, t, i), v.appendChild(E[o])), E[o].textContent = t.length
        }
        y(O, T);
        const _ = {
            show() {
                try {
                    v.hidden = !1
                } catch (e) {
                    console.error(e)
                }
            },
            hide() {
                v.hidden = !0
            },
            enable() {
                O.removeAttribute("disabled")
            },
            addCommand(e, t, r, i) {
                i = i || "";
                const a = "respec-button-".concat(e.toLowerCase().replace(/\s+/, "-")),
                    s = (0, n.default)(l(), a, r, i, e),
                    c = (0, n.default)(u(), s);
                return c.addEventListener("click", t), w.appendChild(c), r && o.default.add(r, t), s
            },
            error(e) {
                j(e, C, "error", "Errors")
            },
            warning(e) {
                j(e, S, "warning", "Warnings")
            },
            closeModal(e) {
                k && (k.classList.remove("respec-show-overlay"), k.classList.add("respec-hide-overlay"), k.addEventListener("transitionend", () => {
                    k.remove(), k = null
                })), e && e.setAttribute("aria-expanded", "false"), x && (x.remove(), x = null)
            },
            freshModal(e, t, r) {
                x && x.remove(), k && k.remove(), k = (0, n.default)(c());
                const o = "".concat(r.id, "-modal"),
                    i = "".concat(o, "-heading");
                x = (0, n.default)(s(), o, i, e, t);
                const a = new Map([
                    ["labelledby", i]
                ]);
                y(x, a), document.body.append(k, x), k.addEventListener("click", () => this.closeModal(r)), k.classList.toggle("respec-show-overlay"), x.hidden = !1
            }
        };
        e.ui = _, o.default.add("Esc", () => _.closeModal()), o.default.add("Ctrl+Alt+Shift+E", () => {
            E.error && E.error.click()
        }), o.default.add("Ctrl+Alt+Shift+W", () => {
            E.warning && E.warning.click()
        }), window.respecUI = _, (0, i.sub)("error", e => _.error(e)), (0, i.sub)("warn", e => _.warning(e))
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(58), n(0), n(1), n(8)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.updateFromNetwork = l, e.resolveRef = async function e(t) {
            const n = await u;
            if (!n.hasOwnProperty(t)) return null;
            const r = n[t];
            if (r.aliasOf) return await e(r.aliasOf);
            return r
        }, e.run = async function(e) {
            e.localBiblio || (e.localBiblio = {});
            if (e.biblio) {
                let e = "Overriding `.biblio` in config. Please use ";
                e += "`.localBiblio` for custom biblio entries.", (0, r.pub)("warn", e)
            }
            e.biblio = i;
            const n = Array.from(Object.keys(e.localBiblio)).filter(t => e.localBiblio[t].hasOwnProperty("aliasOf")).map(t => e.localBiblio[t].aliasOf);
            ! function(e) {
                const t = new Set([...e.normativeReferences].map(e => e.toLowerCase()));
                Array.from(e.informativeReferences).filter(e => t.has(e.toLowerCase())).forEach(t => e.informativeReferences.delete(t))
            }(e);
            const o = function(e) {
                    return {
                        informativeReferences: Array.from(e.informativeReferences),
                        normativeReferences: Array.from(e.normativeReferences)
                    }
                }(e),
                a = o.normativeReferences.concat(o.informativeReferences).filter(t => !e.localBiblio.hasOwnProperty(t)).concat(n).reduce((e, t) => (-1 === e.indexOf(t) && e.push(t), e), []).sort(),
                s = [];
            try {
                await t.biblioDB.ready;
                const e = a.map(async e => ({
                    id: e,
                    data: await t.biblioDB.find(e)
                }));
                s.push(...await Promise.all(e))
            } catch (e) {
                s.push(...a.map(e => ({
                    id: e,
                    data: null
                }))), console.warn(e)
            }
            const u = {
                hasData: [],
                noData: []
            };
            s.forEach(e => {
                (e.data ? u.hasData : u.noData).push(e)
            }), u.hasData.forEach(e => {
                i[e.id] = e.data
            });
            const d = u.noData.map(e => e.id);
            if (d.length) {
                const e = await l(d, {
                    forceUpdate: !0
                });
                Object.assign(i, e)
            }
            Object.assign(i, e.localBiblio), c(e.biblio)
        }, Object.defineProperty(e, "wireReference", {
            enumerable: !0,
            get: function() {
                return o.wireReference
            }
        }), Object.defineProperty(e, "stringifyReference", {
            enumerable: !0,
            get: function() {
                return o.stringifyReference
            }
        }), e.name = e.biblio = void 0;
        const i = {};
        e.biblio = i;
        e.name = "core/biblio";
        const a = new URL("https://specref.herokuapp.com/bibrefs?refs=");
        const s = (0, n.createResourceHint)({
            hint: "dns-prefetch",
            href: a.origin
        });
        let c;
        document.head.appendChild(s);
        const u = new Promise(e => {
            c = e
        });
        async function l(e, n = {
            forceUpdate: !1
        }) {
            const r = [...new Set(e)].filter(e => e.trim());
            if (!r.length || !1 === navigator.onLine) return null;
            let o;
            try {
                o = await fetch(a.href + r.join(","))
            } catch (e) {
                return console.error(e), null
            }
            if (!n.forceUpdate && !o.ok || 200 !== o.status) return null;
            const i = await o.json();
            try {
                await t.biblioDB.addAll(i)
            } catch (e) {
                console.error(e)
            }
            return i
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(7), n(3), n(2), n(1)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";
        var a;

        function s() {
            const e = m(['\n    <cite>\n      <a\n        href="', '"\n        target="', '"\n        rel="noopener noreferrer">\n        ', '</a>.\n    </cite>\n    <span class="authors">\n      ', '\n    </span>\n    <span class="publisher">\n      ', '\n    </span>\n    <span class="pubDate">\n      ', '\n    </span>\n    <span class="pubStatus">\n      ', "\n    </span>\n  "]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = m(['\n      <dt id="', '">[', ']</dt>\n      <dd><em class="respec-offending-element">Reference not found.</em></dd>\n    ']);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = m(['\n      <dt id="', '">[', "]</dt>\n      <dd>", "</dd>\n    "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = m(['[<cite><a class="bibref" href="', '">', "</a></cite>]"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = m(["\n      <dl class='bibliography'>\n        ", "\n      </dl>"]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = m(["\n      <section>\n        <h3>", "</h3>\n      </section>"]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = m(["<p>", "</p>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = m(["\n    <section id='references' class='appendix'>\n      <h2>", "</h2>\n      ", "\n    </section>"]);
            return h = function() {
                return e
            }, e
        }

        function m(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            const n = Array.from(e.informativeReferences),
                r = Array.from(e.normativeReferences);
            if (!n.length && !r.length && !e.refNote) return;
            const i = (0, o.default)(h(), b.references, e.refNote ? (0, o.default)(p(), e.refNote) : "");
            for (const e of ["Normative", "Informative"]) {
                const a = "Normative" === e ? r : n;
                if (!a.length) continue;
                const s = (0, o.default)(f(), "Normative" === e ? b.norm_references : b.info_references);
                (0, t.addId)(s);
                const {
                    goodRefs: c,
                    badRefs: u
                } = a.map(k).reduce((e, t) => {
                    return e[t.refcontent ? "goodRefs" : "badRefs"].push(t), e
                }, {
                    goodRefs: [],
                    badRefs: []
                }), l = [...c.reduce((e, t) => (e.has(t.refcontent.id) || e.set(t.refcontent.id, t), e), new Map).values()], p = l.concat(u).sort((e, t) => e.ref.toLocaleLowerCase().localeCompare(t.ref.toLocaleLowerCase()));
                s.appendChild((0, o.default)(d(), p.map(C))), i.appendChild(s);
                const h = E(c);
                O(l, h), T(u)
            }
            document.body.appendChild(i)
        }, e.renderInlineCitation = function(e) {
            const t = e.replace(/^(!|\?)/, ""),
                n = "#bib-".concat(t.toLowerCase());
            return (0, o.default)(l(), n, t)
        }, e.wireReference = function(e, t = "_blank") {
            if ("object" != typeof e) throw new TypeError("Only modern object references are allowed");
            const n = Object.assign({}, v, e),
                r = n.authors.join("; ") + (n.etAl ? " et al" : ""),
                i = y.get(n.status) || n.status;
            return o.default.wire(n)(s(), n.href, t, n.title.trim(), w(r), w(n.publisher), w(n.date), w(i))
        }, e.stringifyReference = S, e.name = void 0, o = (a = o) && a.__esModule ? a : {
            default: a
        };
        e.name = "core/render-biblio";
        const g = {
                en: {
                    info_references: "Informative references",
                    norm_references: "Normative references",
                    references: "References"
                },
                nl: {
                    info_references: "Informatieve referenties",
                    norm_references: "Normatieve referenties",
                    references: "Referenties"
                },
                es: {
                    info_references: "Referencias informativas",
                    norm_references: "Referencias normativas",
                    references: "Referencias"
                }
            },
            b = g[r.lang in g ? r.lang : "en"],
            y = new Map([
                ["CR", "W3C Candidate Recommendation"],
                ["ED", "W3C Editor's Draft"],
                ["FPWD", "W3C First Public Working Draft"],
                ["LCWD", "W3C Last Call Working Draft"],
                ["NOTE", "W3C Note"],
                ["PER", "W3C Proposed Edited Recommendation"],
                ["PR", "W3C Proposed Recommendation"],
                ["REC", "W3C Recommendation"],
                ["WD", "W3C Working Draft"],
                ["WG-NOTE", "W3C Working Group Note"]
            ]),
            v = Object.freeze({
                authors: [],
                date: "",
                href: "",
                publisher: "",
                status: "",
                title: "",
                etAl: !1
            }),
            w = (x = ".", e => {
                const t = e.trim();
                return !t || t.endsWith(x) ? t : t + x
            });
        var x;

        function k(e) {
            let t = n.biblio[e],
                r = e;
            const o = new Set([r]);
            for (; t && t.aliasOf;)
                if (o.has(t.aliasOf)) {
                    t = null;
                    const n = "Circular reference in biblio DB between [`".concat(e, "`] and [`").concat(r, "`].");
                    (0, i.pub)("error", n)
                } else r = t.aliasOf, t = n.biblio[r], o.add(r);
            return t && !t.id && (t.id = e.toLowerCase()), {
                ref: e,
                refcontent: t
            }
        }

        function C({
            ref: e,
            refcontent: t
        }) {
            const n = "bib-".concat(e.toLowerCase());
            return t ? (0, o.default)(u(), n, e, {
                html: S(t)
            }) : (0, o.default)(c(), n, e)
        }

        function S(e) {
            if ("string" == typeof e) return e;
            let t = "<cite>".concat(e.title, "</cite>");
            return t = e.href ? '<a href="'.concat(e.href, '">').concat(t, "</a>. ") : "".concat(t, ". "), e.authors && e.authors.length && (t += e.authors.join("; "), e.etAl && (t += " et al"), t += ". "), e.publisher && (t = "".concat(t, " ").concat(w(e.publisher), " ")), e.date && (t += "".concat(e.date, ". ")), e.status && (t += "".concat(y.get(e.status) || e.status, ". ")), e.href && (t += 'URL: <a href="'.concat(e.href, '">').concat(e.href, "</a>")), t
        }

        function E(e) {
            return e.reduce((e, t) => {
                const n = t.refcontent.id;
                return (e.has(n) ? e.get(n) : e.set(n, []).get(n)).push(t.ref), e
            }, new Map)
        }

        function O(e, t) {
            e.map(({
                ref: e,
                refcontent: n
            }) => {
                const r = "#bib-".concat(e.toLowerCase()),
                    o = t.get(n.id).map(e => 'a.bibref[href="#bib-'.concat(e.toLowerCase(), '"]')).join(",");
                return {
                    refUrl: r,
                    elems: document.querySelectorAll(o),
                    refcontent: n
                }
            }).forEach(({
                refUrl: e,
                elems: t,
                refcontent: n
            }) => {
                t.forEach(t => {
                    t.setAttribute("href", e), t.setAttribute("title", n.title), t.dataset.linkType = "biblio"
                })
            })
        }

        function T(e) {
            e.forEach(({
                ref: e
            }) => {
                const t = [...document.querySelectorAll('a.bibref[href="#bib-'.concat(e.toLowerCase(), '"]'))].filter(({
                        textContent: t
                    }) => t.toLowerCase() === e.toLowerCase()),
                    n = "Bad reference: [`".concat(e, "`] (appears ").concat(t.length, " times)");
                (0, i.pub)("error", n), console.warn("Bad references: ", t)
            })
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.expose = function(e, n) {
            t || (window.require.modules[e] = n)
        };
        const t = !!window.require;
        if (!t) {
            const e = function(e, t) {
                t(...e.map(e => {
                    if (!(e in window.require.modules)) throw new Error("Unsupported dependency name: ".concat(e));
                    return window.require.modules[e]
                }))
            };
            e.modules = {}, window.require = e
        }
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!1 === e.lint) return;
            (async () => {
                await document.respecIsReady;
                try {
                    await a.lint(e, document)
                } catch (e) {
                    console.error("Error ocurred while running the linter", e)
                }
            })()
        }, e.default = e.name = void 0;
        e.name = "core/linter";
        const i = new WeakMap;
        const a = new class {
            constructor() {
                i.set(this, {
                    rules: new Set
                })
            }
            get rules() {
                return i.get(this).rules
            }
            register(...e) {
                e.forEach(e => this.rules.add(e))
            }
            async lint(e, a = window.document) {
                const s = [...i.get(this).rules].map(i => (async function(e) {
                    const i = await e;
                    if (!i) return;
                    const a = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? r(n, !0).forEach((function(t) {
                                    o(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, c, {}, i),
                        {
                            description: s,
                            help: u,
                            howToFix: l,
                            name: d,
                            occurrences: f,
                            offendingElements: p
                        } = a,
                        h = "Linter (".concat(d, "): ").concat(s, " ").concat(l, " ").concat(u);
                    p.length ? (0, n.showInlineWarning)(p, "".concat(h, " Occured")) : (0, t.pub)("warn", "".concat(h, " (Count: ").concat(f, ")"))
                })(i.lint(e, a)));
                await s
            }
        };
        var s = a;
        e.default = s;
        const c = {
            name: "unknown",
            description: "",
            occurrences: 0,
            howToFix: "",
            offendingElements: [],
            help: ""
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(28)], void 0 === (o = function(e, t) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.markdownToHtml = s, e.run = function(e) {
            const t = !!document.querySelector("[data-format=markdown]:not(body)"),
                n = "markdown" === e.format;
            if (!n && !t) return;
            if (!n) return void d(document.body).map(e => {
                return {
                    structuredInternals: l(e, e.ownerDocument),
                    elem: e
                }
            }).forEach(({
                elem: e,
                structuredInternals: t
            }) => {
                if (e.setAttribute("aria-busy", "true"), "section" === t.firstElementChild.localName && "section" === e.localName) {
                    const n = t.firstElementChild;
                    n.remove(), e.append(...n.childNodes)
                } else e.textContent = "";
                e.appendChild(t), e.setAttribute("aria-busy", "false")
            });
            const r = document.getElementById("respec-ui");
            r.remove();
            const o = document.createElement("html"),
                i = document.createElement("body");
            i.innerHTML = document.body.innerHTML, o.appendChild(i), f(o);
            const a = i.innerHTML.replace(/<p>\s*<\/p>/gm, "");
            i.innerHTML = a, s = i.querySelectorAll(".nolinks a[href]"), Array.from(s).forEach(e => {
                e.replaceWith(e.textContent)
            });
            var s;
            const c = l(i, document);
            i.appendChild(c), i.prepend(r), document.body.replaceWith(i)
        }, e.name = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.name = "core/markdown";
        const r = /&gt;/gm,
            o = /&amp;/gm,
            i = /\s+$/gm,
            a = new Set(["a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dfn", "em", "i", "img", "input", "kbd", "label", "map", "object", "q", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "textarea", "time", "tt", "var"]);

        function s(e) {
            const n = function e(t) {
                if (!t) return "";
                if ("string" != typeof t) throw TypeError("Invalid input");
                if ("\n" === t) return "\n";

                function n(e) {
                    return null !== e && e.nodeType === Node.TEXT_NODE
                }
                const r = document.createRange().createContextualFragment(t);
                var o;
                Array.from(r.children).filter(e => !a.has(e.localName)).filter(e => "pre" !== e.localName).filter(e => "table" !== e.localName).forEach(t => {
                    t.innerHTML = e(t.innerHTML)
                }), Array.from(r.childNodes).filter(e => n(e) && "" === e.textContent.trim()).forEach(e => e.replaceWith("\n")), null !== (o = r.firstChild) && o.nodeType === Node.ELEMENT_NODE && Array.from(r.firstChild.children).filter(e => "table" !== e.localName).forEach(t => {
                    t.innerHTML = e(t.innerHTML)
                }), r.normalize();
                const s = r.textContent.replace(/^ *\n/, "").split("\n").filter(e => e && e.startsWith(" "))[0],
                    c = s ? s.match(/ +/)[0].length : 0;
                if (c) {
                    Array.from(r.childNodes).filter(e => "PRE" !== e.nodeName).filter(n).filter(e => {
                        const t = e.previousElementSibling,
                            n = t && t.localName;
                        return !a.has(n) || e.textContent.trim().includes("\n")
                    }).reduce((e, t) => {
                        let n = "";
                        const r = t.previousElementSibling,
                            o = r && r.localName;
                        return /^[\t ]/.test(t.textContent) && a.has(o) && (n = t.textContent.match(/^\s+/)[0]), t.textContent = n + t.textContent.replace(e, ""), e
                    }, new RegExp("^ {1,".concat(c, "}"), "gm"));
                    const e = new RegExp("\\ {".concat(c, "}$"), "gm");
                    Array.from(r.querySelectorAll("pre")).map(e => e.previousSibling).filter(n).reduce((t, n) => (e.test(n.textContent) && (n.textContent = n.textContent.substr(0, n.textContent.length - t)), t), c)
                }
                const u = document.createElement("body");
                return u.append(r), i.test(u.innerHTML) ? "".concat(u.innerHTML.trimRight(), "\n") : u.innerHTML
            }(e).replace(r, ">").replace(o, "&");
            return (0, t.default)(n, {
                sanitize: !1,
                gfm: !0,
                headerIds: !1
            })
        }

        function c(e) {
            return t => {
                const n = Array.from(t.querySelectorAll(e));
                return n.reverse().forEach(e => {
                    e.innerHTML = s(e.innerHTML)
                }), n
            }
        }
        class u {
            constructor(e) {
                this.doc = e, this.root = e.createDocumentFragment(), this.stack = [this.root], this.current = this.root
            }
            findPosition(e) {
                return parseInt(e.tagName.charAt(1), 10)
            }
            findParent(e) {
                let t;
                for (; e > 0;)
                    if (e--, t = this.stack[e]) return t
            }
            findHeader({
                firstChild: e
            }) {
                for (; e;) {
                    if (/H[1-6]/.test(e.tagName)) return e;
                    e = e.nextSibling
                }
                return null
            }
            addHeader(e) {
                const t = this.doc.createElement("section"),
                    n = this.findPosition(e);
                t.appendChild(e), this.findParent(n).appendChild(t), this.stack[n] = t, this.stack.length = n + 1, this.current = t
            }
            addSection(e, t) {
                const n = this.findHeader(e),
                    r = n ? this.findPosition(n) : 1,
                    o = this.findParent(r);
                n && e.removeChild(n), e.appendChild(t(e)), n && e.prepend(n), o.appendChild(e), this.current = o
            }
            addElement(e) {
                this.current.appendChild(e)
            }
        }

        function l(e, t) {
            return function e(n) {
                const r = new u(t);
                for (; n.firstChild;) {
                    const t = n.firstChild;
                    if (t.nodeType === Node.ELEMENT_NODE) switch (t.localName) {
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                            r.addHeader(t);
                            break;
                        case "section":
                            r.addSection(t, e);
                            break;
                        default:
                            r.addElement(t)
                    } else n.removeChild(t)
                }
                return r.root
            }(e)
        }
        const d = c("[data-format='markdown']:not(body)"),
            f = c("[data-format=markdown]:not(body), section, div, address, article, aside, figure, header, main, body")
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "privsec-section",
            s = {
                en: {
                    description: "Document must a 'Privacy and/or Security' Considerations section.",
                    howToFix: "Add a privacy and/or security considerations section.",
                    help: "See the [Self-Review Questionnaire](https://w3ctag.github.io/security-questionnaire/)."
                }
            },
            c = n.lang in s ? n.lang : "en";
        const u = new t.default(a, (function(e, t) {
            if (e.isRecTrack && ! function(e) {
                    return Array.from(e.querySelectorAll("h2, h3, h4, h5, h6")).some(({
                        textContent: e
                    }) => {
                        const t = /(privacy|security)/im.test(e),
                            n = /(considerations)/im.test(e);
                        return t && n || t
                    })
                }(t)) return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                occurrences: 1
            }, s[c])
        }));
        e.rule = u
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = c(['\n            <a href="', '">', "</a>\n          "]);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = c(["", "", ""]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = c(['\n    <dd class="', '">\n      ', "\n    </dd>\n  "]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = c(['\n    <dt class="', '">', ":</dt>\n    ", "\n  "]);
            return s = function() {
                return e
            }, e
        }

        function c(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        const u = (t = (r = t) && r.__esModule ? r : {
            default: r
        }).default;

        function l(e) {
            return "dummycontrib" === e.href ? u(a(), e.class ? e.class : null, e.href ? u(i(), "", e.value || e.href) : "") : u(a(), e.class ? e.class : null, e.href ? u(o(), e.href, e.value || e.href) : "")
        }
        e.default = e => {
            if (!e.key) {
                const t = "Found a link without `key` attribute in the configuration. See dev console.";
                return (0, n.pub)("warn", t), void console.warn("warn", t, e)
            }
            return u(s(), e.class ? e.class : null, e.key, e.data ? e.data.map(l) : l(e))
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = a(['\n    <img\n      id="', '"\n      alt="', '"\n      width="', '"\n      height="', '"\n    />\n  ']);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = a(['\n    <a href="', '" class="logo"></a>\n  ']);
            return i = function() {
                return e
            }, e
        }

        function a(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        e.default = e => {
            const r = (0, t.default)(i(), e.url || "");
            e.alt || (0, n.showInlineWarning)(r, "Found spec logo without an `alt` attribute");
            const a = (0, t.default)(o(), e.id, e.alt, e.width, e.height);
            return a.src = e.src, r.append(a), r
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(3), n(2)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;

        function i() {
            const e = g(['\n        <a href="', '"></a>\n      ']);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = g(['\n      <span class="', '"></span>\n    ']);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = g(["", ""]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = g(["\n          - ", "", "\n        "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = g(["\n            (", ")\n          "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = g(['\n            (<a class="p-org org h-org h-card" href="', '"\n              >', "</a\n            >)\n          "]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = g(['\n          <a class="p-name orcid" href="', '"\n            ><svg\n              width="16"\n              height="16"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 256 256"\n            >\n              <style>\n                .st1 {\n                  fill: #fff;\n                }\n              </style>\n              <path\n                d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"\n                fill="#a6ce39"\n              />\n              <path\n                class="st1"\n                d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"\n              />\n            </svg>\n          </a>\n        ']);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = g(['\n          <span class="p-name fn">', "</span>\n        "]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = g(['\n        <a class="u-url url p-name fn" href="', '">', "</a>\n      "]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = g(['\n        <a class="ed_mailto u-email email p-name" href="', '"\n          >', "</a\n        >\n      "]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = g(['\n      <dd class="p-author h-card vcard" data-editor-id="', '"></dd>\n    ']);
            return m = function() {
                return e
            }, e
        }

        function g(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, r = (o = r) && o.__esModule ? o : {
            default: o
        };
        const b = {
                en: {
                    until: "Until"
                },
                es: {
                    until: "Hasta"
                }
            },
            y = n.lang in b ? n.lang : "en";
        e.default = (e = []) => {
            const n = b[y];
            return e.map((function(e) {
                const i = [e.name],
                    a = [e.company],
                    g = e.w3cid ? parseInt(e.w3cid, 10) : null,
                    b = (0, r.default)(m(), g),
                    y = document.createDocumentFragment(),
                    v = [];
                e.mailto ? v.push((0, r.default)(h(), "mailto:".concat(e.mailto), i)) : e.url ? v.push((0, r.default)(p(), e.url, i)) : v.push((0, r.default)(f(), i));
                e.orcid && v.push((0, r.default)(d(), e.orcid));
                e.company && (e.companyURL ? v.push((0, r.default)(l(), e.companyURL, a)) : v.push((0, r.default)(u(), a)));
                e.note && v.push(document.createTextNode(" (".concat(e.note, ")")));
                if (e.extras) {
                    const t = e.extras.filter(e => e.name && e.name.trim()).map(o);
                    for (const e of t) v.push(document.createTextNode(", "), e)
                }
                if (e.retiredDate) {
                    const o = new Date(e.retiredDate),
                        i = "Invalid Date" !== o.toString(),
                        a = document.createElement("time");
                    a.textContent = i ? (0, t.humanDate)(o) : "Invalid Date", i || (0, t.showInlineError)(a, "The date is invalid. The expected format is YYYY-MM-DD.", "Invalid date"), a.dateTime = (0, t.toShortIsoDate)(o), v.push((0, r.default)(c(), n.until.concat(" "), [a]))
                }
                return r.default.bind(y)(s(), v), b.appendChild(y), b
            }));

            function o(e) {
                const t = (0, r.default)(a(), e.class || null);
                let n = t;
                return e.href && (n = (0, r.default)(i(), e.href), t.appendChild(n)), n.textContent = e.name, t
            }
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(2), n(57), n(8)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a() {
            const e = m(["<code>", "</code>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = m(['<a data-link-for="', '" data-xref-for="', '" data-lt="', '">', "</a>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = m(['<var data-type="', '">', "</var>"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = m(['<abbr title="', '">', "</abbr>"]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = m(["<span>", "</span>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = m(['<a href="', '"></a>']);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = m(['<a data-cite="', '"></a>']);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = m(['<em class="rfc2119" title="', '">', "</em>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = m(['<code><a data-xref-type="element">', "</a></code>"]);
            return h = function() {
                return e
            }, e
        }

        function m(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            const n = new Map;
            document.normalize(), document.querySelector("section#conformance") || document.body.classList.add("informative");
            e.normativeReferences = new t.InsensitiveStringSet, e.informativeReferences = new t.InsensitiveStringSet, e.respecRFC2119 || (e.respecRFC2119 = g);
            const r = document.querySelectorAll("abbr[title]");
            for (const e of r) n.set(e.textContent, e.title);
            const o = [...n.keys()],
                i = o.length ? "(?:\\b".concat(o.join("\\b)|(?:\\b"), "\\b)") : null,
                a = (0, t.getTextNodes)(document.body, ["#respec-ui", ".head", "pre"], {
                    wsNodes: !1
                }),
                s = new RegExp(["\\bMUST(?:\\s+NOT)?\\b", "\\bSHOULD(?:\\s+NOT)?\\b", "\\bSHALL(?:\\s+NOT)?\\b", "\\bMAY\\b", "\\b(?:NOT\\s+)?REQUIRED\\b", "\\b(?:NOT\\s+)?RECOMMENDED\\b", "\\bOPTIONAL\\b"].join("|")),
                c = new RegExp("(".concat([s.source, y.source, v.source, w.source, x.source, k.source, b.source, C.source, ...i ? [i] : []].join("|"), ")"));
            for (const t of a) {
                const r = t.data.split(c);
                if (1 === r.length) continue;
                const o = document.createDocumentFragment();
                let i = !0;
                for (const a of r)
                    if (i = !i)
                        if (a.startsWith("{{")) {
                            const e = T(a);
                            o.append(e)
                        } else if (a.startsWith("[[[")) {
                    const e = O(a);
                    o.append(e)
                } else if (a.startsWith("[[")) {
                    const n = j(a, t, e);
                    o.append(...n)
                } else if (a.startsWith("|")) {
                    const e = P(a);
                    o.append(e)
                } else if (a.startsWith("[=")) {
                    const e = A(a);
                    o.append(e)
                } else if (a.startsWith("`")) {
                    const e = R(a);
                    o.append(e)
                } else if (a.startsWith("[^")) {
                    const e = S(a);
                    o.append(e)
                } else if (n.has(a)) {
                    const e = _(a, t, n);
                    o.append(e)
                } else {
                    if (!s.test(a)) throw new Error("Found token '".concat(a, "' but it does not correspond to anything")); {
                        const e = E(a);
                        o.append(e)
                    }
                } else o.append(a);
                t.replaceWith(o)
            }
        }, e.rfc2119Usage = e.name = void 0, n = (i = n) && i.__esModule ? i : {
            default: i
        };
        e.name = "core/inlines";
        const g = {};
        e.rfc2119Usage = g;
        const b = /(?:`[^`]+`)(?!`)/,
            y = /(?:{{[^}]+}})/,
            v = /\B\|\w[\w\s]*(?:\s*:[\w\s&;<>]+)?\|\B/,
            w = /(?:\[\[(?:!|\\|\?)?[A-Za-z0-9.-]+\]\])/,
            x = /(?:\[\[\[(?:!|\\|\?)?#?[\w-.]+\]\]\])/,
            k = /(?:\[=[^=]+=\])/,
            C = /(?:\[\^[A-Za-z]+(?:-[A-Za-z]+)?\^\])/;

        function S(e) {
            const t = e.slice(2, -2).trim();
            return (0, n.default)(h(), t)
        }

        function E(e) {
            const r = (0, t.norm)(e),
                o = (0, n.default)(p(), r, r);
            return g[r] = !0, o
        }

        function O(e) {
            const r = e.slice(3, -3).trim();
            if (!r.startsWith("#")) return (0, n.default)(f(), r);
            if (document.querySelector(r)) return (0, n.default)(d(), r);
            const o = (0, n.default)(l(), e);
            return (0, t.showInlineError)(o, "Wasn't able to expand ".concat(e, " as it didn't match any id in the document."), "Please make sure there is element with id ".concat(r, " in the document.")), o
        }

        function T(e) {
            const n = e.slice(2, -2).trim();
            return n.startsWith("\\") ? e.replace("\\", "") : (0, r.idlStringToHtml)((0, t.norm)(n))
        }

        function j(e, n, r) {
            const i = e.slice(2, -2);
            if (i.startsWith("\\")) return ["[[".concat(i.slice(1), "]]")];
            const {
                type: a,
                illegal: s
            } = (0, t.refTypeFromContext)(i, n.parentNode), c = (0, o.renderInlineCitation)(i), u = i.replace(/^(!|\?)/, "");
            return s && !r.normativeReferences.has(u) && (0, t.showInlineWarning)(c.childNodes[1], "Normative references in informative sections are not allowed. " + "Remove '!' from the start of the reference `[[".concat(i, "]]`")), "informative" !== a || s ? r.normativeReferences.add(u) : r.informativeReferences.add(u), c.childNodes
        }

        function _(e, t, r) {
            return "ABBR" === t.parentElement.tagName ? e : (0, n.default)(u(), r.get(e), e)
        }

        function P(e) {
            const t = e.slice(1, -1).split(":", 2),
                [r, o] = t.map(e => e.trim());
            return (0, n.default)(c(), o, r)
        }

        function A(e) {
            const r = (e = e.slice(2, -2)).split("/", 2).map(e => e.trim()),
                [o, i] = 2 === r.length ? r : [null, r[0]],
                [a, c] = i.includes("|") ? i.split("|", 2).map(e => e.trim()) : [null, i],
                u = function e(t) {
                    if (b.test(t)) return t.split(/(`[^`]+`)(?!`)/).map(t => t.startsWith("`") ? R(t) : e(t));
                    return document.createTextNode(t)
                }(c),
                l = o ? (0, t.norm)(o) : null;
            return (0, n.default)(s(), l, l, a, u)
        }

        function R(e) {
            const t = e.slice(1, -1);
            return (0, n.default)(a(), t)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.importIdb = async function() {
            try {
                return await new Promise(e => Promise.resolve().then(function() {
                    var t = [n(108)];
                    e.apply(null, t)
                }.bind(this)).catch(n.oe))
            } catch (e) {
                return await new Promise(e => Promise.resolve().then(function() {
                    var t = [! function() {
                        var e = new Error("Cannot find module '../../node_modules/idb/build/esm/index.js'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }()];
                    e.apply(null, t)
                }.bind(this)).catch(n.oe))
            }
        }
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r, o;
    r = [t, n(7), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            const t = o(e),
                n = document.querySelectorAll("dfn[data-cite], a[data-cite]");
            Array.from(n).filter(e => e.dataset.cite).map(t).filter(({
                key: t
            }) => t.toLowerCase() !== (e.shortName || "").toLowerCase()).forEach(({
                isNormative: t,
                key: n
            }) => {
                t || e.normativeReferences.has(n) ? (e.normativeReferences.add(n), e.informativeReferences.delete(n)) : e.informativeReferences.add(n)
            })
        }, e.linkInlineCitations = async function(e, r = respecConfig) {
            const i = function(e) {
                    const r = o(e);
                    return async o => {
                        const i = o.dataset.cite,
                            {
                                key: a,
                                frag: s,
                                path: c
                            } = r(o);
                        let u = "",
                            l = "";
                        if (a.toLowerCase() === e.shortName.toLowerCase()) console.log(o, 'The reference "'.concat(a, '" is resolved into the current document per `conf.shortName`.')), u = document.location.href;
                        else {
                            const e = await (0, t.resolveRef)(a);
                            if (function(e) {
                                    ["data-cite", "data-cite-frag"].filter(t => e.hasAttribute(t)).forEach(t => e.removeAttribute(t))
                                }(o), !e) return void(0, n.showInlineWarning)(o, "Couldn't find a match for \"".concat(i, '"'));
                            u = e.href, l = e.title
                        }
                        if (c) {
                            const e = c.startsWith("/") ? ".".concat(c) : c;
                            u = new URL(e, u).href
                        }
                        switch (s && (u = new URL(s, u).href), o.localName) {
                            case "a":
                                if ("" === o.textContent && "the-empty-string" !== o.dataset.lt && (o.textContent = l), o.href = u, !c && !s) {
                                    const e = document.createElement("cite");
                                    o.replaceWith(e), e.append(o)
                                }
                                break;
                            case "dfn": {
                                const e = document.createElement("a");
                                if (e.href = u, o.textContent ? (0, n.wrapInner)(o, e) : (e.textContent = l, o.append(e)), !c && !s) {
                                    const t = document.createElement("cite");
                                    t.append(e), o.append(t)
                                }
                                "export" in o.dataset && ((0, n.showInlineError)(o, "Exporting an linked external definition is not allowed. Please remove the `data-export` attribute", "Please remove the `data-export` attribute."), delete o.dataset.export), o.dataset.noExport = "";
                                break
                            }
                        }
                    }
                }(r),
                a = [...e.querySelectorAll("dfn[data-cite]:not([data-cite='']), a[data-cite]:not([data-cite=''])")],
                s = o(r),
                c = a.map(s).map(async e => {
                    return {
                        entry: e,
                        result: await (0, t.resolveRef)(e.key)
                    }
                }),
                u = (await Promise.all(c)).filter(({
                    result: e
                }) => null === e).map(({
                    entry: {
                        key: e
                    }
                }) => e),
                l = await (0, t.updateFromNetwork)(u);
            l && Object.assign(t.biblio, l);
            const d = [...new Set(a)].map(i);
            return await Promise.all(d)
        }, e.name = void 0;

        function r(e) {
            return t => {
                const n = t.search(e);
                return -1 !== n ? t.substring(n) : ""
            }
        }

        function o(e) {
            const t = r("#"),
                o = r("/");
            return function r(i) {
                const {
                    dataset: a
                } = i, {
                    cite: s,
                    citeFrag: c,
                    citePath: u
                } = a;
                if (s.startsWith("#") && !c) {
                    const t = i.parentElement.closest('[data-cite]:not([data-cite^="#"])'),
                        {
                            key: n,
                            isNormative: o
                        } = t ? r(t) : {
                            key: e.shortName || "",
                            isNormative: !1
                        };
                    return a.cite = o ? n : "?".concat(n), a.citeFrag = s.replace("#", ""), r(i)
                }
                const l = c ? "#".concat(c) : t(s),
                    d = u || o(s).split("#")[0],
                    {
                        type: f
                    } = (0, n.refTypeFromContext)(s, i),
                    p = "normative" === f,
                    h = /^[?|!]/.test(s);
                return {
                    key: s.split(/[/|#]/)[0].substring(Number(h)),
                    isNormative: p,
                    frag: l,
                    path: d
                }
            }
        }
        e.name = "core/data-cite"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(75), n(0), n(1)], void 0 === (o = function(e, t, n, r) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e, o) {
            const a = function(e) {
                const t = {
                        url: c,
                        specs: null
                    },
                    n = Object.assign({}, t);
                switch (Array.isArray(e) ? "array" : typeof e) {
                    case "boolean":
                        break;
                    case "string":
                        e.toLowerCase() in s ? Object.assign(n, {
                            specs: s[e.toLowerCase()]
                        }) : o(e);
                        break;
                    case "array":
                        Object.assign(n, {
                            specs: e
                        });
                        break;
                    case "object":
                        if (Object.assign(n, e), e.profile) {
                            const t = e.profile.toLowerCase();
                            if (t in s) {
                                const r = (e.specs || []).concat(s[t]);
                                Object.assign(n, {
                                    specs: r
                                })
                            } else o(e.profile)
                        }
                        break;
                    default:
                        (0, r.pub)("error", 'Invalid value for `xref` configuration option. Received: "'.concat(e, '".'))
                }
                return n;

                function o(e) {
                    const t = Object.keys(s).map(e => '"'.concat(e, '"')).join(", "),
                        n = 'Invalid profile "'.concat(e, '" in `respecConfig.xref`. ') + "Please use one of the supported profiles: ".concat(t, ".");
                    (0, r.pub)("error", n)
                }
            }(e.xref);
            if (a.specs) {
                const e = document.body.dataset.cite ? document.body.dataset.cite.split(/\s+/) : [];
                document.body.dataset.cite = e.concat(a.specs).join(" ")
            }
            if (!o.length) return;
            const p = [];
            for (const e of o) {
                const t = u(e),
                    n = await f(t);
                p.push(i({}, t, {
                    id: n
                }))
            }
            const h = await async function(e, n) {
                const r = new Set,
                    o = e.filter(e => !r.has(e.id) && (r.add(e.id) && !0)),
                    i = await (0, t.resolveXrefCache)(o),
                    a = o.filter(e => !i.get(e.id)),
                    s = await async function(e, t) {
                        if (!e.length) return new Map;
                        const n = {
                                keys: e
                            },
                            r = {
                                method: "POST",
                                body: JSON.stringify(n),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            },
                            o = await fetch(t, r),
                            i = await o.json();
                        return new Map(i.result)
                    }(a, n);
                s.size && await (0, t.cacheXrefData)(s);
                return new Map([...i, ...s])
            }(p, a.url);
            ! function(e, t, r, o) {
                const i = {
                    ambiguous: new Map,
                    notFound: new Map
                };
                for (let n = 0, a = e.length; n < a; n++) {
                    if (e[n].closest("[data-no-xref]")) continue;
                    const a = e[n],
                        s = t[n],
                        {
                            id: c
                        } = s,
                        u = r.get(c);
                    if (1 === u.length) d(a, s, u[0], o);
                    else {
                        const e = i[0 === u.length ? "notFound" : "ambiguous"];
                        e.has(c) || e.set(c, {
                            elems: [],
                            results: u,
                            query: s
                        }), e.get(c).elems.push(a)
                    }
                }! function({
                    ambiguous: e,
                    notFound: t
                }) {
                    const r = (e, t, n = []) => {
                        const r = new URL(c);
                        return r.searchParams.set("term", e), t.for && r.searchParams.set("for", t.for), r.searchParams.set("types", t.types.join(",")), n.length && r.searchParams.set("cite", n.join(",")), r
                    };
                    for (const {
                            query: e,
                            elems: o
                        }
                        of t.values()) {
                        const t = [...new Set((0, n.flatten)([], e.specs))].sort(),
                            i = l(o[0]),
                            a = r(i, e, t),
                            s = t.map(e => "`".concat(e, "`")).join(", "),
                            c = "Couldn't match \"**".concat(i, '**" to anything in the document or in any other document cited in this specification: ').concat(s, ". ") + "See [how to cite to resolve the error](".concat(a, ")");
                        (0, n.showInlineError)(o, c, "Error: No matching dfn found.")
                    }
                    for (const {
                            query: t,
                            elems: o,
                            results: i
                        }
                        of e.values()) {
                        const e = [...new Set(i.map(e => e.shortname))].sort(),
                            a = e.map(e => "**".concat(e, "**")).join(", "),
                            s = l(o[0]),
                            c = r(s, t, e),
                            u = 'The term "**'.concat(s, '**" is defined in ').concat(a, " in multiple ways, so it's ambiguous. ") + "See [how to cite to resolve the error](".concat(c, ")");
                        (0, n.showInlineError)(o, u, "Error: Linking an ambiguous dfn.")
                    }
                }(i)
            }(o, p, h, e)
        }, e.API_URL = void 0;
        const s = {
                "web-platform": ["HTML", "INFRA", "URL", "WEBIDL", "DOM", "FETCH"]
            },
            c = "https://respec.org/xref/";
        if (e.API_URL = c, !document.querySelector("link[rel='preconnect'][href='https://respec.org']")) {
            const e = (0, n.createResourceHint)({
                hint: "preconnect",
                href: "https://respec.org"
            });
            document.head.appendChild(e)
        }

        function u(e) {
            const t = "xrefType" in e.dataset;
            let r = l(e);
            t || (r = r.toLowerCase());
            const o = [];
            let a = e.closest("[data-cite]");
            for (; a;) {
                const t = a.dataset.cite.toLowerCase().replace(/[!?]/g, "").split(/\s+/).filter(e => e);
                if (t.length && o.push(t.sort()), a === e) break;
                a = a.parentElement.closest("[data-cite]")
            }
            if (e.closest("[data-cite]") !== e) {
                const t = e.closest("section"),
                    n = [...t ? t.querySelectorAll("a.bibref") : []].map(e => e.textContent.toLowerCase()),
                    r = [...new Set(n)].sort();
                r.length && o.unshift(r)
            }
            const s = [];
            t ? e.dataset.xrefType ? s.push(...e.dataset.xrefType.split("|")) : s.push("_IDL_") : s.push("_CONCEPT_");
            let {
                xrefFor: c
            } = e.dataset;
            if (!c && t) {
                const t = e.closest("[data-xref-for]");
                t && (c = (0, n.norm)(t.dataset.xrefFor))
            } else c && "string" == typeof c && (c = (0, n.norm)(c));
            return i({
                term: r,
                types: s
            }, o.length && {
                specs: o
            }, {}, "string" == typeof c && {
                for: c
            })
        }

        function l(e) {
            const {
                lt: t
            } = e.dataset;
            let r = t ? t.split("|", 1)[0] : e.textContent;
            return "the-empty-string" === (r = (0, n.norm)(r)) ? "" : r
        }

        function d(e, t, r, o) {
            const {
                term: i
            } = t, {
                uri: a,
                shortname: s,
                normative: c,
                type: u
            } = r, l = a.includes("/") ? a.split("/", 1)[1] : a, [d, f] = l.split("#"), p = {
                cite: s,
                citePath: d,
                citeFrag: f,
                type: u
            };
            Object.assign(e.dataset, p), document.querySelectorAll('[data-dfn-type="xref"][data-xref="'.concat(i.toLowerCase(), '"]')).forEach(e => {
                    e.removeAttribute("data-xref"), Object.assign(e.dataset, p)
                }),
                function(e, t, r, o, i) {
                    if (! function(e) {
                            const t = e.closest(".normative"),
                                r = e.closest(n.nonNormativeSelector);
                            return !r || e === t || t && r && r.contains(t)
                        }(e)) return void(i.normativeReferences.has(t) || i.informativeReferences.add(t));
                    if (r) {
                        const e = i.informativeReferences.has(t) ? i.informativeReferences.getCanonicalKey(t) : t;
                        return i.normativeReferences.add(e), void i.informativeReferences.delete(e)
                    }
                    const a = 'Adding an informative reference to "'.concat(o, '" from "').concat(t, '" ') + "in a normative section";
                    (0, n.showInlineWarning)(e, a, "Error: Informative reference in normative section")
                }(e, s, c, i, o)
        }

        function f(e) {
            const t = JSON.stringify(e, Object.keys(e).sort()),
                n = (new TextEncoder).encode(t);
            return crypto.subtle.digest("SHA-1", n).then(p)
        }

        function p(e) {
            return [...new Uint8Array(e)].map(e => e.toString(16).padStart(2, "0")).join("")
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    var r, o;
    window.addEventListener("error", e => {
        console.error(e.error, e.message, e)
    }), r = [n(21), n(6), n(31), n(33), n(34), n(3), n(35), n(43), n(45), n(46), n(47), n(48), n(11), n(49), n(54), n(55), n(56), n(16), n(59), n(60), n(61), n(63), n(65), n(67), n(68), n(69), n(70), n(18), n(7), n(73), n(74), n(8), n(76), n(77), n(78), n(79), n(80), n(81), n(83), n(85), n(87), n(88), n(89), n(90), n(91), n(92), n(96), n(98), n(99), n(100), n(102), n(104), n(106), n(10)], void 0 === (o = ((e, {
        ui: t
    }, ...n) => {
        t.show(), async function() {
            "loading" === document.readyState && await new Promise(e => document.addEventListener("DOMContentLoaded", e))
        }().then(async () => {
            try {
                await e.runAll(n), await document.respecIsReady
            } catch (e) {
                console.error(e)
            } finally {
                t.enable()
            }
        })
    }).apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(22), n(23), n(24), n(25), n(26), n(1), n(0)], void 0 === (o = function(e, t, n, r, o, i, a, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.runAll = async function(e) {
            (0, a.pub)("start-all", respecConfig), u && performance.mark("".concat(c, "-start"));
            await i.done;
            const t = e.filter(e => e && e.run).map(l);
            for (const e of t) try {
                await e(respecConfig)
            } catch (e) {
                console.error(e)
            }(0, a.pub)("plugins-done", respecConfig), await o.done, (0, a.pub)("end-all", respecConfig), (0, s.removeReSpec)(document), u && (performance.mark("".concat(c, "-end")), performance.measure(c, "".concat(c, "-start"), "".concat(c, "-end")))
        }, e.name = void 0;
        const c = "core/base-runner";
        e.name = c;
        const u = performance.mark && performance.measure;

        function l(e) {
            const t = e.name || "";
            return t || console.warn("Plugin lacks name:", e), n => new Promise(async (r, o) => {
                const i = setTimeout(() => {
                    const n = "Plugin ".concat(t, " took too long.");
                    console.error(n, e), o(new Error(n))
                }, 15e3);
                u && performance.mark("".concat(t, "-start"));
                try {
                    e.run.length <= 1 ? (await e.run(n), r()) : (console.warn("Plugin ".concat(t, " uses a deprecated callback signature. Return a Promise instead. Read more at: https://github.com/w3c/respec/wiki/Developers-Guide#plugins")), e.run(n, document, r))
                } catch (e) {
                    o(e)
                } finally {
                    clearTimeout(i)
                }
                u && (performance.mark("".concat(t, "-end")), performance.measure(t, "".concat(t, "-start"), "".concat(t, "-end")))
            })
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.name = void 0;
        e.name = "core/include-config";
        const n = {},
            r = e => Object.assign(n, e),
            o = ["githubToken", "githubUser"];
        (0, t.sub)("start-all", r), (0, t.sub)("amend-user-config", r), (0, t.sub)("end-all", () => {
            const e = document.createElement("script");
            e.id = "initialUserConfig", e.type = "application/json";
            for (const e of o) e in n && delete n[e];
            e.innerHTML = JSON.stringify(n, null, 2), document.head.appendChild(e)
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.name = void 0;
        e.name = "core/override-configuration", (0, t.sub)("start-all", (function(e) {
            const n = document.location.search.replace(/;/g, "&"),
                r = new URLSearchParams(n),
                o = Array.from(r).filter(([e, t]) => !!e && !!t).map(([e, t]) => {
                    const n = decodeURIComponent(e),
                        r = decodeURIComponent(t.replace(/%3D/g, "="));
                    let o;
                    try {
                        o = JSON.parse(r)
                    } catch (e) {
                        o = r
                    }
                    return {
                        key: n,
                        value: o
                    }
                }).reduce((e, {
                    key: t,
                    value: n
                }) => (e[t] = n, e), {});
            Object.assign(e, o), (0, t.pub)("amend-user-config", o)
        }), {
            once: !0
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.name = void 0;
        e.name = "core/respec-ready";
        const n = new Promise(e => {
            (0, t.sub)("end-all", e, {
                once: !0
            })
        });
        Object.defineProperty(document, "respecIsReady", {
            get: () => n
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.done = e.name = void 0;
        let n;
        e.name = "core/post-process";
        const r = new Promise(e => {
            n = e
        });
        e.done = r, (0, t.sub)("plugins-done", async e => {
            const r = [];
            if (Array.isArray(e.postProcess)) {
                const n = e.postProcess.filter(e => {
                        const n = "function" == typeof e;
                        return n || (0, t.pub)("error", "Every item in `postProcess` must be a JS function."), n
                    }).map(async n => {
                        try {
                            return await n(e, document)
                        } catch (e) {
                            (0, t.pub)("error", "Function ".concat(n.name, " threw an error during `postProcess`. See developer console.")), console.error(e)
                        }
                    }),
                    o = await Promise.all(n);
                r.push(...o)
            }
            "function" == typeof e.afterEnd && r.push(await e.afterEnd(e, document)), n(r)
        }, {
            once: !0
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.done = e.name = void 0;
        let n;
        e.name = "core/pre-process";
        const r = new Promise(e => {
            n = e
        });
        e.done = r, (0, t.sub)("start-all", async e => {
            const r = [];
            if (Array.isArray(e.preProcess)) {
                const n = e.preProcess.filter(e => {
                        const n = "function" == typeof e;
                        return n || (0, t.pub)("error", "Every item in `preProcess` must be a JS function."), n
                    }).map(async n => {
                        try {
                            return await n(e, document)
                        } catch (e) {
                            (0, t.pub)("error", "Function ".concat(n.name, " threw an error during `preProcess`. See developer console.")), console.error(e)
                        }
                    }),
                    o = await Promise.all(n);
                r.push(...o)
            }
            n(r)
        }, {
            once: !0
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '#respec-ui {\n  position: fixed;\n  display: flex;\n  flex-direction: row-reverse;\n  top: 20px;\n  right: 20px;\n  width: 202px;\n  text-align: right;\n  z-index: 9000;\n}\n\n#respec-pill,\n.respec-info-button {\n  background: #fff;\n  height: 2.5em;\n  color: rgb(120, 120, 120);\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 8px 0 rgba(100, 100, 100, 0.5);\n}\n\n.respec-info-button {\n  border: none;\n  opacity: 0.75;\n  border-radius: 2em;\n  margin-right: 1em;\n  min-width: 3.5em;\n}\n\n.respec-info-button:focus,\n.respec-info-button:hover {\n  opacity: 1;\n  transition: opacity 0.2s;\n}\n\n#respec-pill:disabled {\n  font-size: 2.8px;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(40, 40, 40, 0.2);\n  border-right: 1.1em solid rgba(40, 40, 40, 0.2);\n  border-bottom: 1.1em solid rgba(40, 40, 40, 0.2);\n  border-left: 1.1em solid #ffffff;\n  transform: translateZ(0);\n  animation: respec-spin 0.5s infinite linear;\n  box-shadow: none;\n}\n\n#respec-pill:disabled,\n#respec-pill:disabled:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n\n@keyframes respec-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.respec-hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 0.2s, opacity 0.2s linear;\n}\n\n.respec-visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.2s linear;\n}\n\n#respec-pill:hover,\n#respec-pill:focus {\n  color: rgb(0, 0, 0);\n  background-color: rgb(245, 245, 245);\n  transition: color 0.2s;\n}\n\n#respec-menu {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background: #fff;\n  box-shadow: 1px 1px 8px 0 rgba(100, 100, 100, 0.5);\n  width: 200px;\n  display: none;\n  text-align: left;\n  margin-top: 32px;\n  font-size: 0.8em;\n}\n\n#respec-menu:not([hidden]) {\n  display: block;\n}\n\n#respec-menu li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.respec-save-buttons {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(47%, 2fr));\n  grid-gap: 0.5cm;\n  padding: 0.5cm;\n}\n\n.respec-save-button:link {\n  padding-top: 16px;\n  color: rgb(240, 240, 240);\n  background: rgb(42, 90, 168);\n  justify-self: stretch;\n  height: 1cm;\n  text-decoration: none;\n  text-align: center;\n  font-size: inherit;\n  border: none;\n  border-radius: 0.2cm;\n}\n\n.respec-save-button:link:hover {\n  color: white;\n  background: rgb(42, 90, 168);\n  padding: 0;\n  margin: 0;\n  border: 0;\n  padding-top: 16px;\n}\n\n#respec-ui button:focus,\n#respec-pill:focus,\n.respec-option:focus {\n  outline: 0;\n  outline-style: none;\n}\n\n#respec-pill-error {\n  background-color: red;\n  color: white;\n}\n\n#respec-pill-warning {\n  background-color: orange;\n  color: white;\n}\n\n.respec-warning-list,\n.respec-error-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: sans-serif;\n  background-color: rgb(255, 251, 230);\n  font-size: 0.85em;\n}\n\n.respec-warning-list > li,\n.respec-error-list > li {\n  padding: 0.4em 0.7em;\n}\n\n.respec-warning-list > li::before {\n  content: "⚠️";\n  padding-right: 0.5em;\n}\n.respec-warning-list p,\n.respec-error-list p {\n  padding: 0;\n  margin: 0;\n}\n\n.respec-warning-list li {\n  color: rgb(92, 59, 0);\n  border-bottom: thin solid rgb(255, 245, 194);\n}\n\n.respec-error-list,\n.respec-error-list li {\n  background-color: rgb(255, 240, 240);\n}\n\n.respec-error-list li::before {\n  content: "💥";\n  padding-right: 0.5em;\n}\n\n.respec-error-list li {\n  padding: 0.4em 0.7em;\n  color: rgb(92, 59, 0);\n  border-bottom: thin solid rgb(255, 215, 215);\n}\n\n.respec-error-list li > p {\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\n\n#respec-overlay {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background: #000;\n}\n\n.respec-show-overlay {\n  transition: opacity 0.2s linear;\n  opacity: 0.5;\n}\n\n.respec-hide-overlay {\n  transition: opacity 0.2s linear;\n  opacity: 0;\n}\n\n.respec-modal {\n  display: block;\n  position: fixed;\n  z-index: 11000;\n  margin: auto;\n  top: 10%;\n  background: #fff;\n  border: 5px solid #666;\n  min-width: 20%;\n  width: 79%;\n  padding: 0;\n  max-height: 80%;\n  overflow-y: auto;\n  margin: 0 -0.5cm;\n}\n\n@media screen and (min-width: 78em) {\n  .respec-modal {\n    width: 62%;\n  }\n}\n\n.respec-modal h3 {\n  margin: 0;\n  padding: 0.2em;\n  text-align: center;\n  color: black;\n  background: linear-gradient(\n    to bottom,\n    rgba(238, 238, 238, 1) 0%,\n    rgba(238, 238, 238, 1) 50%,\n    rgba(204, 204, 204, 1) 100%\n  );\n  font-size: 1em;\n}\n\n.respec-modal .inside div p {\n  padding-left: 1cm;\n}\n\n#respec-menu button.respec-option {\n  background: white;\n  padding: 0 0.2cm;\n  border: none;\n  width: 100%;\n  text-align: left;\n  font-size: inherit;\n  padding: 1.2em 1.2em;\n}\n\n#respec-menu button.respec-option:hover,\n#respec-menu button:focus {\n  background-color: #eeeeee;\n}\n\n.respec-cmd-icon {\n  padding-right: 0.5em;\n}\n\n#respec-ui button.respec-option:last-child {\n  border: none;\n  border-radius: inherit;\n}\n\n.respec-button-copy-paste {\n  position: absolute;\n  height: 28px;\n  width: 40px;\n  cursor: pointer;\n  background-image: linear-gradient(#fcfcfc, #eee);\n  border: 1px solid rgb(144, 184, 222);\n  border-left: 0;\n  border-radius: 0px 0px 3px 0;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-appearance: none;\n  top: 0;\n  left: 127px;\n}\n\n#specref-ui {\n  margin: 0 2%;\n  margin-bottom: 0.5cm;\n}\n\n#specref-ui header {\n  font-size: 0.7em;\n  background-color: #eee;\n  text-align: center;\n  padding: 0.2cm;\n  margin-bottom: 0.5cm;\n  border-radius: 0 0 0.2cm 0.2cm;\n}\n\n#specref-ui header h1 {\n  padding: 0;\n  margin: 0;\n  color: black;\n}\n\n#specref-ui p {\n  padding: 0;\n  margin: 0;\n  font-size: 0.8em;\n  text-align: center;\n}\n\n#specref-ui p.state {\n  margin: 1cm;\n}\n\n#specref-ui .searchcomponent {\n  font-size: 16px;\n  display: grid;\n  grid-template-columns: auto 2cm;\n}\n#specref-ui .searchcomponent:focus {\n}\n\n#specref-ui input,\n#specref-ui button {\n  border: 0;\n  padding: 6px 12px;\n}\n\n#specref-ui label {\n  font-size: 0.6em;\n  grid-column-end: 3;\n  text-align: right;\n  grid-column-start: 1;\n}\n\n#specref-ui input[type="search"] {\n  -webkit-appearance: none;\n  font-size: 16px;\n  border-radius: 0.1cm 0 0 0.1cm;\n  border: 1px solid rgb(204, 204, 204);\n}\n\n#specref-ui button[type="submit"] {\n  color: white;\n  border-radius: 0 0.1cm 0.1cm 0;\n  background-color: rgb(51, 122, 183);\n}\n\n#specref-ui button[type="submit"]:hover {\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n#specref-ui .result-stats {\n  margin: 0;\n  padding: 0;\n  color: rgb(128, 128, 128);\n  font-size: 0.7em;\n  font-weight: bold;\n}\n\n#specref-ui .specref-results {\n  font-size: 0.8em;\n}\n\n#specref-ui .specref-results dd + dt {\n  margin-top: 0.51cm;\n}\n\n#specref-ui .specref-results a {\n  text-transform: capitalize;\n}\n#specref-ui .specref-results .authors {\n  display: block;\n  color: #006621;\n}\n\n@media print {\n  #respec-ui {\n    display: none;\n  }\n}\n\n#xref-ui {\n  width: 100%;\n  min-height: 550px;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n#xref-ui:not(.ready) {\n  background: url("https://respec.org/xref/loader.gif") no-repeat center;\n}\n'
}, function(e, t, n) {
    (function(t) {
        ! function(t) {
            "use strict";
            var n = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                nptable: g,
                table: g,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
                text: /^[^\n]+/
            };

            function r(e) {
                this.tokens = [], this.tokens.links = Object.create(null), this.options = e || k.defaults, this.rules = n.normal, this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.rules = n.gfm)
            }
            n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, n.def = f(n.def).replace("label", n._label).replace("title", n._title).getRegex(), n.bullet = /(?:[*+-]|\d{1,9}\.)/, n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, n.item = f(n.item, "gm").replace(/bull/g, n.bullet).getRegex(), n.list = f(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + n.def.source + ")").getRegex(), n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", n._comment = /<!--(?!-?>)[\s\S]*?-->/, n.html = f(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), n.paragraph = f(n._paragraph).replace("hr", n.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", n._tag).getRegex(), n.blockquote = f(n.blockquote).replace("paragraph", n.paragraph).getRegex(), n.normal = b({}, n), n.gfm = b({}, n.normal, {
                nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
            }), n.pedantic = b({}, n.normal, {
                html: f("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                fences: g,
                paragraph: f(n.normal._paragraph).replace("hr", n.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", n.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            }), r.rules = n, r.lex = function(e, t) {
                return new r(t).lex(e)
            }, r.prototype.lex = function(e) {
                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
            }, r.prototype.token = function(e, t) {
                var r, o, i, a, s, c, u, d, f, p, h, m, g, b, w, x;
                for (e = e.replace(/^ +$/gm, ""); e;)
                    if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({
                            type: "space"
                        })), i = this.rules.code.exec(e)) {
                        var k = this.tokens[this.tokens.length - 1];
                        e = e.substring(i[0].length), k && "paragraph" === k.type ? k.text += "\n" + i[0].trimRight() : (i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? i : v(i, "\n")
                        }))
                    } else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "code",
                    lang: i[2] ? i[2].trim() : i[2],
                    text: i[3] || ""
                });
                else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "heading",
                    depth: i[1].length,
                    text: i[2]
                });
                else if ((i = this.rules.nptable.exec(e)) && (c = {
                        type: "table",
                        header: y(i[1].replace(/^ *| *\| *$/g, "")),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                    }).header.length === c.align.length) {
                    for (e = e.substring(i[0].length), h = 0; h < c.align.length; h++) /^ *-+: *$/.test(c.align[h]) ? c.align[h] = "right" : /^ *:-+: *$/.test(c.align[h]) ? c.align[h] = "center" : /^ *:-+ *$/.test(c.align[h]) ? c.align[h] = "left" : c.align[h] = null;
                    for (h = 0; h < c.cells.length; h++) c.cells[h] = y(c.cells[h], c.header.length);
                    this.tokens.push(c)
                } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "hr"
                });
                else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "blockquote_start"
                }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
                    type: "blockquote_end"
                });
                else if (i = this.rules.list.exec(e)) {
                    for (e = e.substring(i[0].length), u = {
                            type: "list_start",
                            ordered: b = (a = i[2]).length > 1,
                            start: b ? +a : "",
                            loose: !1
                        }, this.tokens.push(u), d = [], r = !1, g = (i = i[0].match(this.rules.item)).length, h = 0; h < g; h++) p = (c = i[h]).length, ~(c = c.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (p -= c.length, c = this.options.pedantic ? c.replace(/^ {1,4}/gm, "") : c.replace(new RegExp("^ {1," + p + "}", "gm"), "")), h !== g - 1 && (s = n.bullet.exec(i[h + 1])[0], (a.length > 1 ? 1 === s.length : s.length > 1 || this.options.smartLists && s !== a) && (e = i.slice(h + 1).join("\n") + e, h = g - 1)), o = r || /\n\n(?!\s*$)/.test(c), h !== g - 1 && (r = "\n" === c.charAt(c.length - 1), o || (o = r)), o && (u.loose = !0), x = void 0, (w = /^\[[ xX]\] /.test(c)) && (x = " " !== c[1], c = c.replace(/^\[[ xX]\] +/, "")), f = {
                        type: "list_item_start",
                        task: w,
                        checked: x,
                        loose: o
                    }, d.push(f), this.tokens.push(f), this.token(c, !1), this.tokens.push({
                        type: "list_item_end"
                    });
                    if (u.loose)
                        for (g = d.length, h = 0; h < g; h++) d[h].loose = !0;
                    this.tokens.push({
                        type: "list_end"
                    })
                } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : l(i[0]) : i[0]
                });
                else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), m = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[m] || (this.tokens.links[m] = {
                    href: i[2],
                    title: i[3]
                });
                else if ((i = this.rules.table.exec(e)) && (c = {
                        type: "table",
                        header: y(i[1].replace(/^ *| *\| *$/g, "")),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                    }).header.length === c.align.length) {
                    for (e = e.substring(i[0].length), h = 0; h < c.align.length; h++) /^ *-+: *$/.test(c.align[h]) ? c.align[h] = "right" : /^ *:-+: *$/.test(c.align[h]) ? c.align[h] = "center" : /^ *:-+ *$/.test(c.align[h]) ? c.align[h] = "left" : c.align[h] = null;
                    for (h = 0; h < c.cells.length; h++) c.cells[h] = y(c.cells[h].replace(/^ *\| *| *\| *$/g, ""), c.header.length);
                    this.tokens.push(c)
                } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "heading",
                    depth: "=" === i[2].charAt(0) ? 1 : 2,
                    text: i[1]
                });
                else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
                    type: "paragraph",
                    text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
                });
                else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                    type: "text",
                    text: i[0]
                });
                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                return this.tokens
            };
            var o = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: g,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: g,
                text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
            };

            function i(e, t) {
                if (this.options = t || k.defaults, this.links = e, this.rules = o.normal, this.renderer = this.options.renderer || new a, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                this.options.pedantic ? this.rules = o.pedantic : this.options.gfm && (this.options.breaks ? this.rules = o.breaks : this.rules = o.gfm)
            }

            function a(e) {
                this.options = e || k.defaults
            }

            function s() {}

            function c(e) {
                this.tokens = [], this.token = null, this.options = e || k.defaults, this.options.renderer = this.options.renderer || new a, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new u
            }

            function u() {
                this.seen = {}
            }

            function l(e, t) {
                if (t) {
                    if (l.escapeTest.test(e)) return e.replace(l.escapeReplace, (function(e) {
                        return l.replacements[e]
                    }))
                } else if (l.escapeTestNoEncode.test(e)) return e.replace(l.escapeReplaceNoEncode, (function(e) {
                    return l.replacements[e]
                }));
                return e
            }

            function d(e) {
                return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (function(e, t) {
                    return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                }))
            }

            function f(e, t) {
                return e = e.source || e, t = t || "", {
                    replace: function(t, n) {
                        return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
                    },
                    getRegex: function() {
                        return new RegExp(e, t)
                    }
                }
            }

            function p(e, t, n) {
                if (e) {
                    try {
                        var r = decodeURIComponent(d(n)).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (e) {
                        return null
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                }
                t && !m.test(n) && (n = function(e, t) {
                    h[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? h[" " + e] = e + "/" : h[" " + e] = v(e, "/", !0));
                    return e = h[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
                }(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%")
                } catch (e) {
                    return null
                }
                return n
            }
            o._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", o.em = f(o.em).replace(/punctuation/g, o._punctuation).getRegex(), o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, o.autolink = f(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex(), o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, o.tag = f(o.tag).replace("comment", n._comment).replace("attribute", o._attribute).getRegex(), o._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, o._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, o.link = f(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex(), o.reflink = f(o.reflink).replace("label", o._label).getRegex(), o.normal = b({}, o), o.pedantic = b({}, o.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(),
                reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex()
            }), o.gfm = b({}, o.normal, {
                escape: f(o.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^~+(?=\S)([\s\S]*?\S)~+/,
                text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
            }), o.gfm.url = f(o.gfm.url, "i").replace("email", o.gfm._extended_email).getRegex(), o.breaks = b({}, o.gfm, {
                br: f(o.br).replace("{2,}", "*").getRegex(),
                text: f(o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            }), i.rules = o, i.output = function(e, t, n) {
                return new i(t, n).output(e)
            }, i.prototype.output = function(e) {
                for (var t, n, r, o, a, s, c = ""; e;)
                    if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), c += l(a[1]);
                    else if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1), e = e.substring(a[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : l(a[0]) : a[0];
                else if (a = this.rules.link.exec(e)) {
                    var u = w(a[2], "()");
                    if (u > -1) {
                        var d = 4 + a[1].length + u;
                        a[2] = a[2].substring(0, u), a[0] = a[0].substring(0, d).trim(), a[3] = ""
                    }
                    e = e.substring(a[0].length), this.inLink = !0, r = a[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = t[1], o = t[3]) : o = "" : o = a[3] ? a[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(a, {
                        href: i.escapes(r),
                        title: i.escapes(o)
                    }), this.inLink = !1
                } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                    if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                        c += a[0].charAt(0), e = a[0].substring(1) + e;
                        continue
                    }
                    this.inLink = !0, c += this.outputLink(a, t), this.inLink = !1
                } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), c += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), c += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), c += this.renderer.codespan(l(a[2].trim(), !0));
                else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), c += this.renderer.br();
                else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), c += this.renderer.del(this.output(a[1]));
                else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), r = "@" === a[2] ? "mailto:" + (n = l(this.mangle(a[1]))) : n = l(a[1]), c += this.renderer.link(r, null, n);
                else if (this.inLink || !(a = this.rules.url.exec(e))) {
                    if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? c += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : l(a[0]) : a[0]) : c += this.renderer.text(l(this.smartypants(a[0])));
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                } else {
                    if ("@" === a[2]) r = "mailto:" + (n = l(a[0]));
                    else {
                        do {
                            s = a[0], a[0] = this.rules._backpedal.exec(a[0])[0]
                        } while (s !== a[0]);
                        n = l(a[0]), r = "www." === a[1] ? "http://" + n : n
                    }
                    e = e.substring(a[0].length), c += this.renderer.link(r, null, n)
                }
                return c
            }, i.escapes = function(e) {
                return e ? e.replace(i.rules._escapes, "$1") : e
            }, i.prototype.outputLink = function(e, t) {
                var n = t.href,
                    r = t.title ? l(t.title) : null;
                return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, l(e[1]))
            }, i.prototype.smartypants = function(e) {
                return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
            }, i.prototype.mangle = function(e) {
                if (!this.options.mangle) return e;
                for (var t, n = "", r = e.length, o = 0; o < r; o++) t = e.charCodeAt(o), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                return n
            }, a.prototype.code = function(e, t, n) {
                var r = (t || "").match(/\S*/)[0];
                if (this.options.highlight) {
                    var o = this.options.highlight(e, r);
                    null != o && o !== e && (n = !0, e = o)
                }
                return r ? '<pre><code class="' + this.options.langPrefix + l(r, !0) + '">' + (n ? e : l(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : l(e, !0)) + "</code></pre>"
            }, a.prototype.blockquote = function(e) {
                return "<blockquote>\n" + e + "</blockquote>\n"
            }, a.prototype.html = function(e) {
                return e
            }, a.prototype.heading = function(e, t, n, r) {
                return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
            }, a.prototype.hr = function() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, a.prototype.list = function(e, t, n) {
                var r = t ? "ol" : "ul";
                return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
            }, a.prototype.listitem = function(e) {
                return "<li>" + e + "</li>\n"
            }, a.prototype.checkbox = function(e) {
                return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, a.prototype.paragraph = function(e) {
                return "<p>" + e + "</p>\n"
            }, a.prototype.table = function(e, t) {
                return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
            }, a.prototype.tablerow = function(e) {
                return "<tr>\n" + e + "</tr>\n"
            }, a.prototype.tablecell = function(e, t) {
                var n = t.header ? "th" : "td";
                return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, a.prototype.strong = function(e) {
                return "<strong>" + e + "</strong>"
            }, a.prototype.em = function(e) {
                return "<em>" + e + "</em>"
            }, a.prototype.codespan = function(e) {
                return "<code>" + e + "</code>"
            }, a.prototype.br = function() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, a.prototype.del = function(e) {
                return "<del>" + e + "</del>"
            }, a.prototype.link = function(e, t, n) {
                if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
                var r = '<a href="' + l(e) + '"';
                return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
            }, a.prototype.image = function(e, t, n) {
                if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
                var r = '<img src="' + e + '" alt="' + n + '"';
                return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
            }, a.prototype.text = function(e) {
                return e
            }, s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function(e) {
                return e
            }, s.prototype.link = s.prototype.image = function(e, t, n) {
                return "" + n
            }, s.prototype.br = function() {
                return ""
            }, c.parse = function(e, t) {
                return new c(t).parse(e)
            }, c.prototype.parse = function(e) {
                this.inline = new i(e.links, this.options), this.inlineText = new i(e.links, b({}, this.options, {
                    renderer: new s
                })), this.tokens = e.reverse();
                for (var t = ""; this.next();) t += this.tok();
                return t
            }, c.prototype.next = function() {
                return this.token = this.tokens.pop(), this.token
            }, c.prototype.peek = function() {
                return this.tokens[this.tokens.length - 1] || 0
            }, c.prototype.parseText = function() {
                for (var e = this.token.text;
                    "text" === this.peek().type;) e += "\n" + this.next().text;
                return this.inline.output(e)
            }, c.prototype.tok = function() {
                switch (this.token.type) {
                    case "space":
                        return "";
                    case "hr":
                        return this.renderer.hr();
                    case "heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, d(this.inlineText.output(this.token.text)), this.slugger);
                    case "code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case "table":
                        var e, t, n, r, o = "",
                            i = "";
                        for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                            header: !0,
                            align: this.token.align[e]
                        });
                        for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                header: !1,
                                align: this.token.align[r]
                            });
                            i += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(o, i);
                    case "blockquote_start":
                        for (i = "";
                            "blockquote_end" !== this.next().type;) i += this.tok();
                        return this.renderer.blockquote(i);
                    case "list_start":
                        i = "";
                        for (var a = this.token.ordered, s = this.token.start;
                            "list_end" !== this.next().type;) i += this.tok();
                        return this.renderer.list(i, a, s);
                    case "list_item_start":
                        i = "";
                        var c = this.token.loose,
                            u = this.token.checked,
                            l = this.token.task;
                        for (this.token.task && (i += this.renderer.checkbox(u));
                            "list_item_end" !== this.next().type;) i += c || "text" !== this.token.type ? this.tok() : this.parseText();
                        return this.renderer.listitem(i, l, u);
                    case "html":
                        return this.renderer.html(this.token.text);
                    case "paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case "text":
                        return this.renderer.paragraph(this.parseText());
                    default:
                        var f = 'Token with "' + this.token.type + '" type was not found.';
                        if (!this.options.silent) throw new Error(f);
                        console.log(f)
                }
            }, u.prototype.slug = function(e) {
                var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                if (this.seen.hasOwnProperty(t)) {
                    var n = t;
                    do {
                        this.seen[n]++, t = n + "-" + this.seen[n]
                    } while (this.seen.hasOwnProperty(t))
                }
                return this.seen[t] = 0, t
            }, l.escapeTest = /[&<>"']/, l.escapeReplace = /[&<>"']/g, l.replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, l.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, l.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
            var h = {},
                m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

            function g() {}

            function b(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                    for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }

            function y(e, t) {
                var n = e.replace(/\|/g, (function(e, t, n) {
                        for (var r = !1, o = t; --o >= 0 && "\\" === n[o];) r = !r;
                        return r ? "|" : " |"
                    })).split(/ \|/),
                    r = 0;
                if (n.length > t) n.splice(t);
                else
                    for (; n.length < t;) n.push("");
                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
            }

            function v(e, t, n) {
                if (0 === e.length) return "";
                for (var r = 0; r < e.length;) {
                    var o = e.charAt(e.length - r - 1);
                    if (o !== t || n) {
                        if (o === t || !n) break;
                        r++
                    } else r++
                }
                return e.substr(0, e.length - r)
            }

            function w(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = 0, r = 0; r < e.length; r++)
                    if ("\\" === e[r]) r++;
                    else if (e[r] === t[0]) n++;
                else if (e[r] === t[1] && --n < 0) return r;
                return -1
            }

            function x(e) {
                e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
            }

            function k(e, t, n) {
                if (null == e) throw new Error("marked(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                if (n || "function" == typeof t) {
                    n || (n = t, t = null), x(t = b({}, k.defaults, t || {}));
                    var o, i, a = t.highlight,
                        s = 0;
                    try {
                        o = r.lex(e, t)
                    } catch (e) {
                        return n(e)
                    }
                    i = o.length;
                    var u = function(e) {
                        if (e) return t.highlight = a, n(e);
                        var r;
                        try {
                            r = c.parse(o, t)
                        } catch (t) {
                            e = t
                        }
                        return t.highlight = a, e ? n(e) : n(null, r)
                    };
                    if (!a || a.length < 3) return u();
                    if (delete t.highlight, !i) return u();
                    for (; s < o.length; s++) ! function(e) {
                        "code" !== e.type ? --i || u() : a(e.text, e.lang, (function(t, n) {
                            return t ? u(t) : null == n || n === e.text ? --i || u() : (e.text = n, e.escaped = !0, void(--i || u()))
                        }))
                    }(o[s])
                } else try {
                    return t && (t = b({}, k.defaults, t)), x(t), c.parse(r.lex(e, t), t)
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || k.defaults).silent) return "<p>An error occurred:</p><pre>" + l(e.message + "", !0) + "</pre>";
                    throw e
                }
            }
            g.exec = g, k.options = k.setOptions = function(e) {
                return b(k.defaults, e), k
            }, k.getDefaults = function() {
                return {
                    baseUrl: null,
                    breaks: !1,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: new a,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartLists: !1,
                    smartypants: !1,
                    xhtml: !1
                }
            }, k.defaults = k.getDefaults(), k.Parser = c, k.parser = c.parse, k.Renderer = a, k.TextRenderer = s, k.Lexer = r, k.lexer = r.lex, k.InlineLexer = i, k.inlineLexer = i.output, k.Slugger = u, k.parse = k, e.exports = k
        }(this || "undefined" != typeof window && window)
    }).call(this, n(29))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = {
        all_shortcuts: {},
        add: function(e, t, n) {
            var r = {
                type: "keydown",
                propagate: !1,
                disable_in_input: !1,
                target: document,
                keycode: !1
            };
            if (n)
                for (var o in r) void 0 === n[o] && (n[o] = r[o]);
            else n = r;
            var i = n.target;
            "string" == typeof n.target && (i = document.getElementById(n.target));
            e = e.toLowerCase();
            var a = function(r) {
                var o, i;
                if ((r = r || window.event, n.disable_in_input) && (r.target ? i = r.target : r.srcElement && (i = r.srcElement), 3 == i.nodeType && (i = i.parentNode), "INPUT" == i.tagName || "TEXTAREA" == i.tagName)) return;
                r.keyCode ? o = r.keyCode : r.which && (o = r.which);
                var a = String.fromCharCode(o).toLowerCase();
                188 == o && (a = ","), 190 == o && (a = ".");
                var s = e.split("+"),
                    c = 0,
                    u = {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ":",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    },
                    l = {
                        esc: 27,
                        escape: 27,
                        tab: 9,
                        space: 32,
                        return: 13,
                        enter: 13,
                        backspace: 8,
                        scrolllock: 145,
                        scroll_lock: 145,
                        scroll: 145,
                        capslock: 20,
                        caps_lock: 20,
                        caps: 20,
                        numlock: 144,
                        num_lock: 144,
                        num: 144,
                        pause: 19,
                        break: 19,
                        insert: 45,
                        home: 36,
                        delete: 46,
                        end: 35,
                        pageup: 33,
                        page_up: 33,
                        pu: 33,
                        pagedown: 34,
                        page_down: 34,
                        pd: 34,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        f1: 112,
                        f2: 113,
                        f3: 114,
                        f4: 115,
                        f5: 116,
                        f6: 117,
                        f7: 118,
                        f8: 119,
                        f9: 120,
                        f10: 121,
                        f11: 122,
                        f12: 123
                    },
                    d = {
                        shift: {
                            wanted: !1,
                            pressed: !1
                        },
                        ctrl: {
                            wanted: !1,
                            pressed: !1
                        },
                        alt: {
                            wanted: !1,
                            pressed: !1
                        },
                        meta: {
                            wanted: !1,
                            pressed: !1
                        }
                    };
                r.ctrlKey && (d.ctrl.pressed = !0), r.shiftKey && (d.shift.pressed = !0), r.altKey && (d.alt.pressed = !0), r.metaKey && (d.meta.pressed = !0);
                for (var f, p = 0; f = s[p], p < s.length; p++) "ctrl" == f || "control" == f ? (c++, d.ctrl.wanted = !0) : "shift" == f ? (c++, d.shift.wanted = !0) : "alt" == f ? (c++, d.alt.wanted = !0) : "meta" == f ? (c++, d.meta.wanted = !0) : f.length > 1 ? l[f] == o && c++ : n.keycode ? n.keycode == o && c++ : a == f ? c++ : u[a] && r.shiftKey && (a = u[a]) == f && c++;
                if (c == s.length && d.ctrl.pressed == d.ctrl.wanted && d.shift.pressed == d.shift.wanted && d.alt.pressed == d.alt.wanted && d.meta.pressed == d.meta.wanted && (t(r), !n.propagate)) return r.cancelBubble = !0, r.returnValue = !1, r.stopPropagation && (r.stopPropagation(), r.preventDefault()), !1
            };
            this.all_shortcuts[e] = {
                callback: a,
                target: i,
                event: n.type
            }, i.addEventListener ? i.addEventListener(n.type, a, !1) : i.attachEvent ? i.attachEvent("on" + n.type, a) : i["on" + n.type] = a
        }
    };
    e.exports = r
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(32)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.name = void 0, n = (r = n) && r.__esModule ? r : {
            default: r
        };
        e.name = "core/jquery-enhanced", window.$ = window.jQuery = n.default, window.$.fn.renameElement = function(e) {
            const r = [];
            return this.each((function() {
                const n = (0, t.renameElement)(this, e);
                r.push(n)
            })), (0, n.default)(r)
        }, window.$.fn.getDfnTitles = function() {
            return (0, t.getDfnTitles)(this[0])
        }, window.$.fn.linkTargets = function() {
            return (0, t.getLinkTargets)(this[0])
        }, window.$.fn.makeID = function(e = "", n = "", r = !1) {
            const o = this[0];
            return (0, t.addId)(o, e, n, r)
        }, window.$.fn.allTextNodes = function(e) {
            return (0, t.getTextNodes)(this[0], e)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r;

    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var i = [],
            a = n.document,
            s = Object.getPrototypeOf,
            c = i.slice,
            u = i.concat,
            l = i.push,
            d = i.indexOf,
            f = {},
            p = f.toString,
            h = f.hasOwnProperty,
            m = h.toString,
            g = m.call(Object),
            b = {},
            y = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            v = function(e) {
                return null != e && e === e.window
            },
            w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var r, o, i = (n = n || a).createElement("script");
            if (i.text = e, t)
                for (r in w)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
                return new C.fn.init(e, t)
            },
            S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function E(e) {
            var t = !!e && "length" in e && e.length,
                n = k(e);
            return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.4.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return c.call(this)
            },
            get: function(e) {
                return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(c.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: i.sort,
            splice: i.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(u, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && m.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t) {
                x(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (E(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(S, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (E(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u.apply([], a)
            },
            guid: 1,
            support: b
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }));
        var O =
            /*!
             * Sizzle CSS Selector Engine v2.3.4
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2019-04-08
             */
            function(e) {
                var t, n, r, o, i, a, s, c, u, l, d, f, p, h, m, g, b, y, v, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    k = 0,
                    C = 0,
                    S = ce(),
                    E = ce(),
                    O = ce(),
                    T = ce(),
                    j = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    _ = {}.hasOwnProperty,
                    P = [],
                    A = P.pop,
                    R = P.push,
                    D = P.push,
                    L = P.slice,
                    N = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    q = "\\[" + M + "*(" + W + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + M + "*\\]",
                    U = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    F = new RegExp(M + "+", "g"),
                    $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    z = new RegExp("^" + M + "*," + M + "*"),
                    H = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    B = new RegExp(M + "|>"),
                    G = new RegExp(U),
                    V = new RegExp("^" + W + "$"),
                    Z = {
                        ID: new RegExp("^#(" + W + ")"),
                        CLASS: new RegExp("^\\.(" + W + ")"),
                        TAG: new RegExp("^(" + W + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + U),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    X = /HTML$/i,
                    Y = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                    ne = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        f()
                    },
                    ae = we((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    D.apply(P = L.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: P.length ? function(e, t) {
                            R.apply(e, L.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, o) {
                    var i, s, u, l, d, h, b, y = t && t.ownerDocument,
                        k = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
                    if (!o && ((t ? t.ownerDocument || t : x) !== p && f(t), t = t || p, m)) {
                        if (11 !== k && (d = Q.exec(e)))
                            if (i = d[1]) {
                                if (9 === k) {
                                    if (!(u = t.getElementById(i))) return r;
                                    if (u.id === i) return r.push(u), r
                                } else if (y && (u = y.getElementById(i)) && v(t, u) && u.id === i) return r.push(u), r
                            } else {
                                if (d[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !T[e + " "] && (!g || !g.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                            if (b = e, y = t, 1 === k && B.test(e)) {
                                for ((l = t.getAttribute("id")) ? l = l.replace(re, oe) : t.setAttribute("id", l = w), s = (h = a(e)).length; s--;) h[s] = "#" + l + " " + ve(h[s]);
                                b = h.join(","), y = ee.test(e) && be(t.parentNode) || t
                            }
                            try {
                                return D.apply(r, y.querySelectorAll(b)), r
                            } catch (t) {
                                T(e, !0)
                            } finally {
                                l === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return c(e.replace($, "$1"), t, r, o)
                }

                function ce() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function ue(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function fe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function me(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return ue((function(t) {
                        return t = +t, ue((function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        }))
                    }))
                }

                function be(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, i = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !X.test(t || n && n.nodeName || "HTML")
                    }, f = se.setDocument = function(e) {
                        var t, o, a = e ? e.ownerDocument || e : x;
                        return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !i(p), x !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = le((function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = le((function(e) {
                            return h.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, b = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (le((function(e) {
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                        })), le((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), b.push("!=", U)
                        })), g = g.length && new RegExp(g.join("|")), b = b.length && new RegExp(b.join("|")), t = J.test(h.compareDocumentPosition), v = t || J.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === x && v(x, e) ? -1 : t === p || t.ownerDocument === x && v(x, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e === p ? -1 : t === p ? 1 : o ? -1 : i ? 1 : l ? N(l, e) - N(l, t) : 0;
                            if (o === i) return fe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? fe(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                        }, p) : p
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && f(e), n.matchesSelector && m && !T[t + " "] && (!b || !b.test(t)) && (!g || !g.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            T(t, !0)
                        }
                        return se(t, p, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && f(e), v(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && f(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && _.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                        return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (d = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(j), d) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return l = null, e
                    }, o = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: Z,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = se.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, c) {
                                    var u, l, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        b = s && t.nodeName.toLowerCase(),
                                        y = !c && !s,
                                        v = !1;
                                    if (g) {
                                        if (i) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)
                                                    if (s ? f.nodeName.toLowerCase() === b : 1 === f.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                            for (v = (p = (u = (l = (d = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (v = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++v && f === t) {
                                                    l[e] = [k, p, v];
                                                    break
                                                }
                                        } else if (y && (v = p = (u = (l = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && u[1]), !1 === v)
                                            for (;
                                                (f = ++p && f && f[m] || (v = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== b : 1 !== f.nodeType) || !++v || (y && ((l = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [k, v]), f !== t)););
                                        return (v -= o) === r || v % r == 0 && v / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = N(e, i[a])] = !(n[r] = i[a])
                                })) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ue((function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace($, "$1"));
                                return r[w] ? ue((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ue((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            })),
                            contains: ue((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || o(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ue((function(e) {
                                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return K.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            })),
                            last: ge((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ye() {}

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function we(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function(t, n, c) {
                        var u, l, d, f = [k, s];
                        if (c) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, c)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (l = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((u = l[i]) && u[0] === k && u[1] === s) return f[2] = u[2];
                                        if (l[i] = f, f[2] = e(t, n, c)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function ke(e, t, n, r, o) {
                    for (var i, a = [], s = 0, c = e.length, u = null != t; s < c; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), u && t.push(s)));
                    return a
                }

                function Ce(e, t, n, r, o, i) {
                    return r && !r[w] && (r = Ce(r)), o && !o[w] && (o = Ce(o, i)), ue((function(i, a, s, c) {
                        var u, l, d, f = [],
                            p = [],
                            h = a.length,
                            m = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            g = !e || !i && t ? m : ke(m, f, e, s, c),
                            b = n ? o || (i ? e : h || r) ? [] : a : g;
                        if (n && n(g, b, s, c), r)
                            for (u = ke(b, p), r(u, [], s, c), l = u.length; l--;)(d = u[l]) && (b[p[l]] = !(g[p[l]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], l = b.length; l--;)(d = b[l]) && u.push(g[l] = d);
                                    o(null, b = [], u, c)
                                }
                                for (l = b.length; l--;)(d = b[l]) && (u = o ? N(i, d) : f[l]) > -1 && (i[u] = !(a[u] = d))
                            }
                        } else b = ke(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, c) : D.apply(a, b)
                    }))
                }

                function Se(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], c = a ? 1 : 0, l = we((function(e) {
                            return e === t
                        }), s, !0), d = we((function(e) {
                            return N(t, e) > -1
                        }), s, !0), f = [function(e, n, r) {
                            var o = !a && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                            return t = null, o
                        }]; c < i; c++)
                        if (n = r.relative[e[c].type]) f = [we(xe(f), n)];
                        else {
                            if ((n = r.filter[e[c].type].apply(null, e[c].matches))[w]) {
                                for (o = ++c; o < i && !r.relative[e[o].type]; o++);
                                return Ce(c > 1 && xe(f), c > 1 && ve(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace($, "$1"), n, c < o && Se(e.slice(c, o)), o < i && Se(e = e.slice(o)), o < i && ve(e))
                            }
                            f.push(n)
                        } return xe(f)
                }
                return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                    var n, o, i, a, s, c, u, l = E[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, c = [], u = r.preFilter; s;) {
                        for (a in n && !(o = z.exec(s)) || (o && (s = s.slice(o[0].length) || s), c.push(i = [])), n = !1, (o = H.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace($, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = Z[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : E(e, c).slice(0)
                }, s = se.compile = function(e, t) {
                    var n, o = [],
                        i = [],
                        s = O[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[w] ? o.push(s) : i.push(s);
                        (s = O(e, function(e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                i = function(i, a, s, c, l) {
                                    var d, h, g, b = 0,
                                        y = "0",
                                        v = i && [],
                                        w = [],
                                        x = u,
                                        C = i || o && r.find.TAG("*", l),
                                        S = k += null == x ? 1 : Math.random() || .1,
                                        E = C.length;
                                    for (l && (u = a === p || a || l); y !== E && null != (d = C[y]); y++) {
                                        if (o && d) {
                                            for (h = 0, a || d.ownerDocument === p || (f(d), s = !m); g = e[h++];)
                                                if (g(d, a || p, s)) {
                                                    c.push(d);
                                                    break
                                                } l && (k = S)
                                        }
                                        n && ((d = !g && d) && b--, i && v.push(d))
                                    }
                                    if (b += y, n && y !== b) {
                                        for (h = 0; g = t[h++];) g(v, w, a, s);
                                        if (i) {
                                            if (b > 0)
                                                for (; y--;) v[y] || w[y] || (w[y] = A.call(c));
                                            w = ke(w)
                                        }
                                        D.apply(c, w), l && !i && w.length > 0 && b + t.length > 1 && se.uniqueSort(c)
                                    }
                                    return l && (k = S, u = x), v
                                };
                            return n ? ue(i) : i
                        }(i, o))).selector = e
                    }
                    return s
                }, c = se.select = function(e, t, n, o) {
                    var i, c, u, l, d, f = "function" == typeof e && e,
                        p = !o && a(e = f.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && 9 === t.nodeType && m && r.relative[c[1].type]) {
                            if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                            f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                        }
                        for (i = Z.needsContext.test(e) ? 0 : c.length; i-- && (u = c[i], !r.relative[l = u.type]);)
                            if ((d = r.find[l]) && (o = d(u.matches[0].replace(te, ne), ee.test(c[0].type) && be(t.parentNode) || t))) {
                                if (c.splice(i, 1), !(e = o.length && ve(c))) return D.apply(n, o), n;
                                break
                            }
                    }
                    return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && be(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(j).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                })), le((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && le((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), le((function(e) {
                    return null == e.getAttribute("disabled")
                })) || de(I, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), se
            }(n);
        C.find = O, C.expr = O.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = O.uniqueSort, C.text = O.getText, C.isXMLDoc = O.isXML, C.contains = O.contains, C.escapeSelector = O.escape;
        var T = function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            j = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            _ = C.expr.match.needsContext;

        function P(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function R(e, t, n) {
            return y(t) ? C.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? C.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function(e) {
                return d.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(o[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(R(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(R(this, e || [], !0))
            },
            is: function(e) {
                return !!R(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || D, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), A.test(r[1]) && C.isPlainObject(t))
                        for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, D = C(a);
        var N = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function M(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && C(e);
                if (!_.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return T(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return T(e, "parentNode", n)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return T(e, "nextSibling")
            },
            prevAll: function(e) {
                return T(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return T(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return T(e, "previousSibling", n)
            },
            siblings: function(e) {
                return j((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return j(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (P(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function(e, t) {
            C.fn[e] = function(n, r) {
                var o = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (I[e] || C.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o)
            }
        }));
        var W = /[^\x20\t\r\n\f]+/g;

        function q(e) {
            return e
        }

        function U(e) {
            throw e
        }

        function F(e, t, n, r) {
            var o;
            try {
                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(W) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, r, o, i = [],
                a = [],
                s = -1,
                c = function() {
                    for (o = o || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                },
                u = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                            C.each(n, (function(n, r) {
                                y(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r)
                            }))
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var n;
                                (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        })), this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return o = a = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = a = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return u
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(n) {
                                C.each(t, (function(t, r) {
                                    var o = y(e[r[4]]) && e[r[4]];
                                    i[r[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, o) {
                            var i = 0;

                            function a(e, t, r, o) {
                                return function() {
                                    var s = this,
                                        c = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? o ? u.call(n, a(i, t, q, o), a(i, t, U, o)) : (i++, u.call(n, a(i, t, q, o), a(i, t, U, o), a(i, t, q, t.notifyWith))) : (r !== q && (s = void 0, c = [n]), (o || t.resolveWith)(s, c))
                                            }
                                        },
                                        l = o ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (r !== U && (s = void 0, c = [n]), t.rejectWith(s, c))
                                            }
                                        };
                                    e ? l() : (C.Deferred.getStackHook && (l.stackTrace = C.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            return C.Deferred((function(n) {
                                t[0][3].add(a(0, n, y(o) ? o : q, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : q)), t[2][3].add(a(0, n, y(r) ? r : U))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, o) : o
                        }
                    },
                    i = {};
                return C.each(t, (function(e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add((function() {
                        r = s
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                })), o.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = c.call(arguments),
                    i = C.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, o[e] = arguments.length > 1 ? c.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                for (; n--;) F(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var z = C.Deferred();

        function H() {
            a.removeEventListener("DOMContentLoaded", H), n.removeEventListener("load", H), C.ready()
        }
        C.fn.ready = function(e) {
            return z.then(e).catch((function(e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || z.resolveWith(a, [C]))
            }
        }), C.ready.then = z.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", H), n.addEventListener("load", H));
        var B = function(e, t, n, r, o, i, a) {
                var s = 0,
                    c = e.length,
                    u = null == n;
                if ("object" === k(n))
                    for (s in o = !0, n) B(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0, y(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(C(e), n)
                    })), t))
                    for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : u ? t.call(e) : c ? t(e[0], n) : i
            },
            G = /^-ms-/,
            V = /-([a-z])/g;

        function Z(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(G, "ms-").replace(V, Z)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = C.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n;
                else
                    for (r in t) o[X(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(W) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var J = new K,
            Q = new K,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return Q.hasData(e) || J.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return J.access(e, t, n)
            },
            _removeData: function(e, t) {
                J.remove(e, t)
            }
        }), C.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Q.get(i), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), ne(i, r, o[r]));
                        J.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    Q.set(this, e)
                })) : B(this, (function(t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
                    this.each((function() {
                        Q.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Q.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                    C.dequeue(e, t)
                }), i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: C.Callbacks("once memory").add((function() {
                        J.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    C.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = C.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = a.documentElement,
            se = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            ce = {
                composed: !0
            };
        ae.getRootNode && (se = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument
        });
        var ue = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === C.css(e, "display")
            },
            le = function(e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
                return o
            };

        function de(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                c = s(),
                u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (C.cssNumber[t] || "px" !== u && +c) && oe.exec(C.css(e, t));
            if (l && l[3] !== u) {
                for (c /= 2, u = u || l[3], l = +c || 1; a--;) C.style(e, t, l + u), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (a = 0), l /= i;
                l *= 2, C.style(e, t, l + u), n = n || []
            }
            return n && (l = +l || +c || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = o)), o
        }
        var fe = {};

        function pe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = fe[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), fe[r] = o, o)
        }

        function he(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = J.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ue(r) && (o[i] = pe(r))) : "none" !== n && (o[i] = "none", J.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        C.fn.extend({
            show: function() {
                return he(this, !0)
            },
            hide: function() {
                return he(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ue(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            be = /^$|^module$|\/(?:java|ecma)script/i,
            ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ve(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? C.merge([e], n) : n
        }

        function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }
        ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
        var xe, ke, Ce = /<|&#?\w+;/;

        function Se(e, t, n, r, o) {
            for (var i, a, s, c, u, l, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === k(i)) C.merge(f, i.nodeType ? [i] : i);
                    else if (Ce.test(i)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(i) || ["", ""])[1].toLowerCase(), c = ye[s] || ye._default, a.innerHTML = c[1] + C.htmlPrefilter(i) + c[2], l = c[0]; l--;) a = a.lastChild;
                C.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (d.textContent = "", p = 0; i = f[p++];)
                if (r && C.inArray(i, r) > -1) o && o.push(i);
                else if (u = se(i), a = ve(d.appendChild(i), "script"), u && we(a), n)
                for (l = 0; i = a[l++];) be.test(i.type || "") && n.push(i);
            return d
        }
        xe = a.createDocumentFragment().appendChild(a.createElement("div")), (ke = a.createElement("input")).setAttribute("type", "radio"), ke.setAttribute("checked", "checked"), ke.setAttribute("name", "t"), xe.appendChild(ke), b.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
        var Ee = /^key/,
            Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Te = /^([^.]*)(?:\.(.+)|)/;

        function je() {
            return !0
        }

        function _e() {
            return !1
        }

        function Pe(e, t) {
            return e === function() {
                try {
                    return a.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Ae(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = _e;
            else if (!o) return e;
            return 1 === i && (a = o, (o = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                C.event.add(this, t, o, r, n)
            }))
        }

        function Re(e, t, n) {
            n ? (J.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = c.call(arguments), J.set(this, t, i), r = n(this, t), this[t](), i !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else i.length && (J.set(this, t, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && C.event.add(e, t, je)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, c, u, l, d, f, p, h, m, g = J.get(e);
                if (g)
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ae, o), n.guid || (n.guid = C.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(W) || [""]).length; u--;) p = m = (s = Te.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, l = C.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, l) : f.push(l), C.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, c, u, l, d, f, p, h, m, g = J.hasData(e) && J.get(e);
                if (g && (c = g.events)) {
                    for (u = (t = (t || "").match(W) || [""]).length; u--;)
                        if (p = m = (s = Te.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = C.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) l = f[i], !o && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(i, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) C.event.remove(e, p + t[u], n, r, !0);
                    C.isEmptyObject(c) && J.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = C.event.fix(e),
                    c = new Array(arguments.length),
                    u = (J.get(this, "events") || {})[s.type] || [],
                    l = C.event.special[s.type] || {};
                for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = C.event.handlers.call(this, s, u), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [],
                    c = t.delegateCount,
                    u = e.target;
                if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (i = [], a = {}, n = 0; n < c; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(u) > -1 : C.find(o, this, null, [u]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: u,
                                handlers: i
                            })
                        } return u = this, c < t.length && s.push({
                    elem: u,
                    handlers: t.slice(c)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && Re(t, "click", je), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && Re(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && P(t, "input") && J.get(t, "click") || P(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? je : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: _e,
            isPropagationStopped: _e,
            isImmediatePropagationStopped: _e,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = je, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = je, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = je, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Oe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Re(this, e, Pe), !1
                },
                trigger: function() {
                    return Re(this, e), !0
                },
                delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each((function() {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Le = /<script|<style|<link/i,
            Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Me(e, t) {
            return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function We(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function qe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ue(e, t) {
            var n, r, o, i, a, s, c, u;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (i = J.access(e), a = J.set(t, i), u = i.events))
                    for (o in delete a.handle, a.events = {}, u)
                        for (n = 0, r = u[o].length; n < r; n++) C.event.add(t, o, u[o][n]);
                Q.hasData(e) && (s = Q.access(e), c = C.extend({}, s), Q.set(t, c))
            }
        }

        function Fe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function $e(e, t, n, r) {
            t = u.apply([], t);
            var o, i, a, s, c, l, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = y(h);
            if (m || f > 1 && "string" == typeof h && !b.checkClone && Ne.test(h)) return e.each((function(o) {
                var i = e.eq(o);
                m && (t[0] = h.call(this, o, i.html())), $e(i, t, n, r)
            }));
            if (f && (i = (o = Se(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (s = (a = C.map(ve(o, "script"), We)).length; d < f; d++) c = o, d !== p && (c = C.clone(c, !0, !0), s && C.merge(a, ve(c, "script"))), n.call(e[d], c, d);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, C.map(a, qe), d = 0; d < s; d++) c = a[d], be.test(c.type || "") && !J.access(c, "globalEval") && C.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : x(c.textContent.replace(Ie, ""), c, l))
            }
            return e
        }

        function ze(e, t, n) {
            for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(ve(r)), r.parentNode && (n && se(r) && we(ve(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e.replace(De, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    c = se(e);
                if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = ve(s), r = 0, o = (i = ve(e)).length; r < o; r++) Fe(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || ve(e), a = a || ve(s), r = 0, o = i.length; r < o; r++) Ue(i[r], a[r]);
                    else Ue(e, s);
                return (a = ve(s, "script")).length > 0 && we(a, !c && ve(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (Y(n)) {
                        if (t = n[J.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[J.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return ze(this, e, !0)
            },
            remove: function(e) {
                return ze(this, e)
            },
            text: function(e) {
                return B(this, (function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return $e(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return $e(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Me(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return $e(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return $e(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return C.clone(this, e, t)
                }))
            },
            html: function(e) {
                return B(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return $e(this, arguments, (function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(ve(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), C(o[a])[t](n), l.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var He = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Ge = new RegExp(ie.join("|"), "i");

        function Ve(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = C.style(e, t)), !b.pixelBoxStyles() && He.test(a) && Ge.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function Ze(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(u).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top, c = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), ae.removeChild(u), l = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, s, c, u = a.createElement("div"),
                l = a.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(b, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), c
                },
                scrollboxSize: function() {
                    return e(), i
                }
            }))
        }();
        var Xe = ["Webkit", "Moz", "ms"],
            Ye = a.createElement("div").style,
            Ke = {};

        function Je(e) {
            var t = C.cssProps[e] || Ke[e];
            return t || (e in Ye ? e : Ke[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                    if ((e = Xe[n] + t) in Ye) return e
            }(e) || e)
        }
        var Qe = /^(none|table(?!-c[ea]).+)/,
            et = /^--/,
            tt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            nt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function rt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function ot(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (c += C.css(e, n + ie[a], !0, o)), r ? ("content" === n && (c -= C.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (c -= C.css(e, "border" + ie[a] + "Width", !0, o))) : (c += C.css(e, "padding" + ie[a], !0, o), "padding" !== n ? c += C.css(e, "border" + ie[a] + "Width", !0, o) : s += C.css(e, "border" + ie[a] + "Width", !0, o));
            return !r && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - .5)) || 0), c
        }

        function it(e, t, n) {
            var r = Be(e),
                o = (!b.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                i = o,
                a = Ve(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (He.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!b.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }

        function at(e, t, n, r, o) {
            return new at.prototype.init(e, t, n, r, o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = X(t),
                        c = et.test(t),
                        u = e.style;
                    if (c || (t = Je(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                    "string" === (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = de(e, t, o), i = "number"), null != n && n == n && ("number" !== i || c || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = X(t);
                return et.test(t) || (t = Je(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ve(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : le(e, tt, (function() {
                        return it(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var o, i = Be(e),
                        a = !b.scrollboxSize() && "absolute" === i.position,
                        s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
                        c = r ? ot(e, t, r, s, i) : 0;
                    return s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)), c && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), rt(0, n, c)
                }
            }
        })), C.cssHooks.marginLeft = Ze(b.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = rt)
        })), C.fn.extend({
            css: function(e, t) {
                return B(this, (function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Be(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = at, at.prototype = {
            constructor: at,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
            }
        }, at.prototype.init.prototype = at.prototype, at.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = at.prototype.init, C.fx.step = {};
        var st, ct, ut = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;

        function dt() {
            ct && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(dt) : n.setTimeout(dt, C.fx.interval), C.fx.tick())
        }

        function ft() {
            return n.setTimeout((function() {
                st = void 0
            })), st = Date.now()
        }

        function pt(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ht(e, t, n) {
            for (var r, o = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function mt(e, t, n) {
            var r, o, i = 0,
                a = mt.prefilters.length,
                s = C.Deferred().always((function() {
                    delete c.elem
                })),
                c = function() {
                    if (o) return !1;
                    for (var t = st || ft(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++) u.tweens[i].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: st || ft(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (! function(e, t) {
                    var n, r, o, i, a;
                    for (n in e)
                        if (o = t[r = X(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                            for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                        else t[r] = o
                }(l, u.opts.specialEasing); i < a; i++)
                if (r = mt.prefilters[i].call(u, e, l, u.opts)) return y(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(l, ht, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(c, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        C.Animation = C.extend(mt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return de(n.elem, e, oe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(W);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], mt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, o, i, a, s, c, u, l, d = "width" in t || "height" in t,
                        f = this,
                        p = {},
                        h = e.style,
                        m = e.nodeType && ue(e),
                        g = J.get(e, "fxshow");
                    for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, f.always((function() {
                            f.always((function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            }))
                        }))), t)
                        if (o = t[r], ut.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[r]) continue;
                                m = !0
                            }
                            p[r] = g && g[r] || C.style(e, r)
                        } if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = J.get(e, "display")), "none" === (l = C.css(e, "display")) && (u ? l = u : (he([e], !0), u = e.style.display || u, l = C.css(e, "display"), he([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === C.css(e, "float") && (c || (f.done((function() {
                                h.display = u
                            })), null == u && (l = h.display, u = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), c = !1, p) c || (g ? "hidden" in g && (m = g.hidden) : g = J.access(e, "fxshow", {
                            display: u
                        }), i && (g.hidden = !m), m && he([e], !0), f.done((function() {
                            for (r in m || he([e]), J.remove(e, "fxshow"), p) C.style(e, r, p[r])
                        }))), c = ht(m ? g[r] : 0, r, f), r in g || (g[r] = c.start, m && (c.end = c.start, c.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ue).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = C.isEmptyObject(e),
                        i = C.speed(t, n, r),
                        a = function() {
                            var t = mt(this, C.extend({}, e), i);
                            (o || J.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = C.timers,
                            a = J.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && lt.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        !t && n || C.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = J.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = C.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), C.each(["toggle", "show", "hide"], (function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, o)
                }
            })), C.each({
                slideDown: pt("show"),
                slideUp: pt("hide"),
                slideToggle: pt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), st = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                ct || (ct = !0, dt())
            }, C.fx.stop = function() {
                ct = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(o)
                    }
                }))
            },
            function() {
                var e = a.createElement("input"),
                    t = a.createElement("select").appendChild(a.createElement("option"));
                e.type = "checkbox", b.checkOn = "" !== e.value, b.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", b.radioValue = "t" === e.value
            }();
        var gt, bt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return B(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!b.radioValue && "radio" === t && P(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(W);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = bt[t] || C.find.attr;
            bt[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = bt[a], bt[a] = o, o = null != n(e, t, r) ? a : null, bt[a] = i), o
            }
        }));
        var yt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function wt(e) {
            return (e.match(W) || []).join(" ")
        }

        function xt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function kt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(W) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return B(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), b.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, c = 0;
                if (y(e)) return this.each((function(t) {
                    C(this).addClass(e.call(this, t, xt(this)))
                }));
                if ((t = kt(e)).length)
                    for (; n = this[c++];)
                        if (o = xt(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = wt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, c = 0;
                if (y(e)) return this.each((function(t) {
                    C(this).removeClass(e.call(this, t, xt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = kt(e)).length)
                    for (; n = this[c++];)
                        if (o = xt(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            o !== (s = wt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
                    C(this).toggleClass(e.call(this, n, xt(this), t), t)
                })) : this.each((function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = C(this), a = kt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = xt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + wt(xt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Ct = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = y(e), this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : wt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            c = a ? i + 1 : o.length;
                        for (r = i < 0 ? c : a ? i : 0; r < c; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, b.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), b.focusin = "onfocusin" in n;
        var St = /^(?:focusinfocus|focusoutblur)$/,
            Et = function(e) {
                e.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(e, t, r, o) {
                var i, s, c, u, l, d, f, p, m = [r || a],
                    g = h.call(e, "type") ? e.type : e,
                    b = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = c = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (b = g.split("."), g = b.shift(), b.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), f = C.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!o && !f.noBubble && !v(r)) {
                        for (u = f.delegateType || g, St.test(u + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), c = s;
                        c === (r.ownerDocument || a) && m.push(c.defaultView || c.parentWindow || n)
                    }
                    for (i = 0;
                        (s = m[i++]) && !e.isPropagationStopped();) p = s, e.type = i > 1 ? u : f.bindType || g, (d = (J.get(s, "events") || {})[e.type] && J.get(s, "handle")) && d.apply(s, t), (d = l && s[l]) && d.apply && Y(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = g, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), t) || !Y(r) || l && y(r[g]) && !v(r) && ((c = r[l]) && (r[l] = null), C.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, Et), r[g](), e.isPropagationStopped() && p.removeEventListener(g, Et), C.event.triggered = void 0, c && (r[l] = c)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    C.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), b.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        o = J.access(r, t);
                    o || r.addEventListener(e, n, !0), J.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        o = J.access(r, t) - 1;
                    o ? J.access(r, t, o) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                }
            }
        }));
        var Ot = n.location,
            Tt = Date.now(),
            jt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var _t = /\[\]$/,
            Pt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Rt = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t)) C.each(t, (function(t, o) {
                n || _t.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            }));
            else if (n || "object" !== k(t)) r(e, t);
            else
                for (o in t) Dt(e + "[" + o + "]", t[o], n, r)
        }
        C.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    var n = y(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                o(this.name, this.value)
            }));
            else
                for (n in e) Dt(n, e[n], t, o);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !At.test(e) && (this.checked || !me.test(e))
                })).map((function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Pt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(Pt, "\r\n")
                    }
                })).get()
            }
        });
        var Lt = /%20/g,
            Nt = /#.*$/,
            It = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Wt = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            Ut = {},
            Ft = {},
            $t = "*/".concat("*"),
            zt = a.createElement("a");

        function Ht(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(W) || [];
                if (y(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Bt(e, t, n, r) {
            var o = {},
                i = e === Ft;

            function a(s) {
                var c;
                return o[s] = !0, C.each(e[s] || [], (function(e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || i || o[u] ? i ? !(c = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                })), c
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Gt(e, t) {
            var n, r, o = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        zt.href = Ot.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Gt(Gt(e, C.ajaxSettings), t) : Gt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Ht(Ut),
            ajaxTransport: Ht(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, s, c, u, l, d, f, p, h = C.ajaxSetup({}, t),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                    b = C.Deferred(),
                    y = C.Callbacks("once memory"),
                    v = h.statusCode || {},
                    w = {},
                    x = {},
                    k = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!s)
                                    for (s = {}; t = Mt.exec(i);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) S.always(e[S.status]);
                                else
                                    for (t in e) v[t] = [v[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || k;
                            return r && r.abort(t), E(0, t), this
                        }
                    };
                if (b.promise(S), h.url = ((e || h.url || Ot.href) + "").replace(qt, Ot.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(W) || [""], null == h.crossDomain) {
                    u = a.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = zt.protocol + "//" + zt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Bt(Ut, h, t, S), l) return S;
                for (f in (d = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Wt.test(h.type), o = h.url.replace(Nt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (jt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(It, "$1"), p = (jt.test(o) ? "&" : "?") + "_=" + Tt++ + p), h.url = o + p), h.ifModified && (C.lastModified[o] && S.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && S.setRequestHeader("If-None-Match", C.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || l)) return S.abort();
                if (k = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = Bt(Ft, h, t, S)) {
                    if (S.readyState = 1, d && g.trigger("ajaxSend", [S, h]), l) return S;
                    h.async && h.timeout > 0 && (c = n.setTimeout((function() {
                        S.abort("timeout")
                    }), h.timeout));
                    try {
                        l = !1, r.send(w, E)
                    } catch (e) {
                        if (l) throw e;
                        E(-1, e)
                    }
                } else E(-1, "No Transport");

                function E(e, t, a, s) {
                    var u, f, p, w, x, k = t;
                    l || (l = !0, c && n.clearTimeout(c), r = void 0, i = s || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, a && (w = function(e, t, n) {
                        for (var r, o, i, a, s = e.contents, c = e.dataTypes;
                            "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    c.unshift(o);
                                    break
                                } if (c[0] in n) i = c[0];
                        else {
                            for (o in n) {
                                if (!c[0] || e.converters[o + " " + c[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i) return i !== c[0] && c.unshift(i), n[i]
                    }(h, S, a)), w = function(e, t, n, r) {
                        var o, i, a, s, c, u = {},
                            l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                        for (i = l.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift())
                                if ("*" === i) i = c;
                                else if ("*" !== c && c !== i) {
                            if (!(a = u[c + " " + i] || u["* " + i]))
                                for (o in u)
                                    if ((s = o.split(" "))[1] === i && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0], l.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + c + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, w, S, u), u ? (h.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (C.etag[o] = x)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, f = w.data, u = !(p = w.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || k) + "", u ? b.resolveWith(m, [f, k, S]) : b.rejectWith(m, [S, k, p]), S.statusCode(v), v = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [S, h, u ? f : p]), y.fireWith(m, [S, k]), d && (g.trigger("ajaxComplete", [S, h]), --C.active || C.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function(e, t) {
            C[t] = function(e, n, r, o) {
                return y(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        })), C._evalUrl = function(e, t) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return y(e) ? this.each((function(t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = C(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = y(e);
                return this.each((function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Vt = {
                0: 200,
                1223: 204
            },
            Zt = C.ajaxSettings.xhr();
        b.cors = !!Zt && "withCredentials" in Zt, b.ajax = Zt = !!Zt, C.ajaxTransport((function(e) {
            var t, r;
            if (b.cors || Zt && !e.crossDomain) return {
                send: function(o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, o) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Xt, Yt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || C.expando + "_" + Tt++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Kt, "$1" + o) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || C.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                a = arguments
            }, r.always((function() {
                void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Yt.push(o)), a && y(i) && i(a[0]), a = i = void 0
            })), "script"
        })), b.createHTMLDocument = ((Xt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = Se([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
            var r, o, i
        }, C.fn.load = function(e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = wt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                a.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }))
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, (function(t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, c, u = C.css(e, "position"),
                    l = C(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), s = l.offset(), i = C.css(e, "top"), c = C.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : l.css(d)
            }
        }, C.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(r, "marginTop", !0),
                        left: t.left - o.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ae
                }))
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return B(this, (function(e, r, o) {
                    var i;
                    if (v(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }), e, r, arguments.length)
            }
        })), C.each(["top", "left"], (function(e, t) {
            C.cssHooks[t] = Ze(b.pixelPosition, (function(e, n) {
                if (n) return n = Ve(e, t), He.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                C.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return B(this, (function(t, n, o) {
                        var i;
                        return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                    }), t, a ? o : void 0, a)
                }
            }))
        })), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        })), C.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), C.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = c.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, o
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = P, C.isFunction = y, C.isWindow = v, C.camelCase = X, C.type = k, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function() {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Jt = n.jQuery,
            Qt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Jt), C
        }, o || (n.jQuery = n.$ = C), C
    }))
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            for (const e of document.getElementsByTagName("pre")) e.innerHTML = t(e.innerHTML)
        }, e.name = void 0;

        function t(e) {
            if (!e) return e;
            const t = e.trimRight().split("\n");
            for (; t.length && !t[0].trim();) t.shift();
            const n = t.filter(e => e.trim()).map(e => e.search(/[^\s]/)),
                r = Math.min(...n);
            return t.map(e => e.slice(r)).join("\n")
        }
        e.name = "core/reindent"
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            if ((0, t.pub)("start", "core/location-hash"), !location.hash) return;
            document.respecIsReady.then(() => {
                let e = decodeURIComponent(location.hash).substr(1);
                const t = document.getElementById(e),
                    n = /\W/.test(e);
                if (!t && n) {
                    const t = e.replace(/[\W]+/gim, "-").replace(/^-+/, "").replace(/-+$/, "");
                    document.getElementById(t) && (e = t)
                }
                location.hash = "#".concat(e)
            })
        }, e.name = void 0;
        e.name = "core/location-hash"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(36), n(5), n(10), n(12)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(n, !0).forEach((function(t) {
                    c(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if ("unofficial" === e.specStatus) return;
            const r = !1 !== e.lint && s({}, t.coreDefaults.lint, {}, u.lint, {}, e.lint);
            Object.assign(e, s({}, t.coreDefaults, {}, u, {}, e, {
                lint: r
            })), Object.assign(e, {
                definitionMap: n.definitionMap
            })
        }, e.name = void 0, r = (i = r) && i.__esModule ? i : {
            default: i
        };
        e.name = "w3c/defaults", r.default.register(o.rule);
        const u = {
            lint: {
                "privsec-section": !0
            },
            pluralize: !0,
            doJsonLd: !1,
            license: "w3c-software-doc",
            logos: [{
                src: "https://www.w3.org/StyleSheets/TR/2016/logos/W3C",
                alt: "W3C",
                height: 48,
                width: 72,
                url: "https://www.w3.org/"
            }],
            xref: !0
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(37), n(38), n(39), n(10), n(40), n(41), n(42), n(12)], void 0 === (o = function(e, t, n, r, o, i, a, s, c) {
        "use strict";
        var u;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.coreDefaults = e.name = void 0, o = (u = o) && u.__esModule ? u : {
            default: u
        };
        e.name = "core/defaults", o.default.register(s.rule, a.rule, r.rule, i.rule, n.rule, t.rule, c.rule);
        e.coreDefaults = {
            lint: {
                "no-headingless-sections": !0,
                "no-http-props": !0,
                "check-punctuation": !1,
                "local-refs-exist": !0,
                "check-internal-slots": !1,
                "check-charset": !1,
                "privsec-section": !1
            },
            pluralize: !1,
            specStatus: "base",
            highlightVars: !0,
            addSectionLinks: !0
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "check-charset",
            s = {
                en: {
                    description: "Document must only contain one `<meta>` tag with charset set to 'utf-8'",
                    howToFix: 'Add this line in your document `<head>` section - `<meta charset="utf-8">` or set charset to "utf-8" if not set already.'
                }
            },
            c = n.lang in s ? n.lang : "en";
        const u = new t.default(a, (function(e, t) {
            const n = t.querySelectorAll("meta[charset]"),
                r = [];
            for (const e of n) r.push(e.getAttribute("charset").trim().toLowerCase());
            return r.includes("utf-8") && 1 === n.length ? [] : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                occurrences: n.length
            }, s[c])
        }));
        e.rule = u
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "check-internal-slots",
            s = {
                en: {
                    description: "Internal slots should be preceded by a '.'",
                    howToFix: "Add a '.' between the elements mentioned.",
                    help: "See developer console."
                }
            },
            c = n.lang in s ? n.lang : "en";
        const u = new t.default(a, (function(e, t) {
            const n = [...t.querySelectorAll("var+a")].filter(({
                previousSibling: {
                    nodeName: e
                }
            }) => {
                return e && "VAR" === e
            });
            if (n.length) return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                offendingElements: n,
                occurrences: n.length
            }, s[c])
        }));
        e.rule = u
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "check-punctuation",
            s = [".", ":", "!", "?"],
            c = s.map(e => '"'.concat(e, '"')).join(", "),
            u = {
                en: {
                    description: "`p` elements should end with a punctuation mark.",
                    howToFix: "Please make sure `p` elements end with one of: ".concat(c, ".")
                }
            },
            l = n.lang in u ? n.lang : "en";
        const d = new t.default(a, (function(e, t) {
            const n = new RegExp("[".concat(s.join(""), "\\]]$|^ *$"), "m"),
                r = [...t.querySelectorAll("p:not(#back-to-top)")].filter(e => !n.test(e.textContent.trim()));
            if (r.length) return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                offendingElements: r,
                occurrences: r.length
            }, u[l])
        }));
        e.rule = d
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "local-refs-exist",
            s = {
                en: {
                    description: "Broken local reference found in document.",
                    howToFix: "Please fix the links mentioned.",
                    help: "See developer console."
                }
            },
            c = n.lang in s ? n.lang : "en";
        const u = new t.default(a, (function(e, t) {
            const n = [...t.querySelectorAll("a[href^='#']")].filter(l);
            if (n.length) return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                offendingElements: n,
                occurrences: n.length
            }, s[c])
        }));

        function l(e) {
            const t = e.getAttribute("href").substring(1);
            return !e.ownerDocument.getElementById(t)
        }
        e.rule = u
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "no-headingless-sections",
            s = {
                en: {
                    description: "All sections must start with a `h2-6` element.",
                    howToFix: "Add a `h2-6` to the offending section or use a `<div>`.",
                    help: "See developer console."
                },
                nl: {
                    description: "Alle secties moeten beginnen met een `h2-6` element.",
                    howToFix: "Voeg een `h2-6` toe aan de conflicterende sectie of gebruik een `<div>`.",
                    help: "Zie de developer console."
                }
            },
            c = n.lang in s ? n.lang : "en",
            u = ({
                firstElementChild: e
            }) => null === e || !1 === /^h[1-6]$/.test(e.localName);
        const l = new t.default(a, (function(e, t) {
            const n = [...t.querySelectorAll("section")].filter(u);
            if (n.length) return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                offendingElements: n,
                occurrences: n.length
            }, s[c])
        }));
        e.rule = l
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(4), n(3)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rule = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const a = "no-http-props",
            s = {
                en: {
                    description: "Insecure URLs are not allowed in `respecConfig`.",
                    howToFix: "Please change the following properties to 'https://': "
                }
            },
            c = n.lang in s ? n.lang : "en";
        const u = new t.default(a, (function(e, t) {
            if (!t.location.href.startsWith("http")) return;
            const n = Object.getOwnPropertyNames(e).filter(e => e.endsWith("URI") || "prevED" === e).filter(n => new URL(e[n], t.location.href).href.startsWith("http://"));
            if (!n.length) return;
            const r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                name: a,
                occurrences: n.length
            }, s[c]);
            return r.howToFix += "".concat(n.map(e => "`".concat(e, "`")).join(", "), "."), r
        }));
        e.rule = u
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(44)], void 0 === (o = function(e, t) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            e.noReSpecCSS && r.remove()
        }, e.name = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.name = "core/style";
        const r = document.createElement("style");
        r.id = "respec-mainstyle", r.textContent = t.default, document.head.appendChild(r)
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '/*****************************************************************\n * ReSpec 3 CSS\n * Robin Berjon - http://berjon.com/\n *****************************************************************/\n\n@keyframes pop {\n  0% {\n    transform: scale(1, 1);\n  }\n  25% {\n    transform: scale(1.25, 1.25);\n    opacity: 0.75;\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n/* Override code highlighter background */\n.hljs {\n  background: transparent !important;\n}\n\n/* --- INLINES --- */\nh1 abbr,\nh2 abbr,\nh3 abbr,\nh4 abbr,\nh5 abbr,\nh6 abbr,\na abbr {\n  border: none;\n}\n\ndfn {\n  font-weight: bold;\n}\n\na.internalDFN {\n  color: inherit;\n  border-bottom: 1px solid #99c;\n  text-decoration: none;\n}\n\na.externalDFN {\n  color: inherit;\n  border-bottom: 1px dotted #ccc;\n  text-decoration: none;\n}\n\na.bibref {\n  text-decoration: none;\n}\n\n.respec-offending-element:target {\n  animation: pop 0.25s ease-in-out 0s 1;\n}\n\n.respec-offending-element,\na[href].respec-offending-element {\n  text-decoration: red wavy underline;\n}\n@supports not (text-decoration: red wavy underline) {\n  .respec-offending-element:not(pre) {\n    display: inline-block;\n  }\n  .respec-offending-element {\n    /* Red squiggly line */\n    background: url(data:image/gif;base64,R0lGODdhBAADAPEAANv///8AAP///wAAACwAAAAABAADAEACBZQjmIAFADs=)\n      bottom repeat-x;\n  }\n}\n\n#references :target {\n  background: #eaf3ff;\n  animation: pop 0.4s ease-in-out 0s 1;\n}\n\ncite .bibref {\n  font-style: normal;\n}\n\ncode {\n  color: #c83500;\n}\n\nth code {\n  color: inherit;\n}\n\na[href].orcid {\n    padding-left: 4px;\n    padding-right: 4px;\n}\n\na[href].orcid > svg {\n    margin-bottom: -2px;\n}\n\n/* --- TOC --- */\n\n.toc a,\n.tof a {\n  text-decoration: none;\n}\n\na .secno,\na .figno {\n  color: #000;\n}\n\nul.tof,\nol.tof {\n  list-style: none outside none;\n}\n\n.caption {\n  margin-top: 0.5em;\n  font-style: italic;\n}\n\n/* --- TABLE --- */\n\ntable.simple {\n  border-spacing: 0;\n  border-collapse: collapse;\n  border-bottom: 3px solid #005a9c;\n}\n\n.simple th {\n  background: #005a9c;\n  color: #fff;\n  padding: 3px 5px;\n  text-align: left;\n}\n\n.simple th a {\n  color: #fff;\n  padding: 3px 5px;\n  text-align: left;\n}\n\n.simple th[scope="row"] {\n  background: inherit;\n  color: inherit;\n  border-top: 1px solid #ddd;\n}\n\n.simple td {\n  padding: 3px 10px;\n  border-top: 1px solid #ddd;\n}\n\n.simple tr:nth-child(even) {\n  background: #f0f6ff;\n}\n\n/* --- DL --- */\n\n.section dd > p:first-child {\n  margin-top: 0;\n}\n\n.section dd > p:last-child {\n  margin-bottom: 0;\n}\n\n.section dd {\n  margin-bottom: 1em;\n}\n\n.section dl.attrs dd,\n.section dl.eldef dd {\n  margin-bottom: 0;\n}\n\n#issue-summary > ul,\n.respec-dfn-list {\n  column-count: 2;\n}\n\n#issue-summary li,\n.respec-dfn-list li {\n  list-style: none;\n}\n\ndetails.respec-tests-details {\n  margin-left: 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n\ndetails.respec-tests-details > * {\n  padding-right: 2em;\n}\n\ndetails.respec-tests-details[open] {\n  z-index: 999999;\n  position: absolute;\n  border: thin solid #cad3e2;\n  border-radius: 0.3em;\n  background-color: white;\n  padding-bottom: 0.5em;\n}\n\ndetails.respec-tests-details[open] > summary {\n  border-bottom: thin solid #cad3e2;\n  padding-left: 1em;\n  margin-bottom: 1em;\n  line-height: 2em;\n}\n\ndetails.respec-tests-details > ul {\n  width: 100%;\n  margin-top: -0.3em;\n}\n\ndetails.respec-tests-details > li {\n  padding-left: 1em;\n}\n\na[href].self-link:hover {\n  opacity: 1;\n  text-decoration: none;\n  background-color: transparent;\n}\n\nh2,\nh3,\nh4,\nh5,\nh6 {\n  position: relative;\n}\n\naside.example .marker > a.self-link {\n  color: inherit;\n}\n\nh2 > a.self-link,\nh3 > a.self-link,\nh4 > a.self-link,\nh5 > a.self-link,\nh6 > a.self-link {\n  border: none;\n  color: inherit;\n  font-size: 83%;\n  height: 2em;\n  left: -1.6em;\n  opacity: 0.5;\n  position: absolute;\n  text-align: center;\n  text-decoration: none;\n  top: 0;\n  transition: opacity 0.2s;\n  width: 2em;\n}\n\nh2 > a.self-link::before,\nh3 > a.self-link::before,\nh4 > a.self-link::before,\nh5 > a.self-link::before,\nh6 > a.self-link::before {\n  content: "§";\n  display: block;\n}\n\n@media (max-width: 767px) {\n  dd {\n    margin-left: 0;\n  }\n\n  /* Don\'t position self-link in headings off-screen */\n  h2 > a.self-link,\n  h3 > a.self-link,\n  h4 > a.self-link,\n  h5 > a.self-link,\n  h6 > a.self-link {\n    left: auto;\n    top: auto;\n  }\n}\n\n@media print {\n  .removeOnSave {\n    display: none;\n  }\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!e.specStatus) {
                const t = "`respecConfig.specStatus` missing. Defaulting to 'base'.";
                e.specStatus = "base", (0, n.pub)("warn", t)
            }
            let r = "W3C-";
            switch (e.specStatus.toUpperCase()) {
                case "CG-DRAFT":
                case "CG-FINAL":
                case "BG-DRAFT":
                case "BG-FINAL":
                    r = e.specStatus.toLowerCase();
                    break;
                case "FPWD":
                case "LC":
                case "WD-NOTE":
                case "LC-NOTE":
                    r += "WD";
                    break;
                case "WG-NOTE":
                case "FPWD-NOTE":
                    r += "WG-NOTE.css";
                    break;
                case "UNOFFICIAL":
                    r += "UD";
                    break;
                case "FINDING":
                case "FINDING-DRAFT":
                case "BASE":
                    r = "base.css";
                    break;
                default:
                    r += e.specStatus
            }
            const o = function(e) {
                let t = "";
                switch (e) {
                    case null:
                    case !0:
                        t = "2016";
                        break;
                    default:
                        e && !isNaN(e) && (t = e.toString().trim())
                }
                return t
            }(e.useExperimentalStyles || "2016");
            o && !e.noToc && (0, n.sub)("end-all", () => {
                ! function(e, t) {
                    const n = e.createElement("script");
                    location.hash && n.addEventListener("load", () => {
                        window.location.href = location.hash
                    }, {
                        once: !0
                    });
                    n.src = "https://www.w3.org/scripts/TR/".concat(t, "/fixup.js"), e.body.appendChild(n)
                }(document, o)
            }, {
                once: !0
            });
            const i = o ? "".concat(o, "/") : "",
                a = "https://www.w3.org/StyleSheets/TR/".concat(i).concat(r);
            (0, t.linkCSS)(document, a);
            const s = (c = a, e => {
                const t = e.querySelector('head link[href="'.concat(c, '"]'));
                e.querySelector("head").append(t)
            });
            var c;
            (0, n.sub)("beforesave", s)
        }, e.name = void 0;
        e.name = "w3c/style";
        const r = [{
            hint: "preconnect",
            href: "https://www.w3.org"
        }, {
            hint: "preload",
            href: "https://www.w3.org/scripts/TR/2016/fixup.js",
            as: "script"
        }, {
            hint: "preload",
            href: "https://www.w3.org/StyleSheets/TR/2016/base.css",
            as: "style"
        }, {
            hint: "preload",
            href: "https://www.w3.org/StyleSheets/TR/2016/logos/W3C",
            as: "image"
        }].map(t.createResourceHint).reduce((e, t) => (e.appendChild(t), e), document.createDocumentFragment());
        r.appendChild(function() {
            const e = document.createElement("link");
            return e.rel = "stylesheet", e.href = "https://www.w3.org/StyleSheets/TR/2016/base.css", e.classList.add("removeOnSave"), e
        }()), document.head.querySelector("meta[name=viewport]") || r.prepend(function() {
            const e = document.createElement("meta");
            return e.name = "viewport", e.content = (0, t.toKeyValuePairs)({
                width: "device-width",
                "initial-scale": "1",
                "shrink-to-fit": "no"
            }).replace(/"/g, ""), e
        }()), document.head.prepend(r)
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(3)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.name = void 0;
        e.name = "w3c/l10n";
        const n = {
            en: {
                status_at_publication: "This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the <a href='https://www.w3.org/TR/'>W3C technical reports index</a> at https://www.w3.org/TR/."
            },
            ko: {
                status_at_publication: "This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the <a href='https://www.w3.org/TR/'>W3C technical reports index</a> at https://www.w3.org/TR/."
            },
            zh: {
                status_at_publication: "本章节描述了本文档的发布状态。其它更新版本可能会覆盖本文档。W3C的文档列 表和最新版本可通过<a href='https://www.w3.org/TR/'>W3C技术报告</a>索引访问。"
            },
            ja: {
                status_at_publication: "この節には、公開時点でのこの文書の位置づけが記されている。他の文書によって置き換えられる可能性がある。現時点でのW3Cの発行文書とこのテクニカルレポートの最新版は、下記から参照できる。 <a href='https://www.w3.org/TR/'>W3C technical reports index</a> (https://www.w3.org/TR/)"
            },
            nl: {
                status_at_publication: "This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the <a href='https://www.w3.org/TR/'>W3C technical reports index</a> at https://www.w3.org/TR/."
            },
            es: {
                status_at_publication: "Esta sección describe el estado del presente documento al momento de su publicación. El presente documento puede ser remplazado por otros. Una lista de las publicaciones actuales del W3C y la última revisión del presente informe técnico puede hallarse en http://www.w3.org/TR/ <a href='https://www.w3.org/TR/'>el índice de informes técnicos</a> del W3C."
            }
        };
        Object.keys(n).forEach(e => {
            Object.assign(t.l10n[e], n[e])
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(3), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            if (!e.hasOwnProperty("github") || !e.github) return;
            if ("object" == typeof e.github && !e.github.hasOwnProperty("repoURL")) {
                const e = "Config option `[github](https://github.com/w3c/respec/wiki/github)` is missing property `repoURL`.";
                return void(0, n.pub)("error", e)
            }
            let t, i = e.github.repoURL || e.github;
            i.endsWith("/") || (i += "/");
            try {
                t = new URL(i, "https://github.com")
            } catch (e) {
                return void(0, n.pub)("error", "`respecConf.github` is not a valid URL? (".concat(t, ")"))
            }
            if ("https://github.com" !== t.origin) {
                const e = "`respecConf.github` must be HTTPS and pointing to GitHub. (".concat(t, ")");
                return void(0, n.pub)("error", e)
            }
            const [s, c] = t.pathname.split("/").filter(e => e);
            if (!s || !c) {
                const e = "`respecConf.github` URL needs a path with, for example, w3c/my-spec";
                return void(0, n.pub)("error", e)
            }
            const u = e.github.branch || "gh-pages",
                l = new URL("./issues/", t).href,
                d = {
                    edDraftURI: "https://".concat(s.toLowerCase(), ".github.io/").concat(c, "/"),
                    githubToken: void 0,
                    githubUser: void 0,
                    issueBase: l,
                    atRiskBase: l,
                    otherLinks: [],
                    pullBase: new URL("./pulls/", t).href,
                    shortName: c
                };
            if ("CCWG" !== e.specStatus) {
                a.participate, "GitHub ".concat(s, "/").concat(c), a.file_a_bug, a.commit_history, new URL("./commits/".concat(u), t.href).href
            }
            let f = "https://respec.org/github/".concat(s, "/").concat(c, "/");
            if (e.githubAPI)
                if (new URL(e.githubAPI).hostname === window.parent.location.hostname) f = e.githubAPI;
                else {
                    const e = "`respecConfig.githubAPI` should not be added manually.";
                    (0, n.pub)("warn", e)
                } const p = {
                    branch: u,
                    repoURL: t.href
                },
                h = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(n, !0).forEach((function(t) {
                            o(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, d, {}, e, {
                    github: p,
                    githubAPI: f
                });
            Object.assign(e, h), e.otherLinks.unshift(otherLink)
        }, e.name = void 0;
        e.name = "core/github";
        const i = {
                en: {
                    file_a_bug: "File a bug",
                    participate: "Participate",
                    commit_history: "Commit history"
                },
                nl: {
                    commit_history: "Revisiehistorie",
                    file_a_bug: "Dien een melding in",
                    participate: "Doe mee"
                },
                es: {
                    commit_history: "Historia de cambios",
                    file_a_bug: "Nota un bug",
                    participate: "Participe"
                }
            },
            a = i[t.lang in i ? t.lang : "en"]
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function() {
            const e = document.querySelectorAll("[data-include]"),
                r = Array.from(e).map(async e => {
                    const r = e.dataset.include;
                    if (!r) return;
                    const o = "include-".concat(String(Math.random()).substr(2));
                    e.dataset.includeId = o;
                    try {
                        const e = await fetch(r);
                        ! function(e, t, r) {
                            const o = document.querySelector("[data-include-id=".concat(t, "]")),
                                i = o.ownerDocument,
                                a = (0, n.runTransforms)(e, o.dataset.oninclude, r),
                                s = "string" == typeof o.dataset.includeReplace;
                            let c;
                            switch (o.dataset.includeFormat) {
                                case "text":
                                    s ? (c = i.createTextNode(a), o.replaceWith(c)) : o.textContent = a;
                                    break;
                                default:
                                    if (o.innerHTML = a, s) {
                                        for (c = i.createDocumentFragment(); o.hasChildNodes();) c.append(o.removeChild(o.firstChild));
                                        o.replaceWith(c)
                                    }
                            }
                            i.contains(o) && function(e) {
                                ["data-include", "data-include-format", "data-include-replace", "data-include-id", "oninclude"].forEach(t => e.removeAttribute(t))
                            }(o)
                        }(await e.text(), o, r)
                    } catch (n) {
                        const o = "`data-include` failed: `".concat(r, "` (").concat(n.message, "). See console for details.");
                        console.error("data-include failed for element: ", e, n), (0, t.pub)("error", o)
                    }
                });
            await Promise.all(r)
        }, e.name = void 0;
        e.name = "core/data-include"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(50), n(51), n(52), n(2), n(1), n(53)], void 0 === (o = function(e, t, n, r, o, i, a, s) {
        "use strict";

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["", ""]);
            return u = function() {
                return e
            }, e
        }

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(n, !0).forEach((function(t) {
                    f(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            e.isUnofficial = "unofficial" === e.specStatus, e.isUnofficial && !Array.isArray(e.logos) && (e.logos = []);
            if (e.isCCBY = "cc-by" === e.license, e.isW3CSoftAndDocLicense = "w3c-software-doc" === e.license, ["cc-by"].includes(e.license)) {
                let t = 'You cannot use license "`'.concat(e.license, '`" with W3C Specs. ');
                t += 'Please set `respecConfig.license: "w3c-software-doc"` instead.', (0, a.pub)("error", t)
            }
            e.licenseInfo = C[e.license], e.isCGBG = x.includes(e.specStatus), e.isCGFinal = e.isCGBG && e.specStatus.endsWith("G-FINAL"), e.isBasic = "base" === e.specStatus, e.isRegular = !e.isCGBG && !e.isBasic, e.specStatus || (0, a.pub)("error", "Missing required configuration: `specStatus`");
            e.isRegular && !e.shortName && (0, a.pub)("error", "Missing required configuration: `shortName`");
            if (e.testSuiteURI) {
                const t = new URL(e.testSuiteURI, location.href),
                    {
                        host: n,
                        pathname: r
                    } = t;
                if ("github.com" === n && r.startsWith("/w3c/web-platform-tests/")) {
                    const t = "Web Platform Tests have moved to a new Github Organization at https://github.com/web-platform-tests. Please update your [`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI) to point to the " + "new tests repository (e.g., https://github.com/web-platform-tests/wpt/".concat(e.shortName, " ).");
                    (0, a.pub)("warn", t)
                }
            }
            e.title = document.title || "No Title", document.title && e.isPreview && e.prNumber && (document.title = "Preview of PR #".concat(e.prNumber, ": ").concat(document.title));
            e.subtitle || (e.subtitle = "");
            if (e.publishDate = E(e, "publishDate", document.lastModified), e.publishYear = e.publishDate.getUTCFullYear(), e.publishHumanDate = p.format(e.publishDate), e.isNoTrack = w.includes(e.specStatus), e.isRecTrack = !e.noRecTrack && v.concat(y).includes(e.specStatus), e.isMemberSubmission = "Member-SUBM" === e.specStatus, e.isMemberSubmission) {
                const t = {
                    alt: "W3C Member Submission",
                    href: "https://www.w3.org/Submission/",
                    src: "https://www.w3.org/Icons/member_subm-v.svg",
                    width: "211"
                };
                e.logos.push(d({}, S, {}, t))
            }
            if (e.isTeamSubmission = "Team-SUBM" === e.specStatus, e.isTeamSubmission) {
                const t = {
                    alt: "W3C Team Submission",
                    href: "https://www.w3.org/TeamSubmission/",
                    src: "https://www.w3.org/Icons/team_subm-v.svg",
                    width: "211"
                };
                e.logos.push(d({}, S, {}, t))
            }
            e.isSubmission = e.isMemberSubmission || e.isTeamSubmission, e.anOrA = k.includes(e.specStatus) ? "an" : "a", e.isTagFinding = "finding" === e.specStatus || "draft-finding" === e.specStatus, e.edDraftURI || (e.edDraftURI = "", "ED" !== e.specStatus && "CCWG" !== e.specStatus || (0, a.pub)("warn", "Editor's Drafts should set edDraftURI."));
            e.maturity = h[e.specStatus] ? h[e.specStatus] : e.specStatus;
            let c = "TR";
            "Member-SUBM" === e.specStatus ? c = "Submission" : "Team-SUBM" === e.specStatus && (c = "TeamSubmission");
            e.isRegular && (e.thisVersion = "https://www.w3.org/".concat(c, "/").concat(e.publishDate.getUTCFullYear(), "/").concat(e.maturity, "-").concat(e.shortName, "-").concat((0, t.concatDate)(e.publishDate), "/"));
            "ED" === e.specStatus && (e.thisVersion = e.edDraftURI);
            "CCWG" === e.specStatus && (e.thisVersion = e.edDraftURI);
            e.isRegular && (e.latestVersion = "https://www.w3.org/".concat(c, "/").concat(e.shortName, "/"));
            e.isTagFinding && (e.latestVersion = "https://www.w3.org/2001/tag/doc/".concat(e.shortName), e.thisVersion = "".concat(e.latestVersion, "-").concat(t.ISODate.format(e.publishDate)));
            if (e.previousPublishDate) {
                e.previousMaturity || e.isTagFinding || (0, a.pub)("error", "`previousPublishDate` is set, but not `previousMaturity`."), e.previousPublishDate = E(e, "previousPublishDate");
                const n = h[e.previousMaturity] ? h[e.previousMaturity] : e.previousMaturity;
                e.isTagFinding ? e.prevVersion = "".concat(e.latestVersion, "-").concat(t.ISODate.format(e.previousPublishDate)) : e.isCGBG ? e.prevVersion = e.prevVersion || "" : e.isBasic ? e.prevVersion = "" : e.prevVersion = "https://www.w3.org/TR/".concat(e.previousPublishDate.getUTCFullYear(), "/").concat(n, "-").concat(e.shortName, "-").concat((0, t.concatDate)(e.previousPublishDate), "/")
            } else e.specStatus.endsWith("NOTE") || "FPWD" === e.specStatus || "FPLC" === e.specStatus || "ED" === e.specStatus || "CCWG" === e.specStatus || e.noRecTrack || e.isNoTrack || e.isSubmission || (0, a.pub)("error", "Document on track but no previous version: Add `previousMaturity`, and `previousPublishDate` to ReSpec's config."), e.prevVersion || (e.prevVersion = "");
            e.prevRecShortname && !e.prevRecURI && (e.prevRecURI = "https://www.w3.org/TR/".concat(e.prevRecShortname));
            const l = function(e) {
                if (e.name || (0, a.pub)("error", "All authors and editors must have a name."), e.orcid) try {
                    e.orcid = function(e) {
                        const t = new URL(e, "https://orcid.org/");
                        if ("https://orcid.org" !== t.origin) throw new Error('The origin should be "https://orcid.org", not "'.concat(t.origin, '".'));
                        const n = t.pathname.slice(1).replace(/\/$/, "");
                        if (!/^\d{4}-\d{4}-\d{4}-\d{3}(\d|X)$/.test(n)) throw new Error('ORCIDs have the format "1234-1234-1234-1234", not "'.concat(n, '"'));
                        const r = n[n.length - 1],
                            o = (12 - n.split("").slice(0, -1).filter(e => /\d/.test(e)).map(Number).reduce((e, t) => 2 * (e + t), 0) % 11) % 11,
                            i = 10 === o ? "X" : String(o);
                        if (r !== i) throw new Error('"'.concat(n, '" has an invalid checksum.'));
                        return t.href
                    }(e.orcid)
                } catch (t) {
                    (0, a.pub)("error", '"'.concat(e.orcid, '" is not an ORCID. ').concat(t.message)), delete e.orcid
                }
            };
            e.formerEditors || (e.formerEditors = []);
            if (e.editors) {
                e.editors.forEach(l);
                for (let t = 0; t < e.editors.length; t++) {
                    const n = e.editors[t];
                    "retiredDate" in n && (e.formerEditors.push(n), e.editors.splice(t--, 1))
                }
            }
            e.editors && 0 !== e.editors.length || (0, a.pub)("error", "At least one editor is required");
            e.formerEditors.length && e.formerEditors.forEach(l);
            e.authors && e.authors.forEach(l);
            e.multipleEditors = e.editors && e.editors.length > 1, e.multipleFormerEditors = e.formerEditors.length > 1, e.multipleAuthors = e.authors && e.authors.length > 1, (e.alternateFormats || []).forEach(e => {
                e.uri && e.label || (0, a.pub)("error", "All alternate formats must have a uri and a label.")
            }), e.multipleAlternates = e.alternateFormats && e.alternateFormats.length > 1, e.alternatesHTML = e.alternateFormats && (0, t.joinAnd)(e.alternateFormats, e => {
                let t = e.hasOwnProperty("lang") && e.lang ? " hreflang='".concat(e.lang, "'") : "";
                return t += e.hasOwnProperty("type") && e.type ? " type='".concat(e.type, "'") : "", "<a rel='alternate' href='".concat(e.uri, "'").concat(t, ">").concat(e.label, "</a>")
            }), e.bugTracker && (e.bugTracker.new && e.bugTracker.open ? e.bugTrackerHTML = "<a href='".concat(e.bugTracker.new, "'>").concat(e.l10n.file_a_bug, "</a> ").concat(e.l10n.open_parens, "<a href='").concat(e.bugTracker.open, "'>").concat(e.l10n.open_bugs, "</a>").concat(e.l10n.close_parens) : e.bugTracker.open ? e.bugTrackerHTML = "<a href='".concat(e.bugTracker.open, "'>open bugs</a>") : e.bugTracker.new && (e.bugTrackerHTML = "<a href='".concat(e.bugTracker.new, "'>file a bug</a>")));
            e.copyrightStart && e.copyrightStart == e.publishYear && (e.copyrightStart = "");
            e.longStatus = b[e.specStatus], e.textStatus = g[e.specStatus], m[e.specStatus] && (e.rdfStatus = m[e.specStatus]);
            e.showThisVersion = !e.isNoTrack || e.isTagFinding, e.showPreviousVersion = "FPWD" !== e.specStatus && "FPLC" !== e.specStatus && "ED" !== e.specStatus && "CCWG" !== e.specStatus && !e.isNoTrack && !e.isSubmission, e.specStatus.endsWith("NOTE") && !e.prevVersion && (e.showPreviousVersion = !1);
            e.isTagFinding && (e.showPreviousVersion = !!e.previousPublishDate);
            e.notYetRec = e.isRecTrack && "REC" !== e.specStatus, e.isRec = e.isRecTrack && "REC" === e.specStatus, e.isRec && !e.errata && (0, a.pub)("error", "Recommendations must have an errata link.");
            e.notRec = "REC" !== e.specStatus, e.prependW3C = !e.isUnofficial, e.isED = "ED" === e.specStatus, e.isCCWG = "CCWG" === e.specStatus, e.isCR = "CR" === e.specStatus, e.isPR = "PR" === e.specStatus, e.isPER = "PER" === e.specStatus, e.isMO = "MO" === e.specStatus, e.isNote = ["FPWD-NOTE", "WG-NOTE"].includes(e.specStatus), e.isIGNote = "IG-NOTE" === e.specStatus, e.dashDate = t.ISODate.format(e.publishDate), e.publishISODate = e.publishDate.toISOString(), e.shortISODate = t.ISODate.format(e.publishDate), e.hasOwnProperty("wgPatentURI") && !Array.isArray(e.wgPatentURI) ? Object.defineProperty(e, "wgId", {
                get() {
                    const e = this.wgPatentURI.split("/"),
                        t = e.findIndex(e => "pp-impl" === e) + 1;
                    return e[t] || ""
                }
            }) : e.wgId = e.wgId ? e.wgId : "";
            const f = (e.isCGBG ? n.default : o.default)(e);
            document.body.prepend(f), document.body.classList.add("h-entry");
            const O = document.getElementById("sotd") || document.createElement("section");
            !e.isCGBG && e.isNoTrack && !e.isTagFinding || O.id || (0, a.pub)("error", "A custom SotD paragraph is required for your type of document.");
            O.id = O.id || "sotd", O.classList.add("introductory");
            const T = [e.wg, e.wgURI, e.wgPatentURI];
            T.some(e => Array.isArray(e)) && !T.every(e => Array.isArray(e)) && (0, a.pub)("error", "If one of '`wg`', '`wgURI`', or '`wgPatentURI`' is an array, they all have to be.");
            e.isCGBG && !e.wg && (0, a.pub)("error", "[`wg`](https://github.com/w3c/respec/wiki/wg) configuration option is required for this kind of document.");
            if (Array.isArray(e.wg)) {
                e.multipleWGs = e.wg.length > 1, e.wgHTML = (0, t.joinAnd)(e.wg, (t, n) => "the <a href='".concat(e.wgURI[n], "'>").concat(t, "</a>"));
                const n = [];
                for (let t = 0, r = e.wg.length; t < r; t++) n.push("a <a href='".concat(e.wgPatentURI[t], "' rel='disclosure'>") + "public list of any patent disclosures  (".concat(e.wg[t], ")</a>"));
                e.wgPatentHTML = (0, t.joinAnd)(n)
            } else e.multipleWGs = !1, e.wg && (e.wgHTML = "the <a href='".concat(e.wgURI, "'>").concat(e.wg, "</a>"));
            "PR" !== e.specStatus || e.crEnd || (0, a.pub)("error", '`specStatus` is "PR" but no `crEnd` is specified (needed to indicate end of previous CR).');
            "CR" !== e.specStatus || e.crEnd || (0, a.pub)("error", '`specStatus` is "CR", but no `crEnd` is specified in Respec config.');
            e.crEnd = E(e, "crEnd"), e.humanCREnd = p.format(e.crEnd), "PR" !== e.specStatus || e.prEnd || (0, a.pub)("error", '`specStatus` is "PR" but no `prEnd` is specified.');
            e.prEnd = E(e, "prEnd"), e.humanPREnd = p.format(e.prEnd), "PER" !== e.specStatus || e.perEnd || (0, a.pub)("error", "Status is PER but no perEnd is specified");
            e.perEnd = E(e, "perEnd"), e.humanPEREnd = p.format(e.perEnd), e.recNotExpected = !(!e.noRecTrack && !e.recNotExpected) || !e.isRecTrack && "WD" == e.maturity && "FPWD-NOTE" !== e.specStatus, e.noRecTrack && v.includes(e.specStatus) && (0, a.pub)("error", 'Document configured as [`noRecTrack`](https://github.com/w3c/respec/wiki/noRecTrack), but its status ("'.concat(e.specStatus, '") puts it on the W3C Rec Track. Status cannot be any of: ').concat(v.join(", "), ". [More info](https://github.com/w3c/respec/wiki/noRecTrack)."));
            e.isIGNote && !e.charterDisclosureURI && (0, a.pub)("error", "IG-NOTEs must link to charter's disclosure section using `charterDisclosureURI`.");
            i.default.bind(O)(u(), function(e, t) {
                const n = d({}, function(e, {
                    isTagFinding: t = !1
                }) {
                    const n = e.cloneNode(!0),
                        r = document.createDocumentFragment();
                    for (; n.hasChildNodes() && (n.firstChild.nodeType !== Node.ELEMENT_NODE || "section" !== n.firstChild.localName);) r.appendChild(n.firstChild);
                    t && !r.hasChildNodes() && (0, a.pub)("warn", "ReSpec does not support automated SotD generation for TAG findings, please add the prerequisite content in the 'sotd' section");
                    return {
                        additionalContent: r,
                        additionalSections: n.childNodes
                    }
                }(t, e), {
                    get mailToWGPublicList() {
                        return "mailto:".concat(e.wgPublicList, "@w3.org")
                    },
                    get mailToWGPublicListWithSubject() {
                        const t = e.subjectPrefix ? "?subject=".concat(encodeURIComponent(e.subjectPrefix)) : "";
                        return this.mailToWGPublicList + t
                    },
                    get mailToWGPublicListSubscription() {
                        return "mailto:".concat(e.wgPublicList, "-request@w3.org?subject=subscribe")
                    }
                });
                return (e.isCGBG ? r.default : s.default)(e, n)
            }(e, O)), !e.implementationReportURI && e.isCR && (0, a.pub)("error", "CR documents must have an [`implementationReportURI`](https://github.com/w3c/respec/wiki/implementationReportURI) that describes [implementation experience](https://www.w3.org/2019/Process-20190301/#implementation-experience).");
            !e.implementationReportURI && e.isPR && (0, a.pub)("warn", "PR documents should include an  [`implementationReportURI`](https://github.com/w3c/respec/wiki/implementationReportURI) that describes [implementation experience](https://www.w3.org/2019/Process-20190301/#implementation-experience).");
            (0, a.pub)("amend-user-config", {
                publishISODate: e.publishISODate,
                generatedSubtitle: "".concat(e.longStatus, " ").concat(e.publishHumanDate)
            })
        }, e.name = void 0, n = c(n), r = c(r), o = c(o), i = c(i), s = c(s);
        e.name = "w3c/headers";
        const p = new Intl.DateTimeFormat(["en-AU"], {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "2-digit"
            }),
            h = {
                LS: "WD",
                LD: "WD",
                FPWD: "WD",
                LC: "WD",
                FPLC: "WD",
                "FPWD-NOTE": "NOTE",
                "WD-NOTE": "WD",
                "LC-NOTE": "LC",
                "IG-NOTE": "NOTE",
                "WG-NOTE": "NOTE"
            },
            m = {
                NOTE: "w3p:NOTE",
                WD: "w3p:WD",
                LC: "w3p:LastCall",
                CR: "w3p:CR",
                PR: "w3p:PR",
                REC: "w3p:REC",
                PER: "w3p:PER",
                RSCND: "w3p:RSCND"
            },
            g = {
                NOTE: "Working Group Note",
                "WG-NOTE": "Working Group Note",
                "CG-NOTE": "Co-ordination Group Note",
                "IG-NOTE": "Interest Group Note",
                "Member-SUBM": "Member Submission",
                "Team-SUBM": "Team Submission",
                MO: "Member-Only Document",
                ED: "Editor's Draft",
                CCWG: "CCWG Editor's Draft",
                LS: "Living Standard",
                LD: "Living Document",
                FPWD: "First Public Working Draft",
                WD: "Working Draft",
                "FPWD-NOTE": "Working Group Note",
                "WD-NOTE": "Working Draft",
                "LC-NOTE": "Working Draft",
                FPLC: "First Public and Last Call Working Draft",
                LC: "Last Call Working Draft",
                CR: "Candidate Recommendation",
                PR: "Proposed Recommendation",
                PER: "Proposed Edited Recommendation",
                REC: "Recommendation",
                RSCND: "Rescinded Recommendation",
                unofficial: "Unofficial Draft",
                base: "Document",
                finding: "TAG Finding",
                "draft-finding": "Draft TAG Finding",
                "CG-DRAFT": "Draft Community Group Report",
                "CG-FINAL": "Final Community Group Report",
                "BG-DRAFT": "Draft Business Group Report",
                "BG-FINAL": "Final Business Group Report"
            },
            b = d({}, g, {
                "FPWD-NOTE": "First Public Working Group Note",
                "LC-NOTE": "Last Call Working Draft"
            }),
            y = ["FPWD", "WD"],
            v = ["FPLC", "LC", "CR", "PR", "PER", "REC"],
            w = ["base", "BG-DRAFT", "BG-FINAL", "CG-DRAFT", "CG-FINAL", "draft-finding", "finding", "MO", "unofficial"],
            x = ["CG-DRAFT", "CG-FINAL", "BG-DRAFT", "BG-FINAL"],
            k = ["ED", "IG-NOTE", "CCWG"],
            C = {
                ccwg: {
                    name: "Certification Working Group",
                    short: "To be defined",
                    url: "www.example.com/license.html"
                }
            },
            S = Object.freeze({
                id: "",
                alt: "",
                href: "",
                src: "",
                height: "48",
                width: "72"
            });

        function E(e, n, r = new Date) {
            const o = e[n] ? new Date(e[n]) : new Date(r);
            if (Number.isFinite(o.valueOf())) {
                const e = t.ISODate.format(o);
                return new Date(e)
            }
            const i = "[`".concat(n, "`](https://github.com/w3c/respec/wiki/").concat(n, ") ") + 'is not a valid date: "'.concat(e[n], "\". Expected format 'YYYY-MM-DD'.");
            return (0, a.pub)("error", i), new Date(t.ISODate.format(new Date))
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(13), n(14), n(15)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            const e = C(['\n              <a href="https://www.w3.org/community/about/agreements/cla/"\n                >W3C Community Contributor License Agreement (CLA)</a\n              >. A human-readable\n              <a href="https://www.w3.org/community/about/agreements/cla-deed/"\n                >summary</a\n              >\n              is available.\n            ']);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = C(['\n              <a href="https://www.w3.org/community/about/agreements/fsa/"\n                >W3C Community Final Specification Agreement (FSA)</a\n              >. A human-readable\n              <a href="https://www.w3.org/community/about/agreements/fsa-deed/"\n                >summary</a\n              >\n              is available.\n            ']);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = C(["\n              ", " &amp;\n            "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = C(["\n            <p>\n              ", "\n              ", "\n            </p>\n          "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = C(["\n              <dt>\n                ", "\n              </dt>\n              ", "\n            "]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = C(["\n              <dt>\n                ", "\n              </dt>\n              ", "\n            "]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = C(["\n                    <dt>Previous editor's draft:</dt>\n                    <dd><a href=\"", '">', "</a></dd>\n                  "]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = C(["\n              ", "\n            "]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = C(['\n              <dt>Previous version:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = C(["\n              <dt>", "</dt>\n              <dd>", "</dd>\n            "]);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = C(['\n              <dt>Implementation report:</dt>\n              <dd>\n                <a href="', '"\n                  >', "</a\n                >\n              </dd>\n            "]);
            return g = function() {
                return e
            }, e
        }

        function b() {
            const e = C(['\n              <dt>Test suite:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return b = function() {
                return e
            }, e
        }

        function y() {
            const e = C(["\n              <dt>", '</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return y = function() {
                return e
            }, e
        }

        function v() {
            const e = C(["\n              <dt>", '</dt>\n              <dd>\n                <a href="', '">', "</a>\n              </dd>\n            "]);
            return v = function() {
                return e
            }, e
        }

        function w() {
            const e = C(["\n              <dt>", '</dt>\n              <dd>\n                <a class="u-url" href="', '"\n                  >', "</a\n                >\n              </dd>\n            "]);
            return w = function() {
                return e
            }, e
        }

        function x() {
            const e = C(['\n            <h2 id="subtitle">', "</h2>\n          "]);
            return x = function() {
                return e
            }, e
        }

        function k() {
            const e = C(['\n    <div class="head">\n      ', '\n      <h1 class="title p-name" id="title">', "</h1>\n      ", "\n      <h2>\n        ", '\n        <time class="dt-published" datetime="', '"\n          >', "</time\n        >\n      </h2>\n      <dl>\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        <dt>", "</dt>\n        ", "\n        ", "\n        ", "\n        ", "\n      </dl>\n      ", '\n      <p class="copyright">\n        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Copyright"\n          >Copyright</a\n        >\n        &copy;\n        ', "", "\n        ", "\n        the Contributors to the ", ' Specification, published by the\n        <a href="', '">', "</a> under the\n        ", '\n      </p>\n      <hr title="Separator for header" />\n    </div>\n  ']);
            return k = function() {
                return e
            }, e
        }

        function C(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t = i(t), n = i(n), r = i(r), o = i(o);
        e.default = e => (0, t.default)(k(), e.logos.map(r.default), e.title, e.subtitle ? (0, t.default)(x(), e.subtitle) : "", e.longStatus, e.dashDate, e.publishHumanDate, e.thisVersion ? (0, t.default)(w(), e.l10n.this_version, e.thisVersion, e.thisVersion) : "", e.latestVersion ? (0, t.default)(v(), e.l10n.latest_published_version, e.latestVersion, e.latestVersion) : "", e.edDraftURI ? (0, t.default)(y(), e.l10n.latest_editors_draft, e.edDraftURI, e.edDraftURI) : "", e.testSuiteURI ? (0, t.default)(b(), e.testSuiteURI, e.testSuiteURI) : "", e.implementationReportURI ? (0, t.default)(g(), e.implementationReportURI, e.implementationReportURI) : "", e.bugTrackerHTML ? (0, t.default)(m(), e.l10n.bug_tracker, [e.bugTrackerHTML]) : "", e.prevVersion ? (0, t.default)(h(), e.prevVersion, e.prevVersion) : "", e.isCGFinal ? "" : (0, t.default)(p(), e.prevED ? (0, t.default)(f(), e.prevED, e.prevED) : ""), e.multipleEditors ? e.l10n.editors : e.l10n.editor, (0, o.default)(e.editors), Array.isArray(e.formerEditors) && e.formerEditors.length > 0 ? (0, t.default)(d(), e.multipleFormerEditors ? e.l10n.former_editors : e.l10n.former_editor, (0, o.default)(e.formerEditors)) : "", e.authors ? (0, t.default)(l(), e.multipleAuthors ? e.l10n.authors : e.l10n.author, (0, o.default)(e.authors)) : "", e.otherLinks ? e.otherLinks.map(n.default) : "", e.alternateFormats ? (0, t.default)(u(), e.multipleAlternates ? "This document is also available in these non-normative formats:" : "This document is also available in this non-normative format:", [e.alternatesHTML]) : "", e.copyrightStart ? "".concat(e.copyrightStart, "-") : "", e.publishYear, e.additionalCopyrightHolders ? (0, t.default)(c(), [e.additionalCopyrightHolders]) : "", e.title, e.wgURI, e.wg, e.isCGFinal ? (0, t.default)(s()) : (0, t.default)(a()))
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2)], void 0 === (o = function(e, t) {
        "use strict";
        var n;

        function r() {
            const e = d(["\n                  with <code>", "</code> at the start of your\n                  email's subject\n                "]);
            return r = function() {
                return e
            }, e
        }

        function o() {
            const e = d(['\n          <p>\n            If you wish to make comments regarding this document, please send\n            them to\n            <a href="', '"\n              >', '@w3.org</a\n            >\n            (<a href="', '">subscribe</a>,\n            <a\n              href="', '"\n              >archives</a\n            >)', ".\n          </p>\n        "]);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = d(['\n            Please note that under the\n            <a href="https://www.w3.org/community/about/agreements/cla/"\n              >W3C Community Contributor License Agreement (CLA)</a\n            >\n            there is a limited opt-out and other conditions apply.\n          ']);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = d(['\n            Please note that under the\n            <a href="https://www.w3.org/community/about/agreements/final/"\n              >W3C Community Final Specification Agreement (FSA)</a\n            >\n            other conditions apply.\n          ']);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = d(['\n                    Instead, see\n                    <a href="', '">', "</a> for the\n                    Editor's draft.\n                  "]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = d(['\n                    of pull request\n                    <a href="', '">#', "</a>\n                  "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = d(['\n          <details class="annoying-warning" open="">\n            <summary\n              >This is a\n              preview', "</summary\n            >\n            <p>\n        LOL      Do not attempt to implement this version of the specification. Do\n              not reference this version as authoritative in any way.\n              ", "\n            </p>\n          </details>\n        "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = d(["\n    <h2>", "</h2>\n    ", '\n    <p>\n      This specification was published by the\n      <a href="', '">', "</a>. It is not a W3C Standard nor is it\n      on the W3C Standards Track.\n      ", '\n      Learn more about\n      <a href="https://www.w3.org/community/"\n        >W3C Community and Business Groups</a\n      >.\n    </p>\n    ', "\n    ", "\n    ", "\n    ", "\n  "]);
            return l = function() {
                return e
            }, e
        }

        function d(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.default = (e, n) => (0, t.default)(l(), e.l10n.sotd, e.isPreview ? (0, t.default)(u(), e.prUrl && e.prNumber ? (0, t.default)(c(), e.prUrl, e.prNumber) : "", e.edDraftURI ? (0, t.default)(s(), e.edDraftURI, e.edDraftURI) : "") : "", e.wgURI, e.wg, e.isCGFinal ? (0, t.default)(a()) : (0, t.default)(i()), e.sotdAfterWGinfo ? "" : n.additionalContent, e.wgPublicList ? (0, t.default)(o(), n.mailToWGPublicListWithSubject, e.wgPublicList, n.mailToWGPublicListSubscription, "https://lists.w3.org/Archives/Public/".concat(e.wgPublicList, "/"), e.subjectPrefix ? (0, t.default)(r(), e.subjectPrefix) : "") : "", e.sotdAfterWGinfo ? n.additionalContent : "", n.additionalSections)
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(0), n(1), n(13), n(14), n(15)], void 0 === (o = function(e, t, n, r, o, i, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c() {
            const e = D(["\n    Some Rights Reserved: this document is dual-licensed,\n    ", " and\n    ", ".\n  "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = D(["\n            ", " &amp;\n          "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = D(['\n    <p class="copyright">\n      <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Copyright"\n        >Copyright</a\n      >\n      &copy;\n      ', "", "\n      ", '\n      <a href="https://www.w3.org/"\n        ><abbr title="World Wide Web Consortium">W3C</abbr></a\n      ><sup>&reg;</sup> (<a href="https://www.csail.mit.edu/"\n        ><abbr title="Massachusetts Institute of Technology">MIT</abbr></a\n      >,\n      <a href="https://www.ercim.eu/"\n        ><abbr\n          title="European Research Consortium for Informatics and Mathematics"\n          >ERCIM</abbr\n        ></a\n      >, <a href="https://www.keio.ac.jp/">Keio</a>,\n      <a href="https://ev.buaa.edu.cn/">Beihang</a>). ', '\n      W3C <a href="', '">liability</a>,\n      <a href="', '">trademark</a> and ', " rules\n      apply.\n    </p>\n  "]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = D(['<p class="copyright">Copyright &copy; ', "", "", '\n      <a href="https://github.com/input-output-hk/Certification-working-group"\n        >Cardano Certification Working Group</a>. ', "", "", "", ""]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = D(['\n          <p class="copyright">\n            This document is licensed under a\n            ', ".\n          </p>\n        "]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = D(['\n          <p class="copyright">', "</p>\n        "]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = D(['\n    <a rel="license" href="', '" class="', '">', "</a>\n  "]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = D(["\n            <p>\n              ", "\n              ", "\n            </p>\n          "]);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = D(['\n            <p>\n              See also\n              <a\n                href="', '"\n              >\n                <strong>translations</strong></a\n              >.\n            </p>\n          ']);
            return g = function() {
                return e
            }, e
        }

        function b() {
            const e = D(['\n            <p>\n              Please check the\n              <a href="', '"><strong>errata</strong></a> for any\n              errors or issues reported since publication.\n            </p>\n          ']);
            return b = function() {
                return e
            }, e
        }

        function y() {
            const e = D(["\n              <dt>\n                ", "\n              </dt>\n              ", "\n            "]);
            return y = function() {
                return e
            }, e
        }

        function v() {
            const e = D(["\n              <dt>\n                ", "\n              </dt>\n              ", "\n            "]);
            return v = function() {
                return e
            }, e
        }

        function w() {
            const e = D(['\n              <dt>Latest Recommendation:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return w = function() {
                return e
            }, e
        }

        function x() {
            const e = D(['\n              <dt>Previous Recommendation:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return x = function() {
                return e
            }, e
        }

        function k() {
            const e = D(['\n              <dt>Previous version:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return k = function() {
                return e
            }, e
        }

        function C() {
            const e = D(["\n              <dt>Previous editor's draft:</dt>\n              <dd><a href=\"", '">', "</a></dd>\n            "]);
            return C = function() {
                return e
            }, e
        }

        function S() {
            const e = D(["\n              <dt>", "</dt>\n              <dd>", "</dd>\n            "]);
            return S = function() {
                return e
            }, e
        }

        function E() {
            const e = D(['\n              <dt>Implementation report:</dt>\n              <dd>\n                <a href="', '"\n                  >', "</a\n                >\n              </dd>\n            "]);
            return E = function() {
                return e
            }, e
        }

        function O() {
            const e = D(['\n              <dt>Test suite:</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return O = function() {
                return e
            }, e
        }

        function T() {
            const e = D(["\n              <dt>", '</dt>\n              <dd><a href="', '">', "</a></dd>\n            "]);
            return T = function() {
                return e
            }, e
        }

        function j() {
            const e = D(['\n                      <a href="', '">', "</a>\n                    "]);
            return j = function() {
                return e
            }, e
        }

        function _() {
            const e = D(["\n              <dt>", '</dt>\n              <dd>\n                <a class="u-url" href="', '"\n                  >', "</a\n                >\n              </dd>\n              <dt>", "</dt>\n              <dd>\n                ", "\n              </dd>\n            "]);
            return _ = function() {
                return e
            }, e
        }

        function P() {
            const e = D(["", "", "", "", "", ""]);
            return P = function() {
                return e
            }, e
        }

        function A() {
            const e = D(['\n    <div class="head">\n      ', " ", "\n      ", "\n      <h2>\n        ", "", '\n        <time class="dt-published" datetime="', '"\n          >', "</time\n        >\n      </h2>\n      <dl>\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        <dt>", "</dt>\n        ", "\n        ", "\n        ", "\n        ", "\n      </dl>\n      ", "\n      ", "\n      ", "\n      ", '\n      <hr title="Separator for header" />\n    </div>\n  ']);
            return A = function() {
                return e
            }, e
        }

        function R() {
            const e = D(['\n      Preview of PR <a href="', '">#', "</a>:\n    "]);
            return R = function() {
                return e
            }, e
        }

        function D(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t = s(t), o = s(o), i = s(i), a = s(a);
        const L = "https://creativecommons.org/licenses/by/4.0/",
            N = "https://www.w3.org/Consortium/Legal/copyright-documents",
            I = "https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer",
            M = "https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks",
            W = "",
            q = "";

        function U(e) {
            const o = document.querySelector("h1#title") || document.createElement("h1");
            if (o.parentElement ? o.remove() : (o.textContent = e.title, o.id = "title"), e.isPreview && e.prNumber) {
                const {
                    childNodes: n
                } = (0, t.default)(R(), e.prUrl, e.prNumber);
                o.prepend(...n)
            }
            return e.title = (0, n.norm)(o.textContent), o.classList.add("title", "p-name"), null === document.querySelector("title") ? document.title = e.title : document.title !== e.title && (0, r.pub)("warn", "The document's title and the `<title>` element differ."), o
        }

        function F(e, n, r) {
            return (0, t.default)(h(), n, r, e)
        }

        function $(e) {
            return e.isUnofficial ? e.additionalCopyrightHolders ? (0, t.default)(p(), [e.additionalCopyrightHolders]) : e.overrideCopyright ? [e.overrideCopyright] : (0, t.default)(f(), F("Creative Commons Attribution 4.0 License", L, "subfoot")) : e.overrideCopyright ? [e.overrideCopyright] : function(e) {
                return "CCWG" === e.specStatus ? (0, t.default)(d(), e.copyrightStart ? "".concat(e.copyrightStart, "-") : "", e.publishYear, e.additionalCopyrightHolders ? (0, t.default)(u(), [e.additionalCopyrightHolders]) : "", z(e), W, q, H(e)) : (0, t.default)(l(), e.copyrightStart ? "".concat(e.copyrightStart, "-") : "", e.publishYear, e.additionalCopyrightHolders ? (0, t.default)(u(), [e.additionalCopyrightHolders]) : "", z(e), I, M, H(e))
            }(e)
        }

        function z(e) {
            if (e.isCCBY) return (0, t.default)(c(), F("CC-BY", L), F("W3C Document License", N))
        }

        function H(e) {
            return e.isCCBY ? F("document use", "https://www.w3.org/Consortium/Legal/2013/copyright-documents-dual.html") : e.isW3CSoftAndDocLicense ? F("permissive document license", "https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document") : e.isCCWG ? void 0 : F("document use", N)
        }
        e.default = e => "CCWG" === e.specStatus ? (0, t.default)(A(), e.logos.map(i.default), U(e), "", "", e.textStatus, e.dashDate, e.publishHumanDate, e.isNoTrack ? "" : (0, t.default)(P(), "", "", "", "", ""), e.edDraftURI ? (0, t.default)(T(), e.l10n.latest_editors_draft, e.edDraftURI, e.edDraftURI) : "", e.testSuiteURI ? (0, t.default)(O(), e.testSuiteURI, e.testSuiteURI) : "", e.implementationReportURI ? (0, t.default)(E(), e.implementationReportURI, e.implementationReportURI) : "", e.bugTrackerHTML ? (0, t.default)(S(), e.l10n.bug_tracker, [e.bugTrackerHTML]) : "", e.isED && e.prevED ? (0, t.default)(C(), e.prevED, e.prevED) : "", e.showPreviousVersion ? (0, t.default)(k(), e.prevVersion, e.prevVersion) : "", e.prevRecURI ? e.isRec ? (0, t.default)(x(), e.prevRecURI, e.prevRecURI) : (0, t.default)(w(), e.prevRecURI, e.prevRecURI) : "", e.multipleEditors ? e.l10n.editors : e.l10n.editor, (0, a.default)(e.editors), Array.isArray(e.formerEditors) && e.formerEditors.length > 0 ? (0, t.default)(v(), e.multipleFormerEditors ? e.l10n.former_editors : e.l10n.former_editor, (0, a.default)(e.formerEditors)) : "", e.authors ? (0, t.default)(y(), e.multipleAuthors ? e.l10n.authors : e.l10n.author, (0, a.default)(e.authors)) : "", e.otherLinks ? e.otherLinks.map(o.default) : "", e.errata ? (0, t.default)(b(), e.errata) : "", e.isRec ? (0, t.default)(g(), "http://www.w3.org/2003/03/Translations/byTechnology?technology=".concat(e.shortName)) : "", e.alternateFormats ? (0, t.default)(m(), e.multipleAlternates ? "This document is also available in these non-normative formats:" : "This document is also available in this non-normative format:", [e.alternatesHTML]) : "", $(e)) : (0, t.default)(A(), e.logos.map(i.default), U(e), function(e) {
            let t = document.querySelector("h2#subtitle");
            return t && t.parentElement ? (t.remove(), e.subtitle = t.textContent.trim()) : e.subtitle && ((t = document.createElement("h2")).textContent = e.subtitle, t.id = "subtitle"), t && t.classList.add("subtitle"), t
        }(e), e.prependW3C ? "W3C " : "", e.textStatus, e.dashDate, e.publishHumanDate, e.isNoTrack ? "" : (0, t.default)(_(), e.l10n.this_version, e.thisVersion, e.thisVersion, e.l10n.latest_published_version, e.latestVersion ? (0, t.default)(j(), e.latestVersion, e.latestVersion) : "none"), e.edDraftURI ? (0, t.default)(T(), e.l10n.latest_editors_draft, e.edDraftURI, e.edDraftURI) : "", e.testSuiteURI ? (0, t.default)(O(), e.testSuiteURI, e.testSuiteURI) : "", e.implementationReportURI ? (0, t.default)(E(), e.implementationReportURI, e.implementationReportURI) : "", e.bugTrackerHTML ? (0, t.default)(S(), e.l10n.bug_tracker, [e.bugTrackerHTML]) : "", e.isED && e.prevED ? (0, t.default)(C(), e.prevED, e.prevED) : "", e.showPreviousVersion ? (0, t.default)(k(), e.prevVersion, e.prevVersion) : "", e.prevRecURI ? e.isRec ? (0, t.default)(x(), e.prevRecURI, e.prevRecURI) : (0, t.default)(w(), e.prevRecURI, e.prevRecURI) : "", e.multipleEditors ? e.l10n.editors : e.l10n.editor, (0, a.default)(e.editors), Array.isArray(e.formerEditors) && e.formerEditors.length > 0 ? (0, t.default)(v(), e.multipleFormerEditors ? e.l10n.former_editors : e.l10n.former_editor, (0, a.default)(e.formerEditors)) : "", e.authors ? (0, t.default)(y(), e.multipleAuthors ? e.l10n.authors : e.l10n.author, (0, a.default)(e.authors)) : "", e.otherLinks ? e.otherLinks.map(o.default) : "", e.errata ? (0, t.default)(b(), e.errata) : "", e.isRec ? (0, t.default)(g(), "http://www.w3.org/2003/03/Translations/byTechnology?technology=".concat(e.shortName)) : "", e.alternateFormats ? (0, t.default)(m(), e.multipleAlternates ? "This document is also available in these non-normative formats:" : "This document is also available in this non-normative format:", [e.alternatesHTML]) : "", $(e))
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2)], void 0 === (o = function(e, t) {
        "use strict";
        var n;

        function r() {
            const e = I(["\n                  with <code>", "</code> at the start of your\n                  email's subject\n                "]);
            return r = function() {
                return e
            }, e
        }

        function o() {
            const e = I(["\n            ", '\n            Please send them to\n            <a href="', '"\n              >', '@w3.org</a\n            >\n            (<a\n              href="', '"\n              >archives</a\n            >)', ".\n          "]);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = I(['\n            <a href="', '">GitHub Issues</a> are preferred for\n            discussion of this specification.\n          ']);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = I(["\n    <p>\n      ", "\n      ", "\n    </p>\n  "]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = I(["\n    <p>\n      This document was published by ", " as ", "\n      ", ".\n      ", "\n    </p>\n  "]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = I(["\n            with <code>", "</code> at the start of your email's\n            subject\n          "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = I(['\n    <p>\n      If you wish to make comments regarding this document, please send them to\n      <a href="', '"\n        >', '@w3.org</a\n      >\n      (<a href="', '">subscribe</a>,\n      <a href="', '"\n        >archives</a\n      >)', '.\n    </p>\n    <p>\n      Please consult the complete\n      <a href="https://www.w3.org/TeamSubmission/">list of Team Submissions</a>.\n    </p>\n  ']);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = I(['\n    <p>\n      By publishing this document, W3C acknowledges that the\n      <a href="', '">Submitting Members</a> have made a formal\n      Submission request to W3C for discussion. Publication of this document by\n      W3C indicates no endorsement of its content by W3C, nor that W3C has, is,\n      or will be allocating any resources to the issues addressed by it. This\n      document is not the product of a chartered W3C group, but is published as\n      potential input to the\n      <a href="https://www.w3.org/Consortium/Process">W3C Process</a>. A\n      <a href="', '">W3C Team Comment</a> has been published in\n      conjunction with this Member Submission. Publication of acknowledged\n      Member Submissions at the W3C site is one of the benefits of\n      <a href="https://www.w3.org/Consortium/Prospectus/Joining">\n        W3C Membership</a\n      >. Please consult the requirements associated with Member Submissions of\n      <a href="https://www.w3.org/Consortium/Patent-Policy/#sec-submissions"\n        >section 3.3 of the W3C Patent Policy</a\n      >. Please consult the complete\n      <a href="https://www.w3.org/Submission"\n        >list of acknowledged W3C Member Submissions</a\n      >.\n    </p>\n  ']);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = I(["\n    ", "\n    ", "\n  "]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = I(['\n            The disclosure obligations of the Participants of this group are\n            described in the\n            <a href="', '">charter</a>.\n          ']);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = I(['\n                  W3C maintains a\n                  <a href="', '" rel="disclosure"\n                    >public list of any patent disclosures</a\n                  >\n                ']);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = I(["\n                  W3C maintains ", "\n                "]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = I(["\n            ", "\n            made in connection with the deliverables of\n            ", '\n            instructions for disclosing a patent. An individual who has actual\n            knowledge of a patent which the individual believes contains\n            <a href="https://www.w3.org/Consortium/Patent-Policy/#def-essential"\n              >Essential Claim(s)</a\n            >\n            must disclose the information in accordance with\n            <a\n              href="https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure"\n              >section 6 of the W3C Patent Policy</a\n            >.\n          ']);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = I(['\n    <p data-deliverer="', '">\n      ', " ", "\n      ", "\n      ", "\n    </p>\n  "]);
            return g = function() {
                return e
            }, e
        }

        function b() {
            const e = I(["\n        This document was produced by ", '\n        operating under the\n        <a href="https://www.w3.org/Consortium/Patent-Policy/"\n          >W3C Patent Policy</a\n        >.\n      ']);
            return b = function() {
                return e
            }, e
        }

        function y() {
            const e = I(["\n    <p>\n      This document has been reviewed by W3C Members, by software developers,\n      and by other W3C groups and interested parties, and is endorsed by the\n      Director as a W3C Recommendation. It is a stable document and may be used\n      as reference material or cited from another document. W3C's role in making\n      the Recommendation is to draw attention to the specification and to\n      promote its widespread deployment. This enhances the functionality and\n      interoperability of the Web.\n    </p>\n  "]);
            return y = function() {
                return e
            }, e
        }

        function v() {
            const e = I(["\n    <p>\n      Publication as ", " ", " does not imply endorsement by the\n      W3C Membership. This is a draft document and may be updated, replaced or\n      obsoleted by other documents at any time. It is inappropriate to cite this\n      document as other than work in progress.\n    </p>\n  "]);
            return v = function() {
                return e
            }, e
        }

        function w() {
            const e = I(["", "", ""]);
            return w = function() {
                return e
            }, e
        }

        function x() {
            const e = I(["\n    <p>\n      Please see the Working Group's\n      <a href=\"", '">implementation report</a>.\n    </p>\n  ']);
            return x = function() {
                return e
            }, e
        }

        function k() {
            const e = I(["\n    <p>\n      This document is merely a W3C-internal\n      ", " document. It has no official standing\n      of any kind and does not represent consensus of the W3C Membership.\n    </p>\n    ", "\n  "]);
            return k = function() {
                return e
            }, e
        }

        function C() {
            const e = I(["\n    <p>\n      This document is draft of a potential specification. It has no official\n      standing of any kind and does not represent the support or consensus of\n      any standards organization.\n    </p>\n    ", "\n  "]);
            return C = function() {
                return e
            }, e
        }

        function S() {
            const e = I(['\n              Instead, see\n              <a href="', '">', "</a> for the Editor's draft.\n            "]);
            return S = function() {
                return e
            }, e
        }

        function E() {
            const e = I(['\n              of pull request\n              <a href="', '">#', "</a>\n            "]);
            return E = function() {
                return e
            }, e
        }

        function O() {
            const e = I(['\n    <details class="annoying-warning" open="">\n      <summary\n        >This is a\n        preview', "</summary\n      >\n      <p>\n        Do not attempt to implement this version of the specification. Do not\n        reference this version as authoritative in any way.\n        ", "\n      </p>\n    </details>\n  "]);
            return O = function() {
                return e
            }, e
        }

        function T() {
            const e = I(["\n                      <p>", "</p>\n                    "]);
            return T = function() {
                return e
            }, e
        }

        function j() {
            const e = I(['\n                                    The W3C Membership and other interested\n                                    parties are invited to review the document\n                                    and send comments to\n                                    <a\n                                      rel="discussion"\n                                      href="', '"\n                                      >', '@w3.org</a\n                                    >\n                                    (<a\n                                      href="', '"\n                                      >subscribe</a\n                                    >,\n                                    <a\n                                      href="', '"\n                                      >archives</a\n                                    >) through ', '. Advisory\n                                    Committee Representatives should consult\n                                    their\n                                    <a\n                                      href="https://www.w3.org/2002/09/wbs/myQuestionnaires"\n                                      >WBS questionnaires</a\n                                    >. Note that substantive technical comments\n                                    were expected during the Candidate\n                                    Recommendation review period that ended\n                                    ', ".\n                                  "]);
            return j = function() {
                return e
            }, e
        }

        function _() {
            const e = I(["\n                                    W3C Advisory Committee Members are invited\n                                    to send formal review comments on this\n                                    Proposed Edited Recommendation to the W3C\n                                    Team until ", '. Members of\n                                    the Advisory Committee will find the\n                                    appropriate review form for this document by\n                                    consulting their list of current\n                                    <a\n                                      href="https://www.w3.org/2002/09/wbs/myQuestionnaires"\n                                      >WBS questionnaires</a\n                                    >.\n                                  ']);
            return _ = function() {
                return e
            }, e
        }

        function P() {
            const e = I(["\n                            <p>\n                              ", "\n                              ", "\n                              ", "\n                            </p>\n                          "]);
            return P = function() {
                return e
            }, e
        }

        function A() {
            const e = I(["\n                      ", " ", "\n                      ", "\n                    "]);
            return A = function() {
                return e
            }, e
        }

        function R() {
            const e = I(["\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", " ", '\n                <p>\n                  This document is governed by the\n                  <a\n                    id="w3c_process_revision"\n                    href="https://www.w3.org/2019/Process-20190301/"\n                    >1 March 2019 W3C Process Document</a\n                  >.\n                </p>\n                ', "\n              "]);
            return R = function() {
                return e
            }, e
        }

        function D() {
            const e = I(["", "", "", "", "", "", "", "", ""]);
            return D = function() {
                return e
            }, e
        }

        function L() {
            const e = I(["\n          <p><em>", "</em></p>\n          ", "\n        "]);
            return L = function() {
                return e
            }, e
        }

        function N() {
            const e = I(["\n    <h2>", "</h2>\n    ", "\n    ", "\n    ", "\n  "]);
            return N = function() {
                return e
            }, e
        }

        function I(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };

        function M(e) {
            const {
                prUrl: n,
                prNumber: r,
                edDraftURI: o
            } = e;
            return (0, t.default)(O(), n && r ? (0, t.default)(E(), n, r) : "", o ? (0, t.default)(S(), o, o) : "")
        }

        function W(e) {
            const {
                additionalContent: n
            } = e;
            return (0, t.default)(C(), n)
        }

        function q(e, n) {
            const {
                isMO: r
            } = e, {
                additionalContent: o
            } = n;
            return (0, t.default)(k(), r ? "member-confidential" : "", o)
        }

        function U(e) {
            const {
                implementationReportURI: n
            } = e;
            return (0, t.default)(x(), n)
        }

        function F(e) {
            const {
                anOrA: n,
                textStatus: r
            } = e;
            return "CCWG" === e.specStatus ? (0, t.default)(w(), "", "") : (0, t.default)(v(), n, r)
        }

        function $() {
            (0, t.default)(y())
        }

        function z(e) {
            const {
                isNote: n,
                wgId: r,
                isIGNote: o,
                multipleWGs: i,
                recNotExpected: a,
                wgPatentHTML: s,
                wgPatentURI: c,
                charterDisclosureURI: u
            } = e, l = o ? "" : (0, t.default)(b(), i ? "groups" : "a group"), d = a ? "The group does not expect this document to become a W3C Recommendation." : "";
            if ("CCWG" !== e.specStatus) return (0, t.default)(g(), n ? r : null, l, d, n || o ? "" : (0, t.default)(m(), i ? (0, t.default)(h(), [s]) : (0, t.default)(p(), [c]), i ? "each group; these pages also include" : "the group; that page also includes"), o ? (0, t.default)(f(), u) : "")
        }

        function H(e, n) {
            return (0, t.default)(d(), n.additionalContent, e.isMemberSubmission ? function(e) {
                const n = "https://www.w3.org/Submission/".concat(e.publishDate.getUTCFullYear(), "/").concat(e.submissionCommentNumber, "/Comment/");
                return (0, t.default)(l(), e.thisVersion, n)
            }(e) : e.isTeamSubmission ? function(e, n) {
                return (0, t.default)(u(), n.mailToWGPublicListWithSubject, e.wgPublicList, n.mailToWGPublicListSubscription, "https://lists.w3.org/Archives/Public/".concat(e.wgPublicList, "/"), e.subjectPrefix ? (0, t.default)(c(), e.subjectPrefix) : "")
            }(e, n) : "")
        }

        function B(e) {
            if (e.wg) return (0, t.default)(s(), [e.wgHTML], e.anOrA, e.longStatus, e.notYetRec ? "This document is intended to become a W3C Recommendation." : "")
        }

        function G(e, n) {
            if (e.github || e.wgPublicList) return (0, t.default)(a(), e.github ? (0, t.default)(i(), e.issueBase) : "", e.wgPublicList ? (0, t.default)(o(), e.github && e.wgPublicList ? "Alternatively, you can send comments to our mailing list." : "Comments regarding this document are welcome.", n.mailToWGPublicListWithSubject, e.wgPublicList, "https://lists.w3.org/Archives/Public/".concat(e.wgPublicList, "/"), e.subjectPrefix ? (0, t.default)(r(), e.subjectPrefix) : "") : "")
        }
        e.default = (e, n) => "CCWG" === e.specStatus ? (e.l10n.status_at_publication = "This section describes the status of this document at the time of its publication. Newer documents may supersede this document.", (0, t.default)(N(), e.l10n.sotd, e.isPreview ? M(e) : "", e.isUnofficial ? W(n) : e.isTagFinding ? n.additionalContent : e.isNoTrack ? q(e, n) : (0, t.default)(L(), [e.l10n.status_at_publication], e.isSubmission ? H(e, n) : (0, t.default)(D(), e.sotdAfterWGinfo ? "" : n.additionalContent, e.overrideStatus ? "" : (0, t.default)(A(), B(e), G(e, n), e.isCR || e.isPER || e.isPR ? (0, t.default)(P(), e.isCR ? "\n                  W3C publishes a Candidate Recommendation to indicate that the document is believed to be\n                  stable and to encourage implementation by the developer community. This Candidate\n                  Recommendation is expected to advance to Proposed Recommendation no earlier than\n                  ".concat(e.humanCREnd, ".\n                ") : "", e.isPER ? (0, t.default)(_(), e.humanPEREnd) : "", e.isPR ? (0, t.default)(j(), n.mailToWGPublicList, e.wgPublicList, n.mailToWGPublicListSubscription, "https://lists.w3.org/Archives/Public/".concat(e.wgPublicList, "/"), e.humanPREnd, e.humanCREnd) : "") : ""), e.implementationReportURI ? U(e) : "", e.sotdAfterWGinfo ? n.additionalContent : "", e.notRec ? F(e) : "", e.isRec ? $() : "", z(e), e.addPatentNote ? (0, t.default)(T(), [e.addPatentNote]) : "")), n.additionalSections)) : (0, t.default)(N(), e.l10n.sotd, e.isPreview ? M(e) : "", e.isUnofficial ? W(n) : e.isTagFinding ? n.additionalContent : e.isNoTrack ? q(e, n) : (0, t.default)(L(), [e.l10n.status_at_publication], e.isSubmission ? H(e, n) : (0, t.default)(R(), e.sotdAfterWGinfo ? "" : n.additionalContent, e.overrideStatus ? "" : (0, t.default)(A(), B(e), G(e, n), e.isCR || e.isPER || e.isPR ? (0, t.default)(P(), e.isCR ? "\n                  W3C publishes a Candidate Recommendation to indicate that the document is believed to be\n                  stable and to encourage implementation by the developer community. This Candidate\n                  Recommendation is expected to advance to Proposed Recommendation no earlier than\n                  ".concat(e.humanCREnd, ".\n                ") : "", e.isPER ? (0, t.default)(_(), e.humanPEREnd) : "", e.isPR ? (0, t.default)(j(), n.mailToWGPublicList, e.wgPublicList, n.mailToWGPublicListSubscription, "https://lists.w3.org/Archives/Public/".concat(e.wgPublicList, "/"), e.humanPREnd, e.humanCREnd) : "") : ""), e.implementationReportURI ? U(e) : "", e.sotdAfterWGinfo ? n.additionalContent : "", e.notRec ? F(e) : "", e.isRec ? $() : "", z(e), e.addPatentNote ? (0, t.default)(T(), [e.addPatentNote]) : "")), n.additionalSections)
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(3), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function() {
            const e = document.getElementById("abstract");
            if (!e) return void(0, n.pub)("error", 'Document must have one element with `id="abstract"');
            e.classList.add("introductory");
            let r = document.querySelector("#abstract>h2");
            if (r) return;
            (r = document.createElement("h2")).textContent = t.l10n[t.lang].abstract, e.prepend(r)
        }, e.name = void 0;
        e.name = "w3c/abstract"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            document.querySelectorAll("[data-transform]").forEach(e => {
                e.innerHTML = (0, t.runTransforms)(e.innerHTML, e.dataset.transform), e.removeAttribute("data-transform")
            })
        }, e.name = void 0;
        e.name = "core/data-transform"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = document.querySelectorAll("[data-abbr]");
            for (const r of e) {
                const {
                    localName: e
                } = r;
                switch (e) {
                    case "dfn":
                        n(r);
                        break;
                    default: {
                        const n = "[`data-abbr`](https://github.com/w3c/respec/wiki/data-abbr)" + " attribute not supported on `".concat(e, "` elements.");
                        (0, t.showInlineWarning)(r, n, "Error: unsupported.")
                    }
                }
            }
        }, e.name = void 0;

        function n(e) {
            const t = (n = e).dataset.abbr ? n.dataset.abbr : n.textContent.match(/\b([a-z])/gi).join("").toUpperCase();
            var n;
            const r = e.textContent.replace(/\s\s+/g, " ").trim();
            e.insertAdjacentHTML("afterend", ' (<abbr title="'.concat(r, '">').concat(t, "</abbr>)"));
            const o = e.dataset.lt || "";
            e.dataset.lt = o.split("|").filter(e => e.trim()).concat(t).join("|")
        }
        e.name = "core/dfn-abbr"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = p(["<code>", "</code>"]);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = p(["<span>{{ ", " }}</span>"]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = p(['<a\n    data-cite="WebIDL"\n    data-xref-type="interface"\n    >', "</a>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = p(['"<a\n    data-cite="WebIDL"\n    data-xref-type="exception"\n    >', '</a>"']);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = p(['"<a\n    data-xref-type="enum-value"\n    data-link-for="', '"\n    data-xref-for="', '"\n    data-lt="', '"\n    >', '</a>"']);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = p(["", '<a\n    data-xref-type="', '"\n    data-link-for="', '"\n    data-xref-for="', '"\n    data-lt="', '"\n    >', "</a>(", ")"]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = p(["", '<a\n      data-xref-type="attribute|dict-member"\n      data-link-for="', '"\n      data-xref-for="', '"\n    >', "</a>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = p(["", '[[<a\n    data-xref-type="attribute"\n    data-link-for=', "\n    data-xref-for=", '\n    data-lt="', '">', "</a>]]"]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = p(['<a data-xref-type="_IDL_">', "</a>"]);
            return f = function() {
                return e
            }, e
        }

        function p(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.idlStringToHtml = function(e) {
            let r;
            try {
                r = function(e) {
                    const [t, n] = e.split(w), r = t.split(/[./]/).concat(n).filter(e => e && e.trim()).map(e => e.trim()), o = !e.includes("/"), i = [];
                    for (; r.length;) {
                        const t = r.pop();
                        if (g.test(t)) {
                            const [, e, n] = t.match(g), r = n.split(/,\s*/).filter(e => e);
                            i.push({
                                type: "method",
                                identifier: e,
                                args: r,
                                renderParent: o
                            })
                        } else if (v.test(t)) {
                            const [, e, n] = t.match(v);
                            i.push({
                                type: "enum",
                                identifier: e,
                                enumValue: n,
                                renderParent: o
                            })
                        } else if (m.test(t)) {
                            const [, e] = t.match(m);
                            o ? i.push({
                                type: "exception",
                                identifier: e
                            }) : i.push({
                                type: "enum",
                                enumValue: e,
                                renderParent: o
                            })
                        } else if (b.test(t)) {
                            const [, e] = t.match(b);
                            i.push({
                                type: "internal-slot",
                                identifier: e,
                                renderParent: o
                            })
                        } else if (y.test(t) && r.length) {
                            const [, e] = t.match(y);
                            i.push({
                                type: "attribute",
                                identifier: e,
                                renderParent: o
                            })
                        } else if (h.test(t)) i.push({
                            type: "idl-primitive",
                            identifier: t,
                            renderParent: o
                        });
                        else {
                            if (!y.test(t) || 0 !== r.length) throw new SyntaxError("IDL micro-syntax parsing error in `{{ ".concat(e, " }}`"));
                            i.push({
                                type: "base",
                                identifier: t,
                                renderParent: o
                            })
                        }
                    }
                    return i.forEach((e, t, n) => {
                        e.parent = n[t + 1] || null
                    }), i.reverse()
                }(e)
            } catch (r) {
                const o = (0, t.default)(i(), e);
                return (0, n.showInlineError)(o, r.message, "Error: Invalid inline IDL string"), o
            }
            const a = (0, t.default)(document.createDocumentFragment()),
                s = [];
            for (const e of r) switch (e.type) {
                case "base": {
                    const t = x(e);
                    t && s.push(t);
                    break
                }
                case "attribute":
                    s.push(C(e));
                    break;
                case "internal-slot":
                    s.push(k(e));
                    break;
                case "method":
                    s.push(S(e));
                    break;
                case "enum":
                    s.push(E(e));
                    break;
                case "exception":
                    s.push(O(e));
                    break;
                case "idl-primitive":
                    s.push(T(e));
                    break;
                default:
                    throw new Error("Unknown type.")
            }
            return a(o(), s)
        }, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        const h = /^[a-z]+(\s+[a-z]+)+$/,
            m = /\B"([^"]*)"\B/,
            g = /(\w+)\((.*)\)$/,
            b = /^\[\[(\w+)\]\]$/,
            y = /^((?:\[\[)?(?:\w+)(?:\]\])?)$/,
            v = /^(\w+)\["([\w- ]*)"\]$/,
            w = /\.?(\w+\(.*\)$)/;

        function x(e) {
            const {
                identifier: n,
                renderParent: r
            } = e;
            if (r) return (0, t.default)(f(), n)
        }

        function k(e) {
            const {
                identifier: n,
                parent: r,
                renderParent: o
            } = e, {
                identifier: i
            } = r || {}, a = "[[".concat(n, "]]");
            return (0, t.default)(d(), r && o ? "." : "", i, i, a, n)
        }

        function C(e) {
            const {
                parent: n,
                identifier: r,
                renderParent: o
            } = e, {
                identifier: i
            } = n || {};
            return (0, t.default)(l(), o ? "." : "", i, i, r)
        }

        function S(e) {
            const {
                args: n,
                identifier: r,
                type: o,
                parent: i,
                renderParent: a
            } = e, {
                identifier: s
            } = i || {}, c = n.map(e => "<var>".concat(e, "</var>")).join(", "), l = "".concat(r, "(").concat(n.join(", "), ")");
            return (0, t.default)(u(), i && a ? "." : "", o, s, s, l, r, [c])
        }

        function E(e) {
            const {
                identifier: n,
                enumValue: r,
                parent: o
            } = e, i = o ? o.identifier : n;
            return (0, t.default)(c(), i, i, r ? null : "the-empty-string", r)
        }

        function O(e) {
            const {
                identifier: n
            } = e;
            return (0, t.default)(s(), n)
        }

        function T(e) {
            const {
                identifier: n
            } = e;
            return (0, t.default)(a(), n)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(17), n(1)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.biblioDB = e.name = void 0;
        e.name = "core/biblio-db";
        const o = new Set(["alias", "reference"]),
            i = async function() {
                const {
                    openDB: e
                } = await (0, n.importIdb)();
                return await e("respec-biblio2", 12, {
                    upgrade(e) {
                        Array.from(e.objectStoreNames).map(t => e.deleteObjectStore(t)), e.createObjectStore("alias", {
                            keyPath: "id"
                        }).createIndex("aliasOf", "aliasOf", {
                            unique: !1
                        }), e.createObjectStore("reference", {
                            keyPath: "id"
                        })
                    }
                })
            }();
        const a = {
            get ready() {
                return i
            },
            async find(e) {
                return await this.isAlias(e) && (e = await this.resolveAlias(e)), await this.get("reference", e)
            },
            async has(e, t) {
                if (!o.has(e)) throw new TypeError("Invalid type: ".concat(e));
                if (!t) throw new TypeError("id is required");
                const n = (await this.ready).transaction(e, "readonly").store,
                    r = IDBKeyRange.only(t);
                return !!await n.openCursor(r)
            },
            async isAlias(e) {
                return await this.has("alias", e)
            },
            async resolveAlias(e) {
                if (!e) throw new TypeError("id is required");
                const t = (await this.ready).transaction("alias", "readonly").store,
                    n = IDBKeyRange.only(e),
                    r = await t.openCursor(n);
                return r ? r.value.aliasOf : r
            },
            async get(e, t) {
                if (!o.has(e)) throw new TypeError("Invalid type: ".concat(e));
                if (!t) throw new TypeError("id is required");
                const n = (await this.ready).transaction(e, "readonly").store,
                    r = IDBKeyRange.only(t),
                    i = await n.openCursor(r);
                return i ? i.value : i
            },
            async addAll(e) {
                if (!e) return;
                const n = {
                    alias: new Set,
                    reference: new Set
                };
                Object.keys(e).filter(t => {
                    if ("string" == typeof e[t]) {
                        let e = "Legacy SpecRef entries are not supported: `[[".concat(t, "]]`. ");
                        return e += "Please update it to the new format at [specref repo](https://github.com/tobie/specref/)", (0, r.pub)("error", e), !1
                    }
                    return !0
                }).map(t => Object.assign({
                    id: t
                }, e[t])).forEach(e => {
                    e.aliasOf ? n.alias.add(e) : n.reference.add(e)
                });
                const i = [...o].map(e => Array.from(n[e]).map(t => this.add(e, t))).reduce(t.flatten, []);
                await Promise.all(i)
            },
            async add(e, t) {
                if (!o.has(e)) throw new TypeError("Invalid type: ".concat(e));
                if ("object" != typeof t) throw new TypeError("details should be an object");
                if ("alias" === e && !t.hasOwnProperty("aliasOf")) throw new TypeError("Invalid alias object.");
                const n = await this.ready,
                    r = await this.has(e, t.id),
                    i = n.transaction(e, "readwrite").store;
                return r ? await i.put(t) : await i.add(t)
            },
            async close() {
                (await this.ready).close()
            },
            async clear() {
                const e = await this.ready,
                    t = [...o],
                    n = e.transaction(t, "readwrite"),
                    r = t.map(e => n.objectStore(e).clear());
                await Promise.all(r)
            }
        };
        e.biblioDB = a
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(0), n(1), n(8), n(16)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";
        var a;

        function s() {
            const e = u(["\n          <p>\n            The key word", " ", " in this document\n            ", ' to be interpreted as described in\n            <a href="https://tools.ietf.org/html/bcp14">BCP 14</a>\n            ', "\n            ", " when, and only when, they appear\n            in all capitals, as shown here.\n          </p>\n        "]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = u(["\n    <h2>Conformance</h2>\n    <p>\n      As well as sections marked as non-normative, all authoring guidelines,\n      diagrams, examples, and notes in this specification are non-normative.\n      Everything else in this specification is normative.\n    </p>\n    ", "\n  "]);
            return c = function() {
                return e
            }, e
        }

        function u(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            const a = document.querySelector("section#conformance");
            a && function(e, r) {
                const a = [...Object.keys(i.rfc2119Usage)];
                a.length && (r.normativeReferences.add("RFC2119"), r.normativeReferences.add("RFC8174"));
                const u = (0, n.joinAnd)(a.sort(), e => '<em class="rfc2119">'.concat(e, "</em>")),
                    l = a.length > 1,
                    d = (0, t.default)(c(), a.length ? (0, t.default)(s(), l ? "s" : "", [u], l ? "are" : "is", (0, o.renderInlineCitation)("RFC2119"), (0, o.renderInlineCitation)("RFC8174")) : null);
                e.prepend(...d.childNodes)
            }(a, e);
            (0, r.pub)("end", l)
        }, e.name = void 0, t = (a = t) && a.__esModule ? a : {
            default: a
        };
        const l = "w3c/conformance";
        e.name = l
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(5)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            document.querySelectorAll("dfn").forEach(e => {
                const r = (0, t.getDfnTitles)(e);
                (0, n.registerDefinition)(e, r), e.dataset.dfnType || (e.dataset.dfnType = "dfn"), 1 === r.length && r[0] === (0, t.norm)(e.textContent) || (e.dataset.lt = r.join("|"))
            })
        }, e.name = void 0;
        e.name = "core/dfn"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(62), n(0), n(5)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!e.pluralize) return;
            const o = function() {
                const e = new Set;
                document.querySelectorAll("a:not([href])").forEach(t => {
                    const r = (0, n.norm)(t.textContent).toLowerCase();
                    e.add(r), t.dataset.lt && e.add(t.dataset.lt)
                });
                const r = new Set;
                return document.querySelectorAll("dfn:not([data-lt-noDefault])").forEach(e => {
                        const t = (0, n.norm)(e.textContent).toLowerCase();
                        r.add(t), e.dataset.lt && e.dataset.lt.split("|").forEach(e => r.add(e))
                    }),
                    function(o) {
                        const i = (0, n.norm)(o).toLowerCase(),
                            a = (0, t.isSingular)(i) ? (0, t.plural)(i) : (0, t.singular)(i);
                        return e.has(a) && !r.has(a) ? a : ""
                    }
            }();
            document.querySelectorAll("dfn:not([data-lt-no-plural]):not([data-lt-noDefault])").forEach(e => {
                const t = [e.textContent];
                e.dataset.lt && t.push(...e.dataset.lt.split("|"));
                const n = new Set(t.map(o).filter(e => e));
                if (n.size) {
                    const t = e.dataset.plurals ? e.dataset.plurals.split("|") : [],
                        o = [...new Set([...t, ...n])];
                    e.dataset.plurals = o.join("|"), (0, r.registerDefinition)(e, o)
                }
            })
        }, e.name = void 0;
        e.name = "core/pluralize"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    e.exports = function() {
        var e = [],
            t = [],
            n = {},
            r = {},
            o = {};

        function i(e) {
            return "string" == typeof e ? new RegExp("^" + e + "$", "i") : e
        }

        function a(e, t) {
            return e === t ? t : e === e.toLowerCase() ? t.toLowerCase() : e === e.toUpperCase() ? t.toUpperCase() : e[0] === e[0].toUpperCase() ? t.charAt(0).toUpperCase() + t.substr(1).toLowerCase() : t.toLowerCase()
        }

        function s(e, t) {
            return e.replace(/\$(\d{1,2})/g, (function(e, n) {
                return t[n] || ""
            }))
        }

        function c(e, t) {
            return e.replace(t[0], (function(n, r) {
                var o = s(t[1], arguments);
                return a("" === n ? e[r - 1] : n, o)
            }))
        }

        function u(e, t, r) {
            if (!e.length || n.hasOwnProperty(e)) return t;
            for (var o = r.length; o--;) {
                var i = r[o];
                if (i[0].test(t)) return c(t, i)
            }
            return t
        }

        function l(e, t, n) {
            return function(r) {
                var o = r.toLowerCase();
                return t.hasOwnProperty(o) ? a(r, o) : e.hasOwnProperty(o) ? a(r, e[o]) : u(o, r, n)
            }
        }

        function d(e, t, n, r) {
            return function(r) {
                var o = r.toLowerCase();
                return !!t.hasOwnProperty(o) || !e.hasOwnProperty(o) && u(o, o, n) === o
            }
        }

        function f(e, t, n) {
            return (n ? t + " " : "") + (1 === t ? f.singular(e) : f.plural(e))
        }
        return f.plural = l(o, r, e), f.isPlural = d(o, r, e), f.singular = l(r, o, t), f.isSingular = d(r, o, t), f.addPluralRule = function(t, n) {
            e.push([i(t), n])
        }, f.addSingularRule = function(e, n) {
            t.push([i(e), n])
        }, f.addUncountableRule = function(e) {
            "string" != typeof e ? (f.addPluralRule(e, "$0"), f.addSingularRule(e, "$0")) : n[e.toLowerCase()] = !0
        }, f.addIrregularRule = function(e, t) {
            t = t.toLowerCase(), e = e.toLowerCase(), o[e] = t, r[t] = e
        }, [
            ["I", "we"],
            ["me", "us"],
            ["he", "they"],
            ["she", "they"],
            ["them", "them"],
            ["myself", "ourselves"],
            ["yourself", "yourselves"],
            ["itself", "themselves"],
            ["herself", "themselves"],
            ["himself", "themselves"],
            ["themself", "themselves"],
            ["is", "are"],
            ["was", "were"],
            ["has", "have"],
            ["this", "these"],
            ["that", "those"],
            ["echo", "echoes"],
            ["dingo", "dingoes"],
            ["volcano", "volcanoes"],
            ["tornado", "tornadoes"],
            ["torpedo", "torpedoes"],
            ["genus", "genera"],
            ["viscus", "viscera"],
            ["stigma", "stigmata"],
            ["stoma", "stomata"],
            ["dogma", "dogmata"],
            ["lemma", "lemmata"],
            ["schema", "schemata"],
            ["anathema", "anathemata"],
            ["ox", "oxen"],
            ["axe", "axes"],
            ["die", "dice"],
            ["yes", "yeses"],
            ["foot", "feet"],
            ["eave", "eaves"],
            ["goose", "geese"],
            ["tooth", "teeth"],
            ["quiz", "quizzes"],
            ["human", "humans"],
            ["proof", "proofs"],
            ["carve", "carves"],
            ["valve", "valves"],
            ["looey", "looies"],
            ["thief", "thieves"],
            ["groove", "grooves"],
            ["pickaxe", "pickaxes"],
            ["passerby", "passersby"]
        ].forEach((function(e) {
            return f.addIrregularRule(e[0], e[1])
        })), [
            [/s?$/i, "s"],
            [/[^\u0000-\u007F]$/i, "$0"],
            [/([^aeiou]ese)$/i, "$1"],
            [/(ax|test)is$/i, "$1es"],
            [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
            [/(e[mn]u)s?$/i, "$1s"],
            [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
            [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
            [/(seraph|cherub)(?:im)?$/i, "$1im"],
            [/(her|at|gr)o$/i, "$1oes"],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
            [/sis$/i, "ses"],
            [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
            [/([^aeiouy]|qu)y$/i, "$1ies"],
            [/([^ch][ieo][ln])ey$/i, "$1ies"],
            [/(x|ch|ss|sh|zz)$/i, "$1es"],
            [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
            [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
            [/(pe)(?:rson|ople)$/i, "$1ople"],
            [/(child)(?:ren)?$/i, "$1ren"],
            [/eaux$/i, "$0"],
            [/m[ae]n$/i, "men"],
            ["thou", "you"]
        ].forEach((function(e) {
            return f.addPluralRule(e[0], e[1])
        })), [
            [/s$/i, ""],
            [/(ss)$/i, "$1"],
            [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
            [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
            [/ies$/i, "y"],
            [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
            [/\b(mon|smil)ies$/i, "$1ey"],
            [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
            [/(seraph|cherub)im$/i, "$1"],
            [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
            [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
            [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
            [/(test)(?:is|es)$/i, "$1is"],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
            [/(alumn|alg|vertebr)ae$/i, "$1a"],
            [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
            [/(matr|append)ices$/i, "$1ix"],
            [/(pe)(rson|ople)$/i, "$1rson"],
            [/(child)ren$/i, "$1"],
            [/(eau)x?$/i, "$1"],
            [/men$/i, "man"]
        ].forEach((function(e) {
            return f.addSingularRule(e[0], e[1])
        })), ["adulthood", "advice", "agenda", "aid", "aircraft", "alcohol", "ammo", "analytics", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "firmware", "flounder", "fun", "gallows", "garbage", "graffiti", "hardware", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "mud", "manga", "news", "only", "personnel", "pike", "plankton", "pliers", "police", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "software", "species", "staff", "swine", "tennis", "traffic", "transportation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /pok[eé]mon$/i, /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(f.addUncountableRule), f
    }()
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(64), n(3), n(2), n(1)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {
            const e = d(['\n        <div class="example" id="', '">\n          ', " ", "\n        </div>\n      "]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = d(["\n      <style>\n        ", "\n      </style>\n    "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = d(['\n    <div class="marker">\n      <a class="self-link">', "<bdi>", "</bdi></a\n      >", "\n    </div>\n  "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = d(['\n        <span class="example-title">: ', "</span>\n      "]);
            return l = function() {
                return e
            }, e
        }

        function d(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = document.querySelectorAll("pre.example, pre.illegal-example, aside.example");
            if (!e.length) return;
            document.head.insertBefore((0, o.default)(c(), n.default), document.querySelector("link"));
            let r = 0;
            e.forEach(e => {
                const n = e.classList.contains("illegal-example"),
                    a = {
                        number: r,
                        illegal: n
                    },
                    {
                        title: c
                    } = e;
                if ("aside" === e.localName) {
                    const n = h(e, ++r, a);
                    e.prepend(n), c ? (0, t.addId)(e, "example-".concat(r), c) : (0, t.addId)(e, "example", String(r));
                    const {
                        id: o
                    } = e;
                    n.querySelector("a.self-link").href = "#".concat(o), (0, i.pub)("example", a)
                } else {
                    const n = !!e.closest("aside");
                    n || ++r, a.content = e.innerHTML, e.classList.remove("example", "illegal-example");
                    const u = e.id ? e.id : null;
                    u && e.removeAttribute("id");
                    const l = h(e, n ? 0 : r, a),
                        d = (0, o.default)(s(), u, l, e.cloneNode(!0));
                    c && (0, t.addId)(d, "example-".concat(r), c), (0, t.addId)(d, "example", String(r)), d.querySelector("a.self-link").href = "#".concat(d.id), e.replaceWith(d), n || (0, i.pub)("example", a)
                }
            })
        }, e.name = void 0, n = a(n), o = a(o);
        e.name = "core/examples";
        const f = {
                en: {
                    example: "Example"
                },
                nl: {
                    example: "Voorbeeld"
                },
                es: {
                    example: "Ejemplo"
                }
            },
            p = f[r.lang in f ? r.lang : "en"];

        function h(e, t, n) {
            n.title = e.title, n.title && e.removeAttribute("title");
            const r = t > 0 ? " ".concat(t) : "",
                i = n.title ? (0, o.default)(l(), n.title) : "";
            return (0, o.default)(u(), p.example, r, i)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = "/* --- EXAMPLES --- */\nspan.example-title {\n    text-transform: none;\n}\naside.example, div.example, div.illegal-example {\n    padding: 0.5em;\n    margin: 1em 0;\n    position: relative;\n    clear: both;\n}\ndiv.illegal-example { color: red }\ndiv.illegal-example p { color: black }\naside.example, div.example {\n    padding: .5em;\n    border-left-width: .5em;\n    border-left-style: solid;\n    border-color: #e0cb52;\n    background: #fcfaee;\n}\n\naside.example div.example {\n    border-left-width: .1em;\n    border-color: #999;\n    background: #fff;\n}\naside.example div.example span.example-title {\n    color: #999;\n}\n"
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(66), n(3), n(2), n(1)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {
            const e = y(["<style>", "</style>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = y(['<a\n    class="', '"\n    style="', '"\n    href="', '">', "</a>"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = y(['<span class="issue-label">: ', "", "</span>"]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = y(['<span\n      class="issue-label"\n      aria-label="', '">: ', "", "</span>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = y(["<p>", "</p>"]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = y(['\n    <li><a href="', '">', "</a>", "</li>\n  "]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = y(['<span style="text-transform: none">: ', "</span>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = y(["<a href='", "'/>"]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = y(["<a href='", "'/>"]);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = y(["\n        <div role='heading' class='", "'>", "</div>"]);
            return g = function() {
                return e
            }, e
        }

        function b() {
            const e = y(['<div class="', '" role="', '"></div>']);
            return b = function() {
                return e
            }, e
        }

        function y(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            const r = document.querySelectorAll(".issue, .note, .warning, .ednote");
            if (!r.length) return;
            const a = await async function(e) {
                if (!e) return new Map;
                const t = [...document.querySelectorAll(".issue[data-number]")].map(e => Number.parseInt(e.dataset.number, 10)).filter(e => e);
                if (!t.length) return new Map;
                const n = new URL("issues", e);
                n.searchParams.set("issues", t.join(","));
                const r = await fetch(n.href);
                if (!r.ok) {
                    const e = "Error fetching issues from GitHub. (HTTP Status ".concat(r.status, ").");
                    return (0, i.pub)("error", e), new Map
                }
                const o = await r.json();
                return new Map(Object.entries(o))
            }(e.githubAPI), {
                head: y
            } = document;
            y.insertBefore((0, o.default)(s(), [n.default]), y.querySelector("link")),
                function(e, n, r) {
                    const a = !!document.querySelector(".issue[data-number]");
                    let s = 0;
                    const y = document.createElement("ul");
                    e.forEach(e => {
                            const {
                                type: d,
                                displayType: v,
                                isFeatureAtRisk: w
                            } = function(e, t) {
                                const n = e.classList.contains("issue"),
                                    r = e.classList.contains("warning"),
                                    o = e.classList.contains("ednote"),
                                    i = e.classList.contains("atrisk"),
                                    a = n ? "issue" : r ? "warning" : o ? "ednote" : "note",
                                    s = n ? i ? t.l10n.feature_at_risk : t.l10n.issue : r ? t.l10n.warning : o ? t.l10n.editors_note : t.l10n.note;
                                return {
                                    type: a,
                                    displayType: s,
                                    isFeatureAtRisk: i
                                }
                            }(e, r), x = "issue" === d, k = "span" === e.localName, {
                                number: C
                            } = e.dataset, S = {
                                type: d,
                                inline: k,
                                title: e.title
                            };
                            if (!x || k || a ? C && (S.number = Number(C)) : (s++, S.number = s), !k) {
                                const k = w ? "".concat(d, " atrisk") : d,
                                    E = "note" === d ? "note" : null,
                                    O = (0, o.default)(b(), k, E),
                                    T = document.createElement("span"),
                                    j = (0, o.default)(g(), "".concat(d, "-title marker"), T);
                                (0, t.addId)(j, "h", d);
                                let _, P = v;
                                if (e.id ? (O.id = e.id, e.removeAttribute("id")) : (0, t.addId)(O, "issue-container", S.number ? "number-".concat(S.number) : ""), x) {
                                    if (a) {
                                        if (C) {
                                            P += " ".concat(C);
                                            const e = function(e, t, {
                                                isFeatureAtRisk: n = !1
                                            } = {}) {
                                                if (!n && t.issueBase) return (0, o.default)(m(), t.issueBase + e);
                                                if (n && t.atRiskBase) return (0, o.default)(h(), t.atRiskBase + e)
                                            }(C, r, {
                                                isFeatureAtRisk: w
                                            });
                                            e && (T.before(e), e.append(T)), T.classList.add("issue-number"), (_ = n.get(C)) || (0, i.pub)("warning", "Failed to fetch issue number ".concat(C)), _ && !S.title && (S.title = _.title)
                                        }
                                    } else P += " ".concat(s);
                                    void 0 !== S.number && y.append(function(e, t, n) {
                                        const r = "".concat(e, " ").concat(t.number),
                                            i = t.title ? (0, o.default)(p(), t.title) : "";
                                        return (0, o.default)(f(), "#".concat(n), r, i)
                                    }(r.l10n.issue, S, O.id))
                                }
                                if (T.textContent = P, S.title) {
                                    e.removeAttribute("title");
                                    const {
                                        repoURL: n = ""
                                    } = r.github || {}, i = _ ? _.labels : [];
                                    _ && "CLOSED" === _.state && O.classList.add("closed"), j.append(function(e, n, r) {
                                        const i = e.map(e => (function(e, t) {
                                                const {
                                                    color: n,
                                                    name: r
                                                } = e, i = new URL("./issues/", t);
                                                i.searchParams.set("q", 'is:issue is:open label:"'.concat(e.name, '"'));
                                                const a = parseInt(n, 16),
                                                    s = isNaN(a) || function(e) {
                                                        return .2126 * (e >> 16 & 255) + .7152 * (e >> 8 & 255) + .0722 * (e >> 0 & 255) > 140
                                                    }(a) ? "light" : "dark",
                                                    u = "respec-gh-label respec-label-".concat(s),
                                                    l = "background-color: #".concat(n);
                                                return (0, o.default)(c(), u, l, i.href, r)
                                            })(e, r)),
                                            a = e.map(e => e.name),
                                            s = (0, t.joinAnd)(a);
                                        i.length && i.unshift(document.createTextNode(" "));
                                        if (a.length) {
                                            const e = "This issue is labelled as ".concat(s, ".");
                                            return (0, o.default)(l(), e, n, i)
                                        }
                                        return (0, o.default)(u(), n, i)
                                    }(i, S.title, n))
                                }
                                let A = e;
                                e.replaceWith(O), A.classList.remove(d), A.removeAttribute("data-number"), _ && !A.innerHTML.trim() && (A = document.createRange().createContextualFragment(_.bodyHTML)), O.append(j, A);
                                const R = (0, t.parents)(j, "section").length + 2;
                                j.setAttribute("aria-level", R)
                            }(0, i.pub)(S.type, S)
                        }),
                        function(e) {
                            const t = document.getElementById("issue-summary");
                            if (!t) return;
                            const n = t.querySelector("h2, h3, h4, h5, h6");
                            e.hasChildNodes() ? t.append(e) : t.append((0, o.default)(d(), w.no_issues_in_spec)), (!n || n && n !== t.firstElementChild) && t.insertAdjacentHTML("afterbegin", "<h2>".concat(w.issue_summary, "</h2>"))
                        }(y)
                }(r, a, e), document.querySelectorAll(".ednote").forEach(e => {
                    e.classList.remove("ednote"), e.classList.add("note")
                })
        }, e.name = void 0, n = a(n), o = a(o);
        e.name = "core/issues-notes";
        const v = {
                en: {
                    issue_summary: "Issue Summary",
                    no_issues_in_spec: "There are no issues listed in this specification."
                },
                nl: {
                    issue_summary: "Lijst met issues",
                    no_issues_in_spec: "Er zijn geen problemen vermeld in deze specificatie."
                },
                es: {
                    issue_summary: "Resumen de la cuestión",
                    no_issues_in_spec: "No hay problemas enumerados en esta especificación."
                }
            },
            w = v[r.lang in v ? r.lang : "en"]
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '/* --- ISSUES/NOTES --- */\n.issue-label {\n    text-transform: initial;\n}\n\n.warning > p:first-child { margin-top: 0 }\n.warning {\n    padding: .5em;\n    border-left-width: .5em;\n    border-left-style: solid;\n}\nspan.warning { padding: .1em .5em .15em; }\n\n.issue.closed span.issue-number {\n    text-decoration: line-through;\n}\n\n.warning {\n    border-color: #f11;\n    border-width: .2em;\n    border-style: solid;\n    background: #fbe9e9;\n}\n\n.warning-title:before{\n    content: "⚠"; /*U+26A0 WARNING SIGN*/\n    font-size: 1.3em;\n    float: left;\n    padding-right: .3em;\n    margin-top: -0.3em;\n}\n\nli.task-list-item {\n    list-style: none;\n}\n\ninput.task-list-item-checkbox {\n    margin: 0 0.35em 0.25em -1.6em;\n    vertical-align: middle;\n}\n\n.issue a.respec-gh-label {\n  padding: 5px;\n  margin: 0 2px 0 2px;\n  font-size: 10px;\n  text-transform: none;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 4px;\n  position: relative;\n  bottom: 2px;\n  border: none;\n}\n\n.issue a.respec-label-dark {\n  color: #fff;\n  background-color: #000;\n}\n\n.issue a.respec-label-light {\n  color: #000;\n  background-color: #fff;\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(2), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(['<a href="', '">Req. ', "</a>"]);
            return o = function() {
                return e
            }, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            document.querySelectorAll(".req").forEach((e, n) => {
                const r = "#".concat(e.getAttribute("id")),
                    i = (0, t.default)(o(), r, n + 1);
                e.prepend(i, ": ")
            }), document.querySelectorAll("a.reqRef[href]").forEach(e => {
                const t = e.getAttribute("href").substring(1),
                    r = document.getElementById(t);
                let o;
                if (r) o = r.querySelector("a:first-child").textContent;
                else {
                    o = "Req. not found '".concat(t, "'");
                    const r = "Requirement not found in element `a.reqRef`: ".concat(t);
                    (0, n.pub)("error", r), console.warn(r, e)
                }
                e.textContent = o
            })
        }, e.name = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };
        e.name = "core/requirements"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(3), n(2), n(1)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a() {
            const e = l(["<h2>Best Practices Summary</h2>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = l(["", ": ", ""]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = l(["\n        <li>\n          ", ": ", "\n        </li>\n      "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = l(['\n      <a class="marker self-link" href="', '"><bdi lang="', '">', "", "</bdi></a>"]);
            return u = function() {
                return e
            }, e
        }

        function l(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = document.querySelectorAll(".practicelab"),
                n = d[f],
                i = document.getElementById("bp-summary"),
                l = i ? document.createElement("ul") : null;
            [...e].forEach((e, o) => {
                const i = (0, t.addId)(e, "bp"),
                    a = (0, r.default)(u(), "#".concat(i), f, n.best_practice, o + 1);
                if (l) {
                    const n = (0, r.default)(c(), a, (0, t.makeSafeCopy)(e));
                    l.appendChild(n)
                }
                const d = e.closest("div");
                if (!d) return void e.classList.add("advisement");
                d.classList.add("advisement");
                const p = (0, r.default)(s(), a.cloneNode(!0), e);
                d.prepend(...p.childNodes)
            }), e.length ? i && (i.appendChild((0, r.default)(a())), i.appendChild(l)) : i && ((0, o.pub)("warn", "Using best practices summary (#bp-summary) but no best practices found."), i.remove())
        }, e.name = void 0, r = (i = r) && i.__esModule ? i : {
            default: i
        };
        e.name = "core/best-practices";
        const d = {
                en: {
                    best_practice: "Best Practice "
                }
            },
            f = n.lang in d ? n.lang : "en"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(3), n(2)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;

        function i() {
            const e = l(["<li class='tofline'>\n    <a class='tocxref' href='", "'>", "</a>\n  </li>"]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = l(["<bdi class='figno'>", "</bdi>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = l(["<span class='fig-title'>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = l(["<ul class='tof'>", "</ul>"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = l(["<h2>", "</h2>"]);
            return u = function() {
                return e
            }, e
        }

        function l(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            e = document, e.querySelectorAll(":not(picture)>img:not([width]):not([height]):not([srcset])").forEach(e => {
                0 !== e.naturalHeight && 0 !== e.naturalWidth && (e.height = e.naturalHeight, e.width = e.naturalWidth)
            });
            var e;
            const n = function() {
                    const e = [];
                    return document.querySelectorAll("figure").forEach((n, o) => {
                        const c = n.querySelector("figcaption");
                        c ? (! function(e, n, o) {
                            const i = n.textContent;
                            (0, t.addId)(e, "fig", i), (0, t.wrapInner)(n, (0, r.default)(s())), n.prepend(f.fig, (0, r.default)(a(), o + 1), " ")
                        }(n, c, o), e.push(function(e, n) {
                            const o = n.cloneNode(!0);
                            return o.querySelectorAll("a").forEach(e => {
                                (0, t.renameElement)(e, "span").removeAttribute("href")
                            }), (0, r.default)(i(), "#".concat(e), o.childNodes)
                        }(n.id, c))) : (0, t.showInlineWarning)(n, "Found a `<figure>` without a `<figcaption>`")
                    }), e
                }(),
                o = document.getElementById("tof");
            n.length && o && (! function(e) {
                if (e.classList.contains("appendix") || e.classList.contains("introductory") || e.closest("section")) return;
                const t = function(e) {
                    const t = [];
                    for (const n of function*(e) {
                            let t = e;
                            for (; t.previousElementSibling;) t = t.previousElementSibling, yield t
                        }(e)) "section" === n.localName && t.push(n);
                    return t
                }(e);
                t.every(e => e.classList.contains("introductory")) ? e.classList.add("introductory") : t.some(e => e.classList.contains("appendix")) && e.classList.add("appendix")
            }(o), o.append((0, r.default)(u(), f.list_of_figures), (0, r.default)(c(), n)))
        }, e.name = void 0, r = (o = r) && o.__esModule ? o : {
            default: o
        };
        e.name = "core/figures";
        const d = {
                en: {
                    list_of_figures: "List of Figures",
                    fig: "Figure "
                },
                ja: {
                    fig: "図",
                    list_of_figures: "図のリスト"
                },
                ko: {
                    fig: "그림 ",
                    list_of_figures: "그림 목록"
                },
                nl: {
                    fig: "Figuur ",
                    list_of_figures: "Lijst met figuren"
                },
                es: {
                    fig: "Figura ",
                    list_of_figures: "Lista de Figuras"
                },
                zh: {
                    fig: "圖 ",
                    list_of_figures: "List of Figures"
                }
            },
            f = d[n.lang in d ? n.lang : "en"]
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(107), n(71), n(0), n(72), n(2), n(5)], void 0 === (o = function(e, t, n, r, o, i, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = E(["", ""]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = E(['<a\n    data-idl="', '"\n    data-link-type="', '"\n    data-title="', '"\n    data-xref-type="', '"\n    >', "</a>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = E(['<dfn data-export data-dfn-type="', '">', "</dfn>"]);
            return d = function() {
                return e
            }, e
        }

        function f() {
            const e = E(['<a\n     data-link-type="dfn"\n     data-lt="default toJSON operation">', "</a>"]);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = E(['<a\n      data-link-for="', '"\n      data-link-type="', '"\n      href="', '"\n      class="internalDFN"\n      ><code>', "</code></a>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = E(['<a data-xref-type="extended-attribute">', "</a>"]);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = E(['<span class="extAttr">', "</span>"]);
            return m = function() {
                return e
            }, e
        }

        function g() {
            const e = E(["<span class='", "' id='", "' data-idl data-title='", "'>", "</span>"]);
            return g = function() {
                return e
            }, e
        }

        function b() {
            const e = E(["<span class='", "'>", "</span>"]);
            return b = function() {
                return e
            }, e
        }

        function y() {
            const e = E(['<span class="idlSuperclass">', "</span>"]);
            return y = function() {
                return e
            }, e
        }

        function v() {
            const e = E(['<span class="idlType">', "</span>"]);
            return v = function() {
                return e
            }, e
        }

        function w() {
            const e = E(['<span class="idlParamName">', "</span>"]);
            return w = function() {
                return e
            }, e
        }

        function x() {
            const e = E(['<a\n      data-xref-type="', '" data-cite="', '" data-lt="', '">', "</a>"]);
            return x = function() {
                return e
            }, e
        }

        function k() {
            const e = E(['<a data-xref-type="dfn" data-cite="WebIDL">', "</a>"]);
            return k = function() {
                return e
            }, e
        }

        function C() {
            const e = E(['<a data-xref-type="interface" data-cite="WebIDL">', "</a>"]);
            return C = function() {
                return e
            }, e
        }

        function S() {
            const e = E(["<span class='idlSectionComment'>", "</span>"]);
            return S = function() {
                return e
            }, e
        }

        function E(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = document.querySelectorAll("pre.idl");
            if (!e.length) return;
            if (!document.querySelector(".idl:not(pre)")) {
                const e = document.querySelector("head link");
                if (e) {
                    const t = document.createElement("style");
                    t.textContent = o.default, e.before(t)
                }
            }
            const n = [...e].map(R),
                i = t.validate(n);
            for (const o of i) {
                let i = "<pre>".concat(o.context, "</pre>");
                o.autofix && (o.autofix(), i += "Try fixing as:\n      <pre>".concat(t.write(n[o.sourceName]), "</pre>")), (0, r.showInlineError)(e[o.sourceName], "WebIDL validation error: ".concat(o.bareMessage), o.bareMessage, {
                    details: i
                })
            }
            document.normalize()
        }, e.name = void 0, t = function(e) {
            if (e && e.__esModule) return e;
            var t = c();
            if (t && t.has(e)) return t.get(e);
            var n = {};
            if (null != e) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
            }
            n.default = e, t && t.set(e, n);
            return n
        }(t), o = s(o), i = s(i);
        e.name = "core/webidl";
        const O = {},
            T = {},
            j = {
                wrap: e => e.reduce(r.flatten, []).filter(e => "" !== e).map(e => "string" == typeof e ? new Text(e) : e),
                trivia: e => e.trim() ? (0, i.default)(S(), e) : e,
                generic: e => /^[A-Z]/.test(e) ? (0, i.default)(C(), e) : (0, i.default)(k(), e),
                reference(e, t, n) {
                    if ("extended-attribute" === n.type && "Exposed" !== n.name) return e;
                    let r, o = "_IDL_",
                        a = null;
                    switch (t) {
                        case "Window":
                            o = "interface", a = "HTML";
                            break;
                        case "object":
                            o = "interface", a = "WebIDL";
                            break;
                        default:
                            t.includes("Worker") && "extended-attribute" === n.type && (r = "".concat(t, "GlobalScope"), o = "interface", a = ["Worker", "DedicatedWorker", "SharedWorker"].includes(t) ? "HTML" : null)
                    }
                    return (0, i.default)(x(), o, a, r, e)
                },
                name(e, {
                    data: t,
                    parent: n
                }) {
                    if (t.idlType && "argument-type" === t.idlType.type) return (0, i.default)(w(), e);
                    const r = _(e, t, n);
                    if ("enum-value" !== t.type) {
                        const e = n ? "idlName" : "idlID";
                        r.classList.add(e)
                    }
                    return r
                },
                nameless(e, {
                    data: t,
                    parent: n
                }) {
                    switch (t.type) {
                        case "constructor":
                            return _(e, t, n);
                        default:
                            return e
                    }
                },
                type: e => (0, i.default)(v(), e),
                inheritance: e => (0, i.default)(y(), e),
                definition(e, {
                    data: t,
                    parent: n
                }) {
                    const r = function(e) {
                        switch (e.type) {
                            case "callback interface":
                                return "idlInterface";
                            case "operation":
                                return "idlMethod";
                            case "field":
                                return "idlMember";
                            case "enum-value":
                                return "idlEnumItem";
                            case "callback function":
                                return "idlCallback"
                        }
                        return "idl".concat(e.type[0].toUpperCase()).concat(e.type.slice(1))
                    }(t);
                    switch (t.type) {
                        case "includes":
                        case "enum-value":
                            return (0, i.default)(b(), r, e)
                    }
                    const o = n ? n.name : "",
                        {
                            name: a,
                            idlId: s
                        } = A(t, o);
                    return (0, i.default)(g(), r, s, a, e)
                },
                extendedAttribute: e => (0, i.default)(m(), e),
                extendedAttributeReference: e => (0, i.default)(h(), e)
            };

        function _(e, t, o) {
            const s = o ? o.name : "",
                {
                    name: c
                } = A(t, s),
                u = (0, n.findDfn)(t, c, {
                    parent: s
                }),
                h = function(e) {
                    switch (e) {
                        case "operation":
                            return "method";
                        case "field":
                            return "dict-member";
                        case "callback interface":
                        case "interface mixin":
                            return "interface";
                        default:
                            return e
                    }
                }(t.type);
            if (u) {
                t.partial || (u.dataset.export = "", u.dataset.dfnType = h), (0, n.decorateDfn)(u, t, s, c);
                const r = "#".concat(u.id);
                return (0, i.default)(p(), s, h, r, e)
            }
            if ("operation" === t.type && "toJSON" === t.name && t.extAttrs.some(({
                    name: e
                }) => "Default" === e)) return (0, i.default)(f(), e);
            if (!t.partial) {
                const r = (0, i.default)(d(), h, e);
                return (0, a.registerDefinition)(r, [c]), (0, n.decorateDfn)(r, t, s, c), r
            }
            const m = (0, i.default)(l(), t.partial ? "partial" : null, h, t.name, h, e);
            if (c && "typedef" !== t.type && !(t.partial && !u)) {
                const e = "operation" === t.type ? "".concat(c, "()") : c,
                    n = s ? " `".concat(s, "`'s") : "",
                    o = "Missing `<dfn>` for".concat(n, " `").concat(e, "` ").concat(t.type, ". [More info](https://github.com/w3c/respec/wiki/WebIDL-thing-is-not-defined).");
                (0, r.showInlineWarning)(m, o, "")
            }
            return m
        }
        const P = new WeakMap;

        function A(e, t = "") {
            if (P.has(e)) return P.get(e);
            const n = function(e, t) {
                let n = function(e) {
                        switch (e.type) {
                            case "enum-value":
                                return e.value;
                            case "operation":
                                return e.name;
                            default:
                                return e.name || e.type
                        }
                    }(e),
                    r = function(e, t) {
                        if (!t) return "idl-def-".concat(e.toLowerCase());
                        return "idl-def-".concat(t.toLowerCase(), "-").concat(e.toLowerCase())
                    }(n, t);
                switch (e.type) {
                    case "callback interface":
                    case "dictionary":
                    case "interface":
                    case "interface mixin":
                        r += function(e) {
                            if (!e.partial) return "";
                            T[e.name] || (T[e.name] = 0);
                            return T[e.name] += 1, "-partial-".concat(T[e.name])
                        }(e);
                        break;
                    case "constructor":
                    case "operation": {
                        const o = function(e, t) {
                            const n = "".concat(t, ".").concat(e),
                                r = "".concat(n, "()");
                            let o;
                            O[r] || (O[r] = 0);
                            O[n] ? o = "!overload-".concat(O[n]) : O[n] = 0;
                            return O[r] += 1, O[n] += 1, o || ""
                        }(n, t);
                        o ? (n += o, r += o) : e.arguments.length && (r += e.arguments.map(e => "-".concat(e.name.toLowerCase())).join(""));
                        break
                    }
                }
                return {
                    name: n,
                    idlId: r
                }
            }(e, t);
            return P.set(e, n), n
        }

        function R(e, n) {
            let o;
            try {
                o = t.parse(e.textContent, {
                    sourceName: String(n)
                })
            } catch (t) {
                return (0, r.showInlineError)(e, "Failed to parse WebIDL: ".concat(t.bareMessage, "."), t.bareMessage, {
                    details: "<pre>".concat(t.context, "</pre>")
                }), []
            }
            e.classList.add("def", "idl");
            const s = t.write(o, {
                templates: j
            });
            i.default.bind(e)(u(), s), e.querySelectorAll("[data-idl]").forEach(e => {
                if (e.dataset.dfnFor) return;
                const t = e.dataset.title,
                    n = e.parentElement.closest("[data-idl][data-title]");
                n && (e.dataset.dfnFor = n.dataset.title), (0, a.registerDefinition)(e, [t])
            });
            const c = e.closest("[data-cite], body"),
                {
                    dataset: l
                } = c;
            if (l.cite || (l.cite = "WebIDL"), !/\bwebidl\b/i.test(l.cite)) {
                const e = l.cite.trim().split(/\s+/);
                l.cite = ["WebIDL", ...e].join(" ")
            }
            return o
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(5), n(0)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.findDfn = function(e, t, {
            parent: n = ""
        } = {}) {
            switch (e.type) {
                case "constructor":
                case "operation":
                    return function(e, t, n) {
                        if (n.includes("!overload")) return o(e, t, n);
                        const r = "".concat(n, "()");
                        return o(e, t, r, n)
                    }(e, n, t);
                default:
                    return o(e, n, t)
            }
        }, e.decorateDfn = function(e, r, o, i) {
            if (!e.id) {
                const t = o.toLowerCase(),
                    n = t ? "".concat(t, "-") : "";
                let r = i.toLowerCase().replace(/[()]/g, "").replace(/\s/g, "-");
                "" === r && (r = "the-empty-string"), e.id = "dom-".concat(n).concat(r)
            }
            e.dataset.idl = r.type, e.dataset.title = e.textContent, o && (e.dataset.dfnFor = o);
            switch (r.type) {
                case "operation":
                case "attribute":
                case "field":
                    e.dataset.type = a(r)
            }
            e.querySelector("code") || e.closest("code") || !e.children || (0, n.wrapInner)(e, e.ownerDocument.createElement("code"));
            switch (r.type) {
                case "attribute":
                case "constructor":
                case "operation":
                    ! function(e, n) {
                        const r = e.dataset.lt ? e.dataset.lt.split("|") : [];
                        r.push(...n), e.dataset.lt = [...new Set(r)].join("|"), (0, t.registerDefinition)(e, n)
                    }(e, function(e, t, n) {
                        const r = "".concat(t, ".").concat(n);
                        switch (e) {
                            case "constructor":
                            case "operation": {
                                const e = "".concat(n, "()");
                                return ["".concat(r, "()"), r, e, n]
                            }
                            case "attribute":
                                return [r, n]
                        }
                    }(r.type, o, i))
            }
            return e
        };
        const r = new Set(["callback interface", "callback", "dictionary", "enum", "interface mixin", "interface", "typedef"]);

        function o(e, r, ...o) {
            for (const a of o) {
                let o = "enum-value" === e.type && "" === a ? "the-empty-string" : a.toLowerCase(),
                    s = t.definitionMap[o],
                    c = i(s, r, a, e.type);
                if (0 === c.length && "" !== r ? (o = "".concat(r, ".").concat(o), void 0 !== (s = t.definitionMap[o.toLowerCase()]) && 1 === s.length && (c = s, delete t.definitionMap[o], (0, t.registerDefinition)(c[0], [o]))) : o = a, c.length > 1) {
                    const e = "WebIDL identifier `".concat(a, "` ").concat(r ? "for `".concat(r, "`") : "", " is defined multiple times");
                    (0, n.showInlineError)(c, e, "Duplicate definition.")
                }
                if (c.length) return a !== o && (c[0].dataset.lt = o), c[0]
            }
        }

        function i(e, t, n, o) {
            if (!e) return [];
            const i = e.filter(e => {
                const n = e.closest("[data-dfn-for]");
                return n && n.dataset.dfnFor === t
            });
            if (0 === i.length && "" === t && 1 === e.length) return e[0].textContent === n ? e : [];
            if (r.has(o) && e.length) {
                const t = e.find(e => e.textContent.trim() === n);
                if (t) return [t]
            }
            return i
        }

        function a(e) {
            const {
                idlType: t,
                generic: n,
                union: r
            } = e;
            return "string" == typeof t ? t : n || (r ? t.map(a).join("|") : a(t))
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '/* --- WEB IDL --- */\n\npre.idl {\n  padding: 1em;\n  position: relative;\n}\n\n@media print {\n  pre.idl {\n    white-space: pre-wrap;\n  }\n}\n\npre.idl::before {\n  content: "WebIDL";\n  display: block;\n  width: 150px;\n  background: #90b8de;\n  color: #fff;\n  font-family: sans-serif;\n  font-weight: bold;\n  margin: -1em 0 1em -1em;\n  height: 28px;\n  line-height: 28px;  \n}\n\n.idlID {\n  font-weight: bold;\n  color: #005a9c;\n}\n\n.idlType {\n  color: #005a9c;\n}\n\n.idlName {\n  color: #ff4500;\n}\n\n.idlName a {\n  color: #ff4500;\n  border-bottom: 1px dotted #ff4500;\n  text-decoration: none;\n}\n\na.idlEnumItem {\n  color: #000;\n  border-bottom: 1px dotted #ccc;\n  text-decoration: none;\n}\n\n.idlSuperclass {\n  font-style: italic;\n  color: #005a9c;\n}\n\n\n/*.idlParam*/\n\n.idlParamName,\n.idlDefaultValue {\n  font-style: italic;\n}\n\n.extAttr {\n  color: #666;\n}\n\n\n/*.idlSectionComment*/\n\n.idlSectionComment {\n  color: gray;\n}\n\n.idlIncludes a {\n  font-weight: bold;\n}\n\n.respec-button-copy-paste:focus {\n  text-decoration: none;\n  border-color: #51a7e8;\n  outline: none;\n  box-shadow: 0 0 5px rgba(81, 167, 232, 0.5);\n}\n\n.respec-button-copy-paste:focus:hover,\n.respec-button-copy-paste.selected:focus {\n  border-color: #51a7e8;\n}\n\n.respec-button-copy-paste:hover,\n.respec-button-copy-paste:active,\n.respec-button-copy-paste.zeroclipboard-is-hover,\n.respec-button-copy-paste.zeroclipboard-is-active {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: linear-gradient(#eee, #ddd);\n  border-color: #ccc;\n}\n\n.respec-button-copy-paste:active,\n.respec-button-copy-paste.selected,\n.respec-button-copy-paste.zeroclipboard-is-active {\n  background-color: #dcdcdc;\n  background-image: none;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15)\n}\n\n.respec-button-copy-paste.selected:hover {\n  background-color: #cfcfcf;\n}\n\n.respec-button-copy-paste:disabled,\n.respec-button-copy-paste:disabled:hover,\n.respec-button-copy-paste.disabled,\n.respec-button-copy-paste.disabled:hover {\n  color: rgba(102, 102, 102, 0.5);\n  cursor: default;\n  background-color: rgba(229, 229, 229, 0.5);\n  background-image: none;\n  border-color: rgba(197, 197, 197, 0.5);\n  box-shadow: none;\n}\n\n@media print {\n  .respec-button-copy-paste {\n    visibility: hidden;\n  }\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(0)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = document.querySelector("section#idl-index");
            if (!e) return;
            const n = [2, 3, 4, 5, 6].map(e => "h".concat(e, ":first-child")).join(",");
            if (!e.querySelector(n)) {
                const t = document.createElement("h2");
                e.title ? (t.textContent = e.title, e.removeAttribute("title")) : t.textContent = "IDL Index", e.prepend(t)
            }
            const r = Array.from(document.querySelectorAll("pre.def.idl:not(.exclude)")).filter(e => !e.closest(t.nonNormativeSelector));
            if (0 === r.length) {
                const t = "This specification doesn't declare any Web IDL.";
                return void e.append(t)
            }
            const o = document.createElement("pre");
            o.classList.add("idl", "def"), o.id = "actual-idl-index", r.map(e => {
                const t = document.createDocumentFragment();
                for (const n of e.children) t.appendChild(n.cloneNode(!0));
                return t
            }).forEach(e => {
                o.lastChild && o.append("\n\n"), o.appendChild(e)
            }), o.querySelectorAll("*[id]").forEach(e => e.removeAttribute("id")), e.appendChild(o)
        }, e.name = void 0;
        e.name = "core/webidl-index"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(19), n(3), n(5), n(18), n(1)], void 0 === (o = function(e, t, n, r, o, i, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            const r = function() {
                    const e = new u;
                    return Object.keys(o.definitionMap).forEach(n => {
                        const {
                            result: r,
                            duplicates: i
                        } = function(e) {
                            const n = new Map,
                                r = [];
                            return o.definitionMap[e].forEach(o => {
                                const {
                                    dfnFor: i = ""
                                } = o.dataset;
                                if (n.has(i)) {
                                    const e = "dfn" === n.get(i).localName,
                                        t = "dfn" === o.localName;
                                    if (e) {
                                        if (!t) return;
                                        r.push(o)
                                    }
                                }
                                n.set(i, o), (0, t.addId)(o, "dfn", e)
                            }), {
                                result: n,
                                duplicates: r
                            }
                        }(n);
                        e.set(n, r), i.length > 0 && (0, t.showInlineError)(i, s[c].duplicateMsg(n), s[c].duplicateTitle)
                    }), e
                }(),
                d = [],
                f = [];
            if (document.querySelectorAll("a[data-cite=''], a:not([href]):not([data-cite]):not(.logo):not(.externalDFN)").forEach(e => {
                    const n = (0, t.getLinkTargets)(e);
                    n.some(n => (function(e, n, r, o) {
                        const {
                            linkFor: i
                        } = n.dataset;
                        if (!r.has(e.title) || !r.get(e.title).get(e.for)) return !1;
                        const a = r.get(e.title).get(e.for);
                        if (a.dataset.cite) n.dataset.cite = a.dataset.cite;
                        else if (i && !r.get(i)) o.push(n);
                        else if (a.classList.contains("externalDFN")) {
                            const e = a.dataset.lt ? a.dataset.lt.split("|") : [];
                            n.dataset.lt = e[0] || a.textContent, o.push(n)
                        } else "partial" === n.dataset.idl ? o.push(n) : (n.href = "#".concat(a.id), n.classList.add("internalDFN"));
                        n.hasAttribute("data-link-type") || (n.dataset.linkType = "idl" in a.dataset ? "idl" : "dfn");
                        (function(e) {
                            if (e.closest("code,pre")) return !0;
                            if (1 !== e.childNodes.length) return !1;
                            const [t] = e.childNodes;
                            return "code" === t.localName
                        })(a) && function(e, n) {
                            const r = e.textContent.trim(),
                                o = n.dataset.hasOwnProperty("idl"),
                                i = function(e, t) {
                                    const {
                                        dataset: n
                                    } = e;
                                    if (e.textContent.trim() === t) return !0;
                                    if (n.title === t) return !0;
                                    if (n.lt) return n.lt.split("|").includes(t);
                                    return !1
                                }(n, r);
                            o && !i || (0, t.wrapInner)(e, document.createElement("code"))
                        }(n, a);
                        return !0
                    })(n, e, r, d)) || 0 === n.length || ("" === e.dataset.cite ? f.push(e) : d.push(e))
                }), l(f), e.xref) {
                d.push(... function() {
                    const e = document.querySelectorAll("a[data-cite]:not([data-cite='']):not([data-cite*='#']), dfn[data-cite]:not([data-cite='']):not([data-cite*='#'])"),
                        t = document.querySelectorAll("dfn.externalDFN");
                    return [...e].filter(e => {
                        if ("" === e.textContent.trim()) return !1;
                        const t = e.closest("[data-cite]");
                        return !t || "" !== t.dataset.cite
                    }).concat(...t)
                }());
                try {
                    await (0, n.run)(e, d)
                } catch (e) {
                    console.error(e), l(d)
                }
            } else l(d);
            await (0, i.linkInlineCitations)(document, e), (0, a.pub)("end", "core/link-to-dfn")
        }, e.name = void 0;
        e.name = "core/link-to-dfn";
        const s = {
                en: {
                    duplicateMsg: e => "Duplicate definition(s) of '".concat(e, "'"),
                    duplicateTitle: "This is defined more than once in the document."
                }
            },
            c = r.lang in s ? r.lang : "en";
        class u extends Map {
            constructor(e = []) {
                return super(), e.forEach(([e, t]) => {
                    this.set(e, t)
                }), this
            }
            set(e, t) {
                return super.set(e.toLowerCase(), t), this
            }
            get(e) {
                return super.get(e.toLowerCase())
            }
            has(e) {
                return super.has(e.toLowerCase())
            }
            delete(e) {
                return super.delete(e.toLowerCase())
            }
        }

        function l(e) {
            e.forEach(e => {
                (0, t.showInlineWarning)(e, 'Found linkless `<a>` element with text "'.concat(e.textContent, '" but no matching `<dfn>`'), "Linking error: not matching `<dfn>`")
            })
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(19), n(0), n(17)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.resolveXrefCache = async function(e) {
            try {
                const n = await i();
                return await async function(e, n) {
                    if (await async function(e) {
                            const n = await e.get("__LAST_VERSION_CHECK__"),
                                r = Date.now();
                            if (!n) return await e.set("__LAST_VERSION_CHECK__", r), !1;
                            if (r - n < o) return !1;
                            const i = new URL("meta/version", t.API_URL).href,
                                a = await fetch(i);
                            if (!a.ok) return !1;
                            const s = await a.text();
                            return await e.set("__LAST_VERSION_CHECK__", r), parseInt(s, 10) > n
                        }(n)) return await n.clear(), new Map;
                    return await n.getMany(e.map(e => e.id))
                }(e, n)
            } catch (e) {
                return console.error(e), new Map
            }
        }, e.cacheXrefData = async function(e) {
            try {
                const t = await i();
                await t.addMany(e)
            } catch (e) {
                console.error(e)
            }
        }, e.clearXrefData = async function() {
            try {
                const e = await i();
                await e.clear()
            } catch (e) {
                console.error(e)
            }
        };
        const o = 18e6;
        async function i() {
            const {
                openDB: e
            } = await (0, r.importIdb)(), t = await e("xref", 1, {
                upgrade(e) {
                    e.createObjectStore("xrefs")
                }
            });
            return new n.IDBKeyVal(t, "xrefs")
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(2), n(1)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;

        function i() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["", ""]);
            return i = function() {
                return e
            }, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            if (!document.getElementById("gh-contributors")) return;
            if (!e.github) {
                const e = "Requested list of contributors from GitHub, but [`github`](https://github.com/w3c/respec/wiki/github) configuration option is not set.";
                return void(0, r.pub)("error", e)
            }
            const o = e.editors.map(e => e.name);
            await async function(e, o) {
                const a = document.getElementById("gh-contributors");
                if (!a) return;
                a.textContent = "Fetching list of contributors...";
                const s = await async function() {
                    const {
                        href: n
                    } = new URL("contributors", o);
                    try {
                        const r = await (0, t.fetchAndCache)(n);
                        if (!r.ok) throw new Error("Request to ".concat(n, " failed with status code ").concat(r.status));
                        return (await r.json()).filter(t => !e.includes(t.name || t.login))
                    } catch (e) {
                        return (0, r.pub)("error", "Error loading contributors from GitHub."), console.error(e), null
                    }
                }();
                null !== s ? function(e, r) {
                    const o = e.sort((e, t) => {
                        const n = e.name || e.login,
                            r = t.name || t.login;
                        return n.toLowerCase().localeCompare(r.toLowerCase())
                    });
                    if ("UL" === r.tagName) return void(0, n.default)(r)(i(), o.map(({
                        name: e,
                        login: t
                    }) => '<li><a href="https://github.com/'.concat(t, '">').concat(e || t, "</a></li>")));
                    const a = o.map(e => e.name || e.login);
                    r.textContent = (0, t.joinAnd)(a)
                }(s, a) : a.textContent = "Failed to fetch contributors."
            }(o, e.githubAPI)
        }, e.name = void 0, n = (o = n) && o.__esModule ? o : {
            default: o
        };
        e.name = "core/contrib"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            [...document.querySelectorAll("section:not(.introductory)")].map(e => e.querySelector("h1, h2, h3, h4, h5, h6")).filter(e => e).forEach(e => {
                const n = Math.min(function(e, t) {
                    const n = [];
                    for (; e != e.ownerDocument.body;) e.matches(t) && n.push(e), e = e.parentElement;
                    return n
                }(e, "section").length + 1, 6);
                (0, t.renameElement)(e, "h".concat(n))
            })
        }, e.name = void 0;
        e.name = "core/fix-headers"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(3), n(2)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;

        function i() {
            const e = f(["<p role='navigation' id='back-to-top'><a href='#title'><abbr title='Back to Top'>&uarr;</abbr></a></p>"]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = f(['<h2 class="introductory">', "</h2>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = f(['<nav id="toc">']);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = f(["<li class='tocline'>", "</li>"]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = f(['<a href="', '" class="tocxref"/>']);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = f(["<bdi class='secno'>", " </bdi>"]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = f(["<ol class='toc'>"]);
            return d = function() {
                return e
            }, e
        }

        function f(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            "tocIntroductory" in e == !1 && (e.tocIntroductory = !1);
            "maxTocLevel" in e == !1 && (e.maxTocLevel = 1 / 0);
            if (function() {
                    const e = function() {
                        const e = h.map(e => "section:not(.introductory) ".concat(e, ":first-child")).join(",");
                        return [...document.querySelectorAll(e)].filter(e => !e.closest("section.introductory"))
                    }();
                    if (!e.length) return;
                    e.forEach(e => {
                        const n = Math.min((0, t.parents)(e, "section").length + 1, 6),
                            r = "h".concat(n);
                        e.localName !== r && (0, t.renameElement)(e, r)
                    })
                }(), !e.noTOC) {
                const n = function e(t, n, {
                    prefix: o = ""
                } = {}) {
                    let i = !1;
                    let a = 0;
                    let s = 1;
                    o.length && !o.endsWith(".") && (o += ".");
                    if (0 === t.length) return null;
                    const c = (0, r.default)(d());
                    for (const u of t) {
                        !u.isAppendix || o || i || (a = s, i = !0);
                        let t = u.isIntro ? "" : i ? m.charAt(s - a) : o + s;
                        const d = Math.ceil(t.length / 2);
                        if (1 === d && (t += ".", u.header.before(document.createComment("OddPage"))), u.isIntro || (s += 1, u.header.prepend((0, r.default)(l(), t))), d <= n) {
                            const r = y(u.header, u.element.id),
                                o = e(u.subsections, n, {
                                    prefix: t
                                });
                            o && r.append(o), c.append(r)
                        }
                    }
                    return c
                }(function e(n, {
                    tocIntroductory: r = !1
                } = {}) {
                    const o = (0, t.children)(n, r ? "section" : "section:not(.introductory)");
                    const i = [];
                    for (const n of o) {
                        const o = n.classList.contains("notoc");
                        if (!n.children.length || o) continue;
                        const a = n.children[0];
                        if (!p.includes(a.localName)) continue;
                        const s = a.textContent;
                        (0, t.addId)(n, null, s), i.push({
                            element: n,
                            header: a,
                            title: s,
                            isIntro: n.classList.contains("introductory"),
                            isAppendix: n.classList.contains("appendix"),
                            subsections: e(n, {
                                tocIntroductory: r
                            })
                        })
                    }
                    return i
                }(document.body, {
                    tocIntroductory: e.tocIntroductory
                }), e.maxTocLevel);
                n && function(e) {
                    if (!e) return;
                    const n = (0, r.default)(s()),
                        o = (0, r.default)(a(), b.toc);
                    (0, t.addId)(o), n.append(o, e);
                    const c = document.getElementById("toc") || document.getElementById("sotd") || document.getElementById("abstract");
                    c && ("toc" === c.id ? c.replaceWith(n) : c.after(n));
                    const u = (0, r.default)(i());
                    document.body.append(u)
                }(n)
            }
        }, e.name = void 0, r = (o = r) && o.__esModule ? o : {
            default: o
        };
        const p = ["h2", "h3", "h4", "h5", "h6"],
            h = ["h1", ...p],
            m = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        e.name = "core/structure";
        const g = {
                en: {
                    toc: "Table of Contents"
                },
                nl: {
                    toc: "Inhoudsopgave"
                },
                es: {
                    toc: "Tabla de Contenidos"
                }
            },
            b = g[n.lang in g ? n.lang : "en"];

        function y(e, n) {
            const o = (0, r.default)(u(), "#".concat(n));
            var i;
            return o.append(...e.cloneNode(!0).childNodes), (i = o).querySelectorAll("a").forEach(e => {
                const n = (0, t.renameElement)(e, "span");
                n.className = "formerLink", n.removeAttribute("href")
            }), i.querySelectorAll("dfn").forEach(e => {
                (0, t.renameElement)(e, "span").removeAttribute("id")
            }), (0, r.default)(c(), o)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(3), n(2)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["<p><em>", "</em></p>"]);
            return o = function() {
                return e
            }, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            Array.from(document.querySelectorAll("section.informative")).map(e => e.querySelector("h2, h3, h4, h5, h6")).filter(e => e).forEach(e => {
                e.after((0, n.default)(o(), a.informative))
            })
        }, e.name = void 0, n = (r = n) && r.__esModule ? r : {
            default: r
        };
        e.name = "core/informative";
        const i = {
                en: {
                    informative: "This section is non-normative."
                },
                nl: {
                    informative: "Dit onderdeel is niet normatief."
                }
            },
            a = i[t.lang in i ? t.lang : "en"]
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(2)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(['\n      <a href="', '" class="self-link" aria-label="§"></a>\n    ']);
            return o = function() {
                return e
            }, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            const r = document.querySelectorAll("section:not(.head):not(.introductory) h2, h3, h4, h5, h6");
            for (const i of r) {
                if ((0, t.addId)(i), !e.addSectionLinks) continue;
                const r = i.parentElement.id || i.id;
                i.appendChild((0, n.default)(o(), "#".concat(r)))
            }
        }, e.name = void 0, n = (r = n) && r.__esModule ? r : {
            default: r
        };
        e.name = "core/id-headers"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(1), n(82), n(0), n(2)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            const e = g(['\n    <div class="caniuse-browser">\n      ', "\n      <ul>\n        ", "\n      </ul>\n    </div>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = g(['\n      <button class="', '" title="', '">', "</button>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = g(["\n    ", '\n    <a href="', '"\n      title="Get details at caniuse.com">More info\n    </a>']);
            return c = function() {
                return e
            }, e
        }

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(n, !0).forEach((function(t) {
                    d(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f() {
            const e = g(['\n      <a href="', '">caniuse.com</a>']);
            return f = function() {
                return e
            }, e
        }

        function p() {
            const e = g(['\n    <dt class="caniuse-title">Browser support:</dt>\n    <dd class="caniuse-stats">', "</dd>"]);
            return p = function() {
                return e
            }, e
        }

        function h() {
            const e = g(['<a href="', '">caniuse.com</a>']);
            return h = function() {
                return e
            }, e
        }

        function m() {
            const e = g(['\n    <style class="removeOnSave">', "</style>"]);
            return m = function() {
                return e
            }, e
        }

        function g(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            if (!e.caniuse) return;
            const r = function(e) {
                const n = {
                    versions: 4
                };
                if ("string" == typeof e.caniuse) return l({
                    feature: e.caniuse
                }, n);
                const r = l({}, n, {}, e.caniuse),
                    {
                        browsers: o
                    } = r;
                if (Array.isArray(o)) {
                    const e = o.filter(e => !y.has(e));
                    if (e.length) {
                        const n = e.map(e => '"`'.concat(e, '`"')).join(", ");
                        (0, t.pub)("warn", "Ignoring invalid browser(s): ".concat(n, " in ") + "[`respecConfig.caniuse.browsers`](https://github.com/w3c/respec/wiki/caniuse)")
                    }
                }
                return r
            }(e);
            if (e.caniuse = r, !r.feature) return;
            const i = new URL(r.feature, "https://caniuse.com/").href;
            document.head.appendChild((0, o.default)(m(), n.default));
            const a = document.querySelector(".head dl"),
                s = (async () => {
                    try {
                        const e = r.apiURL || b,
                            t = await async function(e, t) {
                                const {
                                    feature: n,
                                    versions: r,
                                    browsers: o
                                } = t, i = new URLSearchParams;
                                i.set("feature", n), i.set("versions", r), Array.isArray(o) && i.set("browsers", o.join(","));
                                const a = "".concat(e, "?").concat(i.toString()),
                                    s = await fetch(a);
                                return await s.json()
                            }(e, r);
                        return function(e, t) {
                            return (0, o.default)(c(), Object.entries(t).map(w), e)
                        }(i, t)
                    } catch (e) {
                        console.error(e);
                        const n = "Couldn't find feature \"".concat(r.feature, '" on caniuse.com? ') + "Please check the feature key on [caniuse.com](https://caniuse.com)";
                        return (0, t.pub)("error", n), (0, o.default)(h(), i)
                    }
                })(),
                u = (0, o.default)(p(), {
                    any: s,
                    placeholder: "Fetching data from caniuse.com..."
                });
            a.append(...u.childNodes), await s, (0, t.pub)("amend-user-config", {
                caniuse: r.feature
            }), (0, t.sub)("beforesave", e => {
                o.default.bind(e.querySelector(".caniuse-stats"))(f(), i)
            })
        }, e.name = void 0, n = i(n), o = i(o);
        e.name = "core/caniuse";
        const b = "https://respec.org/caniuse/",
            y = new Map([
                ["and_chr", "Chrome (Android)"],
                ["and_ff", "Firefox (Android)"],
                ["and_uc", "UC Browser (Android)"],
                ["android", "Android"],
                ["bb", "Blackberry"],
                ["chrome", "Chrome"],
                ["edge", "Edge"],
                ["firefox", "Firefox"],
                ["ie", "IE"],
                ["ios_saf", "Safari (iOS)"],
                ["op_mini", "Opera Mini"],
                ["op_mob", "Opera Mobile"],
                ["opera", "Opera"],
                ["safari", "Safari"],
                ["samsung", "Samsung Internet"]
            ]),
            v = new Map([
                ["y", "Supported."],
                ["a", "Almost supported (aka Partial support)."],
                ["n", "No support, or disabled by default."],
                ["p", "No support, but has Polyfill."],
                ["u", "Support unknown."],
                ["x", "Requires prefix to work."],
                ["d", "Disabled by default (needs to enabled)."]
            ]);
        if (!document.querySelector("link[rel='preconnect'][href='https://respec.org']")) {
            const e = (0, r.createResourceHint)({
                hint: "preconnect",
                href: "https://respec.org"
            });
            document.head.appendChild(e)
        }

        function w([e, t]) {
            const n = e => {
                    const t = e.filter(e => v.has(e)).map(e => v.get(e));
                    return {
                        className: "caniuse-cell ".concat(e.join(" ")),
                        title: t.join(" ")
                    }
                },
                [r, ...i] = t;
            return (0, o.default)(a(), (([t, r]) => {
                const {
                    className: i,
                    title: a
                } = n(r), c = "".concat(y.get(e) || e, " ").concat(t);
                return (0, o.default)(s(), i, a, c)
            })(r), i.map(([e, t]) => {
                const {
                    className: r,
                    title: o
                } = n(t);
                return '<li class="'.concat(r, '" title="').concat(o, '">').concat(e, "</li>")
            }))
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '/* container for stats */\n.caniuse-stats {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: baseline;\n  cursor: pointer;\n}\n\nbutton.caniuse-cell {\n  margin: 1px 1px 0 0;\n  border: none;\n}\n\n.caniuse-browser {\n  position: relative;\n}\n\n/* handle case when printing */\n@media print {\n  .caniuse-cell.y::before {\n    content: "✔️";\n    padding: 0.5em;\n  }\n\n  .caniuse-cell.n::before{\n    content: "❌";\n    padding: 0.5em;\n  }\n\n  .caniuse-cell.d::before,\n  .caniuse-cell.a::before,\n  .caniuse-cell.x::before,\n  .caniuse-cell.p::before {\n    content: "⚠️";\n    padding: 0.5em;\n  }\n}\n\n/* reset styles, hide old versions by default */\n.caniuse-browser ul {\n  display: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  left: 0;\n  z-index: 2;\n  background: #fff;\n  margin-top: 1px;\n}\n\n.caniuse-stats a {\n  white-space: nowrap;\n  align-self: center;\n  margin-left: .5em;\n}\n\n/* a browser version */\n.caniuse-cell {\n  display: flex;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 90%;\n  height: 0.8cm;\n  margin-right: 1px;\n  margin-top: 0;\n  min-width: 3cm;\n  overflow: visible;\n  justify-content: center;\n  align-items: center;\n}\n\nli.caniuse-cell {\n  margin-bottom: 1px;\n}\n\n.caniuse-cell:focus {\n  outline: none;\n}\n\n.caniuse-cell:hover {\n  color: rgba(0, 0, 0, 1);\n}\n\n/* supports */\n.caniuse-cell.y {\n  background: #8bc34a;\n}\n\n/* no support */\n.caniuse-cell.n {\n  background: #e53935;\n}\n\n/* not supported by default / partial support etc\nsee https://github.com/Fyrd/caniuse/blob/master/CONTRIBUTING.md for stats */\n.caniuse-cell.d,\n.caniuse-cell.a,\n.caniuse-cell.x,\n.caniuse-cell.p {\n  background: #ffc107;\n}\n\n/* show rest of the browser versions */\n.caniuse-stats button:focus + ul,\n.caniuse-stats .caniuse-browser:hover > ul {\n  display: block;\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(2), n(84)], void 0 === (o = function(e, t, n, r) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            const e = l(["<script>\n     function toggleMDNStatus(div) {\n       div.parentNode.classList.toggle('wrapped');\n     }\n  <\/script>"]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = l(["<style>", "</style>"]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = l(['<p class="mdnsupport">\n    ', "\n  </p>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = l(['\n      <a title="', '" href="', '">', "</a>\n  "]);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = l(['<aside class="mdn before wrapped"></aside>']);
            return u = function() {
                return e
            }, e
        }

        function l(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            const {
                shortName: t,
                mdn: o
            } = e;
            if (!t || !o) return;
            const l = o.maxAge || 864e5,
                h = o.specMapUrl || d,
                b = o.baseJsonPath || f,
                y = await m(h, l);
            if (!Object.values(y).some(e => e === "".concat(t, ".json"))) return;
            const v = await m("".concat(b, "/").concat(t, ".json"), l);
            document.head.appendChild((0, n.default)(a(), [r.default])), document.head.appendChild((0, n.default)(i())), [...document.querySelectorAll("[id]")].filter(e => {
                return -1 === ["STYLE", "SCRIPT", "BODY"].indexOf(e.tagName) && v[e.id] && Array.isArray(v[e.id])
            }).forEach(e => {
                const t = v[e.id],
                    r = function(e) {
                        const t = e.closest("section"),
                            {
                                previousElementSibling: r,
                                parentNode: o
                            } = t;
                        if (r && r.classList.contains("mdn")) return r;
                        const i = (0, n.default)(u());
                        return o.insertBefore(i, t), i
                    }(e);
                t.map(e => {
                    const t = document.createElement("div");
                    return function(e, t) {
                        const {
                            slug: r,
                            summary: o
                        } = t;
                        e.innerHTML += '<button onclick="toggleMDNStatus(this.parentNode)" aria-label="Expand MDN details"><b>MDN</b></button>';
                        const i = r.slice(r.indexOf("/") + 1),
                            a = document.createElement("div"),
                            u = "".concat(p).concat(r);
                        (0, n.default)(a)(c(), o, u, i),
                        function(e, t) {
                            if (!t.support) return void(e.innerHTML += '<p class="nosupportdata">No support data.</p>');
                            const r = (0, n.default)(s(), [g(t.support)]);
                            e.appendChild(r)
                        }(a, t), e.appendChild(a)
                    }(t, e), t
                }).forEach(e => r.appendChild(e))
            })
        }, e.name = void 0, n = o(n), r = o(r);
        e.name = "core/mdn-annoatation";
        const d = "https://raw.githubusercontent.com/w3c/mdn-spec-links/master/SPECMAP.json",
            f = "https://w3c.github.io/mdn-spec-links/",
            p = "https://developer.mozilla.org/en-US/docs/Web/",
            h = {
                chrome: "Chrome",
                chrome_android: "Chrome Android",
                edge: "Edge",
                edge_mobile: "Edge Mobile",
                firefox: "Firefox",
                firefox_android: "Firefox Android",
                ie: "Internet Explorer",
                opera: "Opera",
                opera_android: "Opera Android",
                safari: "Safari",
                safari_ios: "Safari iOS",
                samsunginternet_android: "Samsung Internet",
                webview_android: "WebView Android"
            };

        function m(e, n) {
            return e ? (0, t.fetchAndCache)(e, n).then(e => e.json()) : {}
        }

        function g(e) {
            let t = "";

            function n(e, n, r) {
                const o = "Unknown" === n ? "?" : n,
                    i = "".concat(e, " ").concat(n.toLowerCase()),
                    a = '\n      <span class="'.concat(i, '">\n        <span class="browser-name">').concat(h[e], '</span>\n        <span class="version">').concat(r || o, "</span>\n      </span>");
                t += a
            }

            function r(e, t) {
                if (t.version_removed) return void n(e, "No", "");
                const r = t.version_added;
                r ? "boolean" == typeof r ? n(e, r ? "Yes" : "No", "") : n(e, "Yes", "".concat(r, "+")) : n(e, "Unknown", "")
            }
            return Object.keys(h).forEach(t => {
                e[t] ? Array.isArray(e[t]) ? e[t].forEach(e => {
                    r(t, e)
                }) : r(t, e[t]) : n(t, "Unknown", "")
            }), t
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '.mdn {\n  display: block;\n  font: 12px sans-serif;\n  position: absolute;\n  z-index: 9;\n  right: 0.3em;\n  background-color: #eee;\n  margin: -26px 0 0 0;\n  padding: 7px 5px 5px 6px;\n  min-width: 140px;\n  box-shadow: 0 0 3px #999;\n}\n\n.mdn button {\n  cursor: pointer;\n  border: none;\n  color: #000;\n  background: transparent;\n  margin: -8px;\n  outline: none;\n}\n\n.mdn b {\n  color: #fff;\n  background-color: #000;\n  font-weight: normal;\n  font-family: zillaslab, Palatino, "Palatino Linotype", serif;\n  padding: 2px 3px 0px 3px;\n  line-height: 1.3em;\n  vertical-align: top;\n}\n\n.mdn > div > div {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n\n.nosupportdata {\n  font-style: italic;\n  margin-top: 4px;\n  margin-left: 8px;\n  padding-bottom: 8px;\n}\n\n.mdnsupport {\n  display: table;\n  margin-top: 4px;\n}\n\n.mdnsupport > span {\n  display: table-row;\n  padding: 0.2em 0;\n  padding-top: 0.2em;\n  font-size: 9.6px;\n}\n\n.mdnsupport > span > span {\n  display: table-cell;\n  padding: 0 0.5em;\n  vertical-align: top;\n  line-height: 1.5em;\n}\n\n.mdnsupport > span > span:last-child {\n  text-align: right;\n  padding: 0;\n}\n\n.mdnsupport > span.no {\n  color: #cccccc;\n  filter: grayscale(100%);\n}\n\n.mdnsupport > span.unknown {\n  color: #cccccc;\n  filter: grayscale(100%);\n}\n\n.mdnsupport > span.no::before {\n  opacity: 0.5;\n}\n\n.mdnsupport > span.unknown::before {\n  opacity: 0.5;\n}\n\n.mdnsupport > span::before {\n  content: "";\n  display: table-cell;\n  min-width: 1.5em;\n  height: 1.5em;\n  background: no-repeat center center / contain;\n  text-align: right;\n  font-size: 0.75em;\n  font-weight: bold;\n}\n\n.mdnsupport > .chrome::before,\n.mdnsupport > .chrome_android::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/chrome.svg);\n}\n\n.mdnsupport > .edge::before,\n.mdnsupport > .edge_mobile::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/edge.svg);\n}\n\n.mdnsupport > .firefox::before,\n.mdnsupport > .firefox_android::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/firefox.png);\n}\n\n.mdnsupport > .ie::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/ie.png);\n}\n\n.mdnsupport > .opera::before,\n.mdnsupport > .opera_android::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/opera.svg);\n}\n\n.mdnsupport > .safari::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/safari.png);\n}\n\n.mdnsupport > .safari_ios::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/safari-ios.svg);\n}\n\n.mdnsupport > .samsunginternet_android::before {\n  background-image: url(https://resources.whatwg.org/browser-logos/samsung.svg);\n}\n\n.mdnsupport > .webview_android::before {\n  background-image: url(https://cdnjs.loli.net/ajax/libs/browser-logos/41.0.0/android-webview-beta/android-webview-beta_32x32.png);\n}\n\n.mdn.wrapped div:nth-child(n + 3) {\n  display: none;\n}\n\n.mdn div:nth-child(n + 3) > b {\n  color: #eee;\n  background-color: #eee;\n}\n\np + .mdn {\n  margin-top: -45px;\n}\n\n.mdn.before {\n  margin-top: 3em;\n}\n\nh2 + .mdn {\n  margin: -48px 0 0 0;\n}\n\nh3 + .mdn {\n  margin: -46px 0 0 0;\n}\n\nh4 + .mdn {\n  margin: -42px 0 0 0;\n}\n\nh5 + .mdn {\n  margin: -40px 0 0 0;\n}\n\nh6 + .mdn {\n  margin: -40px 0 0 0;\n}\n\n.mdn div {\n  margin: 0;\n}\n\n.mdn :link {\n  color: #0000ee;\n}\n\n.mdn :visited {\n  color: #551a8b;\n}\n\n.mdn :link:active,\n:visited:active {\n  color: #ff0000;\n}\n\n.mdn :link,\n:visited {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.mdn.wrapped {\n  min-width: 0px;\n}\n\n.mdn.wrapped > div > div {\n  display: none;\n}\n\n.mdn:hover {\n  z-index: 11;\n}\n\n.mdn:focus-within {\n  z-index: 11;\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(3), n(2), n(1), n(86), n(6)], void 0 === (o = function(e, t, n, r, o, i) {
        "use strict";
        var a;

        function s() {
            const e = u(['\n      <div class="respec-save-buttons">\n        ', "\n      </div>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = u(['\n    <a\n      href="', '"\n      id="', '"\n      download="', '"\n      type="', '"\n      class="respec-save-button"\n      onclick=', "\n    >", "</a>"]);
            return c = function() {
                return e
            }, e
        }

        function u(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.exportDocument = function(e, t) {
            const n = "Exporting via ui/save-html module's `exportDocument()` is deprecated and will be removed. Use core/exporter `rsDocToDataURL()` instead.";
            return (0, r.pub)("warn", n), console.warn(n), (0, o.rsDocToDataURL)(t)
        }, e.name = void 0, n = (a = n) && a.__esModule ? a : {
            default: a
        };
        e.name = "ui/save-html";
        const l = new URL("https://labs.w3.org/epub-generator/cgi-bin/epub-generator.py");
        l.searchParams.append("type", "respec"), l.searchParams.append("url", document.location.href);
        const d = [{
            id: "respec-save-as-html",
            fileName: "index.html",
            title: "HTML",
            type: "text/html",
            get href() {
                return (0, o.rsDocToDataURL)(this.type)
            }
        }, {
            id: "respec-save-as-xml",
            fileName: "index.xhtml",
            title: "XML",
            type: "application/xml",
            get href() {
                return (0, o.rsDocToDataURL)(this.type)
            }
        }, {
            id: "respec-save-as-epub",
            fileName: "spec.epub",
            title: "EPUB 3",
            type: "application/epub+zip",
            href: l.href
        }];

        function f(e) {
            const {
                id: t,
                href: r,
                fileName: o,
                title: a,
                type: s
            } = e;
            return (0, n.default)(c(), r, t, o, s, () => i.ui.closeModal(), a)
        }
        const p = {
                async show(e) {
                    await document.respecIsReady;
                    const r = (0, n.default)(s(), d.map(f));
                    i.ui.freshModal(t.l10n[t.lang].save_snapshot, r, e)
                }
            },
            h = "download" in HTMLAnchorElement.prototype;
        let m;
        h && (m = i.ui.addCommand(t.l10n[t.lang].save_snapshot, (function() {
            if (!h) return;
            p.show(m)
        }), "Ctrl+Shift+Alt+S", "💾"))
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(9), n(2), n(1)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a() {
            const e = c(['\n    <meta name="generator" content="', '">\n  ']);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = c(['<meta charset="utf-8">']);
            return s = function() {
                return e
            }, e
        }

        function c(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rsDocToDataURL = l, r = (i = r) && i.__esModule ? i : {
            default: i
        };
        const u = new Map([
            ["text/html", "html"],
            ["application/xml", "xml"]
        ]);

        function l(e, n = document) {
            const i = u.get(e);
            if (!i) {
                const t = [...u.values()].join(", "),
                    n = "Invalid format: ".concat(e, ". Expected one of: ").concat(t, ".");
                throw new TypeError(n)
            }
            const c = function(e, n) {
                    const i = n.cloneNode(!0);
                    ! function(e) {
                        const {
                            head: n,
                            body: i,
                            documentElement: c
                        } = e;
                        (0, t.removeCommentNodes)(e), e.querySelectorAll(".removeOnSave, #toc-nav").forEach(e => e.remove()), i.classList.remove("toc-sidebar"), (0, t.removeReSpec)(c);
                        const u = e.createDocumentFragment(),
                            l = e.querySelector("meta[name='viewport']");
                        l && n.firstChild !== l && u.appendChild(l);
                        let d = e.querySelector("meta[charset], meta[content*='charset=']");
                        d || (d = (0, r.default)(s()));
                        u.appendChild(d);
                        const f = "ReSpec ".concat(window.respecVersion || "Developer Channel"),
                            p = (0, r.default)(a(), f);
                        u.appendChild(p), n.prepend(u), (0, o.pub)("beforesave", c)
                    }(i);
                    let c = "";
                    switch (e) {
                        case "xml":
                            c = (new XMLSerializer).serializeToString(i);
                            break;
                        default:
                            i.doctype && (c += (new XMLSerializer).serializeToString(i.doctype)), c += i.documentElement.outerHTML
                    }
                    return c
                }(i, n),
                l = encodeURIComponent(c);
            return "data:".concat(e, ";charset=utf-8,").concat(l)
        }(0, n.expose)("core/exporter", {
            rsDocToDataURL: l
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [n(3), n(0), n(2), n(6), n(7)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a() {
            const e = f(["\n    <div>", '</div>\n    <p class="state" hidden="', '">\n      ', '\n    </p>\n    <section hidden="', '">', "</section>\n  "]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = f(["<div>", "</div>"]);
            return s = function() {
                return e
            }, e
        }

        function c() {
            const e = f(['\n  <header>\n    <p>\n      An Open-Source, Community-Maintained Database of\n      Web Standards & Related References.\n    </p>\n  </header>\n  <div class="searchcomponent">\n    <input\n      name="searchBox"\n      type="search"\n      autocomplete="off"\n      placeholder="Keywords, titles, authors, urls…">\n    <button\n      type="submit">\n        Search\n    </button>\n    <label>\n      <input type="checkbox" name="includeVersions"> Include all versions.\n    </label>\n  </div>\n']);
            return c = function() {
                return e
            }, e
        }

        function u() {
            const e = f(["\n    <dt>\n      [", "]\n    </dt>\n    <dd>", "</dd>\n  "]);
            return u = function() {
                return e
            }, e
        }

        function l() {
            const e = f(['\n    <p class="result-stats">\n      ', " results (", " seconds).\n      ", '\n    </p>\n    <dl class="specref-results">', "</dl>\n  "]);
            return l = function() {
                return e
            }, e
        }

        function d() {
            const e = f(['\n      <p class="state">\n        Your search - <strong> ', " </strong> -\n        did not match any references.\n      </p>\n    "]);
            return d = function() {
                return e
            }, e
        }

        function f(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        n = (i = n) && i.__esModule ? i : {
            default: i
        };
        const p = r.ui.addCommand(e.l10n[e.lang].search_specref, (function() {
                x(), r.ui.freshModal(e.l10n[e.lang].search_specref, g, p), g.querySelector("input[type=search]").focus()
            }), "Ctrl+Shift+Alt+space", "🔎"),
            h = "".concat("https://specref.herokuapp.com/", "search-refs"),
            m = "".concat("https://specref.herokuapp.com/", "reverse-lookup"),
            g = document.createElement("form"),
            b = n.default.bind(g),
            y = n.default.bind(document.createElement("div"));

        function v([e, t]) {
            return n.default.wire(t)(u(), e, (0, o.wireReference)(t))
        }
        g.id = "specref-ui", g.addEventListener("submit", async e => {
            e.preventDefault();
            const {
                searchBox: n
            } = g, r = n.value;
            if (!r) return void n.focus();
            x({
                state: "Searching Specref…"
            });
            const o = new URL(h);
            o.searchParams.set("q", r);
            const i = new URL(m);
            i.searchParams.set("urls", r);
            try {
                const e = performance.now(),
                    a = await Promise.all([fetch(o).then(e => e.json()), fetch(i).then(e => e.json())]),
                    {
                        checked: s
                    } = g.includeVersions;
                x({
                    query: r,
                    results: function({
                        includeVersions: e = !1
                    } = {}) {
                        return (...n) => {
                            const r = Object.assign({}, ...n),
                                o = new Map(Object.entries(r));
                            return Array.from(o).filter(([, e]) => e.aliasOf).map(([e]) => e).reduce((e, t) => e.delete(t) && e, o), e || Array.from(o.values()).filter(e => "object" == typeof e && "versions" in e).reduce(t.flatten, []).forEach(e => {
                                o.delete(e)
                            }), Array.from(o).filter(([, e]) => "object" != typeof e).forEach(([e]) => o.delete(e)), o
                        }
                    }({
                        includeVersions: s
                    })(...a),
                    state: "",
                    timeTaken: Math.round(performance.now() - e) / 1e3
                })
            } catch (e) {
                console.error(e), x({
                    state: "Error! Couldn't do search."
                })
            } finally {
                n.focus()
            }
        });
        const w = n.default.wire()(c());

        function x({
            state: e = "",
            results: t,
            timeTaken: n,
            query: r
        } = {}) {
            t ? b(a(), w, !e, e, !t, t ? function(e, t, n) {
                if (!e.size) return y(d(), t);
                const r = Array.from(e).slice(0, 99).map(v).reduce((e, t) => e.concat(t), []);
                return y(l(), e.size, n, e.size > 99 ? "First 100 results." : "", r)
            }(t, r, n) : []) : b(s(), w)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [n(3), n(5), n(2), n(6)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;

        function i() {
            const e = s(["", ""]);
            return i = function() {
                return e
            }, e
        }

        function a() {
            const e = s(['\n        <li>\n          <a href="', '">\n            ', "\n          </a>\n        </li>\n      "]);
            return a = function() {
                return e
            }, e
        }

        function s(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        n = (o = n) && o.__esModule ? o : {
            default: o
        };
        const c = r.ui.addCommand(e.l10n[e.lang].definition_list, (function() {
                const o = Object.entries(t.definitionMap).sort(([e], [t]) => e.localeCompare(t)).map(([, [e]]) => n.default.wire(e, ":li>a")(a(), "#".concat(e.id), e.textContent));
                l(i(), o), r.ui.freshModal(e.l10n[e.lang].list_of_definitions, u, c)
            }), "Ctrl+Shift+Alt+D", "📔"),
            u = document.createElement("ul");
        u.classList.add("respec-dfn-list");
        const l = n.default.bind(u);
        u.addEventListener("click", e => {
            r.ui.closeModal(), e.stopPropagation()
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [n(3), n(2), n(6)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;

        function o() {
            const e = a(['\n    <td>\n      <a href="', '">\n        ', "\n      </a>\n    </td>\n    <td>\n      ", "\n    </td>\n  "]);
            return o = function() {
                return e
            }, e
        }

        function i() {
            const e = a(['\n  <p>\n    ReSpec is a document production toolchain, with a notable focus on W3C specifications.\n  </p>\n  <p>\n    <a href=\'https://github.com/w3c/respec/wiki\'>Documentation</a>,\n    <a href=\'https://github.com/w3c/respec/issues\'>Bugs</a>.\n  </p>\n  <table border="1" width="100%" hidden="', '">\n    <caption>\n      Loaded plugins\n    </caption>\n    <thead>\n      <tr>\n        <th>\n          Plugin Name\n        </th>\n        <th>\n          Processing time\n        </th>\n      </tr>\n    </thead>\n    <tbody>', "</tbody>\n  </table>\n"]);
            return i = function() {
                return e
            }, e
        }

        function a(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        t = (r = t) && r.__esModule ? r : {
            default: r
        }, window.respecVersion = window.respecVersion || "Developer Edition";
        const s = document.createElement("div"),
            c = t.default.bind(s),
            u = n.ui.addCommand("About ".concat(window.respecVersion), (function() {
                n.ui.freshModal("".concat(e.l10n[e.lang].about_respec, " - ").concat(window.respecVersion), s, u);
                const t = [];
                "getEntriesByType" in performance && performance.getEntriesByType("measure").sort((e, t) => t.duration - e.duration).map(({
                    name: e,
                    duration: t
                }) => {
                    return {
                        name: e,
                        duration: t > 1e3 ? "".concat(Math.round(t / 1e3), " second(s)") : "".concat(t.toFixed(2), " milliseconds")
                    }
                }).map(l).forEach(e => {
                    t.push(e)
                });
                c(i(), !t.length, t)
            }), "Ctrl+Shift+Alt+A", "ℹ️");

        function l({
            name: e,
            duration: n
        }) {
            const r = t.default.bind(document.createElement("tr")),
                i = "https://github.com/w3c/respec/tree/develop/src/".concat(e, ".js");
            return r(o(), i, e, n)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r;
    void 0 === (r = function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            (async () => {
                await document.respecIsReady;
                const e = document.querySelector("#abstract p:first-of-type");
                e && function(e) {
                    const t = e.ownerDocument,
                        n = e.textContent.replace(/\s+/, " ").trim(),
                        r = t.createElement("meta");
                    r.name = "description", r.content = n, t.head.appendChild(r)
                }(e)
            })()
        }, e.name = void 0;
        e.name = "core/seo"
    }.apply(t, [t])) || (e.exports = r)
}, function(e, t, n) {
    var r, o;
    r = [t, n(7), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!e.canonicalURI) switch (e.specStatus) {
                case "CG-DRAFT":
                case "BG-DRAFT":
                case "unofficial":
                    return
            }
            const i = e.shortName ? "https://www.w3.org/TR/".concat(e.shortName, "/") : null;
            switch (e.canonicalURI) {
                case "edDraft":
                    e.edDraftURI ? e.canonicalURI = new URL(e.edDraftURI, document.location.href).href : ((0, n.pub)("warn", "Canonical URI set to edDraft, but no edDraftURI is set in configuration"), e.canonicalURI = null);
                    break;
                case "TR":
                    i ? e.canonicalURI = i : ((0, n.pub)("warn", "Canonical URI set to TR, but no shortName is set in configuration"), e.canonicalURI = null);
                    break;
                default:
                    if (e.canonicalURI) try {
                        e.canonicalURI = new URL(e.canonicalURI, document.location.href).href
                    } catch (t) {
                        (0, n.pub)("warn", "CanonicalURI is an invalid URL: ".concat(t.message)), e.canonicalURI = null
                    } else i && (e.canonicalURI = i)
            }
            if (e.canonicalURI) {
                const t = document.createElement("link");
                t.setAttribute("rel", "canonical"), t.setAttribute("href", e.canonicalURI), document.head.appendChild(t)
            }
            e.doJsonLd && async function(e, n) {
                await n.respecIsReady;
                const i = ["TechArticle"];
                e.rdfStatus && i.push(e.rdfStatus);
                const a = {
                    "@context": ["http://schema.org", {
                        "@vocab": "http://schema.org/",
                        "@language": n.documentElement.lang || "en",
                        w3p: "http://www.w3.org/2001/02pd/rec54#",
                        foaf: "http://xmlns.com/foaf/0.1/",
                        datePublished: {
                            "@type": "http://www.w3.org/2001/XMLSchema#date"
                        },
                        inLanguage: {
                            "@language": null
                        },
                        isBasedOn: {
                            "@type": "@id"
                        },
                        license: {
                            "@type": "@id"
                        }
                    }],
                    id: e.canonicalURI || e.thisVersion,
                    type: i,
                    name: e.title,
                    inLanguage: n.documentElement.lang || "en",
                    license: e.licenseInfo.url,
                    datePublished: e.dashDate,
                    copyrightHolder: {
                        name: "World Wide Web Consortium",
                        url: "https://www.w3.org/"
                    },
                    discussionUrl: e.issueBase,
                    alternativeHeadline: e.subtitle,
                    isBasedOn: e.prevVersion
                };
                if (e.additionalCopyrightHolders) {
                    const t = Array.isArray(e.additionalCopyrightHolders) ? e.additionalCopyrightHolders : [e.additionalCopyrightHolders];
                    a.copyrightHolder = [a.copyrightHolder, ...t.map(e => ({
                        name: e
                    }))]
                }
                const s = n.head.querySelector("meta[name=description]");
                s && (a.description = s.content);
                e.editors && (a.editor = e.editors.map(r));
                e.authors && (a.contributor = e.authors.map(r));
                a.citation = [...e.normativeReferences, ...e.informativeReferences].map(e => t.biblio[e]).filter(e => "object" == typeof e).map(o);
                const c = n.createElement("script");
                c.type = "application/ld+json", c.textContent = JSON.stringify(a, null, 2), n.head.appendChild(c)
            }(e, document)
        }, e.name = void 0;

        function r({
            name: e,
            url: t,
            mailto: n,
            company: r,
            companyURL: o
        }) {
            const i = {
                type: "Person",
                name: e,
                url: t,
                "foaf:mbox": n
            };
            return (r || o) && (i.worksFor = {
                name: r,
                url: o
            }), i
        }

        function o(e) {
            const {
                href: t,
                title: n,
                href: r
            } = e;
            return {
                id: t,
                type: "TechArticle",
                name: n,
                url: r
            }
        }
        e.name = "w3c/seo"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(93), n(2), n(0), n(94)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n      <style>\n        ", "\n      </style>\n    "]);
            return a = function() {
                return e
            }, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function(e) {
            if (e.noHighlightCSS) return;
            const r = [...document.querySelectorAll("\n    pre:not(.idl):not(.nohighlight) > code:not(.nohighlight),\n    pre:not(.idl):not(.nohighlight),\n    code.highlight\n  ")].filter(e => "pre" !== e.localName || !e.querySelector("code"));
            if (!r.length) return;
            const o = r.filter(e => e.textContent.trim()).map(c);
            document.head.appendChild((0, n.default)(a(), t.default)), await Promise.all(o)
        }, e.name = void 0, t = i(t), n = i(n);
        e.name = "core/highlight";
        const s = (0, r.msgIdGenerator)("highlight");
        async function c(e) {
            e.setAttribute("aria-busy", "true");
            const t = (n = e.classList, Array.from(n).filter(e => "highlight" !== e && "nolinks" !== e).map(e => e.toLowerCase()));
            var n;
            let r;
            try {
                r = await
                function(e, t) {
                    const n = {
                        action: "highlight",
                        code: e,
                        id: s(),
                        languages: t
                    };
                    return o.worker.postMessage(n), new Promise((e, t) => {
                        const r = setTimeout(() => {
                            t(new Error("Timed out waiting for highlight."))
                        }, 4e3);
                        o.worker.addEventListener("message", (function t(i) {
                            const {
                                data: {
                                    id: a,
                                    language: s,
                                    value: c
                                }
                            } = i;
                            a === n.id && (o.worker.removeEventListener("message", t), clearTimeout(r), e({
                                language: s,
                                value: c
                            }))
                        }))
                    })
                }(e.innerText, t)
            } catch (e) {
                return void console.error(e)
            }
            const {
                language: i,
                value: a
            } = r;
            switch (e.localName) {
                case "pre":
                    e.classList.remove(i), e.innerHTML = '<code class="hljs'.concat(i ? " ".concat(i) : "", '">').concat(a, "</code>"), e.classList.length || e.removeAttribute("class");
                    break;
                case "code":
                    e.innerHTML = a, e.classList.add("hljs"), i && e.classList.add(i)
            }
            e.setAttribute("aria-busy", "false")
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n"
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(9), n(95)], void 0 === (o = function(e, t, n, r) {
        "use strict";
        var o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.worker = e.name = void 0, r = (o = r) && o.__esModule ? o : {
            default: o
        };
        e.name = "core/worker";
        const i = (0, t.createResourceHint)({
            hint: "preload",
            href: "https://www.w3.org/Tools/respec/respec-highlight.js",
            as: "script"
        });
        document.head.appendChild(i);
        const a = URL.createObjectURL(new Blob([r.default], {
                type: "application/javascript"
            })),
            s = new Worker(a);
        e.worker = s, (0, n.expose)("core/worker", {
            worker: s
        })
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '// ReSpec Worker v1.0.0\n"use strict";\ntry {\n  importScripts("https://www.w3.org/Tools/respec/respec-highlight.js");\n} catch (err) {\n  console.error("Network error loading highlighter", err);\n}\n\nself.addEventListener("message", ({ data: originalData }) => {\n  const data = Object.assign({}, originalData);\n  switch (data.action) {\n    case "highlight-load-lang": {\n      const { langURL, propName, lang } = data;\n      importScripts(langURL);\n      self.hljs.registerLanguage(lang, self[propName]);\n      break;\n    }\n    case "highlight": {\n      const { code } = data;\n      const langs = data.languages.length ? data.languages : undefined;\n      try {\n        const { value, language } = self.hljs.highlightAuto(code, langs);\n        Object.assign(data, { value, language });\n      } catch (err) {\n        console.error("Could not transform some code?", err);\n        // Post back the original code\n        Object.assign(data, { value: code, language: "" });\n      }\n      break;\n    }\n  }\n  self.postMessage(data);\n});\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(97)], void 0 === (o = function(e, t) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function() {
            for (const e of document.querySelectorAll("pre.idl")) {
                const t = r.cloneNode(!0);
                t.addEventListener("click", () => {
                    o(e.textContent)
                }), e.prepend(t)
            }
        }, e.name = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.name = "core/webidl-clipboard";
        const r = document.createElement("button");

        function o(e) {
            return navigator.clipboard ? navigator.clipboard.writeText(e) : new Promise(t => {
                document.addEventListener("copy", n => {
                    n.clipboardData.setData("text/plain", e), t()
                }, {
                    once: !0
                }), document.execCommand("copy")
            })
        }
        r.innerHTML = t.default, r.title = "Copy IDL to clipboard", r.classList.add("respec-button-copy-paste", "removeOnSave")
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = '<svg height="16" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>'
}, function(e, t, n) {
    var r, o;
    r = [t, n(3), n(2), n(1), n(0)], void 0 === (o = function(e, t, n, r, o) {
        "use strict";
        var i;

        function a() {
            const e = c(["\n        <summary>\n          tests: ", "\n        </summary>\n        <ul>", "</ul>\n      "]);
            return a = function() {
                return e
            }, e
        }

        function s() {
            const e = c(['\n    <a href="', '">\n      ', "\n    </a> ", "\n  "]);
            return s = function() {
                return e
            }, e
        }

        function c(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            const t = document.querySelectorAll("[data-tests]");
            if (!t.length) return;
            if (!e.testSuiteURI) return void(0, r.pub)("error", u[l].missing_test_suite_uri);
            Array.from(t).filter(e => e.dataset.tests).map(t => {
                const i = document.createElement("details"),
                    s = n.default.bind(i),
                    c = t.dataset.tests.split(/,/gm).map(e => e.trim()).map(t => {
                        let n = "";
                        try {
                            n = new URL(t, e.testSuiteURI).href
                        } catch (e) {
                            (0, r.pub)("warn", "".concat(u[l].bad_uri, ": ").concat(t))
                        }
                        return n
                    }),
                    f = c.filter((e, t, n) => n.indexOf(e) !== t);
                f.length && (0, o.showInlineWarning)(t, "Duplicate tests found", 'To fix, remove duplicates from "data-tests": '.concat(f.map(e => new URL(e).pathname).join(", "))), i.classList.add("respec-tests-details", "removeOnSave");
                const p = [...new Set(c)];
                return s(a(), p.length, p.map(d)), {
                    elem: t,
                    details: i
                }
            }).forEach(({
                elem: e,
                details: t
            }) => {
                delete e.dataset.tests, e.append(t)
            })
        }, e.name = void 0, n = (i = n) && i.__esModule ? i : {
            default: i
        };
        const u = {
            en: {
                missing_test_suite_uri: "Found tests in your spec, but missing '[`testSuiteURI`](https://github.com/w3c/respec/wiki/testSuiteURI)' in your ReSpec config.",
                tests: "tests",
                test: "test"
            }
        };
        e.name = "core/data-tests";
        const l = t.lang in u ? t.lang : "en";

        function d(e) {
            const t = [],
                [r] = new URL(e).pathname.split("/").reverse(),
                o = r.split(".");
            let [i] = o;
            if (o.find(e => "https" === e)) {
                const e = document.createElement("span");
                e.textContent = "🔒", e.setAttribute("aria-label", "requires a secure connection"), e.setAttribute("title", "Test requires HTTPS"), i = i.replace(".https", ""), t.push(e)
            }
            if (i.split(".").join("-").split("-").find(e => "manual" === e)) {
                const e = document.createElement("span");
                e.textContent = "💪", e.setAttribute("aria-label", "the test must be run manually"), e.setAttribute("title", "Manual test"), i = i.replace("-manual", ""), t.push(e)
            }
            return n.default.bind(document.createElement("li"))(s(), e, i, t)
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(0), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.sortListItems = o, e.sortDefinitionTerms = i, e.run = function() {
            const e = document.querySelectorAll("[data-sort]");
            for (const t of e) {
                let e;
                const r = t.dataset.sort || "ascending";
                switch (t.localName) {
                    case "dl":
                        e = i(t, r);
                        break;
                    case "ol":
                    case "ul":
                        e = o(t, r);
                        break;
                    default:
                        (0, n.pub)("warning", "ReSpec can't sort ".concat(t.localName, " elements."))
                }
                if (e) {
                    const n = document.createRange();
                    n.selectNodeContents(t), n.deleteContents(), t.appendChild(e)
                }
            }
        }, e.name = void 0;

        function r(e) {
            return ({
                textContent: t
            }, {
                textContent: n
            }) => "ascending" === e ? t.localeCompare(n) : n.localeCompare(t)
        }

        function o(e, n) {
            return [...(0, t.children)(e, "li")].sort(r(n)).reduce((e, t) => (e.appendChild(t), e), document.createDocumentFragment())
        }

        function i(e, n) {
            return [...(0, t.children)(e, "dt")].sort(r(n)).reduce((e, t) => {
                const {
                    nodeType: n,
                    nodeName: r
                } = t, o = document.createDocumentFragment();
                let {
                    nextSibling: i
                } = t;
                for (; i && i.nextSibling;) {
                    o.appendChild(i.cloneNode(!0));
                    const {
                        nodeType: e,
                        nodeName: t
                    } = i.nextSibling;
                    if (e === n && t === r) break;
                    i = i.nextSibling
                }
                return o.prepend(t.cloneNode(!0)), e.appendChild(o), e
            }, document.createDocumentFragment())
        }
        e.name = "core/list-sorter"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    var r, o;
    r = [t, n(101), n(1)], void 0 === (o = function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!e.highlightVars) return;
            const r = document.createElement("style");
            r.textContent = t.default, r.classList.add("removeOnSave"), document.head.appendChild(r), document.querySelectorAll("var").forEach(e => e.addEventListener("click", o)), (0, n.sub)("beforesave", e => {
                e.querySelectorAll("var.respec-hl").forEach(s)
            })
        }, e.name = void 0, t = (r = t) && r.__esModule ? r : {
            default: r
        };

        function o(e) {
            e.stopPropagation();
            const {
                target: t
            } = e, n = function(e) {
                const t = e.textContent.trim(),
                    n = e.closest("section"),
                    r = a(e),
                    o = [...n.querySelectorAll("var")].filter(e => e.textContent.trim() === t && e.closest("section") === n),
                    c = o[0].classList.contains("respec-hl");
                if (i.set(r, c), c) return o.forEach(e => s(e, r)), [];
                o.forEach(e => (function(e, t) {
                    e.classList.add("respec-hl", t)
                })(e, r));
                return o
            }(t), r = () => {
                const e = a(t);
                n.forEach(t => s(t, e)), [...i.keys()].forEach(e => i.set(e, !0))
            };
            n.length && document.body.addEventListener("click", r, {
                once: !0
            })
        }
        e.name = "core/highlight-vars";
        const i = new Map([
            ["respec-hl-c1", !0],
            ["respec-hl-c2", !0],
            ["respec-hl-c3", !0],
            ["respec-hl-c4", !0],
            ["respec-hl-c5", !0],
            ["respec-hl-c6", !0],
            ["respec-hl-c7", !0]
        ]);

        function a(e) {
            const {
                value: t
            } = e.classList, n = /respec-hl-\w+/, r = n.test(t) && t.match(n);
            return r ? r[0] : !0 === i.get("respec-hl-c1") ? "respec-hl-c1" : [...i.keys()].find(e => i.get(e)) || "respec-hl-c1"
        }

        function s(e, t) {
            e.classList.remove("respec-hl", t), e.classList.length || e.removeAttribute("class")
        }
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = "var:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\nvar.respec-hl {\n  color: var(--color, #000);\n  background-color: var(--bg-color);\n  box-shadow: 0 0 0px 2px var(--bg-color);\n}\n\n/* highlight colors\n  https://github.com/w3c/tr-design/issues/152\n*/\nvar.respec-hl-c1 {\n  --bg-color: #f4d200;\n}\n\nvar.respec-hl-c2 {\n  --bg-color: #ff87a2;\n}\n\nvar.respec-hl-c3 {\n  --bg-color: #96e885;\n}\n\nvar.respec-hl-c4 {\n  --bg-color: #3eeed2;\n}\n\nvar.respec-hl-c5 {\n  --bg-color: #eacfb6;\n}\n\nvar.respec-hl-c6 {\n  --bg-color: #82ddff;\n}\n\nvar.respec-hl-c7 {\n  --bg-color: #ffbcf2;\n}\n\n@media print {\n  var.respec-hl {\n    background: none;\n    color: #000;\n    box-shadow: unset;\n  }\n}\n"
}, function(e, t, n) {
    var r, o;
    r = [t, n(103)], void 0 === (o = function(e, t) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function(e) {
            if (!e.highlightVars) return;
            const n = document.createElement("style");
            n.textContent = t.default, document.head.appendChild(n);
            let r = null;
            const o = new Map,
                i = document.querySelectorAll("section var");
            for (const e of i) {
                const t = e.closest("section");
                if (r !== t && (r = t, o.clear()), e.dataset.type) {
                    o.set(e.textContent.trim(), e.dataset.type);
                    continue
                }
                const n = o.get(e.textContent.trim());
                n && (e.dataset.type = n)
            }
        }, e.name = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.name = "core/data-type"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = 'var {\n  position: relative;\n  cursor: pointer;\n}\n\nvar[data-type]::before,\nvar[data-type]::after {\n  position: absolute;\n  left: 50%;\n  top: -6px;\n  opacity: 0;\n  transition: opacity 0.4s;\n  pointer-events: none;\n}\n\n/* the triangle or arrow or caret or whatever */\nvar[data-type]::before {\n  content: "";\n  transform: translateX(-50%);\n  border-width: 4px 6px 0 6px;\n  border-style: solid;\n  border-color: transparent;\n  border-top-color: #000;\n}\n\n/* actual text */\nvar[data-type]::after {\n  content: attr(data-type);\n  transform: translateX(-50%) translateY(-100%);\n  background: #000;\n  text-align: center;\n  /* additional styling */\n  font-family: "Dank Mono", "Fira Code", monospace;\n  font-style: normal;\n  padding: 6px;\n  border-radius: 3px;\n  color: #daca88;\n  text-indent: 0;\n  font-weight: normal;\n}\n\nvar[data-type]:hover::after,\nvar[data-type]:hover::before {\n  opacity: 1;\n}\n'
}, function(e, t, n) {
    var r, o;
    r = [t, n(105)], void 0 === (o = function(e, t) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = async function() {
            if (Array.from(document.querySelectorAll("ol.algorithm li")).filter(e => e.textContent.trim().startsWith("Assert: ")).forEach(e => e.classList.add("assert")), document.querySelector(".assert")) {
                const e = document.createElement("style");
                e.textContent = t.default, document.head.appendChild(e)
            }
        }, e.name = void 0, t = (n = t) && n.__esModule ? n : {
            default: n
        };
        e.name = "core/algorithms"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = "/* For assertions in lists containing algorithms */\n\n.assert {\n    background: #EEE;\n    border-left: 0.5em solid #AAA;\n    padding: 0.3em;\n}\n"
}, function(e, t, n) {
    var r, o;
    r = [t, n(0)], void 0 === (o = function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.run = function() {
            const e = [...document.querySelectorAll("a[href^='#']:not(.self-link):not([href$='the-empty-string'])")].filter(e => "" === e.textContent.trim());
            for (const s of e) {
                const e = s.getAttribute("href").slice(1),
                    c = document.getElementById(e);
                if (c) {
                    switch (c.localName) {
                        case "h6":
                        case "h5":
                        case "h4":
                        case "h3":
                        case "h2":
                            i(c, s);
                            break;
                        case "section":
                            o(c, e, s);
                            break;
                        case "figure":
                            r(c, e, s);
                            break;
                        case "aside":
                        case "div":
                            n(c, e, s);
                            break;
                        default: {
                            s.textContent = s.getAttribute("href");
                            const n = "ReSpec doesn't support expanding this kind of reference.";
                            (0, t.showInlineError)(s, n, "Can't expand \"#".concat(e, '".'))
                        }
                    }
                    a(c, s), s.normalize()
                } else {
                    s.textContent = s.getAttribute("href");
                    const n = "Couldn't expand inline reference. The id \"".concat(e, '" is not in the document.');
                    (0, t.showInlineError)(s, n, "No matching id in document: ".concat(e, "."))
                }
            }
        }, e.name = void 0;

        function n(e, n, r) {
            const o = e.querySelector(".marker .self-link");
            if (!o) {
                r.textContent = r.getAttribute("href");
                const e = 'Found matching element "'.concat(n, '", but it has no title or marker.');
                return void(0, t.showInlineError)(r, e, "Missing title.")
            }
            const i = (0, t.makeSafeCopy)(o);
            r.append(...i.childNodes), r.classList.add("box-ref")
        }

        function r(e, n, r) {
            const o = e.querySelector("figcaption");
            if (!o) {
                r.textContent = r.getAttribute("href");
                const e = 'Found matching figure "'.concat(n, '", but figure is lacking a `<figcaption>`.');
                return void(0, t.showInlineError)(r, e, "Missing figcaption in referenced figure.")
            }
            const i = [...(0, t.makeSafeCopy)(o).childNodes].filter(e => !e.classList || !e.classList.contains("fig-title"));
            i.pop(), r.append(...i), r.classList.add("fig-ref");
            const a = o.querySelector(".fig-title");
            !r.hasAttribute("title") && a && (r.title = (0, t.norm)(a.textContent))
        }

        function o(e, n, r) {
            const o = e.querySelector("h6, h5, h4, h3, h2");
            if (o) i(o, r), a(o, r);
            else {
                r.textContent = r.getAttribute("href");
                const e = "Found matching section, but the section was lacking a heading element.";
                (0, t.showInlineError)(r, e, 'No matching id in document: "'.concat(n, '".'))
            }
        }

        function i(e, n) {
            const r = e.querySelector(".self-link"),
                o = [...(0, t.makeSafeCopy)(e).childNodes].filter(e => !e.classList || !e.classList.contains("self-link"));
            n.append(...o), r && n.prepend("§ "), n.classList.add("sec-ref")
        }

        function a(e, t) {
            for (const n of ["dir", "lang"]) {
                if (t.hasAttribute(n)) continue;
                const r = e.closest("[".concat(n, "]"));
                if (!r) continue;
                const o = t.closest("[".concat(n, "]"));
                o && o.getAttribute(n) === r.getAttribute(n) || t.setAttribute(n, r.getAttribute(n))
            }
        }
        e.name = "core/anchor-expander"
    }.apply(t, r)) || (e.exports = o)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, {
        level: i = "error",
        autofix: a,
        ruleName: s
    } = {}) {
        function c(n) {
            return n > 0 ? e.slice(t, t + n) : e.slice(Math.max(t + n, 0), t)
        }

        function u(n, {
            precedes: r
        } = {}) {
            const o = n.map(e => e.trivia + e.value).join(""),
                i = e[t];
            return "eof" === i.type ? o : r ? o + i.trivia : o.slice(i.trivia.length)
        }
        const l = "eof" !== e[t].type ? e[t].line : e.length > 1 ? e[t - 1].line : 1,
            d = function(e) {
                const t = e.split("\n");
                return t[t.length - 1]
            }(u(c(-5), {
                precedes: !0
            })),
            f = c(5),
            p = u(f),
            h = d + p.split("\n")[0] + "\n" + (" ".repeat(d.length) + "^"),
            m = "Syntax" === o ? "since" : "inside",
            g = `${o} error at line ${l}${e.name?` in ${e.name}`:""}${n&&n.name?`, ${m} \`${n.partial?"partial ":""}${n.type} ${n.name}\``:""}:\n${h}`;
        return {
            message: `${g} ${r}`,
            bareMessage: r,
            context: g,
            line: l,
            sourceName: e.name,
            level: i,
            ruleName: s,
            autofix: a,
            input: p,
            tokens: f
        }
    }

    function o(e, t, n, o) {
        return r(e, t, n, o, "Syntax")
    }

    function i(e, t, n, o, i = {}) {
        return i.ruleName = n, r(t.source, e.index, t, o, "Validation", i)
    }
    n.r(t);
    class a {
        constructor({
            source: e,
            tokens: t
        }) {
            Object.defineProperties(this, {
                source: {
                    value: e
                },
                tokens: {
                    value: t
                },
                parent: {
                    value: null,
                    writable: !0
                },
                this: {
                    value: this
                }
            })
        }
        toJSON() {
            const e = {
                type: void 0,
                name: void 0,
                inheritance: void 0
            };
            let t = this;
            for (; t !== Object.prototype;) {
                const n = Object.getOwnPropertyDescriptors(t);
                for (const [t, r] of Object.entries(n))(r.enumerable || r.get) && (e[t] = this[t]);
                t = Object.getPrototypeOf(t)
            }
            return e
        }
    }

    function s(e, t, {
        useNullableInner: n
    } = {}) {
        if (!e.union) {
            const r = t.unique.get(e.idlType);
            if (!r) return;
            if ("typedef" === r.type) {
                const {
                    typedefIncludesDictionary: n
                } = t.cache;
                if (n.has(r)) return n.get(r);
                t.cache.typedefIncludesDictionary.set(r, void 0);
                const o = s(r.idlType, t);
                if (t.cache.typedefIncludesDictionary.set(r, o), o) return {
                    reference: e,
                    dictionary: o.dictionary
                }
            }
            if ("dictionary" === r.type && (n || !e.nullable)) return {
                reference: e,
                dictionary: r
            }
        }
        for (const n of e.subtype) {
            const e = s(n, t);
            if (e) return n.union ? e : {
                reference: n,
                dictionary: e.dictionary
            }
        }
    }

    function c(e, t) {
        const n = e.consume("?");
        n && (t.tokens.nullable = n), e.probe("?") && e.error("Can't nullable more than once")
    }

    function u(e, t) {
        let n = function(e, t) {
            const n = e.consume("FrozenArray", "Promise", "sequence", "record");
            if (!n) return;
            const r = L(new l({
                source: e.source,
                tokens: {
                    base: n
                }
            }));
            switch (r.tokens.open = e.consume("<") || e.error(`No opening bracket after ${n.type}`), n.type) {
                case "Promise": {
                    e.probe("[") && e.error("Promise type cannot have extended attribute");
                    const n = _(e, t) || e.error("Missing Promise subtype");
                    r.subtype.push(n);
                    break
                }
                case "sequence":
                case "FrozenArray": {
                    const o = j(e, t) || e.error(`Missing ${n.type} subtype`);
                    r.subtype.push(o);
                    break
                }
                case "record": {
                    e.probe("[") && e.error("Record key cannot have extended attribute");
                    const n = e.consume(...M) || e.error(`Record key must be one of: ${M.join(", ")}`),
                        o = new l({
                            source: e.source,
                            tokens: {
                                base: n
                            }
                        });
                    o.tokens.separator = e.consume(",") || e.error("Missing comma after record key type"), o.type = t;
                    const i = j(e, t) || e.error("Error parsing generic type record");
                    r.subtype.push(o, i);
                    break
                }
            }
            return r.idlType || e.error(`Error parsing generic type ${n.type}`), r.tokens.close = e.consume(">") || e.error(`Missing closing bracket after ${n.type}`), r.this
        }(e, t) || O(e);
        if (!n) {
            const t = e.consume("identifier", ...M, ...I);
            if (!t) return;
            n = new l({
                source: e.source,
                tokens: {
                    base: t
                }
            }), e.probe("<") && e.error(`Unsupported generic type ${t.value}`)
        }
        return "Promise" === n.generic && e.probe("?") && e.error("Promise type cannot be nullable"), n.type = t || null, c(e, n), n.nullable && "any" === n.idlType && e.error("Type `any` cannot be made nullable"), n
    }
    class l extends a {
        static parse(e, t) {
            return u(e, t) || function(e, t) {
                const n = {};
                if (n.open = e.consume("("), !n.open) return;
                const r = L(new l({
                    source: e.source,
                    tokens: n
                }));
                for (r.type = t || null;;) {
                    const t = j(e) || e.error("No type after open parenthesis or 'or' in union type");
                    "any" === t.idlType && e.error("Type `any` cannot be included in a union type"), "Promise" === t.generic && e.error("Type `Promise` cannot be included in a union type"), r.subtype.push(t);
                    const n = e.consume("or");
                    if (!n) break;
                    t.tokens.separator = n
                }
                return r.idlType.length < 2 && e.error("At least two types are expected in a union type but found less"), n.close = e.consume(")") || e.error("Unterminated union type"), c(e, r), r.this
            }(e, t)
        }
        constructor({
            source: e,
            tokens: t
        }) {
            super({
                source: e,
                tokens: t
            }), Object.defineProperty(this, "subtype", {
                value: [],
                writable: !0
            }), this.extAttrs = []
        }
        get generic() {
            return this.subtype.length && this.tokens.base ? this.tokens.base.value : ""
        }
        get nullable() {
            return Boolean(this.tokens.nullable)
        }
        get union() {
            return Boolean(this.subtype.length) && !this.tokens.base
        }
        get idlType() {
            if (this.subtype.length) return this.subtype;
            return k([this.tokens.prefix, this.tokens.base, this.tokens.postfix].filter(e => e).map(e => e.value).join(" "))
        }* validate(e) {
            const t = !this.union && e.unique.get(this.idlType),
                n = this.union ? this : t && "typedef" === t.type ? t.idlType : void 0;
            if (n && this.nullable) {
                const {
                    reference: t
                } = s(n, e) || {};
                if (t) {
                    const e = (this.union ? t : this).tokens.base,
                        n = "Nullable union cannot include a dictionary type";
                    yield i(e, this, "no-nullable-union-dict", n)
                }
            } else
                for (const t of this.subtype) yield* t.validate(e)
        }
    }
    class d extends a {
        static parse(e) {
            const t = e.consume("=");
            if (!t) return null;
            const n = S(e) || e.consume("string", "null", "[", "{") || e.error("No value for default"),
                r = [n];
            if ("[" === n.type) {
                const t = e.consume("]") || e.error("Default sequence value must be empty");
                r.push(t)
            } else if ("{" === n.type) {
                const t = e.consume("}") || e.error("Default dictionary value must be empty");
                r.push(t)
            }
            return new d({
                source: e.source,
                tokens: {
                    assign: t
                },
                expression: r
            })
        }
        constructor({
            source: e,
            tokens: t,
            expression: n
        }) {
            super({
                source: e,
                tokens: t
            }), n.parent = this, Object.defineProperty(this, "expression", {
                value: n
            })
        }
        get type() {
            return E(this.expression[0]).type
        }
        get value() {
            return E(this.expression[0]).value
        }
        get negative() {
            return E(this.expression[0]).negative
        }
    }
    class f extends Array {
        constructor({
            source: e,
            tokens: t
        }) {
            super(), Object.defineProperties(this, {
                source: {
                    value: e
                },
                tokens: {
                    value: t
                },
                parent: {
                    value: null,
                    writable: !0
                }
            })
        }
    }
    class p extends a {
        static parser(e, t) {
            return () => {
                const n = e.consume(t);
                if (n) return new p({
                    source: e.source,
                    tokens: {
                        value: n
                    }
                })
            }
        }
        get value() {
            return k(this.tokens.value.value)
        }
    }

    function h(e, t) {
        return C(e, {
            parser: p.parser(e, t),
            listName: t + " list"
        })
    }
    class m extends a {
        static parse(e) {
            const t = {
                    assign: e.consume("=")
                },
                n = L(new m({
                    source: e.source,
                    tokens: t
                }));
            return t.assign && (t.secondaryName = e.consume("identifier", "decimal", "integer", "string")), t.open = e.consume("("), t.open ? (n.list = n.rhsIsList ? function(e) {
                let t = h(e, "identifier");
                return t.length ? t : (t = h(e, "string")).length ? t : void e.error("Expected identifiers or strings but none found")
            }(e) : T(e), t.close = e.consume(")") || e.error("Unexpected token in extended attribute argument list")) : n.hasRhs && !t.secondaryName && e.error("No right hand side to extended attribute assignment"), n.this
        }
        get rhsIsList() {
            return this.tokens.assign && !this.tokens.secondaryName
        }
        get rhsType() {
            return this.rhsIsList ? this.list[0].tokens.value.type + "-list" : this.tokens.secondaryName ? this.tokens.secondaryName.type : null
        }
    }
    class g extends a {
        static parse(e) {
            const t = e.consume("identifier");
            if (t) return new g({
                source: e.source,
                tokens: {
                    name: t
                },
                params: m.parse(e)
            })
        }
        constructor({
            source: e,
            tokens: t,
            params: n
        }) {
            super({
                source: e,
                tokens: t
            }), n.parent = this, Object.defineProperty(this, "params", {
                value: n
            })
        }
        get type() {
            return "extended-attribute"
        }
        get name() {
            return this.tokens.name.value
        }
        get rhs() {
            const {
                rhsType: e,
                tokens: t,
                list: n
            } = this.params;
            return e ? {
                type: e,
                value: this.params.rhsIsList ? n : k(t.secondaryName.value)
            } : null
        }
        get arguments() {
            const {
                rhsIsList: e,
                list: t
            } = this.params;
            return !t || e ? [] : t
        }* validate(e) {
            if ("NoInterfaceObject" === this.name) {
                const e = "`[NoInterfaceObject]` extended attribute is an undesirable feature that may be removed from Web IDL in the future. Refer to the [relevant upstream PR](https://github.com/heycam/webidl/pull/609) for more information.";
                yield i(this.tokens.name, this, "no-nointerfaceobject", e, {
                    level: "warning"
                })
            }
            for (const t of this.arguments) yield* t.validate(e)
        }
    }
    class b extends f {
        static parse(e) {
            const t = {};
            if (t.open = e.consume("["), !t.open) return new b({});
            const n = new b({
                source: e.source,
                tokens: t
            });
            return n.push(...C(e, {
                parser: g.parse,
                listName: "extended attribute"
            })), t.close = e.consume("]") || e.error("Unexpected closing token of extended attribute"), n.length || e.error("Found an empty extended attribute"), e.probe("[") && e.error("Illegal double extended attribute lists, consider merging them"), n
        }* validate(e) {
            for (const t of this) yield* t.validate(e)
        }
    }
    class y extends a {
        static parse(e) {
            const t = e.position,
                n = {},
                r = L(new y({
                    source: e.source,
                    tokens: n
                }));
            return r.extAttrs = b.parse(e), n.optional = e.consume("optional"), r.idlType = j(e, "argument-type"), r.idlType ? (n.optional || (n.variadic = e.consume("...")), n.name = e.consume("identifier", ...W), n.name ? (r.default = n.optional ? d.parse(e) : null, r.this) : e.unconsume(t)) : e.unconsume(t)
        }
        get type() {
            return "argument"
        }
        get optional() {
            return !!this.tokens.optional
        }
        get variadic() {
            return !!this.tokens.variadic
        }
        get name() {
            return k(this.tokens.name.value)
        }* validate(e) {
            yield* this.idlType.validate(e);
            const t = s(this.idlType, e, {
                useNullableInner: !0
            });
            if (t)
                if (this.idlType.nullable) {
                    const e = "Dictionary arguments cannot be nullable.";
                    yield i(this.tokens.name, this, "no-nullable-dict-arg", e)
                } else if (this.optional) {
                if (!this.default) {
                    const e = "Optional dictionary arguments must have a default value of `{}`.";
                    yield i(this.tokens.name, this, "dict-arg-default", e, {
                        autofix: v(this)
                    })
                }
            } else if (this.parent && ! function e(t, n) {
                    if (n.cache.dictionaryIncludesRequiredField.has(t)) return n.cache.dictionaryIncludesRequiredField.get(t);
                    if (n.cache.dictionaryIncludesRequiredField.set(t, void 0), t.inheritance) {
                        const r = n.unique.get(t.inheritance);
                        if (!r) return !0;
                        if (e(r, n)) return !0
                    }
                    const r = t.members.some(e => e.required);
                    return n.cache.dictionaryIncludesRequiredField.set(t, r), r
                }(t.dictionary, e) && function(e) {
                    const t = e.parent.arguments || e.parent.list,
                        n = t.indexOf(e);
                    return !t.slice(n + 1).some(e => !e.optional)
                }(this)) {
                const e = "Dictionary argument must be optional if it has no required fields";
                yield i(this.tokens.name, this, "dict-arg-optional", e, {
                    autofix: (n = this, () => {
                        const e = D(n.idlType);
                        n.tokens.optional = {
                            type: "optional",
                            value: "optional",
                            trivia: e.trivia
                        }, e.trivia = " ", v(n)()
                    })
                })
            }
            var n
        }
    }

    function v(e) {
        return () => {
            e.default = d.parse(new $(" = {}"))
        }
    }
    class w extends a {
        static parse(e, {
            special: t,
            regular: n
        } = {}) {
            const r = {
                    special: t
                },
                o = L(new w({
                    source: e.source,
                    tokens: r
                }));
            return t && "stringifier" === t.value && (r.termination = e.consume(";"), r.termination) ? (o.arguments = [], o) : (t || n || (r.special = e.consume("getter", "setter", "deleter")), o.idlType = _(e) || e.error("Missing return type"), r.name = e.consume("identifier", "includes"), r.open = e.consume("(") || e.error("Invalid operation"), o.arguments = T(e), r.close = e.consume(")") || e.error("Unterminated operation"), r.termination = e.consume(";") || e.error("Unterminated operation, expected `;`"), o.this)
        }
        get type() {
            return "operation"
        }
        get name() {
            const {
                name: e
            } = this.tokens;
            return e ? k(e.value) : ""
        }
        get special() {
            return this.tokens.special ? this.tokens.special.value : ""
        }* validate(e) {
            if (!this.name && ["", "static"].includes(this.special)) {
                const e = "Regular or static operations must have both a return type and an identifier.";
                yield i(this.tokens.open, this, "incomplete-op", e)
            }
            this.idlType && (yield* this.idlType.validate(e));
            for (const t of this.arguments) yield* t.validate(e)
        }
    }
    class x extends a {
        static parse(e, {
            special: t,
            noInherit: n = !1,
            readonly: r = !1
        } = {}) {
            const o = e.position,
                i = {
                    special: t
                },
                a = L(new x({
                    source: e.source,
                    tokens: i
                }));
            if (t || n || (i.special = e.consume("inherit")), "inherit" === a.special && e.probe("readonly") && e.error("Inherited attributes cannot be read-only"), i.readonly = e.consume("readonly"), r && !i.readonly && e.probe("attribute") && e.error("Attributes must be readonly in this context"), i.base = e.consume("attribute"), i.base) {
                switch (a.idlType = j(e, "attribute-type") || e.error("Attribute lacks a type"), a.idlType.generic) {
                    case "sequence":
                    case "record":
                        e.error(`Attributes cannot accept ${a.idlType.generic} types`)
                }
                return i.name = e.consume("identifier", "async", "required") || e.error("Attribute lacks a name"), i.termination = e.consume(";") || e.error("Unterminated attribute, expected `;`"), a.this
            }
            e.unconsume(o)
        }
        get type() {
            return "attribute"
        }
        get special() {
            return this.tokens.special ? this.tokens.special.value : ""
        }
        get readonly() {
            return !!this.tokens.readonly
        }
        get name() {
            return k(this.tokens.name.value)
        }* validate(e) {
            yield* this.idlType.validate(e)
        }
    }

    function k(e) {
        return e.startsWith("_") ? e.slice(1) : e
    }

    function C(e, {
        parser: t,
        allowDangler: n,
        listName: r = "list"
    }) {
        const o = t(e);
        if (!o) return [];
        o.tokens.separator = e.consume(",");
        const i = [o];
        for (; o.tokens.separator;) {
            const o = t(e);
            if (!o) {
                n || e.error(`Trailing comma in ${r}`);
                break
            }
            if (o.tokens.separator = e.consume(","), i.push(o), !o.tokens.separator) break
        }
        return i
    }

    function S(e) {
        return e.consume("true", "false", "Infinity", "-Infinity", "NaN", "decimal", "integer")
    }

    function E({
        type: e,
        value: t
    }) {
        switch (e) {
            case "true":
            case "false":
                return {
                    type: "boolean", value: "true" === e
                };
            case "Infinity":
            case "-Infinity":
                return {
                    type: "Infinity", negative: e.startsWith("-")
                };
            case "[":
                return {
                    type: "sequence", value: []
                };
            case "{":
                return {
                    type: "dictionary"
                };
            case "decimal":
            case "integer":
                return {
                    type: "number", value: t
                };
            case "string":
                return {
                    type: "string", value: t.slice(1, -1)
                };
            default:
                return {
                    type: e
                }
        }
    }

    function O(e) {
        const {
            source: t
        } = e, n = function() {
            const n = e.consume("unsigned"),
                r = e.consume("short", "long");
            if (r) {
                const o = e.consume("long");
                return new l({
                    source: t,
                    tokens: {
                        prefix: n,
                        base: r,
                        postfix: o
                    }
                })
            }
            n && e.error("Failed to parse integer type")
        }() || function() {
            const n = e.consume("unrestricted"),
                r = e.consume("float", "double");
            if (r) return new l({
                source: t,
                tokens: {
                    prefix: n,
                    base: r
                }
            });
            n && e.error("Failed to parse float type")
        }();
        if (n) return n;
        const r = e.consume("boolean", "byte", "octet");
        return r ? new l({
            source: t,
            tokens: {
                base: r
            }
        }) : void 0
    }

    function T(e) {
        return C(e, {
            parser: y.parse,
            listName: "arguments list"
        })
    }

    function j(e, t) {
        const n = b.parse(e),
            r = l.parse(e, t);
        return r && (L(r).extAttrs = n), r
    }

    function _(e, t) {
        const n = l.parse(e, t || "return-type");
        if (n) return n;
        const r = e.consume("void");
        if (r) {
            const t = new l({
                source: e.source,
                tokens: {
                    base: r
                }
            });
            return t.type = "return-type", t
        }
    }

    function P(e) {
        const t = e.consume("stringifier");
        if (t) return x.parse(e, {
            special: t
        }) || w.parse(e, {
            special: t
        }) || e.error("Unterminated stringifier")
    }

    function A(e) {
        const t = e.split("\n");
        if (t.length) {
            const e = t[t.length - 1].match(/^\s+/);
            if (e) return e[0]
        }
        return ""
    }

    function R(e) {
        return () => {
            if (e.extAttrs.length) {
                const t = new $("Exposed=Window,"),
                    n = g.parse(t);
                n.tokens.separator = t.consume(",");
                const r = e.extAttrs[0];
                /^\s/.test(r.tokens.name.trivia) || (r.tokens.name.trivia = ` ${r.tokens.name.trivia}`), e.extAttrs.unshift(n)
            } else {
                L(e).extAttrs = b.parse(new $("[Exposed=Window]"));
                const t = e.tokens.base.trivia;
                e.extAttrs.tokens.open.trivia = t, e.tokens.base.trivia = `\n${A(t)}`
            }
        }
    }

    function D(e) {
        if (e.extAttrs.length) return e.extAttrs.tokens.open;
        if ("operation" === e.type && !e.special) return D(e.idlType);
        return Object.values(e.tokens).sort((e, t) => e.index - t.index)[0]
    }

    function L(e, t) {
        return t || (t = e), e ? new Proxy(e, {
            get(e, t) {
                const n = e[t];
                return Array.isArray(n) ? L(n, e) : n
            },
            set(e, n, r) {
                if (e[n] = r, !r) return !0;
                if (Array.isArray(r))
                    for (const e of r) void 0 !== e.parent && (e.parent = t);
                else void 0 !== r.parent && (r.parent = t);
                return !0
            }
        }) : e
    }
    const N = {
            decimal: /-?(?=[0-9]*\.|[0-9]+[eE])(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/y,
            integer: /-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y,
            identifier: /[_-]?[A-Za-z][0-9A-Z_a-z-]*/y,
            string: /"[^"]*"/y,
            whitespace: /[\t\n\r ]+/y,
            comment: /((\/(\/.*|\*([^*]|\*[^/])*\*\/)[\t\n\r ]*)+)/y,
            other: /[^\t\n\r 0-9A-Za-z]/y
        },
        I = ["ArrayBuffer", "DataView", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray", "Float32Array", "Float64Array", "any", "object", "symbol"],
        M = ["ByteString", "DOMString", "USVString"],
        W = ["async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"],
        q = ["-Infinity", "FrozenArray", "Infinity", "NaN", "Promise", "boolean", "byte", "double", "false", "float", "long", "mixin", "null", "octet", "optional", "or", "readonly", "record", "sequence", "short", "true", "unsigned", "void"].concat(W, M, I),
        U = ["(", ")", ",", "...", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"],
        F = ["_constructor", "toString", "_toString"];
    class $ {
        constructor(e) {
            this.source = function(e) {
                const t = [];
                let n = 0,
                    r = "",
                    i = 1,
                    a = 0;
                for (; n < e.length;) {
                    const c = e.charAt(n);
                    let u = -1;
                    if (/[\t\n\r ]/.test(c) ? u = s("whitespace", {
                            noFlushTrivia: !0
                        }) : "/" === c && (u = s("comment", {
                            noFlushTrivia: !0
                        })), -1 !== u) {
                        const e = t.pop().value;
                        i += (e.match(/\n/g) || []).length, r += e, a -= 1
                    } else if (/[-0-9.A-Z_a-z]/.test(c)) {
                        if (-1 === (u = s("decimal")) && (u = s("integer")), -1 === u) {
                            u = s("identifier");
                            const e = t.length - 1,
                                n = t[e];
                            if (-1 !== u) {
                                if (F.includes(n.value)) {
                                    const r = `${k(n.value)} is a reserved identifier and must not be used.`;
                                    throw new z(o(t, e, null, r))
                                }
                                q.includes(n.value) && (n.type = n.value)
                            }
                        }
                    } else '"' === c && (u = s("string"));
                    for (const o of U)
                        if (e.startsWith(o, n)) {
                            t.push({
                                type: o,
                                value: o,
                                trivia: r,
                                line: i,
                                index: a
                            }), r = "", u = n += o.length;
                            break
                        } if (-1 === u && (u = s("other")), -1 === u) throw new Error("Token stream not progressing");
                    n = u, a += 1
                }
                return t.push({
                    type: "eof",
                    value: "",
                    trivia: r
                }), t;

                function s(o, {
                    noFlushTrivia: s
                } = {}) {
                    const c = N[o];
                    c.lastIndex = n;
                    const u = c.exec(e);
                    return u ? (t.push({
                        type: o,
                        value: u[0],
                        trivia: r,
                        line: i,
                        index: a
                    }), s || (r = ""), c.lastIndex) : -1
                }
            }(e), this.position = 0
        }
        error(e) {
            throw new z(o(this.source, this.position, this.current, e))
        }
        probe(e) {
            return this.source.length > this.position && this.source[this.position].type === e
        }
        consume(...e) {
            for (const t of e) {
                if (!this.probe(t)) continue;
                const e = this.source[this.position];
                return this.position++, e
            }
        }
        unconsume(e) {
            this.position = e
        }
    }
    class z extends Error {
        constructor({
            message: e,
            bareMessage: t,
            context: n,
            line: r,
            sourceName: o,
            input: i,
            tokens: a
        }) {
            super(e), this.name = "WebIDLParseError", this.bareMessage = t, this.context = n, this.line = r, this.sourceName = o, this.input = i, this.tokens = a
        }
    }
    class H extends p {
        static parse(e) {
            const t = e.consume("string");
            if (t) return new H({
                source: e.source,
                tokens: {
                    value: t
                }
            })
        }
        get type() {
            return "enum-value"
        }
        get value() {
            return super.value.slice(1, -1)
        }
    }
    class B extends a {
        static parse(e) {
            const t = {};
            if (t.base = e.consume("enum"), !t.base) return;
            t.name = e.consume("identifier") || e.error("No name for enum");
            const n = L(new B({
                source: e.source,
                tokens: t
            }));
            return e.current = n.this, t.open = e.consume("{") || e.error("Bodyless enum"), n.values = C(e, {
                parser: H.parse,
                allowDangler: !0,
                listName: "enumeration"
            }), e.probe("string") && e.error("No comma between enum values"), t.close = e.consume("}") || e.error("Unexpected value in enum"), n.values.length || e.error("No value in enum"), t.termination = e.consume(";") || e.error("No semicolon after enum"), n.this
        }
        get type() {
            return "enum"
        }
        get name() {
            return k(this.tokens.name.value)
        }
    }
    class G extends a {
        static parse(e) {
            const t = e.consume("identifier");
            if (!t) return;
            const n = {
                target: t
            };
            if (n.includes = e.consume("includes"), n.includes) return n.mixin = e.consume("identifier") || e.error("Incomplete includes statement"), n.termination = e.consume(";") || e.error("No terminating ; for includes statement"), new G({
                source: e.source,
                tokens: n
            });
            e.unconsume(t.index)
        }
        get type() {
            return "includes"
        }
        get target() {
            return k(this.tokens.target.value)
        }
        get includes() {
            return k(this.tokens.mixin.value)
        }
    }
    class V extends a {
        static parse(e) {
            const t = {},
                n = L(new V({
                    source: e.source,
                    tokens: t
                }));
            if (t.base = e.consume("typedef"), t.base) return n.idlType = j(e, "typedef-type") || e.error("Typedef lacks a type"), t.name = e.consume("identifier") || e.error("Typedef lacks a name"), e.current = n.this, t.termination = e.consume(";") || e.error("Unterminated typedef, expected `;`"), n.this
        }
        get type() {
            return "typedef"
        }
        get name() {
            return k(this.tokens.name.value)
        }* validate(e) {
            yield* this.idlType.validate(e)
        }
    }
    class Z extends a {
        static parse(e, t) {
            const n = {
                    base: t
                },
                r = L(new Z({
                    source: e.source,
                    tokens: n
                }));
            return n.name = e.consume("identifier") || e.error("Callback lacks a name"), e.current = r.this, n.assign = e.consume("=") || e.error("Callback lacks an assignment"), r.idlType = _(e) || e.error("Callback lacks a return type"), n.open = e.consume("(") || e.error("Callback lacks parentheses for arguments"), r.arguments = T(e), n.close = e.consume(")") || e.error("Unterminated callback"), n.termination = e.consume(";") || e.error("Unterminated callback, expected `;`"), r.this
        }
        get type() {
            return "callback"
        }
        get name() {
            return k(this.tokens.name.value)
        }* validate(e) {
            yield* this.idlType.validate(e)
        }
    }
    class X extends a {
        static parse(e, t, {
            type: n,
            inheritable: r,
            allowedMembers: o
        }) {
            const {
                tokens: i
            } = t;
            for (i.name = e.consume("identifier") || e.error(`Missing name in ${t.type}`), e.current = t, t = L(t), r && Object.assign(i, function(e) {
                    const t = e.consume(":");
                    return t ? {
                        colon: t,
                        inheritance: e.consume("identifier") || e.error("Inheritance lacks a type")
                    } : {}
                }(e)), i.open = e.consume("{") || e.error(`Bodyless ${n}`), t.members = [];;) {
                if (i.close = e.consume("}"), i.close) return i.termination = e.consume(";") || e.error(`Missing semicolon after ${n}`), t.this;
                const r = b.parse(e);
                let a;
                for (const [t, ...n] of o)
                    if (a = L(t(e, ...n))) break;
                a || e.error("Unknown member"), a.extAttrs = r, t.members.push(a.this)
            }
        }
        get partial() {
            return !!this.tokens.partial
        }
        get name() {
            return k(this.tokens.name.value)
        }
        get inheritance() {
            return this.tokens.inheritance ? k(this.tokens.inheritance.value) : null
        }* validate(e) {
            for (const t of this.members) t.validate && (yield* t.validate(e))
        }
    }
    class Y extends a {
        static parse(e) {
            const t = {};
            if (t.base = e.consume("const"), !t.base) return;
            let n = O(e);
            if (!n) {
                const t = e.consume("identifier") || e.error("Const lacks a type");
                n = new l({
                    source: e.source,
                    tokens: {
                        base: t
                    }
                })
            }
            e.probe("?") && e.error("Unexpected nullable constant type"), n.type = "const-type", t.name = e.consume("identifier") || e.error("Const lacks a name"), t.assign = e.consume("=") || e.error("Const lacks value assignment"), t.value = S(e) || e.error("Const lacks a value"), t.termination = e.consume(";") || e.error("Unterminated const, expected `;`");
            const r = new Y({
                source: e.source,
                tokens: t
            });
            return L(r).idlType = n, r
        }
        get type() {
            return "const"
        }
        get name() {
            return unescape(this.tokens.name.value)
        }
        get value() {
            return E(this.tokens.value)
        }
    }
    class K extends a {
        static parse(e) {
            const t = e.position,
                n = {},
                r = L(new K({
                    source: e.source,
                    tokens: n
                }));
            if (n.readonly = e.consume("readonly"), n.readonly || (n.async = e.consume("async")), n.base = n.readonly ? e.consume("maplike", "setlike") : n.async ? e.consume("iterable") : e.consume("iterable", "maplike", "setlike"), !n.base) return void e.unconsume(t);
            const {
                type: o
            } = r, i = "maplike" === o || r.async, a = i || "iterable" === o;
            n.open = e.consume("<") || e.error(`Missing less-than sign \`<\` in ${o} declaration`);
            const s = j(e) || e.error(`Missing a type argument in ${o} declaration`);
            return r.idlType = [s], a && (s.tokens.separator = e.consume(","), s.tokens.separator ? r.idlType.push(j(e)) : i && e.error(`Missing second type argument in ${o} declaration`)), n.close = e.consume(">") || e.error(`Missing greater-than sign \`>\` in ${o} declaration`), n.termination = e.consume(";") || e.error(`Missing semicolon after ${o} declaration`), r.this
        }
        get type() {
            return this.tokens.base.value
        }
        get readonly() {
            return !!this.tokens.readonly
        }
        get async() {
            return !!this.tokens.async
        }
    }
    class J extends a {
        static parse(e) {
            const t = e.consume("constructor");
            if (!t) return;
            const n = {
                base: t
            };
            n.open = e.consume("(") || e.error("No argument list in constructor");
            const r = T(e);
            n.close = e.consume(")") || e.error("Unterminated constructor"), n.termination = e.consume(";") || e.error("No semicolon after constructor");
            const o = new J({
                source: e.source,
                tokens: n
            });
            return L(o).arguments = r, o
        }
        get type() {
            return "constructor"
        }* validate(e) {
            this.idlType && (yield* this.idlType.validate(e));
            for (const t of this.arguments) yield* t.validate(e)
        }
    }

    function Q(e) {
        const t = e.consume("static");
        if (t) return x.parse(e, {
            special: t
        }) || w.parse(e, {
            special: t
        }) || e.error("No body in static member")
    }
    class ee extends X {
        static parse(e, t, {
            partial: n = null
        } = {}) {
            const r = {
                partial: n,
                base: t
            };
            return X.parse(e, new ee({
                source: e.source,
                tokens: r
            }), {
                type: "interface",
                inheritable: !n,
                allowedMembers: [
                    [Y.parse],
                    [J.parse],
                    [Q],
                    [P],
                    [K.parse],
                    [x.parse],
                    [w.parse]
                ]
            })
        }
        get type() {
            return "interface"
        }* validate(e) {
            if (yield* this.extAttrs.validate(e), !this.partial && this.extAttrs.every(e => "Exposed" !== e.name) && this.extAttrs.every(e => "NoInterfaceObject" !== e.name)) {
                const e = "Interfaces must have `[Exposed]` extended attribute. To fix, add, for example, `[Exposed=Window]`. Please also consider carefully if your interface should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";
                yield i(this.tokens.name, this, "require-exposed", e, {
                    autofix: R(this)
                })
            }
            const t = this.extAttrs.filter(e => "Constructor" === e.name);
            for (const e of t) {
                const t = "Constructors should now be represented as a `constructor()` operation on the interface instead of `[Constructor]` extended attribute. Refer to the [WebIDL spec section on constructor operations](https://heycam.github.io/webidl/#idl-constructors) for more information.";
                yield i(e.tokens.name, this, "constructor-member", t, {
                    autofix: te(this, e)
                })
            }
            if (this.extAttrs.some(e => "Global" === e.name)) {
                const e = this.extAttrs.filter(e => "NamedConstructor" === e.name);
                for (const t of e) {
                    const e = "Interfaces marked as `[Global]` cannot have named constructors.";
                    yield i(t.tokens.name, this, "no-constructible-global", e)
                }
                const t = this.members.filter(e => "constructor" === e.type);
                for (const e of t) {
                    const t = "Interfaces marked as `[Global]` cannot have constructors.";
                    yield i(e.tokens.base, this, "no-constructible-global", t)
                }
            }
            yield* super.validate(e), this.partial || (yield* function*(e, t) {
                const n = new Set(s(t).map(e => e.name)),
                    r = e.partials.get(t.name) || [],
                    o = e.mixinMap.get(t.name) || [];
                for (const e of [...r, ...o]) {
                    const r = s(e);
                    yield* a(r, n, e, t);
                    for (const e of r) n.add(e.name)
                }

                function* a(e, t, n, r) {
                    for (const o of e) {
                        const {
                            name: e
                        } = o;
                        if (e && t.has(e)) {
                            const t = `The operation "${e}" has already been defined for the base interface "${r.name}" either in itself or in a mixin`;
                            yield i(o.tokens.name, n, "no-cross-overload", t)
                        }
                    }
                }

                function s(e) {
                    return e.members.filter(({
                        type: e
                    }) => "operation" === e)
                }
            }(e, this))
        }
    }

    function te(e, t) {
        return e = L(e), () => {
            const n = A(e.extAttrs.tokens.open.trivia),
                r = e.members.length ? A(D(e.members[0]).trivia) : function(e) {
                    const t = A(e),
                        n = t.includes("\t") ? "\t" : "  ";
                    return t + n
                }(n),
                o = J.parse(new $(`\n${r}constructor();`));
            o.extAttrs = [], L(o).arguments = t.arguments;
            const i = function(e, t) {
                const n = e.slice().reverse().findIndex(t);
                return -1 === n ? n : e.length - n - 1
            }(e.members, e => "constructor" === e.type);
            e.members.splice(i + 1, 0, o);
            const {
                close: a
            } = e.tokens;
            a.trivia.includes("\n") || (a.trivia += `\n${n}`);
            const {
                extAttrs: s
            } = e, c = s.indexOf(t), u = s.splice(c, 1);
            s.length ? s.length === c ? s[c - 1].tokens.separator = void 0 : s[c].tokens.name.trivia.trim() || (s[c].tokens.name.trivia = u[0].tokens.name.trivia) : s.tokens.open = s.tokens.close = void 0
        }
    }
    class ne extends X {
        static parse(e, t, {
            partial: n
        } = {}) {
            const r = {
                partial: n,
                base: t
            };
            if (r.mixin = e.consume("mixin"), r.mixin) return X.parse(e, new ne({
                source: e.source,
                tokens: r
            }), {
                type: "interface mixin",
                allowedMembers: [
                    [Y.parse],
                    [P],
                    [x.parse, {
                        noInherit: !0
                    }],
                    [w.parse, {
                        regular: !0
                    }]
                ]
            })
        }
        get type() {
            return "interface mixin"
        }
    }
    class re extends a {
        static parse(e) {
            const t = {},
                n = L(new re({
                    source: e.source,
                    tokens: t
                }));
            return n.extAttrs = b.parse(e), t.required = e.consume("required"), n.idlType = j(e, "dictionary-type") || e.error("Dictionary member lacks a type"), t.name = e.consume("identifier") || e.error("Dictionary member lacks a name"), n.default = d.parse(e), t.required && n.default && e.error("Required member must not have a default"), t.termination = e.consume(";") || e.error("Unterminated dictionary member, expected `;`"), n.this
        }
        get type() {
            return "field"
        }
        get name() {
            return k(this.tokens.name.value)
        }
        get required() {
            return !!this.tokens.required
        }* validate(e) {
            yield* this.idlType.validate(e)
        }
    }
    class oe extends X {
        static parse(e, {
            partial: t
        } = {}) {
            const n = {
                partial: t
            };
            if (n.base = e.consume("dictionary"), n.base) return X.parse(e, new oe({
                source: e.source,
                tokens: n
            }), {
                type: "dictionary",
                inheritable: !t,
                allowedMembers: [
                    [re.parse]
                ]
            })
        }
        get type() {
            return "dictionary"
        }
    }
    class ie extends X {
        static parse(e, {
            partial: t
        } = {}) {
            const n = {
                partial: t
            };
            if (n.base = e.consume("namespace"), n.base) return X.parse(e, new ie({
                source: e.source,
                tokens: n
            }), {
                type: "namespace",
                allowedMembers: [
                    [x.parse, {
                        noInherit: !0,
                        readonly: !0
                    }],
                    [w.parse, {
                        regular: !0
                    }]
                ]
            })
        }
        get type() {
            return "namespace"
        }* validate(e) {
            if (!this.partial && this.extAttrs.every(e => "Exposed" !== e.name)) {
                const e = "Namespaces must have [Exposed] extended attribute. To fix, add, for example, [Exposed=Window]. Please also consider carefully if your namespace should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";
                yield i(this.tokens.name, this, "require-exposed", e, {
                    autofix: R(this)
                })
            }
            yield* super.validate(e)
        }
    }
    class ae extends X {
        static parse(e, t, {
            partial: n = null
        } = {}) {
            const r = {
                callback: t
            };
            if (r.base = e.consume("interface"), r.base) return X.parse(e, new ae({
                source: e.source,
                tokens: r
            }), {
                type: "callback interface",
                inheritable: !n,
                allowedMembers: [
                    [Y.parse],
                    [w.parse, {
                        regular: !0
                    }]
                ]
            })
        }
        get type() {
            return "callback interface"
        }
    }

    function se(e, t) {
        const n = e.source;

        function r(t) {
            e.error(t)
        }

        function o(...t) {
            return e.consume(...t)
        }

        function i(t) {
            const n = o("interface");
            if (n) return ne.parse(e, n, t) || ee.parse(e, n, t) || r("Interface has no proper body")
        }

        function a() {
            return function() {
                const t = o("callback");
                if (t) return e.probe("interface") ? ae.parse(e, t) : Z.parse(e, t)
            }() || i() || function() {
                const t = o("partial");
                if (t) return oe.parse(e, {
                    partial: t
                }) || i({
                    partial: t
                }) || ie.parse(e, {
                    partial: t
                }) || r("Partial doesn't apply to anything")
            }() || oe.parse(e) || B.parse(e) || V.parse(e) || G.parse(e) || ie.parse(e)
        }
        const s = function() {
            if (!n.length) return [];
            const i = [];
            for (;;) {
                const t = b.parse(e),
                    n = a();
                if (!n) {
                    t.length && r("Stray extended attributes");
                    break
                }
                L(n).extAttrs = t, i.push(n)
            }
            const s = o("eof");
            return t.concrete && i.push(s), i
        }();
        return e.position < n.length && r("Unrecognised tokens"), s
    }

    function ce(e, t = {}) {
        const n = new $(e);
        return void 0 !== t.sourceName && (n.source.name = t.sourceName), se(n, t)
    }

    function ue(e) {
        return e
    }
    const le = {
        wrap: e => e.join(""),
        trivia: ue,
        name: ue,
        reference: ue,
        type: ue,
        generic: ue,
        nameless: ue,
        inheritance: ue,
        definition: ue,
        extendedAttribute: ue,
        extendedAttributeReference: ue
    };

    function de(e, {
        templates: t = le
    } = {}) {
        function n(e, {
            unescaped: n,
            context: r
        }) {
            return n || (n = e.startsWith("_") ? e.slice(1) : e), t.reference(e, n, r)
        }

        function r(e, n = ue, ...r) {
            if (!e) return "";
            const o = n(e.value, ...r);
            return t.wrap([t.trivia(e.trivia), o])
        }

        function o(e, t) {
            return r(e, n, {
                context: t
            })
        }

        function i(e, n) {
            return r(e, t.name, n)
        }

        function a(e) {
            if (e.union || e.generic) return t.wrap([r(e.tokens.base, t.generic), r(e.tokens.open), ...e.subtype.map(s), r(e.tokens.close)]);
            const o = e.tokens.prefix || e.tokens.base,
                i = e.tokens.prefix ? [e.tokens.prefix.value, t.trivia(e.tokens.base.trivia)] : [],
                a = n(t.wrap([...i, e.tokens.base.value, r(e.tokens.postfix)]), {
                    unescaped: e.idlType,
                    context: e
                });
            return t.wrap([t.trivia(o.trivia), a])
        }

        function s(e) {
            return t.wrap([f(e.extAttrs), a(e), r(e.tokens.nullable), r(e.tokens.separator)])
        }

        function c(e) {
            return e ? t.wrap([r(e.tokens.assign), ...e.expression.map(e => r(e))]) : ""
        }

        function u(e) {
            return t.wrap([f(e.extAttrs), r(e.tokens.optional), t.type(s(e.idlType)), r(e.tokens.variadic), i(e.tokens.name, {
                data: e
            }), c(e.default), r(e.tokens.separator)])
        }

        function l(e) {
            return t.wrap([r(e.tokens.value), r(e.tokens.separator)])
        }

        function d(e) {
            const {
                rhsType: n
            } = e.params;
            return t.wrap([t.trivia(e.tokens.name.trivia), t.extendedAttribute(t.wrap([t.extendedAttributeReference(e.name), r(e.params.tokens.assign), o(e.params.tokens.secondaryName, e), r(e.params.tokens.open), ...e.params.list ? e.params.list.map("identifier-list" === n ? n => (function(e, n) {
                return t.wrap([o(e.tokens.value, n), r(e.tokens.separator)])
            })(n, e) : "string-list" === n ? l : u) : [], r(e.params.tokens.close)])), r(e.tokens.separator)])
        }

        function f(e) {
            return e.length ? t.wrap([r(e.tokens.open), ...e.map(d), r(e.tokens.close)]) : ""
        }

        function p(e) {
            return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.callback), r(e.tokens.partial), r(e.tokens.base), r(e.tokens.mixin), i(e.tokens.name, {
                data: e
            }), (o = e, o.tokens.inheritance ? t.wrap([r(o.tokens.colon), t.trivia(o.tokens.inheritance.trivia), t.inheritance(n(o.tokens.inheritance.value, {
                context: o
            }))]) : ""), r(e.tokens.open), g(e.members, e), r(e.tokens.close), r(e.tokens.termination)]), {
                data: e
            });
            var o
        }

        function h(e, n) {
            return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.readonly), r(e.tokens.async), r(e.tokens.base, t.generic), r(e.tokens.open), t.wrap(e.idlType.map(s)), r(e.tokens.close), r(e.tokens.termination)]), {
                data: e,
                parent: n
            })
        }
        t = Object.assign({}, le, t);
        const m = {
            interface: p,
            "interface mixin": p,
            namespace: p,
            operation: function(e, n) {
                const o = e.idlType ? [t.type(s(e.idlType)), i(e.tokens.name, {
                    data: e,
                    parent: n
                }), r(e.tokens.open), t.wrap(e.arguments.map(u)), r(e.tokens.close)] : [];
                return t.definition(t.wrap([f(e.extAttrs), e.tokens.name ? r(e.tokens.special) : r(e.tokens.special, t.nameless, {
                    data: e,
                    parent: n
                }), ...o, r(e.tokens.termination)]), {
                    data: e,
                    parent: n
                })
            },
            attribute: function(e, n) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.special), r(e.tokens.readonly), r(e.tokens.base), t.type(s(e.idlType)), i(e.tokens.name, {
                    data: e,
                    parent: n
                }), r(e.tokens.termination)]), {
                    data: e,
                    parent: n
                })
            },
            constructor: function(e, n) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.base, t.nameless, {
                    data: e,
                    parent: n
                }), r(e.tokens.open), t.wrap(e.arguments.map(u)), r(e.tokens.close), r(e.tokens.termination)]), {
                    data: e,
                    parent: n
                })
            },
            dictionary: p,
            field: function(e, n) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.required), t.type(s(e.idlType)), i(e.tokens.name, {
                    data: e,
                    parent: n
                }), c(e.default), r(e.tokens.termination)]), {
                    data: e,
                    parent: n
                })
            },
            const: function(e, n) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.base), t.type(s(e.idlType)), i(e.tokens.name, {
                    data: e,
                    parent: n
                }), r(e.tokens.assign), r(e.tokens.value), r(e.tokens.termination)]), {
                    data: e,
                    parent: n
                })
            },
            typedef: function(e) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.base), t.type(s(e.idlType)), i(e.tokens.name, {
                    data: e
                }), r(e.tokens.termination)]), {
                    data: e
                })
            },
            includes: function(e) {
                return t.definition(t.wrap([f(e.extAttrs), o(e.tokens.target, e), r(e.tokens.includes), o(e.tokens.mixin, e), r(e.tokens.termination)]), {
                    data: e
                })
            },
            callback: function(e) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.base), i(e.tokens.name, {
                    data: e
                }), r(e.tokens.assign), t.type(s(e.idlType)), r(e.tokens.open), ...e.arguments.map(u), r(e.tokens.close), r(e.tokens.termination)]), {
                    data: e
                })
            },
            enum: function(e) {
                return t.definition(t.wrap([f(e.extAttrs), r(e.tokens.base), i(e.tokens.name, {
                    data: e
                }), r(e.tokens.open), g(e.values, e), r(e.tokens.close), r(e.tokens.termination)]), {
                    data: e
                })
            },
            "enum-value": function(e, n) {
                return t.wrap([t.trivia(e.tokens.value.trivia), t.definition(t.wrap(['"', t.name(e.value, {
                    data: e,
                    parent: n
                }), '"']), {
                    data: e,
                    parent: n
                }), r(e.tokens.separator)])
            },
            iterable: h,
            maplike: h,
            setlike: h,
            "callback interface": p,
            eof: function(e) {
                return t.trivia(e.trivia)
            }
        };

        function g(e, n) {
            if (!e) return;
            const r = e.map(e => (function(e, t) {
                if (!m[e.type]) throw new Error(`Type "${e.type}" is unsupported`);
                return m[e.type](e, t)
            })(e, n));
            return t.wrap(r)
        }
        return g(e)
    }

    function fe(e, t) {
        const n = new Map,
            r = e.filter(e => "includes" === e.type);
        for (const e of r) {
            const r = t.get(e.includes);
            if (!r) continue;
            const o = n.get(e.target);
            o ? o.push(r) : n.set(e.target, [r])
        }
        return n
    }

    function* pe(e) {
        const t = function(e) {
            const t = new Map,
                n = new Set,
                r = new Map;
            for (const o of e)
                if (o.partial) {
                    const e = r.get(o.name);
                    e ? e.push(o) : r.set(o.name, [o])
                } else o.name && (t.has(o.name) ? n.add(o) : t.set(o.name, o));
            return {
                all: e,
                unique: t,
                partials: r,
                duplicates: n,
                mixinMap: fe(e, t),
                cache: {
                    typedefIncludesDictionary: new WeakMap,
                    dictionaryIncludesRequiredField: new WeakMap
                }
            }
        }(e);
        for (const e of t.all) e.validate && (yield* e.validate(t));
        yield* function*({
            unique: e,
            duplicates: t
        }) {
            for (const n of t) {
                const {
                    name: t
                } = n, r = `The name "${t}" of type "${e.get(t).type}" was already seen`;
                yield i(n.tokens.name, n, "no-duplicate", r)
            }
        }(t)
    }

    function he(e) {
        return [...pe((t = e, t.flat ? t.flat() : [].concat(...t)))];
        var t
    }
    n.d(t, "parse", (function() {
        return ce
    })), n.d(t, "write", (function() {
        return de
    })), n.d(t, "validate", (function() {
        return he
    })), n.d(t, "WebIDLParseError", (function() {
        return z
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    const r = (e, t) => t.some(t => e instanceof t);
    let o, i;
    const a = new WeakMap,
        s = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        l = new WeakMap;
    let d = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return s.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || c.get(e);
                if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return h(e[t])
        },
        has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };

    function f(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
            return e.apply(m(this), t), h(a.get(this))
        } : function(...t) {
            return h(e.apply(m(this), t))
        } : function(t, ...n) {
            const r = e.call(m(this), t, ...n);
            return c.set(r, t.sort ? t.sort() : [t]), h(r)
        }
    }

    function p(e) {
        return "function" == typeof e ? f(e) : (e instanceof IDBTransaction && function(e) {
            if (s.has(e)) return;
            const t = new Promise((t, n) => {
                const r = () => {
                        e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                    },
                    o = () => {
                        t(), r()
                    },
                    i = () => {
                        n(e.error), r()
                    };
                e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i)
            });
            s.set(e, t)
        }(e), r(e, o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, d) : e)
    }

    function h(e) {
        if (e instanceof IDBRequest) return function(e) {
            const t = new Promise((t, n) => {
                const r = () => {
                        e.removeEventListener("success", o), e.removeEventListener("error", i)
                    },
                    o = () => {
                        t(h(e.result)), r()
                    },
                    i = () => {
                        n(e.error), r()
                    };
                e.addEventListener("success", o), e.addEventListener("error", i)
            });
            return t.then(t => {
                t instanceof IDBCursor && a.set(t, e)
            }).catch(() => {}), l.set(t, e), t
        }(e);
        if (u.has(e)) return u.get(e);
        const t = p(e);
        return t !== e && (u.set(e, t), l.set(t, e)), t
    }
    const m = e => l.get(e);

    function g(e, t, {
        blocked: n,
        upgrade: r,
        blocking: o
    } = {}) {
        const i = indexedDB.open(e, t),
            a = h(i);
        return r && i.addEventListener("upgradeneeded", e => {
            r(h(i.result), e.oldVersion, e.newVersion, h(i.transaction))
        }), n && i.addEventListener("blocked", () => n()), o && a.then(e => e.addEventListener("versionchange", o)).catch(() => {}), a
    }

    function b(e, {
        blocked: t
    } = {}) {
        const n = indexedDB.deleteDatabase(e);
        return t && n.addEventListener("blocked", () => t()), h(n).then(() => void 0)
    }
    n.d(t, "openDB", (function() {
        return g
    })), n.d(t, "deleteDB", (function() {
        return b
    })), n.d(t, "unwrap", (function() {
        return m
    })), n.d(t, "wrap", (function() {
        return h
    }));
    const y = ["get", "getKey", "getAll", "getAllKeys", "count"],
        v = ["put", "add", "delete", "clear"],
        w = new Map;

    function x(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (w.get(t)) return w.get(t);
        const n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            o = v.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !y.includes(n)) return;
        const i = async function(e, ...t) {
            const i = this.transaction(e, o ? "readwrite" : "readonly");
            let a = i.store;
            r && (a = a.index(t.shift()));
            const s = a[n](...t);
            return o && await i.done, s
        };
        return w.set(t, i), i
    }
    d = (e => ({
        get: (t, n, r) => x(t, n) || e.get(t, n, r),
        has: (t, n) => !!x(t, n) || e.has(t, n)
    }))(d)
}]);
//# sourceMappingURL=respec-CCWG-common.js.map