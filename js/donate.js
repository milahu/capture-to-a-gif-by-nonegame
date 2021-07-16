!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 105));
})({
  105: function (e, t, n) {
    "use strict";
    var r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n(9)),
      o = n(13);
    (0, o.sendAppView)("donate.html"),
      r.default.debug("this is donate.html"),
      document.querySelectorAll("#paypal a").forEach(function (e, t) {
        e.onclick = function () {
          r.default.debug("click paypal link", t),
            (0, o.sendEvent)(
              "EXTERNAL-LINK",
              "click",
              "paypal.com with ".concat(t)
            );
        };
      }),
      (document.getElementById("copy-payoneer-account").onclick = function () {
        var e = document.getElementById("payoneer-email");
        (e.value = "guofei_126@126.com"),
          e.select(),
          e.setSelectionRange(0, 99999),
          document.execCommand("copy");
        var t = document.querySelector(
          "#payoneer .pay-action > span.copied-msg"
        );
        (t.style.display = "inline"),
          setTimeout(function () {
            return (t.style.display = "none");
          }, 3e3);
      });
  },
  13: function (e, t, n) {
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
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(17));
    var o = r.default.getService("Capture to a Gif");
    t.cpaService = o;
    var a = o.getTracker("UA-136263860-1");
    (t.cpaTracker = a),
      chrome.storage.sync.get("noAnalysis", function (e) {
        var t = e.noAnalysis;
        o.getConfig().addCallback(function (e) {
          e.setTrackingPermitted(!t);
        });
      });
    var c = r.default.EventBuilder.builder().category("BUTTON").action("click");
    t.BUTTON_CLICK = c;
    var u = r.default.EventBuilder.builder()
      .category("OPTION")
      .action("change");
    t.OPTION_CHG = u;
    var i = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture gif");
    t.CAPTURE_GIF = i;
    var l = r.default.EventBuilder.builder()
      .category("CAPTURE")
      .action("capture png");
    t.CAPTURE_PNG = l;
    var d = r.default.EventBuilder.builder().category("EXTENSION");
    t.EXTENSION = d;
    var f = r.default.EventBuilder.builder().category("GENERATED_IMG");
    t.GENERATED_IMG = f;
    var s = r.default.EventBuilder.builder().category("CAMPAIGNS");
    t.ADS = s;
    var p = r.default.EventBuilder.builder()
      .category("CAMPAIGNS")
      .action("fetch-data");
    t.ADS_DATA = p;
  },
  17: function (e, t) {
    e.exports = analytics;
  },
  9: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = function () {},
      o = {
        log: r,
        debug: r,
        info: console.info,
        warn: console.warn,
        error: console.error,
      };
    t.default = o;
  },
});
