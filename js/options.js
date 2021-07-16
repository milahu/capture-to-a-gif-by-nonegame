!(function (e) {
  function t(t) {
    for (
      var r, l, u = t[0], c = t[1], i = t[2], f = 0, d = [];
      f < u.length;
      f++
    )
      (l = u[f]), a[l] && d.push(a[l][0]), (a[l] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (s && s(t); d.length; ) d.shift()();
    return o.push.apply(o, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, u = 1; u < n.length; u++) {
        var c = n[u];
        0 !== a[c] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 6: 0 },
    o = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function (e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "");
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var i = 0; i < u.length; i++) t(u[i]);
  var s = c;
  o.push([144, 0]), n();
})({
  13: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sendAppView = function (e) {
        try {
          o.sendAppView(e);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.sendEvent = function () {
        try {
          o.sendEvent.apply(o, arguments);
        } catch (e) {
          console.error(e);
        }
      }),
      (t.send = function (e) {
        try {
          o.send(e);
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
    var o = a.getTracker("UA-136263860-1");
    (t.cpaTracker = o),
      chrome.storage.sync.get("noAnalysis", function (e) {
        var t = e.noAnalysis;
        a.getConfig().addCallback(function (e) {
          e.setTrackingPermitted(!t);
        });
      });
    var l = r.default.EventBuilder.builder().category("BUTTON").action("click");
    t.BUTTON_CLICK = l;
    var u = r.default.EventBuilder.builder()
      .category("OPTION")
      .action("change");
    t.OPTION_CHG = u;
    var c = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture gif");
    t.CAPTURE_GIF = c;
    var i = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture png");
    t.CAPTURE_PNG = i;
    var s = r.default.EventBuilder.builder().category("EXTENSION");
    t.EXTENSION = s;
    var f = r.default.EventBuilder.builder().category("GENERATED_IMG");
    t.GENERATED_IMG = f;
    var d = r.default.EventBuilder.builder().category("CAMPAIGNS");
    t.ADS = d;
    var p = r.default.EventBuilder.builder()
      .category("CAMPAIGNS")
      .action("fetch-data");
    t.ADS_DATA = p;
  },
  140: function (e, t, n) {},
  141: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getKeyName = function (e) {
        return o[e] || r[e] || String.fromCharCode(e).toLowerCase();
      }),
      (t.modifierNames = t.keyNames = void 0);
    var r = {
      8: "backspace",
      9: "tab",
      12: "clear",
      13: "return",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "delete",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
    };
    t.keyNames = r;
    for (var a = 1; a < 13; a++) r[111 + a] = "F".concat(a);
    var o = {
      16: "shift",
      17: "ctrl",
      18: "alt",
      91: "command",
      93: "command",
    };
    t.modifierNames = o;
  },
  142: function (e, t, n) {
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
      a = i(n(7)),
      o = i(n(2)),
      l = n(14),
      u = i(n(9)),
      c = n(141);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function f(e, t) {
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
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function p(e, t) {
      return (p =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var y = function () {},
      h = (function (e) {
        function t(e) {
          var n,
            r = e.defaultValue,
            a = void 0 === r ? "" : r;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = f(this, d(t).call(this))).onKeyDown = function (e) {
              if ((e.preventDefault(), e.stopPropagation(), !e.repeat)) {
                u.default.debug("keydown: ", e.nativeEvent);
                var t = e.keyCode;
                n.setState(function (e) {
                  var n = e.pressedKeys.concat((0, c.getKeyName)(t));
                  return { pressedKeys: n, value: n.join("+") };
                });
              }
            }),
            (n.onKeyUp = function (e) {
              e.preventDefault(), e.stopPropagation();
              var t = e.key;
              u.default.debug("key up: ", t, e.nativeEvent),
                n.setState({ pressedKeys: [] });
              var r = n.props.onChange;
              "function" == typeof r &&
                r.call(void 0, n.state.value, n.props.hotkeyKey);
            }),
            (n.state = { pressedKeys: [], value: a }),
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
              t && p(e, t);
          })(t, r.Component),
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(t, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  l.FormGroup,
                  {
                    className: (0, o.default)("justify-label"),
                    label: this.props.label,
                    helperText: this.props.helperText,
                  },
                  r.default.createElement(l.InputGroup, {
                    onKeyDown: this.onKeyDown,
                    onKeyUp: this.onKeyUp,
                    value: this.state.value,
                    onChange: y,
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    (t.default = h),
      (h.propTypes = {
        defaultValue: a.default.string.isRequired,
        onChange: a.default.func.isRequired,
        label: a.default.string.isRequired,
        hotkeyKey: a.default.string.isRequired,
        helperText: a.default.string,
      }),
      (h.defaultProps = { helperText: "" });
  },
  143: function (e, t, n) {
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
      o = f(n(2)),
      l = n(13),
      u = f(n(36)),
      c = n(16),
      i = f(n(142));
    n(140);
    var s = f(n(9));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function d(e) {
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
            p(e, t, n[t]);
          });
      }
      return e;
    }
    function p(e, t, n) {
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
    function y(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function h(e, t) {
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
    function m(e) {
      return (m = Object.setPrototypeOf
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
    var b = (function (e) {
      function t() {
        var e, n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        return (
          ((n = h(this, (e = m(t)).call.apply(e, [this].concat(a)))).state = d(
            {},
            c.DEFAULT_OPS,
            { loadedOpts: !1 }
          )),
          (n.maxFrameRateHandler = function (e) {
            var t = +e.currentTarget.value;
            chrome.storage.sync.set({ maxFrameRate: t }, function () {
              n.setState({ maxFrameRate: t }),
                (0, l.send)(
                  l.OPTION_CHG.label("options/maxFrameRate").value(t)
                );
            });
          }),
          (n.fpsHandler = function (e) {
            var t = +e.currentTarget.value;
            chrome.storage.sync.set({ fps: t }, function () {
              n.setState({ fps: t }),
                (0, l.send)(l.OPTION_CHG.label("options/fps").value(t));
            });
          }),
          (n.qualityHandler = function (e) {
            var t = 55 - e.target.value;
            chrome.storage.sync.set({ quality: t }, function () {
              n.setState({ quality: t }),
                (0, l.send)(l.OPTION_CHG.label("options/quality").value(t));
            });
          }),
          (n.analysisHandler = function (e) {
            var t = e.target.checked;
            chrome.storage.sync.set({ noAnalysis: t }, function () {
              n.setState({ noAnalysis: t }),
                l.cpaService.getConfig().addCallback(function (e) {
                  t &&
                    (0, l.sendEvent)("OPTION", "turn on", "options/noAnalysis"),
                    e.setTrackingPermitted(!t),
                    t ||
                      (0, l.sendEvent)(
                        "OPTION",
                        "turn off",
                        "options/noAnalysis"
                      );
                });
            });
          }),
          (n.hotkeyHandler = function (e, t) {
            s.default.debug("seting hotkey:", t, "--\x3e", e),
              n.setState(
                function (n) {
                  return { hotkeys: d({}, n.hotkeys, p({}, t, e)) };
                },
                function () {
                  chrome.storage.sync.set({ hotkeys: n.state.hotkeys });
                }
              );
          }),
          (n.openShortcuts = function (e) {
            e.preventDefault(),
              chrome.tabs.create({
                url: "chrome://extensions/shortcuts",
                selected: !0,
              });
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
          t && y(e.prototype, t), n && y(e, n);
        })(t, [
          {
            key: "restoreOps",
            value: function () {
              var e = this;
              chrome.storage.sync.get(c.DEFAULT_OPS, function (t) {
                e.setState(d({}, t, { loadedOpts: !0 }));
              });
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              this.restoreOps(), (0, l.sendAppView)("options");
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state,
                t = e.hotkeys,
                n = e.loadedOpts,
                l = r.default.createElement(
                  "span",
                  null,
                  (0, u.default)("onPage"),
                  r.default.createElement(
                    "a",
                    {
                      href: "chrome://extensions/shortcuts",
                      target: "_blank",
                      onClick: this.openShortcuts,
                    },
                    "chrome://extensions/shortcuts"
                  ),
                  (0, u.default)("overLaunch")
                );
              return r.default.createElement(
                r.default.Fragment,
                null,
                r.default.createElement(
                  a.Navbar,
                  null,
                  r.default.createElement(
                    a.Navbar.Group,
                    null,
                    r.default.createElement("img", {
                      src: "/images/Capture-Gif-48x48.png",
                      className: "logo-img",
                    }),
                    r.default.createElement(
                      a.Navbar.Heading,
                      null,
                      r.default.createElement(
                        "h2",
                        null,
                        (0, u.default)("options")
                      )
                    )
                  )
                ),
                r.default.createElement(
                  a.Card,
                  { className: "options-body" },
                  r.default.createElement(
                    "div",
                    { className: "option-group-title" },
                    (0, u.default)("basic")
                  ),
                  r.default.createElement(
                    a.FormGroup,
                    {
                      className: (0, o.default)("justify-label"),
                      label: (0, u.default)("maxFrameRate"),
                      helperText: (0, u.default)("maxFrameRateDesc"),
                    },
                    r.default.createElement(a.HTMLSelect, {
                      options: [8, 16, 24, { label: "auto", value: 0 }],
                      value: this.state.maxFrameRate,
                      onChange: this.maxFrameRateHandler,
                    })
                  ),
                  r.default.createElement(
                    a.FormGroup,
                    {
                      className: (0, o.default)("justify-label"),
                      label: (0, u.default)("defaultFPS"),
                      helperText: (0, u.default)("defaultFPSDesc"),
                    },
                    r.default.createElement(a.HTMLSelect, {
                      options: [4, 8, 12, 16, 20, 24],
                      value: this.state.fps,
                      onChange: this.fpsHandler,
                    })
                  ),
                  r.default.createElement(
                    a.FormGroup,
                    {
                      className: (0, o.default)("justify-label"),
                      label: (0, u.default)("defaultQuality"),
                      helperText: (0, u.default)("defaultQualityDesc"),
                    },
                    r.default.createElement(a.HTMLSelect, {
                      options: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                      value: 55 - this.state.quality,
                      onChange: this.qualityHandler,
                    })
                  ),
                  r.default.createElement("hr", null),
                  r.default.createElement(
                    a.FormGroup,
                    { helperText: (0, u.default)("usageDataDesc") },
                    r.default.createElement(a.Switch, {
                      label: (0, u.default)("disableTracking"),
                      checked: this.state.noAnalysis,
                      onChange: this.analysisHandler,
                    })
                  )
                ),
                r.default.createElement(
                  a.Card,
                  { className: "options-body" },
                  r.default.createElement(
                    "div",
                    { className: "option-group-title" },
                    (0, u.default)("hotkeys")
                  ),
                  r.default.createElement(i.default, {
                    key: n + "1",
                    label: (0, u.default)("startOrFinish"),
                    helperText: (0, u.default)("startOrFinishDesc"),
                    defaultValue: t.recording,
                    hotkeyKey: "recording",
                    onChange: this.hotkeyHandler,
                  }),
                  r.default.createElement(i.default, {
                    key: n + "2",
                    label: (0, u.default)("cancel"),
                    helperText: (0, u.default)("cancelDesc"),
                    defaultValue: t.cancel,
                    hotkeyKey: "cancel",
                    onChange: this.hotkeyHandler,
                  }),
                  r.default.createElement(i.default, {
                    key: n + "3",
                    label: (0, u.default)("capturePngImg"),
                    helperText: (0, u.default)("capturePngImgDesc"),
                    defaultValue: t.capturePng,
                    hotkeyKey: "capturePng",
                    onChange: this.hotkeyHandler,
                  }),
                  r.default.createElement(
                    a.FormGroup,
                    { label: (0, u.default)("launch"), helperText: l },
                    r.default.createElement(
                      "ul",
                      { className: "hotkey-list" },
                      r.default.createElement(
                        "li",
                        null,
                        r.default.createElement(
                          a.FormGroup,
                          { label: "Mac", inline: !0 },
                          r.default.createElement(a.InputGroup, {
                            value: "ctrl+shift+c",
                            disabled: !0,
                          })
                        )
                      ),
                      r.default.createElement(
                        "li",
                        null,
                        r.default.createElement(
                          a.FormGroup,
                          { label: "Windows", inline: !0 },
                          r.default.createElement(a.InputGroup, {
                            value: "ctrl+shift+a",
                            disabled: !0,
                          })
                        )
                      )
                    )
                  )
                ),
                r.default.createElement(
                  a.Card,
                  { className: "options-body" },
                  r.default.createElement(
                    "div",
                    { className: "option-group-title" },
                    (0, u.default)("donate")
                  ),
                  r.default.createElement(
                    "p",
                    null,
                    (0, u.default)("donateDesc")
                  ),
                  r.default.createElement(
                    "p",
                    null,
                    r.default.createElement(
                      "a",
                      { href: "/donate.html", target: "_blank" },
                      r.default.createElement("span", null, "Go Details")
                    )
                  )
                )
              );
            },
          },
        ]),
        t
      );
    })();
    t.default = b;
  },
  144: function (e, t, n) {
    "use strict";
    n(82);
    var r = u(n(0)),
      a = u(n(5)),
      o = u(n(143)),
      l = n(14);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    n(81),
      l.FocusStyleManager.onlyShowFocusOnTabs(),
      a.default.render(
        r.default.createElement(o.default, null),
        document.getElementById("root")
      );
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
