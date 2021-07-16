!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 104));
})([
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = function () {},
      o = {
        log: n,
        debug: n,
        info: console.info,
        warn: console.warn,
        error: console.error,
      };
    t.default = o;
  },
  ,
  function (e, t, r) {
    "use strict";
    var n = r(79),
      o = Object.prototype.toString;
    function a(e) {
      return "[object Array]" === o.call(e);
    }
    function i(e) {
      return void 0 === e;
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function u(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function c(e) {
      return "[object Function]" === o.call(e);
    }
    function f(e, t) {
      if (null !== e && void 0 !== e)
        if (("object" != typeof e && (e = [e]), a(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: a,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !i(e) &&
          null !== e.constructor &&
          !i(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isPlainObject: u,
      isUndefined: i,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return s(e) && c(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: f,
      merge: function e() {
        var t = {};
        function r(r, n) {
          u(t[n]) && u(r)
            ? (t[n] = e(t[n], r))
            : u(r)
            ? (t[n] = e({}, r))
            : a(r)
            ? (t[n] = r.slice())
            : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) f(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          f(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
    };
  },
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sendAppView = function (e) {
        try {
          a.sendAppView(e);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.sendEvent = function () {
        try {
          a.sendEvent.apply(a, arguments);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.send = function (e) {
        try {
          a.send(e);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.ADS_DATA =
        t.ADS =
        t.GENERATED_IMG =
        t.EXTENSION =
        t.CAPTURE_PNG =
        t.CAPTURE_GIF =
        t.OPTION_CHG =
        t.BUTTON_CLICK =
        t.cpaTracker =
        t.cpaService =
          void 0);
    var n = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(r(17));
    var o = n.default.getService("Capture to a Gif");
    t.cpaService = o;
    var a = o.getTracker("UA-136263860-1");
    (t.cpaTracker = a),
      chrome.storage.sync.get("noAnalysis", function (e) {
        var t = e.noAnalysis;
        o.getConfig().addCallback(function (e) {
          e.setTrackingPermitted(!t);
        });
      });
    var i = n.default.EventBuilder.builder().category("BUTTON").action("click");
    t.BUTTON_CLICK = i;
    var s = n.default.EventBuilder.builder()
      .category("OPTION")
      .action("change");
    t.OPTION_CHG = s;
    var u = n.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture gif");
    t.CAPTURE_GIF = u;
    var c = n.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture png");
    t.CAPTURE_PNG = c;
    var f = n.default.EventBuilder.builder().category("EXTENSION");
    t.EXTENSION = f;
    var d = n.default.EventBuilder.builder().category("GENERATED_IMG");
    t.GENERATED_IMG = d;
    var l = n.default.EventBuilder.builder().category("CAMPAIGNS");
    t.ADS = l;
    var p = n.default.EventBuilder.builder()
      .category("CAMPAIGNS")
      .action("fetch-data");
    t.ADS_DATA = p;
  },
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DEFAULT_OPS = void 0);
    t.DEFAULT_OPS = {
      maxFrameRate: 24,
      fps: 8,
      quality: 30,
      noAnalysis: !1,
      installedVersion: "",
      hotkeys: {
        recording: "return",
        cancel: "esc",
        capturePng: "ctrl+shift+p",
      },
    };
  },
  function (e, t) {
    e.exports = analytics;
  },
  ,
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        n = i;
      }
    })();
    var u,
      c = [],
      f = !1,
      d = -1;
    function l() {
      f &&
        u &&
        ((f = !1), u.length ? (c = u.concat(c)) : (d = -1), c.length && p());
    }
    function p() {
      if (!f) {
        var e = s(l);
        f = !0;
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++d < t; ) u && u[d].run();
          (d = -1), (t = c.length);
        }
        (u = null),
          (f = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === i || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      c.push(new h(e, t)), 1 !== c.length || f || s(p);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getStorageSync = function (e) {
        return new Promise(function (t, r) {
          chrome.storage.sync.get(e, function (e) {
            chrome.runtime.lastError
              ? r(chrome.runtime.lastError.message)
              : t(e);
          });
        });
      }),
      (t.setStorageSync = function (e) {
        return new Promise(function (t, r) {
          chrome.storage.sync.set(e, function () {
            chrome.runtime.lastError
              ? r(chrome.runtime.lastError.message)
              : t(!0);
          });
        });
      }),
      (t.removeStorageSync = function (e) {
        return new Promise(function (t, r) {
          chrome.storage.sync.remove(e, function () {
            chrome.runtime.lastError
              ? r(chrome.runtime.lastError.message)
              : t(!0);
          });
        });
      });
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    e.exports = function (e, t) {
      t = t || {};
      var r = {},
        o = ["url", "method", "data"],
        a = ["headers", "auth", "proxy", "params"],
        i = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        s = ["validateStatus"];
      function u(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
          ? n.merge({}, t)
          : n.isArray(t)
          ? t.slice()
          : t;
      }
      function c(o) {
        n.isUndefined(t[o])
          ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o]))
          : (r[o] = u(e[o], t[o]));
      }
      n.forEach(o, function (e) {
        n.isUndefined(t[e]) || (r[e] = u(void 0, t[e]));
      }),
        n.forEach(a, c),
        n.forEach(i, function (o) {
          n.isUndefined(t[o])
            ? n.isUndefined(e[o]) || (r[o] = u(void 0, e[o]))
            : (r[o] = u(void 0, t[o]));
        }),
        n.forEach(s, function (n) {
          n in t ? (r[n] = u(e[n], t[n])) : n in e && (r[n] = u(void 0, e[n]));
        });
      var f = o.concat(a).concat(i).concat(s),
        d = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === f.indexOf(e);
          });
      return n.forEach(d, c), r;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(93);
    e.exports = function (e, t, r, o, a) {
      var i = new Error(e);
      return n(i, t, r, o, a);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11),
      o = r(94),
      a = r(92),
      i = r(78),
      s = r(91),
      u = r(88),
      c = r(87),
      f = r(74);
    e.exports = function (e) {
      return new Promise(function (t, r) {
        var d = e.data,
          l = e.headers;
        n.isFormData(d) && delete l["Content-Type"];
        var p = new XMLHttpRequest();
        if (e.auth) {
          var h = e.auth.username || "",
            m = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          l.Authorization = "Basic " + btoa(h + ":" + m);
        }
        var g = s(e.baseURL, e.url);
        if (
          (p.open(
            e.method.toUpperCase(),
            i(g, e.params, e.paramsSerializer),
            !0
          ),
          (p.timeout = e.timeout),
          (p.onreadystatechange = function () {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status ||
                (p.responseURL && 0 === p.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in p
                    ? u(p.getAllResponseHeaders())
                    : null,
                a = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? p.response
                      : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: n,
                  config: e,
                  request: p,
                };
              o(t, r, a), (p = null);
            }
          }),
          (p.onabort = function () {
            p && (r(f("Request aborted", e, "ECONNABORTED", p)), (p = null));
          }),
          (p.onerror = function () {
            r(f("Network Error", e, null, p)), (p = null);
          }),
          (p.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(f(t, e, "ECONNABORTED", p)),
              (p = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var v =
            (e.withCredentials || c(g)) && e.xsrfCookieName
              ? a.read(e.xsrfCookieName)
              : void 0;
          v && (l[e.xsrfHeaderName] = v);
        }
        if (
          ("setRequestHeader" in p &&
            n.forEach(l, function (e, t) {
              void 0 === d && "content-type" === t.toLowerCase()
                ? delete l[t]
                : p.setRequestHeader(t, e);
            }),
          n.isUndefined(e.withCredentials) ||
            (p.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            p.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          p.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              p && (p.abort(), r(e), (p = null));
            }),
          d || (d = null),
          p.send(d);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(11),
        o = r(95),
        a = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s = {
        adapter: (function () {
          var e;
          return (
            "undefined" != typeof XMLHttpRequest
              ? (e = r(75))
              : void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t) &&
                (e = r(75)),
            e
          );
        })(),
        transformRequest: [
          function (e, t) {
            return (
              o(t, "Accept"),
              o(t, "Content-Type"),
              n.isFormData(e) ||
              n.isArrayBuffer(e) ||
              n.isBuffer(e) ||
              n.isStream(e) ||
              n.isFile(e) ||
              n.isBlob(e)
                ? e
                : n.isArrayBufferView(e)
                ? e.buffer
                : n.isURLSearchParams(e)
                ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString())
                : n.isObject(e)
                ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            if ("string" == typeof e)
              try {
                e = JSON.parse(e);
              } catch (e) {}
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      n.forEach(["delete", "get", "head"], function (e) {
        s.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          s.headers[e] = n.merge(a);
        }),
        (e.exports = s);
    }).call(this, r(19));
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var a;
      if (r) a = r(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var i = [];
        n.forEach(t, function (e, t) {
          null !== e &&
            void 0 !== e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                i.push(o(t) + "=" + o(e));
            }));
        }),
          (a = i.join("&"));
      }
      if (a) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
      }
      return e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getTextsData = function () {
        return (0, n.getStorageSync)("adsTexts").then(function (e) {
          var t = e.adsTexts;
          return t || [];
        });
      }),
      (t.saveTextsData = function (e) {
        return (0, n.setStorageSync)({ adsTexts: e });
      }),
      (t.getCardsData = function () {
        return (0, n.getStorageSync)([
          "adsCardsDataSliceCount",
          "adsCardsParams",
          "adsCardsStore",
        ]).then(function (e) {
          var t = e.adsCardsDataSliceCount,
            r = void 0 === t ? -1 : t,
            a = e.adsCardsParams,
            i = void 0 === a ? {} : a,
            s = e.adsCardsStore,
            u = void 0 === s ? "" : s;
          if (
            ("ebay" === u.toLowerCase() && (i.campid = "5338810736"), r > 0)
          ) {
            var c = Array(r)
              .fill(0)
              .map(function (e, t) {
                return "".concat(o).concat(t);
              });
            return (0, n.getStorageSync)(c).then(function (e) {
              var t = c.reduce(function (t, r) {
                return e[r] ? t.concat(e[r]) : t;
              }, []);
              return { params: i, data: t, store: u };
            });
          }
          return { params: i, data: [], store: u };
        });
      }),
      (t.saveCardsData = function (e, t) {
        for (
          var r = e.params,
            a = e.data,
            i = Math.ceil(a.length / 10),
            s = {
              adsCardsStore: t,
              adsCardsParams: r,
              adsCardsDataSliceCount: i,
            },
            u = 0;
          u < i;
          u += 1
        )
          s["".concat(o).concat(u)] = a.slice(10 * u, 10 * (u + 1));
        return (0, n.getStorageSync)("adsCardsDataSliceCount").then(function (
          e
        ) {
          var t = e.adsCardsDataSliceCount,
            r = void 0 === t ? -1 : t;
          if (r > 0) {
            var a = Array(r)
              .fill(0)
              .map(function (e, t) {
                return "".concat(o).concat(t);
              });
            return (0, n.removeStorageSync)(a).then(function () {
              return (0, n.setStorageSync)(s);
            });
          }
          return (0, n.setStorageSync)(s);
        });
      });
    var n = r(71),
      o = "adsCardsDataSlice";
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(72);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        a,
        i = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((a = e.indexOf(":")),
              (t = n.trim(e.substr(0, a)).toLowerCase()),
              (r = n.trim(e.substr(a + 1))),
              t)
            ) {
              if (i[t] && o.indexOf(t) >= 0) return;
              i[t] =
                "set-cookie" === t
                  ? (i[t] ? i[t] : []).concat([r])
                  : i[t]
                  ? i[t] + ", " + r
                  : r;
            }
          }),
          i)
        : i;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(90),
      o = r(89);
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, a, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && s.push("path=" + o),
              n.isString(a) && s.push("domain=" + a),
              !0 === i && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(74);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11),
      o = r(96),
      a = r(77),
      i = r(76);
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || i.adapter)(e).then(
          function (t) {
            return (
              s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              a(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(11);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(11),
      o = r(78),
      a = r(98),
      i = r(97),
      s = r(73);
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [i, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, r) {
          return this.request(
            s(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, r, n) {
          return this.request(s(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = u);
  },
  function (e, t, r) {
    "use strict";
    var n = r(11),
      o = r(79),
      a = r(99),
      i = r(73);
    function s(e) {
      var t = new a(e),
        r = o(a.prototype.request, t);
      return n.extend(r, a.prototype, t), n.extend(r, t), r;
    }
    var u = s(r(76));
    (u.Axios = a),
      (u.create = function (e) {
        return s(i(u.defaults, e));
      }),
      (u.Cancel = r(72)),
      (u.CancelToken = r(86)),
      (u.isCancel = r(77)),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = r(85)),
      (u.isAxiosError = r(84)),
      (e.exports = u),
      (e.exports.default = u);
  },
  function (e, t, r) {
    e.exports = r(100);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.fetchCampaingnsData = function () {
        var e = window.navigator.language.split("-"),
          t = (e[1] || e[0] || "").toLowerCase();
        i.default.debug("get campaigns data. current site:", t),
          (0, s.getStorageSync)([
            "campaignsUpdateTime",
            "campaignsExpires",
          ]).then(function (e) {
            var r = e.campaignsUpdateTime,
              n = void 0 === r ? 0 : r,
              u = e.campaignsExpires,
              f = void 0 === u ? 0 : u,
              d = Date.now();
            d > f
              ? (i.default.debug("getting site-map.json"),
                c
                  .get("/data/site-map.json", { params: { t: Date.now() } })
                  .then(function (e) {
                    var r = e.data;
                    r[t] || (t = "us"), i.default.debug("campaigns data:", r);
                    var u = r.expires || d + 864e5,
                      f = r.updateTime || d - 864e5;
                    f > n
                      ? (!(function (e) {
                          c
                            .get(e, { params: { t: Date.now() } })
                            .then(function (e) {
                              var t = e.data;
                              i.default.debug("ads texts:", t),
                                (0, o.saveTextsData)(t);
                            })
                            .catch(function (e) {
                              i.default.debug("error on fetch texts data"),
                                i.default.error(e),
                                (0, a.send)(
                                  a.ADS_DATA.label("ERROR on texts data")
                                );
                            }),
                            (0, a.send)(a.ADS_DATA.label("texts data"));
                        })(r[t].texts),
                        (function (e) {
                          var t = e.store,
                            r = e.url;
                          c
                            .get(r, { params: { t: Date.now() } })
                            .then(function (e) {
                              var r = e.data;
                              i.default.debug("store cards", t, r),
                                (0, o.saveCardsData)(r, t);
                            })
                            .catch(function (e) {
                              i.default.debug("error on fetch cards data"),
                                i.default.error(e),
                                (0, a.send)(
                                  a.ADS_DATA.label("ERROR on cards data")
                                );
                            }),
                            (0, a.send)(a.ADS_DATA.label("cards data"));
                        })(r[t].cards),
                        (0, s.setStorageSync)({ campaignsUpdateTime: f }))
                      : i.default.debug("no new campaigns data"),
                      (0, s.setStorageSync)({ campaignsExpires: u });
                  })
                  .catch(function (e) {
                    i.default.debug("error on fetch site-map.json"),
                      i.default.error(e),
                      (0, a.send)(a.ADS_DATA.label("ERROR on site-map.json"));
                  }),
                (0, a.send)(a.ADS_DATA.label("site-map.json")))
              : i.default.debug("not expired");
          });
      });
    var n = u(r(101)),
      o = r(83),
      a = r(13),
      i = u(r(9)),
      s = r(71);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = n.default.create({
      baseURL: "https://shopping.letjs.fun",
      headers: {},
    });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var n = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(r(9));
    function o(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var a = (function () {
      function e(t, r, o) {
        var a = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.startTime = 0),
          (this.stopTime = 0),
          (this.videoUrl = null),
          (this._record = function (e) {
            n.default.debug("PageRecorder._record");
            var t = [];
            (a.mr = new MediaRecorder(e)),
              (a.mr.ondataavailable = function (e) {
                n.default.debug("PageRecorder.mediaRecorder.ondataavailable"),
                  t.push(e.data);
              }),
              (a.mr.onstop = function () {
                if (
                  (n.default.debug("PageRecorder.mediaRecorder.onstop"),
                  (a.stopTime = Date.now()),
                  e.getVideoTracks().forEach(function (e) {
                    return e.stop();
                  }),
                  a.isStoped)
                ) {
                  var r = new Blob(t, { type: "video/webm" });
                  if (
                    ((a.videoUrl = URL.createObjectURL(r)),
                    n.default.debug(
                      "PageRecorder.mediaRecorder.onstop videoUrl:",
                      a.videoUrl
                    ),
                    "function" == typeof a.onstop)
                  ) {
                    n.default.debug("PageRecorder.stop call onstop");
                    try {
                      a.onstop.call(void 0, a.videoUrl);
                    } catch (e) {
                      n.default.error(e);
                    }
                  }
                }
              }),
              (a.startTime = Date.now()),
              a.mr.start();
          }),
          (this.width = t),
          (this.height = r),
          (this.maxFrameRate = o);
      }
      return (
        (function (e, t, r) {
          t && o(e.prototype, t), r && o(e, r);
        })(e, [
          {
            key: "start",
            value: function () {
              n.default.debug("PageRecorder.start");
              var e = this.width,
                t = this.height,
                r = this.maxFrameRate;
              n.default.debug("PageRecorder.start constraints", {
                width: e,
                height: t,
                maxFrameRate: r,
              }),
                chrome.tabCapture.capture(
                  {
                    video: !0,
                    audio: !1,
                    videoConstraints: {
                      mandatory: {
                        maxFrameRate: r || void 0,
                        maxWidth: e,
                        maxHeight: t,
                        minWidth: e,
                        minHeight: t,
                      },
                    },
                  },
                  this._record
                );
            },
          },
          {
            key: "stop",
            value: function () {
              n.default.debug("PageRecorder.stop"),
                (this.isStoped = !0),
                this.mr.stop();
            },
          },
          {
            key: "cancel",
            value: function () {
              n.default.debug("PageRecorder.cancel"),
                (this.isStoped = !1),
                this.mr.stop(),
                (this.videoUrl = null),
                (this.startTime = 0),
                (this.stopTime = 0);
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.videoUrl;
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.stopTime - this.startTime;
            },
          },
        ]),
        e
      );
    })();
    t.default = a;
  },
  function (e, t, r) {
    "use strict";
    var n = s(r(103)),
      o = r(16),
      a = r(13),
      i = s(r(9));
    !(function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            var n =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, r)
                : {};
            n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
          }
      t.default = e;
    })(r(102));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    chrome.runtime.onInstalled.addListener(function () {
      chrome.storage.sync.get(o.DEFAULT_OPS, function (e) {
        i.default.debug("options: ", e);
        var t = chrome.runtime.getManifest();
        e.installedVersion
          ? e.installedVersion !== t.version &&
            (0, a.send)(a.EXTENSION.action("update").label(t.version))
          : (0, a.send)(a.EXTENSION.action("install").label(t.version)),
          (e.installedVersion = t.version),
          chrome.storage.sync.set(e, function () {
            i.default.debug("init opts", e);
          });
      });
    }),
      chrome.browserAction.onClicked.addListener(function (e) {
        chrome.tabs.executeScript(
          e.id,
          { file: "js/content.js" },
          function (e) {
            if (void 0 === e) {
              var t = chrome.runtime.lastError.message;
              i.default.error("run content failed: ", t),
                alert(
                  ""
                    .concat(t, "\n\n")
                    .concat(
                      "Google blocks extensions that run on the Chrome Web Store and certain websites. Try another site"
                    )
                );
            } else i.default.debug("run content successed", e);
          }
        );
      });
    var u = null,
      c = null,
      f = null,
      d = null,
      l = null,
      p = null;
    function h(e) {
      i.default.debug("background.openEditor blobUrl:", e),
        (c = e),
        chrome.tabs.create({ url: "editor.html", active: !0 }, function () {
          chrome.runtime.lastError &&
            alert("error\n\n".concat(chrome.runtime.lastError.message));
        });
    }
    chrome.runtime.onMessage.addListener(function (e, t, r) {
      var a = {};
      if ("screenshot" === e.type) {
        i.default.debug("started recording"),
          c && URL.revokeObjectURL(c),
          (c = null),
          (u = null);
        var s = (d = e.offset),
          m = s.w,
          g = s.h;
        s.ratio;
        chrome.storage.sync.get(
          { maxFrameRate: o.DEFAULT_OPS.maxFrameRate },
          function (e) {
            var t = e.maxFrameRate;
            ((u = new n.default(m, g, t)).onstop = h), u.start();
          }
        );
      } else
        "finish-capture" === e.type
          ? (i.default.debug("stoped recording"),
            (l = e.hostname),
            (p = "gif"),
            u && u.stop())
          : "capture-png" === e.type
          ? (i.default.debug("capture png", e),
            (l = e.hostname),
            (d = e.offset),
            (p = "png"),
            (f = null),
            chrome.tabs.captureVisibleTab(
              void 0,
              { format: "png" },
              function (e) {
                (f = e),
                  chrome.tabs.create({ url: "editor.html", selected: !0 });
              }
            ))
          : "ready-save" === e.type
          ? (i.default.debug("tell data to editor"),
            (a = {
              offset: d,
              videoUrl: c,
              duration: u ? u.getDuration() : 0,
              hostname: l,
              captureType: p,
              pngDataUrl: f,
            }))
          : "cancel-capture" === e.type
          ? (i.default.debug("canceled recording"), u.cancel())
          : "release-resource" === e.type
          ? (i.default.debug("release resource"),
            URL.revokeObjectURL(c),
            (c = null),
            (f = null),
            (p = null))
          : (a = "not invalid command");
      r(a);
    });
  },
]);
