!(function (e) {
  function t(t) {
    for (
      var r, o, l = t[0], u = t[1], s = t[2], f = 0, d = [];
      f < l.length;
      f++
    )
      (o = l[f]), a[o] && d.push(a[o][0]), (a[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (c && c(t); d.length; ) d.shift()();
    return i.push.apply(i, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, l = 1; l < n.length; l++) {
        var u = n[l];
        0 !== a[u] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 5: 0 },
    i = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var c = u;
  i.push([137, 0, 1]), n();
})({
  122: function (e, t, n) {},
  125: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t, n) {
        var a = document.createElement("canvas"),
          i = a.getContext("2d");
        (a.width = t.dw), (a.height = t.dh);
        var o = document.createElement("img");
        (o.onload = function () {
          r.default.debug("clipPng img.onload");
          var e = t.x * t.ratio,
            l = t.y * t.ratio,
            u = t.width * t.ratio,
            s = t.height * t.ratio;
          i.drawImage(o, e, l, u, s, 0, 0, a.width, a.height),
            n.call(null, a.toDataURL());
        }),
          (o.src = e);
      });
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(9));
  },
  126: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r);
    function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = a.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",
    });
    t.default = function (e) {
      return a.a.createElement("svg", i({ viewBox: "0 0 16 16" }, e), o);
    };
  },
  127: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r);
    function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = a.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.99 11.99c.28 0 .53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42l-6 6a1.003 1.003 0 0 0 .71 1.71zm3.85-2.02L6.4 12.41l-1 1-.01-.01c-.36.36-.85.6-1.4.6-1.1 0-2-.9-2-2 0-.55.24-1.04.6-1.4l-.01-.01 1-1 2.44-2.44c-.33-.1-.67-.16-1.03-.16-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.73.72-1.19 1.71-1.19 2.81 0 2.21 1.79 4 4 4 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02c.73-.72 1.19-1.71 1.19-2.81 0-.35-.06-.69-.15-1.02zm7.15-5.98c0-2.21-1.79-4-4-4-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.72.72-1.19 1.71-1.19 2.81 0 .36.06.69.15 1.02l2.44-2.44 1-1 .01.01c.36-.36.85-.6 1.4-.6 1.1 0 2 .9 2 2 0 .55-.24 1.04-.6 1.4l.01.01-1 1-2.43 2.45c.33.09.67.15 1.02.15 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02a3.92 3.92 0 0 0 1.19-2.81z",
    });
    t.default = function (e) {
      return a.a.createElement("svg", i({ viewBox: "0 0 16 16" }, e), o);
    };
  },
  128: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r);
    function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = a.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 8c.28 0 .53-.11.71-.29L8 4.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 8zm4.71-.71C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z",
    });
    t.default = function (e) {
      return a.a.createElement("svg", i({ viewBox: "0 0 16 16" }, e), o);
    };
  },
  129: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r);
    function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = a.a.createElement("circle", { cx: 2, cy: 8.03, r: 2 }),
      l = a.a.createElement("circle", { cx: 14, cy: 8.03, r: 2 }),
      u = a.a.createElement("circle", { cx: 8, cy: 8.03, r: 2 });
    t.default = function (e) {
      return a.a.createElement("svg", i({ viewBox: "0 0 16 16" }, e), o, l, u);
    };
  },
  13: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sendAppView = function (e) {
        try {
          i.sendAppView(e);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.sendEvent = function () {
        try {
          i.sendEvent.apply(i, arguments);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.send = function (e) {
        try {
          i.send(e);
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
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(17));
    var a = r.default.getService("Capture to a Gif");
    t.cpaService = a;
    var i = a.getTracker("UA-136263860-1");
    (t.cpaTracker = i),
      chrome.storage.sync.get("noAnalysis", function (e) {
        var t = e.noAnalysis;
        a.getConfig().addCallback(function (e) {
          e.setTrackingPermitted(!t);
        });
      });
    var o = r.default.EventBuilder.builder().category("BUTTON").action("click");
    t.BUTTON_CLICK = o;
    var l = r.default.EventBuilder.builder()
      .category("OPTION")
      .action("change");
    t.OPTION_CHG = l;
    var u = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture gif");
    t.CAPTURE_GIF = u;
    var s = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture png");
    t.CAPTURE_PNG = s;
    var c = r.default.EventBuilder.builder().category("EXTENSION");
    t.EXTENSION = c;
    var f = r.default.EventBuilder.builder().category("GENERATED_IMG");
    t.GENERATED_IMG = f;
    var d = r.default.EventBuilder.builder().category("CAMPAIGNS");
    t.ADS = d;
    var h = r.default.EventBuilder.builder()
      .category("CAMPAIGNS")
      .action("fetch-data");
    t.ADS_DATA = h;
  },
  130: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(0)),
      a = n(14),
      i = n(13),
      o = d(n(9)),
      l = d(n(36)),
      u = d(n(129)),
      s = d(n(128)),
      c = d(n(127)),
      f = d(n(126));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function p(e, t) {
      return !t || ("object" != typeof t && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function v(e, t) {
      return (v =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function m(e) {
      var t = e.children;
      return r.default.createElement(
        "span",
        {
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            display: "inline-block",
            height: 30,
            lineHeight: "30px",
            color: "rgba(200, 200, 200, 0.3)",
            paddingRight: "4px",
          },
        },
        t
      );
    }
    var y = (function (e) {
      function t() {
        var e, n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
          a[l] = arguments[l];
        return (
          ((n = p(this, (e = g(t)).call.apply(e, [this].concat(a)))).state = {
            expand: !!n.props.keepExpand,
            linkedWH: !0,
          }),
          (n.toggleExpand = function () {
            n.setState({ expand: !n.state.expand });
            var e = n.state.expand ? "collapse" : "expand";
            (0, i.sendEvent)("EDITOR-RESCALER", "click-expand", e);
          }),
          (n.toggleLinkedWH = function () {
            n.setState({ linkedWH: !n.state.linkedWH });
            var e = n.state.linkedWH ? "unlink" : "link";
            (0, i.sendEvent)("EDITOR-RESCALER", "click-linkWH", e);
          }),
          (n.onWidthChange = function (e) {
            o.default.debug("Rescaler.onWidthChange: ", e);
            var t = n.props,
              r = t.box,
              a = t.onChange,
              i = Math.floor(e),
              l = n.state.linkedWH
                ? Math.round((e * r.height) / r.width)
                : n.props.height;
            a.call(void 0, i, l);
          }),
          (n.onHeightChange = function (e) {
            o.default.debug("Rescaler.onHeightChange: ", e);
            var t = n.props,
              r = t.box,
              a = t.onChange,
              i = Math.floor(e),
              l = n.state.linkedWH
                ? Math.round((e * r.width) / r.height)
                : n.props.width;
            a.call(void 0, l, i);
          }),
          n
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && v(e, t);
        })(t, r.Component),
        (function (e, t, n) {
          t && h(e.prototype, t), n && h(e, n);
        })(t, [
          {
            key: "componentDidUpdate",
            value: function (e) {
              var t = this.props.keepExpand;
              t !== e.keepExpand && this.setState({ expand: t });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.width,
                n = e.height,
                i = e.box,
                o = void 0 === i ? {} : i,
                d = e.keepExpand;
              return r.default.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    marginBottom: "20px",
                    paddingTop: this.state.expand ? 0 : 16,
                    paddingRight: 20,
                    height: this.state.expand ? 136 : 16,
                    overflow: "hidden",
                    transition: "all .2s ease",
                  },
                },
                r.default.createElement(
                  a.FormGroup,
                  { label: (0, l.default)("width") },
                  r.default.createElement(a.NumericInput, {
                    allowNumericCharactersOnly: !0,
                    buttonPosition: "none",
                    value: t,
                    onValueChange: this.onWidthChange,
                    rightElement: r.default.createElement(m, null, o.width),
                    fill: !0,
                  })
                ),
                r.default.createElement(
                  a.FormGroup,
                  { label: (0, l.default)("height") },
                  r.default.createElement(a.NumericInput, {
                    allowNumericCharactersOnly: !0,
                    buttonPosition: "none",
                    value: n,
                    onValueChange: this.onHeightChange,
                    rightElement: r.default.createElement(m, null, o.height),
                    fill: !0,
                  })
                ),
                r.default.createElement(
                  "svg",
                  {
                    width: "50",
                    height: "80",
                    style: { position: "absolute", right: -30, top: 34 },
                  },
                  r.default.createElement("path", {
                    d: "M 0 2 L 10 2 L 10 70 L 0 70",
                    stroke: "rgba(16, 22, 26, 0.3)",
                    strokeWidth: "1",
                    fill: "none",
                  })
                ),
                r.default.createElement(c.default, {
                  style: {
                    position: "absolute",
                    display: this.state.linkedWH ? "block" : "none",
                    right: 2,
                    top: 60,
                    cursor: "pointer",
                    fill: "#bfccd6",
                  },
                  width: "16",
                  onClick: this.toggleLinkedWH,
                }),
                r.default.createElement(f.default, {
                  style: {
                    position: "absolute",
                    display: this.state.linkedWH ? "none" : "block",
                    right: 2,
                    top: 60,
                    cursor: "pointer",
                    fill: "#bfccd6",
                  },
                  width: "16",
                  onClick: this.toggleLinkedWH,
                }),
                r.default.createElement(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      bottom: -4,
                      textAlign: "center",
                      width: "100%",
                      color: "#bfccd6",
                      display: d ? "none" : "block",
                    },
                  },
                  r.default.createElement(
                    "span",
                    { style: { display: this.state.expand ? void 0 : "none" } },
                    "--"
                  ),
                  r.default.createElement(u.default, {
                    style: {
                      display: this.state.expand ? "none" : "inline-block",
                      cursor: "pointer",
                      fill: "#bfccd6",
                    },
                    width: "16",
                    onClick: this.toggleExpand,
                  }),
                  r.default.createElement(s.default, {
                    style: {
                      display: this.state.expand ? "inline-block" : "none",
                      cursor: "pointer",
                      verticalAlign: "bottom",
                      fill: "#bfccd6",
                    },
                    width: "16",
                    onClick: this.toggleExpand,
                  }),
                  r.default.createElement(
                    "span",
                    { style: { display: this.state.expand ? void 0 : "none" } },
                    "--"
                  )
                )
              );
            },
          },
        ]),
        t
      );
    })();
    t.default = y;
  },
  131: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(0)),
      a = n(13);
    function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function (t) {
            l(e, t, n[t]);
          });
      }
      return e;
    }
    function l(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function s(e, t) {
      return !t || ("object" != typeof t && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var d = function (e) {
        return e.stopPropagation() && e.preventDefault();
      },
      h = {
        display: "inline-block",
        height: "18px",
        width: "24px",
        borderRadius: 4,
        margin: 2,
        cursor: "pointer",
      },
      p = (function (e) {
        function t() {
          var e, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            ((n = s(this, (e = c(t)).call.apply(e, [this].concat(i)))).state = {
              bgColor: "black",
            }),
            (n.setBgWhite = function () {
              n.setState({ bgColor: "white" }),
                (0, a.send)(
                  a.BUTTON_CLICK.label("editor/focusimg-white-background")
                );
            }),
            (n.setBgBlack = function () {
              n.setState({ bgColor: "black" }),
                (0, a.send)(
                  a.BUTTON_CLICK.label("editor/focusimg-black-background")
                );
            }),
            n
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(t, r.Component),
          (function (e, t, n) {
            t && u(e.prototype, t), n && u(e, n);
          })(t, [
            {
              key: "getBoxShadow",
              value: function (e) {
                return this.state.bgColor === e
                  ? ""
                      .concat("0 0 3px gray", ",")
                      .concat("inset 0 0 2px #137cbd")
                  : "0 0 3px gray";
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.imgSrc,
                  n = e.show,
                  a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      a = {},
                      i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < o.length; r++)
                        (n = o[r]),
                          t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                              (a[n] = e[n]));
                    }
                    return a;
                  })(e, ["imgSrc", "show"]);
                return r.default.createElement(
                  "div",
                  i({}, a, {
                    style: {
                      position: "fixed",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      display: n ? "flex" : "none",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: this.state.bgColor,
                    },
                  }),
                  r.default.createElement("img", { src: t }),
                  r.default.createElement(
                    "div",
                    {
                      style: {
                        position: "fixed",
                        top: 0,
                        paddingTop: 2,
                        textAlign: "center",
                      },
                      onClick: d,
                    },
                    r.default.createElement("span", {
                      style: o({}, h, {
                        backgroundColor: "white",
                        boxShadow: this.getBoxShadow("white"),
                      }),
                      onClick: this.setBgWhite,
                    }),
                    r.default.createElement("span", {
                      style: o({}, h, {
                        backgroundColor: "black",
                        boxShadow: this.getBoxShadow("black"),
                      }),
                      onClick: this.setBgBlack,
                    }),
                    r.default.createElement(
                      "span",
                      {
                        style: {
                          position: "fixed",
                          display: "block",
                          top: 2,
                          right: 4,
                          height: 20,
                          lineHeight: "18px",
                          width: 20,
                          color: "gray",
                          textAlign: "center",
                          cursor: "pointer",
                          boxShadow: "0 0 2px gray",
                          textShadow: "0 0 2px gray",
                          borderRadius: 10,
                        },
                        onClick: this.props.onClick,
                      },
                      "x"
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })();
    t.default = p;
  },
  132: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        var t = e.value,
          n = void 0 === t ? 0 : t;
        return r.default.createElement(
          "div",
          {
            style: {
              position: "relative",
              height: 8,
              borderRadius: 40,
              width: "100%",
              backgroundColor: "rgba(92,112,128,.2)",
              overflow: "hidden",
            },
          },
          r.default.createElement("div", {
            style: {
              position: "relative",
              height: "100%",
              width: "".concat(100 * n, "%"),
              backgroundColor: "#8A9BA8",
              borderRadius: 40,
              transition: "all .2s linear",
            },
          })
        );
      });
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(0));
  },
  133: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        o.default.debug("GifPlayer", e);
        var t = e.process,
          n = t.frameProcess,
          i = t.genProcess,
          l = t.noResource,
          u = i || n,
          s = "Generating Step ".concat(i ? 2 : 1, " / 2"),
          c = Math.floor(100 * u) + " %",
          f = i ? "genprocess" : "frameproces";
        return r.default.createElement(
          d,
          null,
          null === i && null === n
            ? r.default.createElement(
                h,
                null,
                l
                  ? r.default.createElement("h2", null, "Nothing to display")
                  : r.default.createElement("img", {
                      src: e.url,
                      onClick: e.onClickImg,
                      style: { cursor: "pointer" },
                    })
              )
            : r.default.createElement(
                p,
                null,
                r.default.createElement("h4", null, s),
                r.default.createElement("h3", null, c),
                r.default.createElement(a.default, { key: f, value: u })
              )
        );
      });
    var r = l(n(0)),
      a = l(n(132)),
      i = l(n(15)),
      o = l(n(9));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u() {
      var e = f([
        "\n  flex: 1 1 auto;\n  max-width: 600px;\n  text-align: center;\n",
      ]);
      return (
        (u = function () {
          return e;
        }),
        e
      );
    }
    function s() {
      var e = f(["\n  flex: 0 1 auto;\n  overflow: auto hidden;\n"]);
      return (
        (s = function () {
          return e;
        }),
        e
      );
    }
    function c() {
      var e = f([
        "\n  display: flex;\n  /* flex-direction: column; */\n  min-height: 300px;\n  align-items: center;\n  justify-content: center;\n",
      ]);
      return (
        (c = function () {
          return e;
        }),
        e
      );
    }
    function f(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var d = i.default.div(c()),
      h = i.default.div(s()),
      p = i.default.div(u());
  },
  134: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(9));
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var i = (function () {
      function e(t, n) {
        var r = this,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1 / 0;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.fps = 8),
          (this.offset = n),
          (this.duration = a),
          (this.video = document.createElement("video")),
          (this.video.controls = !0),
          (this.video.preload = "auto"),
          (this.video.src = t),
          (this.video.style.position = "fixed"),
          (this.video.style.top = "-9999999px"),
          document.body.appendChild(this.video),
          (this.canvas = document.createElement("canvas")),
          (this.canvas.width = n.width),
          (this.canvas.height = n.height),
          (this.ctx = this.canvas.getContext("2d")),
          (this.listeners = {}),
          (this.status = "init"),
          (this.onTimeUpdate = this.onTimeUpdate.bind(this)),
          (this.video.ontimeupdate = this.onTimeUpdate),
          (this.video.oncanplay = function () {
            !r.translate && r.computeTranslate(),
              "waiting" === r.status
                ? ((r.status = "canplay"), r.tryStart())
                : "init" === r.status && (r.status = "canplay");
          });
      }
      return (
        (function (e, t, n) {
          t && a(e.prototype, t), n && a(e, n);
        })(e, [
          {
            key: "onTimeUpdate",
            value: function () {
              "drawing" === this.status &&
                this.drawFrame(this.video.currentTime);
            },
          },
          {
            key: "on",
            value: function (e, t) {
              this.listeners[e] = t;
            },
          },
          {
            key: "drawFrame",
            value: function (e) {
              var t = this.translate,
                n = t.x,
                r = t.y,
                a = t.w,
                i = t.h,
                o = 1e3 / this.fps;
              this.ctx.drawImage(
                this.video,
                n,
                r,
                a,
                i,
                0,
                0,
                this.canvas.width,
                this.canvas.height
              ),
                this.gif &&
                  this.gif.addFrame(this.canvas, {
                    delay: o,
                    width: this.canvas.width,
                    height: this.canvas.height,
                    copy: !0,
                  });
              var l = e + o / 1e3;
              this.nextFrame(l);
            },
          },
          {
            key: "nextFrame",
            value: function (e) {
              if (e <= this.video.duration) {
                this.video.currentTime = e;
                try {
                  this.listeners.progress &&
                    this.listeners.progress.call(
                      null,
                      (e / this.duration) * 1e3
                    );
                } catch (e) {
                  r.default.error(e);
                }
              } else
                r.default.debug("end"),
                  (this.status = "finished"),
                  this.drawingPromise &&
                    (r.default.debug("resolveing..."),
                    this.drawingPromise.resolve([]),
                    (this.drawingPromise = null));
            },
          },
          {
            key: "tryStart",
            value: function () {
              "canplay" === this.status || "finished" === this.status
                ? (r.default.debug("started"),
                  r.default.debug("video duration", this.video.duration),
                  (this.status = "drawing"),
                  (this.video.currentTime = 0))
                : (this.status = "waiting");
            },
          },
          {
            key: "start",
            value: function (e) {
              var t = this;
              return (
                (this.gif = e),
                (this.canvas.width = this.imgWidth || this.offset.width),
                (this.canvas.height = this.imgHeight || this.offset.height),
                this.tryStart(),
                new Promise(function (e, n) {
                  t.drawingPromise && t.drawingPromise.reject("restarted"),
                    (t.drawingPromise = { resolve: e, reject: n });
                })
              );
            },
          },
          {
            key: "computeTranslate",
            value: function () {
              var e = this.offset,
                t = e.w,
                n = e.h,
                a = e.x,
                i = e.y,
                o = e.width,
                l = e.height,
                u = this.video,
                s = u.videoWidth,
                c = u.videoHeight,
                f = Math.ceil((a * s) / t),
                d = Math.ceil((i * c) / n),
                h = Math.floor((o * s) / t),
                p = Math.floor((l * c) / n);
              (this.translate = { x: f, y: d, w: h, h: p }),
                r.default.debug("translate", this.translate),
                r.default.debug("video size:", s, c);
            },
          },
        ]),
        e
      );
    })();
    t.default = i;
  },
  136: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(0)),
      a = m(n(15)),
      i = m(n(2)),
      o = n(14),
      l = n(42),
      u = m(n(135)),
      s = n(13),
      c = m(n(134)),
      f = m(n(133)),
      d = m(n(131)),
      h = m(n(9)),
      p = m(n(130)),
      g = m(n(125)),
      v = m(n(36));
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function y(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(r = (o = l.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (a) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function b(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function (t) {
            w(e, t, n[t]);
          });
      }
      return e;
    }
    function w(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function E(e, t) {
      return !t || ("object" != typeof t && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function P(e) {
      return (P = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function x(e, t) {
      return (x =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function k() {
      var e = A(["\n  width: 100%;\n  min-height: 600px;\n"]);
      return (
        (k = function () {
          return e;
        }),
        e
      );
    }
    function _() {
      var e = A([
        "\n  width: 200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n",
      ]);
      return (
        (_ = function () {
          return e;
        }),
        e
      );
    }
    function C() {
      var e = A([
        "\n  flex: 0 0 auto;\n  width: 216px;\n  padding: 40px 12px 8px 4px;\n",
      ]);
      return (
        (C = function () {
          return e;
        }),
        e
      );
    }
    function j() {
      var e = A([
        "\n  flex-grow: 1;\n  min-height: 600px;\n  width: 0;\n  padding: 10px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: stretch;\n",
      ]);
      return (
        (j = function () {
          return e;
        }),
        e
      );
    }
    function T() {
      var e = A([
        "\n  position: relative;\n  min-height: calc(100% - 50px);\n  display: flex;\n  align-items: stretch;\n  background-color: #5C7080;\n",
      ]);
      return (
        (T = function () {
          return e;
        }),
        e
      );
    }
    function S() {
      var e = A([
        "\n  position: relative;\n  width: 100%;\n  text-align: right;\n  padding: 10px;\n  height: 50px;\n\n  >a {\n    margin: 0 20px;\n  }\n",
      ]);
      return (
        (S = function () {
          return e;
        }),
        e
      );
    }
    function R() {
      var e = A([
        "\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n",
      ]);
      return (
        (R = function () {
          return e;
        }),
        e
      );
    }
    function A(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var M = a.default.div(R()),
      I = a.default.header(S()),
      N = a.default.div(T()),
      D = a.default.div(j()),
      U = a.default.div(C()),
      F = a.default.div(_()),
      G = (0, a.default)(o.Card)(k()),
      L = (function (e) {
        function t(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = E(this, P(t).call(this, e))).setFPS = function (e) {
              n.setState({ fps: e });
            }),
            (n.setQuality = function (e) {
              n.setState({ quality: 55 - e });
            }),
            (n.onReleaseFPS = function (e) {
              (0, s.send)(s.OPTION_CHG.label("editor/FPS").value(e));
            }),
            (n.onReleaseQuality = function (e) {
              (0, s.send)(s.OPTION_CHG.label("editor/Quality").value(e));
            }),
            (n.requestFrames = (function (e) {
              return function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var i = e.apply(t, n);
                  function o(e, t) {
                    try {
                      var n = i[e](t),
                        o = n.value;
                    } catch (e) {
                      return void a(e);
                    }
                    n.done ? r(o) : Promise.resolve(o).then(l, u);
                  }
                  function l(e) {
                    o("next", e);
                  }
                  function u(e) {
                    o("throw", e);
                  }
                  l();
                });
              };
            })(
              regeneratorRuntime.mark(function e() {
                var t, r, a, i, o, l, u;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            h.default.debug("editor.requestFrames"),
                            (t = n.state),
                            (r = t.captureData.offset),
                            (a = t.width),
                            (i = t.height),
                            n.setState({
                              frames: [],
                              frameProgress: null,
                              gif: null,
                              genProcess: null,
                              status: "generating",
                            }),
                            URL.revokeObjectURL(n.state.gifUrl),
                            (n.video2gif.fps = n.state.fps),
                            (n.video2gif.imgWidth = a || r.width),
                            (n.video2gif.imgHeight = i || r.height),
                            (o = n.createGIF()),
                            (e.next = 10),
                            n.video2gif.start(o)
                          );
                        case 10:
                          (l = e.sent),
                            (u = n.generateFileName(
                              n.video2gif.imgWidth,
                              n.video2gif.imgHeight,
                              "gif"
                            )),
                            n.setState({
                              frames: l,
                              frameProgress: 1,
                              gif: o,
                              fileName: u,
                            }),
                            h.default.debug("editor.requestFrames: end frames"),
                            o.render();
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            (n.makePng = function () {
              n.setState({ status: "generating" });
              var e = n.state,
                t = e.captureData,
                r = e.width,
                a = e.height;
              (0, g.default)(
                t.pngDataUrl,
                b({}, t.offset, { dw: r, dh: a }),
                function (e) {
                  n.setState({
                    pngDataUrl: e,
                    status: "finished",
                    fileName: n.generateFileName(r, a, "png"),
                  });
                }
              );
            }),
            (n.onGenerate = function () {
              "gif" === n.state.captureData.captureType
                ? n.requestFrames()
                : n.makePng(),
                (0, s.send)(s.BUTTON_CLICK.label("editor-GENERATE"));
            }),
            (n.onSave = function () {
              (0, s.send)(s.BUTTON_CLICK.label("editor-SAVE"));
            }),
            (n.showFocusImg = function () {
              n.setState({ focusImg: !0 }),
                (0, s.send)(
                  s.GENERATED_IMG.action("show-focus-view").label("Gif Player")
                );
            }),
            (n.hideFocusImg = function () {
              n.setState({ focusImg: !1 }),
                (0, s.send)(
                  s.GENERATED_IMG.action("hide-focus-view").label(
                    "Focused Image"
                  )
                );
            }),
            (n.rescaleHandler = function (e, t) {
              n.setState({ width: e, height: t }),
                (0, s.send)(s.OPTION_CHG.label("editor/width-height"));
            }),
            (n.state = {
              noResource: !1,
              status: "pending",
              gifUrl: null,
              pngDataUrl: null,
              genProcess: null,
              frameProgress: null,
              fps: e.options.fps || 8,
              quality: e.options.quality || 30,
              duration: 1 / 0,
              frames: [],
              focusImg: !1,
              fileName: "",
            }),
            n
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && x(e, t);
          })(t, r.Component),
          (function (e, t, n) {
            t && O(e.prototype, t), n && O(e, n);
          })(t, [
            {
              key: "generateFileName",
              value: function (e, t, n) {
                var r = function (e) {
                    var t = "00".concat(e);
                    return t.slice(t.length - 2);
                  },
                  a = new Date(),
                  i = r(a.getFullYear()),
                  o = r(a.getMonth() + 1),
                  l = r(a.getDate()),
                  u = r(a.getHours()),
                  s = r(a.getMinutes());
                return "CPT"
                  .concat(i)
                  .concat(o)
                  .concat(l)
                  .concat(u)
                  .concat(s, "-")
                  .concat(e, "x")
                  .concat(t, ".")
                  .concat(n);
              },
            },
            {
              key: "createGIF",
              value: function () {
                var e = this,
                  t = new u.default({
                    quality: this.state.quality,
                    workers: 2,
                    workerScript: "libs/gif.worker.js",
                  });
                return (
                  t.on("finished", function (t) {
                    return e.setState({
                      gifUrl: URL.createObjectURL(t),
                      genProcess: null,
                      frameProgress: null,
                      status: "finished",
                    });
                  }),
                  t.on("progress", function (t) {
                    clearTimeout(e.gifProgressTimer),
                      e.gifProgressCounter || (e.gifProgressCounter = 0),
                      (e.gifProgressCounter += 1),
                      e.gifProgressCounter >= 5 || t >= 1
                        ? (e.setState({ genProcess: t }),
                          (e.gifProgressCounter = 0))
                        : (e.gifProgressTimer = setTimeout(function () {
                            return e.setState({ genProcess: t });
                          }, 50));
                  }),
                  t
                );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (0, s.sendAppView)("editor"),
                  chrome.runtime.sendMessage(
                    void 0,
                    { type: "ready-save" },
                    void 0,
                    function (t) {
                      if (
                        (h.default.debug("received: ", t),
                        !t.videoUrl && !t.pngDataUrl)
                      )
                        return (
                          h.default.debug(
                            "editor.componentDidMount: no video resource"
                          ),
                          void e.setState({ noResource: !0 })
                        );
                      "gif" === t.captureType
                        ? (h.default.debug(
                            "editor.componentDidMount: capture gif"
                          ),
                          e.setState({
                            captureData: t,
                            width: t.offset.width,
                            height: t.offset.height,
                          }),
                          (e.video2gif = new c.default(
                            t.videoUrl,
                            t.offset,
                            t.duration
                          )),
                          e.video2gif.on("progress", function (t) {
                            clearTimeout(e.videoProcessTimer),
                              e.videoProcessCounter ||
                                (e.videoProcessCounter = 0),
                              (e.videoProcessCounter += 1),
                              e.videoProcessCounter >= 5 || t >= 1
                                ? (e.setState({ frameProgress: t }),
                                  (e.videoProcessCounter = 0))
                                : (e.videoProcessTimer = setTimeout(
                                    function () {
                                      return e.setState({ frameProgress: t });
                                    },
                                    50
                                  ));
                          }),
                          e.requestFrames(),
                          (0, s.send)(
                            s.CAPTURE_GIF.label(t.hostname).value(t.duration)
                          ))
                        : (t.captureType = "png") &&
                          (h.default.debug(
                            "editor.componentDidMount: captured png"
                          ),
                          e.setState(
                            {
                              captureData: t,
                              width: t.offset.width,
                              height: t.offset.height,
                            },
                            e.makePng
                          ),
                          (0, s.send)(s.CAPTURE_PNG.label(t.hostname)));
                    }
                  );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                h.default.debug("editor.componentWillUnmount"),
                  chrome.runtime.sendMessage(void 0, {
                    type: "release-resource",
                  }),
                  URL.revokeObjectURL(this.state.gifUrl);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state,
                  t = e.frameProgress,
                  n = e.genProcess,
                  a = e.noResource,
                  u = e.captureData,
                  s = void 0 === u ? null : u,
                  c = e.fileName,
                  h = y(s ? [s.offset, s.captureType] : [{}, null], 2),
                  g = h[0],
                  m = h[1],
                  w = "gif" === m ? this.state.gifUrl : this.state.pngDataUrl,
                  O = "gif" !== m && "png" === m,
                  E = b({}, O ? { display: "none" } : {});
                return r.default.createElement(
                  M,
                  { className: (0, i.default)(o.Classes.DARK) },
                  r.default.createElement(
                    I,
                    null,
                    r.default.createElement(
                      "a",
                      {
                        href: "https://chrome.google.com/webstore/detail/".concat(
                          chrome.runtime.id
                        ),
                        target: "_blank",
                      },
                      (0, v.default)("ratings")
                    ),
                    r.default.createElement(
                      "a",
                      { href: "/options.html", target: "_blank" },
                      (0, v.default)("options")
                    ),
                    r.default.createElement(
                      "a",
                      { href: "/donate.html", target: "_blank" },
                      (0, v.default)("donate")
                    )
                  ),
                  r.default.createElement(
                    N,
                    null,
                    r.default.createElement(
                      D,
                      { className: (0, i.default)("main") },
                      r.default.createElement(
                        G,
                        null,
                        r.default.createElement(f.default, {
                          url: w,
                          process: {
                            frameProcess: t,
                            genProcess: n,
                            noResource: a,
                          },
                          onClickImg: this.showFocusImg,
                        })
                      )
                    ),
                    r.default.createElement(
                      U,
                      { className: (0, i.default)("right") },
                      r.default.createElement(
                        F,
                        null,
                        r.default.createElement(
                          o.FormGroup,
                          { label: "FPS", labelInfo: this.state.fps, style: E },
                          r.default.createElement(o.Slider, {
                            value: this.state.fps,
                            onChange: this.setFPS,
                            onRelease: this.onReleaseFPS,
                            max: 24,
                            min: 4,
                            stepSize: 4,
                            labelRenderer: !1,
                            disabled: O,
                          })
                        ),
                        r.default.createElement(
                          o.FormGroup,
                          {
                            label: (0, v.default)("quality"),
                            labelInfo: 55 - this.state.quality,
                            style: E,
                          },
                          r.default.createElement(o.Slider, {
                            value: 55 - this.state.quality,
                            onChange: this.setQuality,
                            onRelease: this.onReleaseQuality,
                            max: 50,
                            min: 5,
                            stepSize: 5,
                            labelRenderer: !1,
                            disabled: O,
                          })
                        ),
                        r.default.createElement(p.default, {
                          box: g,
                          width: this.state.width,
                          height: this.state.height,
                          onChange: this.rescaleHandler,
                          keepExpand: O,
                        }),
                        r.default.createElement(o.AnchorButton, {
                          className: (0, i.default)(o.Classes.LARGE),
                          fill: !0,
                          text: (0, v.default)("generate"),
                          icon: l.IconNames.BUILD,
                          onClick: this.onGenerate,
                          disabled: "finished" !== this.state.status,
                        }),
                        r.default.createElement("hr", null),
                        r.default.createElement(o.AnchorButton, {
                          className: (0, i.default)(
                            o.Classes.LARGE,
                            o.Classes.INTENT_PRIMARY
                          ),
                          icon: l.IconNames.FLOPPY_DISK,
                          href: w,
                          onClick: this.onSave,
                          disabled: "finished" !== this.state.status,
                          download: c,
                          text: (0, v.default)("save"),
                          fill: !0,
                        })
                      ),
                      r.default.createElement("div", {
                        style: {
                          textAlign: "center",
                          marginTop: "1rem",
                          position: "relative",
                        },
                      })
                    )
                  ),
                  r.default.createElement(d.default, {
                    imgSrc: w,
                    show: this.state.focusImg,
                    onClick: this.hideFocusImg,
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    t.default = L;
  },
  137: function (e, t, n) {
    "use strict";
    n(82);
    var r = c(n(0)),
      a = c(n(5)),
      i = n(15),
      o = n(14),
      l = c(n(136)),
      u = n(16),
      s = c(n(9));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f() {
      var e = (function (e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(["\n  html {\n    background-color: #10161A;\n  }\n"]);
      return (
        (f = function () {
          return e;
        }),
        e
      );
    }
    n(81),
      n(124),
      n(122),
      (0, i.injectGlobal)(f()),
      o.FocusStyleManager.onlyShowFocusOnTabs(),
      window.addEventListener("unload", function () {
        s.default.debug("unload"),
          chrome.runtime.sendMessage(void 0, { type: "release-resource" });
      }),
      chrome.storage.sync.get(u.DEFAULT_OPS, function (e) {
        a.default.render(
          r.default.createElement(l.default, { options: e }),
          document.getElementById("root")
        );
      });
  },
  16: function (e, t, n) {
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
  17: function (e, t) {
    e.exports = analytics;
  },
  36: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        return chrome.i18n.getMessage(e);
      });
  },
  9: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = function () {},
      a = {
        log: r,
        debug: r,
        info: console.info,
        warn: console.warn,
        error: console.error,
      };
    t.default = a;
  },
});
