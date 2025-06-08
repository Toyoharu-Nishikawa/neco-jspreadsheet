function getDefaultExportFromCjs(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function commonjsRequire(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var dist$3 = { exports: {} }, jsuites$1 = { exports: {} }, jsuites = jsuites$1.exports, hasRequiredJsuites;
function requireJsuites() {
  return hasRequiredJsuites || (hasRequiredJsuites = 1, function(n, g) {
    (function(o, p) {
      n.exports = p();
    })(jsuites, function() {
      var o;
      return function() {
        var p = {
          /***/
          195: (
            /***/
            function(z) {
              (function(m, s) {
                z.exports = s();
              })(this, function() {
                return function(Me) {
                  function s(Ne, we) {
                    this.highOrder = Ne, this.lowOrder = we;
                  }
                  var w = [
                    new s(1779033703, 4089235720),
                    new s(3144134277, 2227873595),
                    new s(1013904242, 4271175723),
                    new s(2773480762, 1595750129),
                    new s(1359893119, 2917565137),
                    new s(2600822924, 725511199),
                    new s(528734635, 4215389547),
                    new s(1541459225, 327033209)
                  ], S = [
                    new s(1116352408, 3609767458),
                    new s(1899447441, 602891725),
                    new s(3049323471, 3964484399),
                    new s(3921009573, 2173295548),
                    new s(961987163, 4081628472),
                    new s(1508970993, 3053834265),
                    new s(2453635748, 2937671579),
                    new s(2870763221, 3664609560),
                    new s(3624381080, 2734883394),
                    new s(310598401, 1164996542),
                    new s(607225278, 1323610764),
                    new s(1426881987, 3590304994),
                    new s(1925078388, 4068182383),
                    new s(2162078206, 991336113),
                    new s(2614888103, 633803317),
                    new s(3248222580, 3479774868),
                    new s(3835390401, 2666613458),
                    new s(4022224774, 944711139),
                    new s(264347078, 2341262773),
                    new s(604807628, 2007800933),
                    new s(770255983, 1495990901),
                    new s(1249150122, 1856431235),
                    new s(1555081692, 3175218132),
                    new s(1996064986, 2198950837),
                    new s(2554220882, 3999719339),
                    new s(2821834349, 766784016),
                    new s(2952996808, 2566594879),
                    new s(3210313671, 3203337956),
                    new s(3336571891, 1034457026),
                    new s(3584528711, 2466948901),
                    new s(113926993, 3758326383),
                    new s(338241895, 168717936),
                    new s(666307205, 1188179964),
                    new s(773529912, 1546045734),
                    new s(1294757372, 1522805485),
                    new s(1396182291, 2643833823),
                    new s(1695183700, 2343527390),
                    new s(1986661051, 1014477480),
                    new s(2177026350, 1206759142),
                    new s(2456956037, 344077627),
                    new s(2730485921, 1290863460),
                    new s(2820302411, 3158454273),
                    new s(3259730800, 3505952657),
                    new s(3345764771, 106217008),
                    new s(3516065817, 3606008344),
                    new s(3600352804, 1432725776),
                    new s(4094571909, 1467031594),
                    new s(275423344, 851169720),
                    new s(430227734, 3100823752),
                    new s(506948616, 1363258195),
                    new s(659060556, 3750685593),
                    new s(883997877, 3785050280),
                    new s(958139571, 3318307427),
                    new s(1322822218, 3812723403),
                    new s(1537002063, 2003034995),
                    new s(1747873779, 3602036899),
                    new s(1955562222, 1575990012),
                    new s(2024104815, 1125592928),
                    new s(2227730452, 2716904306),
                    new s(2361852424, 442776044),
                    new s(2428436474, 593698344),
                    new s(2756734187, 3733110249),
                    new s(3204031479, 2999351573),
                    new s(3329325298, 3815920427),
                    new s(3391569614, 3928383900),
                    new s(3515267271, 566280711),
                    new s(3940187606, 3454069534),
                    new s(4118630271, 4000239992),
                    new s(116418474, 1914138554),
                    new s(174292421, 2731055270),
                    new s(289380356, 3203993006),
                    new s(460393269, 320620315),
                    new s(685471733, 587496836),
                    new s(852142971, 1086792851),
                    new s(1017036298, 365543100),
                    new s(1126000580, 2618297676),
                    new s(1288033470, 3409855158),
                    new s(1501505948, 4234509866),
                    new s(1607167915, 987167468),
                    new s(1816402316, 1246189591)
                  ], A = new Array(64), l, a, h, f, d, b, k, M, B, T, L, O, W = 8;
                  function P(Ne) {
                    return unescape(encodeURIComponent(Ne));
                  }
                  function ce(Ne) {
                    for (var we = [], Ie = (1 << W) - 1, Pe = Ne.length * W, Ue = 0; Ue < Pe; Ue += W)
                      we[Ue >> 5] |= (Ne.charCodeAt(Ue / W) & Ie) << 32 - W - Ue % 32;
                    return we;
                  }
                  function he(Ne) {
                    for (var we = "0123456789abcdef", Ie = "", Pe = Ne.length * 4, Ue, Ge = 0; Ge < Pe; Ge += 1)
                      Ue = Ne[Ge >> 2] >> (3 - Ge % 4) * 8, Ie += we.charAt(Ue >> 4 & 15) + we.charAt(Ue & 15);
                    return Ie;
                  }
                  function Z(Ne, we) {
                    var Ie, Pe, Ue, Ge;
                    return Ie = (Ne.lowOrder & 65535) + (we.lowOrder & 65535), Pe = (Ne.lowOrder >>> 16) + (we.lowOrder >>> 16) + (Ie >>> 16), Ue = (Pe & 65535) << 16 | Ie & 65535, Ie = (Ne.highOrder & 65535) + (we.highOrder & 65535) + (Pe >>> 16), Pe = (Ne.highOrder >>> 16) + (we.highOrder >>> 16) + (Ie >>> 16), Ge = (Pe & 65535) << 16 | Ie & 65535, new s(Ge, Ue);
                  }
                  function se(Ne, we, Ie, Pe) {
                    var Ue, Ge, lt, it;
                    return Ue = (Ne.lowOrder & 65535) + (we.lowOrder & 65535) + (Ie.lowOrder & 65535) + (Pe.lowOrder & 65535), Ge = (Ne.lowOrder >>> 16) + (we.lowOrder >>> 16) + (Ie.lowOrder >>> 16) + (Pe.lowOrder >>> 16) + (Ue >>> 16), lt = (Ge & 65535) << 16 | Ue & 65535, Ue = (Ne.highOrder & 65535) + (we.highOrder & 65535) + (Ie.highOrder & 65535) + (Pe.highOrder & 65535) + (Ge >>> 16), Ge = (Ne.highOrder >>> 16) + (we.highOrder >>> 16) + (Ie.highOrder >>> 16) + (Pe.highOrder >>> 16) + (Ue >>> 16), it = (Ge & 65535) << 16 | Ue & 65535, new s(it, lt);
                  }
                  function ge(Ne, we, Ie, Pe, Ue) {
                    var Ge, lt, it, ft;
                    return Ge = (Ne.lowOrder & 65535) + (we.lowOrder & 65535) + (Ie.lowOrder & 65535) + (Pe.lowOrder & 65535) + (Ue.lowOrder & 65535), lt = (Ne.lowOrder >>> 16) + (we.lowOrder >>> 16) + (Ie.lowOrder >>> 16) + (Pe.lowOrder >>> 16) + (Ue.lowOrder >>> 16) + (Ge >>> 16), it = (lt & 65535) << 16 | Ge & 65535, Ge = (Ne.highOrder & 65535) + (we.highOrder & 65535) + (Ie.highOrder & 65535) + (Pe.highOrder & 65535) + (Ue.highOrder & 65535) + (lt >>> 16), lt = (Ne.highOrder >>> 16) + (we.highOrder >>> 16) + (Ie.highOrder >>> 16) + (Pe.highOrder >>> 16) + (Ue.highOrder >>> 16) + (Ge >>> 16), ft = (lt & 65535) << 16 | Ge & 65535, new s(ft, it);
                  }
                  function de(Ne, we, Ie) {
                    return new s(
                      Ne.highOrder & we.highOrder ^ Ne.highOrder & Ie.highOrder ^ we.highOrder & Ie.highOrder,
                      Ne.lowOrder & we.lowOrder ^ Ne.lowOrder & Ie.lowOrder ^ we.lowOrder & Ie.lowOrder
                    );
                  }
                  function oe(Ne, we, Ie) {
                    return new s(
                      Ne.highOrder & we.highOrder ^ ~Ne.highOrder & Ie.highOrder,
                      Ne.lowOrder & we.lowOrder ^ ~Ne.lowOrder & Ie.lowOrder
                    );
                  }
                  function ve(Ne, we) {
                    return we <= 32 ? new s(
                      Ne.highOrder >>> we | Ne.lowOrder << 32 - we,
                      Ne.lowOrder >>> we | Ne.highOrder << 32 - we
                    ) : new s(
                      Ne.lowOrder >>> we | Ne.highOrder << 32 - we,
                      Ne.highOrder >>> we | Ne.lowOrder << 32 - we
                    );
                  }
                  function Be(Ne) {
                    var we = ve(Ne, 28), Ie = ve(Ne, 34), Pe = ve(Ne, 39);
                    return new s(
                      we.highOrder ^ Ie.highOrder ^ Pe.highOrder,
                      we.lowOrder ^ Ie.lowOrder ^ Pe.lowOrder
                    );
                  }
                  function Fe(Ne) {
                    var we = ve(Ne, 14), Ie = ve(Ne, 18), Pe = ve(Ne, 41);
                    return new s(
                      we.highOrder ^ Ie.highOrder ^ Pe.highOrder,
                      we.lowOrder ^ Ie.lowOrder ^ Pe.lowOrder
                    );
                  }
                  function De(Ne) {
                    var we = ve(Ne, 1), Ie = ve(Ne, 8), Pe = U(Ne, 7);
                    return new s(
                      we.highOrder ^ Ie.highOrder ^ Pe.highOrder,
                      we.lowOrder ^ Ie.lowOrder ^ Pe.lowOrder
                    );
                  }
                  function Ke(Ne) {
                    var we = ve(Ne, 19), Ie = ve(Ne, 61), Pe = U(Ne, 6);
                    return new s(
                      we.highOrder ^ Ie.highOrder ^ Pe.highOrder,
                      we.lowOrder ^ Ie.lowOrder ^ Pe.lowOrder
                    );
                  }
                  function U(Ne, we) {
                    return we <= 32 ? new s(
                      Ne.highOrder >>> we,
                      Ne.lowOrder >>> we | Ne.highOrder << 32 - we
                    ) : new s(
                      0,
                      Ne.highOrder << 32 - we
                    );
                  }
                  var Me = P(Me), We = Me.length * W;
                  Me = ce(Me), Me[We >> 5] |= 128 << 24 - We % 32, Me[(We + 128 >> 10 << 5) + 31] = We;
                  for (var B = 0; B < Me.length; B += 32) {
                    l = w[0], a = w[1], h = w[2], f = w[3], d = w[4], b = w[5], k = w[6], M = w[7];
                    for (var T = 0; T < 80; T++)
                      T < 16 ? A[T] = new s(Me[T * 2 + B], Me[T * 2 + B + 1]) : A[T] = se(Ke(A[T - 2]), A[T - 7], De(A[T - 15]), A[T - 16]), L = ge(M, Fe(d), oe(d, b, k), S[T], A[T]), O = Z(Be(l), de(l, a, h)), M = k, k = b, b = d, d = Z(f, L), f = h, h = a, a = l, l = Z(L, O);
                    w[0] = Z(l, w[0]), w[1] = Z(a, w[1]), w[2] = Z(h, w[2]), w[3] = Z(f, w[3]), w[4] = Z(d, w[4]), w[5] = Z(b, w[5]), w[6] = Z(k, w[6]), w[7] = Z(M, w[7]);
                  }
                  for (var ot = [], B = 0; B < w.length; B++)
                    ot.push(w[B].highOrder), ot.push(w[B].lowOrder);
                  return he(ot);
                };
              });
            }
          )
          /******/
        }, C = {};
        function _(z) {
          var m = C[z];
          if (m !== void 0)
            return m.exports;
          var s = C[z] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return p[z].call(s.exports, s, s.exports, _), s.exports;
        }
        (function() {
          _.n = function(z) {
            var m = z && z.__esModule ? (
              /******/
              function() {
                return z.default;
              }
            ) : (
              /******/
              function() {
                return z;
              }
            );
            return _.d(m, { a: m }), m;
          };
        })(), function() {
          _.d = function(z, m) {
            for (var s in m)
              _.o(m, s) && !_.o(z, s) && Object.defineProperty(z, s, { enumerable: !0, get: m[s] });
          };
        }(), function() {
          _.o = function(z, m) {
            return Object.prototype.hasOwnProperty.call(z, m);
          };
        }();
        var G = {};
        (function() {
          _.d(G, {
            default: function() {
              return (
                /* binding */
                Ot
              );
            }
          });
          var z = function(E) {
            document.dictionary || (document.dictionary = {});
            var I = null, u = Object.keys(E);
            for (I = 0; I < u.length; I++)
              document.dictionary[u[I]] = E[u[I]];
          }, m = function(E) {
            return typeof document < "u" && document.dictionary && document.dictionary[E] || E;
          }, s = { setDictionary: z, translate: m }, S = function(E, I) {
            if (I === !0)
              window.jSuitesStateControl = window.jSuitesStateControl.filter(function(r) {
                return r !== null;
              }), setTimeout(function() {
                window.jSuitesStateControl.push(E);
              }, 0);
            else {
              var u = window.jSuitesStateControl.indexOf(E);
              u >= 0 && window.jSuitesStateControl.splice(u, 1);
            }
          }, A = {};
          A.two = function(E) {
            return E = "" + E, E.length == 1 && (E = "0" + E), E;
          }, A.focus = function(E) {
            if (E.innerText.length) {
              var I = document.createRange(), u = window.getSelection(), r = E.childNodes[E.childNodes.length - 1];
              I.setStart(r, r.length), I.collapse(!0), u.removeAllRanges(), u.addRange(I), E.scrollLeft = E.scrollWidth;
            }
          }, A.isNumeric = function(E) {
            return typeof E == "string" && (E = E.trim()), !isNaN(E) && E !== null && E !== "";
          }, A.guid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(E) {
              var I = Math.random() * 16 | 0, u = E == "x" ? I : I & 3 | 8;
              return u.toString(16);
            });
          }, A.getNode = function() {
            var E = document.getSelection().anchorNode;
            return E ? E.nodeType == 3 ? E.parentNode : E : null;
          }, A.hash = function(E) {
            var I = 0, u, r;
            if (E.length === 0)
              return I;
            for (u = 0; u < E.length; u++)
              r = E.charCodeAt(u), r > 32 && (I = (I << 5) - I + r, I |= 0);
            return I;
          }, A.randomColor = function(E) {
            var I = -0.25, u = ("#" + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, "");
            u.length < 6 && (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]);
            var r = [], Y, re;
            for (re = 0; re < 3; re++)
              Y = parseInt(u.substr(re * 2, 2), 16), Y = Math.round(Math.min(Math.max(0, Y + Y * I), 255)).toString(16), r.push(("00" + Y).substr(Y.length));
            return E == !0 ? "#" + A.two(r[0].toString(16)) + A.two(r[1].toString(16)) + A.two(r[2].toString(16)) : r;
          }, A.getWindowWidth = function() {
            var E = window, I = document, u = I.documentElement, r = I.getElementsByTagName("body")[0], Y = E.innerWidth || u.clientWidth || r.clientWidth;
            return Y;
          }, A.getWindowHeight = function() {
            var E = window, I = document, u = I.documentElement, r = I.getElementsByTagName("body")[0], Y = E.innerHeight || u.clientHeight || r.clientHeight;
            return Y;
          }, A.getPosition = function(E) {
            if (E.changedTouches && E.changedTouches[0])
              var I = E.changedTouches[0].pageX, u = E.changedTouches[0].pageY;
            else
              var I = window.Event ? E.pageX : E.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft), u = window.Event ? E.pageY : E.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
            return [I, u];
          }, A.click = function(E) {
            if (E.click)
              E.click();
            else {
              var I = new MouseEvent("click", {
                bubbles: !0,
                cancelable: !0,
                view: window
              });
              E.dispatchEvent(I);
            }
          }, A.findElement = function(E, I) {
            var u = !1;
            function r(Y) {
              Y && !u && (typeof I == "function" ? u = I(Y) : typeof I == "string" && Y.classList && Y.classList.contains(I) && (u = Y)), Y.parentNode && !u && r(Y.parentNode);
            }
            return r(E), u;
          };
          var l = A;
          function a(E, I, u) {
            if (E = E.split("."), E.length) {
              let r = this, Y = null;
              for (; E.length > 1; )
                if (Y = E.shift(), r.hasOwnProperty(Y))
                  r = r[Y];
                else {
                  if (typeof I > "u")
                    return;
                  r[Y] = {}, r = r[Y];
                }
              if (Y = E.shift(), typeof I < "u")
                return u === !0 ? delete r[Y] : r[Y] = I, !0;
              if (r)
                return r[Y];
            }
            return !1;
          }
          function h(E, I) {
            var u = {};
            u.options = {};
            var r = {
              pointer: null,
              direction: null,
              ondragstart: null,
              ondragend: null,
              ondrop: null
            }, Y = null;
            for (var re in r)
              I && I.hasOwnProperty(re) ? u.options[re] = I[re] : u.options[re] = r[re];
            E.classList.add("jsorting"), E.addEventListener("dragstart", function(N) {
              let V = N.target;
              if (V.nodeType === 3)
                if (V.parentNode.getAttribute("draggable") === "true")
                  V = V.parentNode;
                else {
                  N.preventDefault(), N.stopPropagation();
                  return;
                }
              if (V.getAttribute("draggable") === "true") {
                let K = Array.prototype.indexOf.call(V.parentNode.children, V);
                Y = {
                  element: V,
                  o: K,
                  d: K
                }, V.style.opacity = "0.25", typeof u.options.ondragstart == "function" && u.options.ondragstart(E, V, N), N.dataTransfer.setDragImage(V, 0, 0);
              }
            }), E.addEventListener("dragover", function(N) {
              if (N.preventDefault(), Y && ne(N.target) && N.target.getAttribute("draggable") == "true" && Y.element != N.target) {
                if (u.options.direction)
                  var V = N.target.clientWidth / 2 > N.offsetX;
                else
                  var V = N.target.clientHeight / 2 > N.offsetY;
                V ? N.target.parentNode.insertBefore(Y.element, N.target) : N.target.parentNode.insertBefore(Y.element, N.target.nextSibling), Y.d = Array.prototype.indexOf.call(N.target.parentNode.children, Y.element);
              }
            }), E.addEventListener("dragleave", function(N) {
              N.preventDefault();
            }), E.addEventListener("dragend", function(N) {
              N.preventDefault(), Y && (typeof u.options.ondragend == "function" && u.options.ondragend(E, Y.element, N), Y.o < Y.d ? N.target.parentNode.insertBefore(Y.element, N.target.parentNode.children[Y.o]) : N.target.parentNode.insertBefore(Y.element, N.target.parentNode.children[Y.o].nextSibling), Y.element.style.opacity = "", Y = null);
            }), E.addEventListener("drop", function(N) {
              N.preventDefault(), Y && (Y.o !== Y.d && typeof u.options.ondrop == "function" && u.options.ondrop(E, Y.o, Y.d, Y.element, N.target, N), Y.element.style.opacity = "", Y = null);
            });
            for (var ne = function(N) {
              var V = !1;
              function K(ae) {
                ae.className && ae.classList.contains("jsorting") && (V = !0), V || K(ae.parentNode);
              }
              return K(N), V;
            }, H = 0; H < E.children.length; H++)
              E.children[H].hasAttribute("draggable") || E.children[H].setAttribute("draggable", "true");
            return E.val = function() {
              for (var N = null, V = [], K = 0; K < E.children.length; K++)
                (N = E.children[K].getAttribute("data-id")) && V.push(N);
              return V;
            }, E;
          }
          function f(E, I) {
            var u = {};
            (!I.loadUp || typeof I.loadUp != "function") && (I.loadUp = function() {
              return !1;
            }), (!I.loadDown || typeof I.loadDown != "function") && (I.loadDown = function() {
              return !1;
            }), I.timer || (I.timer = 100);
            var r = null, Y = function(re) {
              if (r == null) {
                var ne = !1, H = E.scrollTop;
                E.scrollTop + E.clientHeight * 2 >= E.scrollHeight ? I.loadDown() && (H == E.scrollTop && (E.scrollTop = E.scrollTop - E.clientHeight), ne = !0) : E.scrollTop <= E.clientHeight && I.loadUp() && (H == E.scrollTop && (E.scrollTop = E.scrollTop + E.clientHeight), ne = !0), r = setTimeout(function() {
                  r = null;
                }, I.timer), ne && typeof I.onupdate == "function" && I.onupdate();
              }
            };
            return E.onscroll = function(re) {
              Y();
            }, E.onwheel = function(re) {
              Y();
            }, u;
          }
          function d() {
            var E = function(I, u) {
              if (Array.isArray(I)) {
                var r = {
                  instance: [],
                  complete: u
                };
                if (I.length > 0)
                  for (var Y = 0; Y < I.length; Y++)
                    I[Y].multiple = r, r.instance.push(E(I[Y]));
                return r;
              }
              if (I.data || (I.data = {}), I.type && (I.method = I.type), I.method || (I.method = "GET"), I.dataType || (I.dataType = "json"), I.data) {
                var re = function(ae, xe) {
                  var fe = [];
                  if (ae) {
                    var be = Object.keys(ae);
                    if (be.length)
                      for (var Ae = 0; Ae < be.length; Ae++) {
                        if (xe)
                          var Se = xe + "[" + be[Ae] + "]";
                        else
                          var Se = be[Ae];
                        if (ae[Se] instanceof FileList)
                          fe[Se] = ae[be[Ae]];
                        else if (ae[be[Ae]] === null || ae[be[Ae]] === void 0)
                          fe[Se] = "";
                        else if (typeof ae[be[Ae]] == "object")
                          for (var Oe = re(ae[be[Ae]], Se), Ze = Object.keys(Oe), et = 0; et < Ze.length; et++)
                            fe[Ze[et]] = Oe[Ze[et]];
                        else
                          fe[Se] = ae[be[Ae]];
                      }
                  }
                  return fe;
                }, ne = re(I.data), H = Object.keys(ne);
                if (I.method == "GET") {
                  if (H.length) {
                    for (var N = [], Y = 0; Y < H.length; Y++)
                      N.push(H[Y] + "=" + encodeURIComponent(ne[H[Y]]));
                    I.url.indexOf("?") < 0 && (I.url += "?"), I.url += N.join("&");
                  }
                } else
                  for (var N = new FormData(), Y = 0; Y < H.length; Y++)
                    if (ne[H[Y]] instanceof FileList) {
                      if (ne[H[Y]].length)
                        for (var V = 0; V < ne[H[Y]].length; V++)
                          N.append(H[Y], ne[H[Y]][V], ne[H[Y]][V].name);
                    } else
                      N.append(H[Y], ne[H[Y]]);
              }
              var K = new XMLHttpRequest();
              return K.open(I.method, I.url, !0), I.requestedWith ? K.setRequestHeader("X-Requested-With", I.requestedWith) : I.requestedWith !== !1 && K.setRequestHeader("X-Requested-With", "XMLHttpRequest"), I.contentType && K.setRequestHeader("Content-Type", I.contentType), I.method === "POST" ? K.setRequestHeader("Accept", "application/json") : I.dataType === "blob" ? K.responseType = "blob" : I.contentType || (I.dataType === "json" ? K.setRequestHeader("Content-Type", "text/json") : I.dataType === "html" && K.setRequestHeader("Content-Type", "text/html")), I.cache !== !0 && (K.setRequestHeader("pragma", "no-cache"), K.setRequestHeader("cache-control", "no-cache")), I.withCredentials === !0 && (K.withCredentials = !0), typeof I.beforeSend == "function" && I.beforeSend(K), typeof E.beforeSend == "function" && E.beforeSend(K), document.ajax && typeof document.ajax.beforeSend == "function" && document.ajax.beforeSend(K), K.onerror = function() {
                I.error && typeof I.error == "function" && I.error({
                  message: "Network error: Unable to reach the server.",
                  status: 0
                });
              }, K.ontimeout = function() {
                I.error && typeof I.error == "function" && I.error({
                  message: "Request timed out after " + K.timeout + "ms.",
                  status: 0
                });
              }, K.onload = function() {
                if (K.status >= 200 && K.status < 300)
                  if (I.dataType === "json")
                    try {
                      var ae = JSON.parse(K.responseText);
                      I.success && typeof I.success == "function" && I.success(ae);
                    } catch (fe) {
                      I.error && typeof I.error == "function" && I.error(fe, ae);
                    }
                  else {
                    if (I.dataType === "blob")
                      var ae = K.response;
                    else
                      var ae = K.responseText;
                    I.success && typeof I.success == "function" && I.success(ae);
                  }
                else
                  I.error && typeof I.error == "function" && I.error(K.responseText, K.status);
                if (E.queue && E.queue.length > 0 && E.send(E.queue.shift()), E.requests && E.requests.length) {
                  var xe = E.requests.indexOf(K);
                  if (E.requests.splice(xe, 1), E.requests.length || I.complete && typeof I.complete == "function" && I.complete(ae), I.group && E.oncomplete && typeof E.oncomplete[I.group] == "function" && (E.pending(I.group) || (E.oncomplete[I.group](), E.oncomplete[I.group] = null)), I.multiple && I.multiple.instance) {
                    var xe = I.multiple.instance.indexOf(K);
                    I.multiple.instance.splice(xe, 1), I.multiple.instance.length || I.multiple.complete && typeof I.multiple.complete == "function" && I.multiple.complete(ae);
                  }
                }
              }, K.options = I, K.data = N, I.queue === !0 && E.requests.length > 0 ? E.queue.push(K) : E.send(K), K;
            };
            return E.send = function(I) {
              I.data ? Array.isArray(I.data) ? I.send(I.data.join("&")) : I.send(I.data) : I.send(), E.requests.push(I);
            }, E.exists = function(I, u) {
              var r = new XMLHttpRequest();
              r.open("HEAD", I, !1), r.send(), r.status && u(r.status);
            }, E.pending = function(I) {
              var u = 0, r = E.requests;
              if (r && r.length)
                for (var Y = 0; Y < r.length; Y++)
                  (!I || I == r[Y].options.group) && u++;
              return u;
            }, E.oncomplete = {}, E.requests = [], E.queue = [], E;
          }
          var b = d();
          function k() {
            const E = {
              loading: {}
            };
            return E.loading.show = function(I) {
              E.loading.element || (E.loading.element = document.createElement("div"), E.loading.element.className = "jloading"), document.body.appendChild(E.loading.element), I > 0 && setTimeout(function() {
                E.loading.hide();
              }, I * 1e3);
            }, E.loading.hide = function() {
              E.loading.element && E.loading.element.parentNode && document.body.removeChild(E.loading.element);
            }, E.slideLeft = function(I, u, r) {
              u == !0 ? (I.classList.add("jslide-left-in"), setTimeout(function() {
                I.classList.remove("jslide-left-in"), typeof r == "function" && r();
              }, 400)) : (I.classList.add("jslide-left-out"), setTimeout(function() {
                I.classList.remove("jslide-left-out"), typeof r == "function" && r();
              }, 400));
            }, E.slideRight = function(I, u, r) {
              u === !0 ? (I.classList.add("jslide-right-in"), setTimeout(function() {
                I.classList.remove("jslide-right-in"), typeof r == "function" && r();
              }, 400)) : (I.classList.add("jslide-right-out"), setTimeout(function() {
                I.classList.remove("jslide-right-out"), typeof r == "function" && r();
              }, 400));
            }, E.slideTop = function(I, u, r) {
              u === !0 ? (I.classList.add("jslide-top-in"), setTimeout(function() {
                I.classList.remove("jslide-top-in"), typeof r == "function" && r();
              }, 400)) : (I.classList.add("jslide-top-out"), setTimeout(function() {
                I.classList.remove("jslide-top-out"), typeof r == "function" && r();
              }, 400));
            }, E.slideBottom = function(I, u, r) {
              u === !0 ? (I.classList.add("jslide-bottom-in"), setTimeout(function() {
                I.classList.remove("jslide-bottom-in"), typeof r == "function" && r();
              }, 400)) : (I.classList.add("jslide-bottom-out"), setTimeout(function() {
                I.classList.remove("jslide-bottom-out"), typeof r == "function" && r();
              }, 100));
            }, E.fadeIn = function(I, u) {
              I.style.display = "", I.classList.add("jfade-in"), setTimeout(function() {
                I.classList.remove("jfade-in"), typeof u == "function" && u();
              }, 2e3);
            }, E.fadeOut = function(I, u) {
              I.classList.add("jfade-out"), setTimeout(function() {
                I.style.display = "none", I.classList.remove("jfade-out"), typeof u == "function" && u();
              }, 1e3);
            }, E;
          }
          var M = k();
          function B() {
            var E = {};
            E.now = function(ne, H) {
              var N = null, V = null, K = null, ae = null, xe = null, fe = null;
              return Array.isArray(ne) ? (N = ne[0], V = ne[1], K = ne[2], ae = ne[3], xe = ne[4], fe = ne[5]) : (ne || (ne = /* @__PURE__ */ new Date()), N = ne.getFullYear(), V = ne.getMonth() + 1, K = ne.getDate(), ae = ne.getHours(), xe = ne.getMinutes(), fe = ne.getSeconds()), H == !0 ? l.two(N) + "-" + l.two(V) + "-" + l.two(K) : l.two(N) + "-" + l.two(V) + "-" + l.two(K) + " " + l.two(ae) + ":" + l.two(xe) + ":" + l.two(fe);
            }, E.toArray = function(ne) {
              var N = ne.split(ne.indexOf("T") !== -1 ? "T" : " "), H = N[1], N = N[0].split("-"), V = parseInt(N[0]), K = parseInt(N[1]), ae = parseInt(N[2]), xe = 0, fe = 0;
              return H && (H = H.split(":"), xe = parseInt(H[0]), fe = parseInt(H[1])), [V, K, ae, xe, fe, 0];
            };
            var I = Date.UTC(1900, 0, 0), u = Date.UTC(1900, 1, 29), r = 864e5;
            E.dateToNum = function(ne) {
              typeof ne == "string" && (ne = /* @__PURE__ */ new Date(ne + "  GMT+0"));
              var H = ne.getTime();
              return H >= u && (H += r), H -= I, H / r;
            }, E.numToDate = function(ne) {
              var H = I + ne * r;
              H >= u && (H -= r);
              const N = new Date(H);
              var V = [
                N.getUTCFullYear(),
                N.getUTCMonth() + 1,
                N.getUTCDate(),
                N.getUTCHours(),
                N.getUTCMinutes(),
                N.getUTCSeconds()
              ];
              return E.now(V);
            };
            let Y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], re = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return Object.defineProperty(E, "weekdays", {
              get: function() {
                return Y.map(function(ne) {
                  return s.translate(ne);
                });
              }
            }), Object.defineProperty(E, "weekdaysShort", {
              get: function() {
                return Y.map(function(ne) {
                  return s.translate(ne).substring(0, 3);
                });
              }
            }), Object.defineProperty(E, "months", {
              get: function() {
                return re.map(function(ne) {
                  return s.translate(ne);
                });
              }
            }), Object.defineProperty(E, "monthsShort", {
              get: function() {
                return re.map(function(ne) {
                  return s.translate(ne).substring(0, 3);
                });
              }
            }), E;
          }
          var T = B();
          function L() {
            var E = {
              // Text
              text: ["@"],
              // Currency tokens
              currency: ["#(.{1})##0?(.{1}0+)?( ?;(.*)?)?", "#"],
              // Scientific
              scientific: ["0{1}(.{1}0+)?E{1}\\+0+"],
              // Percentage
              percentage: ["0{1}(.{1}0+)?%"],
              // Number
              numeric: ["0{1}(.{1}0+)?"],
              // Data tokens
              datetime: ["YYYY", "YYY", "YY", "MMMMM", "MMMM", "MMM", "MM", "DDDDD", "DDDD", "DDD", "DD", "DY", "DAY", "WD", "D", "Q", "MONTH", "MON", "HH24", "HH12", "HH", "\\[H\\]", "H", "AM/PM", "MI", "SS", "MS", "Y", "M"],
              // Other
              general: ["A", "0", "[0-9a-zA-Z$]+", "."]
            }, I = function() {
              if (this.mask.toLowerCase().indexOf("[h]") !== -1) {
                var j = 0;
                this.date[4] && (j = parseFloat(this.date[4] / 60));
                var R = parseInt(this.date[3]) + j;
                R /= 24;
              } else !(this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4]) ? R = l.two(this.date[3]) + ":" + l.two(this.date[4]) + ":" + l.two(this.date[5]) : (this.date[0] && this.date[1] && !this.date[2] && (this.date[2] = 1), R = l.two(this.date[0]) + "-" + l.two(this.date[1]) + "-" + l.two(this.date[2]), (this.date[3] || this.date[4] || this.date[5]) && (R += " " + l.two(this.date[3]) + ":" + l.two(this.date[4]) + ":" + l.two(this.date[5])));
              return R;
            }, u = function() {
              var j = "";
              if (!(this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4])) {
                if (this.mask.toLowerCase().indexOf("[h]") !== -1)
                  j = parseInt(this.date[3]);
                else {
                  let J = parseInt(this.date[3]);
                  J < 13 && this.values.indexOf("PM") !== -1 ? j = (J + 12) % 24 : j = J % 24;
                }
                this.date[4] && (j += parseFloat(this.date[4] / 60)), this.date[5] && (j += parseFloat(this.date[5] / 3600)), j /= 24;
              } else if (this.date[0] || this.date[1] || this.date[2] || this.date[3] || this.date[4] || this.date[5]) {
                this.date[0] && this.date[1] && !this.date[2] && (this.date[2] = 1);
                var R = T.now(this.date);
                j = T.dateToNum(R);
              }
              return isNaN(j) && (j = ""), j;
            }, r = function(j) {
              return j === null || j === "" || j === void 0;
            }, Y = function(j) {
              var R = ("" + j)[0];
              return R == "=";
            }, re = function(j) {
              return j === "currency" || j === "percentage" || j === "scientific" || j === "numeric";
            }, ne = function(j) {
              if (j && Number(j) == j)
                return ".";
              if (this.options.decimal)
                return this.options.decimal;
              if (this.locale) {
                var R = Intl.NumberFormat(this.locale).format(1.1);
                return this.options.decimal = R[1];
              } else {
                j || (j = this.mask);
                var J = new RegExp("0{1}(.{1})0+", "ig"), R = J.exec(j);
                if (R && R[1] && R[1].length == 1)
                  return this.options.decimal = R[1], R[1];
                var J = new RegExp("#{1}(.{1})#+", "ig"), R = J.exec(j);
                R && R[1] && R[1].length == 1 ? R[1] === "," ? this.options.decimal = "." : this.options.decimal = "," : this.options.decimal = "1.1".toLocaleString().substring(1, 2);
              }
              return this.options.decimal ? this.options.decimal : null;
            }, H = function(j, R) {
              if (j == "")
                return "";
              R || (R = ne.call(this)), j = ("" + j).split(R);
              var J = j[0].match(/[-]+/g);
              if (J && J.length ? J = !0 : J = !1, j[0] = j[0].match(/[0-9]+/g), j[0] ? (J && j[0].unshift("-"), j[0] = j[0].join("")) : J && (j[0] = "-"), j[0] || j[1])
                j[1] !== void 0 && (j[1] = j[1].match(/[0-9]+/g), j[1] ? j[1] = j[1].join("") : j[1] = "");
              else
                return "";
              return j;
            }, N = function(j, R) {
              if (j === "")
                return "";
              var J = ne.call(this), ue = this.options;
              if (j = H.call(this, j), j === "")
                return "";
              var Q = null;
              if (j[0] && (ue.style === "percent" ? Q = parseFloat(j[0]) / 100 : Q = parseFloat(j[0] + ".1")), (j[0] === "-" || j[0] === "-00") && !j[1] && R && R.inputType == "deleteContentBackward")
                return "";
              var pe = new Intl.NumberFormat(this.locale, ue).format(Q);
              if (pe = pe.split(J), ue.style === "percent" && pe[0].indexOf("%") !== -1 && (pe[0] = pe[0].replace("%", ""), pe[2] = "%"), typeof pe[1] < "u") {
                var je = pe[1].replace(/[0-9]*/g, "");
                je && (pe[2] = je);
              }
              return j[1] !== void 0 ? pe[1] = J + j[1] : pe[1] = "", pe.join("");
            }, V = function(j, R) {
              var J = xe.call(j);
              if (J) {
                var ue = N.call(this, J, R), Q = ue.length - J.length, pe = ae.call(j) + Q;
                xe.call(j, ue, pe, !0);
              }
            }, K = function(j) {
              var R = H.call(this, j);
              return R ? (R[0] === "-" && (R[0] = "-0"), parseFloat(R.join("."))) : null;
            }, ae = function(j, R) {
              if (j === void 0)
                if (this.tagName == "DIV") {
                  var J = 0, ue = window.getSelection();
                  if (ue && ue.rangeCount !== 0) {
                    var Q = ue.getRangeAt(0), pe = Q.cloneRange();
                    pe.selectNodeContents(this), pe.setEnd(Q.endContainer, Q.endOffset), J = pe.toString().length;
                  }
                  return J;
                } else
                  return this.selectionStart;
              else {
                var je = xe.call(this);
                if (R) {
                  for (var pe = null, Te = 0; Te < je.length; Te++)
                    (je[Te].match(/[\-0-9]/g) || je[Te] === "." || je[Te] === ",") && (pe = Te);
                  pe === null && (pe = je.indexOf(" ")), j >= pe && (j = pe + 1);
                }
                if (j > je.length && (j = je.length), j)
                  if (this.tagName == "DIV") {
                    var ue = window.getSelection(), Q = document.createRange();
                    this.childNodes[0] && (Q.setStart(this.childNodes[0], j), ue.removeAllRanges(), ue.addRange(Q));
                  } else
                    this.selectionStart = j, this.selectionEnd = j;
              }
            }, xe = function(j, R, J) {
              if (this.tagName == "DIV")
                if (j === void 0) {
                  var j = this.innerText;
                  return this.value && this.value.length > j.length && (j = this.value), j;
                } else
                  this.innerText !== j && (this.innerText = j, R && ae.call(this, R, J));
              else {
                if (j === void 0)
                  return this.value;
                this.value !== j && (this.value = j, R && ae.call(this, R, J));
              }
            }, fe = T.weekdays, be = T.weekdaysShort, Ae = T.months, Se = T.monthsShort, Oe = {
              YEAR: function(j, R) {
                var J = "" + (/* @__PURE__ */ new Date()).getFullYear();
                if (typeof this.values[this.index] > "u" && (this.values[this.index] = ""), parseInt(j) >= 0 && parseInt(j) <= 10 && this.values[this.index].length < R && (this.values[this.index] += j), this.values[this.index].length == R) {
                  if (R == 2)
                    var J = J.substr(0, 2) + this.values[this.index];
                  else if (R == 3)
                    var J = J.substr(0, 1) + this.values[this.index];
                  else if (R == 4)
                    var J = this.values[this.index];
                  this.date[0] = J, this.index++;
                }
              },
              YYYY: function(j) {
                Oe.YEAR.call(this, j, 4);
              },
              YYY: function(j) {
                Oe.YEAR.call(this, j, 3);
              },
              YY: function(j) {
                Oe.YEAR.call(this, j, 2);
              },
              FIND: function(j, R) {
                if (r(this.values[this.index]) && (this.values[this.index] = ""), this.event && this.event.inputType && this.event.inputType.indexOf("delete") > -1) {
                  this.values[this.index] += j;
                  return;
                }
                for (var J = 0, ue = 0, Q = (this.values[this.index] + j).toLowerCase(), pe = 0; pe < R.length; pe++)
                  R[pe].toLowerCase().indexOf(Q) == 0 && (J = pe, ue++);
                if (ue > 1)
                  this.values[this.index] += j;
                else if (ue == 1) {
                  var je = R[J].length - this.values[this.index].length - 1;
                  return this.position += je, this.values[this.index] = R[J], this.index++, J;
                }
              },
              MMM: function(j) {
                var R = Oe.FIND.call(this, j, Se);
                R !== void 0 && (this.date[1] = R + 1);
              },
              MON: function(j) {
                Oe.MMM.call(this, j);
              },
              MMMM: function(j) {
                var R = Oe.FIND.call(this, j, Ae);
                R !== void 0 && (this.date[1] = R + 1);
              },
              MONTH: function(j) {
                Oe.MMMM.call(this, j);
              },
              MMMMM: function(j) {
                r(this.values[this.index]) && (this.values[this.index] = "");
                for (var R = (this.values[this.index] + j).toLowerCase(), J = 0; J < Ae.length; J++)
                  if (Ae[J][0].toLowerCase().indexOf(R) == 0) {
                    this.values[this.index] = Ae[J][0], this.date[1] = J + 1, this.index++;
                    break;
                  }
              },
              MM: function(j) {
                r(this.values[this.index]) ? parseInt(j) > 1 && parseInt(j) < 10 ? (this.date[1] = this.values[this.index] = "0" + j, this.index++) : parseInt(j) < 2 && (this.values[this.index] = j) : this.values[this.index] == 1 && parseInt(j) < 3 ? (this.date[1] = this.values[this.index] += j, this.index++) : this.values[this.index] == 0 && parseInt(j) > 0 && parseInt(j) < 10 && (this.date[1] = this.values[this.index] += j, this.index++);
              },
              M: function(j) {
                var R = !1;
                if (parseInt(j) >= 0 && parseInt(j) < 10)
                  if (r(this.values[this.index]))
                    this.values[this.index] = j, j > 1 && (this.date[1] = this.values[this.index], this.index++);
                  else if (this.values[this.index] == 1 && parseInt(j) < 3)
                    this.date[1] = this.values[this.index] += j, this.index++;
                  else if (this.values[this.index] == 0 && parseInt(j) > 0)
                    this.date[1] = this.values[this.index] += j, this.index++;
                  else
                    var R = !0;
                else
                  var R = !0;
                if (R == !0) {
                  var J = parseInt(this.values[this.index]);
                  J > 0 && J < 12 && (this.date[1] = this.values[this.index], this.index++, this.position--);
                }
              },
              D: function(j) {
                var R = !1;
                if (parseInt(j) >= 0 && parseInt(j) < 10)
                  if (r(this.values[this.index]))
                    this.values[this.index] = j, parseInt(j) > 3 && (this.date[2] = this.values[this.index], this.index++);
                  else if (this.values[this.index] == 3 && parseInt(j) < 2)
                    this.date[2] = this.values[this.index] += j, this.index++;
                  else if (this.values[this.index] == 1 || this.values[this.index] == 2)
                    this.date[2] = this.values[this.index] += j, this.index++;
                  else if (this.values[this.index] == 0 && parseInt(j) > 0)
                    this.date[2] = this.values[this.index] += j, this.index++;
                  else
                    var R = !0;
                else
                  var R = !0;
                if (R == !0) {
                  var J = parseInt(this.values[this.index]);
                  J > 0 && J < 32 && (this.date[2] = this.values[this.index], this.index++, this.position--);
                }
              },
              DD: function(j) {
                r(this.values[this.index]) ? parseInt(j) > 3 && parseInt(j) < 10 ? (this.date[2] = this.values[this.index] = "0" + j, this.index++) : parseInt(j) < 10 && (this.values[this.index] = j) : this.values[this.index] == 3 && parseInt(j) < 2 ? (this.date[2] = this.values[this.index] += j, this.index++) : (this.values[this.index] == 1 || this.values[this.index] == 2) && parseInt(j) < 10 ? (this.date[2] = this.values[this.index] += j, this.index++) : this.values[this.index] == 0 && parseInt(j) > 0 && parseInt(j) < 10 && (this.date[2] = this.values[this.index] += j, this.index++);
              },
              DDD: function(j) {
                Oe.FIND.call(this, j, be);
              },
              DY: function(j) {
                Oe.DDD.call(this, j);
              },
              DDDD: function(j) {
                Oe.FIND.call(this, j, fe);
              },
              DAY: function(j) {
                Oe.DDDD.call(this, j);
              },
              HH12: function(j, R) {
                var J = !1;
                if (parseInt(j) >= 0 && parseInt(j) < 10)
                  if (r(this.values[this.index]))
                    parseInt(j) > 1 && parseInt(j) < 10 ? (R && (j = 0 + j), this.date[3] = this.values[this.index] = j, this.index++) : parseInt(j) < 10 && (this.values[this.index] = j);
                  else if (this.values[this.index] == 1 && parseInt(j) < 3)
                    this.date[3] = this.values[this.index] += j, this.index++;
                  else if (this.values[this.index] < 1 && parseInt(j) < 10)
                    this.date[3] = this.values[this.index] += j, this.index++;
                  else
                    var J = !0;
                else
                  var J = !0;
                if (J == !0) {
                  var ue = parseInt(this.values[this.index]);
                  ue >= 0 && ue <= 12 && (this.date[3] = this.values[this.index], this.index++, this.position--);
                }
              },
              HH24: function(j, R) {
                var J = !1;
                if (parseInt(j) >= 0 && parseInt(j) < 10)
                  if (this.values[this.index] == null || this.values[this.index] == "")
                    parseInt(j) > 2 && parseInt(j) < 10 ? (R && (j = 0 + j), this.date[3] = this.values[this.index] = j, this.index++) : parseInt(j) < 10 && (this.values[this.index] = j);
                  else if (this.values[this.index] == 2 && parseInt(j) < 4)
                    !R && this.values[this.index] === "0" && (this.values[this.index] = ""), this.date[3] = this.values[this.index] += j, this.index++;
                  else if (this.values[this.index] < 2 && parseInt(j) < 10)
                    !R && this.values[this.index] === "0" && (this.values[this.index] = ""), this.date[3] = this.values[this.index] += j, this.index++;
                  else
                    var J = !0;
                else
                  var J = !0;
                if (J == !0) {
                  var ue = parseInt(this.values[this.index]);
                  ue >= 0 && ue < 24 && (this.date[3] = this.values[this.index], this.index++, this.position--);
                }
              },
              HH: function(j) {
                Oe.HH24.call(this, j, 1);
              },
              H: function(j) {
                Oe.HH24.call(this, j, 0);
              },
              "\\[H\\]": function(j) {
                this.values[this.index] == null && (this.values[this.index] = ""), j.match(/[0-9]/g) ? this.date[3] = this.values[this.index] += j : this.values[this.index].match(/[0-9]/g) && (this.date[3] = this.values[this.index], this.index++, this.position--);
              },
              N60: function(j, R) {
                this.values[this.index] == null || this.values[this.index] == "" ? parseInt(j) > 5 && parseInt(j) < 10 ? (this.date[R] = this.values[this.index] = "0" + j, this.index++) : parseInt(j) < 10 && (this.values[this.index] = j) : parseInt(j) < 10 && (this.date[R] = this.values[this.index] += j, this.index++);
              },
              MI: function(j) {
                Oe.N60.call(this, j, 4);
              },
              SS: function(j) {
                Oe.N60.call(this, j, 5);
              },
              "AM/PM": function(j) {
                typeof this.values[this.index] > "u" && (this.values[this.index] = ""), this.values[this.index] === "" ? j.match(/a/i) && this.date[3] < 13 ? this.values[this.index] += "A" : j.match(/p/i) && (this.values[this.index] += "P") : (this.values[this.index] === "A" || this.values[this.index] === "P") && (this.values[this.index] += "M", this.index++);
              },
              WD: function(j) {
                typeof this.values[this.index] > "u" && (this.values[this.index] = ""), parseInt(j) >= 0 && parseInt(j) < 7 && (this.values[this.index] = j), this.values[this.index].length == 1 && this.index++;
              },
              "0{1}(.{1}0+)?": function(j) {
                var R = ne.call(this), J = !1;
                r(this.values[this.index]) ? this.values[this.index] = "" : this.values[this.index] == "-" && (J = !0);
                var ue = H.call(this, this.values[this.index], R);
                ue && (this.values[this.index] = ue.join(R)), parseInt(j) >= 0 && parseInt(j) < 10 ? (this.values[this.index] == "0" && j > 0 ? this.values[this.index] = "" : this.values[this.index] == "-0" && j > 0 && (this.values[this.index] = "-"), (this.values[this.index] != "0" && this.values[this.index] != "-0" || j == R) && (this.values[this.index] += j)) : R && j == R ? this.values[this.index].indexOf(R) == -1 && (this.values[this.index] || (this.values[this.index] = "0"), this.values[this.index] += j) : j == "-" && (J = !0), J === !0 && this.values[this.index][0] !== "-" && (this.values[this.index] = "-" + this.values[this.index]);
              },
              "0{1}(.{1}0+)?E{1}\\+0+": function(j) {
                Oe["0{1}(.{1}0+)?"].call(this, j);
              },
              "0{1}(.{1}0+)?%": function(j) {
                Oe["0{1}(.{1}0+)?"].call(this, j), this.values[this.index].match(/[\-0-9]/g) ? this.values[this.index] && this.values[this.index].indexOf("%") == -1 && (this.values[this.index] += "%") : this.values[this.index] = "";
              },
              "#(.{1})##0?(.{1}0+)?( ?;(.*)?)?": function(j) {
                Oe["0{1}(.{1}0+)?"].call(this, j);
                var R = ne.call(this), J = this.tokens[this.index].substr(1, 1), ue = this.values[this.index][0] === "-", Q = H.call(this, this.values[this.index], R);
                if (Q !== "") {
                  var pe = Q[0].match(/[0-9]/g);
                  if (pe) {
                    pe = pe.join("");
                    for (var je = [], Te = 0, ke = pe.length - 1; ke >= 0; ke--)
                      je.push(pe[ke]), Te++, Te % 3 || je.push(J);
                    je = je.reverse(), Q[0] = je.join(""), Q[0].substr(0, 1) == J && (Q[0] = Q[0].substr(1));
                  } else
                    Q[0] = "";
                  this.values[this.index] = Q.join(R), ue && (this.values[this.index] = "-" + this.values[this.index]);
                }
              },
              0: function(j) {
                j.match(/[0-9]/g) && (this.values[this.index] = j, this.index++);
              },
              "[0-9a-zA-Z$]+": function(j) {
                r(this.values[this.index]) && (this.values[this.index] = "");
                var R = this.tokens[this.index], J = this.values[this.index], ue = J.length;
                R[ue] == j ? (this.values[this.index] += j, this.values[this.index] == R && this.index++) : (this.values[this.index] = R, this.index++, j.match(/[\-0-9]/g) && this.position--);
              },
              A: function(j) {
                j.match(/[a-zA-Z]/gi) && (this.values[this.index] = j, this.index++);
              },
              ".": function(j) {
                Oe["[0-9a-zA-Z$]+"].call(this, j);
              },
              "@": function(j) {
                r(this.values[this.index]) && (this.values[this.index] = ""), this.values[this.index] += j;
              }
            }, Ze = function(j) {
              if (this.type == "general")
                var R = [].concat(E.general);
              else
                var R = [].concat(E.currency, E.datetime, E.percentage, E.scientific, E.numeric, E.text, E.general);
              var J = new RegExp(R.join("|"), "gi");
              return j.match(J);
            }, et = function(j) {
              if (this.type)
                if (this.type == "text")
                  var R = ["text"];
                else if (this.type == "general")
                  var R = ["general"];
                else if (this.type == "datetime")
                  var R = ["numeric", "datetime", "general"];
                else
                  var R = ["currency", "percentage", "scientific", "numeric", "general"];
              else var R = Object.keys(E);
              for (var J = 0; J < R.length; J++)
                for (var ue = R[J], Q = 0; Q < E[ue].length; Q++) {
                  var pe = new RegExp(E[ue][Q], "gi"), je = j.match(pe);
                  if (je)
                    return { type: ue, method: E[ue][Q] };
                }
            }, te = function(j) {
              for (var R = [], J = 0; J < j.length; J++) {
                var ue = et.call(this, j[J]);
                ue ? R.push(ue.method) : R.push(null);
              }
              for (var J = 0; J < R.length; J++)
                R[J] == "MM" && (R[J - 1] && R[J - 1].indexOf("H") >= 0 || R[J - 2] && R[J - 2].indexOf("H") >= 0 || R[J + 1] && R[J + 1].indexOf("S") >= 0 || R[J + 2] && R[J + 2].indexOf("S") >= 0) && (R[J] = "MI");
              return R;
            }, ye = function(j) {
              var R = et.call(this, j);
              if (R)
                var J = R.type;
              if (J) {
                for (var ue = 0, Q = Ze.call(this, j), pe = 0; pe < Q.length; pe++)
                  R = et.call(this, Q[pe]), R && re(R.type) && ue++;
                ue > 1 && (J = "general");
              }
              return J;
            }, _e = function() {
              typeof Oe[this.methods[this.index]] == "function" ? (Oe[this.methods[this.index]].call(this, this.value[this.position]), this.position++) : (this.values[this.index] = this.tokens[this.index], this.index++);
            }, q = function(j) {
              return ("" + +j).replace(
                /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
                function(R, J, ue, Q, pe) {
                  return pe < 0 ? J + "0." + Array(1 - pe - ue.length).join(0) + ue + Q : J + ue + Q + Array(pe - Q.length + 1).join(0);
                }
              );
            }, ee = function(j, R, J) {
              var ue = null, Q = {
                // Element
                input: null,
                // Current value
                value: null,
                // Mask options
                options: {},
                // New values for each token found
                values: [],
                // Token position
                index: 0,
                // Character position
                position: 0,
                // Date raw values
                date: [0, 0, 0, 0, 0, 0],
                // Raw number for the numeric values
                number: 0
              };
              if (typeof j == "object") {
                if (Q.input = j.target, Q.value = xe.call(j.target), Q.caret = ae.call(j.target), (ue = j.target.getAttribute("data-mask")) && (Q.mask = ue), (ue = j.target.getAttribute("data-type")) && (Q.type = ue), j.target.mask ? (j.target.mask.options && (Q.options = j.target.mask.options), j.target.mask.locale && (Q.locale = j.target.mask.locale)) : (ue = j.target.getAttribute("data-locale")) && (Q.locale = ue, Q.mask && (Q.options.style = Q.mask)), j.target.attributes && j.target.attributes.length)
                  for (var pe = 0; pe < j.target.attributes.length; pe++) {
                    var je = j.target.attributes[pe].name, Te = j.target.attributes[pe].value;
                    je.substr(0, 4) == "data" && (Q.options[je.substr(5)] = Te);
                  }
              } else {
                if (typeof R == "string")
                  Q.mask = R;
                else
                  for (var je = Object.keys(R), pe = 0; pe < je.length; pe++)
                    Q[je[pe]] = R[je[pe]];
                typeof j == "number" && (ne.call(Q, Q.mask), j = ("" + j).replace(".", Q.options.decimal)), Q.value = j, Q.input && (xe.call(Q.input, j), l.focus(Q.input), Q.caret = ae.call(Q.input));
              }
              if (!Y(Q.value) && (Q.mask || Q.locale)) {
                if (Q.mask) {
                  if (Q.mask = Q.mask.replace(new RegExp(/\[h]/), "|h|"), Q.mask = Q.mask.replace(new RegExp(/\[.*?\]/), ""), Q.mask = Q.mask.replace(new RegExp(/\|h\|/), "[h]"), Q.mask.indexOf(";") !== -1) {
                    var ue = Q.mask.split(";");
                    Q.mask = ue[0];
                  }
                  if (Q.mask.indexOf("##") !== -1) {
                    var ke = Q.mask.split(";");
                    ke[0] && (typeof j == "object" && (ke[0] = ke[0].replace(new RegExp(/_\)/g), ""), ke[0] = ke[0].replace(new RegExp(/_\(/g), "")), ke[0] = ke[0].replace("*", "	"), ke[0] = ke[0].replace(new RegExp(/_-/g), ""), ke[0] = ke[0].replace(new RegExp(/_/g), ""), ke[0] = ke[0].replace(new RegExp(/"/g), ""), ke[0] = ke[0].replace("##0.###", "##0.000"), ke[0] = ke[0].replace("##0.##", "##0.00"), ke[0] = ke[0].replace("##0.#", "##0.0"), ke[0] = ke[0].replace("##0,###", "##0,000"), ke[0] = ke[0].replace("##0,##", "##0,00"), ke[0] = ke[0].replace("##0,#", "##0,0")), Q.mask = ke[0];
                  }
                  if (Q.mask.indexOf("\\") !== -1) {
                    var ke = Q.mask.split(";");
                    ke[0] = ke[0].replace(new RegExp(/\\/g), ""), Q.mask = ke[0];
                  }
                  Q.type || (Q.type = ye.call(Q, Q.mask)), Q.tokens = Ze.call(Q, Q.mask);
                }
                if (typeof j != "object" || !j.inputType || !j.inputType.indexOf("insert") || !j.inputType.indexOf("delete"))
                  if (Q.locale)
                    if (Q.input)
                      V.call(Q, Q.input, j);
                    else
                      var Re = N.call(Q, Q.value);
                  else {
                    for (Q.methods = te.call(Q, Q.tokens), Q.event = j; Q.position < Q.value.length && typeof Q.tokens[Q.index] < "u"; )
                      _e.call(Q);
                    var Re = Q.values.join("");
                    if (re(Q.type) && Re !== "") {
                      for (; typeof Q.tokens[Q.index] < "u"; ) {
                        var ue = et.call(Q, Q.tokens[Q.index]);
                        ue && ue.type == "general" && (Q.values[Q.index] = Q.tokens[Q.index]), Q.index++;
                      }
                      var ze = !0;
                    } else
                      var ze = !1;
                    if (Re = Q.values.join(""), Q.input) {
                      if (ue = Re.length - Q.value.length, ue > 0)
                        var Qe = Q.caret + ue;
                      else
                        var Qe = Q.caret;
                      xe.call(Q.input, Re, Qe, ze);
                    }
                  }
                if (Q.input) {
                  var ie = null;
                  if (re(Q.type)) {
                    let Ce = xe.call(Q.input);
                    Q.number = K.call(Q, Ce), Q.type == "percentage" && ("" + Ce).indexOf("%") !== -1 ? ie = ee.adjustPrecision(Q.number / 100) : ie = Q.number;
                  } else Q.type == "datetime" && (ie = I.call(Q), Q.date[0] && Q.date[1] && Q.date[2] && Q.input.setAttribute("data-completed", !0));
                  ie && Q.input.setAttribute("data-value", ie);
                }
                if (Re !== void 0)
                  return J ? Q : Re;
              }
            };
            return ee.adjustPrecision = function(j) {
              if (typeof j == "number" && !Number.isInteger(j)) {
                const R = j.toString().split(".");
                if (R[1] && R[1].length > 10) {
                  let J = 0;
                  const ue = R[1][R[1].length - 2];
                  if (ue == 0 || ue == 9) {
                    for (let Q = R[1].length - 2; Q > 0; Q--)
                      if (J >= 0 && R[1][Q] == ue) {
                        if (J++, J > 6)
                          break;
                      } else {
                        J = 0;
                        break;
                      }
                    if (J)
                      return parseFloat(parseFloat(j).toFixed(R[1].length - 1));
                  }
                }
              }
              return j;
            }, ee.getType = ye, ee.prepare = function(j, R) {
              return R || (R = {}), Ze.call(R, j);
            }, ee.apply = function(j) {
              var R = xe.call(j.target);
              j.key.length == 1 && (R += j.key), xe.call(j.target, ee(R, j.target.getAttribute("data-mask")));
            }, ee.run = function(j, R, J) {
              return ee(j, { mask: R, decimal: J });
            }, ee.extract = function(j, R, J) {
              if (r(j) || typeof R != "object")
                return j;
              if (R = Object.assign({}, R), R.options || (R.options = {}), !R.mask && R.format && (R.mask = R.format), R.mask) {
                if (R.mask.indexOf(";") !== -1) {
                  var ue = R.mask.split(";");
                  R.mask = ue[0];
                }
                R.mask = R.mask.replace(new RegExp(/\[h]/), "|h|"), R.mask = R.mask.replace(new RegExp(/\[.*?\]/), ""), R.mask = R.mask.replace(new RegExp(/\|h\|/), "[h]");
              }
              ne.call(R, R.mask);
              var Q = null, pe = null;
              if (R.type == "percent" || R.options.style == "percent" ? Q = "percentage" : R.mask && (Q = ye.call(R, R.mask)), Q === "text") {
                var je = {};
                pe = j;
              } else if (Q === "general") {
                var je = ee(j, R, !0);
                pe = j;
              } else if (Q === "datetime") {
                j instanceof Date && (j = ee.getDateString(j, R.mask));
                var je = ee(j, R, !0);
                l.isNumeric(j) ? pe = j : pe = u.call(je);
              } else if (Q === "scientific") {
                pe = j, typeof j == "string" && (pe = Number(pe));
                var je = R;
              } else {
                pe = K.call(R, j), Q === "percentage" && ("" + j).indexOf("%") !== -1 && (pe /= 100);
                var je = R;
              }
              return je.value = pe, !je.type && Q && (je.type = Q), J ? je : pe;
            }, ee.render = function(j, R, J, ue) {
              if (r(j) || typeof R != "object")
                return j;
              if (R = Object.assign({}, R), R.options || (R.options = {}), !R.mask && R.format && (R.mask = R.format), R.mask) {
                if (R.mask.indexOf(";") !== -1) {
                  var Q = R.mask.split(";");
                  J || (Q[0] = Q[0].replace(new RegExp(/_\)/g), ""), Q[0] = Q[0].replace(new RegExp(/_\(/g), "")), R.mask = Q[0];
                }
                R.mask = R.mask.replace(new RegExp(/\[h]/), "|h|"), R.mask = R.mask.replace(new RegExp(/\[.*?\]/), ""), R.mask = R.mask.replace(new RegExp(/\|h\|/), "[h]");
              }
              var pe = null;
              R.type == "percent" || R.options.style == "percent" ? pe = "percentage" : R.mask ? pe = ye.call(R, R.mask) : j instanceof Date && (pe = "datetime");
              var je = !1;
              if (pe == "datetime" || R.type == "calendar") {
                var Q = ee.getDateString(j, R.mask);
                Q && (j = Q), R.mask && J && (je = !0);
              } else if (pe === "text")
                typeof j == "number" && (j = j.toString());
              else if (typeof j == "string" && o.isNumeric(j) && (j = Number(j)), pe === "percentage" && (j = ee.adjustPrecision(j * 100)), typeof j == "number") {
                var Q = null;
                if (R.mask && J) {
                  var Te = ne.call(R, R.mask);
                  if (pe === "scientific")
                    if (R.mask.indexOf(Te) !== -1) {
                      let Ee = R.mask.split("E");
                      Ee = Ee[0].split(Te), Ee = "" + Ee[1].match(/[0-9]+/g), Ee = Ee.length, Q = j.toExponential(Ee);
                    } else
                      Q = j.toExponential(0);
                  else {
                    if (R.mask.indexOf(Te) !== -1) {
                      Te = R.mask.split(Te), Te = "" + Te[1].match(/[0-9]+/g), Te = Te.length, Q = j.toFixed(Te);
                      let Ee = j.toString().split("."), Ve = Ee[1];
                      Ve && Ve.length > Te && Ve[Ve.length - 1] === "5" && (Q = parseFloat(Ee[0] + "." + Ve + "1").toFixed(Te));
                    } else
                      Q = j.toFixed(0);
                    ("" + Q).indexOf("e") !== -1 && (Q = q(Q));
                  }
                } else if (R.locale && J) {
                  var Te = ("" + j).split(".");
                  if (R.options) {
                    typeof Te[1] > "u" && (Te[1] = "");
                    var Re = Te[1].length;
                    if (R.options.minimumFractionDigits > Re)
                      for (var ke = 0; ke < R.options.minimumFractionDigits - Re; ke++)
                        Te[1] += "0";
                  }
                  Te[1].length ? Q = Te.join(".") : Q = Te[0];
                  var Re = Te[1].length;
                  R.options && R.options.maximumFractionDigits < Re && (Q = parseFloat(Q).toFixed(R.options.maximumFractionDigits));
                } else
                  Q = q(j);
                Q !== null && (j = Q, ne.call(R, R.mask), R.options.decimal && (j = j.replace(".", R.options.decimal)));
              } else
                R.mask && J && (je = !0);
              if (je) {
                var ze = R.mask.length - j.length;
                if (ze > 0)
                  for (var ke = 0; ke < ze; ke++)
                    j += " ";
              }
              if (pe === "scientific")
                if (!J)
                  j = q(j);
                else
                  return j;
              if (pe === "numeric" && ue === !1 && typeof j == "string")
                return j;
              if (j = ee(j, R), J && pe === "numeric") {
                var Qe = R.mask.match(new RegExp(/^[0]+$/gm));
                if (Qe && Qe.length === 1) {
                  var ie = Qe[0].length;
                  if (ie > 3)
                    for (j = "" + j; j.length < ie; )
                      j = "0" + j;
                }
              }
              return j;
            }, ee.set = function(j, R) {
              if (R) {
                j.setAttribute("data-mask", R);
                var J = new Event("input", {
                  bubbles: !0,
                  cancelable: !0
                });
                j.dispatchEvent(J);
              }
            }, ee.extractDateFromString = function(j, R) {
              var J = ee(j, { mask: R }, !0);
              if (j > 0 && Number(j) == j && (J.values.join("") !== J.value || J.type == "numeric")) {
                var ue = new Date(Math.round((j - 25569) * 86400 * 1e3));
                return ue.getFullYear() + "-" + l.two(ue.getMonth()) + "-" + l.two(ue.getDate()) + " 00:00:00";
              }
              var Q = !1;
              return J.values && J.values.length === J.tokens.length && J.values[J.values.length - 1].length >= J.tokens[J.tokens.length - 1].length && (Q = !0), J.date[0] && J.date[1] && (J.date[2] || Q) ? (J.date[2] || (J.date[2] = 1), J.date[0] + "-" + l.two(J.date[1]) + "-" + l.two(J.date[2]) + " " + l.two(J.date[3]) + ":" + l.two(J.date[4]) + ":" + l.two(J.date[5])) : "";
            }, ee.getDateString = function(j, R) {
              if (!R)
                var R = {};
              if (R && typeof R == "object") {
                if (R.format)
                  var J = R.format;
                else if (R.mask)
                  var J = R.mask;
              } else
                var J = R;
              if (J || (J = "YYYY-MM-DD"), J.indexOf("[h]") >= 0) {
                var ue = 0;
                if (j && l.isNumeric(j) && (ue = parseFloat(24 * Number(j)), J.indexOf("mm") >= 0)) {
                  var Q = ("" + ue).split(".");
                  if (Q[1]) {
                    var pe = 60 * parseFloat("0." + Q[1]);
                    pe = parseFloat(pe.toFixed(2));
                  } else
                    var pe = 0;
                  ue = parseInt(Q[0]) + ":" + l.two(pe);
                }
                return ue;
              }
              j instanceof Date ? j = T.now(j) : j && l.isNumeric(j) && (j = T.numToDate(j));
              for (var je = ["DAY", "WD", "DDDD", "DDD", "DD", "D", "Q", "HH24", "HH12", "HH", "H", "AM/PM", "MI", "SS", "MS", "YYYY", "YYY", "YY", "Y", "MONTH", "MON", "MMMMM", "MMMM", "MMM", "MM", "M", "."], Te = new RegExp(je.join("|"), "gi"), ke = J.match(Te), Re = 0; Re < ke.length; Re++)
                ke[Re].toUpperCase() == "MM" && (ke[Re - 1] && ke[Re - 1].toUpperCase().indexOf("H") >= 0 || ke[Re - 2] && ke[Re - 2].toUpperCase().indexOf("H") >= 0 || ke[Re + 1] && ke[Re + 1].toUpperCase().indexOf("S") >= 0 || ke[Re + 2] && ke[Re + 2].toUpperCase().indexOf("S") >= 0) && (ke[Re] = "mi");
              var ze = {
                tokens: ke
              };
              if (j) {
                var pe = "" + j, Qe = pe.indexOf("T") !== -1 ? "T" : " ";
                pe = pe.split(Qe);
                var Q = 0, ie = 0, Ce = 0;
                pe[1] && (Q = pe[1].split(":"), ie = Q[1] ? Q[1] : 0, Ce = Q[2] ? Q[2] : 0, Q = Q[0] ? Q[0] : 0), pe = pe[0].split("-");
                let ut = new Date(pe[0], pe[1], 0).getDate();
                if (pe[0] && pe[1] && pe[2] && pe[0] > 0 && pe[1] > 0 && pe[1] < 13 && pe[2] > 0 && pe[2] <= ut) {
                  ze.data = [pe[0], pe[1], pe[2], Q, ie, Ce], ze.value = [];
                  for (var Ee = new Date(ze.data[0], ze.data[1] - 1, ze.data[2], ze.data[3], ze.data[4], ze.data[5]), Ve = function(mt) {
                    var nt = this.tokens[mt], st = nt.toUpperCase(), $e = null;
                    st === "YYYY" ? $e = this.data[0] : st === "YYY" ? $e = this.data[0].substring(1, 4) : st === "YY" ? $e = this.data[0].substring(2, 4) : st === "Y" ? $e = this.data[0].substring(3, 4) : nt === "MON" ? $e = T.months[Ee.getMonth()].substr(0, 3).toUpperCase() : nt === "mon" ? $e = T.months[Ee.getMonth()].substr(0, 3).toLowerCase() : nt === "MONTH" ? $e = T.months[Ee.getMonth()].toUpperCase() : nt === "month" ? $e = T.months[Ee.getMonth()].toLowerCase() : st === "MMMMM" ? $e = T.months[Ee.getMonth()].substr(0, 1) : st === "MMMM" || nt === "Month" ? $e = T.months[Ee.getMonth()] : st === "MMM" || nt == "Mon" ? $e = T.months[Ee.getMonth()].substr(0, 3) : st === "MM" ? $e = l.two(this.data[1]) : st === "M" ? $e = Ee.getMonth() + 1 : nt === "DAY" ? $e = T.weekdays[Ee.getDay()].toUpperCase() : nt === "day" ? $e = T.weekdays[Ee.getDay()].toLowerCase() : st === "DDDD" || nt == "Day" ? $e = T.weekdays[Ee.getDay()] : st === "DDD" ? $e = T.weekdays[Ee.getDay()].substr(0, 3) : st === "DD" ? $e = l.two(this.data[2]) : st === "D" ? $e = parseInt(this.data[2]) : st === "Q" ? $e = Math.floor((Ee.getMonth() + 3) / 3) : st === "HH24" || st === "HH" ? ($e = this.data[3], $e > 12 && this.tokens.indexOf("am/pm") !== -1 && ($e -= 12), $e = l.two($e)) : st === "HH12" ? this.data[3] > 12 ? $e = l.two(this.data[3] - 12) : $e = l.two(this.data[3]) : st === "H" ? ($e = this.data[3], $e > 12 && this.tokens.indexOf("am/pm") !== -1 && ($e -= 12, $e = l.two($e))) : st === "MI" ? $e = l.two(this.data[4]) : st === "SS" ? $e = l.two(this.data[5]) : st === "MS" ? $e = Ee.getMilliseconds() : st === "AM/PM" ? this.data[3] >= 12 ? $e = "PM" : $e = "AM" : st === "WD" && ($e = T.weekdays[Ee.getDay()]), $e === null ? this.value[mt] = this.tokens[mt] : this.value[mt] = $e;
                  }, Re = 0; Re < ze.tokens.length; Re++)
                    Ve.call(ze, Re);
                  j = ze.value.join("");
                } else
                  j = "";
              }
              return j;
            }, ee;
          }
          var O = L();
          function W() {
            var E = function(I, u) {
              if (I.calendar)
                return I.calendar.setOptions(u, !0);
              var r = { type: "calendar" };
              r.options = {}, r.date = null, r.setOptions = function(q, ee) {
                var j = {
                  // Render type: [ default | year-month-picker ]
                  type: "default",
                  // Restrictions
                  validRange: null,
                  // Starting weekday - 0 for sunday, 6 for saturday
                  startingDay: null,
                  // Date format
                  format: "DD/MM/YYYY",
                  // Allow keyboard date entry
                  readonly: !0,
                  // Today is default
                  today: !1,
                  // Show timepicker
                  time: !1,
                  // Show the reset button
                  resetButton: !0,
                  // Placeholder
                  placeholder: "",
                  // Translations can be done here
                  months: T.monthsShort,
                  monthsFull: T.months,
                  weekdays: T.weekdays,
                  textDone: s.translate("Done"),
                  textReset: s.translate("Reset"),
                  textUpdate: s.translate("Update"),
                  // Value
                  value: null,
                  // Fullscreen (this is automatic set for screensize < 800)
                  fullscreen: !1,
                  // Create the calendar closed as default
                  opened: !1,
                  // Events
                  onopen: null,
                  onclose: null,
                  onchange: null,
                  onupdate: null,
                  // Internal mode controller
                  mode: null,
                  position: null,
                  // Data type
                  dataType: null,
                  // Controls
                  controls: !0,
                  // Auto select
                  autoSelect: !0
                };
                for (var R in j)
                  q && q.hasOwnProperty(R) ? r.options[R] = q[R] : (typeof r.options[R] > "u" || ee === !0) && (r.options[R] = j[R]);
                if (r.options.resetButton == !1 ? N.style.display = "none" : N.style.display = "", r.options.readonly ? I.setAttribute("readonly", "readonly") : I.removeAttribute("readonly"), r.options.placeholder ? I.setAttribute("placeholder", r.options.placeholder) : I.removeAttribute("placeholder"), l.isNumeric(r.options.value) && r.options.value > 0 && (r.options.value = E.numToDate(r.options.value), r.options.dataType = "numeric"), N.innerHTML = r.options.textReset, V.innerHTML = r.options.textDone, et.innerHTML = r.options.textUpdate, r.options.format && I.setAttribute("data-mask", r.options.format.toLowerCase()), !r.options.value && r.options.today)
                  var J = E.now();
                else
                  var J = r.options.value;
                return J && (r.options.value = null, r.setValue(J)), r;
              }, r.open = function(q) {
                if (!H.classList.contains("jcalendar-focus") && !H.classList.contains("jcalendar-inline")) {
                  if (E.current = r, S(r, !0), r.getDays(), r.options.type == "year-month-picker" && r.getMonths(), r.options.time && (te.value = r.date[3], ye.value = r.date[4]), H.classList.add("jcalendar-focus"), l.getWindowWidth() < 800 || r.options.fullscreen)
                    H.classList.add("jcalendar-fullsize"), M.slideBottom(ae, 1);
                  else {
                    H.classList.remove("jcalendar-fullsize");
                    var ee = I.getBoundingClientRect(), j = ae.getBoundingClientRect();
                    if (r.options.position)
                      K.style.position = "fixed", window.innerHeight < ee.bottom + j.height ? K.style.top = ee.top - (j.height + 2) + "px" : K.style.top = ee.top + ee.height + 2 + "px", K.style.left = ee.left + "px";
                    else {
                      if (window.innerHeight < ee.bottom + j.height) {
                        var R = -1 * (ee.height + j.height + 2);
                        R + ee.top < 0 && (R = -1 * (ee.top + ee.height)), K.style.top = R + "px";
                      } else
                        K.style.top = "2px";
                      if (window.innerWidth < ee.left + j.width) {
                        var R = window.innerWidth - (ee.left + j.width + 20);
                        K.style.left = R + "px";
                      } else
                        K.style.left = "0px";
                    }
                  }
                  typeof r.options.onopen == "function" && r.options.onopen(I);
                }
              }, r.close = function(q, ee) {
                if (r.options.autoSelect !== !0 && typeof ee > "u" && (ee = !1), H.classList.contains("jcalendar-focus")) {
                  if (ee !== !1) {
                    var j = H.querySelector(".jcalendar-selected");
                    if (typeof ee == "string")
                      var R = ee;
                    else if (!j || j.classList.contains("jcalendar-disabled"))
                      var R = r.options.value;
                    else
                      var R = r.getValue();
                    r.setValue(R);
                  } else {
                    let J = r.options.value || "";
                    r.options.value = null, r.setValue(J);
                  }
                  !q && typeof r.options.onclose == "function" && r.options.onclose(I), H.classList.remove("jcalendar-focus"), S(r, !1), E.current = null;
                }
                return r.options.value;
              }, r.prev = function() {
                r.options.mode == "years" ? (r.date[0] = r.date[0] - 12, r.getYears()) : r.options.mode == "months" ? (r.date[0] = parseInt(r.date[0]) - 1, r.getMonths()) : (r.date[1] < 2 ? (r.date[0] = r.date[0] - 1, r.date[1] = 12) : r.date[1] = r.date[1] - 1, r.getDays());
              }, r.next = function() {
                r.options.mode == "years" ? (r.date[0] = parseInt(r.date[0]) + 12, r.getYears()) : r.options.mode == "months" ? (r.date[0] = parseInt(r.date[0]) + 1, r.getMonths()) : (r.date[1] > 11 ? (r.date[0] = parseInt(r.date[0]) + 1, r.date[1] = 1) : r.date[1] = parseInt(r.date[1]) + 1, r.getDays());
              }, r.setToday = function() {
                var q = (/* @__PURE__ */ new Date()).toISOString().substr(0, 10);
                return r.setValue(q), q;
              }, r.setValue = function(q) {
                q || (q = "" + q);
                var ee = q, j = r.options.value;
                if (j != ee) {
                  if (ee) {
                    r.setLabel(ee, r.options);
                    var J = ee.split(" ");
                    J[1] || (J[1] = "00:00:00");
                    var R = J[1].split(":"), J = J[0].split("-"), ue = parseInt(J[0]), Q = parseInt(J[1]), pe = parseInt(J[2]), je = parseInt(R[0]), Te = parseInt(R[1]);
                    r.date = [ue, Q, pe, je, Te, 0];
                    var q = r.setLabel(ee, r.options), ke = E.now(new Date(ue, Q - 1, pe), !0);
                    if (r.options.validRange) {
                      if (!r.options.validRange[0] || ke >= r.options.validRange[0])
                        var Re = !0;
                      else
                        var Re = !1;
                      if (!r.options.validRange[1] || ke <= r.options.validRange[1])
                        var ze = !0;
                      else
                        var ze = !1;
                      Re && ze ? (I.classList.remove("jcalendar_warning"), I.title = "") : (I.classList.add("jcalendar_warning"), I.title = s.translate("Date outside the valid range"));
                    } else
                      I.classList.remove("jcalendar_warning"), I.title = "";
                  } else {
                    r.date = null;
                    var q = "";
                    I.classList.remove("jcalendar_warning"), I.title = "";
                  }
                  r.options.value = ee, typeof r.options.onchange == "function" && r.options.onchange(I, ee, j), I.value != q && (I.value = q, typeof I.oninput == "function" && I.oninput({
                    type: "input",
                    target: I,
                    value: I.value
                  }));
                }
                r.date && (r.getDays(), r.options.type == "year-month-picker" && r.getMonths());
              }, r.getValue = function() {
                return r.date ? r.options.time ? l.two(r.date[0]) + "-" + l.two(r.date[1]) + "-" + l.two(r.date[2]) + " " + l.two(r.date[3]) + ":" + l.two(r.date[4]) + ":" + l.two(0) : l.two(r.date[0]) + "-" + l.two(r.date[1]) + "-" + l.two(r.date[2]) + " " + l.two(0) + ":" + l.two(0) + ":" + l.two(0) : "";
              }, r.update = function(q, ee) {
                if (!q.classList.contains("jcalendar-disabled")) {
                  var j = H.querySelector(".jcalendar-selected");
                  j && j.classList.remove("jcalendar-selected"), q.classList.add("jcalendar-selected"), q.classList.contains("jcalendar-set-month") ? (r.date[1] = ee, r.date[2] = 1) : r.date[2] = q.innerText, r.options.time ? (r.date[3] = te.value, r.date[4] = ye.value) : r.close(null, !0);
                }
                ne();
              }, r.reset = function() {
                r.setValue(""), r.date = null, r.close(!1, !1);
              }, r.getDays = function() {
                r.options.mode = "days";
                var je = /* @__PURE__ */ new Date(), q = r.date && l.isNumeric(r.date[0]) ? r.date[0] : parseInt(je.getFullYear()), ee = r.date && l.isNumeric(r.date[1]) ? r.date[1] : parseInt(je.getMonth()) + 1, j = r.date && l.isNumeric(r.date[2]) ? r.date[2] : parseInt(je.getDate()), R = r.date && l.isNumeric(r.date[3]) ? r.date[3] : parseInt(je.getHours()), J = r.date && l.isNumeric(r.date[4]) ? r.date[4] : parseInt(je.getMinutes());
                r.date = [q, ee, j, R, J, 0], xe.innerHTML = q, fe.innerHTML = r.options.months[ee - 1];
                var ue = je.getMonth() == ee - 1 && je.getFullYear() == q, Q = je.getDate(), je = new Date(q, ee, 0, 0, 0), pe = je.getDate(), je = new Date(q, ee - 1, 0, 0, 0), Te = je.getDay() + 1, Qe = r.options.startingDay || 0;
                Te = Te - Qe, Ae.innerHTML = "";
                var ke = document.createElement("tr");
                ke.setAttribute("align", "center"), Ae.appendChild(ke);
                for (var Re = 0; Re < 7; Re++) {
                  var ze = document.createElement("td");
                  ze.classList.add("jcalendar-weekday"), ze.innerHTML = r.options.weekdays[Qe].substr(0, 1), ke.appendChild(ze), Qe++, Qe > 6 && (Qe = 0);
                }
                for (var Qe = 0, ie = 0, Ce = 0; Ce < 6; Ce++) {
                  var ke = document.createElement("tr");
                  ke.setAttribute("align", "center"), ke.style.height = "34px";
                  for (var Re = 0; Re < 7; Re++) {
                    var ze = document.createElement("td");
                    if (ze.classList.add("jcalendar-set-day"), Qe >= Te && Qe < Te + pe) {
                      ie++, ze.innerHTML = ie, ie == j && ze.classList.add("jcalendar-selected"), ue && Q == ie && (ze.style.fontWeight = "bold");
                      var Ee = E.now(new Date(q, ee - 1, ie), !0);
                      if (r.options.validRange) {
                        if (!r.options.validRange[0] || Ee >= r.options.validRange[0])
                          var Ve = !0;
                        else
                          var Ve = !1;
                        if (!r.options.validRange[1] || Ee <= r.options.validRange[1])
                          var tt = !0;
                        else
                          var tt = !1;
                        Ve && tt || ze.classList.add("jcalendar-disabled");
                      }
                    }
                    ke.appendChild(ze), Qe++;
                  }
                  Ae.appendChild(ke);
                }
                r.options.time ? Oe.style.display = "" : Oe.style.display = "none", ne();
              }, r.getMonths = function() {
                r.options.mode = "months";
                var q = r.options.months;
                r.options.value;
                var ee = /* @__PURE__ */ new Date(), j = parseInt(ee.getFullYear()), R = parseInt(ee.getMonth()) + 1, J = r.date && l.isNumeric(r.date[0]) ? r.date[0] : j, ue = r.date && l.isNumeric(r.date[1]) ? r.date[1] : R;
                xe.innerHTML = r.date[0], fe.innerHTML = q[ue - 1];
                var Q = document.createElement("table");
                Q.setAttribute("width", "100%");
                for (var pe = null, je = 0; je < 12; je++) {
                  if (!(je % 4)) {
                    var pe = document.createElement("tr");
                    pe.setAttribute("align", "center"), Q.appendChild(pe);
                  }
                  var Te = document.createElement("td");
                  if (Te.classList.add("jcalendar-set-month"), Te.setAttribute("data-value", je + 1), Te.innerText = q[je], r.options.validRange) {
                    var ke = J + "-" + l.two(je + 1);
                    if (!r.options.validRange[0] || ke >= r.options.validRange[0].substr(0, 7))
                      var Re = !0;
                    else
                      var Re = !1;
                    if (!r.options.validRange[1] || ke <= r.options.validRange[1].substr(0, 7))
                      var ze = !0;
                    else
                      var ze = !1;
                    Re && ze || Te.classList.add("jcalendar-disabled");
                  }
                  je + 1 == ue && Te.classList.add("jcalendar-selected"), j == J && je + 1 == R && (Te.style.fontWeight = "bold"), pe.appendChild(Te);
                }
                Ae.innerHTML = '<tr><td colspan="7"></td></tr>', Ae.children[0].children[0].appendChild(Q), ne();
              }, r.getYears = function() {
                r.options.mode = "years";
                for (var q = /* @__PURE__ */ new Date(), ee = q.getFullYear(), j = r.date && l.isNumeric(r.date[0]) ? r.date[0] : parseInt(q.getFullYear()), R = [], J = 0; J < 25; J++)
                  R[J] = parseInt(r.date[0]) + (J - 12);
                var ue = document.createElement("table");
                ue.setAttribute("width", "100%");
                for (var J = 0; J < 25; J++) {
                  if (!(J % 5)) {
                    var Q = document.createElement("tr");
                    Q.setAttribute("align", "center"), ue.appendChild(Q);
                  }
                  var pe = document.createElement("td");
                  pe.classList.add("jcalendar-set-year"), pe.innerText = R[J], j == R[J] && pe.classList.add("jcalendar-selected"), ee == R[J] && (pe.style.fontWeight = "bold"), Q.appendChild(pe);
                }
                Ae.innerHTML = '<tr><td colspan="7"></td></tr>', Ae.firstChild.firstChild.appendChild(ue), ne();
              }, r.setLabel = function(q, ee) {
                return E.getDateString(q, ee);
              }, r.fromFormatted = function(q, ee) {
                return E.extractDateFromString(q, ee);
              };
              var Y = function(q) {
                var ee = l.findElement(q.target, "jcalendar-container");
                if (ee) {
                  var j = q.target.className;
                  if (j == "jcalendar-prev")
                    r.prev();
                  else if (j == "jcalendar-next")
                    r.next();
                  else if (j == "jcalendar-month")
                    r.getMonths();
                  else if (j == "jcalendar-year")
                    r.getYears();
                  else if (j == "jcalendar-set-year")
                    r.date[0] = q.target.innerText, r.options.type == "year-month-picker" ? r.getMonths() : r.getDays();
                  else if (q.target.classList.contains("jcalendar-set-month")) {
                    var R = parseInt(q.target.getAttribute("data-value"));
                    r.options.type == "year-month-picker" ? r.update(q.target, R) : (r.date[1] = R, r.getDays());
                  } else j == "jcalendar-confirm" || j == "jcalendar-update" || j == "jcalendar-close" ? r.close(null, !0) : j == "jcalendar-backdrop" ? r.close(!1, !1) : j == "jcalendar-reset" ? r.reset() : q.target.classList.contains("jcalendar-set-day") && q.target.innerText && r.update(q.target);
                } else
                  r.close(!1, !1);
              }, re = function(q) {
                if (q.target.value && q.target.value.length > 3) {
                  var ee = E.extractDateFromString(q.target.value, r.options.format);
                  ee && r.setValue(ee);
                }
              }, ne = function() {
                var q = H.querySelector(".jcalendar-selected");
                q && q.classList.contains("jcalendar-disabled") ? (et.setAttribute("disabled", "disabled"), te.setAttribute("disabled", "disabled"), ye.setAttribute("disabled", "disabled")) : (et.removeAttribute("disabled"), te.removeAttribute("disabled"), ye.removeAttribute("disabled")), typeof r.options.onupdate == "function" && r.options.onupdate(I, r.getValue());
              }, H = null, N = null, V = null, K = null, ae = null, xe = null, fe = null, be = null, Ae = null, Se = null, Oe = null, Ze = null, et = null, te = null, ye = null, _e = function() {
                I.tagName == "INPUT" && I.value && (u.value = I.value), N = document.createElement("div"), N.className = "jcalendar-reset", V = document.createElement("div"), V.className = "jcalendar-confirm", Se = document.createElement("div"), Se.className = "jcalendar-controls", Se.style.borderBottom = "1px solid #ddd", Se.appendChild(N), Se.appendChild(V), K = document.createElement("div"), K.className = "jcalendar-container", ae = document.createElement("div"), ae.className = "jcalendar-content", K.appendChild(ae), I.tagName == "DIV" ? (H = I, H.classList.add("jcalendar-inline")) : (ae.appendChild(Se), H = document.createElement("div"), H.className = "jcalendar"), H.classList.add("jcalendar-container"), H.appendChild(K);
                var q = document.createElement("div");
                q.className = "jcalendar-table", ae.appendChild(q);
                var ee = document.createElement("td");
                ee.setAttribute("colspan", "2"), ee.className = "jcalendar-prev", xe = document.createElement("span"), xe.className = "jcalendar-year", fe = document.createElement("span"), fe.className = "jcalendar-month";
                var j = document.createElement("td");
                j.className = "jcalendar-header", j.setAttribute("colspan", "3"), j.appendChild(fe), j.appendChild(xe);
                var R = document.createElement("td");
                R.setAttribute("colspan", "2"), R.className = "jcalendar-next";
                var J = document.createElement("thead"), ue = document.createElement("tr");
                ue.appendChild(ee), ue.appendChild(j), ue.appendChild(R), J.appendChild(ue), be = document.createElement("table"), Ae = document.createElement("tbody"), be.setAttribute("cellpadding", "0"), be.setAttribute("cellspacing", "0"), be.appendChild(J), be.appendChild(Ae), q.appendChild(be), te = document.createElement("select"), te.className = "jcalendar-select", te.onchange = function() {
                  r.date[3] = this.value, typeof r.options.onupdate == "function" && r.options.onupdate(I, r.getValue());
                };
                for (var Q = 0; Q < 24; Q++) {
                  var pe = document.createElement("option");
                  pe.value = Q, pe.innerHTML = l.two(Q), te.appendChild(pe);
                }
                ye = document.createElement("select"), ye.className = "jcalendar-select", ye.onchange = function() {
                  r.date[4] = this.value, typeof r.options.onupdate == "function" && r.options.onupdate(I, r.getValue());
                };
                for (var Q = 0; Q < 60; Q++) {
                  var pe = document.createElement("option");
                  pe.value = Q, pe.innerHTML = l.two(Q), ye.appendChild(pe);
                }
                var je = document.createElement("div");
                je.className = "jcalendar-controls", Oe = document.createElement("div"), Oe.className = "jcalendar-time", Oe.style.maxWidth = "140px", Oe.appendChild(te), Oe.appendChild(ye), et = document.createElement("button"), et.setAttribute("type", "button"), et.className = "jcalendar-update", Ze = document.createElement("div"), Ze.style.flexGrow = "10", Ze.appendChild(et), je.appendChild(Oe), I.tagName == "INPUT" && je.appendChild(Ze), ae.appendChild(je);
                var Te = document.createElement("div");
                Te.className = "jcalendar-backdrop", H.appendChild(Te), I.addEventListener("keyup", re), H.addEventListener("swipeleft", function(ke) {
                  M.slideLeft(be, 0, function() {
                    r.next(), M.slideRight(be, 1);
                  }), ke.preventDefault(), ke.stopPropagation();
                }), H.addEventListener("swiperight", function(ke) {
                  M.slideRight(be, 0, function() {
                    r.prev(), M.slideLeft(be, 1);
                  }), ke.preventDefault(), ke.stopPropagation();
                }), "ontouchend" in document.documentElement ? (H.addEventListener("touchend", Y), I.addEventListener("touchend", r.open)) : (H.addEventListener("mouseup", Y), I.addEventListener("mouseup", r.open)), E.hasEvents || (E.hasEvents = !0, document.addEventListener("keydown", E.keydown)), r.setOptions(u), I.tagName == "INPUT" ? (I.parentNode.insertBefore(H, I.nextSibling), I.setAttribute("autocomplete", "off"), I.classList.add("jcalendar-input"), I.value = r.setLabel(r.getValue(), r.options)) : (r.getDays(), r.options.time && (te.value = r.date[3], ye.value = r.date[4])), r.options.opened == !0 && r.open(), r.options.controls == !1 && K.classList.add("jcalendar-hide-controls"), I.change = r.setValue, I.val = function(ke) {
                  if (ke === void 0)
                    return r.getValue();
                  r.setValue(ke);
                }, I.calendar = H.calendar = r;
              };
              return _e(), r;
            };
            return E.keydown = function(I) {
              var u = null;
              (u = E.current) && (I.which == 13 ? u.close(!1, !0) : I.which == 27 && u.close(!1, !1));
            }, E.prettify = function(I, u) {
              if (!u)
                var u = {
                  justNow: "Just now",
                  xMinutesAgo: "{0}m ago",
                  xHoursAgo: "{0}h ago",
                  xDaysAgo: "{0}d ago",
                  xWeeksAgo: "{0}w ago",
                  xMonthsAgo: "{0} mon ago",
                  xYearsAgo: "{0}y ago"
                };
              I.indexOf("GMT") === -1 && I.indexOf("Z") === -1 && (I += " GMT");
              var r = /* @__PURE__ */ new Date(), Y = new Date(I), re = parseInt((r - Y) / 1e3 / 60);
              if (String.prototype.format = function(H) {
                return this.replace("{0}", H);
              }, re == 0)
                var ne = u.justNow;
              else if (re < 90)
                var ne = u.xMinutesAgo.format(re);
              else if (re < 1440)
                var ne = u.xHoursAgo.format(Math.round(re / 60));
              else if (re < 20160)
                var ne = u.xDaysAgo.format(Math.round(re / 1440));
              else if (re < 43200)
                var ne = u.xWeeksAgo.format(Math.round(re / 10080));
              else if (re < 1036800)
                var ne = u.xMonthsAgo.format(Math.round(re / 43200));
              else
                var ne = u.xYearsAgo.format(Math.round(re / 525600));
              return ne;
            }, E.prettifyAll = function() {
              for (var I = document.querySelectorAll(".prettydate"), u = 0; u < I.length; u++)
                I[u].getAttribute("data-date") ? I[u].innerHTML = E.prettify(I[u].getAttribute("data-date")) : I[u].innerHTML && (I[u].setAttribute("title", I[u].innerHTML), I[u].setAttribute("data-date", I[u].innerHTML), I[u].innerHTML = E.prettify(I[u].innerHTML));
            }, E.now = T.now, E.toArray = T.toArray, E.dateToNum = T.dateToNum, E.numToDate = T.numToDate, E.weekdays = T.weekdays, E.months = T.months, E.weekdaysShort = T.weekdaysShort, E.monthsShort = T.monthsShort, E.extractDateFromString = O.extractDateFromString, E.getDateString = O.getDateString, E;
          }
          var P = W();
          function ce() {
            var E = {
              material: [
                ["#ffebee", "#fce4ec", "#f3e5f5", "#e8eaf6", "#e3f2fd", "#e0f7fa", "#e0f2f1", "#e8f5e9", "#f1f8e9", "#f9fbe7", "#fffde7", "#fff8e1", "#fff3e0", "#fbe9e7", "#efebe9", "#fafafa", "#eceff1"],
                ["#ffcdd2", "#f8bbd0", "#e1bee7", "#c5cae9", "#bbdefb", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc"],
                ["#ef9a9a", "#f48fb1", "#ce93d8", "#9fa8da", "#90caf9", "#80deea", "#80cbc4", "#a5d6a7", "#c5e1a5", "#e6ee9c", "#fff59d", "#ffe082", "#ffcc80", "#ffab91", "#bcaaa4", "#eeeeee", "#b0bec5"],
                ["#e57373", "#f06292", "#ba68c8", "#7986cb", "#64b5f6", "#4dd0e1", "#4db6ac", "#81c784", "#aed581", "#dce775", "#fff176", "#ffd54f", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae"],
                ["#ef5350", "#ec407a", "#ab47bc", "#5c6bc0", "#42a5f5", "#26c6da", "#26a69a", "#66bb6a", "#9ccc65", "#d4e157", "#ffee58", "#ffca28", "#ffa726", "#ff7043", "#8d6e63", "#bdbdbd", "#78909c"],
                ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"],
                ["#e53935", "#d81b60", "#8e24aa", "#3949ab", "#1e88e5", "#00acc1", "#00897b", "#43a047", "#7cb342", "#c0ca33", "#fdd835", "#ffb300", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a"],
                ["#d32f2f", "#c2185b", "#7b1fa2", "#303f9f", "#1976d2", "#0097a7", "#00796b", "#388e3c", "#689f38", "#afb42b", "#fbc02d", "#ffa000", "#f57c00", "#e64a19", "#5d4037", "#616161", "#455a64"],
                ["#c62828", "#ad1457", "#6a1b9a", "#283593", "#1565c0", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24", "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242", "#37474f"],
                ["#b71c1c", "#880e4f", "#4a148c", "#1a237e", "#0d47a1", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717", "#f57f17", "#ff6f00", "#e65100", "#bf360c", "#3e2723", "#212121", "#263238"]
              ],
              fire: [
                ["0b1a6d", "840f38", "b60718", "de030b", "ff0c0c", "fd491c", "fc7521", "faa331", "fbb535", "ffc73a"],
                ["071147", "5f0b28", "930513", "be0309", "ef0000", "fa3403", "fb670b", "f9991b", "faad1e", "ffc123"],
                ["03071e", "370617", "6a040f", "9d0208", "d00000", "dc2f02", "e85d04", "f48c06", "faa307", "ffba08"],
                ["020619", "320615", "61040d", "8c0207", "bc0000", "c82a02", "d05203", "db7f06", "e19405", "efab00"],
                ["020515", "2d0513", "58040c", "7f0206", "aa0000", "b62602", "b94903", "c57205", "ca8504", "d89b00"]
              ],
              baby: [
                ["eddcd2", "fff1e6", "fde2e4", "fad2e1", "c5dedd", "dbe7e4", "f0efeb", "d6e2e9", "bcd4e6", "99c1de"],
                ["e1c4b3", "ffd5b5", "fab6ba", "f5a8c4", "aacecd", "bfd5cf", "dbd9d0", "baceda", "9dc0db", "7eb1d5"],
                ["daa990", "ffb787", "f88e95", "f282a9", "8fc4c3", "a3c8be", "cec9b3", "9dbcce", "82acd2", "649dcb"],
                ["d69070", "ff9c5e", "f66770", "f05f8f", "74bbb9", "87bfae", "c5b993", "83aac3", "699bca", "4d89c2"],
                ["c97d5d", "f58443", "eb4d57", "e54a7b", "66a9a7", "78ae9c", "b5a67e", "7599b1", "5c88b7", "4978aa"]
              ],
              chart: [
                ["#C1D37F", "#4C5454", "#FFD275", "#66586F", "#D05D5B", "#C96480", "#95BF8F", "#6EA240", "#0F0F0E", "#EB8258", "#95A3B3", "#995D81"]
              ]
            }, I = function(u) {
              return E[u] ? E[u] : E.material;
            };
            return I.get = function(u) {
              return E[u] ? E[u] : E;
            }, I.set = function(u, r) {
              E[u] = r;
            }, I;
          }
          var he = ce();
          function Z(E, I) {
            var u = {};
            u.options = {};
            var r = {
              data: [],
              position: null,
              allowCreate: !1,
              allowChangePosition: !1,
              onclick: null,
              onload: null,
              onchange: null,
              oncreate: null,
              ondelete: null,
              onbeforecreate: null,
              onchangeposition: null,
              animation: !1,
              hideHeaders: !1,
              padding: null,
              palette: null,
              maxWidth: null
            };
            for (var Y in r)
              I && I.hasOwnProperty(Y) ? u.options[Y] = I[Y] : u.options[Y] = r[Y];
            E.classList.add("jtabs");
            var re = null, ne = null, H = null;
            const N = function(fe) {
              u.options.animation && setTimeout(function() {
                let be = u.headers.children[fe].getBoundingClientRect();
                u.options.palette === "modern" ? (H.style.width = be.width - 4 + "px", H.style.left = u.headers.children[fe].offsetLeft + 2 + "px") : (H.style.width = be.width + "px", H.style.left = u.headers.children[fe].offsetLeft + "px"), u.options.position === "bottom" ? H.style.top = "0px" : H.style.bottom = "0px";
              }, 50);
            };
            var V = function(fe) {
              typeof u.headers.scrollTo == "function" ? u.headers.scrollTo({
                left: fe,
                behavior: "smooth"
              }) : u.headers.scrollLeft = fe, fe <= 1 ? re.classList.add("disabled") : re.classList.remove("disabled"), fe >= u.headers.scrollWidth - u.headers.offsetWidth ? ne.classList.add("disabled") : ne.classList.remove("disabled"), u.headers.scrollWidth <= u.headers.offsetWidth ? (re.style.display = "none", ne.style.display = "none") : (re.style.display = "", ne.style.display = "");
            };
            if (u.setBorder = N, u.open = function(fe) {
              if (Array.from(u.content.children), !!u.content.children[fe]) {
                for (var be = null, Ae = 0; Ae < u.headers.children.length; Ae++)
                  u.headers.children[Ae].classList.contains("jtabs-selected") && (be = Ae), u.headers.children[Ae].classList.remove("jtabs-selected"), u.headers.children[Ae].removeAttribute("aria-selected"), u.content.children[Ae] && u.content.children[Ae].classList.remove("jtabs-selected");
                if (u.headers.children[fe].classList.add("jtabs-selected"), u.headers.children[fe].setAttribute("aria-selected", "true"), u.content.children[fe] && u.content.children[fe].classList.add("jtabs-selected"), be != fe && typeof u.options.onchange == "function" && u.content.children[fe] && u.options.onchange(E, u, fe, u.headers.children[fe], u.content.children[fe]), u.options.hideHeaders == !0 && u.headers.children.length < 3 && u.options.allowCreate == !1)
                  u.headers.parentNode.style.display = "none";
                else {
                  u.headers.parentNode.style.display = "";
                  var Se = u.headers.children[fe].offsetLeft, Oe = Se + u.headers.children[fe].offsetWidth, Ze = u.headers.scrollLeft, et = Ze + u.headers.offsetWidth;
                  Ze <= Se && et >= Oe || V(Se - 1), N(fe);
                }
              }
            }, u.selectIndex = function(fe) {
              var be = Array.prototype.indexOf.call(u.headers.children, fe);
              return be >= 0 && u.open(be), be;
            }, u.rename = function(fe, be) {
              be || (be = prompt("New title", u.headers.children[fe].innerText)), u.headers.children[fe].innerText = be, N(u.getActive());
            }, u.create = function(fe, be) {
              if (typeof u.options.onbeforecreate == "function") {
                var Ae = u.options.onbeforecreate(E, fe);
                if (Ae === !1)
                  return !1;
                fe = Ae;
              }
              var Se = u.appendElement(fe);
              return typeof u.options.oncreate == "function" && u.options.oncreate(E, Se), N(u.getActive()), Se;
            }, u.remove = function(fe) {
              return u.deleteElement(fe);
            }, u.nextNumber = function() {
              for (var fe = 0, be = 0; be < u.headers.children.length; be++) {
                var Ae = u.headers.children[be].innerText.match(/[0-9].*/);
                Ae > fe && (fe = parseInt(Ae));
              }
              return fe ? fe++ : fe = 1, fe;
            }, u.deleteElement = function(fe) {
              let be = u.getActive();
              if (u.headers.children[fe])
                u.headers.removeChild(u.headers.children[fe]), u.content.removeChild(u.content.children[fe]);
              else
                return !1;
              if (be === fe)
                u.open(0);
              else {
                let Ae = u.getActive() || 0;
                N(Ae);
              }
              typeof u.options.ondelete == "function" && u.options.ondelete(E, fe);
            }, u.appendElement = function(fe, be, Ae, Se) {
              if (!fe)
                var fe = prompt("Title?", "");
              if (fe) {
                let et = l.guid(), te = l.guid();
                var Oe = document.createElement("div");
                Oe.setAttribute("id", te), Oe.setAttribute("role", "tabpanel"), Oe.setAttribute("aria-labelledby", et);
                var Ze = document.createElement("div");
                if (Ze.setAttribute("id", et), Ze.setAttribute("role", "tab"), Ze.setAttribute("aria-controls", te), Ze.innerHTML = fe, Ze.content = Oe, typeof Se > "u")
                  u.content.appendChild(Oe), u.headers.insertBefore(Ze, u.headers.lastChild);
                else {
                  let ye = u.content.children[Se];
                  ye ? u.content.insertBefore(Oe, ye) : u.content.appendChild(Oe), ye = u.headers.children[Se] || u.headers.lastChild, u.headers.insertBefore(Ze, ye);
                }
                return u.options.allowChangePosition && Ze.setAttribute("draggable", "true"), Ae !== !1 && u.selectIndex(Ze), typeof be == "function" && be(Oe, Ze), Oe;
              }
            }, u.getActive = function() {
              for (var fe = 0; fe < u.headers.children.length; fe++)
                if (u.headers.children[fe].classList.contains("jtabs-selected"))
                  return fe;
              return !1;
            }, u.updateContent = function(fe, be) {
              if (typeof be != "string")
                var Ae = be;
              else {
                var Ae = document.createElement("div");
                Ae.innerHTML = be;
              }
              u.content.children[fe].classList.contains("jtabs-selected") && be.classList.add("jtabs-selected"), u.content.replaceChild(be, u.content.children[fe]), N();
            }, u.updatePosition = function(fe, be, Ae, Se) {
              if (fe > be ? u.content.insertBefore(u.content.children[fe], u.content.children[be]) : u.content.insertBefore(u.content.children[fe], u.content.children[be].nextSibling), Se !== !1)
                u.open(be);
              else {
                const Oe = u.getActive();
                be < Oe && u.setBorder(Oe);
              }
              !Ae && typeof u.options.onchangeposition == "function" && u.options.onchangeposition(u.headers, fe, be);
            }, u.move = function(fe, be, Ae, Se) {
              fe > be ? u.headers.insertBefore(u.headers.children[fe], u.headers.children[be]) : u.headers.insertBefore(u.headers.children[fe], u.headers.children[be].nextSibling), u.updatePosition(fe, be, Ae, Se);
            }, u.setBorder = N, u.init = function() {
              E.innerHTML = "", u.headers = document.createElement("div"), u.content = document.createElement("div"), u.headers.classList.add("jtabs-headers"), u.headers.setAttribute("role", "tablist"), u.content.classList.add("jtabs-content"), u.content.setAttribute("role", "region"), u.content.setAttribute("aria-label", "Tab Panels"), u.options.palette ? E.classList.add("jtabs-modern") : E.classList.remove("jtabs-modern"), u.options.padding && (u.content.style.padding = parseInt(u.options.padding) + "px");
              var fe = document.createElement("div");
              fe.className = "jtabs-headers-container", fe.appendChild(u.headers), u.options.maxWidth && (fe.style.maxWidth = parseInt(u.options.maxWidth) + "px");
              var be = document.createElement("div");
              if (be.className = "jtabs-controls", be.setAttribute("draggable", "false"), fe.appendChild(be), u.options.position == "bottom" ? (E.appendChild(u.content), E.appendChild(fe)) : (E.appendChild(fe), E.appendChild(u.content)), u.options.allowCreate == !0) {
                var Ae = document.createElement("div");
                Ae.className = "jtabs-add", Ae.onclick = function() {
                  u.create();
                }, be.appendChild(Ae);
              }
              re = document.createElement("div"), re.className = "jtabs-prev", re.onclick = function() {
                V(u.headers.scrollLeft - u.headers.offsetWidth);
              }, be.appendChild(re), ne = document.createElement("div"), ne.className = "jtabs-next", ne.onclick = function() {
                V(u.headers.scrollLeft + u.headers.offsetWidth);
              }, be.appendChild(ne);
              for (var Se = 0; Se < u.options.data.length; Se++) {
                if (u.options.data[Se].titleElement)
                  var Oe = u.options.data[Se].titleElement;
                else
                  var Oe = document.createElement("div");
                if (u.options.data[Se].icon) {
                  var Ze = document.createElement("div"), et = document.createElement("i");
                  et.classList.add("material-icons"), et.innerHTML = u.options.data[Se].icon, Ze.appendChild(et), Oe.appendChild(Ze);
                }
                if (u.options.data[Se].title) {
                  var te = document.createTextNode(u.options.data[Se].title);
                  Oe.appendChild(te);
                }
                if (u.options.data[Se].width && (Oe.style.width = u.options.data[Se].width), u.options.data[Se].contentElement)
                  var ye = u.options.data[Se].contentElement;
                else {
                  var ye = document.createElement("div");
                  ye.innerHTML = u.options.data[Se].content;
                }
                u.headers.appendChild(Oe), u.content.appendChild(ye);
              }
              H = document.createElement("div"), H.className = "jtabs-border", u.headers.appendChild(H), u.options.animation && E.classList.add("jtabs-animation"), u.headers.addEventListener("click", function(_e) {
                if (_e.target.parentNode.classList.contains("jtabs-headers"))
                  var q = _e.target;
                else if (_e.target.tagName == "I")
                  var q = _e.target.parentNode.parentNode;
                else
                  var q = _e.target.parentNode;
                var ee = u.selectIndex(q);
                typeof u.options.onclick == "function" && u.options.onclick(E, u, ee, u.headers.children[ee], u.content.children[ee]);
              }), u.headers.addEventListener("contextmenu", function(_e) {
                u.selectIndex(_e.target);
              }), u.headers.children.length && u.open(0), V(0), u.options.allowChangePosition == !0 && h(u.headers, {
                direction: 1,
                ondrop: function(_e, q, ee) {
                  u.updatePosition(q, ee);
                }
              }), typeof u.options.onload == "function" && u.options.onload(E, u);
            }, E.children[0] && E.children[0].children.length)
              for (var K = 0; K < E.children[0].children.length; K++) {
                var ae = u.options.data && u.options.data[K] ? u.options.data[K] : {};
                E.children[1] && E.children[1].children[K] ? (ae.titleElement = E.children[0].children[K], ae.contentElement = E.children[1].children[K]) : ae.contentElement = E.children[0].children[K], u.options.data[K] = ae;
              }
            var xe = !1;
            if (u.options.data)
              for (var K = 0; K < u.options.data.length; K++)
                u.options.data[K].url && (b({
                  url: u.options.data[K].url,
                  type: "GET",
                  dataType: "text/html",
                  index: K,
                  success: function(be) {
                    u.options.data[this.index].content = be;
                  },
                  complete: function() {
                    u.init();
                  }
                }), xe = !0);
            return xe || u.init(), E.tabs = u, u;
          }
          function se(E, I) {
            if (E.color)
              return E.color.setOptions(I, !0);
            var u = { type: "color" };
            u.options = {};
            var r = null, Y = null, re = null, ne = null, H = null, N = null, V = null;
            u.setOptions = function(j, R) {
              var J = {
                placeholder: "",
                value: null,
                onopen: null,
                onclose: null,
                onchange: null,
                closeOnChange: !0,
                palette: null,
                position: null,
                doneLabel: "Done",
                resetLabel: "Reset",
                fullscreen: !1,
                opened: !1
              };
              j || (j = {}), j && !j.palette && (j.palette = he());
              for (var ue in J)
                j && j.hasOwnProperty(ue) ? u.options[ue] = j[ue] : (typeof u.options[ue] > "u" || R === !0) && (u.options[ue] = J[ue]);
              return ne && (ne.innerHTML = u.options.resetLabel), H && (H.innerHTML = u.options.doneLabel), u.options.palette && V && V.updateContent(0, be()), typeof u.options.value == "string" && (E.value = u.options.value, E.tagName === "INPUT" && (E.style.color = E.value, E.style.backgroundColor = E.value)), u.options.placeholder ? E.setAttribute("placeholder", u.options.placeholder) : E.getAttribute("placeholder") && E.removeAttribute("placeholder"), u;
            }, u.select = function(j) {
              var R = r.querySelector(".jcolor-selected");
              R && R.classList.remove("jcolor-selected"), u.values[j] && u.values[j].classList.add("jcolor-selected"), u.options.value = j;
            }, u.open = function() {
              if (!r.classList.contains("jcolor-focus")) {
                S(u, !0), r.classList.add("jcolor-focus"), u.options.value && u.select(u.options.value), re.style.marginTop = "", re.style.marginLeft = "";
                var j = re.getBoundingClientRect(), R = l.getWindowWidth(), J = l.getWindowHeight();
                if (R < 800 || u.options.fullscreen == !0 ? (re.classList.add("jcolor-fullscreen"), M.slideBottom(re, 1), Y.style.display = "block") : (re.classList.contains("jcolor-fullscreen") && (re.classList.remove("jcolor-fullscreen"), Y.style.display = ""), u.options.position ? re.style.position = "fixed" : re.style.position = "", j.left + j.width > R && (re.style.marginLeft = -1 * (j.left + j.width - (R - 20)) + "px"), j.top + j.height > J && (re.style.marginTop = -1 * (j.top + j.height - (J - 20)) + "px")), typeof u.options.onopen == "function" && u.options.onopen(E, u), V.setBorder(V.getActive()), u.options.value) {
                  var ue = fe(u.options.value);
                  ye.forEach(function(Q, pe) {
                    Q.value = ue[pe], Q.dispatchEvent(new Event("input"));
                  });
                }
              }
            }, u.close = function(j) {
              return r.classList.contains("jcolor-focus") && (r.classList.remove("jcolor-focus"), Y.style.display = "", !j && typeof u.options.onclose == "function" && u.options.onclose(E, u), S(u, !1)), u.options.value;
            }, u.setValue = function(j) {
              j || (j = ""), j != u.options.value && (u.options.value = j, te = j, u.select(j), typeof u.options.onchange == "function" && u.options.onchange(E, j, u), E.value != u.options.value && (E.value = u.options.value, E.tagName === "INPUT" && (E.style.color = E.value, E.style.backgroundColor = E.value), typeof E.oninput == "function" && E.oninput({
                type: "input",
                target: E,
                value: E.value
              })), u.options.closeOnChange == !0 && u.close());
            }, u.getValue = function() {
              return u.options.value;
            };
            var K = function(j) {
              var R = j.toString(16);
              return R.length === 1 ? "0" + R : R;
            }, ae = function(j, R, J) {
              return "#" + K(j) + K(R) + K(J);
            }, xe = function(j) {
              return parseInt("0x" + j);
            }, fe = function(j) {
              return [xe(j.substr(1, 2)), xe(j.substr(3, 2)), xe(j.substr(5, 2))];
            }, be = function() {
              var j = document.createElement("div");
              j.className = "jcolor-grid", u.values = [];
              var R = document.createElement("table");
              R.setAttribute("cellpadding", "7"), R.setAttribute("cellspacing", "0");
              for (var J = 0; J < u.options.palette.length; J++) {
                for (var ue = document.createElement("tr"), Q = 0; Q < u.options.palette[J].length; Q++) {
                  var pe = document.createElement("td"), je = u.options.palette[J][Q];
                  je.length < 7 && je.substr(0, 1) !== "#" && (je = "#" + je), pe.style.backgroundColor = je, pe.setAttribute("data-value", je), pe.innerHTML = "", ue.appendChild(pe), u.options.value == je && pe.classList.add("jcolor-selected"), u.values[je] = pe;
                }
                R.appendChild(ue);
              }
              return j.appendChild(R), j;
            }, Ae = document.createElement("canvas");
            Ae.width = 200, Ae.height = 160;
            var Se = Ae.getContext("2d"), Oe = function() {
              var j = N.firstChild.getBoundingClientRect();
              Ae.width = j.width - 14, Ze();
            }, Ze = function() {
              var j = Se.createLinearGradient(0, 0, Ae.width, 0);
              j.addColorStop(0, "rgb(255,0,0)"), j.addColorStop(0.15, "rgb(255,0,255)"), j.addColorStop(0.33, "rgb(0,0,255)"), j.addColorStop(0.49, "rgb(0,255,255)"), j.addColorStop(0.67, "rgb(0,255,0)"), j.addColorStop(0.84, "rgb(255,255,0)"), j.addColorStop(1, "rgb(255,0,0)"), Se.fillStyle = j, Se.fillRect(0, 0, Ae.width, Ae.height), j = Se.createLinearGradient(0, 0, 0, Ae.height), j.addColorStop(0, "rgba(255,255,255,1)"), j.addColorStop(0.5, "rgba(255,255,255,0)"), j.addColorStop(0.5, "rgba(0,0,0,0)"), j.addColorStop(1, "rgba(0,0,0,1)"), Se.fillStyle = j, Se.fillRect(0, 0, Ae.width, Ae.height);
            }, et = function() {
              var j = document.createElement("div");
              j.className = "jcolor-hsl";
              var R = document.createElement("div");
              R.className = "jcolor-point";
              var J = document.createElement("div");
              J.appendChild(Ae), J.appendChild(R), j.appendChild(J);
              var ue = function(Q, pe, je) {
                if (Q === 1) {
                  var Te = j.getBoundingClientRect(), ke = pe - Te.left, Re = je - Te.top;
                  ke < 0 && (ke = 0), Re < 0 && (Re = 0), ke > Te.width && (ke = Te.width), Re > Te.height && (Re = Te.height), R.style.left = ke + "px", R.style.top = Re + "px";
                  var ze = Se.getImageData(ke, Re, 1, 1).data;
                  te = ae(ze[0], ze[1], ze[2]);
                }
              };
              return j.addEventListener("mousedown", function(Q) {
                ue(Q.buttons, Q.clientX, Q.clientY);
              }), j.addEventListener("mousemove", function(Q) {
                ue(Q.buttons, Q.clientX, Q.clientY);
              }), j.addEventListener("touchmove", function(Q) {
                ue(1, Q.changedTouches[0].clientX, Q.changedTouches[0].clientY);
              }), j;
            }, te = "", ye = [], _e = function() {
              if (te !== "")
                for (var j = 0; j < ye.length; j++) {
                  var R = fe(te);
                  R[j] = 0;
                  var J = "linear-gradient(90deg, rgb(";
                  J += R.join(", "), J += "), rgb(", R[j] = 255, J += R.join(", "), J += "))", ye[j].style.backgroundImage = J;
                }
            }, q = function() {
              var j = document.createElement("div");
              j.className = "jcolor-sliders";
              var R = document.createElement("div"), J = function(je) {
                var Te = document.createElement("div");
                Te.className = "jcolor-sliders-input-container";
                var ke = document.createElement("label");
                ke.innerText = je;
                var Re = document.createElement("div");
                Re.className = "jcolor-sliders-input-subcontainer";
                var ze = document.createElement("input");
                ze.type = "range", ze.min = 0, ze.max = 255, ze.value = 0, ze.setAttribute("aria-label", "Color value"), ze.setAttribute("aria-valuemin", "0"), ze.setAttribute("aria-valuemax", "255"), ze.setAttribute("aria-valuenow", "0"), Te.appendChild(ke), Re.appendChild(ze);
                var Qe = document.createElement("div");
                return Qe.innerText = ze.value, ze.addEventListener("input", function() {
                  Qe.innerText = ze.value;
                }), Re.appendChild(Qe), Te.appendChild(Re), R.appendChild(Te), ze;
              };
              ye = [
                J("Red"),
                J("Green"),
                J("Blue")
              ], j.appendChild(R);
              var ue = document.createElement("div");
              ue.className = "jcolor-sliders-final-color";
              var Q = document.createElement("div");
              Q.style.visibility = "hidden", Q.innerText = "a", ue.appendChild(Q);
              var pe = function() {
                var je = ae(parseInt(ye[0].value), parseInt(ye[1].value), parseInt(ye[2].value));
                Q.innerText = je, Q.style.color = je, Q.style.removeProperty("visibility"), te = je;
              };
              return ye.forEach(function(je) {
                je.addEventListener("input", function() {
                  pe(), _e();
                });
              }), j.appendChild(ue), j;
            }, ee = function() {
              u.setOptions(I), E.tagName == "INPUT" && (E.classList.add("jcolor-input"), E.readOnly = !0), r = document.createElement("div"), r.className = "jcolor", Y = document.createElement("div"), Y.className = "jcolor-backdrop", r.appendChild(Y), re = document.createElement("div"), re.className = "jcolor-content";
              var j = document.createElement("div");
              j.className = "jcolor-controls", re.appendChild(j), ne = document.createElement("div"), ne.className = "jcolor-reset", ne.innerHTML = u.options.resetLabel, j.appendChild(ne), H = document.createElement("div"), H.className = "jcolor-close", H.innerHTML = u.options.doneLabel, j.appendChild(H), N = document.createElement("div"), re.appendChild(N), V = Z(N, {
                animation: !0,
                data: [
                  {
                    title: "Grid",
                    contentElement: be()
                  },
                  {
                    title: "Spectrum",
                    contentElement: et()
                  },
                  {
                    title: "Sliders",
                    contentElement: q()
                  }
                ],
                onchange: function(R, J, ue) {
                  if (ue === 1)
                    Oe();
                  else {
                    var Q = te !== "" ? te : u.getValue();
                    if (ue === 2 && Q) {
                      var pe = fe(Q);
                      ye.forEach(function(je, Te) {
                        je.value = pe[Te], je.dispatchEvent(new Event("input"));
                      });
                    }
                  }
                },
                palette: "modern"
              }), r.appendChild(re), E.tagName == "INPUT" ? E.parentNode.insertBefore(r, E.nextSibling) : E.appendChild(r), r.addEventListener("click", function(R) {
                if (R.target.tagName == "TD") {
                  var J = R.target.getAttribute("data-value");
                  J && u.setValue(J);
                } else R.target.classList.contains("jcolor-reset") ? (u.setValue(""), u.close()) : R.target.classList.contains("jcolor-close") ? (V.getActive() > 0 && u.setValue(te), u.close()) : R.target.classList.contains("jcolor-backdrop") ? u.close() : u.open();
              }), E.addEventListener("mouseup", function(R) {
                u.open();
              }), window.addEventListener("resize", function() {
                r.classList.contains("jcolor-focus") && V.getActive() == 1 && Oe();
              }), u.options.opened == !0 && u.open(), E.change = u.setValue, E.val = function(R) {
                if (R === void 0)
                  return u.getValue();
                u.setValue(R);
              }, E.color = u, r.color = u;
            };
            return u.toHex = function(j) {
              var R = function(J) {
                return ("0" + parseInt(J).toString(16)).slice(-2);
              };
              if (j)
                return /^#[0-9A-F]{6}$/i.test(j) ? j : (j = j.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), j && j.length ? "#" + R(j[1]) + R(j[2]) + R(j[3]) : "");
            }, ee(), u;
          }
          function ge() {
            var E = function(I, u) {
              var r = { type: "contextmenu" };
              r.options = {};
              var Y = {
                items: null,
                onclick: null
              };
              for (var re in Y)
                u && u.hasOwnProperty(re) ? r.options[re] = u[re] : r.options[re] = Y[re];
              I.classList.add("jcontextmenu"), r.open = function(N, V) {
                if (V && (r.options.items = V, r.create(V)), E.current && E.current.close(), S(r, !0), I.classList.add("jcontextmenu-focus"), E.current = r, r.options.items && r.options.items.length > 0 || I.children.length) {
                  if (N.target)
                    if (N.changedTouches && N.changedTouches[0])
                      K = N.changedTouches[0].clientX, ae = N.changedTouches[0].clientY;
                    else
                      var K = N.clientX, ae = N.clientY;
                  else
                    var K = N.x, ae = N.y;
                  var xe = I.getBoundingClientRect();
                  if (window.innerHeight < ae + xe.height) {
                    var fe = ae - xe.height;
                    fe < 0 && (fe = 0), I.style.top = fe + "px";
                  } else
                    I.style.top = ae + "px";
                  window.innerWidth < K + xe.width ? K - xe.width > 0 ? I.style.left = K - xe.width + "px" : I.style.left = "10px" : I.style.left = K + "px";
                }
              }, r.isOpened = function() {
                return !!I.classList.contains("jcontextmenu-focus");
              }, r.close = function() {
                I.classList.contains("jcontextmenu-focus") && I.classList.remove("jcontextmenu-focus"), S(r, !1);
              }, r.create = function(N) {
                I.innerHTML = "";
                var V = ne();
                I.appendChild(V);
                for (var K = 0; K < N.length; K++) {
                  var ae = H(N[K]);
                  I.appendChild(ae);
                }
              };
              function ne() {
                var N = document.createElement("div");
                N.classList.add("header"), N.addEventListener("click", function(ae) {
                  ae.preventDefault(), ae.stopPropagation();
                });
                var V = document.createElement("a");
                V.classList.add("title"), V.innerHTML = s.translate("Menu"), N.appendChild(V);
                var K = document.createElement("a");
                return K.classList.add("close"), K.innerHTML = s.translate("close"), K.addEventListener("click", function(ae) {
                  r.close();
                }), N.appendChild(K), N;
              }
              function H(N) {
                if (N.type && (N.type == "line" || N.type == "divisor"))
                  var V = document.createElement("hr");
                else {
                  var V = document.createElement("div"), K = document.createElement("a");
                  if (K.innerHTML = N.title, N.tooltip && V.setAttribute("title", N.tooltip), N.icon && V.setAttribute("data-icon", N.icon), N.id && (V.id = N.id), N.disabled ? V.className = "jcontextmenu-disabled" : N.onclick && (V.method = N.onclick, V.addEventListener("mousedown", function(Ze) {
                    Ze.preventDefault();
                  }), V.addEventListener("mouseup", function(Ze) {
                    this.method(this, Ze);
                  })), V.appendChild(K), N.submenu) {
                    var ae = document.createElement("span");
                    ae.innerHTML = "&#9658;", V.appendChild(ae), V.classList.add("jcontexthassubmenu");
                    var xe = document.createElement("div");
                    xe.classList.add("jcontextmenu"), xe.setAttribute("tabindex", "900");
                    for (var fe = N.submenu, be = 0; be < fe.length; be++) {
                      var Ae = H(fe[be]);
                      xe.appendChild(Ae);
                    }
                    V.appendChild(xe);
                  } else if (N.shortcut) {
                    var Se = document.createElement("span");
                    Se.innerHTML = N.shortcut, V.appendChild(Se);
                  }
                }
                return V;
              }
              return typeof r.options.onclick == "function" && I.addEventListener("click", function(N) {
                r.options.onclick(r, N);
              }), r.options.items && r.create(r.options.items), window.addEventListener("mousewheel", function() {
                r.close();
              }), I.contextmenu = r, r;
            };
            return E;
          }
          var de = ge();
          function oe() {
            var E = function(I, u) {
              if (I.dropdown)
                return I.dropdown.setOptions(u, !0);
              var r = { type: "dropdown" };
              r.options = {};
              var Y = function(q, ee) {
                q && q.length && (r.options.sortResults !== !1 && (typeof r.options.sortResults == "function" ? q.sort(r.options.sortResults) : q.sort(re)), r.setData(q)), typeof r.options.onload == "function" && r.options.onload(I, r, q, ee), ee && H(ee), ee == null && (r.options.value = ""), I.value = r.options.value, r.options.opened == !0 && r.open();
              }, re = function(q, ee) {
                var j, R;
                return typeof q == "string" ? j = q : q.text ? j = q.text : q.name && (j = q.name), typeof ee == "string" ? R = ee : ee.text ? R = ee.text : ee.name && (R = ee.name), typeof j == "string" || typeof R == "string" ? (typeof j != "string" && (j = "" + j), typeof R != "string" && (R = "" + R), j.localeCompare(R)) : j - R;
              }, ne = function() {
                r.value = {};
                for (var q = 0; q < r.items.length; q++)
                  r.items[q].selected == !0 && (r.items[q].element && r.items[q].element.classList.remove("jdropdown-selected"), r.items[q].selected = null);
                r.options.value = "", I.value = "";
              }, H = function(q) {
                if (ne(), q !== null)
                  if (!q)
                    typeof r.value[""] < "u" && (r.value[""] = "");
                  else {
                    Array.isArray(q) || (q = ("" + q).split(";"));
                    for (var ee = 0; ee < q.length; ee++)
                      r.value[q[ee]] = "";
                  }
                for (var ee = 0; ee < r.items.length; ee++)
                  typeof r.value[N(ee)] < "u" && (r.items[ee].element && r.items[ee].element.classList.add("jdropdown-selected"), r.items[ee].selected = !0, r.value[N(ee)] = V(ee));
                r.options.value = Object.keys(r.value).join(";"), r.header.value = r.getText();
              }, N = function(q, ee) {
                if (r.options.format)
                  var j = "id";
                else
                  var j = "value";
                return r.items[q] ? r.items[q].data[j] : "";
              }, V = function(q, ee) {
                if (r.options.format)
                  var j = "name";
                else
                  var j = "text";
                return r.items[q] ? r.items[q].data[j] : "";
              }, K = function() {
                return Object.keys(r.value);
              }, ae = function() {
                for (var q = [], ee = Object.keys(r.value), j = 0; j < ee.length; j++)
                  q.push(r.value[ee[j]]);
                return q;
              };
              r.setOptions = function(q, ee) {
                q || (q = {});
                var j = {
                  url: null,
                  data: [],
                  format: 0,
                  multiple: !1,
                  autocomplete: !1,
                  remoteSearch: !1,
                  lazyLoading: !1,
                  type: null,
                  width: null,
                  maxWidth: null,
                  opened: !1,
                  value: null,
                  placeholder: "",
                  newOptions: !1,
                  position: !1,
                  onchange: null,
                  onload: null,
                  onopen: null,
                  onclose: null,
                  onfocus: null,
                  onblur: null,
                  oninsert: null,
                  onbeforeinsert: null,
                  onsearch: null,
                  onbeforesearch: null,
                  sortResults: !1,
                  autofocus: !1,
                  prompt: null,
                  allowEmpty: !0
                };
                for (var R in j)
                  q && q.hasOwnProperty(R) ? r.options[R] = q[R] : (typeof r.options[R] > "u" || ee === !0) && (r.options[R] = j[R]);
                return (r.options.remoteSearch == !0 || r.options.type === "searchbar") && (r.options.autocomplete = !0), r.options.newOptions == !0 ? r.header.classList.add("jdropdown-add") : r.header.classList.remove("jdropdown-add"), r.options.autocomplete == !0 ? r.header.removeAttribute("readonly") : r.header.setAttribute("readonly", "readonly"), r.options.placeholder ? r.header.setAttribute("placeholder", r.options.placeholder) : r.header.removeAttribute("placeholder"), I.classList.remove("jdropdown-searchbar"), I.classList.remove("jdropdown-picker"), I.classList.remove("jdropdown-list"), r.options.type == "searchbar" ? I.classList.add("jdropdown-searchbar") : r.options.type == "list" ? I.classList.add("jdropdown-list") : r.options.type == "picker" ? I.classList.add("jdropdown-picker") : l.getWindowWidth() < 800 ? r.options.autocomplete ? (I.classList.add("jdropdown-searchbar"), r.options.type = "searchbar") : (I.classList.add("jdropdown-picker"), r.options.type = "picker") : (r.options.width ? (I.style.width = r.options.width, I.style.minWidth = r.options.width) : (I.style.removeProperty("width"), I.style.removeProperty("min-width")), I.classList.add("jdropdown-default"), r.options.type = "default"), r.options.type == "searchbar" ? xe.appendChild(Ae) : fe.insertBefore(Ae, fe.firstChild), r.options.url && !q.data ? b({
                  url: r.options.url,
                  method: "GET",
                  dataType: "json",
                  success: function(J) {
                    J && Y(J, r.options.value);
                  }
                }) : Y(r.options.data, r.options.value), r;
              };
              var xe = null, fe = null, be = null, Ae = null, Se = null, Oe = null, Ze = null, et = function() {
                if (u || (u = {}), I.tagName == "SELECT") {
                  var q = E.extractFromDom(I, u);
                  I = q.el, u = q.options;
                }
                !u.placeholder && I.getAttribute("placeholder") && (u.placeholder = I.getAttribute("placeholder")), r.value = {}, r.items = [], r.groups = [], r.search = "", r.results = null, I.classList.add("jdropdown"), xe = document.createElement("div"), xe.className = "jdropdown-container-header", r.header = document.createElement("input"), r.header.className = "jdropdown-header jss_object", r.header.type = "text", r.header.setAttribute("autocomplete", "off"), r.header.onfocus = function() {
                  typeof r.options.onfocus == "function" && r.options.onfocus(I);
                }, r.header.onblur = function() {
                  typeof r.options.onblur == "function" && r.options.onblur(I);
                }, r.header.onkeyup = function(ee) {
                  r.options.autocomplete == !0 && !Ze ? (r.search != r.header.value.trim() && (Ze = setTimeout(function() {
                    r.find(r.header.value.trim()), Ze = null;
                  }, 400)), I.classList.contains("jdropdown-focus") || r.open()) : r.options.autocomplete || r.next(ee.key);
                }, E.hasEvents || (E.hasEvents = !0, document.addEventListener("keydown", E.keydown)), fe = document.createElement("div"), fe.className = "jdropdown-container", be = document.createElement("div"), be.className = "jdropdown-content", Ae = document.createElement("div"), Ae.className = "jdropdown-close", Ae.textContent = "Done", Se = document.createElement("div"), Se.className = "jdropdown-reset", Se.textContent = "x", Se.onclick = function() {
                  r.reset(), r.close();
                }, Oe = document.createElement("div"), Oe.className = "jdropdown-backdrop", xe.appendChild(r.header), fe.appendChild(be), I.appendChild(xe), I.appendChild(fe), I.appendChild(Oe), r.setOptions(u), "ontouchsend" in document.documentElement ? I.addEventListener("touchsend", E.mouseup) : I.addEventListener("mouseup", E.mouseup), r.options.lazyLoading == !0 && f(be, {
                  loadUp: r.loadUp,
                  loadDown: r.loadDown
                }), be.onwheel = function(ee) {
                  ee.stopPropagation();
                }, I.change = r.setValue, I.val = function(ee) {
                  if (ee === void 0)
                    return r.getValue(!!r.options.multiple);
                  r.setValue(ee);
                }, I.dropdown = r;
              };
              r.getUrl = function() {
                return r.options.url;
              }, r.setUrl = function(q, ee) {
                r.options.url = q, b({
                  url: r.options.url,
                  method: "GET",
                  dataType: "json",
                  success: function(j) {
                    r.setData(j), typeof ee == "function" && ee(r);
                  }
                });
              }, r.setId = function(q, ee) {
                if (r.options.format)
                  var j = "id";
                else
                  var j = "value";
                typeof q == "object" ? q[j] = ee : r.items[q].data[j] = ee;
              };
              const te = function(q, ee) {
                if (!q) {
                  let J = r.options.autocomplete == !0 ? r.header.value : "";
                  if (q = prompt(s.translate("Add A New Option"), J), !q)
                    return !1;
                }
                if (ee || (ee = l.guid()), r.options.format)
                  var j = {
                    id: ee,
                    name: q
                  };
                else
                  var j = {
                    value: ee,
                    text: q
                  };
                if (typeof r.options.onbeforeinsert == "function") {
                  let J = r.options.onbeforeinsert(r, j);
                  if (J === !1)
                    return !1;
                  J && (j = J);
                }
                r.options.data.push(j);
                var R = r.createItem(j);
                return be.appendChild(R.element), typeof r.options.oninsert == "function" && r.options.oninsert(r, j, R), be.style.display == "none" && (be.style.display = ""), r.results && r.results.push(R), j;
              };
              r.add = function(q, ee) {
                return typeof r.options.prompt == "function" ? r.options.prompt.call(r, te) : te(q, ee);
              }, r.createItem = function(q, ee, j) {
                r.options.format ? (!q.id && q.value !== void 0 && (q.id = q.value), !q.name && q.text !== void 0 && (q.name = q.text)) : (!q.value && q.id !== void 0 && (q.value = q.id), !q.text && q.name !== void 0 && (q.text = q.name));
                var R = {};
                if (R.element = document.createElement("div"), R.element.className = "jdropdown-item", R.element.indexValue = r.items.length, R.data = q, ee && (R.group = ee), q.id && R.element.setAttribute("id", q.id), q.disabled == !0 && R.element.setAttribute("data-disabled", !0), q.tooltip && R.element.setAttribute("title", q.tooltip), q.image) {
                  var J = document.createElement("img");
                  J.className = "jdropdown-image", J.src = q.image, q.title || J.classList.add("jdropdown-image-small"), R.element.appendChild(J);
                } else if (q.icon) {
                  var ue = document.createElement("span");
                  ue.className = "jdropdown-icon material-icons", ue.innerText = q.icon, q.title || ue.classList.add("jdropdown-icon-small"), q.color && (ue.style.color = q.color), R.element.appendChild(ue);
                } else if (q.color) {
                  var Q = document.createElement("div");
                  Q.className = "jdropdown-color", Q.style.backgroundColor = q.color, R.element.appendChild(Q);
                }
                if (r.options.format)
                  var pe = q.name;
                else
                  var pe = q.text;
                var je = document.createElement("div");
                if (je.className = "jdropdown-description", je.textContent = pe || "&nbsp;", q.title) {
                  var Te = document.createElement("div");
                  Te.className = "jdropdown-title", Te.innerText = q.title, je.appendChild(Te);
                }
                if (r.options.format)
                  var ke = q.id;
                else
                  var ke = q.value;
                return r.value[ke] && (R.element.classList.add("jdropdown-selected"), R.selected = !0), r.items.push(R), R.element.appendChild(je), R;
              }, r.appendData = function(q) {
                if (q.length) {
                  for (var ee = [], j = [], R = 0; R < q.length; R++)
                    q[R].group ? (j[q[R].group] || (j[q[R].group] = []), j[q[R].group].push(R)) : ee.push(R);
                  var J = 0, ue = Object.keys(j);
                  if (ue.length > 0)
                    for (var R = 0; R < ue.length; R++) {
                      var Q = document.createElement("div");
                      Q.className = "jdropdown-group";
                      var pe = document.createElement("div");
                      pe.className = "jdropdown-group-name", pe.textContent = ue[R];
                      var je = document.createElement("i");
                      je.className = "jdropdown-group-arrow jdropdown-group-arrow-down", pe.appendChild(je);
                      var Te = document.createElement("div");
                      Te.className = "jdropdown-group-items";
                      for (var ke = 0; ke < j[ue[R]].length; ke++) {
                        var Re = r.createItem(q[j[ue[R]][ke]], Q, ue[R]);
                        (r.options.lazyLoading == !1 || J < 200) && (Te.appendChild(Re.element), J++);
                      }
                      Q.appendChild(pe), Q.appendChild(Te), r.groups.push(Q), Te.children.length > 0 && be.appendChild(Q);
                    }
                  if (ee.length)
                    for (var R = 0; R < ee.length; R++) {
                      var Re = r.createItem(q[ee[R]]);
                      (r.options.lazyLoading == !1 || J < 200) && (be.appendChild(Re.element), J++);
                    }
                }
              }, r.setData = function(q) {
                if (ne(), be.textContent = "", r.header.value = "", r.items = [], q && q.length) {
                  for (var ee = 0; ee < q.length; ee++)
                    typeof q[ee] != "object" && (r.options.format ? q[ee] = {
                      id: q[ee],
                      name: q[ee]
                    } : q[ee] = {
                      value: q[ee],
                      text: q[ee]
                    });
                  r.appendData(q), r.options.data = q;
                } else
                  r.options.data = [];
                r.close();
              }, r.getData = function() {
                return r.options.data;
              }, r.getPosition = function(q) {
                for (var ee = 0; ee < r.items.length; ee++)
                  if (N(ee) == q)
                    return ee;
                return !1;
              }, r.getText = function(q) {
                var ee = ae();
                return q ? ee : ee.join("; ");
              }, r.getValue = function(q) {
                var ee = K();
                return q ? ee : ee.join(";");
              };
              var ye = function(q) {
                I.value != r.options.value && (I.value = r.options.value, typeof I.oninput == "function" && I.oninput({
                  type: "input",
                  target: I,
                  value: I.value
                })), typeof r.options.onchange == "function" && r.options.onchange(I, r, q, r.options.value);
              };
              r.setValue = function(q) {
                var ee = r.getValue();
                Array.isArray(q) && (q = q.join(";")), ee !== q && (H(q), ye(ee));
              }, r.resetSelected = function() {
                r.setValue(null);
              }, r.selectIndex = function(j, ee) {
                var j = parseInt(j);
                if (r.items && r.items[j] && (ee === !0 || r.items[j].data.disabled !== !0))
                  if (r.setCursor(j, !1), !r.options.multiple)
                    r.items[j].selected ? r.options.allowEmpty !== !1 && r.setValue(null) : r.setValue(N(j)), r.close();
                  else {
                    var R = r.options.value;
                    r.items[j].selected ? (r.items[j].element.classList.remove("jdropdown-selected"), r.items[j].selected = !1, delete r.value[N(j)]) : (r.items[j].element.classList.add("jdropdown-selected"), r.items[j].selected = !0, r.value[N(j)] = V(j)), r.options.value = Object.keys(r.value).join(";"), r.options.autocomplete == !1 && (r.header.value = ae().join("; ")), ye(R);
                  }
              }, r.selectItem = function(q) {
                r.selectIndex(q.indexValue);
              };
              var _e = function(q, ee) {
                for (var j = 0; j < ee.length; j++)
                  if (r.options.format) {
                    if (ee[j].id == q)
                      return !0;
                  } else if (ee[j].value == q)
                    return !0;
                return !1;
              };
              return r.find = function(q) {
                if (r.search == q.trim())
                  return !1;
                if (r.search = q, r.setCursor(), r.groups.length)
                  for (var ee = 0; ee < r.groups.length; ee++)
                    r.groups[ee].lastChild.textContent = "";
                if (be.textContent = "", r.options.remoteSearch == !0) {
                  r.results = null;
                  var j = r.options.url;
                  let Te = {
                    url: j,
                    method: "GET",
                    data: { q },
                    dataType: "json",
                    success: function(ke) {
                      r.items = [];
                      var Re = Object.keys(r.value);
                      if (Re.length)
                        for (var ze = 0; ze < Re.length; ze++)
                          _e(Re[ze], ke) || (r.options.format ? ke.unshift({ id: Re[ze], name: r.value[Re[ze]] }) : ke.unshift({ value: Re[ze], text: r.value[Re[ze]] }));
                      r.appendData(ke), ke.length ? be.style.display = "" : be.style.display = "none", typeof r.options.onsearch == "function" && r.options.onsearch(r, ke);
                    }
                  };
                  if (typeof r.options.onbeforesearch == "function") {
                    let ke = r.options.onbeforesearch(r, Te);
                    if (ke === !1)
                      return;
                    typeof ke == "object" && (Te = ke);
                  }
                  b(Te);
                } else {
                  q = new RegExp(q, "gi");
                  for (var R = [], ee = 0; ee < r.items.length; ee++) {
                    var J = V(ee), ue = r.items[ee].data.title || "", Q = r.items[ee].data.group || "", pe = r.items[ee].data.synonym || "";
                    pe && (pe = pe.join(" ")), (q == null || r.items[ee].selected == !0 || J.toString().match(q) || ue.match(q) || Q.match(q) || pe.match(q)) && R.push(r.items[ee]);
                  }
                  if (!R.length)
                    be.style.display = "none", r.results = null;
                  else {
                    be.style.display = "", r.results = R;
                    var je = R.length || 0;
                    r.options.lazyLoading == !0 && je > 200 && (je = 200);
                    for (var ee = 0; ee < je; ee++)
                      r.results[ee].group ? (r.results[ee].group.parentNode || be.appendChild(r.results[ee].group), r.results[ee].group.lastChild.appendChild(r.results[ee].element)) : be.appendChild(r.results[ee].element);
                  }
                }
                r.options.autofocus == !0 && r.first();
              }, r.open = function() {
                if (!I.classList.contains("jdropdown-focus")) {
                  E.current = r, S(r, !0), I.classList.add("jdropdown-focus"), l.getWindowWidth() < 800 && (r.options.type == null || r.options.type == "picker") && M.slideBottom(fe, 1), r.options.autocomplete == !0 && (r.header.value = r.search, r.header.focus());
                  var q = K();
                  if (q[0]) {
                    var ee = r.getPosition(q[0]);
                    ee !== !1 && r.setCursor(ee);
                  }
                  if (!r.options.type || r.options.type == "default") {
                    var j = I.getBoundingClientRect(), R = fe.getBoundingClientRect();
                    r.options.position ? (fe.style.position = "fixed", window.innerHeight < j.bottom + R.height ? (fe.style.top = "", fe.style.bottom = window.innerHeight - j.top + 1 + "px") : (fe.style.top = j.bottom + "px", fe.style.bottom = ""), fe.style.left = j.left + "px") : window.innerHeight < j.bottom + R.height ? (fe.style.top = "", fe.style.bottom = j.height + 1 + "px") : (fe.style.top = "", fe.style.bottom = ""), fe.style.minWidth = j.width + "px", r.options.maxWidth && (fe.style.maxWidth = r.options.maxWidth), !r.items.length && r.options.autocomplete == !0 ? be.style.display = "none" : be.style.display = "";
                  }
                }
                typeof r.options.onopen == "function" && r.options.onopen(I);
              }, r.close = function(q) {
                return I.classList.contains("jdropdown-focus") && (r.header.value = r.getText(), r.setCursor(), !q && typeof r.options.onclose == "function" && r.options.onclose(I), r.header.blur && r.header.blur(), I.classList.remove("jdropdown-focus"), S(r, !1), E.current = null), r.getValue();
              }, r.setCursor = function(q, ee) {
                if (r.currentIndex != null && r.items && r.items[r.currentIndex] && r.items[r.currentIndex].element.classList.remove("jdropdown-cursor"), q == null)
                  r.currentIndex = null;
                else if (q = parseInt(q), r.items[q].element.parentNode && (r.items[q].element.classList.add("jdropdown-cursor"), r.currentIndex = q, ee !== !1 && r.items[r.currentIndex].element)) {
                  be.scrollTop;
                  var j = r.items[r.currentIndex].element;
                  be.scrollTop = j.offsetTop - j.scrollTop + j.clientTop - 95;
                }
              }, r.resetCursor = r.setCursor, r.updateCursor = r.setCursor, r.reset = function() {
                r.setCursor(), r.setValue(null);
              }, r.first = function() {
                r.options.lazyLoading === !0 && r.loadFirst();
                var q = be.querySelectorAll(".jdropdown-item");
                if (q.length) {
                  var ee = q[0].indexValue;
                  r.setCursor(ee);
                }
              }, r.last = function() {
                r.options.lazyLoading === !0 && r.loadLast();
                var q = be.querySelectorAll(".jdropdown-item");
                if (q.length) {
                  var ee = q[q.length - 1].indexValue;
                  r.setCursor(ee);
                }
              }, r.next = function(q) {
                var ee = null;
                if (q) {
                  if (q.length == 1) {
                    var j = r.currentIndex || -1;
                    q = q.toLowerCase();
                    var R = null, J = null, ue = be.querySelectorAll(".jdropdown-item");
                    if (ue.length) {
                      for (var Q = 0; Q < ue.length; Q++)
                        if (ue[Q].indexValue > j && (R = r.items[ue[Q].indexValue]) && (J = R.element.innerText[0]) && (J = J.toLowerCase(), q == J)) {
                          ee = ue[Q].indexValue;
                          break;
                        }
                      r.setCursor(ee);
                    }
                  }
                } else if (r.currentIndex == null || r.currentIndex == null)
                  r.first();
                else {
                  var pe = r.items[r.currentIndex].element, je = pe.nextElementSibling;
                  je ? (je.classList.contains("jdropdown-group") && (je = je.lastChild.firstChild), ee = je.indexValue) : pe.parentNode.classList.contains("jdropdown-group-items") && ((je = pe.parentNode.parentNode.nextElementSibling) && (je.classList.contains("jdropdown-group") ? je = je.lastChild.firstChild : je.classList.contains("jdropdown-item") ? ee = je.indexValue : je = null), je && (ee = je.indexValue)), ee !== null && r.setCursor(ee);
                }
              }, r.prev = function() {
                var q = null;
                if (r.currentIndex === null)
                  r.first();
                else {
                  var ee = r.items[r.currentIndex].element, j = ee.previousElementSibling;
                  j ? (j.classList.contains("jdropdown-group") && (j = j.lastChild.lastChild), q = j.indexValue) : ee.parentNode.classList.contains("jdropdown-group-items") && ((j = ee.parentNode.parentNode.previousElementSibling) && (j.classList.contains("jdropdown-group") ? j = j.lastChild.lastChild : j.classList.contains("jdropdown-item") ? q = j.indexValue : j = null), j && (q = j.indexValue));
                }
                q !== null && r.setCursor(q);
              }, r.loadFirst = function() {
                if (r.results)
                  var q = r.results;
                else
                  var q = r.items;
                var ee = q.length || 0;
                r.options.lazyLoading == !0 && ee > 200 && (ee = 200), be.textContent = "";
                for (var j = 0; j < ee; j++)
                  q[j].group ? (q[j].group.parentNode || be.appendChild(q[j].group), q[j].group.lastChild.appendChild(q[j].element)) : be.appendChild(q[j].element);
                be.scrollTop = 0;
              }, r.loadLast = function() {
                if (r.results)
                  var q = r.results;
                else
                  var q = r.items;
                var ee = q.length;
                if (ee > 200) {
                  ee = ee - 200, be.textContent = "";
                  for (var j = ee; j < q.length; j++)
                    q[j].group ? (q[j].group.parentNode || be.appendChild(q[j].group), q[j].group.lastChild.appendChild(q[j].element)) : be.appendChild(q[j].element);
                  be.scrollTop = be.scrollHeight;
                }
              }, r.loadUp = function() {
                var q = !1;
                if (r.results)
                  var ee = r.results;
                else
                  var ee = r.items;
                var j = be.querySelectorAll(".jdropdown-item"), R = j[0].indexValue;
                R = r.items[R];
                var J = ee.indexOf(R) - 1;
                if (J > 0) {
                  for (var ue = 0; J > 0 && ee[J] && ue < 200; )
                    ee[J].group ? (ee[J].group.parentNode || be.insertBefore(ee[J].group, be.firstChild), ee[J].group.lastChild.insertBefore(ee[J].element, ee[J].group.lastChild.firstChild)) : be.insertBefore(ee[J].element, be.firstChild), J--, ue++;
                  q = !0;
                }
                return q;
              }, r.loadDown = function() {
                var q = !1;
                if (r.results)
                  var ee = r.results;
                else
                  var ee = r.items;
                var j = be.querySelectorAll(".jdropdown-item"), R = j[j.length - 1].indexValue;
                R = r.items[R];
                var J = ee.indexOf(R) + 1;
                if (J < ee.length) {
                  for (var ue = 0; J < ee.length && ee[J] && ue < 200; )
                    ee[J].group ? (ee[J].group.parentNode || be.appendChild(ee[J].group), ee[J].group.lastChild.appendChild(ee[J].element)) : be.appendChild(ee[J].element), J++, ue++;
                  q = !0;
                }
                return q;
              }, et(), r;
            };
            return E.keydown = function(I) {
              var u = null;
              if (u = E.current) {
                if (I.which == 13 || I.which == 9)
                  u.header.value && u.currentIndex == null && u.options.newOptions ? u.add() : (u.currentIndex == null && u.options.autocomplete == !0 && u.header.value != "" && u.find(u.header.value), u.selectIndex(u.currentIndex));
                else if (I.which == 38)
                  u.currentIndex == null ? u.first() : u.currentIndex > 0 && u.prev(), I.preventDefault();
                else if (I.which == 40)
                  u.currentIndex == null ? u.first() : u.currentIndex + 1 < u.items.length && u.next(), I.preventDefault();
                else if (I.which == 36)
                  u.first(), I.target.classList.contains("jdropdown-header") || I.preventDefault();
                else if (I.which == 35)
                  u.last(), I.target.classList.contains("jdropdown-header") || I.preventDefault();
                else if (I.which == 27)
                  u.close();
                else if (I.which == 33) {
                  if (u.currentIndex == null)
                    u.first();
                  else if (u.currentIndex > 0)
                    for (var r = 0; r < 7; r++)
                      u.prev();
                  I.preventDefault();
                } else if (I.which == 34) {
                  if (u.currentIndex == null)
                    u.first();
                  else if (u.currentIndex + 1 < u.items.length)
                    for (var r = 0; r < 7; r++)
                      u.next();
                  I.preventDefault();
                }
              }
            }, E.mouseup = function(I) {
              var u = l.findElement(I.target, "jdropdown");
              if (u) {
                var r = u.dropdown;
                if (I.target.classList.contains("jdropdown-header"))
                  if (u.classList.contains("jdropdown-focus") && u.classList.contains("jdropdown-default")) {
                    var Y = u.getBoundingClientRect();
                    if (I.changedTouches && I.changedTouches[0]) {
                      var re = I.changedTouches[0].clientX;
                      I.changedTouches[0].clientY;
                    } else {
                      var re = I.clientX;
                      I.clientY;
                    }
                    Y.width - (re - Y.left) < 30 ? I.target.classList.contains("jdropdown-add") ? r.add() : r.close() : r.options.autocomplete == !1 && r.close();
                  } else
                    r.open();
                else if (I.target.classList.contains("jdropdown-group-name")) {
                  var ne = I.target.nextSibling.children;
                  if (I.target.nextSibling.style.display != "none")
                    for (var H = 0; H < ne.length; H++)
                      ne[H].style.display != "none" && r.selectItem(ne[H]);
                } else I.target.classList.contains("jdropdown-group-arrow") ? I.target.classList.contains("jdropdown-group-arrow-down") ? (I.target.classList.remove("jdropdown-group-arrow-down"), I.target.classList.add("jdropdown-group-arrow-up"), I.target.parentNode.nextSibling.style.display = "none") : (I.target.classList.remove("jdropdown-group-arrow-up"), I.target.classList.add("jdropdown-group-arrow-down"), I.target.parentNode.nextSibling.style.display = "") : I.target.classList.contains("jdropdown-item") ? r.selectItem(I.target) : I.target.classList.contains("jdropdown-image") || I.target.classList.contains("jdropdown-description") ? r.selectItem(I.target.parentNode) : I.target.classList.contains("jdropdown-title") ? r.selectItem(I.target.parentNode.parentNode) : (I.target.classList.contains("jdropdown-close") || I.target.classList.contains("jdropdown-backdrop")) && r.close();
              }
            }, E.extractFromDom = function(I, u) {
              var r = I;
              if (u || (u = {}), I.getAttribute("multiple") && (!u || u.multiple == null) && (u.multiple = !0), I.getAttribute("placeholder") && (!u || u.placeholder == null) && (u.placeholder = I.getAttribute("placeholder")), I.getAttribute("data-autocomplete") && (!u || u.autocomplete == null) && (u.autocomplete = !0), (!u || u.width == null) && (u.width = I.offsetWidth), I.value && (!u || u.value == null) && (u.value = I.value), !u || u.data == null) {
                u.data = [];
                for (var Y = 0; Y < I.children.length; Y++)
                  if (I.children[Y].tagName == "OPTGROUP")
                    for (var re = 0; re < I.children[Y].children.length; re++)
                      u.data.push({
                        value: I.children[Y].children[re].value,
                        text: I.children[Y].children[re].textContent,
                        group: I.children[Y].getAttribute("label")
                      });
                  else
                    u.data.push({
                      value: I.children[Y].value,
                      text: I.children[Y].textContent
                    });
              }
              (!u || u.onchange == null) && (u.onchange = function(H, N, V, K) {
                u.multiple == !0 ? obj.items[N].classList.contains("jdropdown-selected") ? r.options[N].setAttribute("selected", "selected") : r.options[N].removeAttribute("selected") : r.value = K;
              });
              var ne = document.createElement("div");
              return I.parentNode.insertBefore(ne, I), I.style.display = "none", I = ne, { el: I, options: u };
            }, E;
          }
          var ve = oe();
          function Be(E, I) {
            if (E.picker)
              return E.picker.setOptions(I, !0);
            var u = { type: "picker" };
            u.options = {};
            var r = null, Y = null, re = function(N) {
              return N instanceof Element || N instanceof HTMLDocument;
            }, ne = function() {
              Y.innerHTML = "";
              for (var N = Object.keys(u.options.data), V = 0; V < N.length; V++) {
                var K = document.createElement("div");
                K.classList.add("jpicker-item"), K.setAttribute("role", "option"), K.k = N[V], K.v = u.options.data[N[V]];
                var ae = u.getLabel(N[V], K);
                re(ae) ? K.appendChild(ae) : K.innerHTML = ae, Y.appendChild(K);
              }
            };
            u.setOptions = function(N, V) {
              var K = {
                value: 0,
                data: null,
                render: null,
                onchange: null,
                onmouseover: null,
                onselect: null,
                onopen: null,
                onclose: null,
                onload: null,
                width: null,
                header: !0,
                right: !1,
                bottom: !1,
                content: !1,
                columns: null,
                grid: null,
                height: null
              };
              N && N.options && (N.data = N.options);
              for (var ae in K)
                N && N.hasOwnProperty(ae) ? u.options[ae] = N[ae] : (typeof u.options[ae] > "u" || V === !0) && (u.options[ae] = K[ae]);
              return u.options.header === !1 ? r.style.display = "none" : r.style.display = "", u.options.width ? r.style.width = parseInt(u.options.width) + "px" : r.style.width = "", u.options.height ? (Y.style.maxHeight = u.options.height + "px", Y.style.overflow = "scroll") : Y.style.overflow = "", u.options.columns > 0 && (u.options.grid ? (Y.classList.add("jpicker-grid"), Y.style.gridTemplateColumns = "repeat(" + u.options.grid + ", 1fr)") : (Y.classList.add("jpicker-columns"), Y.style.width = u.options.width ? u.options.width : 36 * u.options.columns + "px")), isNaN(parseInt(u.options.value)) && (u.options.value = 0), ne(), u.setValue(u.options.value), u;
            }, u.getValue = function() {
              return u.options.value;
            }, u.setValue = function(N, V) {
              if (u.setLabel(N), u.options.value = String(N), E.value != u.options.value && (E.value = u.options.value, typeof E.oninput == "function" && E.oninput({
                type: "input",
                target: E,
                value: E.value
              })), Y.children[N] && Y.children[N].getAttribute("type") !== "generic" && u.close(), V && typeof u.options.onchange == "function") {
                var K = u.options.data[N];
                u.options.onchange(E, u, K, K, N, V);
              }
            }, u.getLabel = function(N, V) {
              var K = u.options.data[N] || null;
              return typeof u.options.render == "function" && (K = u.options.render(K, V)), K;
            }, u.setLabel = function(N) {
              var V;
              u.options.content ? V = '<i class="material-icons">' + u.options.content + "</i>" : V = u.getLabel(N, null), re(V) ? (r.innerHTML = "", r.appendChild(V)) : r.innerHTML = V;
            }, u.open = function() {
              if (!E.classList.contains("jpicker-focus")) {
                S(u, !0), E.classList.add("jpicker-focus"), E.focus();
                var N = 0, V = 0;
                Y.style.marginLeft = "";
                var K = r.getBoundingClientRect(), ae = Y.getBoundingClientRect();
                window.innerHeight < K.bottom + ae.height || u.options.bottom ? N = -1 * (ae.height + 4) : N = K.height + 4, u.options.right === !0 && (V = -1 * ae.width + K.width), ae.left + V < 0 && (V = V + ae.left + 10), ae.left + ae.width > window.innerWidth && (V = -1 * (10 + ae.left + ae.width - window.innerWidth)), Y.style.marginTop = parseInt(N) + "px", Y.style.marginLeft = parseInt(V) + "px", typeof u.options.onopen == "function" && u.options.onopen(E, u);
              }
            }, u.close = function() {
              E.classList.contains("jpicker-focus") && (E.classList.remove("jpicker-focus"), S(u, !1), typeof u.options.onclose == "function" && u.options.onclose(E, u));
            };
            var H = function() {
              let N = l.guid();
              E.classList.add("jpicker"), E.setAttribute("role", "combobox"), E.setAttribute("aria-haspopup", "listbox"), E.setAttribute("aria-expanded", "false"), E.setAttribute("aria-controls", N), E.setAttribute("tabindex", "0"), E.onmousedown = function(V) {
                E.classList.contains("jpicker-focus") || u.open();
              }, r = document.createElement("div"), r.classList.add("jpicker-header"), Y = document.createElement("div"), Y.setAttribute("id", N), Y.setAttribute("role", "listbox"), Y.classList.add("jpicker-content"), Y.onclick = function(V) {
                var K = l.findElement(V.target, "jpicker-item");
                K && K.parentNode === Y && u.setValue(K.k, V);
              }, E.appendChild(r), E.appendChild(Y), E.value = I.value || 0, u.setOptions(I), typeof u.options.onload == "function" && u.options.onload(E, u), E.change = u.setValue, E.val = function(V) {
                if (V === void 0)
                  return u.getValue();
                u.setValue(V);
              }, E.picker = u;
            };
            return H(), u;
          }
          function Fe(E, I) {
            var u = { type: "toolbar" };
            u.options = {};
            var r = {
              app: null,
              container: !1,
              badge: !1,
              title: !1,
              responsive: !1,
              maxWidth: null,
              bottom: !0,
              items: []
            };
            for (var Y in r)
              I && I.hasOwnProperty(Y) ? u.options[Y] = I[Y] : u.options[Y] = r[Y];
            !E && I.app && I.app.el && (E = document.createElement("div"), I.app.el.appendChild(E));
            var re = document.createElement("div");
            re.classList.add("jtoolbar-item"), re.classList.add("jtoolbar-arrow");
            var ne = document.createElement("div");
            ne.classList.add("jtoolbar-floating"), re.appendChild(ne), u.selectItem = function(N) {
              for (var V = H.children, K = 0; K < V.length; K++)
                N != V[K] && V[K].classList.remove("jtoolbar-selected");
              N.classList.add("jtoolbar-selected");
            }, u.hide = function() {
              M.slideBottom(E, 0, function() {
                E.style.display = "none";
              });
            }, u.show = function() {
              E.style.display = "", M.slideBottom(E, 1);
            }, u.get = function() {
              return E;
            }, u.setBadge = function(N, V) {
              H.children[N].children[1].firstChild.innerHTML = V;
            }, u.destroy = function() {
              toolbar.remove(), E.innerHTML = "";
            }, u.update = function(N, V) {
              for (var K = 0; K < H.children.length; K++) {
                var ae = H.children[K];
                typeof ae.updateState == "function" && ae.updateState(E, u, ae, N, V);
              }
              for (var K = 0; K < ne.children.length; K++) {
                var ae = ne.children[K];
                typeof ae.updateState == "function" && ae.updateState(E, u, ae, N, V);
              }
            }, u.create = function(N) {
              H.innerHTML = "";
              for (var V = 0; V < N.length; V++) {
                var K = document.createElement("div");
                if (K.classList.add("jtoolbar-item"), N[V].width && (K.style.width = parseInt(N[V].width) + "px"), N[V].k && (K.k = N[V].k), N[V].tooltip && (K.setAttribute("title", N[V].tooltip), K.setAttribute("aria-label", N[V].tooltip)), N[V].id && K.setAttribute("id", N[V].id), N[V].updateState && (K.updateState = N[V].updateState), N[V].active && K.classList.add("jtoolbar-active"), N[V].disabled && K.classList.add("jtoolbar-disabled"), N[V].type == "select" || N[V].type == "dropdown")
                  Be(K, N[V]);
                else if (N[V].type == "divisor")
                  K.classList.add("jtoolbar-divisor");
                else if (N[V].type == "label")
                  K.classList.add("jtoolbar-label"), K.innerHTML = N[V].content;
                else {
                  var ae = document.createElement("i");
                  if (typeof N[V].class > "u")
                    ae.classList.add("material-icons");
                  else
                    for (var xe = N[V].class.split(" "), fe = 0; fe < xe.length; fe++)
                      ae.classList.add(xe[fe]);
                  if (ae.innerHTML = N[V].content ? N[V].content : "", K.setAttribute("role", "button"), K.appendChild(ae), u.options.badge == !0) {
                    var be = document.createElement("div");
                    be.classList.add("jbadge");
                    var Ae = document.createElement("div");
                    Ae.innerHTML = N[V].badge ? N[V].badge : "", be.appendChild(Ae), K.appendChild(be);
                  }
                  if (N[V].title)
                    if (u.options.title == !0) {
                      var Se = document.createElement("span");
                      Se.innerHTML = N[V].title, K.appendChild(Se);
                    } else
                      K.setAttribute("title", N[V].title);
                  u.options.app && N[V].route && (K.route = N[V].route, K.onclick = function() {
                    u.options.app.pages(this.route);
                  }, u.options.app.pages(N[V].route, {
                    toolbarItem: K,
                    closed: !0
                  })), typeof N[V].render == "function" && N[V].render(K, N[V]);
                }
                N[V].onclick && (K.onclick = N[V].onclick.bind(N[V], E, u, K)), H.appendChild(K);
              }
              setTimeout(function() {
                u.refresh();
              }, 0);
            }, u.open = function() {
              re.classList.add("jtoolbar-arrow-selected"), E.getBoundingClientRect();
              var N = ne.getBoundingClientRect();
              N.bottom > window.innerHeight || u.options.bottom ? ne.style.bottom = "0" : ne.style.removeProperty("bottom"), ne.style.right = "0", re.children[0].focus(), S(u, !0);
            }, u.close = function() {
              re.classList.remove("jtoolbar-arrow-selected"), S(u, !1);
            }, u.refresh = function() {
              if (u.options.responsive == !0) {
                var N = E.parentNode.getBoundingClientRect();
                u.options.maxWidth || (u.options.maxWidth = N.width);
                var V = parseInt(u.options.maxWidth);
                for (re.parentNode && re.parentNode.removeChild(re); ne.firstChild; )
                  H.appendChild(ne.firstChild);
                if (V < H.offsetWidth)
                  for (V -= 50; H.lastChild && V < H.offsetWidth; )
                    ne.insertBefore(H.lastChild, ne.firstChild);
                ne.children.length > 0 && H.appendChild(re);
              }
            }, u.setReadonly = function(N) {
              N = N ? "add" : "remove", E.classList[N]("jtoolbar-disabled");
            }, E.onclick = function(N) {
              var V = l.findElement(N.target, "jtoolbar-item");
              V && u.selectItem(V), N.target.classList.contains("jtoolbar-arrow") && u.open();
            }, window.addEventListener("resize", function() {
              u.refresh();
            }), E.classList.add("jtoolbar"), E.innerHTML = "", u.options.container == !0 && E.classList.add("jtoolbar-container");
            var H = document.createElement("div");
            return E.appendChild(H), u.options.app && E.classList.add("jtoolbar-mobile"), u.create(u.options.items), E.toolbar = u, u;
          }
          function De() {
            var E = function(I, u) {
              var r = { type: "editor" };
              r.options = {};
              var Y = {
                // Load data from a remove location
                url: null,
                // Initial HTML content
                value: "",
                // Initial snippet
                snippet: null,
                // Add toolbar
                toolbar: !0,
                toolbarOnTop: !1,
                // Website parser is to read websites and images from cross domain
                remoteParser: null,
                // Placeholder
                placeholder: null,
                // Parse URL
                filterPaste: !0,
                // Accept drop files
                dropZone: !0,
                dropAsSnippet: !1,
                acceptImages: !0,
                acceptFiles: !1,
                maxFileSize: 5e6,
                allowImageResize: !0,
                // Style
                maxHeight: null,
                height: null,
                focus: !1,
                // Events
                onclick: null,
                onfocus: null,
                onblur: null,
                onload: null,
                onkeyup: null,
                onkeydown: null,
                onchange: null,
                extensions: null,
                type: null
              };
              for (var re in Y)
                u && u.hasOwnProperty(re) ? r.options[re] = u[re] : r.options[re] = Y[re];
              var ne = null, H = null, N = [];
              r.el = I, typeof r.options.onclick == "function" && (I.onclick = function(ie) {
                r.options.onclick(I, r, ie);
              }), I.classList.add("jeditor-container");
              var V = document.createElement("div");
              V.className = "jsnippet", V.setAttribute("contenteditable", !1);
              var K = document.createElement("div");
              if (K.className = "jeditor-toolbar", r.editor = document.createElement("div"), r.editor.setAttribute("contenteditable", !0), r.editor.setAttribute("spellcheck", !1), r.editor.classList.add("jeditor"), r.options.placeholder && r.editor.setAttribute("data-placeholder", r.options.placeholder), (r.options.maxHeight || r.options.height) && (r.editor.style.overflowY = "auto", r.options.maxHeight && (r.editor.style.maxHeight = r.options.maxHeight), r.options.height && (r.editor.style.height = r.options.height)), r.options.url)
                b({
                  url: r.options.url,
                  dataType: "html",
                  success: function(ie) {
                    r.editor.innerHTML = ie, E.setCursor(r.editor, r.options.focus == "initial");
                  }
                });
              else if (r.options.value)
                r.editor.innerHTML = r.options.value;
              else
                for (var ae = 0; ae < I.children.length; ae++)
                  r.editor.appendChild(I.children[ae]);
              I.innerHTML = "";
              var xe = function(ie) {
                typeof r.options.onchange == "function" && r.options.onchange(I, r, ie), r.options.value = r.getData(), I.value != r.options.value && (I.value = r.options.value, typeof I.oninput == "function" && I.oninput({
                  type: "input",
                  target: I,
                  value: I.value
                }));
              }, fe = function(ie) {
                var Ce = document.createElement("div");
                Ce.innerHTML = ie;
                var Ee = Ce.querySelectorAll("img");
                if (Ee.length)
                  for (var Ve = 0; Ve < Ee.length; Ve++)
                    r.addImage(Ee[Ve].src);
              }, be = function() {
                var ie = null;
                if (ie = V.children[0]) {
                  ie.classList.contains("jslider-grid") || ie.classList.add("jslider-grid");
                  var Ce = ie.children.length;
                  ie.setAttribute("data-number", Ce > 4 ? 4 : Ce), Ce > 4 ? ie.setAttribute("data-total", Ce - 4) : ie.removeAttribute("data-total");
                }
              }, Ae = function(ie) {
                V.innerHTML || r.appendSnippet({}), V.children[0].appendChild(ie), be();
              };
              r.appendSnippet = function(ie) {
                V.innerHTML = "";
                for (var Ce = ["image", "title", "description", "host", "url"], Ee = 0; Ee < Ce.length; Ee++) {
                  var Ve = document.createElement("div");
                  if (Ve.className = "jsnippet-" + Ce[Ee], Ve.setAttribute("data-k", Ce[Ee]), V.appendChild(Ve), ie[Ce[Ee]])
                    if (Ce[Ee] == "image") {
                      Array.isArray(ie.image) || (ie.image = [ie.image]);
                      for (var tt = 0; tt < ie.image.length; tt++) {
                        var Xe = document.createElement("img");
                        Xe.src = ie.image[tt], Ve.appendChild(Xe);
                      }
                    } else
                      Ve.innerHTML = ie[Ce[Ee]];
                }
                r.editor.appendChild(document.createElement("br")), r.editor.appendChild(V);
              }, r.setData = function(ie) {
                typeof ie == "object" ? r.editor.innerHTML = ie.content : r.editor.innerHTML = ie, r.options.focus && E.setCursor(r.editor, !0), N = [];
              }, r.getFiles = function() {
                for (var ie = r.editor.querySelectorAll(".jfile"), Ce = [], Ee = 0; Ee < ie.length; Ee++)
                  N[ie[Ee].src] && Ce.push(N[ie[Ee].src]);
                return Ce;
              }, r.getText = function() {
                return r.editor.innerText;
              }, r.getData = function(ie) {
                if (ie) {
                  var Ce = {
                    content: ""
                  };
                  if (V.innerHTML) {
                    Ce.snippet = {};
                    for (var Ee = 0; Ee < V.children.length; Ee++) {
                      var Ve = V.children[Ee].getAttribute("data-k");
                      if (Ve)
                        if (Ve == "image") {
                          Ce.snippet.image || (Ce.snippet.image = []);
                          for (var tt = 0; tt < V.children[Ee].children.length; tt++)
                            Ce.snippet.image.push(V.children[Ee].children[tt].getAttribute("src"));
                        } else
                          Ce.snippet[Ve] = V.children[Ee].innerHTML;
                    }
                  }
                  var Xe = Object.keys(N);
                  if (Xe.length) {
                    Ce.files = [];
                    for (var Ee = 0; Ee < Xe.length; Ee++)
                      Ce.files.push(N[Xe[Ee]]);
                  }
                  var ut = document.createElement("div");
                  ut.innerHTML = r.editor.innerHTML;
                  var mt = ut.querySelector(".jsnippet");
                  mt && mt.remove();
                  var nt = ut.innerHTML;
                  nt = nt.replace(/<br>/g, `
`), nt = nt.replace(/<\/div>/g, `</div>
`), nt = nt.replace(/<(?:.|\n)*?>/gm, ""), Ce.content = nt.trim(), Re("getData", Ce);
                } else
                  var Ce = r.editor.innerHTML;
                return Ce;
              }, r.reset = function() {
                r.editor.innerHTML = "", V.innerHTML = "", N = [];
              }, r.addPdf = function(ie) {
                if (ie.result.substr(0, 4) != "data")
                  console.error("Invalid source");
                else {
                  var Ce = document.createElement("canvas");
                  Ce.width = 60, Ce.height = 60;
                  var Ee = new Image(), Ve = Ce.getContext("2d");
                  Ve.drawImage(Ee, 0, 0, Ce.width, Ce.height), Ce.toBlob(function(tt) {
                    var Xe = document.createElement("img");
                    Xe.src = window.URL.createObjectURL(tt), Xe.title = ie.name, Xe.className = "jfile pdf", N[Xe.src] = {
                      file: Xe.src,
                      extension: "pdf",
                      content: ie.result
                    }, document.execCommand("insertHtml", !1, Xe.outerHTML);
                  });
                }
              }, r.addImage = function(ie, Ce) {
                if (r.options.acceptImages)
                  if (ie || (ie = ""), ie.substr(0, 4) != "data" && !r.options.remoteParser)
                    console.error("remoteParser not defined in your initialization");
                  else {
                    if (ie.substr(0, 4) == "data") {
                      var Ee = ie.split(";");
                      Ee = Ee[0].split("/"), Ee = Ee[1];
                    } else {
                      var Ee = ie.substr(ie.lastIndexOf(".") + 1);
                      ie = r.options.remoteParser + ie;
                    }
                    var Ve = new Image();
                    Ve.onload = function() {
                      var Xe = document.createElement("canvas");
                      Xe.width = Ve.width, Xe.height = Ve.height;
                      var ut = Xe.getContext("2d");
                      ut.drawImage(Ve, 0, 0, Xe.width, Xe.height), Xe.toBlob(function(mt) {
                        var nt = document.createElement("img");
                        nt.src = window.URL.createObjectURL(mt), nt.classList.add("jfile"), nt.setAttribute("tabindex", "900"), nt.setAttribute("width", Ve.width), nt.setAttribute("height", Ve.height), N[nt.src] = {
                          file: nt.src,
                          extension: Ee,
                          content: Xe.toDataURL()
                        }, r.options.dropAsSnippet || Ce ? (Ae(nt), N[nt.src].snippet = !0) : document.execCommand("insertHtml", !1, nt.outerHTML), xe();
                      });
                    }, Ve.src = ie;
                  }
              }, r.addFile = function(ie) {
                for (var Ce = [], Ee = 0; Ee < ie.length; Ee++)
                  if (ie[Ee].size > r.options.maxFileSize)
                    alert("The file is too big");
                  else {
                    var Ve = ie[Ee].type.split("/");
                    Ve[0] == "image" ? Ve = 1 : Ve[1] == "pdf" ? Ve = 2 : Ve = 0, Ve ? (Ce[Ee] = new FileReader(), Ce[Ee].index = Ee, Ce[Ee].type = Ve, Ce[Ee].name = ie[Ee].name, Ce[Ee].date = ie[Ee].lastModified, Ce[Ee].size = ie[Ee].size, Ce[Ee].addEventListener("load", function(tt) {
                      tt.target.type == 2 ? r.options.acceptFiles == !0 && r.addPdf(tt.target) : r.addImage(tt.target.result);
                    }, !1), Ce[Ee].readAsDataURL(ie[Ee])) : alert("The extension is not allowed");
                  }
              }, r.destroy = function() {
                r.editor.removeEventListener("mouseup", je), r.editor.removeEventListener("mousedown", Te), r.editor.removeEventListener("mousemove", ke), r.editor.removeEventListener("keyup", Q), r.editor.removeEventListener("keydown", pe), r.editor.removeEventListener("dragstart", q), r.editor.removeEventListener("dragenter", ee), r.editor.removeEventListener("dragover", j), r.editor.removeEventListener("drop", R), r.editor.removeEventListener("paste", _e), r.editor.removeEventListener("blur", J), r.editor.removeEventListener("focus", ue), I.editor = null, I.classList.remove("jeditor-container"), K.remove(), V.remove(), r.editor.remove();
              }, r.upload = function() {
                l.click(r.file);
              };
              const Se = [
                "html",
                "body",
                "address",
                "span",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "b",
                "i",
                "blockquote",
                "strong",
                "em",
                "ul",
                "ol",
                "li",
                "a",
                "code",
                "pre",
                "hr",
                "br",
                "img",
                "figure",
                "picture",
                "figcaption",
                "iframe",
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
                "th",
                "td",
                "caption",
                "u",
                "del",
                "ins",
                "sub",
                "sup",
                "small",
                "mark",
                "input",
                "textarea",
                "select",
                "option",
                "button",
                "label",
                "fieldset",
                "legend",
                "audio",
                "video",
                "abbr",
                "cite",
                "kbd",
                "section",
                "article",
                "nav",
                "aside",
                "header",
                "footer",
                "main",
                "details",
                "summary",
                "svg",
                "line",
                "source"
              ], Oe = ["width", "height", "align", "border", "src", "tabindex"], Ze = ["color", "font-weight", "font-size", "background", "background-color", "margin"], et = function(ie) {
                if (ie.tagName && Se.indexOf(ie.tagName.toLowerCase()) === -1 && ie.innerText && (ie.innerHTML = ie.innerText), ie.attributes && ie.attributes.length) {
                  let Ce = null, Ee = ie.getAttribute("style");
                  if (Ee) {
                    Ce = [];
                    let tt = Ee.split(";");
                    for (let Xe = 0; Xe < tt.length; Xe++) {
                      let ut = tt[Xe].trim().split(":");
                      if (Ze.indexOf(ut[0].trim()) >= 0) {
                        let mt = ut.shift();
                        ut = ut.join(":"), Ce.push(mt + ":" + ut);
                      }
                    }
                  }
                  ie.tagName.toUpperCase() === "IMG" && (!r.options.acceptImages || !ie.src ? ie.parentNode.removeChild(ie) : (ie.setAttribute("tabindex", "900"), r.addImage(ie.src)));
                  let Ve = [];
                  for (let tt = 0; tt < ie.attributes.length; tt++)
                    Ve.push(ie.attributes[tt].name);
                  Ve.length && Ve.forEach(function(tt) {
                    Oe.indexOf(tt) === -1 ? ie.removeAttribute(tt) : ie.attributes && ie.attributes[ae] && ie.attributes[ae].value.indexOf("<") !== -1 && ie.attributes[ae].value.replace("<", "&#60;");
                  }), ie.style = "", Ce && Ce.length && ie.setAttribute("style", Ce.join(";"));
                }
                if (ie.children.length)
                  for (let Ce = ie.children.length; Ce > 0; Ce--)
                    et(ie.children[Ce - 1]);
              };
              var te = function(ie) {
                var Ce = window.getSelection(), Ee = document.createRange();
                Ee.selectNode(ie), Ce.addRange(Ee);
              }, ye = function(ie) {
                ie && (ie = ie.replace(new RegExp("<!--(.*?)-->", "gsi"), ""));
                var Ce = new DOMParser(), Ee = Ce.parseFromString(ie, "text/html");
                et(Ee);
                var Ve = document.createElement("div");
                return Ve.innerHTML = Ee.firstChild.innerHTML, Ve;
              }, _e = function(ie) {
                if (r.options.filterPaste == !0) {
                  if (ie.clipboardData || ie.originalEvent.clipboardData)
                    var Ce = (ie.originalEvent || ie).clipboardData.getData("text/html"), Ee = (ie.originalEvent || ie).clipboardData.getData("text/plain"), Ve = (ie.originalEvent || ie).clipboardData.files;
                  else if (window.clipboardData)
                    var Ce = window.clipboardData.getData("Html"), Ee = window.clipboardData.getData("Text"), Ve = window.clipboardData.files;
                  if (Ve.length)
                    r.addFile(Ve);
                  else if (!Ce)
                    Ce = Ee.split(`\r
`), ie.target.innerText ? (Ce = Ce.map(function(Xe) {
                      return "<div>" + Xe + "</div>";
                    }), document.execCommand("insertText", !1, Ce.join(""))) : Ce.map(function(Xe) {
                      var ut = document.createElement("div");
                      ut.innerText = Xe, r.editor.appendChild(ut);
                    });
                  else {
                    var tt = ye(Ce);
                    document.execCommand("insertHtml", !1, tt.innerHTML);
                  }
                  ie.preventDefault();
                }
              }, q = function(ie) {
                H && H.e && ie.preventDefault();
              }, ee = function(ie) {
                H || r.options.dropZone == !1 || (I.classList.add("jeditor-dragging"), ie.preventDefault());
              }, j = function(ie) {
                H || r.options.dropZone == !1 || (ne && clearTimeout(ne), ne = setTimeout(function() {
                  I.classList.remove("jeditor-dragging");
                }, 100), ie.preventDefault());
              }, R = function(ie) {
                if (!(H || r.options.dropZone == !1)) {
                  var Ce = null;
                  document.caretRangeFromPoint ? Ce = document.caretRangeFromPoint(ie.clientX, ie.clientY) : ie.rangeParent && (Ce = document.createRange(), Ce.setStart(ie.rangeParent, ie.rangeOffset));
                  var Ee = window.getSelection();
                  Ee.removeAllRanges(), Ee.addRange(Ce), Ee.anchorNode.parentNode.focus();
                  var Ve = (ie.originalEvent || ie).dataTransfer.getData("text/html"), tt = (ie.originalEvent || ie).dataTransfer.getData("text/plain"), Xe = (ie.originalEvent || ie).dataTransfer.files;
                  Xe.length ? r.addFile(Xe) : tt && fe(Ve), I.classList.remove("jeditor-dragging"), ie.preventDefault();
                }
              }, J = function(ie) {
                Re("onevent", ie), xe(ie), typeof r.options.onblur == "function" && r.options.onblur(I, r, ie);
              }, ue = function(ie) {
                typeof r.options.onfocus == "function" && r.options.onfocus(I, r, ie);
              }, Q = function(ie) {
                r.editor.innerHTML || (r.editor.innerHTML = "<div><br></div>"), typeof r.options.onkeyup == "function" && r.options.onkeyup(I, r, ie);
              }, pe = function(ie) {
                if (Re("onevent", ie), ie.key == "Delete" && ie.target.tagName == "IMG") {
                  var Ce = ie.target.parentNode;
                  te(ie.target), Ce.classList.contains("jsnippet-image") && be();
                }
                typeof r.options.onkeydown == "function" && r.options.onkeydown(I, r, ie);
              }, je = function(ie) {
                if (H && H.e && (H.e.classList.remove("resizing"), H.e.changed == !0)) {
                  var Ce = H.e.cloneNode();
                  Ce.width = parseInt(H.e.style.width) || H.e.getAttribute("width"), Ce.height = parseInt(H.e.style.height) || H.e.getAttribute("height"), H.e.style.width = "", H.e.style.height = "", te(H.e), document.execCommand("insertHtml", !1, Ce.outerHTML);
                }
                H = !1;
              }, Te = function(ie) {
                var Ce = function(Xe) {
                  var ut = Xe.getBoundingClientRect();
                  ut.width - (ie.clientX - ut.left) < 40 && ie.clientY - ut.top < 40 && (Xe.innerHTML = "", Xe.remove());
                };
                if (ie.target.tagName == "IMG")
                  if (ie.target.style.cursor) {
                    var Ee = ie.target.getBoundingClientRect();
                    H = {
                      e: ie.target,
                      x: ie.clientX,
                      y: ie.clientY,
                      w: Ee.width,
                      h: Ee.height,
                      d: ie.target.style.cursor
                    }, ie.target.getAttribute("width") || ie.target.setAttribute("width", Ee.width), ie.target.getAttribute("height") || ie.target.setAttribute("height", Ee.height);
                    var Ve = window.getSelection();
                    if (Ve.rangeCount)
                      for (var tt = 0; tt < Ve.rangeCount; tt++)
                        Ve.removeRange(Ve.getRangeAt(tt));
                    ie.target.classList.add("resizing");
                  } else
                    H = !0;
                else
                  ie.target.classList.contains("jsnippet") ? Ce(ie.target) : ie.target.parentNode.classList.contains("jsnippet") && Ce(ie.target.parentNode), H = !0;
              }, ke = function(ie) {
                if (ie.target.tagName == "IMG" && !ie.target.parentNode.classList.contains("jsnippet-image") && r.options.allowImageResize == !0 && ie.target.getAttribute("tabindex")) {
                  var Ce = ie.target.getBoundingClientRect();
                  ie.clientY - Ce.top < 5 ? Ce.width - (ie.clientX - Ce.left) < 5 ? ie.target.style.cursor = "ne-resize" : ie.clientX - Ce.left < 5 ? ie.target.style.cursor = "nw-resize" : ie.target.style.cursor = "n-resize" : Ce.height - (ie.clientY - Ce.top) < 5 ? Ce.width - (ie.clientX - Ce.left) < 5 ? ie.target.style.cursor = "se-resize" : ie.clientX - Ce.left < 5 ? ie.target.style.cursor = "sw-resize" : ie.target.style.cursor = "s-resize" : Ce.width - (ie.clientX - Ce.left) < 5 ? ie.target.style.cursor = "e-resize" : ie.clientX - Ce.left < 5 ? ie.target.style.cursor = "w-resize" : ie.target.style.cursor = "";
                }
                if (ie.which == 1 && H && H.d) {
                  if (H.d == "e-resize" || H.d == "ne-resize" || H.d == "se-resize")
                    if (H.e.style.width = H.w + (ie.clientX - H.x), ie.shiftKey) {
                      var Ee = (ie.clientX - H.x) * (H.h / H.w);
                      H.e.style.height = H.h + Ee;
                    } else
                      var Ee = null;
                  Ee || (H.d == "s-resize" || H.d == "se-resize" || H.d == "sw-resize") && (ie.shiftKey || (H.e.style.height = H.h + (ie.clientY - H.y))), H.e.changed = !0;
                }
              }, Re = function(ie, Ce) {
                if (r.options.extensions) {
                  var Ee = Object.keys(r.options.extensions);
                  if (Ee.length)
                    for (var Ve = 0; Ve < Ee.length; Ve++)
                      r.options.extensions[Ee[Ve]] && typeof r.options.extensions[Ee[Ve]][ie] == "function" && r.options.extensions[Ee[Ve]][ie].call(r, Ce);
                }
              }, ze = function() {
                if (r.options.extensions) {
                  var ie = Object.keys(r.options.extensions);
                  if (ie.length)
                    for (var Ce = 0; Ce < ie.length; Ce++)
                      r.options.extensions[ie[Ce]] && typeof r.options.extensions[ie[Ce]] == "function" && (r.options.extensions[ie[Ce]] = r.options.extensions[ie[Ce]](I, r));
                }
              };
              if (document.addEventListener("mouseup", je), document.addEventListener("mousemove", ke), r.editor.addEventListener("mousedown", Te), r.editor.addEventListener("keyup", Q), r.editor.addEventListener("keydown", pe), r.editor.addEventListener("dragstart", q), r.editor.addEventListener("dragenter", ee), r.editor.addEventListener("dragover", j), r.editor.addEventListener("drop", R), r.editor.addEventListener("paste", _e), r.editor.addEventListener("focus", ue), r.editor.addEventListener("blur", J), I.appendChild(r.editor), r.options.snippet && r.appendSnippet(r.options.snippet), r.options.toolbar) {
                if (Array.isArray(r.options.toolbar))
                  var Qe = {
                    container: !0,
                    responsive: !0,
                    items: r.options.toolbar
                  };
                else if (r.options.toolbar === !0)
                  var Qe = {
                    container: !0,
                    responsive: !0,
                    items: []
                  };
                else
                  var Qe = r.options.toolbar;
                Qe.items && Qe.items.length || (Qe.items = E.getDefaultToolbar(r)), r.options.toolbarOnTop ? (I.classList.add("toolbar-on-top"), I.insertBefore(K, I.firstChild)) : (r.editor.style.padding = "15px", I.appendChild(K)), Fe(K, Qe), K.addEventListener("click", function() {
                  r.editor.focus();
                });
              }
              return r.file = document.createElement("input"), r.file.style.display = "none", r.file.type = "file", r.file.setAttribute("accept", "image/*"), r.file.onchange = function() {
                r.addFile(this.files);
              }, I.appendChild(r.file), r.options.focus && E.setCursor(r.editor, r.options.focus == "initial"), I.change = r.setData, I.val = function(ie) {
                if (ie === void 0) {
                  var Ce = I.getAttribute("data-html") !== "true";
                  return r.getData(Ce);
                } else
                  r.setData(ie);
              }, ze(), I.editor = r, typeof r.options.onload == "function" && r.options.onload(I, r, r.editor), r;
            };
            return E.setCursor = function(I, u) {
              I.focus(), document.execCommand("selectAll");
              var r = window.getSelection(), Y = r.getRangeAt(0);
              if (u == !0)
                var re = Y.startContainer, ne = 0;
              else
                var re = Y.endContainer, ne = re.length;
              Y.setStart(re, ne), Y.setEnd(re, ne), r.removeAllRanges(), r.addRange(Y);
            }, E.getDefaultToolbar = function(I) {
              var u = function(Y, re, ne) {
                ne.color || (se(ne, {
                  onchange: function(H, N) {
                    ne.k === "color" ? document.execCommand("foreColor", !1, N) : document.execCommand("backColor", !1, N);
                  }
                }), ne.color.open());
              }, r = [];
              return r.push({
                content: "undo",
                onclick: function() {
                  document.execCommand("undo");
                }
              }), r.push({
                content: "redo",
                onclick: function() {
                  document.execCommand("redo");
                }
              }), r.push({
                type: "divisor"
              }), I.options.toolbarOnTop && (r.push({
                type: "select",
                width: "140px",
                options: ["Default", "Verdana", "Arial", "Courier New"],
                render: function(Y) {
                  return '<span style="font-family:' + Y + '">' + Y + "</span>";
                },
                onchange: function(Y, re, ne, H, N) {
                  document.execCommand("fontName", !1, H);
                }
              }), r.push({
                type: "select",
                content: "format_size",
                options: ["x-small", "small", "medium", "large", "x-large"],
                render: function(Y) {
                  return '<span style="font-size:' + Y + '">' + Y + "</span>";
                },
                onchange: function(Y, re, ne, H, N) {
                  document.execCommand("fontSize", !1, parseInt(N) + 1);
                }
              }), r.push({
                type: "select",
                options: ["format_align_left", "format_align_center", "format_align_right", "format_align_justify"],
                render: function(Y) {
                  return '<i class="material-icons">' + Y + "</i>";
                },
                onchange: function(Y, re, ne, H, N) {
                  var V = ["JustifyLeft", "justifyCenter", "justifyRight", "justifyFull"];
                  document.execCommand(V[N]);
                }
              }), r.push({
                type: "divisor"
              }), r.push({
                content: "format_color_text",
                k: "color",
                onclick: u
              }), r.push({
                content: "format_color_fill",
                k: "background-color",
                onclick: u
              })), r.push({
                content: "format_bold",
                onclick: function(Y, re, ne) {
                  document.execCommand("bold"), document.queryCommandState("bold") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                content: "format_italic",
                onclick: function(Y, re, ne) {
                  document.execCommand("italic"), document.queryCommandState("italic") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                content: "format_underline",
                onclick: function(Y, re, ne) {
                  document.execCommand("underline"), document.queryCommandState("underline") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                type: "divisor"
              }), r.push({
                content: "format_list_bulleted",
                onclick: function(Y, re, ne) {
                  document.execCommand("insertUnorderedList"), document.queryCommandState("insertUnorderedList") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                content: "format_list_numbered",
                onclick: function(Y, re, ne) {
                  document.execCommand("insertOrderedList"), document.queryCommandState("insertOrderedList") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                content: "format_indent_increase",
                onclick: function(Y, re, ne) {
                  document.execCommand("indent", !0, null), document.queryCommandState("indent") ? ne.classList.add("selected") : ne.classList.remove("selected");
                }
              }), r.push({
                content: "format_indent_decrease",
                onclick: function() {
                  document.execCommand("outdent"), document.queryCommandState("outdent") ? this.classList.add("selected") : this.classList.remove("selected");
                }
              }), I.options.toolbarOnTop && (r.push({
                type: "divisor"
              }), r.push({
                content: "photo",
                onclick: function() {
                  I.upload();
                }
              }), r.push({
                type: "select",
                content: "table_view",
                columns: 8,
                grid: 8,
                right: !0,
                options: [
                  "0x0",
                  "1x0",
                  "2x0",
                  "3x0",
                  "4x0",
                  "5x0",
                  "6x0",
                  "7x0",
                  "0x1",
                  "1x1",
                  "2x1",
                  "3x1",
                  "4x1",
                  "5x1",
                  "6x1",
                  "7x1",
                  "0x2",
                  "1x2",
                  "2x2",
                  "3x2",
                  "4x2",
                  "5x2",
                  "6x2",
                  "7x2",
                  "0x3",
                  "1x3",
                  "2x3",
                  "3x3",
                  "4x3",
                  "5x3",
                  "6x3",
                  "7x3",
                  "0x4",
                  "1x4",
                  "2x4",
                  "3x4",
                  "4x4",
                  "5x4",
                  "6x4",
                  "7x4",
                  "0x5",
                  "1x5",
                  "2x5",
                  "3x5",
                  "4x5",
                  "5x5",
                  "6x5",
                  "7x5",
                  "0x6",
                  "1x6",
                  "2x6",
                  "3x6",
                  "4x6",
                  "5x6",
                  "6x6",
                  "7x6",
                  "0x7",
                  "1x7",
                  "2x7",
                  "3x7",
                  "4x7",
                  "5x7",
                  "6x7",
                  "7x7"
                ],
                render: function(Y, re) {
                  re && (re.onmouseover = this.onmouseover, Y = Y.split("x"), re.setAttribute("data-x", Y[0]), re.setAttribute("data-y", Y[1]));
                  var ne = document.createElement("div");
                  return re.style.margin = "1px", re.style.border = "1px solid #ddd", ne;
                },
                onmouseover: function(Y) {
                  for (var re = parseInt(Y.target.getAttribute("data-x")), ne = parseInt(Y.target.getAttribute("data-y")), H = 0; H < Y.target.parentNode.children.length; H++) {
                    var N = Y.target.parentNode.children[H], V = parseInt(N.getAttribute("data-x")), K = parseInt(N.getAttribute("data-y"));
                    V <= re && K <= ne ? (N.style.backgroundColor = "#cae1fc", N.style.borderColor = "#2977ff") : (N.style.backgroundColor = "", N.style.borderColor = "#ddd");
                  }
                },
                onchange: function(Y, re, ne) {
                  ne = ne.split("x");
                  for (var H = document.createElement("table"), N = document.createElement("tbody"), V = 0; V <= ne[1]; V++) {
                    for (var K = document.createElement("tr"), ae = 0; ae <= ne[0]; ae++) {
                      var xe = document.createElement("td");
                      xe.innerHTML = "", K.appendChild(xe);
                    }
                    N.appendChild(K);
                  }
                  H.appendChild(N), H.setAttribute("width", "100%"), H.setAttribute("cellpadding", "6"), H.setAttribute("cellspacing", "0"), document.execCommand("insertHTML", !1, H.outerHTML);
                }
              })), r;
            }, E;
          }
          var Ke = De();
          function U() {
            var E = function(I, u) {
              var r = {};
              r.options = {};
              var Y = {
                type: "big",
                title: "Untitled",
                width: 510,
                height: 472
              };
              for (var re in Y)
                u && u.hasOwnProperty(re) ? r.options[re] = u[re] : r.options[re] = Y[re];
              var ne = function() {
                for (var V = document.createElement("div"); I.children[0]; )
                  V.appendChild(I.children[0]);
                for (r.content = document.createElement("div"), r.content.className = "jfloating_content", r.content.innerHTML = I.innerHTML; V.children[0]; )
                  r.content.appendChild(V.children[0]);
                r.container = document.createElement("div"), r.container.className = "jfloating", r.container.appendChild(r.content), r.options.title ? r.container.setAttribute("title", r.options.title) : r.container.classList.add("no-title"), r.options.width && (r.container.style.width = parseInt(r.options.width) + "px"), r.options.height && (r.container.style.height = parseInt(r.options.height) + "px"), I.innerHTML = "", I.appendChild(r.container);
              }, H = function() {
                r.container && r.container.addEventListener("click", function(V) {
                  var K = V.target.getBoundingClientRect();
                  if (V.target.classList.contains("jfloating")) {
                    if (V.changedTouches && V.changedTouches[0])
                      var ae = V.changedTouches[0].clientX, xe = V.changedTouches[0].clientY;
                    else
                      var ae = V.clientX, xe = V.clientY;
                    K.width - (ae - K.left) < 50 && xe - K.top < 50 ? setTimeout(function() {
                      r.close();
                    }, 100) : r.setState();
                  }
                });
              }, N = function() {
                r.container.classList.add("jfloating-" + r.options.type);
              };
              return r.state = {
                isMinized: !1
              }, r.setState = function() {
                r.state.isMinized ? r.container.classList.remove("jfloating-minimized") : r.container.classList.add("jfloating-minimized"), r.state.isMinized = !r.state.isMinized;
              }, r.close = function() {
                Components.elements.splice(E.elements.indexOf(r.container), 1), r.updatePosition(), I.remove();
              }, r.updatePosition = function() {
                for (var V = 0; V < E.elements.length; V++) {
                  var K = E.elements[V], ae = E.elements[V - 1];
                  K.style.right = V * (ae ? ae.offsetWidth : K.offsetWidth) * 1.01 + "px";
                }
              }, r.init = function() {
                ne(), H(), N(), E.elements.push(r.container), r.updatePosition(), I.floating = r;
              }, r.init(), r;
            };
            return E.elements = [], E;
          }
          var Me = U();
          function We() {
            const E = function(H) {
              return !isNaN(H) && H !== null && (typeof H != "string" || H.trim() !== "");
            }, I = {
              between: function(H, N) {
                return H >= N[0] && H <= N[1];
              },
              "not between": function(H, N) {
                return H < N[0] || H > N[1];
              },
              "<": function(H, N) {
                return H < N[0];
              },
              "<=": function(H, N) {
                return H <= N[0];
              },
              ">": function(H, N) {
                return H > N[0];
              },
              ">=": function(H, N) {
                return H >= N[0];
              },
              "=": function(H, N) {
                return H == N[0];
              },
              "!=": function(H, N) {
                return H != N[0];
              }
            }, u = {
              "valid date": function() {
                return !0;
              },
              "=": function(H, N) {
                return H === N[0];
              },
              "!=": function(H, N) {
                return H !== N[0];
              },
              "<": function(H, N) {
                return H < N[0];
              },
              "<=": function(H, N) {
                return H <= N[0];
              },
              ">": function(H, N) {
                return H > N[0];
              },
              ">=": function(H, N) {
                return H >= N[0];
              },
              between: function(H, N) {
                return H >= N[0] && H <= N[1];
              },
              "not between": function(H, N) {
                return H < N[0] || H > N[1];
              }
            }, r = {
              contains: function(H, N) {
                return H.includes(N[0]);
              },
              "not contains": function(H, N) {
                return !H.includes(N[0]);
              },
              "begins with": function(H, N) {
                return H.startsWith(N[0]);
              },
              "ends with": function(H, N) {
                return H.endsWith(N[0]);
              },
              "=": function(H, N) {
                return H === N[0];
              },
              "!=": function(H, N) {
                return H !== N[0];
              },
              "valid email": function(H) {
                var N = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                return N.test(H);
              },
              "valid url": function(H) {
                var N = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
                return N.test(H);
              }
            }, Y = function(H, N) {
              return typeof Y[N.type] == "function" ? N.allowBlank && (typeof H > "u" || H === "" || H === null) ? !0 : Y[N.type].call(this, H, N) : null;
            };
            Y.url = function(H) {
              var N = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
              return !!N.test(H);
            }, Y.email = function(H) {
              var N = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
              return !!(H && N.test(H));
            }, Y.required = function(H) {
              return !!(H && H.trim());
            }, Y.empty = function(H) {
              return typeof H > "u" || H === null || typeof H == "string" && !H.toString().trim();
            }, Y["not exist"] = Y.empty, Y.notEmpty = function(H) {
              return !Y.empty(H);
            }, Y.exist = Y.notEmpty, Y.number = function(H, N) {
              if (!E(H))
                return !1;
              if (!N || !N.criteria)
                return !0;
              if (!I[N.criteria])
                return !1;
              let V = N.value.map(function(K) {
                return parseFloat(K);
              });
              return I[N.criteria](H, V);
            }, Y.login = function(H) {
              let N = new RegExp(/^[a-zA-Z0-9._-]+$/);
              return !!(H && N.test(H));
            }, Y.list = function(H, N) {
              let V = typeof H;
              if (V !== "string" && V !== "number")
                return !1;
              let K;
              return typeof N.value[0] == "string" ? N.source ? K = N.source : K = N.value[0].split(",") : K = N.value[0], Array.isArray(K) ? K.findIndex(function(xe) {
                return xe == H;
              }) > -1 : !1;
            };
            const re = function() {
              let H = /* @__PURE__ */ new Date();
              return H.setHours(0, 0, 0, 0), H;
            }, ne = {
              "one year ago": function() {
                let H = re();
                return H.setFullYear(H.getFullYear() - 1), H;
              },
              "one month ago": function() {
                let H = re();
                return H.setMonth(H.getMonth() - 1), H;
              },
              "one week ago": function() {
                let H = re();
                return H.setDate(H.getDate() - 7), H;
              },
              yesterday: function() {
                let H = re();
                return H.setDate(H.getDate() - 1), H;
              },
              today: re,
              tomorrow: function() {
                let H = re();
                return H.setDate(H.getDate() + 1), H;
              }
            };
            return Y.date = function(H, N) {
              if (E(H) && H > 0 && H < 1e6 && (H = T.numToDate(H)), new Date(H) == "Invalid Date")
                return !1;
              if (!N || !N.criteria)
                return !0;
              if (!u[N.criteria])
                return !1;
              let V = N.value.map(function(K) {
                return typeof K == "string" && ne[K] ? ne[K]().getTime() : new Date(K).getTime();
              });
              return u[N.criteria](new Date(H).getTime(), V);
            }, Y.text = function(H, N) {
              if (typeof H > "u" || H === null)
                H = "";
              else if (typeof H != "string")
                return !1;
              return !N || !N.criteria ? !0 : r[N.criteria] ? r[N.criteria](H, N.value) : !1;
            }, Y.textLength = function(H, N) {
              let V;
              return typeof H == "string" ? V = H.length : typeof H < "u" && H !== null && typeof H.toString == "function" ? V = H.toString().length : V = 0, Y.number(V, N);
            }, Y.time = function(H, N) {
              if (!E(H))
                return !1;
              if (!N || !N.criteria)
                return !0;
              if (!I[N.criteria])
                return !1;
              let V = N.value.map(function(K) {
                return parseInt(parseFloat(K) * 10 ** 17) / 10 ** 17;
              });
              return I[N.criteria](parseInt(parseFloat(H) * 10 ** 17) / 10 ** 17, V);
            }, Y;
          }
          var ot = We();
          function Ne() {
            var E = function(I, u) {
              var r = {};
              r.options = {};
              var Y = {
                url: null,
                message: "Are you sure? There are unsaved information in your form",
                ignore: !1,
                currentHash: null,
                submitButton: null,
                validations: null,
                onbeforeload: null,
                onload: null,
                onbeforesave: null,
                onsave: null,
                onbeforeremove: null,
                onremove: null,
                onerror: function(N, V) {
                  alert(V);
                }
              };
              for (var re in Y)
                u && u.hasOwnProperty(re) ? r.options[re] = u[re] : r.options[re] = Y[re];
              r.options.validations || (r.options.validations = {}), r.options.submitButton || (r.options.submitButton = I.querySelector("input[type=submit]")), r.options.submitButton && r.options.url && (r.options.submitButton.onclick = function() {
                r.save();
              }), r.options.validations.email || (r.options.validations.email = ot.email), r.options.validations.length || (r.options.validations.length = ot.length), r.options.validations.required || (r.options.validations.required = ot.required), r.setUrl = function(N) {
                r.options.url = N;
              }, r.load = function() {
                b({
                  url: r.options.url,
                  method: "GET",
                  dataType: "json",
                  queue: !0,
                  success: function(N) {
                    if (typeof r.options.onbeforeload == "function") {
                      var V = r.options.onbeforeload(I, N);
                      V && (N = V);
                    }
                    E.setElements(I, N), typeof r.options.onload == "function" && r.options.onload(I, N);
                  }
                });
              }, r.save = function() {
                var N = r.validate();
                if (N)
                  r.options.onerror(I, N);
                else {
                  var V = E.getElements(I, !0);
                  if (typeof r.options.onbeforesave == "function") {
                    var V = r.options.onbeforesave(I, V);
                    if (V === !1)
                      return;
                  }
                  b({
                    url: r.options.url,
                    method: "POST",
                    dataType: "json",
                    data: V,
                    success: function(K) {
                      typeof r.options.onsave == "function" && r.options.onsave(I, V, K);
                    }
                  });
                }
              }, r.remove = function() {
                if (typeof r.options.onbeforeremove == "function") {
                  var N = r.options.onbeforeremove(I, r);
                  if (N === !1)
                    return !1;
                }
                b({
                  url: r.options.url,
                  method: "DELETE",
                  dataType: "json",
                  success: function(V) {
                    typeof r.options.onremove == "function" && r.options.onremove(I, r, V), r.reset();
                  }
                });
              };
              var ne = function(N) {
                N.classList.add("error"), r.options.submitButton && r.options.submitButton.setAttribute("disabled", !0);
                var V = N.getAttribute("data-error") || "There is an error in the form";
                return N.setAttribute("title", V), V;
              }, H = function(N) {
                var V = !1;
                N.classList.remove("error"), N.removeAttribute("title");
                for (var K = I.querySelectorAll("input, select, textarea, div[name]"), ae = 0; ae < K.length; ae++)
                  K[ae].getAttribute("data-validation") && K[ae].classList.contains("error") && (V = !0);
                r.options.submitButton && (V ? r.options.submitButton.setAttribute("disabled", !0) : r.options.submitButton.removeAttribute("disabled"));
              };
              return r.validateElement = function(N) {
                var V = !1, K = E.getValue(N), ae = N.getAttribute("data-validation");
                return typeof r.options.validations[ae] == "function" && !r.options.validations[ae](K, N) ? V = ne(N) : N.classList.contains("error") && H(N), V;
              }, r.reset = function() {
                for (var N = I.querySelectorAll("input, select, textarea, div[name]"), V = 0; V < N.length; V++)
                  N[V].getAttribute("name") && (N[V].type == "checkbox" || N[V].type == "radio" ? N[V].checked = !1 : typeof N[V].val == "function" ? N[V].val("") : N[V].value = "");
              }, r.validate = function() {
                for (var N = [], V = I.querySelectorAll("input, select, textarea, div[name]"), K = 0; K < V.length; K++)
                  if (V[K].getAttribute("data-validation")) {
                    var ae = r.validateElement(V[K]);
                    ae && N.push(ae);
                  }
                return N.length > 0 ? N.join("<br>") : !1;
              }, r.getError = function() {
                return !!r.validation();
              }, r.setHash = function() {
                return r.getHash(E.getElements(I));
              }, r.getHash = function(N) {
                var V = 0, K, ae;
                if (N.length === 0)
                  return V;
                for (K = 0; K < N.length; K++)
                  ae = N.charCodeAt(K), V = (V << 5) - V + ae, V |= 0;
                return V;
              }, r.isChanged = function() {
                var N = r.setHash();
                return r.options.currentHash != N;
              }, r.resetTracker = function() {
                r.options.currentHash = r.setHash(), r.options.ignore = !1;
              }, r.setIgnore = function(N) {
                r.options.ignore = !!N;
              }, setTimeout(function() {
                r.options.currentHash = r.setHash();
              }, 1e3), I.addEventListener("keyup", function(N) {
                N.target.getAttribute("data-validation") && r.validateElement(N.target);
              }), E.hasEvents || (window.addEventListener("beforeunload", function(N) {
                if (r.isChanged() && r.options.ignore == !1) {
                  var V = r.options.message ? r.options.message : "o/";
                  return V ? (typeof N > "u" && (N = window.event), N && (N.returnValue = V), V) : void 0;
                }
              }), E.hasEvents = !0), I.form = r, r;
            };
            return E.getValue = function(I) {
              var u = null;
              if (I.type == "checkbox")
                I.checked == !0 && (u = I.value || !0);
              else if (I.type == "radio")
                I.checked == !0 && (u = I.value);
              else if (I.type == "file")
                u = I.files;
              else if (I.tagName == "select" && I.multiple == !0) {
                u = [];
                for (var r = I.querySelectorAll("options[selected]"), Y = 0; Y < r.length; Y++)
                  u.push(r[Y].value);
              } else typeof I.val == "function" ? u = I.val() : u = I.value || "";
              return u;
            }, E.getElements = function(I, u) {
              for (var r = {}, Y = null, re = I.querySelectorAll("input, select, textarea, div[name]"), ne = 0; ne < re.length; ne++)
                (Y = re[ne].getAttribute("name")) && (r[Y] = E.getValue(re[ne]) || "");
              return u == !0 ? r : JSON.stringify(r);
            }, E.setElements = function(I, u) {
              for (var r = null, Y = null, re = I.querySelectorAll("input, select, textarea, div[name]"), ne = 0; ne < re.length; ne++) {
                var H = re[ne].getAttribute("type");
                if (r = re[ne].getAttribute("name")) {
                  if (r = r.replace(new RegExp(/\[(.*?)\]/ig), ".$1"), Y = null, r.match(/\./)) {
                    var N = a.call(u, r) || "";
                    typeof N < "u" && (Y = N);
                  } else
                    typeof u[r] < "u" && (Y = u[r]);
                  Y !== null && (H == "checkbox" || H == "radio" ? re[ne].checked = !!Y : H == "file" || (typeof re[ne].val == "function" ? re[ne].val(Y) : re[ne].value = Y));
                }
              }
            }, E;
          }
          var we = Ne();
          function Ie() {
            var E = function() {
              var u = null, r = function(H) {
                if (H.which == 27)
                  for (var N = document.querySelectorAll(".jmodal"), V = 0; V < N.length; V++)
                    N[V].parentNode.modal.close();
              }, Y = function(H) {
                let N = H.composedPath();
                var V = l.findElement(N[0], "jmodal");
                if (V) {
                  var K = V.getBoundingClientRect();
                  if (H.changedTouches && H.changedTouches[0])
                    var ae = H.changedTouches[0].clientX, xe = H.changedTouches[0].clientY;
                  else
                    var ae = H.clientX, xe = H.clientY;
                  K.width - (ae - K.left) < 50 && xe - K.top < 50 && V.parentNode.modal.close();
                }
                u && (u.element.style.cursor = "auto", u = null);
              }, re = function(H) {
                let N = H.composedPath();
                var V = l.findElement(N[0], "jmodal");
                if (V) {
                  var K = V.getBoundingClientRect();
                  if (H.changedTouches && H.changedTouches[0])
                    var ae = H.changedTouches[0].clientX, xe = H.changedTouches[0].clientY;
                  else
                    var ae = H.clientX, xe = H.clientY;
                  K.width - (ae - K.left) < 50 && xe - K.top < 50 || xe - K.top < 50 && (document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), u = {
                    left: K.left,
                    top: K.top,
                    x: H.clientX,
                    y: H.clientY,
                    width: K.width,
                    height: K.height,
                    element: V
                  });
                }
              }, ne = function(H) {
                if (u) {
                  if (H = H || window.event, H.buttons)
                    var N = H.buttons;
                  else if (H.button)
                    var N = H.button;
                  else
                    var N = H.which;
                  N ? (u.element.style.top = u.top + (H.clientY - u.y) + u.height / 2 + "px", u.element.style.left = u.left + (H.clientX - u.x) + u.width / 2 + "px", u.element.style.cursor = "move") : u.element.style.cursor = "auto";
                }
              };
              document.addEventListener("keydown", r), document.addEventListener("mouseup", Y), document.addEventListener("mousedown", re), document.addEventListener("mousemove", ne);
            }, I = function(u, r) {
              var Y = {};
              Y.options = {};
              var re = {
                url: null,
                onopen: null,
                onclose: null,
                onload: null,
                closed: !1,
                width: null,
                height: null,
                title: null,
                padding: null,
                backdrop: !0,
                icon: null
              };
              for (var ne in re)
                r && r.hasOwnProperty(ne) ? Y.options[ne] = r[ne] : Y.options[ne] = re[ne];
              !Y.options.title && u.getAttribute("title") && (Y.options.title = u.getAttribute("title"));
              for (var H = document.createElement("div"); u.children[0]; )
                H.appendChild(u.children[0]);
              for (Y.title = document.createElement("div"), Y.title.className = "jmodal_title", Y.options.icon && Y.title.setAttribute("data-icon", Y.options.icon), Y.content = document.createElement("div"), Y.content.className = "jmodal_content", Y.content.innerHTML = u.innerHTML; H.children[0]; )
                Y.content.appendChild(H.children[0]);
              if (Y.container = document.createElement("div"), Y.container.className = "jmodal", Y.container.appendChild(Y.title), Y.container.appendChild(Y.content), Y.options.padding && (Y.content.style.padding = Y.options.padding), Y.options.width && (Y.container.style.width = Y.options.width), Y.options.height && (Y.container.style.height = Y.options.height), Y.options.title) {
                var N = document.createElement("h4");
                N.innerText = Y.options.title, Y.title.appendChild(N);
              }
              if (u.innerHTML = "", u.style.display = "none", u.appendChild(Y.container), Y.options.backdrop) {
                var V = document.createElement("div");
                V.className = "jmodal_backdrop", V.onclick = function() {
                  Y.close();
                }, u.appendChild(V);
              }
              return Y.open = function() {
                u.style.display = "block";
                var K = Y.container.getBoundingClientRect();
                l.getWindowWidth() < K.width ? (Y.container.style.top = "", Y.container.style.left = "", Y.container.classList.add("jmodal_fullscreen"), M.slideBottom(Y.container, 1)) : Y.options.backdrop && (V.style.display = "block"), typeof Y.options.onopen == "function" && Y.options.onopen(u, Y);
              }, Y.resetPosition = function() {
                Y.container.style.top = "", Y.container.style.left = "";
              }, Y.isOpen = function() {
                return u.style.display != "none";
              }, Y.close = function() {
                Y.isOpen() && (u.style.display = "none", Y.options.backdrop && (V.style.display = ""), Y.container.classList.remove("jmodal_fullscreen"), typeof Y.options.onclose == "function" && Y.options.onclose(u, Y));
              }, Y.options.url ? b({
                url: Y.options.url,
                method: "GET",
                dataType: "text/html",
                success: function(K) {
                  Y.content.innerHTML = K, Y.options.closed || Y.open(), typeof Y.options.onload == "function" && Y.options.onload(Y);
                }
              }) : (Y.options.closed || Y.open(), typeof Y.options.onload == "function" && Y.options.onload(Y)), u.modal = Y, E(), E = function() {
              }, Y;
            };
            return I;
          }
          var Pe = Ie();
          function Ue() {
            var E = function(I) {
              var u = {};
              u.options = {};
              var r = {
                icon: null,
                name: "Notification",
                date: null,
                error: null,
                title: null,
                message: null,
                timeout: 4e3,
                autoHide: !0,
                closeable: !0
              };
              for (var Y in r)
                I && I.hasOwnProperty(Y) ? u.options[Y] = I[Y] : u.options[Y] = r[Y];
              var re = document.createElement("div");
              re.className = "jnotification", u.options.error && re.classList.add("jnotification-error");
              var ne = document.createElement("div");
              ne.className = "jnotification-container", re.appendChild(ne);
              var H = document.createElement("div");
              H.className = "jnotification-header", ne.appendChild(H);
              var N = document.createElement("div");
              if (N.className = "jnotification-image", H.appendChild(N), u.options.icon) {
                var V = document.createElement("img");
                V.src = u.options.icon, N.appendChild(V);
              }
              var K = document.createElement("div");
              if (K.className = "jnotification-name", K.innerHTML = u.options.name, H.appendChild(K), u.options.closeable == !0) {
                var ae = document.createElement("div");
                ae.className = "jnotification-close", ae.onclick = function() {
                  u.hide();
                }, H.appendChild(ae);
              }
              var xe = document.createElement("div");
              xe.className = "jnotification-date", H.appendChild(xe);
              var fe = document.createElement("div");
              if (fe.className = "jnotification-content", ne.appendChild(fe), u.options.title) {
                var be = document.createElement("div");
                be.className = "jnotification-title", be.innerHTML = u.options.title, fe.appendChild(be);
              }
              var Ae = document.createElement("div");
              if (Ae.className = "jnotification-message", Ae.innerHTML = u.options.message, fe.appendChild(Ae), u.show = function() {
                document.body.appendChild(re), l.getWindowWidth() > 800 ? M.fadeIn(re) : M.slideTop(re, 1);
              }, u.hide = function() {
                l.getWindowWidth() > 800 ? M.fadeOut(re, function() {
                  re.parentNode && (re.parentNode.removeChild(re), Se && clearTimeout(Se));
                }) : M.slideTop(re, 0, function() {
                  re.parentNode && (re.parentNode.removeChild(re), Se && clearTimeout(Se));
                });
              }, u.show(), u.options.autoHide == !0)
                var Se = setTimeout(function() {
                  u.hide();
                }, u.options.timeout);
              return l.getWindowWidth() < 800 && re.addEventListener("swipeup", function(Oe) {
                u.hide(), Oe.preventDefault(), Oe.stopPropagation();
              }), u;
            };
            return E.isVisible = function() {
              var I = document.querySelector(".jnotification");
              return !!(I && I.parentNode);
            }, E;
          }
          var Ge = Ue();
          function lt(E, I) {
            var u = {};
            u.options = {};
            var r = {
              value: 0,
              onchange: null,
              width: null
            };
            for (var Y in r)
              I && I.hasOwnProperty(Y) ? u.options[Y] = I[Y] : u.options[Y] = r[Y];
            E.classList.add("jprogressbar"), E.setAttribute("tabindex", 1), E.setAttribute("data-value", u.options.value);
            var re = document.createElement("div");
            re.style.width = u.options.value + "%", re.style.color = "#fff", E.appendChild(re), u.options.width && (E.style.width = u.options.width), u.setValue = function(H) {
              H = parseInt(H), u.options.value = H, re.style.width = H + "%", E.setAttribute("data-value", H + "%"), H < 6 ? E.style.color = "#000" : E.style.color = "#fff", u.options.value = H, typeof u.options.onchange == "function" && u.options.onchange(E, H), E.value != u.options.value && (E.value = u.options.value, typeof E.oninput == "function" && E.oninput({
                type: "input",
                target: E,
                value: E.value
              }));
            }, u.getValue = function() {
              return u.options.value;
            };
            var ne = function(H) {
              if (H.which) {
                var N = E.getBoundingClientRect();
                if (H.changedTouches && H.changedTouches[0]) {
                  var V = H.changedTouches[0].clientX;
                  H.changedTouches[0].clientY;
                } else {
                  var V = H.clientX;
                  H.clientY;
                }
                u.setValue(Math.round((V - N.left) / N.width * 100));
              }
            };
            return "touchstart" in document.documentElement ? (E.addEventListener("touchstart", ne), E.addEventListener("touchend", ne)) : (E.addEventListener("mousedown", ne), E.addEventListener("mousemove", ne)), E.change = u.setValue, E.val = function(H) {
              if (H === void 0)
                return u.getValue();
              u.setValue(H);
            }, E.progressbar = u, u;
          }
          function it(E, I) {
            if (E.rating)
              return E.rating.setOptions(I, !0);
            var u = {};
            u.options = {}, u.setOptions = function(Y, re) {
              var ne = {
                number: 5,
                value: 0,
                tooltip: ["Very bad", "Bad", "Average", "Good", "Very good"],
                onchange: null
              };
              for (var H in ne)
                Y && Y.hasOwnProperty(H) ? u.options[H] = Y[H] : (typeof u.options[H] > "u" || re === !0) && (u.options[H] = ne[H]);
              E.innerHTML = "";
              for (var N = 0; N < u.options.number; N++) {
                var V = document.createElement("div");
                V.setAttribute("data-index", N + 1), V.setAttribute("title", u.options.tooltip[N]), E.appendChild(V);
              }
              if (u.options.value)
                for (var N = 0; N < u.options.number; N++)
                  N < u.options.value && E.children[N].classList.add("jrating-selected");
              return u;
            }, u.setValue = function(Y) {
              for (var re = 0; re < u.options.number; re++)
                re < Y ? E.children[re].classList.add("jrating-selected") : (E.children[re].classList.remove("jrating-over"), E.children[re].classList.remove("jrating-selected"));
              u.options.value = Y, typeof u.options.onchange == "function" && u.options.onchange(E, Y), E.value != u.options.value && (E.value = u.options.value, typeof E.oninput == "function" && E.oninput({
                type: "input",
                target: E,
                value: E.value
              }));
            }, u.getValue = function() {
              return u.options.value;
            };
            var r = function() {
              u.setOptions(I), E.classList.add("jrating"), E.addEventListener("click", function(Y) {
                var re = Y.target.getAttribute("data-index");
                re != null && (re == u.options.value ? u.setValue(0) : u.setValue(re));
              }), E.addEventListener("mouseover", function(Y) {
                for (var re = Y.target.getAttribute("data-index"), ne = 0; ne < u.options.number; ne++)
                  ne < re ? E.children[ne].classList.add("jrating-over") : E.children[ne].classList.remove("jrating-over");
              }), E.addEventListener("mouseout", function(Y) {
                for (var re = 0; re < u.options.number; re++)
                  E.children[re].classList.remove("jrating-over");
              }), E.change = u.setValue, E.val = function(Y) {
                if (Y === void 0)
                  return u.getValue();
                u.setValue(Y);
              }, E.rating = u;
            };
            return r(), u;
          }
          function ft(E, I) {
            if (E.search)
              return E.search;
            var u = null, r = function(V) {
              if (V.target.classList.contains("jsearch_item"))
                var K = V.target;
              else
                var K = V.target.parentNode;
              H.selectIndex(K), V.preventDefault();
            }, Y = function(V) {
              if (typeof H.options.onsearch == "function") {
                var K = H.options.onsearch(H, V);
                K && (V = K);
              }
              if (N.innerHTML = "", !V.length)
                E.style.display = "";
              else {
                E.style.display = "block";
                for (var ae = V.length < 11 ? V.length : 10, xe = 0; xe < ae; xe++) {
                  if (typeof V[xe] == "string")
                    var fe = V[xe], be = V[xe];
                  else {
                    var fe = V[xe].text;
                    !fe && V[xe].name && (fe = V[xe].name);
                    var be = V[xe].value;
                    !be && V[xe].id && (be = V[xe].id);
                  }
                  var Ae = document.createElement("div");
                  Ae.setAttribute("data-value", be), Ae.setAttribute("data-text", fe), Ae.className = "jsearch_item", V[xe].id && Ae.setAttribute("id", V[xe].id), H.options.forceSelect && xe == 0 && Ae.classList.add("selected");
                  var Se = document.createElement("img");
                  V[xe].image ? Se.src = V[xe].image : Se.style.display = "none", Ae.appendChild(Se);
                  var Oe = document.createElement("div");
                  Oe.innerHTML = fe, Ae.appendChild(Oe), N.appendChild(Ae);
                }
              }
            }, re = function(V) {
              if (V != H.terms)
                if (H.terms = V, H.options.forceSelect ? u = 0 : u = null, Array.isArray(H.options.data)) {
                  var K = function(xe) {
                    if (typeof xe == "string") {
                      if (("" + xe).toLowerCase().search(V.toLowerCase()) >= 0)
                        return !0;
                    } else
                      for (var fe in xe) {
                        var be = xe[fe];
                        if (("" + be).toLowerCase().search(V.toLowerCase()) >= 0)
                          return !0;
                      }
                    return !1;
                  }, ae = H.options.data.filter(function(xe) {
                    return K(xe);
                  });
                  Y(ae);
                } else
                  b({
                    url: H.options.data + V,
                    method: "GET",
                    dataType: "json",
                    success: function(xe) {
                      Y(xe);
                    }
                  });
            }, ne = null, H = function(V) {
              ne && clearTimeout(ne), ne = setTimeout(function() {
                re(V);
              }, 500);
            };
            I.forceSelect === null && (I.forceSelect = !0), H.options = {
              data: I.data || null,
              input: I.input || null,
              searchByNode: I.searchByNode || null,
              onselect: I.onselect || null,
              forceSelect: I.forceSelect,
              onsearch: I.onsearch || null,
              onbeforesearch: I.onbeforesearch || null
            }, H.selectIndex = function(V) {
              var K = V.getAttribute("id"), ae = V.getAttribute("data-text"), xe = V.getAttribute("data-value"), fe = V.children[0].src || "";
              typeof H.options.onselect == "function" && H.options.onselect(H, ae, xe, K, fe), H.close();
            }, H.open = function() {
              E.style.display = "block";
            }, H.close = function() {
              ne && clearTimeout(ne), H.terms = "", N.innerHTML = "", E.style.display = "";
            }, H.isOpened = function() {
              return !!E.style.display;
            }, H.keydown = function(V) {
              H.isOpened() && (V.key == "Enter" ? u !== null && N.children[u] ? (H.selectIndex(N.children[u]), V.preventDefault()) : H.close() : V.key === "ArrowUp" ? (u !== null && N.children[0] && (N.children[u].classList.remove("selected"), !H.options.forceSelect && u === 0 ? u = null : (u = Math.max(0, u - 1), N.children[u].classList.add("selected"))), V.preventDefault()) : V.key === "ArrowDown" && (u == null ? u = -1 : N.children[u].classList.remove("selected"), u < 9 && N.children[u + 1] && u++, N.children[u].classList.add("selected"), V.preventDefault()));
            }, H.keyup = function(V) {
              if (!H.options.searchByNode && H.options.input)
                if (H.options.input.tagName === "DIV")
                  var K = H.options.input.innerText;
                else
                  var K = H.options.input.value;
              else {
                var ae = l.getNode();
                if (ae)
                  var K = ae.innerText;
              }
              if (typeof H.options.onbeforesearch == "function") {
                var xe = H.options.onbeforesearch(H, K);
                if (xe)
                  K = xe;
                else if (xe === !1)
                  return;
              }
              H(K);
            }, H.blur = function(V) {
              H.close();
            }, H.options.input && (H.options.input.addEventListener("keyup", H.keyup), H.options.input.addEventListener("keydown", H.keydown), H.options.input.addEventListener("blur", H.blur));
            var N = document.createElement("div");
            return N.classList.add("jsearch_container"), N.onmousedown = r, E.appendChild(N), E.classList.add("jsearch"), E.search = H, H;
          }
          function bt(E, I) {
            var u = {};
            if (u.options = {}, u.currentImage = null, I && (u.options = I), E.setAttribute("tabindex", "900"), u.options.items = [], !E.classList.contains("jslider")) {
              if (E.classList.add("jslider"), E.classList.add("unselectable"), u.options.height && (E.style.minHeight = parseInt(u.options.height) + "px"), u.options.width && (E.style.width = parseInt(u.options.width) + "px"), u.options.grid) {
                E.classList.add("jslider-grid");
                var r = E.children.length;
                r > 4 && E.setAttribute("data-total", r - 4), E.setAttribute("data-number", r > 4 ? 4 : r);
              }
              var Y = document.createElement("div");
              if (Y.classList.add("jslider-counter"), E.children.length > 0)
                for (var re = 0; re < E.children.length; re++) {
                  u.options.items.push(E.children[re]);
                  var ne = document.createElement("div");
                  ne.onclick = function() {
                    var ae = Array.prototype.slice.call(Y.children).indexOf(this);
                    u.show(u.currentImage = u.options.items[ae]);
                  }, Y.appendChild(ne);
                }
              var H = document.createElement("div");
              H.className = "jslider-caption";
              var N = document.createElement("div"), V = document.createElement("div");
              V.className = "jslider-close", V.innerHTML = "", V.onclick = function() {
                u.close();
              }, N.appendChild(H), N.appendChild(V);
            }
            u.updateCounter = function(ae) {
              for (var xe = 0; xe < Y.children.length; xe++)
                if (Y.children[xe].classList.contains("jslider-counter-focus")) {
                  Y.children[xe].classList.remove("jslider-counter-focus");
                  break;
                }
              Y.children[ae].classList.add("jslider-counter-focus");
            }, u.show = function(ae) {
              if (!ae)
                var ae = E.children[0];
              E.classList.add("jslider-focus"), E.classList.remove("jslider-grid"), E.appendChild(N), E.appendChild(Y);
              var xe = u.options.items.indexOf(ae);
              u.updateCounter(xe);
              for (var fe = 0; fe < E.children.length; fe++)
                E.children[fe].style.display = "";
              ae.style.display = "block", ae.previousElementSibling ? E.classList.add("jslider-left") : E.classList.remove("jslider-left"), ae.nextElementSibling && ae.nextElementSibling.tagName == "IMG" ? E.classList.add("jslider-right") : E.classList.remove("jslider-right"), u.currentImage = ae, u.currentImage.offsetHeight > u.currentImage.offsetWidth && u.currentImage.classList.add("jslider-vertical"), N.children[0].innerText = u.currentImage.getAttribute("title");
            }, u.open = function() {
              u.show(), typeof u.options.onopen == "function" && u.options.onopen(E);
            }, u.close = function() {
              E.classList.remove("jslider-focus"), E.classList.remove("jslider-left"), E.classList.remove("jslider-right"), u.options.grid && E.classList.add("jslider-grid");
              for (var ae = 0; ae < E.children.length; ae++)
                E.children[ae].style.display = "";
              Y.remove(), N.remove(), u.currentImage = null, typeof u.options.onclose == "function" && u.options.onclose(E);
            }, u.reset = function() {
              E.innerHTML = "";
            }, u.next = function() {
              var ae = u.currentImage.nextElementSibling;
              ae && ae.tagName === "IMG" && u.show(u.currentImage.nextElementSibling);
            }, u.prev = function() {
              u.currentImage.previousElementSibling && u.show(u.currentImage.previousElementSibling);
            };
            var K = function(ae) {
              if (ae.target.tagName == "IMG")
                u.show(ae.target);
              else if (!ae.target.classList.contains("jslider-close") && !(ae.target.parentNode.classList.contains("jslider-counter") || ae.target.classList.contains("jslider-counter"))) {
                var xe = ae.offsetX || ae.changedTouches[0].clientX;
                ae.target.clientWidth - xe < 40 ? u.next() : xe < 40 && u.prev();
              }
            };
            return "ontouchend" in document.documentElement ? E.addEventListener("touchend", K) : E.addEventListener("mouseup", K), E.addEventListener("swipeleft", function(ae) {
              u.next(), ae.preventDefault(), ae.stopPropagation();
            }), E.addEventListener("swiperight", function(ae) {
              u.prev(), ae.preventDefault(), ae.stopPropagation();
            }), E.addEventListener("keydown", function(ae) {
              ae.which == 27 && u.close();
            }), E.slider = u, u;
          }
          function vt(E, I) {
            if (E.tags)
              return E.tags.setOptions(I, !0);
            var u = { type: "tags" };
            u.options = {};
            var r = function() {
              return !!(u.options.limit && E.children.length >= u.options.limit);
            }, Y = null, re = null;
            u.setOptions = function(te, ye) {
              var _e = {
                value: "",
                limit: null,
                search: null,
                placeholder: null,
                validation: null,
                onbeforepaste: null,
                onbeforechange: null,
                onremoveitem: null,
                onlimit: null,
                onchange: null,
                onfocus: null,
                onblur: null,
                onload: null
              };
              for (var q in _e)
                te && te.hasOwnProperty(q) ? u.options[q] = te[q] : (typeof u.options[q] > "u" || ye === !0) && (u.options[q] = _e[q]);
              return u.options.placeholder ? E.setAttribute("data-placeholder", u.options.placeholder) : E.removeAttribute("data-placeholder"), E.placeholder = u.options.placeholder, u.setValue(u.options.value), V(), u.options.search ? re || (re = document.createElement("div"), E.parentNode.insertBefore(re, E.nextSibling), Y = ft(re, {
                data: u.options.search,
                onselect: function(ee, j, R) {
                  u.selectIndex(j, R);
                }
              })) : re && (Y = null, re.remove(), re = null), u;
            }, u.add = function(te, ye) {
              if (typeof u.options.onbeforechange == "function") {
                var _e = u.options.onbeforechange(E, u, u.options.value, te);
                if (_e === !1)
                  return !1;
                _e != null && (te = _e);
              }
              if (Y && Y.close(), r())
                typeof u.options.onlimit == "function" ? u.options.onlimit(u, u.options.limit) : alert(s.translate("You reach the limit number of entries") + " " + u.options.limit);
              else {
                var q = l.getNode();
                if (q && q.parentNode && q.parentNode.classList.contains("jtags") && q.nextSibling && !(q.nextSibling.innerText && q.nextSibling.innerText.trim()))
                  ee = q.nextSibling;
                else {
                  if (E.lastChild && (E.lastChild.innerText.trim() || E.removeChild(E.lastChild)), !te || typeof te == "string")
                    var ee = H(te, te, q);
                  else
                    for (var j = 0; j <= te.length; j++)
                      if (!r()) {
                        if (!te[j] || typeof te[j] == "string")
                          var R = te[j] || "", J = null;
                        else
                          var R = te[j].text, J = te[j].value;
                        var ee = H(R, J);
                      }
                  N();
                }
                ye && ne(ee);
              }
            }, u.setLimit = function(te) {
              for (u.options.limit = te, E.children.length - te; E.children.length > te; )
                E.removeChild(E.lastChild);
            }, u.remove = function(te) {
              te.parentNode.removeChild(te), E.children.length ? N() : u.add("", !0), typeof u.options.onremoveitem == "function" && u.options.onremoveitem(E, u, te);
            }, u.getData = function() {
              for (var te = [], ye = 0; ye < E.children.length; ye++) {
                var _e = E.children[ye].innerText.replace(`
`, ""), q = E.children[ye].getAttribute("data-value");
                q || (q = _e), (_e || q) && te.push({ text: _e, value: q });
              }
              return te;
            }, u.getValue = function(te) {
              var ye = null;
              if (te != null)
                ye = E.children[te].getAttribute("data-value"), ye || (ye = E.children[te].innerText.replace(`
`, ""));
              else {
                for (var _e = [], q = 0; q < E.children.length; q++)
                  ye = E.children[q].innerText.replace(`
`, ""), ye && _e.push(u.getValue(q));
                ye = _e.join(",");
              }
              return ye;
            }, u.setValue = function(te) {
              if (!te)
                u.reset();
              else if (E.value != te)
                if (Array.isArray(te))
                  u.add(te);
                else {
                  var ye = ("" + te).trim(), _e = ae(ye);
                  E.innerHTML = "", u.add(_e);
                }
            }, u.reset = function() {
              E.classList.add("jtags-empty"), E.innerHTML = "<div></div>", N();
            }, u.isValid = function() {
              for (var te = 0, ye = 0; ye < E.children.length; ye++)
                E.children[ye].classList.contains("jtags_error") && te++;
              return te == 0;
            }, u.selectIndex = function(te, ye) {
              var _e = l.getNode();
              _e && (_e.innerText = te, ye && _e.setAttribute("data-value", ye), _e.classList.remove("jtags_error"), r() || u.add("", !0));
            }, u.search = function(te) {
              te.innerText;
            }, u.destroy = function() {
              E.removeEventListener("mouseup", Se), E.removeEventListener("keydown", fe), E.removeEventListener("keyup", be), E.removeEventListener("paste", Ae), E.removeEventListener("focus", Oe), E.removeEventListener("blur", Ze), E.parentNode.removeChild(E);
            };
            var ne = function(te) {
              if (E.children.length) {
                var ye = document.createRange(), _e = window.getSelection();
                if (!te)
                  var te = E.childNodes[E.childNodes.length - 1];
                ye.setStart(te, te.length), ye.collapse(!0), _e.removeAllRanges(), _e.addRange(ye), E.scrollLeft = E.scrollWidth;
              }
            }, H = function(te, ye, _e) {
              var q = document.createElement("div");
              return q.textContent = te || "", ye && q.setAttribute("data-value", ye), _e && _e.parentNode.classList.contains("jtags") ? E.insertBefore(q, _e.nextSibling) : E.appendChild(q), q;
            }, N = function() {
              var te = u.getValue();
              te != u.options.value && (u.options.value = te, typeof u.options.onchange == "function" && u.options.onchange(E, u, u.options.value), E.value != u.options.value && (E.value = u.options.value, typeof E.oninput == "function" && E.oninput({
                type: "input",
                target: E,
                value: E.value
              }))), V();
            }, V = function() {
              for (var te = 0; te < E.children.length; te++)
                E.children[te].tagName === "DIV" && (u.getValue(te) ? (E.children[te].classList.add("jtags_label"), typeof u.options.validation == "function" && u.getValue(te) ? u.options.validation(E.children[te], E.children[te].innerText, E.children[te].getAttribute("data-value")) ? E.children[te].classList.remove("jtags_error") : E.children[te].classList.add("jtags_error") : E.children[te].classList.remove("jtags_error")) : E.children[te].classList.remove("jtags_label"));
              K();
            }, K = function() {
              E.innerText.trim() ? E.classList.remove("jtags-empty") : (!E.children.length || E.children[0].tagName === "BR") && (E.innerHTML = "", ne(H()));
            }, ae = function(te) {
              var ye = [], _e = "";
              if (te = te.trim(), te) {
                for (var q = 0; q < te.length; q++)
                  te[q] == "," || te[q] == ";" || te[q] == `
` ? _e && (ye.push(_e.trim()), _e = "") : _e += te[q];
                _e && ye.push(_e);
              }
              return ye;
            }, xe = 0, fe = function(te) {
              if (xe = window.getSelection().anchorOffset, K(), te.key === "Tab" || te.key === ";" || te.key === ",") {
                var ye = window.getSelection().anchorOffset;
                ye > 1 && (r() ? typeof u.options.onlimit == "function" && u.options.onlimit(u, u.options.limit) : u.add("", !0)), te.preventDefault();
              } else if (te.key == "Enter") {
                if (!Y || !Y.isOpened()) {
                  var ye = window.getSelection().anchorOffset;
                  ye > 1 && (r() || u.add("", !0)), te.preventDefault();
                }
              } else te.key == "Backspace" && E.children.length == 1 && window.getSelection().anchorOffset < 1 && te.preventDefault();
              Y && Y.keydown(te), K();
            }, be = function(te) {
              if (te.which == 39) {
                var ye = window.getSelection().anchorOffset;
                ye > 1 && ye == xe && u.add("", !0);
              } else te.which == 13 || te.which == 38 || te.which == 40 ? te.preventDefault() : Y && Y.keyup(te);
              V();
            }, Ae = function(te) {
              if (te.clipboardData || te.originalEvent.clipboardData)
                var ye = (te.originalEvent || te).clipboardData.getData("text/plain");
              else if (window.clipboardData)
                var ye = window.clipboardData.getData("Text");
              var _e = ae(ye);
              if (typeof u.options.onbeforepaste == "function") {
                var q = u.options.onbeforepaste(E, u, _e);
                if (q === !1)
                  return te.preventDefault(), !1;
                q && (_e = q);
              }
              _e.length > 1 ? (u.add(_e, !0), te.preventDefault()) : _e[0] && (document.execCommand("insertText", !1, _e[0]), te.preventDefault());
            }, Se = function(te) {
              if (te.target.parentNode && te.target.parentNode.classList.contains("jtags") && (te.target.classList.contains("jtags_label") || te.target.classList.contains("jtags_error"))) {
                var ye = te.target.getBoundingClientRect();
                ye.width - (te.clientX - ye.left) < 16 && u.remove(te.target);
              }
              te.target == E && ne();
            }, Oe = function() {
              E.classList.contains("jtags-focus") || ((!E.children.length || u.getValue(E.children.length - 1)) && (r() || H("")), typeof u.options.onfocus == "function" && u.options.onfocus(E, u, u.getValue()), E.classList.add("jtags-focus"));
            }, Ze = function() {
              if (E.classList.contains("jtags-focus")) {
                Y && Y.close();
                for (var te = 0; te < E.children.length - 1; te++)
                  u.getValue(te) || E.removeChild(E.children[te]);
                N(), E.classList.remove("jtags-focus"), typeof u.options.onblur == "function" && u.options.onblur(E, u, u.getValue());
              }
            }, et = function() {
              "touchend" in document.documentElement ? E.addEventListener("touchend", Se) : E.addEventListener("mouseup", Se), E.addEventListener("keydown", fe), E.addEventListener("keyup", be), E.addEventListener("paste", Ae), E.addEventListener("focus", Oe), E.addEventListener("blur", Ze), E.setAttribute("contenteditable", !0), E.classList.add("jtags"), u.setOptions(I), typeof u.options.onload == "function" && u.options.onload(E, u), E.change = u.setValue, E.val = function(te) {
                if (te === void 0)
                  return u.getValue();
                u.setValue(te);
              }, E.tags = u;
            };
            return et(), u;
          }
          function _t(E, I) {
            var u = {};
            u.options = {};
            var r = {
              type: "image",
              extension: "*",
              input: !1,
              minWidth: !1,
              maxWidth: null,
              maxHeight: null,
              maxJpegSizeBytes: null,
              // For example, 350Kb would be 350000
              onchange: null,
              multiple: !1,
              remoteParser: null
            };
            for (var Y in r)
              I && I.hasOwnProperty(Y) ? u.options[Y] = I[Y] : u.options[Y] = r[Y];
            u.options.multiple == !0 && E.setAttribute("data-multiple", !0), E.content = [], E.classList.add("jupload"), u.options.input == !0 && E.classList.add("input"), u.add = function(N) {
              if (u.options.multiple == !1 && (E.content = [], E.innerText = ""), u.options.type == "image") {
                var V = document.createElement("img");
                V.setAttribute("src", N.file), V.setAttribute("tabindex", -1), E.getAttribute("name") || (V.className = "jfile", V.content = N), E.appendChild(V);
              } else {
                if (N.name)
                  var K = N.name;
                else
                  var K = N.file;
                var ae = document.createElement("div");
                ae.innerText = K || u.options.type, ae.classList.add("jupload-item"), ae.setAttribute("tabindex", -1), E.appendChild(ae);
              }
              N.content && (N.file = l.guid()), E.content.push(N), typeof u.options.onchange == "function" && u.options.onchange(E, N);
            }, u.addFromFile = function(N) {
              var V = N.type.split("/");
              if (V[0] == u.options.type) {
                var K = new FileReader();
                K.addEventListener("load", function(ae) {
                  var xe = {
                    file: ae.srcElement.result,
                    extension: N.name.substr(N.name.lastIndexOf(".") + 1),
                    name: N.name,
                    size: N.size,
                    lastmodified: N.lastModified,
                    content: ae.srcElement.result
                  };
                  u.add(xe);
                }), K.readAsDataURL(N);
              } else
                alert(s.translate("This extension is not allowed"));
            }, u.addFromUrl = function(N) {
              if (N.substr(0, 4) != "data" && !u.options.remoteParser)
                console.error("remoteParser not defined in your initialization");
              else if (N.substr(0, 4) == "data") {
                var V = N.split(";");
                V = V[0].split("/");
                var K = V[0].replace("data:", "");
                if (K == u.options.type) {
                  var ae = {
                    file: N,
                    name: "",
                    extension: V[1],
                    content: N
                  };
                  u.add(ae);
                } else
                  alert(u.options.text.extensionNotAllowed);
              } else {
                var V = N.substr(N.lastIndexOf(".") + 1);
                N = u.options.remoteParser + N, b({
                  url: N,
                  type: "GET",
                  dataType: "blob",
                  success: function(fe) {
                  }
                });
              }
            };
            var re = u.options.type + "/" + u.options.extension, ne = document.createElement("input");
            ne.type = "file", ne.setAttribute("accept", re), ne.onchange = function() {
              for (var N = 0; N < this.files.length; N++)
                u.addFromFile(this.files[N]);
            }, u.options.multiple == !0 && ne.setAttribute("multiple", !0);
            var H = null;
            return E.addEventListener("click", function(N) {
              H = null, !E.children.length || N.target === E ? l.click(ne) : N.target.parentNode == E && (H = N.target);
            }), E.addEventListener("dblclick", function(N) {
              l.click(ne);
            }), E.addEventListener("dragenter", function(N) {
              E.style.border = "1px dashed #000";
            }), E.addEventListener("dragleave", function(N) {
              E.style.border = "1px solid #eee";
            }), E.addEventListener("dragstop", function(N) {
              E.style.border = "1px solid #eee";
            }), E.addEventListener("dragover", function(N) {
              N.preventDefault();
            }), E.addEventListener("keydown", function(N) {
              if (H && N.which == 46) {
                var V = Array.prototype.indexOf.call(E.children, H);
                V >= 0 && (E.content.splice(V, 1), H.remove(), H = null);
              }
            }), E.addEventListener("drop", function(N) {
              N.preventDefault(), N.stopPropagation();
              var V = (N.originalEvent || N).dataTransfer.getData("text/html"), K = (N.originalEvent || N).dataTransfer.files;
              if (K.length)
                for (var ae = 0; ae < N.dataTransfer.files.length; ae++)
                  u.addFromFile(N.dataTransfer.files[ae]);
              else if (V) {
                u.options.multiple == !1 && (E.innerText = "");
                var xe = document.createElement("div");
                xe.innerHTML = V;
                var fe = xe.querySelectorAll("img");
                if (fe.length)
                  for (var ae = 0; ae < fe.length; ae++)
                    u.addFromUrl(fe[ae].src);
              }
              return E.style.border = "1px solid #eee", !1;
            }), E.val = function(N) {
              if (N === void 0)
                return E.content && E.content.length ? E.content : null;
              if (E.innerText = "", E.content = [], N)
                if (Array.isArray(N))
                  for (var V = 0; V < N.length; V++)
                    typeof N[V] == "string" ? u.add({ file: N[V] }) : u.add(N[V]);
                else typeof N == "string" && u.add({ file: N });
            }, E.upload = E.image = u, u;
          }
          var St = _(195), It = /* @__PURE__ */ _.n(St), gt = {
            // Helpers
            ...s,
            ...l,
            /** Current version */
            version: "5.9.3",
            /** Bind new extensions to Jsuites */
            setExtensions: function(E) {
              if (typeof E == "object")
                for (var I = Object.keys(E), u = 0; u < I.length; u++)
                  gt[I[u]] = E[I[u]];
            },
            tracking: S,
            path: a,
            sorting: h,
            lazyLoading: f,
            // Plugins
            ajax: b,
            animation: M,
            calendar: P,
            color: se,
            contextmenu: de,
            dropdown: ve,
            editor: Ke,
            floating: Me,
            form: we,
            mask: O,
            modal: Pe,
            notification: Ge,
            palette: he,
            picker: Be,
            progressbar: lt,
            rating: it,
            search: ft,
            slider: bt,
            tabs: Z,
            tags: vt,
            toolbar: Fe,
            upload: _t,
            validations: ot
          };
          gt.image = _t, gt.image.create = function(E) {
            var I = document.createElement("img");
            return I.setAttribute("src", E.file), I.className = "jfile", I.setAttribute("tabindex", -1), I.content = E, I;
          }, gt.tracker = we, gt.loading = M.loading, gt.sha512 = It(), typeof document < "u" && function() {
            if (typeof window.jSuitesStateControl > "u")
              window.jSuitesStateControl = [];
            else
              return;
            const E = function(te, ye) {
              return te[ye.type] && te[ye.type] == ye || te.component && te.component == ye ? !0 : te.parentNode ? E(te.parentNode, ye) : !1;
            }, I = function(te) {
              let ye = window.jSuitesStateControl;
              if (ye && ye.length > 0)
                for (let _e = 0; _e < ye.length; _e++)
                  ye[_e] && !E(te, ye[_e]) && ye[_e].close();
            };
            let u = 15, r = !1, Y = {
              x: null,
              y: null
            }, re = document.createElement("div");
            re.classList.add("jtooltip");
            const ne = function(te) {
              return te && (te.shadowRoot || te.tagName && te.tagName.includes("-"));
            }, H = function(te) {
              let ye, _e, q = te.path || te.composedPath && te.composedPath();
              return q ? (_e = q[0], _e && ne(_e) && !_e.shadowRoot && te.toElement && (_e = te.toElement)) : (te.target && ne(te.target) ? ye = te.target.shadowRoot : ye = document, _e = ye.elementFromPoint(x, y)), _e;
            }, N = function(te) {
              if (te.changedTouches && te.changedTouches[0])
                var ye = te.changedTouches[0].clientX, _e = te.changedTouches[0].clientY;
              else
                var ye = te.clientX, _e = te.clientY;
              let q = H(te), ee = q && q.tagName === "DIV" && q.getAttribute("contentEditable"), j = gt.findElement(q, "jpanel");
              if (j && !j.classList.contains("readonly") && !ee) {
                let R = j.getBoundingClientRect(), J = 0;
                j.style.rotate && (J = parseFloat(j.style.rotate));
                let ue = "move";
                q.getAttribute("data-action") ? ue = q.getAttribute("data-action") : j.style.cursor ? ue = "resize" : j.style.cursor = "move", r = {
                  action: ue,
                  a: J,
                  e: j,
                  x: ye,
                  y: _e,
                  l: R.left,
                  t: R.top,
                  b: R.bottom,
                  r: R.right,
                  w: R.width,
                  h: R.height,
                  d: j.style.cursor,
                  actioned: !1
                }, j.style.width || (j.style.width = R.width + "px"), j.style.height || (j.style.height = R.height + "px");
              } else
                r = !1;
              I(q), be(te);
            }, V = function(te, ye, _e, q, ee, j) {
              const R = _e - te, J = q - ye, ue = ee - te, Q = j - ye;
              let pe = Math.atan2(J, R), Te = Math.atan2(Q, ue) - pe;
              return Te = Te * (180 / Math.PI), Te < 0 && (Te += 360), Te;
            }, K = function(te) {
              r && r.e && (typeof r.e.refresh == "function" && Y.actioned && r.e.refresh(), r.e.style.cursor = ""), Y = {
                x: null,
                y: null
              }, r = !1;
            }, ae = function(te) {
              if (r) {
                let j = te.clientX || te.pageX, R = te.clientY || te.pageY;
                if (Y.x == null && Y.y == null && (Y.x = j, Y.y = R), r.action === "move") {
                  var ye = j - Y.x, _e = R - Y.y, q = r.e.offsetTop + _e, ee = r.e.offsetLeft + ye;
                  r.e.style.top = q + "px", r.e.style.left = ee + "px", typeof r.e.refresh == "function" && (Y.actioned = !0, r.e.refresh("position", q, ee));
                } else if (r.action === "rotate") {
                  let J = r.l + r.w / 2, ue = r.t + r.h / 2, Q = V(J, ue, r.x, r.y, j, R);
                  Q = Q + r.a % 360, Q = Math.round(Q / 2) * 2, r.e.style.rotate = `${Q}deg`, typeof r.e.refresh == "function" && (Y.actioned = !0, r.e.refresh("rotate", Q));
                } else if (r.action === "resize") {
                  let J = null, ue = null, Q = null, pe = null;
                  r.d == "e-resize" || r.d == "ne-resize" || r.d == "se-resize" ? (Q = r.e.offsetWidth + (j - Y.x), te.shiftKey && (pe = r.e.offsetHeight + (j - Y.x) * (r.e.offsetHeight / r.e.offsetWidth))) : (r.d === "w-resize" || r.d == "nw-resize" || r.d == "sw-resize") && (ue = r.e.offsetLeft + (j - Y.x), Q = r.e.offsetLeft + r.e.offsetWidth - ue, te.shiftKey && (pe = r.e.offsetHeight - (j - Y.x) * (r.e.offsetHeight / r.e.offsetWidth))), r.d == "s-resize" || r.d == "se-resize" || r.d == "sw-resize" ? pe || (pe = r.e.offsetHeight + (R - Y.y)) : (r.d === "n-resize" || r.d == "ne-resize" || r.d == "nw-resize") && (J = r.e.offsetTop + (R - Y.y), pe = r.e.offsetTop + r.e.offsetHeight - J), J && (r.e.style.top = J + "px"), ue && (r.e.style.left = ue + "px"), Q && (r.e.style.width = Q + "px"), pe && (r.e.style.height = pe + "px"), typeof r.e.refresh == "function" && (Y.actioned = !0, r.e.refresh("dimensions", Q, pe));
                }
                Y.x = j, Y.y = R;
              } else {
                let j = H(te), R = gt.findElement(j, "jpanel");
                if (R) {
                  if (R.classList.contains("jpanel-controls")) {
                    let ue = j.getAttribute("data-position");
                    ue ? R.style.cursor = ue : R.style.cursor = "";
                  } else if (R.getAttribute("tabindex")) {
                    let ue = R.getBoundingClientRect();
                    te.clientY - ue.top < u ? ue.width - (te.clientX - ue.left) < u ? R.style.cursor = "ne-resize" : te.clientX - ue.left < u ? R.style.cursor = "nw-resize" : R.style.cursor = "n-resize" : ue.height - (te.clientY - ue.top) < u ? ue.width - (te.clientX - ue.left) < u ? R.style.cursor = "se-resize" : te.clientX - ue.left < u ? R.style.cursor = "sw-resize" : R.style.cursor = "s-resize" : ue.width - (te.clientX - ue.left) < u ? R.style.cursor = "e-resize" : te.clientX - ue.left < u ? R.style.cursor = "w-resize" : R.style.cursor = "";
                  }
                }
              }
            };
            let xe = ["n", "ne", "e", "se", "s", "sw", "w", "nw", "rotate"];
            xe.forEach(function(te, ye) {
              xe[ye] = document.createElement("div"), xe[ye].classList.add("jpanel-action"), te === "rotate" ? xe[ye].setAttribute("data-action", "rotate") : (xe[ye].setAttribute("data-action", "resize"), xe[ye].setAttribute("data-position", te + "-resize"));
            });
            let fe;
            const be = function(te) {
              let ye = H(te), _e = gt.findElement(ye, "jpanel");
              _e && !_e.classList.contains("readonly") && _e.classList.contains("jpanel-controls") ? (_e.append(...xe), _e.classList.contains("jpanel-rotate") || xe[xe.length - 1].remove(), fe = _e) : Ae();
            }, Ae = function(te) {
              fe && (xe.forEach(function(ye) {
                ye.remove();
              }), fe = null);
            }, Se = function(te) {
              var _e = H(te).getAttribute("data-tooltip");
              if (_e) {
                if (re.innerText = _e, te.changedTouches && te.changedTouches[0])
                  var q = te.changedTouches[0].clientX, ee = te.changedTouches[0].clientY;
                else
                  var q = te.clientX, ee = te.clientY;
                re.style.top = ee + "px", re.style.left = q + "px", document.body.appendChild(re);
              } else re.innerText && (re.innerText = "", document.body.removeChild(re));
            }, Oe = function(te) {
              var ye = document.activeElement;
              if (ye && typeof ye.contextmenu == "function")
                ye.contextmenu(te), te.preventDefault(), te.stopImmediatePropagation();
              else if (ye = gt.findElement(te.target, function(q) {
                return q.tagName && q.getAttribute("aria-contextmenu-id");
              }), ye) {
                var _e = document.querySelector("#" + ye);
                _e ? (_e.contextmenu.open(te), te.preventDefault(), te.stopImmediatePropagation()) : console.error("JSUITES: contextmenu id not found: " + ye);
              }
            }, Ze = function(te) {
              let ye = document.activeElement;
              ye && te.key === "Delete" && typeof ye.delete == "function" && (ye.delete(), te.preventDefault(), te.stopImmediatePropagation());
              let _e = window.jSuitesStateControl;
              _e && _e.length > 0 && (ye = _e[_e.length - 1], ye && te.key === "Escape" && typeof ye.isOpened == "function" && typeof ye.close == "function" && ye.isOpened() && (ye.close(), te.preventDefault(), te.stopImmediatePropagation()));
            }, et = function(te) {
              (te.target.getAttribute("data-mask") || te.target.mask) && gt.mask(te);
            };
            document.addEventListener("focusin", be), document.addEventListener("mouseup", K), document.addEventListener("mousedown", N), document.addEventListener("mousemove", ae), document.addEventListener("mouseover", Se), document.addEventListener("keydown", Ze), document.addEventListener("contextmenu", Oe), document.addEventListener("input", et);
          }();
          var Ot = gt;
        })(), o = G.default;
      }(), o;
    });
  }(jsuites$1)), jsuites$1.exports;
}
var dist$2 = { exports: {} }, dist$1 = dist$2.exports, hasRequiredDist$1;
function requireDist$1() {
  return hasRequiredDist$1 || (hasRequiredDist$1 = 1, function(n, g) {
    (function(o, p) {
      n.exports = p();
    })(dist$1, function() {
      var o;
      return function() {
        var p = { 765: function(z, m) {
          var s;
          s = function(w) {
            w.version = "1.0.2";
            var S = Math;
            function A(de, oe) {
              for (var ve = 0, Be = 0; ve < de.length; ++ve) Be = oe * Be + de[ve];
              return Be;
            }
            function l(de, oe, ve, Be, Fe) {
              if (oe === 0) return ve;
              if (oe === 1) return Be;
              for (var De = 2 / de, Ke = Be, U = 1; U < oe; ++U) Ke = Be * U * De + Fe * ve, ve = Be, Be = Ke;
              return Ke;
            }
            function a(de, oe, ve, Be, Fe) {
              return function(De, Ke) {
                if (Be) {
                  if (De === 0) return Be == 1 ? -1 / 0 : 1 / 0;
                  if (De < 0) return NaN;
                }
                return Ke === 0 ? de(De) : Ke === 1 ? oe(De) : Ke < 0 ? NaN : l(De, Ke |= 0, de(De), oe(De), Fe);
              };
            }
            var h, f, d, b, k, M, B, T, L, O, W, P, ce, he = function() {
              var de = 0.636619772, oe = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse(), ve = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse(), Be = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), Fe = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
              function De(Ne) {
                var we = 0, Ie = 0, Pe = 0, Ue = Ne * Ne;
                if (Ne < 8) we = (Ie = A(oe, Ue)) / (Pe = A(ve, Ue));
                else {
                  var Ge = Ne - 0.785398164;
                  Ie = A(Be, Ue = 64 / Ue), Pe = A(Fe, Ue), we = S.sqrt(de / Ne) * (S.cos(Ge) * Ie - S.sin(Ge) * Pe * 8 / Ne);
                }
                return we;
              }
              var Ke = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse(), U = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse(), Me = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), We = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
              function ot(Ne) {
                var we = 0, Ie = 0, Pe = 0, Ue = Ne * Ne, Ge = S.abs(Ne) - 2.356194491;
                return Math.abs(Ne) < 8 ? we = (Ie = Ne * A(Ke, Ue)) / (Pe = A(U, Ue)) : (Ie = A(Me, Ue = 64 / Ue), Pe = A(We, Ue), we = S.sqrt(de / S.abs(Ne)) * (S.cos(Ge) * Ie - S.sin(Ge) * Pe * 8 / S.abs(Ne)), Ne < 0 && (we = -we)), we;
              }
              return function Ne(we, Ie) {
                if (Ie = Math.round(Ie), !isFinite(we)) return isNaN(we) ? we : 0;
                if (Ie < 0) return (Ie % 2 ? -1 : 1) * Ne(we, -Ie);
                if (we < 0) return (Ie % 2 ? -1 : 1) * Ne(-we, Ie);
                if (Ie === 0) return De(we);
                if (Ie === 1) return ot(we);
                if (we === 0) return 0;
                var Pe = 0;
                if (we > Ie) Pe = l(we, Ie, De(we), ot(we), -1);
                else {
                  for (var Ue = !1, Ge = 0, lt = 0, it = 1, ft = 0, bt = 2 / we, vt = 2 * S.floor((Ie + S.floor(S.sqrt(40 * Ie))) / 2); vt > 0; vt--) ft = vt * bt * it - Ge, Ge = it, it = ft, S.abs(it) > 1e10 && (it *= 1e-10, Ge *= 1e-10, Pe *= 1e-10, lt *= 1e-10), Ue && (lt += it), Ue = !Ue, vt == Ie && (Pe = Ge);
                  Pe /= lt = 2 * lt - it;
                }
                return Pe;
              };
            }(), Z = (h = 0.636619772, f = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse(), d = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse(), b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), k = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse(), M = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse(), B = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse(), T = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), L = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse(), a(function(de) {
              var oe = 0, ve = 0, Be = 0, Fe = de * de, De = de - 0.785398164;
              return de < 8 ? oe = (ve = A(f, Fe)) / (Be = A(d, Fe)) + h * he(de, 0) * S.log(de) : (ve = A(b, Fe = 64 / Fe), Be = A(k, Fe), oe = S.sqrt(h / de) * (S.sin(De) * ve + S.cos(De) * Be * 8 / de)), oe;
            }, function(de) {
              var oe = 0, ve = 0, Be = 0, Fe = de * de, De = de - 2.356194491;
              return de < 8 ? oe = (ve = de * A(M, Fe)) / (Be = A(B, Fe)) + h * (he(de, 1) * S.log(de) - 1 / de) : (ve = A(T, Fe = 64 / Fe), Be = A(L, Fe), oe = S.sqrt(h / de) * (S.sin(De) * ve + S.cos(De) * Be * 8 / de)), oe;
            }, 0, 1, -1)), se = (O = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse(), W = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse(), P = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse(), ce = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse(), function de(oe, ve) {
              if ((ve = Math.round(ve)) === 0) return function(We) {
                return We <= 3.75 ? A(O, We * We / 14.0625) : S.exp(S.abs(We)) / S.sqrt(S.abs(We)) * A(W, 3.75 / S.abs(We));
              }(oe);
              if (ve === 1) return function(We) {
                return We < 3.75 ? We * A(P, We * We / 14.0625) : (We < 0 ? -1 : 1) * S.exp(S.abs(We)) / S.sqrt(S.abs(We)) * A(ce, 3.75 / S.abs(We));
              }(oe);
              if (ve < 0) return NaN;
              if (S.abs(oe) === 0) return 0;
              if (oe == 1 / 0) return 1 / 0;
              var Be, Fe = 0, De = 2 / S.abs(oe), Ke = 0, U = 1, Me = 0;
              for (Be = 2 * S.round((ve + S.round(S.sqrt(40 * ve))) / 2); Be > 0; Be--) Me = Be * De * U + Ke, Ke = U, U = Me, S.abs(U) > 1e10 && (U *= 1e-10, Ke *= 1e-10, Fe *= 1e-10), Be == ve && (Fe = Ke);
              return Fe *= de(oe, 0) / U, oe < 0 && ve % 2 ? -Fe : Fe;
            }), ge = function() {
              var de = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse(), oe = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse(), ve = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse(), Be = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
              return a(function(Fe) {
                return Fe <= 2 ? -S.log(Fe / 2) * se(Fe, 0) + A(de, Fe * Fe / 4) : S.exp(-Fe) / S.sqrt(Fe) * A(oe, 2 / Fe);
              }, function(Fe) {
                return Fe <= 2 ? S.log(Fe / 2) * se(Fe, 1) + 1 / Fe * A(ve, Fe * Fe / 4) : S.exp(-Fe) / S.sqrt(Fe) * A(Be, 2 / Fe);
              }, 0, 2, 1);
            }();
            w.besselj = he, w.bessely = Z, w.besseli = se, w.besselk = ge;
          }, s(typeof DO_NOT_EXPORT_BESSEL > "u" ? m : {});
        }, 162: function(z) {
          var m;
          z.exports = (m = function(s, w) {
            var S = Array.prototype.concat, A = Array.prototype.slice, l = Object.prototype.toString;
            function a(L, O) {
              var W = L > O ? L : O;
              return s.pow(10, 17 - ~~(s.log(W > 0 ? W : -W) * s.LOG10E));
            }
            var h = Array.isArray || function(L) {
              return l.call(L) === "[object Array]";
            };
            function f(L) {
              return l.call(L) === "[object Function]";
            }
            function d(L) {
              return typeof L == "number" && L - L == 0;
            }
            function b() {
              return new b._init(arguments);
            }
            function k() {
              return 0;
            }
            function M() {
              return 1;
            }
            function B(L, O) {
              return L === O ? 1 : 0;
            }
            b.fn = b.prototype, b._init = function(L) {
              if (h(L[0])) if (h(L[0][0])) {
                f(L[1]) && (L[0] = b.map(L[0], L[1]));
                for (var O = 0; O < L[0].length; O++) this[O] = L[0][O];
                this.length = L[0].length;
              } else this[0] = f(L[1]) ? b.map(L[0], L[1]) : L[0], this.length = 1;
              else if (d(L[0])) this[0] = b.seq.apply(null, L), this.length = 1;
              else {
                if (L[0] instanceof b) return b(L[0].toArray());
                this[0] = [], this.length = 1;
              }
              return this;
            }, b._init.prototype = b.prototype, b._init.constructor = b, b.utils = { calcRdx: a, isArray: h, isFunction: f, isNumber: d, toVector: function(L) {
              return S.apply([], L);
            } }, b._random_fn = s.random, b.setRandom = function(L) {
              if (typeof L != "function") throw new TypeError("fn is not a function");
              b._random_fn = L;
            }, b.extend = function(L) {
              var O, W;
              if (arguments.length === 1) {
                for (W in L) b[W] = L[W];
                return this;
              }
              for (O = 1; O < arguments.length; O++) for (W in arguments[O]) L[W] = arguments[O][W];
              return L;
            }, b.rows = function(L) {
              return L.length || 1;
            }, b.cols = function(L) {
              return L[0].length || 1;
            }, b.dimensions = function(L) {
              return { rows: b.rows(L), cols: b.cols(L) };
            }, b.row = function(L, O) {
              return h(O) ? O.map(function(W) {
                return b.row(L, W);
              }) : L[O];
            }, b.rowa = function(L, O) {
              return b.row(L, O);
            }, b.col = function(L, O) {
              if (h(O)) {
                var W = b.arange(L.length).map(function() {
                  return new Array(O.length);
                });
                return O.forEach(function(he, Z) {
                  b.arange(L.length).forEach(function(se) {
                    W[se][Z] = L[se][he];
                  });
                }), W;
              }
              for (var P = new Array(L.length), ce = 0; ce < L.length; ce++) P[ce] = [L[ce][O]];
              return P;
            }, b.cola = function(L, O) {
              return b.col(L, O).map(function(W) {
                return W[0];
              });
            }, b.diag = function(L) {
              for (var O = b.rows(L), W = new Array(O), P = 0; P < O; P++) W[P] = [L[P][P]];
              return W;
            }, b.antidiag = function(L) {
              for (var O = b.rows(L) - 1, W = new Array(O), P = 0; O >= 0; O--, P++) W[P] = [L[P][O]];
              return W;
            }, b.transpose = function(L) {
              var O, W, P, ce, he, Z = [];
              for (h(L[0]) || (L = [L]), W = L.length, P = L[0].length, he = 0; he < P; he++) {
                for (O = new Array(W), ce = 0; ce < W; ce++) O[ce] = L[ce][he];
                Z.push(O);
              }
              return Z.length === 1 ? Z[0] : Z;
            }, b.map = function(L, O, W) {
              var P, ce, he, Z, se;
              for (h(L[0]) || (L = [L]), ce = L.length, he = L[0].length, Z = W ? L : new Array(ce), P = 0; P < ce; P++) for (Z[P] || (Z[P] = new Array(he)), se = 0; se < he; se++) Z[P][se] = O(L[P][se], P, se);
              return Z.length === 1 ? Z[0] : Z;
            }, b.cumreduce = function(L, O, W) {
              var P, ce, he, Z, se;
              for (h(L[0]) || (L = [L]), ce = L.length, he = L[0].length, Z = W ? L : new Array(ce), P = 0; P < ce; P++) for (Z[P] || (Z[P] = new Array(he)), he > 0 && (Z[P][0] = L[P][0]), se = 1; se < he; se++) Z[P][se] = O(Z[P][se - 1], L[P][se]);
              return Z.length === 1 ? Z[0] : Z;
            }, b.alter = function(L, O) {
              return b.map(L, O, !0);
            }, b.create = function(L, O, W) {
              var P, ce, he = new Array(L);
              for (f(O) && (W = O, O = L), P = 0; P < L; P++) for (he[P] = new Array(O), ce = 0; ce < O; ce++) he[P][ce] = W(P, ce);
              return he;
            }, b.zeros = function(L, O) {
              return d(O) || (O = L), b.create(L, O, k);
            }, b.ones = function(L, O) {
              return d(O) || (O = L), b.create(L, O, M);
            }, b.rand = function(L, O) {
              return d(O) || (O = L), b.create(L, O, b._random_fn);
            }, b.identity = function(L, O) {
              return d(O) || (O = L), b.create(L, O, B);
            }, b.symmetric = function(L) {
              var O, W, P = L.length;
              if (L.length !== L[0].length) return !1;
              for (O = 0; O < P; O++) for (W = 0; W < P; W++) if (L[W][O] !== L[O][W]) return !1;
              return !0;
            }, b.clear = function(L) {
              return b.alter(L, k);
            }, b.seq = function(L, O, W, P) {
              f(P) || (P = !1);
              var ce, he = [], Z = a(L, O), se = (O * Z - L * Z) / ((W - 1) * Z), ge = L;
              for (ce = 0; ge <= O && ce < W; ge = (L * Z + se * Z * ++ce) / Z) he.push(P ? P(ge, ce) : ge);
              return he;
            }, b.arange = function(L, O, W) {
              var P, ce = [];
              if (W = W || 1, O === w && (O = L, L = 0), L === O || W === 0) return [];
              if (L < O && W < 0) return [];
              if (L > O && W > 0) return [];
              if (W > 0) for (P = L; P < O; P += W) ce.push(P);
              else for (P = L; P > O; P += W) ce.push(P);
              return ce;
            }, b.slice = /* @__PURE__ */ function() {
              function L(O, W, P, ce) {
                var he, Z = [], se = O.length;
                if (W === w && P === w && ce === w) return b.copy(O);
                if (ce = ce || 1, (W = (W = W || 0) >= 0 ? W : se + W) === (P = (P = P || O.length) >= 0 ? P : se + P) || ce === 0) return [];
                if (W < P && ce < 0) return [];
                if (W > P && ce > 0) return [];
                if (ce > 0) for (he = W; he < P; he += ce) Z.push(O[he]);
                else for (he = W; he > P; he += ce) Z.push(O[he]);
                return Z;
              }
              return function(O, W) {
                var P, ce;
                return d((W = W || {}).row) ? d(W.col) ? O[W.row][W.col] : L(b.rowa(O, W.row), (P = W.col || {}).start, P.end, P.step) : d(W.col) ? L(b.cola(O, W.col), (ce = W.row || {}).start, ce.end, ce.step) : (ce = W.row || {}, P = W.col || {}, L(O, ce.start, ce.end, ce.step).map(function(he) {
                  return L(he, P.start, P.end, P.step);
                }));
              };
            }(), b.sliceAssign = function(L, O, W) {
              var P, ce;
              if (d(O.row)) {
                if (d(O.col)) return L[O.row][O.col] = W;
                O.col = O.col || {}, O.col.start = O.col.start || 0, O.col.end = O.col.end || L[0].length, O.col.step = O.col.step || 1, P = b.arange(O.col.start, s.min(L.length, O.col.end), O.col.step);
                var he = O.row;
                return P.forEach(function(se, ge) {
                  L[he][se] = W[ge];
                }), L;
              }
              if (d(O.col)) {
                O.row = O.row || {}, O.row.start = O.row.start || 0, O.row.end = O.row.end || L.length, O.row.step = O.row.step || 1, ce = b.arange(O.row.start, s.min(L[0].length, O.row.end), O.row.step);
                var Z = O.col;
                return ce.forEach(function(se, ge) {
                  L[se][Z] = W[ge];
                }), L;
              }
              return W[0].length === w && (W = [W]), O.row.start = O.row.start || 0, O.row.end = O.row.end || L.length, O.row.step = O.row.step || 1, O.col.start = O.col.start || 0, O.col.end = O.col.end || L[0].length, O.col.step = O.col.step || 1, ce = b.arange(O.row.start, s.min(L.length, O.row.end), O.row.step), P = b.arange(O.col.start, s.min(L[0].length, O.col.end), O.col.step), ce.forEach(function(se, ge) {
                P.forEach(function(de, oe) {
                  L[se][de] = W[ge][oe];
                });
              }), L;
            }, b.diagonal = function(L) {
              var O = b.zeros(L.length, L.length);
              return L.forEach(function(W, P) {
                O[P][P] = W;
              }), O;
            }, b.copy = function(L) {
              return L.map(function(O) {
                return d(O) ? O : O.map(function(W) {
                  return W;
                });
              });
            };
            var T = b.prototype;
            return T.length = 0, T.push = Array.prototype.push, T.sort = Array.prototype.sort, T.splice = Array.prototype.splice, T.slice = Array.prototype.slice, T.toArray = function() {
              return this.length > 1 ? A.call(this) : A.call(this)[0];
            }, T.map = function(L, O) {
              return b(b.map(this, L, O));
            }, T.cumreduce = function(L, O) {
              return b(b.cumreduce(this, L, O));
            }, T.alter = function(L) {
              return b.alter(this, L), this;
            }, function(L) {
              for (var O = 0; O < L.length; O++) (function(W) {
                T[W] = function(P) {
                  var ce, he = this;
                  return P ? (setTimeout(function() {
                    P.call(he, T[W].call(he));
                  }), this) : (ce = b[W](this), h(ce) ? b(ce) : ce);
                };
              })(L[O]);
            }("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")), function(L) {
              for (var O = 0; O < L.length; O++) (function(W) {
                T[W] = function(P, ce) {
                  var he = this;
                  return ce ? (setTimeout(function() {
                    ce.call(he, T[W].call(he, P));
                  }), this) : b(b[W](this, P));
                };
              })(L[O]);
            }("row col".split(" ")), function(L) {
              for (var O = 0; O < L.length; O++) (function(W) {
                T[W] = function() {
                  return b(b[W].apply(null, arguments));
                };
              })(L[O]);
            }("create zeros ones rand identity".split(" ")), b;
          }(Math), function(s, w) {
            var S = s.utils.isFunction;
            function A(h, f) {
              return h - f;
            }
            function l(h, f, d) {
              return w.max(f, w.min(h, d));
            }
            s.sum = function(h) {
              for (var f = 0, d = h.length; --d >= 0; ) f += h[d];
              return f;
            }, s.sumsqrd = function(h) {
              for (var f = 0, d = h.length; --d >= 0; ) f += h[d] * h[d];
              return f;
            }, s.sumsqerr = function(h) {
              for (var f, d = s.mean(h), b = 0, k = h.length; --k >= 0; ) b += (f = h[k] - d) * f;
              return b;
            }, s.sumrow = function(h) {
              for (var f = 0, d = h.length; --d >= 0; ) f += h[d];
              return f;
            }, s.product = function(h) {
              for (var f = 1, d = h.length; --d >= 0; ) f *= h[d];
              return f;
            }, s.min = function(h) {
              for (var f = h[0], d = 0; ++d < h.length; ) h[d] < f && (f = h[d]);
              return f;
            }, s.max = function(h) {
              for (var f = h[0], d = 0; ++d < h.length; ) h[d] > f && (f = h[d]);
              return f;
            }, s.unique = function(h) {
              for (var f = {}, d = [], b = 0; b < h.length; b++) f[h[b]] || (f[h[b]] = !0, d.push(h[b]));
              return d;
            }, s.mean = function(h) {
              return s.sum(h) / h.length;
            }, s.meansqerr = function(h) {
              return s.sumsqerr(h) / h.length;
            }, s.geomean = function(h) {
              var f = h.map(w.log), d = s.mean(f);
              return w.exp(d);
            }, s.median = function(h) {
              var f = h.length, d = h.slice().sort(A);
              return 1 & f ? d[f / 2 | 0] : (d[f / 2 - 1] + d[f / 2]) / 2;
            }, s.cumsum = function(h) {
              return s.cumreduce(h, function(f, d) {
                return f + d;
              });
            }, s.cumprod = function(h) {
              return s.cumreduce(h, function(f, d) {
                return f * d;
              });
            }, s.diff = function(h) {
              var f, d = [], b = h.length;
              for (f = 1; f < b; f++) d.push(h[f] - h[f - 1]);
              return d;
            }, s.rank = function(h) {
              var f, d = [], b = {};
              for (f = 0; f < h.length; f++) b[T = h[f]] ? b[T]++ : (b[T] = 1, d.push(T));
              var k = d.sort(A), M = {}, B = 1;
              for (f = 0; f < k.length; f++) {
                var T, L = b[T = k[f]], O = (B + (B + L - 1)) / 2;
                M[T] = O, B += L;
              }
              return h.map(function(W) {
                return M[W];
              });
            }, s.mode = function(h) {
              var f, d = h.length, b = h.slice().sort(A), k = 1, M = 0, B = 0, T = [];
              for (f = 0; f < d; f++) b[f] === b[f + 1] ? k++ : (k > M ? (T = [b[f]], M = k, B = 0) : k === M && (T.push(b[f]), B++), k = 1);
              return B === 0 ? T[0] : T;
            }, s.range = function(h) {
              return s.max(h) - s.min(h);
            }, s.variance = function(h, f) {
              return s.sumsqerr(h) / (h.length - (f ? 1 : 0));
            }, s.pooledvariance = function(h) {
              return h.reduce(function(f, d) {
                return f + s.sumsqerr(d);
              }, 0) / (h.reduce(function(f, d) {
                return f + d.length;
              }, 0) - h.length);
            }, s.deviation = function(h) {
              for (var f = s.mean(h), d = h.length, b = new Array(d), k = 0; k < d; k++) b[k] = h[k] - f;
              return b;
            }, s.stdev = function(h, f) {
              return w.sqrt(s.variance(h, f));
            }, s.pooledstdev = function(h) {
              return w.sqrt(s.pooledvariance(h));
            }, s.meandev = function(h) {
              for (var f = s.mean(h), d = [], b = h.length - 1; b >= 0; b--) d.push(w.abs(h[b] - f));
              return s.mean(d);
            }, s.meddev = function(h) {
              for (var f = s.median(h), d = [], b = h.length - 1; b >= 0; b--) d.push(w.abs(h[b] - f));
              return s.median(d);
            }, s.coeffvar = function(h) {
              return s.stdev(h) / s.mean(h);
            }, s.quartiles = function(h) {
              var f = h.length, d = h.slice().sort(A);
              return [d[w.round(f / 4) - 1], d[w.round(f / 2) - 1], d[w.round(3 * f / 4) - 1]];
            }, s.quantiles = function(h, f, d, b) {
              var k, M, B, T, L, O = h.slice().sort(A), W = [f.length], P = h.length;
              for (d === void 0 && (d = 0.375), b === void 0 && (b = 0.375), k = 0; k < f.length; k++) B = P * (M = f[k]) + (d + M * (1 - d - b)), T = w.floor(l(B, 1, P - 1)), L = l(B - T, 0, 1), W[k] = (1 - L) * O[T - 1] + L * O[T];
              return W;
            }, s.percentile = function(h, f, d) {
              var b = h.slice().sort(A), k = f * (b.length + (d ? 1 : -1)) + (d ? 0 : 1), M = parseInt(k), B = k - M;
              return M + 1 < b.length ? b[M - 1] + B * (b[M] - b[M - 1]) : b[M - 1];
            }, s.percentileOfScore = function(h, f, d) {
              var b, k, M = 0, B = h.length, T = !1;
              for (d === "strict" && (T = !0), k = 0; k < B; k++) b = h[k], (T && b < f || !T && b <= f) && M++;
              return M / B;
            }, s.histogram = function(h, f) {
              f = f || 4;
              var d, b = s.min(h), k = (s.max(h) - b) / f, M = h.length, B = [];
              for (d = 0; d < f; d++) B[d] = 0;
              for (d = 0; d < M; d++) B[w.min(w.floor((h[d] - b) / k), f - 1)] += 1;
              return B;
            }, s.covariance = function(h, f) {
              var d, b = s.mean(h), k = s.mean(f), M = h.length, B = new Array(M);
              for (d = 0; d < M; d++) B[d] = (h[d] - b) * (f[d] - k);
              return s.sum(B) / (M - 1);
            }, s.corrcoeff = function(h, f) {
              return s.covariance(h, f) / s.stdev(h, 1) / s.stdev(f, 1);
            }, s.spearmancoeff = function(h, f) {
              return h = s.rank(h), f = s.rank(f), s.corrcoeff(h, f);
            }, s.stanMoment = function(h, f) {
              for (var d = s.mean(h), b = s.stdev(h), k = h.length, M = 0, B = 0; B < k; B++) M += w.pow((h[B] - d) / b, f);
              return M / h.length;
            }, s.skewness = function(h) {
              return s.stanMoment(h, 3);
            }, s.kurtosis = function(h) {
              return s.stanMoment(h, 4) - 3;
            };
            var a = s.prototype;
            (function(h) {
              for (var f = 0; f < h.length; f++) (function(d) {
                a[d] = function(b, k) {
                  var M = [], B = 0, T = this;
                  if (S(b) && (k = b, b = !1), k) return setTimeout(function() {
                    k.call(T, a[d].call(T, b));
                  }), this;
                  if (this.length > 1) {
                    for (T = b === !0 ? this : this.transpose(); B < T.length; B++) M[B] = s[d](T[B]);
                    return M;
                  }
                  return s[d](this[0], b);
                };
              })(h[f]);
            })("cumsum cumprod".split(" ")), function(h) {
              for (var f = 0; f < h.length; f++) (function(d) {
                a[d] = function(b, k) {
                  var M = [], B = 0, T = this;
                  if (S(b) && (k = b, b = !1), k) return setTimeout(function() {
                    k.call(T, a[d].call(T, b));
                  }), this;
                  if (this.length > 1) {
                    for (d !== "sumrow" && (T = b === !0 ? this : this.transpose()); B < T.length; B++) M[B] = s[d](T[B]);
                    return b === !0 ? s[d](s.utils.toVector(M)) : M;
                  }
                  return s[d](this[0], b);
                };
              })(h[f]);
            }("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")), function(h) {
              for (var f = 0; f < h.length; f++) (function(d) {
                a[d] = function() {
                  var b, k = [], M = 0, B = this, T = Array.prototype.slice.call(arguments);
                  if (S(T[T.length - 1])) {
                    b = T[T.length - 1];
                    var L = T.slice(0, T.length - 1);
                    return setTimeout(function() {
                      b.call(B, a[d].apply(B, L));
                    }), this;
                  }
                  b = void 0;
                  var O = function(W) {
                    return s[d].apply(B, [W].concat(T));
                  };
                  if (this.length > 1) {
                    for (B = B.transpose(); M < B.length; M++) k[M] = O(B[M]);
                    return k;
                  }
                  return O(this[0]);
                };
              })(h[f]);
            }("quantiles percentileOfScore".split(" "));
          }(m, Math), function(s, w) {
            s.gammaln = function(S) {
              var A, l, a, h = 0, f = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5395239384953e-18], d = 1.000000000190015;
              for (a = (l = A = S) + 5.5, a -= (A + 0.5) * w.log(a); h < 6; h++) d += f[h] / ++l;
              return w.log(2.5066282746310007 * d / A) - a;
            }, s.loggam = function(S) {
              var A, l, a, h, f, d, b, k = [0.08333333333333333, -0.002777777777777778, 7936507936507937e-19, -5952380952380952e-19, 8417508417508418e-19, -0.001917526917526918, 0.00641025641025641, -0.02955065359477124, 0.1796443723688307, -1.3924322169059];
              if (A = S, b = 0, S == 1 || S == 2) return 0;
              for (S <= 7 && (A = S + (b = w.floor(7 - S))), l = 1 / (A * A), a = 2 * w.PI, f = k[9], d = 8; d >= 0; d--) f *= l, f += k[d];
              if (h = f / A + 0.5 * w.log(a) + (A - 0.5) * w.log(A) - A, S <= 7) for (d = 1; d <= b; d++) h -= w.log(A - 1), A -= 1;
              return h;
            }, s.gammafn = function(S) {
              var A, l, a, h, f = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054], d = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535], b = !1, k = 0, M = 0, B = 0, T = S;
              if (S > 171.6243769536076) return 1 / 0;
              if (T <= 0) {
                if (!(h = T % 1 + 36e-17)) return 1 / 0;
                b = (1 & T ? -1 : 1) * w.PI / w.sin(w.PI * h), T = 1 - T;
              }
              for (a = T, l = T < 1 ? T++ : (T -= k = (0 | T) - 1) - 1, A = 0; A < 8; ++A) B = (B + f[A]) * l, M = M * l + d[A];
              if (h = B / M + 1, a < T) h /= a;
              else if (a > T) for (A = 0; A < k; ++A) h *= T, T++;
              return b && (h = b / h), h;
            }, s.gammap = function(S, A) {
              return s.lowRegGamma(S, A) * s.gammafn(S);
            }, s.lowRegGamma = function(S, A) {
              var l, a = s.gammaln(S), h = S, f = 1 / S, d = f, b = A + 1 - S, k = 1 / 1e-30, M = 1 / b, B = M, T = 1, L = -~(8.5 * w.log(S >= 1 ? S : 1 / S) + 0.4 * S + 17);
              if (A < 0 || S <= 0) return NaN;
              if (A < S + 1) {
                for (; T <= L; T++) f += d *= A / ++h;
                return f * w.exp(-A + S * w.log(A) - a);
              }
              for (; T <= L; T++) B *= (M = 1 / (M = (l = -T * (T - S)) * M + (b += 2))) * (k = b + l / k);
              return 1 - B * w.exp(-A + S * w.log(A) - a);
            }, s.factorialln = function(S) {
              return S < 0 ? NaN : s.gammaln(S + 1);
            }, s.factorial = function(S) {
              return S < 0 ? NaN : s.gammafn(S + 1);
            }, s.combination = function(S, A) {
              return S > 170 || A > 170 ? w.exp(s.combinationln(S, A)) : s.factorial(S) / s.factorial(A) / s.factorial(S - A);
            }, s.combinationln = function(S, A) {
              return s.factorialln(S) - s.factorialln(A) - s.factorialln(S - A);
            }, s.permutation = function(S, A) {
              return s.factorial(S) / s.factorial(S - A);
            }, s.betafn = function(S, A) {
              if (!(S <= 0 || A <= 0)) return S + A > 170 ? w.exp(s.betaln(S, A)) : s.gammafn(S) * s.gammafn(A) / s.gammafn(S + A);
            }, s.betaln = function(S, A) {
              return s.gammaln(S) + s.gammaln(A) - s.gammaln(S + A);
            }, s.betacf = function(S, A, l) {
              var a, h, f, d, b = 1e-30, k = 1, M = A + l, B = A + 1, T = A - 1, L = 1, O = 1 - M * S / B;
              for (w.abs(O) < b && (O = b), d = O = 1 / O; k <= 100 && (O = 1 + (h = k * (l - k) * S / ((T + (a = 2 * k)) * (A + a))) * O, w.abs(O) < b && (O = b), L = 1 + h / L, w.abs(L) < b && (L = b), d *= (O = 1 / O) * L, O = 1 + (h = -(A + k) * (M + k) * S / ((A + a) * (B + a))) * O, w.abs(O) < b && (O = b), L = 1 + h / L, w.abs(L) < b && (L = b), d *= f = (O = 1 / O) * L, !(w.abs(f - 1) < 3e-7)); k++) ;
              return d;
            }, s.gammapinv = function(S, A) {
              var l, a, h, f, d, b, k = 0, M = A - 1, B = s.gammaln(A);
              if (S >= 1) return w.max(100, A + 100 * w.sqrt(A));
              if (S <= 0) return 0;
              for (A > 1 ? (d = w.log(M), b = w.exp(M * (d - 1) - B), f = S < 0.5 ? S : 1 - S, l = (2.30753 + 0.27061 * (a = w.sqrt(-2 * w.log(f)))) / (1 + a * (0.99229 + 0.04481 * a)) - a, S < 0.5 && (l = -l), l = w.max(1e-3, A * w.pow(1 - 1 / (9 * A) - l / (3 * w.sqrt(A)), 3))) : l = S < (a = 1 - A * (0.253 + 0.12 * A)) ? w.pow(S / a, 1 / A) : 1 - w.log(1 - (S - a) / (1 - a)); k < 12; k++) {
                if (l <= 0) return 0;
                if ((l -= a = (h = (s.lowRegGamma(A, l) - S) / (a = A > 1 ? b * w.exp(-(l - M) + M * (w.log(l) - d)) : w.exp(-l + M * w.log(l) - B))) / (1 - 0.5 * w.min(1, h * ((A - 1) / l - 1)))) <= 0 && (l = 0.5 * (l + a)), w.abs(a) < 1e-8 * l) break;
              }
              return l;
            }, s.erf = function(S) {
              var A, l, a, h, f = [-1.3026537197817094, 0.6419697923564902, 0.019476473204185836, -0.00956151478680863, -946595344482036e-18, 366839497852761e-18, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 15626441722e-18, -85238095915e-18, 6529054439e-18, 5059343495e-18, -991364156e-18, -227365122e-18, 96467911e-18, 2394038e-18, -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18, 7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18], d = f.length - 1, b = !1, k = 0, M = 0;
              for (S < 0 && (S = -S, b = !0), l = 4 * (A = 2 / (2 + S)) - 2; d > 0; d--) a = k, k = l * k - M + f[d], M = a;
              return h = A * w.exp(-S * S + 0.5 * (f[0] + l * k) - M), b ? h - 1 : 1 - h;
            }, s.erfc = function(S) {
              return 1 - s.erf(S);
            }, s.erfcinv = function(S) {
              var A, l, a, h, f = 0;
              if (S >= 2) return -100;
              if (S <= 0) return 100;
              for (h = S < 1 ? S : 2 - S, A = -0.70711 * ((2.30753 + 0.27061 * (a = w.sqrt(-2 * w.log(h / 2)))) / (1 + a * (0.99229 + 0.04481 * a)) - a); f < 2; f++) A += (l = s.erfc(A) - h) / (1.1283791670955126 * w.exp(-A * A) - A * l);
              return S < 1 ? A : -A;
            }, s.ibetainv = function(S, A, l) {
              var a, h, f, d, b, k, M, B, T, L, O = A - 1, W = l - 1, P = 0;
              if (S <= 0) return 0;
              if (S >= 1) return 1;
              for (A >= 1 && l >= 1 ? (f = S < 0.5 ? S : 1 - S, k = (2.30753 + 0.27061 * (d = w.sqrt(-2 * w.log(f)))) / (1 + d * (0.99229 + 0.04481 * d)) - d, S < 0.5 && (k = -k), M = (k * k - 3) / 6, B = 2 / (1 / (2 * A - 1) + 1 / (2 * l - 1)), T = k * w.sqrt(M + B) / B - (1 / (2 * l - 1) - 1 / (2 * A - 1)) * (M + 0.8333333333333334 - 2 / (3 * B)), k = A / (A + l * w.exp(2 * T))) : (a = w.log(A / (A + l)), h = w.log(l / (A + l)), k = S < (d = w.exp(A * a) / A) / (T = d + (b = w.exp(l * h) / l)) ? w.pow(A * T * S, 1 / A) : 1 - w.pow(l * T * (1 - S), 1 / l)), L = -s.gammaln(A) - s.gammaln(l) + s.gammaln(A + l); P < 10; P++) {
                if (k === 0 || k === 1) return k;
                if ((k -= d = (b = (s.ibeta(k, A, l) - S) / (d = w.exp(O * w.log(k) + W * w.log(1 - k) + L))) / (1 - 0.5 * w.min(1, b * (O / k - W / (1 - k))))) <= 0 && (k = 0.5 * (k + d)), k >= 1 && (k = 0.5 * (k + d + 1)), w.abs(d) < 1e-8 * k && P > 0) break;
              }
              return k;
            }, s.ibeta = function(S, A, l) {
              var a = S === 0 || S === 1 ? 0 : w.exp(s.gammaln(A + l) - s.gammaln(A) - s.gammaln(l) + A * w.log(S) + l * w.log(1 - S));
              return !(S < 0 || S > 1) && (S < (A + 1) / (A + l + 2) ? a * s.betacf(S, A, l) / A : 1 - a * s.betacf(1 - S, l, A) / l);
            }, s.randn = function(S, A) {
              var l, a, h, f, d;
              if (A || (A = S), S) return s.create(S, A, function() {
                return s.randn();
              });
              do
                l = s._random_fn(), a = 1.7156 * (s._random_fn() - 0.5), d = (h = l - 0.449871) * h + (f = w.abs(a) + 0.386595) * (0.196 * f - 0.25472 * h);
              while (d > 0.27597 && (d > 0.27846 || a * a > -4 * w.log(l) * l * l));
              return a / l;
            }, s.randg = function(S, A, l) {
              var a, h, f, d, b, k, M = S;
              if (l || (l = A), S || (S = 1), A) return (k = s.zeros(A, l)).alter(function() {
                return s.randg(S);
              }), k;
              S < 1 && (S += 1), a = S - 0.3333333333333333, h = 1 / w.sqrt(9 * a);
              do {
                do
                  d = 1 + h * (b = s.randn());
                while (d <= 0);
                d *= d * d, f = s._random_fn();
              } while (f > 1 - 0.331 * w.pow(b, 4) && w.log(f) > 0.5 * b * b + a * (1 - d + w.log(d)));
              if (S == M) return a * d;
              do
                f = s._random_fn();
              while (f === 0);
              return w.pow(f, 1 / M) * a * d;
            }, function(S) {
              for (var A = 0; A < S.length; A++) (function(l) {
                s.fn[l] = function() {
                  return s(s.map(this, function(a) {
                    return s[l](a);
                  }));
                };
              })(S[A]);
            }("gammaln gammafn factorial factorialln".split(" ")), function(S) {
              for (var A = 0; A < S.length; A++) (function(l) {
                s.fn[l] = function() {
                  return s(s[l].apply(null, arguments));
                };
              })(S[A]);
            }("randn".split(" "));
          }(m, Math), function(s, w) {
            function S(l, a, h, f) {
              for (var d, b = 0, k = 1, M = 1, B = 1, T = 0, L = 0; w.abs((M - L) / M) > f; ) L = M, k = B + (d = -(a + T) * (a + h + T) * l / (a + 2 * T) / (a + 2 * T + 1)) * k, M = (b = M + d * b) + (d = (T += 1) * (h - T) * l / (a + 2 * T - 1) / (a + 2 * T)) * M, b /= B = k + d * B, k /= B, M /= B, B = 1;
              return M / a;
            }
            function A(l, a, h) {
              var f = [0.9815606342467192, 0.9041172563704749, 0.7699026741943047, 0.5873179542866175, 0.3678314989981802, 0.1252334085114689], d = [0.04717533638651183, 0.10693932599531843, 0.16007832854334622, 0.20316742672306592, 0.2334925365383548, 0.24914704581340277], b = 0.5 * l;
              if (b >= 8) return 1;
              var k, M = 2 * s.normal.cdf(b, 0, 1, 1, 0) - 1;
              M = M >= w.exp(-50 / h) ? w.pow(M, h) : 0;
              for (var B = b, T = (8 - b) / (k = l > 3 ? 2 : 3), L = B + T, O = 0, W = h - 1, P = 1; P <= k; P++) {
                for (var ce = 0, he = 0.5 * (L + B), Z = 0.5 * (L - B), se = 1; se <= 12; se++) {
                  var ge, de = he + Z * (6 < se ? f[(ge = 12 - se + 1) - 1] : -f[(ge = se) - 1]), oe = de * de;
                  if (oe > 60) break;
                  var ve = 2 * s.normal.cdf(de, 0, 1, 1, 0) * 0.5 - 2 * s.normal.cdf(de, l, 1, 1, 0) * 0.5;
                  ve >= w.exp(-30 / W) && (ce += ve = d[ge - 1] * w.exp(-0.5 * oe) * w.pow(ve, W));
                }
                O += ce *= 2 * Z * h / w.sqrt(2 * w.PI), B = L, L += T;
              }
              return (M += O) <= w.exp(-30 / a) ? 0 : (M = w.pow(M, a)) >= 1 ? 1 : M;
            }
            (function(l) {
              for (var a = 0; a < l.length; a++) (function(h) {
                s[h] = function f(d, b, k) {
                  return this instanceof f ? (this._a = d, this._b = b, this._c = k, this) : new f(d, b, k);
                }, s.fn[h] = function(f, d, b) {
                  var k = s[h](f, d, b);
                  return k.data = this, k;
                }, s[h].prototype.sample = function(f) {
                  var d = this._a, b = this._b, k = this._c;
                  return f ? s.alter(f, function() {
                    return s[h].sample(d, b, k);
                  }) : s[h].sample(d, b, k);
                }, function(f) {
                  for (var d = 0; d < f.length; d++) (function(b) {
                    s[h].prototype[b] = function(k) {
                      var M = this._a, B = this._b, T = this._c;
                      return k || k === 0 || (k = this.data), typeof k != "number" ? s.fn.map.call(k, function(L) {
                        return s[h][b](L, M, B, T);
                      }) : s[h][b](k, M, B, T);
                    };
                  })(f[d]);
                }("pdf cdf inv".split(" ")), function(f) {
                  for (var d = 0; d < f.length; d++) (function(b) {
                    s[h].prototype[b] = function() {
                      return s[h][b](this._a, this._b, this._c);
                    };
                  })(f[d]);
                }("mean median mode variance".split(" "));
              })(l[a]);
            })("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")), s.extend(s.beta, { pdf: function(l, a, h) {
              return l > 1 || l < 0 ? 0 : a == 1 && h == 1 ? 1 : a < 512 && h < 512 ? w.pow(l, a - 1) * w.pow(1 - l, h - 1) / s.betafn(a, h) : w.exp((a - 1) * w.log(l) + (h - 1) * w.log(1 - l) - s.betaln(a, h));
            }, cdf: function(l, a, h) {
              return l > 1 || l < 0 ? 1 * (l > 1) : s.ibeta(l, a, h);
            }, inv: function(l, a, h) {
              return s.ibetainv(l, a, h);
            }, mean: function(l, a) {
              return l / (l + a);
            }, median: function(l, a) {
              return s.ibetainv(0.5, l, a);
            }, mode: function(l, a) {
              return (l - 1) / (l + a - 2);
            }, sample: function(l, a) {
              var h = s.randg(l);
              return h / (h + s.randg(a));
            }, variance: function(l, a) {
              return l * a / (w.pow(l + a, 2) * (l + a + 1));
            } }), s.extend(s.centralF, { pdf: function(l, a, h) {
              var f;
              return l < 0 ? 0 : a <= 2 ? l === 0 && a < 2 ? 1 / 0 : l === 0 && a === 2 ? 1 : 1 / s.betafn(a / 2, h / 2) * w.pow(a / h, a / 2) * w.pow(l, a / 2 - 1) * w.pow(1 + a / h * l, -(a + h) / 2) : (f = a * l / (h + l * a), a * (h / (h + l * a)) / 2 * s.binomial.pdf((a - 2) / 2, (a + h - 2) / 2, f));
            }, cdf: function(l, a, h) {
              return l < 0 ? 0 : s.ibeta(a * l / (a * l + h), a / 2, h / 2);
            }, inv: function(l, a, h) {
              return h / (a * (1 / s.ibetainv(l, a / 2, h / 2) - 1));
            }, mean: function(l, a) {
              return a > 2 ? a / (a - 2) : void 0;
            }, mode: function(l, a) {
              return l > 2 ? a * (l - 2) / (l * (a + 2)) : void 0;
            }, sample: function(l, a) {
              return 2 * s.randg(l / 2) / l / (2 * s.randg(a / 2) / a);
            }, variance: function(l, a) {
              if (!(a <= 4)) return 2 * a * a * (l + a - 2) / (l * (a - 2) * (a - 2) * (a - 4));
            } }), s.extend(s.cauchy, { pdf: function(l, a, h) {
              return h < 0 ? 0 : h / (w.pow(l - a, 2) + w.pow(h, 2)) / w.PI;
            }, cdf: function(l, a, h) {
              return w.atan((l - a) / h) / w.PI + 0.5;
            }, inv: function(l, a, h) {
              return a + h * w.tan(w.PI * (l - 0.5));
            }, median: function(l) {
              return l;
            }, mode: function(l) {
              return l;
            }, sample: function(l, a) {
              return s.randn() * w.sqrt(1 / (2 * s.randg(0.5))) * a + l;
            } }), s.extend(s.chisquare, { pdf: function(l, a) {
              return l < 0 ? 0 : l === 0 && a === 2 ? 0.5 : w.exp((a / 2 - 1) * w.log(l) - l / 2 - a / 2 * w.log(2) - s.gammaln(a / 2));
            }, cdf: function(l, a) {
              return l < 0 ? 0 : s.lowRegGamma(a / 2, l / 2);
            }, inv: function(l, a) {
              return 2 * s.gammapinv(l, 0.5 * a);
            }, mean: function(l) {
              return l;
            }, median: function(l) {
              return l * w.pow(1 - 2 / (9 * l), 3);
            }, mode: function(l) {
              return l - 2 > 0 ? l - 2 : 0;
            }, sample: function(l) {
              return 2 * s.randg(l / 2);
            }, variance: function(l) {
              return 2 * l;
            } }), s.extend(s.exponential, { pdf: function(l, a) {
              return l < 0 ? 0 : a * w.exp(-a * l);
            }, cdf: function(l, a) {
              return l < 0 ? 0 : 1 - w.exp(-a * l);
            }, inv: function(l, a) {
              return -w.log(1 - l) / a;
            }, mean: function(l) {
              return 1 / l;
            }, median: function(l) {
              return 1 / l * w.log(2);
            }, mode: function() {
              return 0;
            }, sample: function(l) {
              return -1 / l * w.log(s._random_fn());
            }, variance: function(l) {
              return w.pow(l, -2);
            } }), s.extend(s.gamma, { pdf: function(l, a, h) {
              return l < 0 ? 0 : l === 0 && a === 1 ? 1 / h : w.exp((a - 1) * w.log(l) - l / h - s.gammaln(a) - a * w.log(h));
            }, cdf: function(l, a, h) {
              return l < 0 ? 0 : s.lowRegGamma(a, l / h);
            }, inv: function(l, a, h) {
              return s.gammapinv(l, a) * h;
            }, mean: function(l, a) {
              return l * a;
            }, mode: function(l, a) {
              if (l > 1) return (l - 1) * a;
            }, sample: function(l, a) {
              return s.randg(l) * a;
            }, variance: function(l, a) {
              return l * a * a;
            } }), s.extend(s.invgamma, { pdf: function(l, a, h) {
              return l <= 0 ? 0 : w.exp(-(a + 1) * w.log(l) - h / l - s.gammaln(a) + a * w.log(h));
            }, cdf: function(l, a, h) {
              return l <= 0 ? 0 : 1 - s.lowRegGamma(a, h / l);
            }, inv: function(l, a, h) {
              return h / s.gammapinv(1 - l, a);
            }, mean: function(l, a) {
              return l > 1 ? a / (l - 1) : void 0;
            }, mode: function(l, a) {
              return a / (l + 1);
            }, sample: function(l, a) {
              return a / s.randg(l);
            }, variance: function(l, a) {
              if (!(l <= 2)) return a * a / ((l - 1) * (l - 1) * (l - 2));
            } }), s.extend(s.kumaraswamy, { pdf: function(l, a, h) {
              return l === 0 && a === 1 ? h : l === 1 && h === 1 ? a : w.exp(w.log(a) + w.log(h) + (a - 1) * w.log(l) + (h - 1) * w.log(1 - w.pow(l, a)));
            }, cdf: function(l, a, h) {
              return l < 0 ? 0 : l > 1 ? 1 : 1 - w.pow(1 - w.pow(l, a), h);
            }, inv: function(l, a, h) {
              return w.pow(1 - w.pow(1 - l, 1 / h), 1 / a);
            }, mean: function(l, a) {
              return a * s.gammafn(1 + 1 / l) * s.gammafn(a) / s.gammafn(1 + 1 / l + a);
            }, median: function(l, a) {
              return w.pow(1 - w.pow(2, -1 / a), 1 / l);
            }, mode: function(l, a) {
              if (l >= 1 && a >= 1 && l !== 1 && a !== 1) return w.pow((l - 1) / (l * a - 1), 1 / l);
            }, variance: function() {
              throw new Error("variance not yet implemented");
            } }), s.extend(s.lognormal, { pdf: function(l, a, h) {
              return l <= 0 ? 0 : w.exp(-w.log(l) - 0.5 * w.log(2 * w.PI) - w.log(h) - w.pow(w.log(l) - a, 2) / (2 * h * h));
            }, cdf: function(l, a, h) {
              return l < 0 ? 0 : 0.5 + 0.5 * s.erf((w.log(l) - a) / w.sqrt(2 * h * h));
            }, inv: function(l, a, h) {
              return w.exp(-1.4142135623730951 * h * s.erfcinv(2 * l) + a);
            }, mean: function(l, a) {
              return w.exp(l + a * a / 2);
            }, median: function(l) {
              return w.exp(l);
            }, mode: function(l, a) {
              return w.exp(l - a * a);
            }, sample: function(l, a) {
              return w.exp(s.randn() * a + l);
            }, variance: function(l, a) {
              return (w.exp(a * a) - 1) * w.exp(2 * l + a * a);
            } }), s.extend(s.noncentralt, { pdf: function(l, a, h) {
              return w.abs(h) < 1e-14 ? s.studentt.pdf(l, a) : w.abs(l) < 1e-14 ? w.exp(s.gammaln((a + 1) / 2) - h * h / 2 - 0.5 * w.log(w.PI * a) - s.gammaln(a / 2)) : a / l * (s.noncentralt.cdf(l * w.sqrt(1 + 2 / a), a + 2, h) - s.noncentralt.cdf(l, a, h));
            }, cdf: function(l, a, h) {
              var f = 1e-14;
              if (w.abs(h) < f) return s.studentt.cdf(l, a);
              var d = !1;
              l < 0 && (d = !0, h = -h);
              for (var b = s.normal.cdf(-h, 0, 1), k = f + 1, M = k, B = l * l / (l * l + a), T = 0, L = w.exp(-h * h / 2), O = w.exp(-h * h / 2 - 0.5 * w.log(2) - s.gammaln(1.5)) * h; T < 200 || M > f || k > f; ) M = k, T > 0 && (L *= h * h / (2 * T), O *= h * h / (2 * (T + 0.5))), b += 0.5 * (k = L * s.beta.cdf(B, T + 0.5, a / 2) + O * s.beta.cdf(B, T + 1, a / 2)), T++;
              return d ? 1 - b : b;
            } }), s.extend(s.normal, { pdf: function(l, a, h) {
              return w.exp(-0.5 * w.log(2 * w.PI) - w.log(h) - w.pow(l - a, 2) / (2 * h * h));
            }, cdf: function(l, a, h) {
              return 0.5 * (1 + s.erf((l - a) / w.sqrt(2 * h * h)));
            }, inv: function(l, a, h) {
              return -1.4142135623730951 * h * s.erfcinv(2 * l) + a;
            }, mean: function(l) {
              return l;
            }, median: function(l) {
              return l;
            }, mode: function(l) {
              return l;
            }, sample: function(l, a) {
              return s.randn() * a + l;
            }, variance: function(l, a) {
              return a * a;
            } }), s.extend(s.pareto, { pdf: function(l, a, h) {
              return l < a ? 0 : h * w.pow(a, h) / w.pow(l, h + 1);
            }, cdf: function(l, a, h) {
              return l < a ? 0 : 1 - w.pow(a / l, h);
            }, inv: function(l, a, h) {
              return a / w.pow(1 - l, 1 / h);
            }, mean: function(l, a) {
              if (!(a <= 1)) return a * w.pow(l, a) / (a - 1);
            }, median: function(l, a) {
              return l * (a * w.SQRT2);
            }, mode: function(l) {
              return l;
            }, variance: function(l, a) {
              if (!(a <= 2)) return l * l * a / (w.pow(a - 1, 2) * (a - 2));
            } }), s.extend(s.studentt, { pdf: function(l, a) {
              return a = a > 1e100 ? 1e100 : a, 1 / (w.sqrt(a) * s.betafn(0.5, a / 2)) * w.pow(1 + l * l / a, -(a + 1) / 2);
            }, cdf: function(l, a) {
              var h = a / 2;
              return s.ibeta((l + w.sqrt(l * l + a)) / (2 * w.sqrt(l * l + a)), h, h);
            }, inv: function(l, a) {
              var h = s.ibetainv(2 * w.min(l, 1 - l), 0.5 * a, 0.5);
              return h = w.sqrt(a * (1 - h) / h), l > 0.5 ? h : -h;
            }, mean: function(l) {
              return l > 1 ? 0 : void 0;
            }, median: function() {
              return 0;
            }, mode: function() {
              return 0;
            }, sample: function(l) {
              return s.randn() * w.sqrt(l / (2 * s.randg(l / 2)));
            }, variance: function(l) {
              return l > 2 ? l / (l - 2) : l > 1 ? 1 / 0 : void 0;
            } }), s.extend(s.weibull, { pdf: function(l, a, h) {
              return l < 0 || a < 0 || h < 0 ? 0 : h / a * w.pow(l / a, h - 1) * w.exp(-w.pow(l / a, h));
            }, cdf: function(l, a, h) {
              return l < 0 ? 0 : 1 - w.exp(-w.pow(l / a, h));
            }, inv: function(l, a, h) {
              return a * w.pow(-w.log(1 - l), 1 / h);
            }, mean: function(l, a) {
              return l * s.gammafn(1 + 1 / a);
            }, median: function(l, a) {
              return l * w.pow(w.log(2), 1 / a);
            }, mode: function(l, a) {
              return a <= 1 ? 0 : l * w.pow((a - 1) / a, 1 / a);
            }, sample: function(l, a) {
              return l * w.pow(-w.log(s._random_fn()), 1 / a);
            }, variance: function(l, a) {
              return l * l * s.gammafn(1 + 2 / a) - w.pow(s.weibull.mean(l, a), 2);
            } }), s.extend(s.uniform, { pdf: function(l, a, h) {
              return l < a || l > h ? 0 : 1 / (h - a);
            }, cdf: function(l, a, h) {
              return l < a ? 0 : l < h ? (l - a) / (h - a) : 1;
            }, inv: function(l, a, h) {
              return a + l * (h - a);
            }, mean: function(l, a) {
              return 0.5 * (l + a);
            }, median: function(l, a) {
              return s.mean(l, a);
            }, mode: function() {
              throw new Error("mode is not yet implemented");
            }, sample: function(l, a) {
              return l / 2 + a / 2 + (a / 2 - l / 2) * (2 * s._random_fn() - 1);
            }, variance: function(l, a) {
              return w.pow(a - l, 2) / 12;
            } }), s.extend(s.binomial, { pdf: function(l, a, h) {
              return h === 0 || h === 1 ? a * h === l ? 1 : 0 : s.combination(a, l) * w.pow(h, l) * w.pow(1 - h, a - l);
            }, cdf: function(l, a, h) {
              var f, d = 1e-10;
              if (l < 0) return 0;
              if (l >= a) return 1;
              if (h < 0 || h > 1 || a <= 0) return NaN;
              var b = h, k = (l = w.floor(l)) + 1, M = a - l, B = k + M, T = w.exp(s.gammaln(B) - s.gammaln(M) - s.gammaln(k) + k * w.log(b) + M * w.log(1 - b));
              return f = b < (k + 1) / (B + 2) ? T * S(b, k, M, d) : 1 - T * S(1 - b, M, k, d), w.round(1 / d * (1 - f)) / (1 / d);
            } }), s.extend(s.negbin, { pdf: function(l, a, h) {
              return l === l >>> 0 && (l < 0 ? 0 : s.combination(l + a - 1, a - 1) * w.pow(1 - h, l) * w.pow(h, a));
            }, cdf: function(l, a, h) {
              var f = 0, d = 0;
              if (l < 0) return 0;
              for (; d <= l; d++) f += s.negbin.pdf(d, a, h);
              return f;
            } }), s.extend(s.hypgeom, { pdf: function(l, a, h, f) {
              if (l != l | 0) return !1;
              if (l < 0 || l < h - (a - f) || l > f || l > h) return 0;
              if (2 * h > a) return 2 * f > a ? s.hypgeom.pdf(a - h - f + l, a, a - h, a - f) : s.hypgeom.pdf(f - l, a, a - h, f);
              if (2 * f > a) return s.hypgeom.pdf(h - l, a, h, a - f);
              if (h < f) return s.hypgeom.pdf(l, a, f, h);
              for (var d = 1, b = 0, k = 0; k < l; k++) {
                for (; d > 1 && b < f; ) d *= 1 - h / (a - b), b++;
                d *= (f - k) * (h - k) / ((k + 1) * (a - h - f + k + 1));
              }
              for (; b < f; b++) d *= 1 - h / (a - b);
              return w.min(1, w.max(0, d));
            }, cdf: function(l, a, h, f) {
              if (l < 0 || l < h - (a - f)) return 0;
              if (l >= f || l >= h) return 1;
              if (2 * h > a) return 2 * f > a ? s.hypgeom.cdf(a - h - f + l, a, a - h, a - f) : 1 - s.hypgeom.cdf(f - l - 1, a, a - h, f);
              if (2 * f > a) return 1 - s.hypgeom.cdf(h - l - 1, a, h, a - f);
              if (h < f) return s.hypgeom.cdf(l, a, f, h);
              for (var d = 1, b = 1, k = 0, M = 0; M < l; M++) {
                for (; d > 1 && k < f; ) {
                  var B = 1 - h / (a - k);
                  b *= B, d *= B, k++;
                }
                d += b *= (f - M) * (h - M) / ((M + 1) * (a - h - f + M + 1));
              }
              for (; k < f; k++) d *= 1 - h / (a - k);
              return w.min(1, w.max(0, d));
            } }), s.extend(s.poisson, { pdf: function(l, a) {
              return a < 0 || l % 1 != 0 || l < 0 ? 0 : w.pow(a, l) * w.exp(-a) / s.factorial(l);
            }, cdf: function(l, a) {
              var h = [], f = 0;
              if (l < 0) return 0;
              for (; f <= l; f++) h.push(s.poisson.pdf(f, a));
              return s.sum(h);
            }, mean: function(l) {
              return l;
            }, variance: function(l) {
              return l;
            }, sampleSmall: function(l) {
              var a = 1, h = 0, f = w.exp(-l);
              do
                h++, a *= s._random_fn();
              while (a > f);
              return h - 1;
            }, sampleLarge: function(l) {
              var a, h, f, d, b, k, M, B, T, L, O = l;
              for (d = w.sqrt(O), b = w.log(O), k = 0.02483 * (M = 0.931 + 2.53 * d) - 0.059, B = 1.1239 + 1.1328 / (M - 3.4), T = 0.9277 - 3.6224 / (M - 2); ; )
                if (h = w.random() - 0.5, f = w.random(), L = 0.5 - w.abs(h), a = w.floor((2 * k / L + M) * h + O + 0.43), L >= 0.07 && f <= T || !(a < 0 || L < 0.013 && f > L) && w.log(f) + w.log(B) - w.log(k / (L * L) + M) <= a * b - O - s.loggam(a + 1)) return a;
            }, sample: function(l) {
              return l < 10 ? this.sampleSmall(l) : this.sampleLarge(l);
            } }), s.extend(s.triangular, { pdf: function(l, a, h, f) {
              return h <= a || f < a || f > h ? NaN : l < a || l > h ? 0 : l < f ? 2 * (l - a) / ((h - a) * (f - a)) : l === f ? 2 / (h - a) : 2 * (h - l) / ((h - a) * (h - f));
            }, cdf: function(l, a, h, f) {
              return h <= a || f < a || f > h ? NaN : l <= a ? 0 : l >= h ? 1 : l <= f ? w.pow(l - a, 2) / ((h - a) * (f - a)) : 1 - w.pow(h - l, 2) / ((h - a) * (h - f));
            }, inv: function(l, a, h, f) {
              return h <= a || f < a || f > h ? NaN : l <= (f - a) / (h - a) ? a + (h - a) * w.sqrt(l * ((f - a) / (h - a))) : a + (h - a) * (1 - w.sqrt((1 - l) * (1 - (f - a) / (h - a))));
            }, mean: function(l, a, h) {
              return (l + a + h) / 3;
            }, median: function(l, a, h) {
              return h <= (l + a) / 2 ? a - w.sqrt((a - l) * (a - h)) / w.sqrt(2) : h > (l + a) / 2 ? l + w.sqrt((a - l) * (h - l)) / w.sqrt(2) : void 0;
            }, mode: function(l, a, h) {
              return h;
            }, sample: function(l, a, h) {
              var f = s._random_fn();
              return f < (h - l) / (a - l) ? l + w.sqrt(f * (a - l) * (h - l)) : a - w.sqrt((1 - f) * (a - l) * (a - h));
            }, variance: function(l, a, h) {
              return (l * l + a * a + h * h - l * a - l * h - a * h) / 18;
            } }), s.extend(s.arcsine, { pdf: function(l, a, h) {
              return h <= a ? NaN : l <= a || l >= h ? 0 : 2 / w.PI * w.pow(w.pow(h - a, 2) - w.pow(2 * l - a - h, 2), -0.5);
            }, cdf: function(l, a, h) {
              return l < a ? 0 : l < h ? 2 / w.PI * w.asin(w.sqrt((l - a) / (h - a))) : 1;
            }, inv: function(l, a, h) {
              return a + (0.5 - 0.5 * w.cos(w.PI * l)) * (h - a);
            }, mean: function(l, a) {
              return a <= l ? NaN : (l + a) / 2;
            }, median: function(l, a) {
              return a <= l ? NaN : (l + a) / 2;
            }, mode: function() {
              throw new Error("mode is not yet implemented");
            }, sample: function(l, a) {
              return (l + a) / 2 + (a - l) / 2 * w.sin(2 * w.PI * s.uniform.sample(0, 1));
            }, variance: function(l, a) {
              return a <= l ? NaN : w.pow(a - l, 2) / 8;
            } }), s.extend(s.laplace, { pdf: function(l, a, h) {
              return h <= 0 ? 0 : w.exp(-w.abs(l - a) / h) / (2 * h);
            }, cdf: function(l, a, h) {
              return h <= 0 ? 0 : l < a ? 0.5 * w.exp((l - a) / h) : 1 - 0.5 * w.exp(-(l - a) / h);
            }, mean: function(l) {
              return l;
            }, median: function(l) {
              return l;
            }, mode: function(l) {
              return l;
            }, variance: function(l, a) {
              return 2 * a * a;
            }, sample: function(l, a) {
              var h, f = s._random_fn() - 0.5;
              return l - a * ((h = f) / w.abs(h)) * w.log(1 - 2 * w.abs(f));
            } }), s.extend(s.tukey, { cdf: function(l, a, h) {
              var f = a, d = [0.9894009349916499, 0.9445750230732326, 0.8656312023878318, 0.755404408355003, 0.6178762444026438, 0.45801677765722737, 0.2816035507792589, 0.09501250983763744], b = [0.027152459411754096, 0.062253523938647894, 0.09515851168249279, 0.12462897125553388, 0.14959598881657674, 0.16915651939500254, 0.18260341504492358, 0.1894506104550685];
              if (l <= 0) return 0;
              if (h < 2 || f < 2) return NaN;
              if (!Number.isFinite(l)) return 1;
              if (h > 25e3) return A(l, 1, f);
              var k, M = 0.5 * h, B = M * w.log(h) - h * w.log(2) - s.gammaln(M), T = M - 1, L = 0.25 * h;
              k = h <= 100 ? 1 : h <= 800 ? 0.5 : h <= 5e3 ? 0.25 : 0.125, B += w.log(k);
              for (var O = 0, W = 1; W <= 50; W++) {
                for (var P = 0, ce = (2 * W - 1) * k, he = 1; he <= 16; he++) {
                  var Z, se;
                  8 < he ? (Z = he - 8 - 1, se = B + T * w.log(ce + d[Z] * k) - (d[Z] * k + ce) * L) : (Z = he - 1, se = B + T * w.log(ce - d[Z] * k) + (d[Z] * k - ce) * L), se >= -30 && (P += A(8 < he ? l * w.sqrt(0.5 * (d[Z] * k + ce)) : l * w.sqrt(0.5 * (-d[Z] * k + ce)), 1, f) * b[Z] * w.exp(se));
                }
                if (W * k >= 1 && P <= 1e-14) break;
                O += P;
              }
              if (P > 1e-14) throw new Error("tukey.cdf failed to converge");
              return O > 1 && (O = 1), O;
            }, inv: function(l, a, h) {
              if (h < 2 || a < 2) return NaN;
              if (l < 0 || l > 1) return NaN;
              if (l === 0) return 0;
              if (l === 1) return 1 / 0;
              var f, d = function(T, L, O) {
                var W = 0.5 - 0.5 * T, P = w.sqrt(w.log(1 / (W * W))), ce = P + ((((-453642210148e-16 * P - 0.204231210125) * P - 0.342242088547) * P - 1) * P + 0.322232421088) / ((((0.0038560700634 * P + 0.10353775285) * P + 0.531103462366) * P + 0.588581570495) * P + 0.099348462606);
                O < 120 && (ce += (ce * ce * ce + ce) / O / 4);
                var he = 0.8832 - 0.2368 * ce;
                return O < 120 && (he += -1.214 / O + 1.208 * ce / O), ce * (he * w.log(L - 1) + 1.4142);
              }(l, a, h), b = s.tukey.cdf(d, a, h) - l;
              f = b > 0 ? w.max(0, d - 1) : d + 1;
              for (var k, M = s.tukey.cdf(f, a, h) - l, B = 1; B < 50; B++) if (k = f - M * (f - d) / (M - b), b = M, d = f, k < 0 && (k = 0, M = -l), M = s.tukey.cdf(k, a, h) - l, f = k, w.abs(f - d) < 1e-4) return k;
              throw new Error("tukey.inv failed to converge");
            } });
          }(m, Math), function(s, w) {
            var S, A, l = Array.prototype.push, a = s.utils.isArray;
            function h(f) {
              return a(f) || f instanceof s;
            }
            s.extend({ add: function(f, d) {
              return h(d) ? (h(d[0]) || (d = [d]), s.map(f, function(b, k, M) {
                return b + d[k][M];
              })) : s.map(f, function(b) {
                return b + d;
              });
            }, subtract: function(f, d) {
              return h(d) ? (h(d[0]) || (d = [d]), s.map(f, function(b, k, M) {
                return b - d[k][M] || 0;
              })) : s.map(f, function(b) {
                return b - d;
              });
            }, divide: function(f, d) {
              return h(d) ? (h(d[0]) || (d = [d]), s.multiply(f, s.inv(d))) : s.map(f, function(b) {
                return b / d;
              });
            }, multiply: function(f, d) {
              var b, k, M, B, T, L, O, W;
              if (f.length === void 0 && d.length === void 0) return f * d;
              if (T = f.length, L = f[0].length, O = s.zeros(T, M = h(d) ? d[0].length : L), W = 0, h(d)) {
                for (; W < M; W++) for (b = 0; b < T; b++) {
                  for (B = 0, k = 0; k < L; k++) B += f[b][k] * d[k][W];
                  O[b][W] = B;
                }
                return T === 1 && W === 1 ? O[0][0] : O;
              }
              return s.map(f, function(P) {
                return P * d;
              });
            }, outer: function(f, d) {
              return s.multiply(f.map(function(b) {
                return [b];
              }), [d]);
            }, dot: function(f, d) {
              h(f[0]) || (f = [f]), h(d[0]) || (d = [d]);
              for (var b, k, M = f[0].length === 1 && f.length !== 1 ? s.transpose(f) : f, B = d[0].length === 1 && d.length !== 1 ? s.transpose(d) : d, T = [], L = 0, O = M.length, W = M[0].length; L < O; L++) {
                for (T[L] = [], b = 0, k = 0; k < W; k++) b += M[L][k] * B[L][k];
                T[L] = b;
              }
              return T.length === 1 ? T[0] : T;
            }, pow: function(f, d) {
              return s.map(f, function(b) {
                return w.pow(b, d);
              });
            }, exp: function(f) {
              return s.map(f, function(d) {
                return w.exp(d);
              });
            }, log: function(f) {
              return s.map(f, function(d) {
                return w.log(d);
              });
            }, abs: function(f) {
              return s.map(f, function(d) {
                return w.abs(d);
              });
            }, norm: function(f, d) {
              var b = 0, k = 0;
              for (isNaN(d) && (d = 2), h(f[0]) && (f = f[0]); k < f.length; k++) b += w.pow(w.abs(f[k]), d);
              return w.pow(b, 1 / d);
            }, angle: function(f, d) {
              return w.acos(s.dot(f, d) / (s.norm(f) * s.norm(d)));
            }, aug: function(f, d) {
              var b, k = [];
              for (b = 0; b < f.length; b++) k.push(f[b].slice());
              for (b = 0; b < k.length; b++) l.apply(k[b], d[b]);
              return k;
            }, inv: function(f) {
              for (var d, b = f.length, k = f[0].length, M = s.identity(b, k), B = s.gauss_jordan(f, M), T = [], L = 0; L < b; L++) for (T[L] = [], d = k; d < B[0].length; d++) T[L][d - k] = B[L][d];
              return T;
            }, det: function f(d) {
              if (d.length === 2) return d[0][0] * d[1][1] - d[0][1] * d[1][0];
              for (var b = 0, k = 0; k < d.length; k++) {
                for (var M = [], B = 1; B < d.length; B++) {
                  M[B - 1] = [];
                  for (var T = 0; T < d.length; T++) T < k ? M[B - 1][T] = d[B][T] : T > k && (M[B - 1][T - 1] = d[B][T]);
                }
                var L = k % 2 ? -1 : 1;
                b += f(M) * d[0][k] * L;
              }
              return b;
            }, gauss_elimination: function(f, d) {
              var b, k, M, B, T = 0, L = 0, O = f.length, W = f[0].length, P = 1, ce = 0, he = [];
              for (b = (f = s.aug(f, d))[0].length, T = 0; T < O; T++) {
                for (k = f[T][T], L = T, B = T + 1; B < W; B++) k < w.abs(f[B][T]) && (k = f[B][T], L = B);
                if (L != T) for (B = 0; B < b; B++) M = f[T][B], f[T][B] = f[L][B], f[L][B] = M;
                for (L = T + 1; L < O; L++) for (P = f[L][T] / f[T][T], B = T; B < b; B++) f[L][B] = f[L][B] - P * f[T][B];
              }
              for (T = O - 1; T >= 0; T--) {
                for (ce = 0, L = T + 1; L <= O - 1; L++) ce += he[L] * f[T][L];
                he[T] = (f[T][b - 1] - ce) / f[T][T];
              }
              return he;
            }, gauss_jordan: function(f, d) {
              var b, k, M, B = s.aug(f, d), T = B.length, L = B[0].length, O = 0;
              for (k = 0; k < T; k++) {
                var W = k;
                for (M = k + 1; M < T; M++) w.abs(B[M][k]) > w.abs(B[W][k]) && (W = M);
                var P = B[k];
                for (B[k] = B[W], B[W] = P, M = k + 1; M < T; M++) for (O = B[M][k] / B[k][k], b = k; b < L; b++) B[M][b] -= B[k][b] * O;
              }
              for (k = T - 1; k >= 0; k--) {
                for (O = B[k][k], M = 0; M < k; M++) for (b = L - 1; b > k - 1; b--) B[M][b] -= B[k][b] * B[M][k] / O;
                for (B[k][k] /= O, b = T; b < L; b++) B[k][b] /= O;
              }
              return B;
            }, triaUpSolve: function(f, d) {
              var b, k = f[0].length, M = s.zeros(1, k)[0], B = !1;
              return d[0].length != null && (d = d.map(function(T) {
                return T[0];
              }), B = !0), s.arange(k - 1, -1, -1).forEach(function(T) {
                b = s.arange(T + 1, k).map(function(L) {
                  return M[L] * f[T][L];
                }), M[T] = (d[T] - s.sum(b)) / f[T][T];
              }), B ? M.map(function(T) {
                return [T];
              }) : M;
            }, triaLowSolve: function(f, d) {
              var b, k = f[0].length, M = s.zeros(1, k)[0], B = !1;
              return d[0].length != null && (d = d.map(function(T) {
                return T[0];
              }), B = !0), s.arange(k).forEach(function(T) {
                b = s.arange(T).map(function(L) {
                  return f[T][L] * M[L];
                }), M[T] = (d[T] - s.sum(b)) / f[T][T];
              }), B ? M.map(function(T) {
                return [T];
              }) : M;
            }, lu: function(f) {
              var d, b = f.length, k = s.identity(b), M = s.zeros(f.length, f[0].length);
              return s.arange(b).forEach(function(B) {
                M[0][B] = f[0][B];
              }), s.arange(1, b).forEach(function(B) {
                s.arange(B).forEach(function(T) {
                  d = s.arange(T).map(function(L) {
                    return k[B][L] * M[L][T];
                  }), k[B][T] = (f[B][T] - s.sum(d)) / M[T][T];
                }), s.arange(B, b).forEach(function(T) {
                  d = s.arange(B).map(function(L) {
                    return k[B][L] * M[L][T];
                  }), M[B][T] = f[d.length][T] - s.sum(d);
                });
              }), [k, M];
            }, cholesky: function(f) {
              var d, b = f.length, k = s.zeros(f.length, f[0].length);
              return s.arange(b).forEach(function(M) {
                d = s.arange(M).map(function(B) {
                  return w.pow(k[M][B], 2);
                }), k[M][M] = w.sqrt(f[M][M] - s.sum(d)), s.arange(M + 1, b).forEach(function(B) {
                  d = s.arange(M).map(function(T) {
                    return k[M][T] * k[B][T];
                  }), k[B][M] = (f[M][B] - s.sum(d)) / k[M][M];
                });
              }), k;
            }, gauss_jacobi: function(f, d, b, k) {
              for (var M, B, T, L, O = 0, W = 0, P = f.length, ce = [], he = [], Z = []; O < P; O++) for (ce[O] = [], he[O] = [], Z[O] = [], W = 0; W < P; W++) O > W ? (ce[O][W] = f[O][W], he[O][W] = Z[O][W] = 0) : O < W ? (he[O][W] = f[O][W], ce[O][W] = Z[O][W] = 0) : (Z[O][W] = f[O][W], ce[O][W] = he[O][W] = 0);
              for (T = s.multiply(s.multiply(s.inv(Z), s.add(ce, he)), -1), B = s.multiply(s.inv(Z), d), M = b, L = s.add(s.multiply(T, b), B), O = 2; w.abs(s.norm(s.subtract(L, M))) > k; ) M = L, L = s.add(s.multiply(T, M), B), O++;
              return L;
            }, gauss_seidel: function(f, d, b, k) {
              for (var M, B, T, L, O, W = 0, P = f.length, ce = [], he = [], Z = []; W < P; W++) for (ce[W] = [], he[W] = [], Z[W] = [], M = 0; M < P; M++) W > M ? (ce[W][M] = f[W][M], he[W][M] = Z[W][M] = 0) : W < M ? (he[W][M] = f[W][M], ce[W][M] = Z[W][M] = 0) : (Z[W][M] = f[W][M], ce[W][M] = he[W][M] = 0);
              for (L = s.multiply(s.multiply(s.inv(s.add(Z, ce)), he), -1), T = s.multiply(s.inv(s.add(Z, ce)), d), B = b, O = s.add(s.multiply(L, b), T), W = 2; w.abs(s.norm(s.subtract(O, B))) > k; ) B = O, O = s.add(s.multiply(L, B), T), W += 1;
              return O;
            }, SOR: function(f, d, b, k, M) {
              for (var B, T, L, O, W, P = 0, ce = f.length, he = [], Z = [], se = []; P < ce; P++) for (he[P] = [], Z[P] = [], se[P] = [], B = 0; B < ce; B++) P > B ? (he[P][B] = f[P][B], Z[P][B] = se[P][B] = 0) : P < B ? (Z[P][B] = f[P][B], he[P][B] = se[P][B] = 0) : (se[P][B] = f[P][B], he[P][B] = Z[P][B] = 0);
              for (O = s.multiply(s.inv(s.add(se, s.multiply(he, M))), s.subtract(s.multiply(se, 1 - M), s.multiply(Z, M))), L = s.multiply(s.multiply(s.inv(s.add(se, s.multiply(he, M))), d), M), T = b, W = s.add(s.multiply(O, b), L), P = 2; w.abs(s.norm(s.subtract(W, T))) > k; ) T = W, W = s.add(s.multiply(O, T), L), P++;
              return W;
            }, householder: function(f) {
              for (var d, b, k, M, B = f.length, T = f[0].length, L = 0, O = [], W = []; L < B - 1; L++) {
                for (d = 0, M = L + 1; M < T; M++) d += f[M][L] * f[M][L];
                for (d = (f[L + 1][L] > 0 ? -1 : 1) * w.sqrt(d), b = w.sqrt((d * d - f[L + 1][L] * d) / 2), (O = s.zeros(B, 1))[L + 1][0] = (f[L + 1][L] - d) / (2 * b), k = L + 2; k < B; k++) O[k][0] = f[k][L] / (2 * b);
                W = s.subtract(s.identity(B, T), s.multiply(s.multiply(O, s.transpose(O)), 2)), f = s.multiply(W, s.multiply(f, W));
              }
              return f;
            }, QR: (S = s.sum, A = s.arange, function(f) {
              var d, b, k, M = f.length, B = f[0].length, T = s.zeros(B, B);
              for (f = s.copy(f), b = 0; b < B; b++) {
                for (T[b][b] = w.sqrt(S(A(M).map(function(L) {
                  return f[L][b] * f[L][b];
                }))), d = 0; d < M; d++) f[d][b] = f[d][b] / T[b][b];
                for (k = b + 1; k < B; k++) for (T[b][k] = S(A(M).map(function(L) {
                  return f[L][b] * f[L][k];
                })), d = 0; d < M; d++) f[d][k] = f[d][k] - f[d][b] * T[b][k];
              }
              return [f, T];
            }), lstsq: function(f, d) {
              var b = !1;
              d[0].length === void 0 && (d = d.map(function(ce) {
                return [ce];
              }), b = !0);
              var k = s.QR(f), M = k[0], B = k[1], T = f[0].length, L = s.slice(M, { col: { end: T } }), O = function(ce) {
                var he = (ce = s.copy(ce)).length, Z = s.identity(he);
                return s.arange(he - 1, -1, -1).forEach(function(se) {
                  s.sliceAssign(Z, { row: se }, s.divide(s.slice(Z, { row: se }), ce[se][se])), s.sliceAssign(ce, { row: se }, s.divide(s.slice(ce, { row: se }), ce[se][se])), s.arange(se).forEach(function(ge) {
                    var de = s.multiply(ce[ge][se], -1), oe = s.slice(ce, { row: ge }), ve = s.multiply(s.slice(ce, { row: se }), de);
                    s.sliceAssign(ce, { row: ge }, s.add(oe, ve));
                    var Be = s.slice(Z, { row: ge }), Fe = s.multiply(s.slice(Z, { row: se }), de);
                    s.sliceAssign(Z, { row: ge }, s.add(Be, Fe));
                  });
                }), Z;
              }(s.slice(B, { row: { end: T } })), W = s.transpose(L);
              W[0].length === void 0 && (W = [W]);
              var P = s.multiply(s.multiply(O, W), d);
              return P.length === void 0 && (P = [[P]]), b ? P.map(function(ce) {
                return ce[0];
              }) : P;
            }, jacobi: function(f) {
              for (var d, b, k, M, B, T, L, O = 1, W = f.length, P = s.identity(W, W), ce = []; O === 1; ) {
                for (B = f[0][1], k = 0, M = 1, d = 0; d < W; d++) for (b = 0; b < W; b++) d != b && B < w.abs(f[d][b]) && (B = w.abs(f[d][b]), k = d, M = b);
                for (T = f[k][k] === f[M][M] ? f[k][M] > 0 ? w.PI / 4 : -w.PI / 4 : w.atan(2 * f[k][M] / (f[k][k] - f[M][M])) / 2, (L = s.identity(W, W))[k][k] = w.cos(T), L[k][M] = -w.sin(T), L[M][k] = w.sin(T), L[M][M] = w.cos(T), P = s.multiply(P, L), f = s.multiply(s.multiply(s.inv(L), f), L), O = 0, d = 1; d < W; d++) for (b = 1; b < W; b++) d != b && w.abs(f[d][b]) > 1e-3 && (O = 1);
              }
              for (d = 0; d < W; d++) ce.push(f[d][d]);
              return [P, ce];
            }, rungekutta: function(f, d, b, k, M, B) {
              var T, L, O;
              if (B === 2) for (; k <= b; ) M += ((T = d * f(k, M)) + (L = d * f(k + d, M + T))) / 2, k += d;
              if (B === 4) for (; k <= b; ) M += ((T = d * f(k, M)) + 2 * (L = d * f(k + d / 2, M + T / 2)) + 2 * (O = d * f(k + d / 2, M + L / 2)) + d * f(k + d, M + O)) / 6, k += d;
              return M;
            }, romberg: function(f, d, b, k) {
              for (var M, B, T, L, O, W = 0, P = (b - d) / 2, ce = [], he = [], Z = []; W < k / 2; ) {
                for (O = f(d), T = d, L = 0; T <= b; T += P, L++) ce[L] = T;
                for (M = ce.length, T = 1; T < M - 1; T++) O += (T % 2 != 0 ? 4 : 2) * f(ce[T]);
                O = P / 3 * (O + f(b)), Z[W] = O, P /= 2, W++;
              }
              for (B = Z.length, M = 1; B !== 1; ) {
                for (T = 0; T < B - 1; T++) he[T] = (w.pow(4, M) * Z[T + 1] - Z[T]) / (w.pow(4, M) - 1);
                B = he.length, Z = he, he = [], M++;
              }
              return Z;
            }, richardson: function(f, d, b, k) {
              function M(se, ge) {
                for (var de, oe = 0, ve = se.length; oe < ve; oe++) se[oe] === ge && (de = oe);
                return de;
              }
              for (var B, T, L, O, W, P = w.abs(b - f[M(f, b) + 1]), ce = 0, he = [], Z = []; k >= P; ) B = M(f, b + k), T = M(f, b), he[ce] = (d[B] - 2 * d[T] + d[2 * T - B]) / (k * k), k /= 2, ce++;
              for (O = he.length, L = 1; O != 1; ) {
                for (W = 0; W < O - 1; W++) Z[W] = (w.pow(4, L) * he[W + 1] - he[W]) / (w.pow(4, L) - 1);
                O = Z.length, he = Z, Z = [], L++;
              }
              return he;
            }, simpson: function(f, d, b, k) {
              for (var M, B = (b - d) / k, T = f(d), L = [], O = d, W = 0, P = 1; O <= b; O += B, W++) L[W] = O;
              for (M = L.length; P < M - 1; P++) T += (P % 2 != 0 ? 4 : 2) * f(L[P]);
              return B / 3 * (T + f(b));
            }, hermite: function(f, d, b, k) {
              for (var M, B = f.length, T = 0, L = 0, O = [], W = [], P = [], ce = []; L < B; L++) {
                for (O[L] = 1, M = 0; M < B; M++) L != M && (O[L] *= (k - f[M]) / (f[L] - f[M]));
                for (W[L] = 0, M = 0; M < B; M++) L != M && (W[L] += 1 / (f[L] - f[M]));
                P[L] = (1 - 2 * (k - f[L]) * W[L]) * (O[L] * O[L]), ce[L] = (k - f[L]) * (O[L] * O[L]), T += P[L] * d[L] + ce[L] * b[L];
              }
              return T;
            }, lagrange: function(f, d, b) {
              for (var k, M, B = 0, T = 0, L = f.length; T < L; T++) {
                for (M = d[T], k = 0; k < L; k++) T != k && (M *= (b - f[k]) / (f[T] - f[k]));
                B += M;
              }
              return B;
            }, cubic_spline: function(f, d, b) {
              for (var k, M, B = f.length, T = 0, L = [], O = [], W = [], P = [], ce = [], he = []; T < B - 1; T++) P[T] = f[T + 1] - f[T];
              for (W[0] = 0, T = 1; T < B - 1; T++) W[T] = 3 / P[T] * (d[T + 1] - d[T]) - 3 / P[T - 1] * (d[T] - d[T - 1]);
              for (T = 1; T < B - 1; T++) L[T] = [], O[T] = [], L[T][T - 1] = P[T - 1], L[T][T] = 2 * (P[T - 1] + P[T]), L[T][T + 1] = P[T], O[T][0] = W[T];
              for (M = s.multiply(s.inv(L), O), k = 0; k < B - 1; k++) ce[k] = (d[k + 1] - d[k]) / P[k] - P[k] * (M[k + 1][0] + 2 * M[k][0]) / 3, he[k] = (M[k + 1][0] - M[k][0]) / (3 * P[k]);
              for (k = 0; k < B && !(f[k] > b); k++) ;
              return d[k -= 1] + (b - f[k]) * ce[k] + s.sq(b - f[k]) * M[k] + (b - f[k]) * s.sq(b - f[k]) * he[k];
            }, gauss_quadrature: function() {
              throw new Error("gauss_quadrature not yet implemented");
            }, PCA: function(f) {
              var d, b, k, M, B, T = f.length, L = f[0].length, O = 0, W = [], P = [], ce = [], he = [], Z = [], se = [], ge = [];
              for (O = 0; O < T; O++) W[O] = s.sum(f[O]) / L;
              for (O = 0; O < L; O++) for (Z[O] = [], d = 0; d < T; d++) Z[O][d] = f[d][O] - W[d];
              for (Z = s.transpose(Z), O = 0; O < T; O++) for (se[O] = [], d = 0; d < T; d++) se[O][d] = s.dot([Z[O]], [Z[d]]) / (L - 1);
              for (B = (k = s.jacobi(se))[0], P = k[1], ge = s.transpose(B), O = 0; O < P.length; O++) for (d = O; d < P.length; d++) P[O] < P[d] && (b = P[O], P[O] = P[d], P[d] = b, ce = ge[O], ge[O] = ge[d], ge[d] = ce);
              for (M = s.transpose(Z), O = 0; O < T; O++) for (he[O] = [], d = 0; d < M.length; d++) he[O][d] = s.dot([ge[O]], [M[d]]);
              return [f, P, ge, he];
            } }), function(f) {
              for (var d = 0; d < f.length; d++) (function(b) {
                s.fn[b] = function(k, M) {
                  var B = this;
                  return M ? (setTimeout(function() {
                    M.call(B, s.fn[b].call(B, k));
                  }, 15), this) : typeof s[b](this, k) == "number" ? s[b](this, k) : s(s[b](this, k));
                };
              })(f[d]);
            }("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
          }(m, Math), function(s, w) {
            var S = [].slice, A = s.utils.isNumber, l = s.utils.isArray;
            function a(h, f, d, b) {
              if (h > 1 || d > 1 || h <= 0 || d <= 0) throw new Error("Proportions should be greater than 0 and less than 1");
              var k = (h * f + d * b) / (f + b);
              return (h - d) / w.sqrt(k * (1 - k) * (1 / f + 1 / b));
            }
            s.extend({ zscore: function() {
              var h = S.call(arguments);
              return A(h[1]) ? (h[0] - h[1]) / h[2] : (h[0] - s.mean(h[1])) / s.stdev(h[1], h[2]);
            }, ztest: function() {
              var h, f = S.call(arguments);
              return l(f[1]) ? (h = s.zscore(f[0], f[1], f[3]), f[2] === 1 ? s.normal.cdf(-w.abs(h), 0, 1) : 2 * s.normal.cdf(-w.abs(h), 0, 1)) : f.length > 2 ? (h = s.zscore(f[0], f[1], f[2]), f[3] === 1 ? s.normal.cdf(-w.abs(h), 0, 1) : 2 * s.normal.cdf(-w.abs(h), 0, 1)) : (h = f[0], f[1] === 1 ? s.normal.cdf(-w.abs(h), 0, 1) : 2 * s.normal.cdf(-w.abs(h), 0, 1));
            } }), s.extend(s.fn, { zscore: function(h, f) {
              return (h - this.mean()) / this.stdev(f);
            }, ztest: function(h, f, d) {
              var b = w.abs(this.zscore(h, d));
              return f === 1 ? s.normal.cdf(-b, 0, 1) : 2 * s.normal.cdf(-b, 0, 1);
            } }), s.extend({ tscore: function() {
              var h = S.call(arguments);
              return h.length === 4 ? (h[0] - h[1]) / (h[2] / w.sqrt(h[3])) : (h[0] - s.mean(h[1])) / (s.stdev(h[1], !0) / w.sqrt(h[1].length));
            }, ttest: function() {
              var h, f = S.call(arguments);
              return f.length === 5 ? (h = w.abs(s.tscore(f[0], f[1], f[2], f[3])), f[4] === 1 ? s.studentt.cdf(-h, f[3] - 1) : 2 * s.studentt.cdf(-h, f[3] - 1)) : A(f[1]) ? (h = w.abs(f[0]), f[2] == 1 ? s.studentt.cdf(-h, f[1] - 1) : 2 * s.studentt.cdf(-h, f[1] - 1)) : (h = w.abs(s.tscore(f[0], f[1])), f[2] == 1 ? s.studentt.cdf(-h, f[1].length - 1) : 2 * s.studentt.cdf(-h, f[1].length - 1));
            } }), s.extend(s.fn, { tscore: function(h) {
              return (h - this.mean()) / (this.stdev(!0) / w.sqrt(this.cols()));
            }, ttest: function(h, f) {
              return f === 1 ? 1 - s.studentt.cdf(w.abs(this.tscore(h)), this.cols() - 1) : 2 * s.studentt.cdf(-w.abs(this.tscore(h)), this.cols() - 1);
            } }), s.extend({ anovafscore: function() {
              var h, f, d, b, k, M, B, T, L = S.call(arguments);
              if (L.length === 1) {
                for (k = new Array(L[0].length), B = 0; B < L[0].length; B++) k[B] = L[0][B];
                L = k;
              }
              for (f = new Array(), B = 0; B < L.length; B++) f = f.concat(L[B]);
              for (d = s.mean(f), h = 0, B = 0; B < L.length; B++) h += L[B].length * w.pow(s.mean(L[B]) - d, 2);
              for (h /= L.length - 1, M = 0, B = 0; B < L.length; B++) for (b = s.mean(L[B]), T = 0; T < L[B].length; T++) M += w.pow(L[B][T] - b, 2);
              return h / (M / (f.length - L.length));
            }, anovaftest: function() {
              var h, f, d, b, k = S.call(arguments);
              if (A(k[0])) return 1 - s.centralF.cdf(k[0], k[1], k[2]);
              var M = s.anovafscore(k);
              for (h = k.length - 1, d = 0, b = 0; b < k.length; b++) d += k[b].length;
              return f = d - h - 1, 1 - s.centralF.cdf(M, h, f);
            }, ftest: function(h, f, d) {
              return 1 - s.centralF.cdf(h, f, d);
            } }), s.extend(s.fn, { anovafscore: function() {
              return s.anovafscore(this.toArray());
            }, anovaftes: function() {
              var h, f = 0;
              for (h = 0; h < this.length; h++) f += this[h].length;
              return s.ftest(this.anovafscore(), this.length - 1, f - this.length);
            } }), s.extend({ qscore: function() {
              var h, f, d, b, k, M = S.call(arguments);
              return A(M[0]) ? (h = M[0], f = M[1], d = M[2], b = M[3], k = M[4]) : (h = s.mean(M[0]), f = s.mean(M[1]), d = M[0].length, b = M[1].length, k = M[2]), w.abs(h - f) / (k * w.sqrt((1 / d + 1 / b) / 2));
            }, qtest: function() {
              var h, f = S.call(arguments);
              f.length === 3 ? (h = f[0], f = f.slice(1)) : f.length === 7 ? (h = s.qscore(f[0], f[1], f[2], f[3], f[4]), f = f.slice(5)) : (h = s.qscore(f[0], f[1], f[2]), f = f.slice(3));
              var d = f[0], b = f[1];
              return 1 - s.tukey.cdf(h, b, d - b);
            }, tukeyhsd: function(h) {
              for (var f = s.pooledstdev(h), d = h.map(function(L) {
                return s.mean(L);
              }), b = h.reduce(function(L, O) {
                return L + O.length;
              }, 0), k = [], M = 0; M < h.length; ++M) for (var B = M + 1; B < h.length; ++B) {
                var T = s.qtest(d[M], d[B], h[M].length, h[B].length, f, b, h.length);
                k.push([[M, B], T]);
              }
              return k;
            } }), s.extend({ normalci: function() {
              var h, f = S.call(arguments), d = new Array(2);
              return h = f.length === 4 ? w.abs(s.normal.inv(f[1] / 2, 0, 1) * f[2] / w.sqrt(f[3])) : w.abs(s.normal.inv(f[1] / 2, 0, 1) * s.stdev(f[2]) / w.sqrt(f[2].length)), d[0] = f[0] - h, d[1] = f[0] + h, d;
            }, tci: function() {
              var h, f = S.call(arguments), d = new Array(2);
              return h = f.length === 4 ? w.abs(s.studentt.inv(f[1] / 2, f[3] - 1) * f[2] / w.sqrt(f[3])) : w.abs(s.studentt.inv(f[1] / 2, f[2].length - 1) * s.stdev(f[2], !0) / w.sqrt(f[2].length)), d[0] = f[0] - h, d[1] = f[0] + h, d;
            }, significant: function(h, f) {
              return h < f;
            } }), s.extend(s.fn, { normalci: function(h, f) {
              return s.normalci(h, f, this.toArray());
            }, tci: function(h, f) {
              return s.tci(h, f, this.toArray());
            } }), s.extend(s.fn, { oneSidedDifferenceOfProportions: function(h, f, d, b) {
              var k = a(h, f, d, b);
              return s.ztest(k, 1);
            }, twoSidedDifferenceOfProportions: function(h, f, d, b) {
              var k = a(h, f, d, b);
              return s.ztest(k, 2);
            } });
          }(m, Math), m.models = /* @__PURE__ */ function() {
            function s(S, A) {
              var l = S.length, a = A[0].length - 1, h = l - a - 1, f = m.lstsq(A, S), d = m.multiply(A, f.map(function(L) {
                return [L];
              })).map(function(L) {
                return L[0];
              }), b = m.subtract(S, d), k = m.mean(S), M = m.sum(d.map(function(L) {
                return Math.pow(L - k, 2);
              })), B = m.sum(S.map(function(L, O) {
                return Math.pow(L - d[O], 2);
              })), T = M + B;
              return { exog: A, endog: S, nobs: l, df_model: a, df_resid: h, coef: f, predict: d, resid: b, ybar: k, SST: T, SSE: M, SSR: B, R2: M / T };
            }
            function w(S) {
              var A, l, a = (A = S.exog, l = A[0].length, m.arange(l).map(function(B) {
                var T = m.arange(l).filter(function(L) {
                  return L !== B;
                });
                return s(m.col(A, B).map(function(L) {
                  return L[0];
                }), m.col(A, T));
              })), h = Math.sqrt(S.SSR / S.df_resid), f = a.map(function(B) {
                var T = B.SST, L = B.R2;
                return h / Math.sqrt(T * (1 - L));
              }), d = S.coef.map(function(B, T) {
                return (B - 0) / f[T];
              }), b = d.map(function(B) {
                var T = m.studentt.cdf(B, S.df_resid);
                return 2 * (T > 0.5 ? 1 - T : T);
              }), k = m.studentt.inv(0.975, S.df_resid), M = S.coef.map(function(B, T) {
                var L = k * f[T];
                return [B - L, B + L];
              });
              return { se: f, t: d, p: b, sigmaHat: h, interval95: M };
            }
            return { ols: function(S, A) {
              var l = s(S, A), a = w(l), h = function(d) {
                var b, k, M, B = d.R2 / d.df_model / ((1 - d.R2) / d.df_resid);
                return { F_statistic: B, pvalue: 1 - (b = B, k = d.df_model, M = d.df_resid, m.beta.cdf(b / (M / k + b), k / 2, M / 2)) };
              }(l), f = 1 - (1 - l.R2) * ((l.nobs - 1) / l.df_resid);
              return l.t = a, l.f = h, l.adjust_R2 = f, l;
            } };
          }(), m.extend({ buildxmatrix: function() {
            for (var s = new Array(arguments.length), w = 0; w < arguments.length; w++)
              s[w] = [1].concat(arguments[w]);
            return m(s);
          }, builddxmatrix: function() {
            for (var s = new Array(arguments[0].length), w = 0; w < arguments[0].length; w++)
              s[w] = [1].concat(arguments[0][w]);
            return m(s);
          }, buildjxmatrix: function(s) {
            for (var w = new Array(s.length), S = 0; S < s.length; S++) w[S] = s[S];
            return m.builddxmatrix(w);
          }, buildymatrix: function(s) {
            return m(s).transpose();
          }, buildjymatrix: function(s) {
            return s.transpose();
          }, matrixmult: function(s, w) {
            var S, A, l, a, h;
            if (s.cols() == w.rows()) {
              if (w.rows() > 1) {
                for (a = [], S = 0; S < s.rows(); S++) for (a[S] = [], A = 0; A < w.cols(); A++) {
                  for (h = 0, l = 0; l < s.cols(); l++) h += s.toArray()[S][l] * w.toArray()[l][A];
                  a[S][A] = h;
                }
                return m(a);
              }
              for (a = [], S = 0; S < s.rows(); S++) for (a[S] = [], A = 0; A < w.cols(); A++) {
                for (h = 0, l = 0; l < s.cols(); l++) h += s.toArray()[S][l] * w.toArray()[A];
                a[S][A] = h;
              }
              return m(a);
            }
          }, regress: function(s, w) {
            var S = m.xtranspxinv(s), A = s.transpose(), l = m.matrixmult(m(S), A);
            return m.matrixmult(l, w);
          }, regresst: function(s, w, S) {
            var A = m.regress(s, w), l = { anova: {} }, a = m.jMatYBar(s, A);
            l.yBar = a;
            var h = w.mean();
            l.anova.residuals = m.residuals(w, a), l.anova.ssr = m.ssr(a, h), l.anova.msr = l.anova.ssr / (s[0].length - 1), l.anova.sse = m.sse(w, a), l.anova.mse = l.anova.sse / (w.length - (s[0].length - 1) - 1), l.anova.sst = m.sst(w, h), l.anova.mst = l.anova.sst / (w.length - 1), l.anova.r2 = 1 - l.anova.sse / l.anova.sst, l.anova.r2 < 0 && (l.anova.r2 = 0), l.anova.fratio = l.anova.msr / l.anova.mse, l.anova.pvalue = m.anovaftest(l.anova.fratio, s[0].length - 1, w.length - (s[0].length - 1) - 1), l.anova.rmse = Math.sqrt(l.anova.mse), l.anova.r2adj = 1 - l.anova.mse / l.anova.mst, l.anova.r2adj < 0 && (l.anova.r2adj = 0), l.stats = new Array(s[0].length);
            for (var f, d, b, k = m.xtranspxinv(s), M = 0; M < A.length; M++) f = Math.sqrt(l.anova.mse * Math.abs(k[M][M])), d = Math.abs(A[M] / f), b = m.ttest(d, w.length - s[0].length - 1, S), l.stats[M] = [A[M], f, d, b];
            return l.regress = A, l;
          }, xtranspx: function(s) {
            return m.matrixmult(s.transpose(), s);
          }, xtranspxinv: function(s) {
            var w = m.matrixmult(s.transpose(), s);
            return m.inv(w);
          }, jMatYBar: function(s, w) {
            var S = m.matrixmult(s, w);
            return new m(S);
          }, residuals: function(s, w) {
            return m.matrixsubtract(s, w);
          }, ssr: function(s, w) {
            for (var S = 0, A = 0; A < s.length; A++) S += Math.pow(s[A] - w, 2);
            return S;
          }, sse: function(s, w) {
            for (var S = 0, A = 0; A < s.length; A++) S += Math.pow(s[A] - w[A], 2);
            return S;
          }, sst: function(s, w) {
            for (var S = 0, A = 0; A < s.length; A++) S += Math.pow(s[A] - w, 2);
            return S;
          }, matrixsubtract: function(s, w) {
            for (var S = new Array(s.length), A = 0; A < s.length; A++) {
              S[A] = new Array(s[A].length);
              for (var l = 0; l < s[A].length; l++) S[A][l] = s[A][l] - w[A][l];
            }
            return m(S);
          } }), m.jStat = m, m);
        }, 960: function(z, m, s) {
          const w = s(592);
          z.exports = function(S) {
            function A(M, B) {
              const T = B.split(".");
              let L = M;
              for (const O of T) {
                if (L == null) return;
                L = L[O];
              }
              return L;
            }
            for (let M = 0; M < Object.keys(w).length; M++) {
              let B, T = Object.keys(w)[M], L = [];
              if (typeof w[T] == "object") {
                L = Object.keys(w[T]), B = Object.values(w[T]);
                for (let O = 0; O < B.length; O++) if (typeof B[O] == "object") {
                  let W = L[O];
                  w[T][W] && (L = [...L, ...Object.keys(w[T][W]).map((P) => W + "." + P)], L.splice(L.indexOf(W), 1));
                }
              }
              if (L.length < 1) S[T] = w[T];
              else for (let O = 0; O < L.length; O++) typeof A(w[T], L[O]) == "function" && (S[T] = A(w[T], L[O]));
            }
            let l = function(M) {
              return typeof M == "number" && (M = parseInt(M)), M;
            }, a = null, h = null, f = null;
            S.TABLE = function() {
              return f;
            }, S.COLUMN = S.COL = function() {
              return f.tracking && f.tracking.push(k.getColumnNameFromCoords(l(a), l(h))), l(a) + 1;
            }, S.ROW = function() {
              return f.tracking && f.tracking.push(k.getColumnNameFromCoords(l(a), l(h))), l(h) + 1;
            }, S.CELL = function() {
              return k.getColumnNameFromCoords(a, h);
            }, S.VALUE = function(M, B, T) {
              return f.getValueFromCoords(l(M) - 1, l(B) - 1, T);
            }, S.THISROWCELL = function(M) {
              return f.getValueFromCoords(l(M) - 1, l(h));
            };
            const d = function(M, B) {
              for (let T = 0; T < M.length; T++) {
                let L = k.getTokensFromRange(M[T]);
                B = B.replace(M[T], "[" + L.join(",") + "]");
              }
              return B;
            }, b = function(M) {
              return typeof M == "string" && (M = M.trim()), !isNaN(M) && M !== null && M !== "";
            }, k = function(M, B, T, L, O) {
              f = O, a = T, h = L;
              let W = "", P = {};
              if (B) if (B.size) {
                let Z, se = null;
                B.forEach(function(ge, de) {
                  Z = de.replace(/!/g, "."), Z.indexOf(".") !== -1 && (Z = Z.split("."), P[Z[0]] = !0);
                }), Z = Object.keys(P);
                for (let ge = 0; ge < Z.length; ge++) W += "var " + Z[ge] + " = {};";
                B.forEach(function(ge, de) {
                  Z = de.replace(/!/g, "."), ge === null || b(ge) || (se = ge.match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g), se && se.length && (ge = updateRanges(se, ge))), Z.indexOf(".") > 0 ? W += Z + " = " + B.get(de) + `;
` : W += "var " + Z + " = " + ge + `;
`;
                });
              } else {
                let Z = Object.keys(B);
                if (Z.length) {
                  let se, ge = {};
                  for (let de = 0; de < Z.length; de++) if (se = Z[de].replace(/\!/g, "."), se.indexOf(".") > 0) {
                    let oe = oe.split(".");
                    ge[oe[0]] = {};
                  }
                  se = Object.keys(ge);
                  for (let de = 0; de < se.length; de++) W += "var " + se[de] + " = {};";
                  for (let de = 0; de < Z.length; de++) {
                    if (se = Z[de].replace(/!/g, "."), B[Z[de]] !== null && !b(B[Z[de]])) {
                      let oe = B[Z[de]].match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);
                      oe && oe.length && (B[Z[de]] = d(oe, B[Z[de]]));
                    }
                    se.indexOf(".") > 0 ? W += se + " = " + B[Z[de]] + `;
` : W += "var " + se + " = " + B[Z[de]] + `;
`;
                  }
                }
              }
              let ce = (M = function(Z, se) {
                let ge = "", de = 0, oe = ["=", "!", ">", "<"];
                for (let ve = 0; ve < Z.length; ve++) Z[ve] === '"' && (de = de === 0 ? 1 : 0), de === 1 ? ge += Z[ve] : (ge += Z[ve].toUpperCase(), ve > 0 && Z[ve] === "=" && oe.indexOf(Z[ve - 1]) === -1 && oe.indexOf(Z[ve + 1]) === -1 && (ge += "="));
                return ge = ge.replace(/\^/g, "**"), ge = ge.replace(/<>/g, "!="), ge = ge.replace(/&/g, "+"), ge = ge.replace(/\$/g, ""), ge;
              }(M = (M = M.replace(/\$/g, "")).replace(/!/g, "."))).match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);
              ce && ce.length && (M = d(ce, M));
              let he = new Function(W + "; return " + M)();
              return he === null && (he = 0), he;
            };
            return k.getColumnNameFromCoords = function(M, B) {
              return T = parseInt(M), L = "", T > 701 ? (L += String.fromCharCode(64 + parseInt(T / 676)), L += String.fromCharCode(64 + parseInt(T % 676 / 26))) : T > 25 && (L += String.fromCharCode(64 + parseInt(T / 26))), L + String.fromCharCode(65 + T % 26) + (parseInt(B) + 1);
              var T, L;
            }, k.getCoordsFromColumnName = function(M) {
              var B = /^[a-zA-Z]+/.exec(M);
              if (B) {
                for (var T = 0, L = 0; L < B[0].length; L++) T += parseInt(B[0].charCodeAt(L) - 64) * Math.pow(26, B[0].length - 1 - L);
                --T < 0 && (T = 0);
                var O = parseInt(/[0-9]+$/.exec(M)) || null;
                return O > 0 && O--, [T, O];
              }
            }, k.getRangeFromTokens = function(M) {
              M = M.filter(function(O) {
                return O != "#REF!";
              });
              for (var B = "", T = "", L = 0; L < M.length; L++) M[L].indexOf(".") >= 0 ? B = "." : M[L].indexOf("!") >= 0 && (B = "!"), B && (T = M[L].split(B), M[L] = T[1], T = T[0] + B);
              return M.sort(function(O, W) {
                var P = Helpers.getCoordsFromColumnName(O), ce = Helpers.getCoordsFromColumnName(W);
                return P[1] > ce[1] ? 1 : P[1] < ce[1] ? -1 : P[0] > ce[0] ? 1 : P[0] < ce[0] ? -1 : 0;
              }), M.length ? T + (M[0] + ":") + M[M.length - 1] : "#REF!";
            }, k.getTokensFromRange = function(M) {
              if (M.indexOf(".") > 0) {
                var B = M.split(".");
                M = B[1], B = B[0] + ".";
              } else M.indexOf("!") > 0 ? (B = M.split("!"), M = B[1], B = B[0] + "!") : B = "";
              M = M.split(":");
              var T = k.getCoordsFromColumnName(M[0]), L = k.getCoordsFromColumnName(M[1]);
              if (T[0] <= L[0]) var O = T[0], W = L[0];
              else O = L[0], W = T[0];
              if (T[1] === null && L[1] == null) for (var P = null, ce = null, he = Object.keys(vars), Z = 0; Z < he.length; Z++) {
                var se = k.getCoordsFromColumnName(he[Z]);
                se[0] === T[0] && (P === null || se[1] < P) && (P = se[1]), se[0] === L[0] && (ce === null || se[1] > ce) && (ce = se[1]);
              }
              else T[1] <= L[1] ? (P = T[1], ce = L[1]) : (P = L[1], ce = T[1]);
              for (var ge = [], de = P; de <= ce; de++) {
                var oe = [];
                for (Z = O; Z <= W; Z++) oe.push(B + k.getColumnNameFromCoords(Z, de));
                ge.push(oe);
              }
              return ge;
            }, k.setFormula = function(M) {
              let B = Object.keys(M);
              for (let T = 0; T < B.length; T++) typeof M[B[T]] == "function" && (S[B[T]] = M[B[T]]);
            }, k.basic = !0, k;
          }(typeof window > "u" ? s.g : window);
        }, 592: function(z, m, s) {
          var w = s(162), S = s(765);
          const A = new Error("#NULL!"), l = new Error("#DIV/0!"), a = new Error("#VALUE!"), h = new Error("#REF!"), f = new Error("#NAME?"), d = new Error("#NUM!"), b = new Error("#N/A"), k = new Error("#ERROR!"), M = new Error("#GETTING_DATA");
          var B = Object.freeze({ __proto__: null, data: M, div0: l, error: k, na: b, name: f, nil: A, num: d, ref: h, value: a });
          function T(e) {
            const t = [];
            return L(e, (c) => {
              t.push(c);
            }), t;
          }
          function L(e, t) {
            let c = -1;
            const v = e.length;
            for (; ++c < v && t(e[c], c, e) !== !1; ) ;
            return e;
          }
          function O(e) {
            let t, c = e.length;
            for (; c--; ) if (t = e[c], typeof t != "number") if (t !== !0) if (t !== !1) {
              if (typeof t == "string") {
                const v = U(t);
                e[c] = v instanceof Error ? 0 : v;
              }
            } else e[c] = 0;
            else e[c] = 1;
            return e;
          }
          function W(e, t) {
            if (!e) return a;
            e.every((D) => Array.isArray(D)) && e.length !== 0 || (e = [[...e]]), e.map((D, F) => {
              D.map((X, le) => {
                X || (e[F][le] = 0);
              });
            });
            const c = e.reduce((D, F, X) => F.length > e[D].length ? X : D, 0), v = e[c].length;
            return e.map((D) => [...D, ...Array(v - D.length).fill(0)]);
          }
          function P() {
            let e;
            if (arguments.length === 1) {
              const c = arguments[0];
              e = (t = c) != null && typeof t.length == "number" && typeof t != "string" ? T.apply(null, arguments) : [c];
            } else e = Array.from(arguments);
            for (var t; !he(e); ) e = ce(e);
            return e;
          }
          function ce(e) {
            return e && e.reduce ? e.reduce((t, c) => {
              const v = Array.isArray(t), D = Array.isArray(c);
              return v && D ? t.concat(c) : v ? (t.push(c), t) : D ? [t].concat(c) : [t, c];
            }) : [e];
          }
          function he(e) {
            if (!e) return !1;
            for (let t = 0; t < e.length; ++t) if (Array.isArray(e[t])) return !1;
            return !0;
          }
          function Z(e, t) {
            return t = t || 1, e && typeof e.slice == "function" ? e.slice(t) : e;
          }
          function se(e) {
            return e ? e[0].map((t, c) => e.map((v) => v[c])) : a;
          }
          function ge(e, t) {
            let c = null;
            return L(e, (v, D) => {
              if (v[0] === t) return c = D, !1;
            }), c ?? a;
          }
          function de() {
            for (let e = 0; e < arguments.length; e++) if (arguments[e] instanceof Error) return arguments[e];
          }
          function oe() {
            let e = arguments.length;
            for (; e--; ) if (arguments[e] instanceof Error) return !0;
            return !1;
          }
          function ve(e) {
            return Math.round(e * 1e14) / 1e14;
          }
          function Be() {
            return P.apply(null, arguments).filter((e) => typeof e == "number");
          }
          function Fe(e) {
            if (typeof e == "boolean" || e instanceof Error) return e;
            if (typeof e == "number") return e !== 0;
            if (typeof e == "string") {
              const t = e.toUpperCase();
              if (t === "TRUE") return !0;
              if (t === "FALSE") return !1;
            }
            return e instanceof Date && !isNaN(e) || a;
          }
          function De(e) {
            if (!isNaN(e)) {
              if (e instanceof Date) return new Date(e);
              const t = parseFloat(e);
              return t < 0 || t >= 2958466 ? d : function(c) {
                c < 60 && (c += 1);
                const v = Math.floor(c - 25569), D = new Date(86400 * v * 1e3), F = c - Math.floor(c) + 1e-7;
                let X = Math.floor(86400 * F);
                const le = X % 60;
                X -= le;
                const me = Math.floor(X / 3600), Le = Math.floor(X / 60) % 60;
                let He = D.getUTCDate(), qe = D.getUTCMonth();
                return c >= 60 && c < 61 && (He = 29, qe = 1), new Date(D.getUTCFullYear(), qe, He, me, Le, le);
              }(t);
            }
            return typeof e != "string" || (e = /(\d{4})-(\d\d?)-(\d\d?)$/.test(e) ? /* @__PURE__ */ new Date(e + "T00:00:00.000") : new Date(e), isNaN(e)) ? a : e;
          }
          function Ke(e) {
            let t, c = e.length;
            for (; c--; ) {
              if (t = De(e[c]), t === a) return t;
              e[c] = t;
            }
            return e;
          }
          function U(e) {
            return e instanceof Error ? e : e == null ? 0 : (typeof e == "boolean" && (e = +e), isNaN(e) || e === "" ? a : parseFloat(e));
          }
          function Me(e) {
            let t, c;
            if (!e || (t = e.length) === 0) return a;
            for (; t--; ) {
              if (e[t] instanceof Error) return e[t];
              if (c = U(e[t]), c instanceof Error) return c;
              e[t] = c;
            }
            return e;
          }
          function We(e) {
            return e instanceof Error ? e : e == null ? "" : e.toString();
          }
          function ot() {
            let e = arguments.length;
            for (; e--; ) if (typeof arguments[e] == "string") return !0;
            return !1;
          }
          function Ne(e) {
            return e != null;
          }
          const we = "=", Ie = [">", ">=", "<", "<=", "=", "<>"], Pe = "operator", Ue = "literal", Ge = [Pe, Ue], lt = Pe, it = Ue;
          function ft(e, t) {
            if (Ge.indexOf(t) === -1) throw new Error("Unsupported token type: " + t);
            return { value: e, type: t };
          }
          function bt(e) {
            return function(t) {
              let c = "";
              const v = [];
              for (let D = 0; D < t.length; D++) {
                const F = t[D];
                D === 0 && Ie.indexOf(F) >= 0 ? v.push(ft(F, lt)) : c += F;
              }
              return c.length > 0 && v.push(ft(function(D) {
                return typeof D != "string" || /^\d+(\.\d+)?$/.test(D) && (D = D.indexOf(".") === -1 ? parseInt(D, 10) : parseFloat(D)), D;
              }(c), it)), v.length > 0 && v[0].type !== lt && v.unshift(ft(we, lt)), v;
            }(function(t) {
              const c = t.length, v = [];
              let D = 0, F = "", X = "";
              for (; D < c; ) {
                const le = t.charAt(D);
                switch (le) {
                  case ">":
                  case "<":
                  case "=":
                    X += le, F.length > 0 && (v.push(F), F = "");
                    break;
                  default:
                    X.length > 0 && (v.push(X), X = ""), F += le;
                }
                D++;
              }
              return F.length > 0 && v.push(F), X.length > 0 && v.push(X), v;
            }(e));
          }
          const vt = function(e) {
            const t = [];
            let c;
            for (let v = 0; v < e.length; v++) {
              const D = e[v];
              switch (D.type) {
                case lt:
                  c = D.value;
                  break;
                case it:
                  t.push(D.value);
              }
            }
            return function(v, D) {
              let F = !1;
              switch (D) {
                case ">":
                  F = v[0] > v[1];
                  break;
                case ">=":
                  F = v[0] >= v[1];
                  break;
                case "<":
                  F = v[0] < v[1];
                  break;
                case "<=":
                  F = v[0] <= v[1];
                  break;
                case "=":
                  F = v[0] == v[1];
                  break;
                case "<>":
                  F = v[0] != v[1];
              }
              return F;
            }(t, c);
          }, _t = {};
          function St(e) {
            return [a, h, l, d, f, A].indexOf(e) >= 0 || typeof e == "number" && (isNaN(e) || !isFinite(e));
          }
          function It(e) {
            return St(e) || e === b;
          }
          function gt(e) {
            return e === !0 || e === !1;
          }
          function Nt(e) {
            return typeof e == "number" && !isNaN(e) && isFinite(e);
          }
          function Ot(e) {
            return typeof e == "string";
          }
          function E() {
            const e = [];
            for (let t = 0; t < arguments.length; ++t) {
              let c = !1;
              const v = arguments[t];
              for (let D = 0; D < e.length && (c = e[D] === v, !c); ++D) ;
              c || e.push(v);
            }
            return e;
          }
          function I(e, t, c, v) {
            if (!t || !c) return b;
            v = !(v === 0 || v === !1);
            let D = b;
            const F = typeof e == "number";
            let X = !1;
            for (let le = 0; le < t.length; le++) {
              const me = t[le];
              if (me[0] === e) {
                D = c < me.length + 1 ? me[c - 1] : h;
                break;
              }
              !X && (F && v && me[0] <= e || v && typeof me[0] == "string" && me[0].localeCompare(e) < 0) && (D = c < me.length + 1 ? me[c - 1] : h), F && me[0] > e && (X = !0);
            }
            return D;
          }
          function u() {
            const e = P(arguments).filter(Ne);
            if (e.length === 0) return l;
            const t = de.apply(void 0, e);
            if (t) return t;
            const c = Be(e), v = c.length;
            let D, F = 0, X = 0;
            for (let le = 0; le < v; le++) F += c[le], X += 1;
            return D = F / X, isNaN(D) && (D = d), D;
          }
          function r() {
            const e = P(arguments).filter(Ne);
            if (e.length === 0) return l;
            const t = de.apply(void 0, e);
            if (t) return t;
            const c = e, v = c.length;
            let D, F = 0, X = 0;
            for (let le = 0; le < v; le++) {
              const me = c[le];
              typeof me == "number" && (F += me), me === !0 && F++, me !== null && X++;
            }
            return D = F / X, isNaN(D) && (D = d), D;
          }
          _t.TYPE = (e) => {
            switch (e) {
              case A:
                return 1;
              case l:
                return 2;
              case a:
                return 3;
              case h:
                return 4;
              case f:
                return 5;
              case d:
                return 6;
              case b:
                return 7;
              case M:
                return 8;
            }
            return b;
          };
          const Y = { DIST: function(e, t, c, v, D, F) {
            return arguments.length < 4 ? a : (D = D === void 0 ? 0 : D, F = F === void 0 ? 1 : F, oe(e = U(e), t = U(t), c = U(c), D = U(D), F = U(F)) ? a : (e = (e - D) / (F - D), v ? w.beta.cdf(e, t, c) : w.beta.pdf(e, t, c)));
          }, INV: (e, t, c, v, D) => (v = v === void 0 ? 0 : v, D = D === void 0 ? 1 : D, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D)) ? a : w.beta.inv(e, t, c) * (D - v) + v) }, re = { DIST: (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c), v = U(v)) ? a : v ? w.binomial.cdf(e, t, c) : w.binomial.pdf(e, t, c) };
          re.DIST.RANGE = (e, t, c, v) => {
            if (v = v === void 0 ? c : v, oe(e = U(e), t = U(t), c = U(c), v = U(v))) return a;
            let D = 0;
            for (let F = c; F <= v; F++) D += ut(e, F) * Math.pow(t, F) * Math.pow(1 - t, e - F);
            return D;
          }, re.INV = (e, t, c) => {
            if (oe(e = U(e), t = U(t), c = U(c))) return a;
            let v = 0;
            for (; v <= e; ) {
              if (w.binomial.cdf(v, e, t) >= c) return v;
              v++;
            }
          };
          const ne = { DIST: (e, t, c) => oe(e = U(e), t = U(t)) ? a : c ? w.chisquare.cdf(e, t) : w.chisquare.pdf(e, t) };
          ne.DIST.RT = (e, t) => !e | !t ? b : e < 1 || t > Math.pow(10, 10) ? d : typeof e != "number" || typeof t != "number" ? a : 1 - w.chisquare.cdf(e, t), ne.INV = (e, t) => oe(e = U(e), t = U(t)) ? a : w.chisquare.inv(e, t), ne.INV.RT = (e, t) => !e | !t ? b : e < 0 || e > 1 || t < 1 || t > Math.pow(10, 10) ? d : typeof e != "number" || typeof t != "number" ? a : w.chisquare.inv(1 - e, t), ne.TEST = function(e, t) {
            if (arguments.length !== 2) return b;
            if (!(e instanceof Array && t instanceof Array) || e.length !== t.length || e[0] && t[0] && e[0].length !== t[0].length) return a;
            const c = e.length;
            let v, D, F;
            for (D = 0; D < c; D++) e[D] instanceof Array || (v = e[D], e[D] = [], e[D].push(v)), t[D] instanceof Array || (v = t[D], t[D] = [], t[D].push(v));
            const X = e[0].length, le = X === 1 ? c - 1 : (c - 1) * (X - 1);
            let me = 0;
            const Le = Math.PI;
            for (D = 0; D < c; D++) for (F = 0; F < X; F++) me += Math.pow(e[D][F] - t[D][F], 2) / t[D][F];
            return Math.round(1e6 * function(He, qe) {
              let Ye = Math.exp(-0.5 * He);
              qe % 2 == 1 && (Ye *= Math.sqrt(2 * He / Le));
              let Je = qe;
              for (; Je >= 2; ) Ye = Ye * He / Je, Je -= 2;
              let rt = Ye, at = qe;
              for (; rt > 1e-10 * Ye; ) at += 2, rt = rt * He / at, Ye += rt;
              return 1 - Ye;
            }(me, le)) / 1e6;
          };
          const H = {};
          function N() {
            return Be(P(arguments)).length;
          }
          function V() {
            const e = P(arguments);
            return e.length - K(e);
          }
          function K() {
            const e = P(arguments);
            let t, c = 0;
            for (let v = 0; v < e.length; v++) t = e[v], t != null && t !== "" || c++;
            return c;
          }
          H.NORM = (e, t, c) => oe(e = U(e), t = U(t), c = U(c)) ? a : w.normalci(1, e, t, c)[1] - 1, H.T = (e, t, c) => oe(e = U(e), t = U(t), c = U(c)) ? a : w.tci(1, e, t, c)[1] - 1;
          const ae = { P: (e, t) => {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = w.mean(e), v = w.mean(t);
            let D = 0;
            const F = e.length;
            for (let X = 0; X < F; X++) D += (e[X] - c) * (t[X] - v);
            return D / F;
          }, S: (e, t) => oe(e = Me(P(e)), t = Me(P(t))) ? a : w.covariance(e, t) }, xe = { DIST: (e, t, c) => oe(e = U(e), t = U(t)) ? a : c ? w.exponential.cdf(e, t) : w.exponential.pdf(e, t) }, fe = {};
          function be(e, t, c) {
            if (oe(e = U(e), t = Me(P(t)), c = Me(P(c)))) return a;
            const v = w.mean(c), D = w.mean(t), F = c.length;
            let X = 0, le = 0;
            for (let Le = 0; Le < F; Le++) X += (c[Le] - v) * (t[Le] - D), le += Math.pow(c[Le] - v, 2);
            const me = X / le;
            return D - me * v + me * e;
          }
          function Ae(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 || parseInt(e, 10) === e && e < 0 ? d : w.gammafn(e);
          }
          function Se(e) {
            return (e = U(e)) instanceof Error ? e : w.gammaln(e);
          }
          fe.DIST = (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c)) ? a : v ? w.centralF.cdf(e, t, c) : w.centralF.pdf(e, t, c), fe.DIST.RT = function(e, t, c) {
            return arguments.length !== 3 ? b : e < 0 || t < 1 || c < 1 ? d : typeof e != "number" || typeof t != "number" || typeof c != "number" ? a : 1 - w.centralF.cdf(e, t, c);
          }, fe.INV = (e, t, c) => oe(e = U(e), t = U(t), c = U(c)) ? a : e <= 0 || e > 1 ? d : w.centralF.inv(e, t, c), fe.INV.RT = function(e, t, c) {
            return arguments.length !== 3 ? b : e < 0 || e > 1 || t < 1 || t > Math.pow(10, 10) || c < 1 || c > Math.pow(10, 10) ? d : typeof e != "number" || typeof t != "number" || typeof c != "number" ? a : w.centralF.inv(1 - e, t, c);
          }, fe.TEST = (e, t) => {
            if (!e || !t || !(e instanceof Array && t instanceof Array)) return b;
            if (e.length < 2 || t.length < 2) return l;
            const c = (F, X) => {
              let le = 0;
              for (let me = 0; me < F.length; me++) le += Math.pow(F[me] - X, 2);
              return le;
            }, v = kt(e) / e.length, D = kt(t) / t.length;
            return c(e, v) / (e.length - 1) / (c(t, D) / (t.length - 1));
          }, Ae.DIST = function(e, t, c, v) {
            return arguments.length !== 4 ? b : e < 0 || t <= 0 || c <= 0 || typeof e != "number" || typeof t != "number" || typeof c != "number" ? a : v ? w.gamma.cdf(e, t, c, !0) : w.gamma.pdf(e, t, c, !1);
          }, Ae.INV = function(e, t, c) {
            return arguments.length !== 3 ? b : e < 0 || e > 1 || t <= 0 || c <= 0 ? d : typeof e != "number" || typeof t != "number" || typeof c != "number" ? a : w.gamma.inv(e, t, c);
          }, Se.PRECISE = function(e) {
            return arguments.length !== 1 ? b : e <= 0 ? d : typeof e != "number" ? a : w.gammaln(e);
          };
          const Oe = {};
          function Ze(e, t) {
            return oe(e = Me(P(e)), t = U(t)) ? e : t < 0 || e.length < t ? a : e.sort((c, v) => v - c)[t - 1];
          }
          function et(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = w.mean(e), v = w.mean(t), D = t.length;
            let F = 0, X = 0;
            for (let me = 0; me < D; me++) F += (t[me] - v) * (e[me] - c), X += Math.pow(t[me] - v, 2);
            const le = F / X;
            return [le, c - le * v];
          }
          Oe.DIST = (e, t, c, v, D) => {
            if (oe(e = U(e), t = U(t), c = U(c), v = U(v))) return a;
            function F(X, le, me, Le) {
              return ut(me, X) * ut(Le - me, le - X) / ut(Le, le);
            }
            return D ? function(X, le, me, Le) {
              let He = 0;
              for (let qe = 0; qe <= X; qe++) He += F(qe, le, me, Le);
              return He;
            }(e, t, c, v) : F(e, t, c, v);
          };
          const te = {};
          function ye() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            const c = Be(e);
            return c.length === 0 ? 0 : Math.max.apply(Math, c);
          }
          function _e() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            const c = O(e);
            let v = w.median(c);
            return isNaN(v) && (v = d), v;
          }
          function q() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            const c = Be(e);
            return c.length === 0 ? 0 : Math.min.apply(Math, c);
          }
          te.DIST = (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c)) ? a : v ? w.lognormal.cdf(e, t, c) : w.lognormal.pdf(e, t, c), te.INV = (e, t, c) => oe(e = U(e), t = U(t), c = U(c)) ? a : w.lognormal.inv(e, t, c);
          const ee = { MULT: function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = e.length, c = {};
            let v, D = [], F = 0;
            for (let X = 0; X < t; X++) v = e[X], c[v] = c[v] ? c[v] + 1 : 1, c[v] > F && (F = c[v], D = []), c[v] === F && (D[D.length] = v);
            return D;
          }, SNGL: function() {
            const e = Me(P(arguments));
            return e instanceof Error ? e : ee.MULT(e).sort((t, c) => t - c)[0];
          } }, j = { DIST: (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c)) ? a : v ? w.negbin.cdf(e, t, c) : w.negbin.pdf(e, t, c) }, R = {};
          function J(e, t) {
            if (oe(t = Me(P(t)), e = Me(P(e)))) return a;
            const c = w.mean(e), v = w.mean(t), D = e.length;
            let F = 0, X = 0, le = 0;
            for (let me = 0; me < D; me++) F += (e[me] - c) * (t[me] - v), X += Math.pow(e[me] - c, 2), le += Math.pow(t[me] - v, 2);
            return F / Math.sqrt(X * le);
          }
          R.DIST = (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c)) ? a : c <= 0 ? d : v ? w.normal.cdf(e, t, c) : w.normal.pdf(e, t, c), R.INV = (e, t, c) => oe(e = U(e), t = U(t), c = U(c)) ? a : w.normal.inv(e, t, c), R.S = {}, R.S.DIST = (e, t) => (e = U(e)) instanceof Error ? a : t ? w.normal.cdf(e, 0, 1) : w.normal.pdf(e, 0, 1), R.S.INV = (e) => (e = U(e)) instanceof Error ? a : w.normal.inv(e, 0, 1);
          const ue = { EXC: (e, t) => {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            const c = (e = e.sort((F, X) => F - X)).length;
            if (t < 1 / (c + 1) || t > 1 - 1 / (c + 1)) return d;
            const v = t * (c + 1) - 1, D = Math.floor(v);
            return ve(v === D ? e[v] : e[D] + (v - D) * (e[D + 1] - e[D]));
          }, INC: (e, t) => {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            const c = t * ((e = e.sort((D, F) => D - F)).length - 1), v = Math.floor(c);
            return ve(c === v ? e[c] : e[v] + (c - v) * (e[v + 1] - e[v]));
          } }, Q = { EXC: (e, t, c) => {
            if (c = c === void 0 ? 3 : c, oe(e = Me(P(e)), t = U(t), c = U(c))) return a;
            e = e.sort((He, qe) => He - qe);
            const v = E.apply(null, e), D = e.length, F = v.length, X = Math.pow(10, c);
            let le = 0, me = !1, Le = 0;
            for (; !me && Le < F; ) t === v[Le] ? (le = (e.indexOf(v[Le]) + 1) / (D + 1), me = !0) : t >= v[Le] && (t < v[Le + 1] || Le === F - 1) && (le = (e.indexOf(v[Le]) + 1 + (t - v[Le]) / (v[Le + 1] - v[Le])) / (D + 1), me = !0), Le++;
            return Math.floor(le * X) / X;
          }, INC: (e, t, c) => {
            if (c = c === void 0 ? 3 : c, oe(e = Me(P(e)), t = U(t), c = U(c))) return a;
            e = e.sort((He, qe) => He - qe);
            const v = E.apply(null, e), D = e.length, F = v.length, X = Math.pow(10, c);
            let le = 0, me = !1, Le = 0;
            for (; !me && Le < F; ) t === v[Le] ? (le = e.indexOf(v[Le]) / (D - 1), me = !0) : t >= v[Le] && (t < v[Le + 1] || Le === F - 1) && (le = (e.indexOf(v[Le]) + (t - v[Le]) / (v[Le + 1] - v[Le])) / (D - 1), me = !0), Le++;
            return Math.floor(le * X) / X;
          } }, pe = { DIST: (e, t, c) => oe(e = U(e), t = U(t)) ? a : c ? w.poisson.cdf(e, t) : w.poisson.pdf(e, t) }, je = { EXC: (e, t) => {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            switch (t) {
              case 1:
                return ue.EXC(e, 0.25);
              case 2:
                return ue.EXC(e, 0.5);
              case 3:
                return ue.EXC(e, 0.75);
              default:
                return d;
            }
          }, INC: (e, t) => {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            switch (t) {
              case 1:
                return ue.INC(e, 0.25);
              case 2:
                return ue.INC(e, 0.5);
              case 3:
                return ue.INC(e, 0.75);
              default:
                return d;
            }
          } }, Te = {};
          function ke() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = w.mean(e), c = e.length;
            let v = 0;
            for (let D = 0; D < c; D++) v += Math.pow(e[D] - t, 3);
            return c * v / ((c - 1) * (c - 2) * Math.pow(w.stdev(e, !0), 3));
          }
          function Re(e, t) {
            return oe(e = Me(P(e)), t = U(t)) ? e : e.sort((c, v) => c - v)[t - 1];
          }
          Te.AVG = (e, t, c) => {
            if (oe(e = U(e), t = Me(P(t)))) return a;
            const v = (c = c || !1) ? (X, le) => X - le : (X, le) => le - X, D = (t = (t = P(t)).sort(v)).length;
            let F = 0;
            for (let X = 0; X < D; X++) t[X] === e && F++;
            return F > 1 ? (2 * t.indexOf(e) + F + 1) / 2 : t.indexOf(e) + 1;
          }, Te.EQ = (e, t, c) => {
            if (oe(e = U(e), t = Me(P(t)))) return a;
            const v = (c = c || !1) ? (D, F) => D - F : (D, F) => F - D;
            return (t = t.sort(v)).indexOf(e) + 1;
          }, ke.P = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = w.mean(e), c = e.length;
            let v = 0, D = 0;
            for (let F = 0; F < c; F++) D += Math.pow(e[F] - t, 3), v += Math.pow(e[F] - t, 2);
            return D /= c, v /= c, D / Math.pow(v, 1.5);
          };
          const ze = { P: function() {
            const e = ie.P.apply(this, arguments);
            let t = Math.sqrt(e);
            return isNaN(t) && (t = d), t;
          }, S: function() {
            const e = ie.S.apply(this, arguments);
            return Math.sqrt(e);
          } }, Qe = { DIST: (e, t, c) => c !== 1 && c !== 2 ? d : c === 1 ? Qe.DIST.RT(e, t) : Qe.DIST["2T"](e, t) };
          Qe.DIST["2T"] = function(e, t) {
            return arguments.length !== 2 ? b : e < 0 || t < 1 ? d : typeof e != "number" || typeof t != "number" ? a : 2 * (1 - w.studentt.cdf(e, t));
          }, Qe.DIST.RT = function(e, t) {
            return arguments.length !== 2 ? b : e < 0 || t < 1 ? d : typeof e != "number" || typeof t != "number" ? a : 1 - w.studentt.cdf(e, t);
          }, Qe.INV = (e, t) => oe(e = U(e), t = U(t)) ? a : w.studentt.inv(e, t), Qe.INV["2T"] = (e, t) => (e = U(e), t = U(t), e <= 0 || e > 1 || t < 1 ? d : oe(e, t) ? a : Math.abs(w.studentt.inv(e / 2, t))), Qe.TEST = (e, t) => {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = w.mean(e), v = w.mean(t);
            let D, F = 0, X = 0;
            for (D = 0; D < e.length; D++) F += Math.pow(e[D] - c, 2);
            for (D = 0; D < t.length; D++) X += Math.pow(t[D] - v, 2);
            F /= e.length - 1, X /= t.length - 1;
            const le = Math.abs(c - v) / Math.sqrt(F / e.length + X / t.length);
            return Qe.DIST["2T"](le, e.length + t.length - 2);
          };
          const ie = {};
          function Ce() {
            const e = P(arguments), t = e.length;
            let c = 0, v = 0;
            const D = r(e);
            for (let F = 0; F < t; F++) {
              const X = e[F];
              c += Math.pow(typeof X == "number" ? X - D : X === !0 ? 1 - D : 0 - D, 2), X !== null && v++;
            }
            return c / (v - 1);
          }
          function Ee() {
            const e = P(arguments), t = e.length;
            let c = 0, v = 0;
            const D = r(e);
            let F;
            for (let X = 0; X < t; X++) {
              const le = e[X];
              c += Math.pow(typeof le == "number" ? le - D : le === !0 ? 1 - D : 0 - D, 2), le !== null && v++;
            }
            return F = c / v, isNaN(F) && (F = d), F;
          }
          ie.P = function() {
            const e = Be(P(arguments)), t = e.length;
            let c = 0;
            const v = u(e);
            let D;
            for (let F = 0; F < t; F++) c += Math.pow(e[F] - v, 2);
            return D = c / t, isNaN(D) && (D = d), D;
          }, ie.S = function() {
            const e = Be(P(arguments)), t = e.length;
            let c = 0;
            const v = u(e);
            for (let D = 0; D < t; D++) c += Math.pow(e[D] - v, 2);
            return c / (t - 1);
          };
          const Ve = { DIST: (e, t, c, v) => oe(e = U(e), t = U(t), c = U(c)) ? a : v ? 1 - Math.exp(-Math.pow(e / c, t)) : Math.pow(e, t - 1) * Math.exp(-Math.pow(e / c, t)) * t / Math.pow(c, t) }, tt = {};
          function Xe(e, t, c) {
            const v = de(e = U(e), t = U(t), c = U(c));
            if (v) return v;
            if (t === 0) return 0;
            t = Math.abs(t);
            const D = -Math.floor(Math.log(t) / Math.log(10));
            return e >= 0 ? jt(Math.ceil(e / t) * t, D) : c === 0 ? -jt(Math.floor(Math.abs(e) / t) * t, D) : -jt(Math.ceil(Math.abs(e) / t) * t, D);
          }
          function ut(e, t) {
            return de(e = U(e), t = U(t)) || (e < t ? d : nt(e) / (nt(t) * nt(e - t)));
          }
          tt.TEST = (e, t, c) => {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            c = c || ze.S(e);
            const v = e.length;
            return 1 - R.S.DIST((u(e) - t) / (c / Math.sqrt(v)), !0);
          }, Xe.MATH = Xe, Xe.PRECISE = Xe;
          const mt = [];
          function nt(e) {
            if ((e = U(e)) instanceof Error) return e;
            const t = Math.floor(e);
            return t === 0 || t === 1 ? 1 : (mt[t] > 0 || (mt[t] = nt(t - 1) * t), mt[t]);
          }
          function st(e, t) {
            const c = de(e = U(e), t = U(t));
            if (c) return c;
            if (t === 0) return 0;
            if (!(e >= 0 && t > 0 || e <= 0 && t < 0)) return d;
            t = Math.abs(t);
            const v = -Math.floor(Math.log(t) / Math.log(10));
            return e >= 0 ? jt(Math.floor(e / t) * t, v) : -jt(Math.ceil(Math.abs(e) / t), v);
          }
          st.MATH = (e, t, c) => {
            if (t instanceof Error) return t;
            t = t === void 0 ? 0 : t;
            const v = de(e = U(e), t = U(t), c = U(c));
            if (v) return v;
            if (t === 0) return 0;
            t = t ? Math.abs(t) : 1;
            const D = -Math.floor(Math.log(t) / Math.log(10));
            return e >= 0 ? jt(Math.floor(e / t) * t, D) : c === 0 || c === void 0 ? -jt(Math.ceil(Math.abs(e) / t) * t, D) : -jt(Math.floor(Math.abs(e) / t) * t, D);
          }, st.PRECISE = st.MATH;
          const $e = { CEILING: Xe };
          function tn(e, t) {
            const c = de(e = U(e), t = U(t));
            if (c) return c;
            if (e === 0 && t === 0) return d;
            const v = Math.pow(e, t);
            return isNaN(v) ? d : v;
          }
          function Yt() {
            const e = P(arguments).filter((v) => v != null);
            if (e.length === 0) return 0;
            const t = Me(e);
            if (t instanceof Error) return t;
            let c = 1;
            for (let v = 0; v < t.length; v++) c *= t[v];
            return c;
          }
          function jt(e, t) {
            return de(e = U(e), t = U(t)) || +(Math.round(+(e + "e" + t)) + "e" + -1 * t);
          }
          function kt() {
            let e = 0;
            return L(T(arguments), (t) => {
              if (e instanceof Error) return !1;
              if (t instanceof Error) e = t;
              else if (typeof t == "number") e += t;
              else if (typeof t == "string") {
                const c = parseFloat(t);
                !isNaN(c) && (e += c);
              } else if (Array.isArray(t)) {
                const c = kt.apply(null, t);
                c instanceof Error ? e = c : e += c;
              }
            }), e;
          }
          var fn = Object.freeze({ __proto__: null, ADD: function(e, t) {
            return arguments.length !== 2 ? b : de(e = U(e), t = U(t)) || e + t;
          }, DIVIDE: function(e, t) {
            return arguments.length !== 2 ? b : de(e = U(e), t = U(t)) || (t === 0 ? l : e / t);
          }, EQ: function(e, t) {
            return arguments.length !== 2 ? b : e instanceof Error ? e : t instanceof Error ? t : (e === null && (e = void 0), t === null && (t = void 0), e === t);
          }, GT: function(e, t) {
            return arguments.length !== 2 ? b : e instanceof Error ? e : t instanceof Error ? t : (ot(e, t) ? (e = We(e), t = We(t)) : (e = U(e), t = U(t)), de(e, t) || e > t);
          }, GTE: function(e, t) {
            return arguments.length !== 2 ? b : (ot(e, t) ? (e = We(e), t = We(t)) : (e = U(e), t = U(t)), de(e, t) || e >= t);
          }, LT: function(e, t) {
            return arguments.length !== 2 ? b : (ot(e, t) ? (e = We(e), t = We(t)) : (e = U(e), t = U(t)), de(e, t) || e < t);
          }, LTE: function(e, t) {
            return arguments.length !== 2 ? b : (ot(e, t) ? (e = We(e), t = We(t)) : (e = U(e), t = U(t)), de(e, t) || e <= t);
          }, MINUS: function(e, t) {
            return arguments.length !== 2 ? b : de(e = U(e), t = U(t)) || e - t;
          }, MULTIPLY: function(e, t) {
            return arguments.length !== 2 ? b : de(e = U(e), t = U(t)) || e * t;
          }, NE: function(e, t) {
            return arguments.length !== 2 ? b : e instanceof Error ? e : t instanceof Error ? t : (e === null && (e = void 0), t === null && (t = void 0), e !== t);
          }, POW: function(e, t) {
            return arguments.length !== 2 ? b : tn(e, t);
          } });
          const pn = new Date(Date.UTC(1900, 0, 1)), hn = [void 0, 0, 1, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 1, 2, 3, 4, 5, 6, 0], gn = [[], [1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3, 4, 5, 6], [6, 0, 1, 2, 3, 4, 5], [], [], [], [], [], [], [], [7, 1, 2, 3, 4, 5, 6], [6, 7, 1, 2, 3, 4, 5], [5, 6, 7, 1, 2, 3, 4], [4, 5, 6, 7, 1, 2, 3], [3, 4, 5, 6, 7, 1, 2], [2, 3, 4, 5, 6, 7, 1], [1, 2, 3, 4, 5, 6, 7]], Bt = [[], [6, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], void 0, void 0, void 0, [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
          function Tt(e, t, c) {
            c = c.toUpperCase(), e = De(e), t = De(t);
            const v = e.getFullYear(), D = e.getMonth(), F = e.getDate(), X = t.getFullYear(), le = t.getMonth(), me = t.getDate();
            let Le;
            switch (c) {
              case "Y":
                Le = Math.floor(Wt(e, t));
                break;
              case "D":
                Le = Mt(t, e);
                break;
              case "M":
                Le = le - D + 12 * (X - v), me < F && Le--;
                break;
              case "MD":
                F <= me ? Le = me - F : (le === 0 ? (e.setFullYear(X - 1), e.setMonth(12)) : (e.setFullYear(X), e.setMonth(le - 1)), Le = Mt(t, e));
                break;
              case "YM":
                Le = le - D + 12 * (X - v), me < F && Le--, Le %= 12;
                break;
              case "YD":
                le > D || le === D && me < F ? e.setFullYear(X) : e.setFullYear(X - 1), Le = Mt(t, e);
            }
            return Le;
          }
          function Rt(e) {
            const t = new Date(e);
            return t.setHours(0, 0, 0, 0), t;
          }
          function Mt(e, t) {
            return e = De(e), t = De(t), e instanceof Error ? e : t instanceof Error ? t : rn(Rt(e)) - rn(Rt(t));
          }
          function Ct(e, t, c) {
            if (c = Fe(c || "false"), e = De(e), t = De(t), e instanceof Error) return e;
            if (t instanceof Error) return t;
            if (c instanceof Error) return c;
            const v = e.getMonth();
            let D, F, X = t.getMonth();
            if (c) D = e.getDate() === 31 ? 30 : e.getDate(), F = t.getDate() === 31 ? 30 : t.getDate();
            else {
              const le = new Date(e.getFullYear(), v + 1, 0).getDate(), me = new Date(t.getFullYear(), X + 1, 0).getDate();
              D = e.getDate() === le ? 30 : e.getDate(), t.getDate() === me ? D < 30 ? (X++, F = 1) : F = 30 : F = t.getDate();
            }
            return 360 * (t.getFullYear() - e.getFullYear()) + 30 * (X - v) + (F - D);
          }
          function nn(e) {
            if ((e = De(e)) instanceof Error) return e;
            (e = Rt(e)).setDate(e.getDate() + 4 - (e.getDay() || 7));
            const t = new Date(e.getFullYear(), 0, 1);
            return Math.ceil(((e - t) / 864e5 + 1) / 7);
          }
          function Ht(e, t, c) {
            return Ht.INTL(e, t, 1, c);
          }
          function zt(e, t, c) {
            return zt.INTL(e, t, 1, c);
          }
          function Ut(e) {
            return new Date(e, 1, 29).getMonth() === 1;
          }
          function Ft(e, t) {
            return Math.ceil((t - e) / 1e3 / 60 / 60 / 24);
          }
          function Wt(e, t, c) {
            if ((e = De(e)) instanceof Error) return e;
            if ((t = De(t)) instanceof Error) return t;
            c = c || 0;
            let v = e.getDate();
            const D = e.getMonth() + 1, F = e.getFullYear();
            let X = t.getDate();
            const le = t.getMonth() + 1, me = t.getFullYear();
            switch (c) {
              case 0:
                return v === 31 && X === 31 ? (v = 30, X = 30) : v === 31 ? v = 30 : v === 30 && X === 31 && (X = 30), (X + 30 * le + 360 * me - (v + 30 * D + 360 * F)) / 360;
              case 1: {
                const Le = (Je, rt) => {
                  const at = Je.getFullYear(), yt = new Date(at, 2, 1);
                  if (Ut(at) && Je < yt && rt >= yt) return !0;
                  const pt = rt.getFullYear(), Et = new Date(pt, 2, 1);
                  return Ut(pt) && rt >= Et && Je < Et;
                };
                let He = 365;
                if (F === me || F + 1 === me && (D > le || D === le && v >= X)) return (F === me && Ut(F) || Le(e, t) || le === 1 && X === 29) && (He = 366), Ft(e, t) / He;
                const qe = me - F + 1, Ye = (new Date(me + 1, 0, 1) - new Date(F, 0, 1)) / 1e3 / 60 / 60 / 24 / qe;
                return Ft(e, t) / Ye;
              }
              case 2:
                return Ft(e, t) / 360;
              case 3:
                return Ft(e, t) / 365;
              case 4:
                return (X + 30 * le + 360 * me - (v + 30 * D + 360 * F)) / 360;
            }
          }
          function rn(e) {
            const t = e > -22038912e5 ? 2 : 1;
            return Math.ceil((e - pn) / 864e5) + t;
          }
          function on(e) {
            return (e = U(e)) === 0 ? a : e instanceof Error ? e : String.fromCharCode(e);
          }
          function sn(e) {
            if (oe(e)) return e;
            let t = (e = e || "").charCodeAt(0);
            return isNaN(t) && (t = a), t;
          }
          function an() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            let c = 0;
            for (; (c = e.indexOf(!0)) > -1; ) e[c] = "TRUE";
            let v = 0;
            for (; (v = e.indexOf(!1)) > -1; ) e[v] = "FALSE";
            return e.join("");
          }
          Ht.INTL = (e, t, c, v) => {
            if ((e = De(e)) instanceof Error) return e;
            if ((t = De(t)) instanceof Error) return t;
            let D = !1;
            const F = [], X = [1, 2, 3, 4, 5, 6, 0], le = new RegExp("^[0|1]{7}$");
            if (c === void 0) c = Bt[1];
            else if (typeof c == "string" && le.test(c)) {
              D = !0, c = c.split("");
              for (let qe = 0; qe < c.length; qe++) c[qe] === "1" && F.push(X[qe]);
            } else c = Bt[c];
            if (!(c instanceof Array)) return a;
            v === void 0 ? v = [] : v instanceof Array || (v = [v]);
            for (let qe = 0; qe < v.length; qe++) {
              const Ye = De(v[qe]);
              if (Ye instanceof Error) return Ye;
              v[qe] = Ye;
            }
            const me = Math.round((t - e) / 864e5) + 1;
            let Le = me;
            const He = e;
            for (let qe = 0; qe < me; qe++) {
              const Ye = (/* @__PURE__ */ new Date()).getTimezoneOffset() > 0 ? He.getUTCDay() : He.getDay();
              let Je = D ? F.includes(Ye) : Ye === c[0] || Ye === c[1];
              for (let rt = 0; rt < v.length; rt++) {
                const at = v[rt];
                if (at.getDate() === He.getDate() && at.getMonth() === He.getMonth() && at.getFullYear() === He.getFullYear()) {
                  Je = !0;
                  break;
                }
              }
              Je && Le--, He.setDate(He.getDate() + 1);
            }
            return Le;
          }, zt.INTL = (e, t, c, v) => {
            if ((e = De(e)) instanceof Error) return e;
            if ((t = U(t)) instanceof Error) return t;
            if (t < 0) return d;
            if (!((c = c === void 0 ? Bt[1] : Bt[c]) instanceof Array)) return a;
            v === void 0 ? v = [] : v instanceof Array || (v = [v]);
            for (let F = 0; F < v.length; F++) {
              const X = De(v[F]);
              if (X instanceof Error) return X;
              v[F] = X;
            }
            let D = 0;
            for (; D < t; ) {
              e.setDate(e.getDate() + 1);
              const F = e.getDay();
              if (F !== c[0] && F !== c[1]) {
                for (let X = 0; X < v.length; X++) {
                  const le = v[X];
                  if (le.getDate() === e.getDate() && le.getMonth() === e.getMonth() && le.getFullYear() === e.getFullYear()) {
                    D--;
                    break;
                  }
                }
                D++;
              }
            }
            return e;
          };
          const mn = an;
          function ln(e, t = 2, c = !1) {
            if (e = U(e), isNaN(e) || (t = U(t), isNaN(t))) return a;
            if (t < 0) {
              const v = Math.pow(10, -t);
              e = Math.round(e / v) * v;
            } else e = e.toFixed(t);
            if (c) e = e.toString().replace(/,/g, "");
            else {
              const v = e.toString().split(".");
              v[0] = v[0].replace(/\B(?=(\d{3})+$)/g, ","), e = v.join(".");
            }
            return e;
          }
          function xt(e, t) {
            return de(e, t) || (e = We(e), (t = U(t)) instanceof Error ? t : new Array(t + 1).join(e));
          }
          const bn = on, vn = sn;
          function qt(e) {
            return /^[01]{1,10}$/.test(e);
          }
          function ht(e, t, c) {
            if (oe(e = U(e), t = U(t))) return e;
            if ((c = c === void 0 ? "i" : c) !== "i" && c !== "j") return a;
            if (e === 0 && t === 0) return 0;
            if (e === 0) return t === 1 ? c : t.toString() + c;
            if (t === 0) return e.toString();
            {
              const v = t > 0 ? "+" : "";
              return e.toString() + v + (t === 1 ? c : t.toString() + c);
            }
          }
          function Gt(e, t) {
            return t = t === void 0 ? 0 : t, oe(e = U(e), t = U(t)) ? a : w.erf(e);
          }
          function Zt(e) {
            return isNaN(e) ? a : w.erfc(e);
          }
          function Xt(e) {
            const t = dt(e), c = ct(e);
            return oe(t, c) ? a : Math.sqrt(Math.pow(t, 2) + Math.pow(c, 2));
          }
          function ct(e) {
            if (e === void 0 || e === !0 || e === !1) return a;
            if (e === 0 || e === "0") return 0;
            if (["i", "j"].indexOf(e) >= 0) return 1;
            let t = (e = (e += "").replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j")).indexOf("+"), c = e.indexOf("-");
            t === 0 && (t = e.indexOf("+", 1)), c === 0 && (c = e.indexOf("-", 1));
            const v = e.substring(e.length - 1, e.length), D = v === "i" || v === "j";
            return t >= 0 || c >= 0 ? D ? t >= 0 ? isNaN(e.substring(0, t)) || isNaN(e.substring(t + 1, e.length - 1)) ? d : Number(e.substring(t + 1, e.length - 1)) : isNaN(e.substring(0, c)) || isNaN(e.substring(c + 1, e.length - 1)) ? d : -Number(e.substring(c + 1, e.length - 1)) : d : D ? isNaN(e.substring(0, e.length - 1)) ? d : e.substring(0, e.length - 1) : isNaN(e) ? d : 0;
          }
          function Jt(e) {
            const t = dt(e), c = ct(e);
            return oe(t, c) ? a : t === 0 && c === 0 ? l : t === 0 && c > 0 ? Math.PI / 2 : t === 0 && c < 0 ? -Math.PI / 2 : c === 0 && t > 0 ? 0 : c === 0 && t < 0 ? -Math.PI : t > 0 ? Math.atan(c / t) : t < 0 && c >= 0 ? Math.atan(c / t) + Math.PI : Math.atan(c / t) - Math.PI;
          }
          function Pt(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.cos(t) * (Math.exp(c) + Math.exp(-c)) / 2, -Math.sin(t) * (Math.exp(c) - Math.exp(-c)) / 2, v);
          }
          function cn(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.cos(c) * (Math.exp(t) + Math.exp(-t)) / 2, Math.sin(c) * (Math.exp(t) - Math.exp(-t)) / 2, v);
          }
          function At(e, t) {
            const c = dt(e), v = ct(e), D = dt(t), F = ct(t);
            if (oe(c, v, D, F)) return a;
            const X = e.substring(e.length - 1), le = t.substring(t.length - 1);
            let me = "i";
            if ((X === "j" || le === "j") && (me = "j"), D === 0 && F === 0) return d;
            const Le = D * D + F * F;
            return ht((c * D + v * F) / Le, (v * D - c * F) / Le, me);
          }
          function dt(e) {
            if (e === void 0 || e === !0 || e === !1) return a;
            if (e === 0 || e === "0" || ["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(e) >= 0) return 0;
            let t = (e += "").indexOf("+"), c = e.indexOf("-");
            t === 0 && (t = e.indexOf("+", 1)), c === 0 && (c = e.indexOf("-", 1));
            const v = e.substring(e.length - 1, e.length), D = v === "i" || v === "j";
            return t >= 0 || c >= 0 ? D ? t >= 0 ? isNaN(e.substring(0, t)) || isNaN(e.substring(t + 1, e.length - 1)) ? d : Number(e.substring(0, t)) : isNaN(e.substring(0, c)) || isNaN(e.substring(c + 1, e.length - 1)) ? d : Number(e.substring(0, c)) : d : D ? isNaN(e.substring(0, e.length - 1)) ? d : 0 : isNaN(e) ? d : e;
          }
          function Vt(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.sin(t) * (Math.exp(c) + Math.exp(-c)) / 2, Math.cos(t) * (Math.exp(c) - Math.exp(-c)) / 2, v);
          }
          function dn(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.cos(c) * (Math.exp(t) - Math.exp(-t)) / 2, Math.sin(c) * (Math.exp(t) + Math.exp(-t)) / 2, v);
          }
          Gt.PRECISE = () => {
            throw new Error("ERF.PRECISE is not implemented");
          }, Zt.PRECISE = () => {
            throw new Error("ERFC.PRECISE is not implemented");
          };
          const yn = Y.DIST, xn = Y.INV, wn = re.DIST, jn = Xe.MATH, Cn = Xe.PRECISE, En = ne.DIST, kn = ne.DIST.RT, Mn = ne.INV, An = ne.INV.RT, Ln = ne.TEST, In = ae.P, _n = ae.P, Nn = ae.S, Tn = re.INV, Dn = Zt.PRECISE, Sn = Gt.PRECISE, On = xe.DIST, Bn = fe.DIST, Rn = fe.DIST.RT, Hn = fe.INV, zn = fe.INV.RT, Fn = st.MATH, Pn = st.PRECISE, Vn = fe.TEST, Yn = Ae.DIST, Un = Ae.INV, Wn = Se.PRECISE, qn = Oe.DIST, Gn = te.INV, Zn = te.DIST, Xn = te.INV, Jn = ee.MULT, Kn = ee.SNGL, Qn = j.DIST, $n = Ht.INTL, er = R.DIST, tr = R.INV, nr = R.S.DIST, rr = R.S.INV, or = ue.EXC, ir = ue.INC, sr = Q.EXC, ar = Q.INC, lr = pe.DIST, cr = je.EXC, dr = je.INC, ur = Te.AVG, fr = Te.EQ, pr = ke.P, hr = ze.P, gr = ze.S, mr = Qe.DIST, br = Qe.DIST.RT, vr = Qe.INV, yr = Qe.TEST, xr = ie.P, wr = ie.S, jr = Ve.DIST, Cr = zt.INTL, Er = tt.TEST;
          function Kt(e) {
            const t = [];
            return L(e, (c) => {
              c && t.push(c);
            }), t;
          }
          function wt(e, t) {
            const c = {};
            for (let F = 1; F < e[0].length; ++F) c[F] = !0;
            let v = t[0].length;
            for (let F = 1; F < t.length; ++F) t[F].length > v && (v = t[F].length);
            for (let F = 1; F < e.length; ++F) for (let X = 1; X < e[F].length; ++X) {
              let le = !1, me = !1;
              for (let Le = 0; Le < t.length; ++Le) {
                const He = t[Le];
                if (He.length < v) continue;
                const qe = He[0];
                if (e[F][0] === qe) {
                  me = !0;
                  for (let Ye = 1; Ye < He.length; ++Ye) if (!le) if (He[Ye] === void 0 || He[Ye] === "*") le = !0;
                  else {
                    const Je = bt(He[Ye] + ""), rt = [ft(e[F][X], it)].concat(Je);
                    le = vt(rt);
                  }
                }
              }
              me && (c[X] = c[X] && le);
            }
            const D = [];
            for (let F = 0; F < e[0].length; ++F) c[F] && D.push(F - 1);
            return D;
          }
          function Qt(e) {
            return e && e.getTime && !isNaN(e.getTime());
          }
          function $t(e) {
            return e instanceof Date ? e : new Date(e);
          }
          function Lt(e, t, c, v, D) {
            if (v = v || 0, D = D || 0, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D))) return a;
            let F;
            if (e === 0) F = v + c * t;
            else {
              const X = Math.pow(1 + e, t);
              F = D === 1 ? v * X + c * (1 + e) * (X - 1) / e : v * X + c * (X - 1) / e;
            }
            return -F;
          }
          function un(e, t, c, v, D, F) {
            if (D = D || 0, F = F || 0, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D), F = U(F))) return a;
            const X = Dt(e, c, v, D, F);
            return (t === 1 ? F === 1 ? 0 : -v : F === 1 ? Lt(e, t - 2, X, v, 1) - X : Lt(e, t - 1, X, v, 0)) * e;
          }
          function en() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = e[0];
            let c = 0;
            for (let v = 1; v < e.length; v++) c += e[v] / Math.pow(1 + t, v);
            return c;
          }
          function Dt(e, t, c, v, D) {
            if (v = v || 0, D = D || 0, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D))) return a;
            let F;
            if (e === 0) F = (c + v) / t;
            else {
              const X = Math.pow(1 + e, t);
              F = D === 1 ? (v * e / (X - 1) + c * e / (1 - 1 / X)) / (1 + e) : v * e / (X - 1) + c * e / (1 - 1 / X);
            }
            return -F;
          }
          const kr = { errors: B, symbols: fn };
          m.ABS = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.abs(e);
          }, m.ACCRINT = function(e, t, c, v, D, F, X) {
            return e = $t(e), t = $t(t), c = $t(c), Qt(e) && Qt(t) && Qt(c) ? v <= 0 || D <= 0 || [1, 2, 4].indexOf(F) === -1 || [0, 1, 2, 3, 4].indexOf(X) === -1 || c <= e ? d : (D = D || 0) * v * Wt(e, c, X = X || 0) : a;
          }, m.ACCRINTM = function() {
            throw new Error("ACCRINTM is not implemented");
          }, m.ACOS = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = Math.acos(e);
            return isNaN(t) && (t = d), t;
          }, m.ACOSH = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = Math.log(e + Math.sqrt(e * e - 1));
            return isNaN(t) && (t = d), t;
          }, m.ACOT = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.atan(1 / e);
          }, m.ACOTH = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = 0.5 * Math.log((e + 1) / (e - 1));
            return isNaN(t) && (t = d), t;
          }, m.AGGREGATE = function(e, t, c, v) {
            if (oe(e = U(e), U(e))) return a;
            switch (e) {
              case 1:
                return u(c);
              case 2:
                return N(c);
              case 3:
                return V(c);
              case 4:
                return ye(c);
              case 5:
                return q(c);
              case 6:
                return Yt(c);
              case 7:
                return ze.S(c);
              case 8:
                return ze.P(c);
              case 9:
                return kt(c);
              case 10:
                return ie.S(c);
              case 11:
                return ie.P(c);
              case 12:
                return _e(c);
              case 13:
                return ee.SNGL(c);
              case 14:
                return Ze(c, v);
              case 15:
                return Re(c, v);
              case 16:
                return ue.INC(c, v);
              case 17:
                return je.INC(c, v);
              case 18:
                return ue.EXC(c, v);
              case 19:
                return je.EXC(c, v);
            }
          }, m.AMORDEGRC = function() {
            throw new Error("AMORDEGRC is not implemented");
          }, m.AMORLINC = function() {
            throw new Error("AMORLINC is not implemented");
          }, m.AND = function() {
            const e = P(arguments);
            let t = a;
            for (let c = 0; c < e.length; c++) {
              if (e[c] instanceof Error) return e[c];
              e[c] !== void 0 && e[c] !== null && typeof e[c] != "string" && (t === a && (t = !0), e[c] || (t = !1));
            }
            return t;
          }, m.ARABIC = function(e) {
            if (e == null) return 0;
            if (e instanceof Error) return e;
            if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(e)) return a;
            let t = 0;
            return e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (c) => {
              t += { M: 1e3, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }[c];
            }), t;
          }, m.ASC = function() {
            throw new Error("ASC is not implemented");
          }, m.ASIN = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = Math.asin(e);
            return isNaN(t) && (t = d), t;
          }, m.ASINH = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.log(e + Math.sqrt(e * e + 1));
          }, m.ATAN = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.atan(e);
          }, m.ATAN2 = function(e, t) {
            return de(e = U(e), t = U(t)) || Math.atan2(e, t);
          }, m.ATANH = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = Math.log((1 + e) / (1 - e)) / 2;
            return isNaN(t) && (t = d), t;
          }, m.AVEDEV = function() {
            const e = P(arguments).filter(Ne);
            if (e.length === 0) return d;
            const t = Me(e);
            return t instanceof Error ? t : w.sum(w(t).subtract(w.mean(t)).abs()[0]) / t.length;
          }, m.AVERAGE = u, m.AVERAGEA = r, m.AVERAGEIF = function(e, t, c) {
            if (arguments.length <= 1) return b;
            if (c = Me(P(c = c || e).filter(Ne)), e = P(e), c instanceof Error) return c;
            let v = 0, D = 0;
            const F = t === void 0 || t === "*", X = F ? null : bt(t + "");
            for (let le = 0; le < e.length; le++) {
              const me = e[le];
              if (F) D += c[le], v++;
              else {
                const Le = [ft(me, it)].concat(X);
                vt(Le) && (D += c[le], v++);
              }
            }
            return D / v;
          }, m.AVERAGEIFS = function() {
            const e = T(arguments), t = (e.length - 1) / 2, c = P(e[0]);
            let v = 0, D = 0;
            for (let X = 0; X < c.length; X++) {
              let le = !1;
              for (let me = 0; me < t; me++) {
                const Le = e[2 * me + 1][X], He = e[2 * me + 2];
                let qe = !1;
                if (He === void 0 || He === "*") qe = !0;
                else {
                  const Ye = bt(He + ""), Je = [ft(Le, it)].concat(Ye);
                  qe = vt(Je);
                }
                if (!qe) {
                  le = !1;
                  break;
                }
                le = !0;
              }
              le && (D += c[X], v++);
            }
            const F = D / v;
            return isNaN(F) ? 0 : F;
          }, m.BAHTTEXT = function() {
            throw new Error("BAHTTEXT is not implemented");
          }, m.BASE = function(e, t, c) {
            const v = de(e = U(e), t = U(t), c = U(c));
            if (v) return v;
            if (t === 0) return d;
            const D = e.toString(t);
            return new Array(Math.max(c + 1 - D.length, 0)).join("0") + D;
          }, m.BESSELI = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : S.besseli(e, t);
          }, m.BESSELJ = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : S.besselj(e, t);
          }, m.BESSELK = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : S.besselk(e, t);
          }, m.BESSELY = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : S.bessely(e, t);
          }, m.BETA = Y, m.BETADIST = yn, m.BETAINV = xn, m.BIN2DEC = function(e) {
            if (!qt(e)) return d;
            const t = parseInt(e, 2), c = e.toString();
            return c.length === 10 && c.substring(0, 1) === "1" ? parseInt(c.substring(1), 2) - 512 : t;
          }, m.BIN2HEX = function(e, t) {
            if (!qt(e)) return d;
            const c = e.toString();
            if (c.length === 10 && c.substring(0, 1) === "1") return (1099511627264 + parseInt(c.substring(1), 2)).toString(16);
            const v = parseInt(e, 2).toString(16);
            return t === void 0 ? v : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= v.length ? xt("0", t - v.length) + v : d;
          }, m.BIN2OCT = function(e, t) {
            if (!qt(e)) return d;
            const c = e.toString();
            if (c.length === 10 && c.substring(0, 1) === "1") return (1073741312 + parseInt(c.substring(1), 2)).toString(8);
            const v = parseInt(e, 2).toString(8);
            return t === void 0 ? v : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= v.length ? xt("0", t - v.length) + v : d;
          }, m.BINOM = re, m.BINOMDIST = wn, m.BITAND = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e < 0 || t < 0 || Math.floor(e) !== e || Math.floor(t) !== t || e > 281474976710655 || t > 281474976710655 ? d : e & t;
          }, m.BITLSHIFT = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e < 0 || Math.floor(e) !== e || e > 281474976710655 || Math.abs(t) > 53 ? d : t >= 0 ? e << t : e >> -t;
          }, m.BITOR = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e < 0 || t < 0 || Math.floor(e) !== e || Math.floor(t) !== t || e > 281474976710655 || t > 281474976710655 ? d : e | t;
          }, m.BITRSHIFT = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e < 0 || Math.floor(e) !== e || e > 281474976710655 || Math.abs(t) > 53 ? d : t >= 0 ? e >> t : e << -t;
          }, m.BITXOR = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e < 0 || t < 0 || Math.floor(e) !== e || Math.floor(t) !== t || e > 281474976710655 || t > 281474976710655 ? d : e ^ t;
          }, m.CEILING = Xe, m.CEILINGMATH = jn, m.CEILINGPRECISE = Cn, m.CELL = function() {
            throw new Error("CELL is not implemented");
          }, m.CHAR = on, m.CHIDIST = En, m.CHIDISTRT = kn, m.CHIINV = Mn, m.CHIINVRT = An, m.CHISQ = ne, m.CHITEST = Ln, m.CHOOSE = function() {
            if (arguments.length < 2) return b;
            const e = arguments[0];
            return e < 1 || e > 254 || arguments.length < e + 1 ? a : arguments[e];
          }, m.CLEAN = function(e) {
            return oe(e) ? e : (e = e || "").replace(/[\0-\x1F]/g, "");
          }, m.CODE = sn, m.COLUMN = function(e, t) {
            return arguments.length !== 2 ? b : t < 0 ? d : e instanceof Array && typeof t == "number" ? e.length !== 0 ? w.col(e, t) : void 0 : a;
          }, m.COLUMNS = function(e) {
            return arguments.length !== 1 ? b : e instanceof Array ? e.length === 0 ? 0 : w.cols(e) : a;
          }, m.COMBIN = ut, m.COMBINA = function(e, t) {
            return de(e = U(e), t = U(t)) || (e < t ? d : e === 0 && t === 0 ? 1 : ut(e + t - 1, e - 1));
          }, m.COMPLEX = ht, m.CONCAT = mn, m.CONCATENATE = an, m.CONFIDENCE = H, m.CONVERT = function(e, t, c) {
            if ((e = U(e)) instanceof Error) return e;
            const v = [["a.u. of action", "?", null, "action", !1, !1, 105457168181818e-48], ["a.u. of charge", "e", null, "electric_charge", !1, !1, 160217653141414e-33], ["a.u. of energy", "Eh", null, "energy", !1, !1, 435974417757576e-32], ["a.u. of length", "a?", null, "length", !1, !1, 529177210818182e-25], ["a.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45], ["a.u. of time", "?/Eh", null, "time", !1, !1, 241888432650516e-31], ["admiralty knot", "admkn", null, "speed", !1, !0, 0.514773333], ["ampere", "A", null, "electric_current", !0, !1, 1], ["ampere per meter", "A/m", null, "magnetic_field_intensity", !0, !1, 1], ["ångström", "Å", ["ang"], "length", !1, !0, 1e-10], ["are", "ar", null, "area", !1, !0, 100], ["astronomical unit", "ua", null, "length", !1, !1, 149597870691667e-25], ["bar", "bar", null, "pressure", !1, !1, 1e5], ["barn", "b", null, "area", !1, !1, 1e-28], ["becquerel", "Bq", null, "radioactivity", !0, !1, 1], ["bit", "bit", ["b"], "information", !1, !0, 1], ["btu", "BTU", ["btu"], "energy", !1, !0, 1055.05585262], ["byte", "byte", null, "information", !1, !0, 8], ["candela", "cd", null, "luminous_intensity", !0, !1, 1], ["candela per square metre", "cd/m?", null, "luminance", !0, !1, 1], ["coulomb", "C", null, "electric_charge", !0, !1, 1], ["cubic ångström", "ang3", ["ang^3"], "volume", !1, !0, 1e-30], ["cubic foot", "ft3", ["ft^3"], "volume", !1, !0, 0.028316846592], ["cubic inch", "in3", ["in^3"], "volume", !1, !0, 16387064e-12], ["cubic light-year", "ly3", ["ly^3"], "volume", !1, !0, 846786664623715e-61], ["cubic metre", "m?", null, "volume", !0, !0, 1], ["cubic mile", "mi3", ["mi^3"], "volume", !1, !0, 416818182544058e-5], ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", !1, !0, 6352182208], ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", !1, !0, 758660370370369e-22], ["cubic yard", "yd3", ["yd^3"], "volume", !1, !0, 0.764554857984], ["cup", "cup", null, "volume", !1, !0, 2365882365e-13], ["dalton", "Da", ["u"], "mass", !1, !1, 166053886282828e-41], ["day", "d", ["day"], "time", !1, !0, 86400], ["degree", "°", null, "angle", !1, !1, 0.0174532925199433], ["degrees Rankine", "Rank", null, "temperature", !1, !0, 0.555555555555556], ["dyne", "dyn", ["dy"], "force", !1, !0, 1e-5], ["electronvolt", "eV", ["ev"], "energy", !1, !0, 1.60217656514141], ["ell", "ell", null, "length", !1, !0, 1.143], ["erg", "erg", ["e"], "energy", !1, !0, 1e-7], ["farad", "F", null, "electric_capacitance", !0, !1, 1], ["fluid ounce", "oz", null, "volume", !1, !0, 295735295625e-16], ["foot", "ft", null, "length", !1, !0, 0.3048], ["foot-pound", "flb", null, "energy", !1, !0, 1.3558179483314], ["gal", "Gal", null, "acceleration", !1, !1, 0.01], ["gallon", "gal", null, "volume", !1, !0, 0.003785411784], ["gauss", "G", ["ga"], "magnetic_flux_density", !1, !0, 1], ["grain", "grain", null, "mass", !1, !0, 647989e-10], ["gram", "g", null, "mass", !1, !0, 1e-3], ["gray", "Gy", null, "absorbed_dose", !0, !1, 1], ["gross registered ton", "GRT", ["regton"], "volume", !1, !0, 2.8316846592], ["hectare", "ha", null, "area", !1, !0, 1e4], ["henry", "H", null, "inductance", !0, !1, 1], ["hertz", "Hz", null, "frequency", !0, !1, 1], ["horsepower", "HP", ["h"], "power", !1, !0, 745.69987158227], ["horsepower-hour", "HPh", ["hh", "hph"], "energy", !1, !0, 2684519538e-3], ["hour", "h", ["hr"], "time", !1, !0, 3600], ["imperial gallon (U.K.)", "uk_gal", null, "volume", !1, !0, 454609e-8], ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", !1, !0, 50.802345], ["imperial quart (U.K)", "uk_qt", null, "volume", !1, !0, 0.0011365225], ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", !1, !0, 1016.046909], ["inch", "in", null, "length", !1, !0, 0.0254], ["international acre", "uk_acre", null, "area", !1, !0, 4046.8564224], ["IT calorie", "cal", null, "energy", !1, !0, 4.1868], ["joule", "J", null, "energy", !0, !0, 1], ["katal", "kat", null, "catalytic_activity", !0, !1, 1], ["kelvin", "K", ["kel"], "temperature", !0, !0, 1], ["kilogram", "kg", null, "mass", !0, !0, 1], ["knot", "kn", null, "speed", !1, !0, 0.514444444444444], ["light-year", "ly", null, "length", !1, !0, 9460730472580800], ["litre", "L", ["l", "lt"], "volume", !1, !0, 1e-3], ["lumen", "lm", null, "luminous_flux", !0, !1, 1], ["lux", "lx", null, "illuminance", !0, !1, 1], ["maxwell", "Mx", null, "magnetic_flux", !1, !1, 1e-18], ["measurement ton", "MTON", null, "volume", !1, !0, 1.13267386368], ["meter per hour", "m/h", ["m/hr"], "speed", !1, !0, 27777777777778e-17], ["meter per second", "m/s", ["m/sec"], "speed", !0, !0, 1], ["meter per second squared", "m?s??", null, "acceleration", !0, !1, 1], ["parsec", "pc", ["parsec"], "length", !1, !0, 30856775814671900], ["meter squared per second", "m?/s", null, "kinematic_viscosity", !0, !1, 1], ["metre", "m", null, "length", !0, !0, 1], ["miles per hour", "mph", null, "speed", !1, !0, 0.44704], ["millimetre of mercury", "mmHg", null, "pressure", !1, !1, 133.322], ["minute", "?", null, "angle", !1, !1, 290888208665722e-18], ["minute", "min", ["mn"], "time", !1, !0, 60], ["modern teaspoon", "tspm", null, "volume", !1, !0, 5e-6], ["mole", "mol", null, "amount_of_substance", !0, !1, 1], ["morgen", "Morgen", null, "area", !1, !0, 2500], ["n.u. of action", "?", null, "action", !1, !1, 105457168181818e-48], ["n.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45], ["n.u. of speed", "c?", null, "speed", !1, !1, 299792458], ["n.u. of time", "?/(me?c??)", null, "time", !1, !1, 128808866778687e-35], ["nautical mile", "M", ["Nmi"], "length", !1, !0, 1852], ["newton", "N", null, "force", !0, !0, 1], ["œrsted", "Oe ", null, "magnetic_field_intensity", !1, !1, 79.5774715459477], ["ohm", "Ω", null, "electric_resistance", !0, !1, 1], ["ounce mass", "ozm", null, "mass", !1, !0, 0.028349523125], ["pascal", "Pa", null, "pressure", !0, !1, 1], ["pascal second", "Pa?s", null, "dynamic_viscosity", !0, !1, 1], ["pferdestärke", "PS", null, "power", !1, !0, 735.49875], ["phot", "ph", null, "illuminance", !1, !1, 1e-4], ["pica (1/6 inch)", "pica", null, "length", !1, !0, 35277777777778e-17], ["pica (1/72 inch)", "Pica", ["Picapt"], "length", !1, !0, 0.00423333333333333], ["poise", "P", null, "dynamic_viscosity", !1, !1, 0.1], ["pond", "pond", null, "force", !1, !0, 980665e-8], ["pound force", "lbf", null, "force", !1, !0, 4.4482216152605], ["pound mass", "lbm", null, "mass", !1, !0, 0.45359237], ["quart", "qt", null, "volume", !1, !0, 946352946e-12], ["radian", "rad", null, "angle", !0, !1, 1], ["second", "?", null, "angle", !1, !1, 484813681109536e-20], ["second", "s", ["sec"], "time", !0, !0, 1], ["short hundredweight", "cwt", ["shweight"], "mass", !1, !0, 45.359237], ["siemens", "S", null, "electrical_conductance", !0, !1, 1], ["sievert", "Sv", null, "equivalent_dose", !0, !1, 1], ["slug", "sg", null, "mass", !1, !0, 14.59390294], ["square ångström", "ang2", ["ang^2"], "area", !1, !0, 1e-20], ["square foot", "ft2", ["ft^2"], "area", !1, !0, 0.09290304], ["square inch", "in2", ["in^2"], "area", !1, !0, 64516e-8], ["square light-year", "ly2", ["ly^2"], "area", !1, !0, 895054210748189e17], ["square meter", "m?", null, "area", !0, !0, 1], ["square mile", "mi2", ["mi^2"], "area", !1, !0, 2589988110336e-6], ["square nautical mile", "Nmi2", ["Nmi^2"], "area", !1, !0, 3429904], ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", !1, !0, 1792111111111e-17], ["square yard", "yd2", ["yd^2"], "area", !1, !0, 0.83612736], ["statute mile", "mi", null, "length", !1, !0, 1609.344], ["steradian", "sr", null, "solid_angle", !0, !1, 1], ["stilb", "sb", null, "luminance", !1, !1, 1e-4], ["stokes", "St", null, "kinematic_viscosity", !1, !1, 1e-4], ["stone", "stone", null, "mass", !1, !0, 6.35029318], ["tablespoon", "tbs", null, "volume", !1, !0, 147868e-10], ["teaspoon", "tsp", null, "volume", !1, !0, 492892e-11], ["tesla", "T", null, "magnetic_flux_density", !0, !0, 1], ["thermodynamic calorie", "c", null, "energy", !1, !0, 4.184], ["ton", "ton", null, "mass", !1, !0, 907.18474], ["tonne", "t", null, "mass", !1, !1, 1e3], ["U.K. pint", "uk_pt", null, "volume", !1, !0, 56826125e-11], ["U.S. bushel", "bushel", null, "volume", !1, !0, 0.03523907], ["U.S. oil barrel", "barrel", null, "volume", !1, !0, 0.158987295], ["U.S. pint", "pt", ["us_pt"], "volume", !1, !0, 473176473e-12], ["U.S. survey mile", "survey_mi", null, "length", !1, !0, 1609.347219], ["U.S. survey/statute acre", "us_acre", null, "area", !1, !0, 4046.87261], ["volt", "V", null, "voltage", !0, !1, 1], ["watt", "W", null, "power", !0, !0, 1], ["watt-hour", "Wh", ["wh"], "energy", !1, !0, 3600], ["weber", "Wb", null, "magnetic_flux", !0, !1, 1], ["yard", "yd", null, "length", !1, !0, 0.9144], ["year", "yr", null, "time", !1, !0, 31557600]], D = { Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"], Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"], Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"], Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"], Ti: ["tebi", 40, 1099511627776, "Ti", "tera"], Gi: ["gibi", 30, 1073741824, "Gi", "giga"], Mi: ["mebi", 20, 1048576, "Mi", "mega"], ki: ["kibi", 10, 1024, "ki", "kilo"] }, F = { Y: ["yotta", 1e24, "Y"], Z: ["zetta", 1e21, "Z"], E: ["exa", 1e18, "E"], P: ["peta", 1e15, "P"], T: ["tera", 1e12, "T"], G: ["giga", 1e9, "G"], M: ["mega", 1e6, "M"], k: ["kilo", 1e3, "k"], h: ["hecto", 100, "h"], e: ["dekao", 10, "e"], d: ["deci", 0.1, "d"], c: ["centi", 0.01, "c"], m: ["milli", 1e-3, "m"], u: ["micro", 1e-6, "u"], n: ["nano", 1e-9, "n"], p: ["pico", 1e-12, "p"], f: ["femto", 1e-15, "f"], a: ["atto", 1e-18, "a"], z: ["zepto", 1e-21, "z"], y: ["yocto", 1e-24, "y"] };
            let X, le = null, me = null, Le = t, He = c, qe = 1, Ye = 1;
            for (let Je = 0; Je < v.length; Je++) X = v[Je][2] === null ? [] : v[Je][2], (v[Je][1] === Le || X.indexOf(Le) >= 0) && (le = v[Je]), (v[Je][1] === He || X.indexOf(He) >= 0) && (me = v[Je]);
            if (le === null) {
              const Je = D[t.substring(0, 2)];
              let rt = F[t.substring(0, 1)];
              t.substring(0, 2) === "da" && (rt = ["dekao", 10, "da"]), Je ? (qe = Je[2], Le = t.substring(2)) : rt && (qe = rt[1], Le = t.substring(rt[2].length));
              for (let at = 0; at < v.length; at++) X = v[at][2] === null ? [] : v[at][2], (v[at][1] === Le || X.indexOf(Le) >= 0) && (le = v[at]);
            }
            if (me === null) {
              const Je = D[c.substring(0, 2)];
              let rt = F[c.substring(0, 1)];
              c.substring(0, 2) === "da" && (rt = ["dekao", 10, "da"]), Je ? (Ye = Je[2], He = c.substring(2)) : rt && (Ye = rt[1], He = c.substring(rt[2].length));
              for (let at = 0; at < v.length; at++) X = v[at][2] === null ? [] : v[at][2], (v[at][1] === He || X.indexOf(He) >= 0) && (me = v[at]);
            }
            return le === null || me === null || le[3] !== me[3] ? b : e * le[6] * qe / (me[6] * Ye);
          }, m.CORREL = function(e, t) {
            return oe(e = Me(P(e)), t = Me(P(t))) ? a : w.corrcoeff(e, t);
          }, m.COS = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.cos(e);
          }, m.COSH = function(e) {
            return (e = U(e)) instanceof Error ? e : (Math.exp(e) + Math.exp(-e)) / 2;
          }, m.COT = function(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 ? l : 1 / Math.tan(e);
          }, m.COTH = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            if (e === 0) return l;
            const t = Math.exp(2 * e);
            return (t + 1) / (t - 1);
          }, m.COUNT = N, m.COUNTA = V, m.COUNTBLANK = K, m.COUNTIF = function(e, t) {
            if (e = P(e), t === void 0 || t === "*") return e.length;
            let c = 0;
            const v = bt(t + "");
            for (let D = 0; D < e.length; D++) {
              const F = [ft(e[D], it)].concat(v);
              vt(F) && c++;
            }
            return c;
          }, m.COUNTIFS = function() {
            const e = T(arguments), t = new Array(P(e[0]).length);
            for (let v = 0; v < t.length; v++) t[v] = !0;
            for (let v = 0; v < e.length; v += 2) {
              const D = P(e[v]), F = e[v + 1];
              if (F !== void 0 && F !== "*") {
                const X = bt(F + "");
                for (let le = 0; le < D.length; le++) {
                  const me = [ft(D[le], it)].concat(X);
                  t[le] = t[le] && vt(me);
                }
              }
            }
            let c = 0;
            for (let v = 0; v < t.length; v++) t[v] && c++;
            return c;
          }, m.COUPDAYBS = function() {
            throw new Error("COUPDAYBS is not implemented");
          }, m.COUPDAYS = function() {
            throw new Error("COUPDAYS is not implemented");
          }, m.COUPDAYSNC = function() {
            throw new Error("COUPDAYSNC is not implemented");
          }, m.COUPNCD = function() {
            throw new Error("COUPNCD is not implemented");
          }, m.COUPNUM = function() {
            throw new Error("COUPNUM is not implemented");
          }, m.COUPPCD = function() {
            throw new Error("COUPPCD is not implemented");
          }, m.COVAR = In, m.COVARIANCE = ae, m.COVARIANCEP = _n, m.COVARIANCES = Nn, m.CRITBINOM = Tn, m.CSC = function(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 ? l : 1 / Math.sin(e);
          }, m.CSCH = function(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 ? l : 2 / (Math.exp(e) - Math.exp(-e));
          }, m.CUMIPMT = function(e, t, c, v, D, F) {
            if (oe(e = U(e), t = U(t), c = U(c))) return a;
            if (e <= 0 || t <= 0 || c <= 0 || v < 1 || D < 1 || v > D || F !== 0 && F !== 1) return d;
            const X = Dt(e, t, c, 0, F);
            let le = 0;
            v === 1 && (F === 0 && (le = -c), v++);
            for (let me = v; me <= D; me++) le += F === 1 ? Lt(e, me - 2, X, c, 1) - X : Lt(e, me - 1, X, c, 0);
            return le *= e, le;
          }, m.CUMPRINC = function(e, t, c, v, D, F) {
            if (oe(e = U(e), t = U(t), c = U(c))) return a;
            if (e <= 0 || t <= 0 || c <= 0 || v < 1 || D < 1 || v > D || F !== 0 && F !== 1) return d;
            const X = Dt(e, t, c, 0, F);
            let le = 0;
            v === 1 && (le = F === 0 ? X + c * e : X, v++);
            for (let me = v; me <= D; me++) le += F > 0 ? X - (Lt(e, me - 2, X, c, 1) - X) * e : X - Lt(e, me - 1, X, c, 0) * e;
            return le;
          }, m.DATE = function(e, t, c) {
            let v;
            return oe(e = U(e), t = U(t), c = U(c)) ? v = a : (v = new Date(e, t - 1, c), v.getFullYear() < 0 && (v = d)), v;
          }, m.DATEDIF = Tt, m.DATEVALUE = function(e) {
            if (typeof e != "string") return a;
            const t = Date.parse(e);
            return isNaN(t) ? a : new Date(e);
          }, m.DAVERAGE = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            let F = 0;
            return L(v, (X) => {
              F += D[X];
            }), v.length === 0 ? l : F / v.length;
          }, m.DAY = function(e) {
            const t = De(e);
            return t instanceof Error ? t : t.getDate();
          }, m.DAYS = Mt, m.DAYS360 = Ct, m.DB = function(e, t, c, v, D) {
            if (D = D === void 0 ? 12 : D, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D))) return a;
            if (e < 0 || t < 0 || c < 0 || v < 0 || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(D) === -1 || v > c) return d;
            if (t >= e) return 0;
            const F = (1 - Math.pow(t / e, 1 / c)).toFixed(3), X = e * F * D / 12;
            let le = X, me = 0;
            const Le = v === c ? c - 1 : v;
            for (let He = 2; He <= Le; He++) me = (e - le) * F, le += me;
            return v === 1 ? X : v === c ? (e - le) * F : me;
          }, m.DBCS = function() {
            throw new Error("DBCS is not implemented");
          }, m.DCOUNT = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            const F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), N(F);
          }, m.DCOUNTA = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            const F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), V(F);
          }, m.DDB = function(e, t, c, v, D) {
            if (D = D === void 0 ? 2 : D, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D))) return a;
            if (e < 0 || t < 0 || c < 0 || v < 0 || D <= 0 || v > c) return d;
            if (t >= e) return 0;
            let F = 0, X = 0;
            for (let le = 1; le <= v; le++) X = Math.min(D / c * (e - F), e - t - F), F += X;
            return X;
          }, m.DEC2BIN = function(e, t) {
            if ((e = U(e)) instanceof Error) return e;
            if (!/^-?[0-9]{1,3}$/.test(e) || e < -512 || e > 511) return d;
            if (e < 0) return "1" + xt("0", 9 - (512 + e).toString(2).length) + (512 + e).toString(2);
            const c = parseInt(e, 10).toString(2);
            return t === void 0 ? c : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= c.length ? xt("0", t - c.length) + c : d;
          }, m.DEC2HEX = function(e, t) {
            if ((e = U(e)) instanceof Error) return e;
            if (!/^-?[0-9]{1,12}$/.test(e) || e < -549755813888 || e > 549755813887) return d;
            if (e < 0) return (1099511627776 + e).toString(16);
            const c = parseInt(e, 10).toString(16);
            return t === void 0 ? c : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= c.length ? xt("0", t - c.length) + c : d;
          }, m.DEC2OCT = function(e, t) {
            if ((e = U(e)) instanceof Error) return e;
            if (!/^-?[0-9]{1,9}$/.test(e) || e < -536870912 || e > 536870911) return d;
            if (e < 0) return (1073741824 + e).toString(8);
            const c = parseInt(e, 10).toString(8);
            return t === void 0 ? c : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= c.length ? xt("0", t - c.length) + c : d;
          }, m.DECIMAL = function(e, t) {
            return arguments.length < 1 ? a : de(e = U(e), t = U(t)) || (t === 0 ? d : parseInt(e, t));
          }, m.DEGREES = function(e) {
            return (e = U(e)) instanceof Error ? e : 180 * e / Math.PI;
          }, m.DELTA = function(e, t) {
            return t = t === void 0 ? 0 : t, oe(e = U(e), t = U(t)) ? a : e === t ? 1 : 0;
          }, m.DEVSQ = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = w.mean(e);
            let c = 0;
            for (let v = 0; v < e.length; v++) c += Math.pow(e[v] - t, 2);
            return c;
          }, m.DGET = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            return D = Z(typeof t == "string" ? e[ge(e, t)] : e[t]), v.length === 0 ? a : v.length > 1 ? d : D[v[0]];
          }, m.DISC = function(e, t, c, v, D) {
            if (oe(e = De(e), t = De(t), c = U(c), v = U(v), D = (D = U(D)) || 0)) return a;
            if (c <= 0 || v <= 0) return d;
            if (e >= t) return a;
            let F, X;
            switch (D) {
              case 0:
                F = 360, X = Ct(e, t, !1);
                break;
              case 1:
              case 3:
                F = 365, X = Tt(e, t, "D");
                break;
              case 2:
                F = 360, X = Tt(e, t, "D");
                break;
              case 4:
                F = 360, X = Ct(e, t, !0);
                break;
              default:
                return d;
            }
            return (v - c) / v * F / X;
          }, m.DMAX = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            let F = D[v[0]];
            return L(v, (X) => {
              F < D[X] && (F = D[X]);
            }), F;
          }, m.DMIN = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            let F = D[v[0]];
            return L(v, (X) => {
              F > D[X] && (F = D[X]);
            }), F;
          }, m.DOLLAR = function(e, t = 2) {
            if (e = U(e), isNaN(e)) return a;
            const c = { style: "currency", currency: "USD", minimumFractionDigits: t >= 0 ? t : 0, maximumFractionDigits: t >= 0 ? t : 0 }, v = (e = jt(e, t)).toLocaleString("en-US", c);
            return e < 0 ? "$(" + v.slice(2) + ")" : v;
          }, m.DOLLARDE = function(e, t) {
            if (oe(e = U(e), t = U(t))) return a;
            if (t < 0) return d;
            if (t >= 0 && t < 1) return l;
            t = parseInt(t, 10);
            let c = parseInt(e, 10);
            c += e % 1 * Math.pow(10, Math.ceil(Math.log(t) / Math.LN10)) / t;
            const v = Math.pow(10, Math.ceil(Math.log(t) / Math.LN2) + 1);
            return c = Math.round(c * v) / v, c;
          }, m.DOLLARFR = function(e, t) {
            if (oe(e = U(e), t = U(t))) return a;
            if (t < 0) return d;
            if (t >= 0 && t < 1) return l;
            t = parseInt(t, 10);
            let c = parseInt(e, 10);
            return c += e % 1 * Math.pow(10, -Math.ceil(Math.log(t) / Math.LN10)) * t, c;
          }, m.DPRODUCT = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const le = ge(e, t);
              D = Z(e[le]);
            } else D = Z(e[t]);
            let F = [];
            L(v, (le) => {
              F.push(D[le]);
            }), F = Kt(F);
            let X = 1;
            return L(F, (le) => {
              X *= le;
            }), X;
          }, m.DSTDEV = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            let F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), F = Kt(F), ze.S(F);
          }, m.DSTDEVP = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            let F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), F = Kt(F), ze.P(F);
          }, m.DSUM = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            const F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), kt(F);
          }, m.DURATION = function() {
            throw new Error("DURATION is not implemented");
          }, m.DVAR = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            const F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), ie.S(F);
          }, m.DVARP = function(e, t, c) {
            if (isNaN(t) && typeof t != "string") return a;
            const v = wt(e, c);
            let D = [];
            if (typeof t == "string") {
              const X = ge(e, t);
              D = Z(e[X]);
            } else D = Z(e[t]);
            const F = [];
            return L(v, (X) => {
              F.push(D[X]);
            }), ie.P(F);
          }, m.EDATE = function(e, t) {
            return (e = De(e)) instanceof Error ? e : isNaN(t) ? a : (t = parseInt(t, 10), e.setMonth(e.getMonth() + t), e);
          }, m.EFFECT = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e <= 0 || t < 1 ? d : (t = parseInt(t, 10), Math.pow(1 + e / t, t) - 1);
          }, m.EOMONTH = function(e, t) {
            return (e = De(e)) instanceof Error ? e : isNaN(t) ? a : (t = parseInt(t, 10), new Date(e.getFullYear(), e.getMonth() + t + 1, 0));
          }, m.ERF = Gt, m.ERFC = Zt, m.ERFCPRECISE = Dn, m.ERFPRECISE = Sn, m.ERROR = _t, m.EVEN = function(e) {
            return (e = U(e)) instanceof Error ? e : Xe(e, -2, -1);
          }, m.EXACT = function(e, t) {
            return arguments.length !== 2 ? b : de(e, t) || (e = We(e)) === We(t);
          }, m.EXP = function(e) {
            return arguments.length < 1 ? b : arguments.length > 1 ? k : (e = U(e)) instanceof Error ? e : e = Math.exp(e);
          }, m.EXPON = xe, m.EXPONDIST = On, m.F = fe, m.FACT = nt, m.FACTDOUBLE = function e(t) {
            if ((t = U(t)) instanceof Error) return t;
            const c = Math.floor(t);
            return c <= 0 ? 1 : c * e(c - 2);
          }, m.FALSE = function() {
            return !1;
          }, m.FDIST = Bn, m.FDISTRT = Rn, m.FIND = function(e, t, c) {
            if (arguments.length < 2) return b;
            e = We(e), c = c === void 0 ? 0 : c;
            const v = (t = We(t)).indexOf(e, c - 1);
            return v === -1 ? a : v + 1;
          }, m.FINV = Hn, m.FINVRT = zn, m.FISHER = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.log((1 + e) / (1 - e)) / 2;
          }, m.FISHERINV = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            const t = Math.exp(2 * e);
            return (t - 1) / (t + 1);
          }, m.FIXED = ln, m.FLOOR = st, m.FLOORMATH = Fn, m.FLOORPRECISE = Pn, m.FORECAST = be, m.FREQUENCY = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = e.length, v = t.length, D = [];
            for (let F = 0; F <= v; F++) {
              D[F] = 0;
              for (let X = 0; X < c; X++) F === 0 ? e[X] <= t[0] && (D[0] += 1) : F < v ? e[X] > t[F - 1] && e[X] <= t[F] && (D[F] += 1) : F === v && e[X] > t[v - 1] && (D[v] += 1);
            }
            return D;
          }, m.FTEST = Vn, m.FV = Lt, m.FVSCHEDULE = function(e, t) {
            if (oe(e = U(e), t = Me(P(t)))) return a;
            const c = t.length;
            let v = e;
            for (let D = 0; D < c; D++) v *= 1 + t[D];
            return v;
          }, m.GAMMA = Ae, m.GAMMADIST = Yn, m.GAMMAINV = Un, m.GAMMALN = Se, m.GAMMALNPRECISE = Wn, m.GAUSS = function(e) {
            return (e = U(e)) instanceof Error ? e : w.normal.cdf(e, 0, 1) - 0.5;
          }, m.GCD = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = e.length, c = e[0];
            let v = c < 0 ? -c : c;
            for (let D = 1; D < t; D++) {
              const F = e[D];
              let X = F < 0 ? -F : F;
              for (; v && X; ) v > X ? v %= X : X %= v;
              v += X;
            }
            return v;
          }, m.GEOMEAN = function() {
            const e = Me(P(arguments));
            return e instanceof Error ? e : w.geomean(e);
          }, m.GESTEP = function(e, t) {
            return oe(t = t || 0, e = U(e)) ? e : e >= t ? 1 : 0;
          }, m.GROWTH = function(e, t, c, v) {
            if ((e = Me(e)) instanceof Error) return e;
            let D;
            if (t === void 0) for (t = [], D = 1; D <= e.length; D++) t.push(D);
            if (c === void 0) for (c = [], D = 1; D <= e.length; D++) c.push(D);
            if (oe(t = Me(t), c = Me(c))) return a;
            v === void 0 && (v = !0);
            const F = e.length;
            let X, le, me = 0, Le = 0, He = 0, qe = 0;
            for (D = 0; D < F; D++) {
              const Je = t[D], rt = Math.log(e[D]);
              me += Je, Le += rt, He += Je * rt, qe += Je * Je;
            }
            me /= F, Le /= F, He /= F, qe /= F, v ? (X = (He - me * Le) / (qe - me * me), le = Le - X * me) : (X = He / qe, le = 0);
            const Ye = [];
            for (D = 0; D < c.length; D++) Ye.push(Math.exp(le + X * c[D]));
            return Ye;
          }, m.HARMEAN = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = e.length;
            let c = 0;
            for (let v = 0; v < t; v++) c += 1 / e[v];
            return t / c;
          }, m.HEX2BIN = function(e, t) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return d;
            const c = !(e.length !== 10 || e.substring(0, 1).toLowerCase() !== "f"), v = c ? parseInt(e, 16) - 1099511627776 : parseInt(e, 16);
            if (v < -512 || v > 511) return d;
            if (c) return "1" + xt("0", 9 - (512 + v).toString(2).length) + (512 + v).toString(2);
            const D = v.toString(2);
            return t === void 0 ? D : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= D.length ? xt("0", t - D.length) + D : d;
          }, m.HEX2DEC = function(e) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return d;
            const t = parseInt(e, 16);
            return t >= 549755813888 ? t - 1099511627776 : t;
          }, m.HEX2OCT = function(e, t) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return d;
            const c = parseInt(e, 16);
            if (c > 536870911 && c < 1098974756864) return d;
            if (c >= 1098974756864) return (c - 1098437885952).toString(8);
            const v = c.toString(8);
            return t === void 0 ? v : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= v.length ? xt("0", t - v.length) + v : d;
          }, m.HLOOKUP = function(e, t, c, v) {
            return I(e, se(t), c, v);
          }, m.HOUR = function(e) {
            return (e = De(e)) instanceof Error ? e : e.getHours();
          }, m.HYPGEOM = Oe, m.HYPGEOMDIST = qn, m.IF = function(e, t, c) {
            return e instanceof Error ? e : ((t = !(arguments.length >= 2) || t) == null && (t = 0), (c = arguments.length === 3 && c) == null && (c = 0), e ? t : c);
          }, m.IFERROR = function(e, t) {
            return It(e) ? t : e;
          }, m.IFNA = function(e, t) {
            return e === b ? t : e;
          }, m.IFS = function() {
            for (let e = 0; e < arguments.length / 2; e++) if (arguments[2 * e]) return arguments[2 * e + 1];
            return b;
          }, m.IMABS = Xt, m.IMAGINARY = ct, m.IMARGUMENT = Jt, m.IMCONJUGATE = function(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", c !== 0 ? ht(t, -c, v) : e;
          }, m.IMCOS = Pt, m.IMCOSH = cn, m.IMCOT = function(e) {
            return oe(dt(e), ct(e)) ? a : At(Pt(e), Vt(e));
          }, m.IMCSC = function(e) {
            return e === !0 || e === !1 ? a : oe(dt(e), ct(e)) ? d : At("1", Vt(e));
          }, m.IMCSCH = function(e) {
            return e === !0 || e === !1 ? a : oe(dt(e), ct(e)) ? d : At("1", dn(e));
          }, m.IMDIV = At, m.IMEXP = function(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            v = v === "i" || v === "j" ? v : "i";
            const D = Math.exp(t);
            return ht(D * Math.cos(c), D * Math.sin(c), v);
          }, m.IMLN = function(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.log(Math.sqrt(t * t + c * c)), Math.atan(c / t), v);
          }, m.IMLOG10 = function(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.log(Math.sqrt(t * t + c * c)) / Math.log(10), Math.atan(c / t) / Math.log(10), v);
          }, m.IMLOG2 = function(e) {
            const t = dt(e), c = ct(e);
            if (oe(t, c)) return a;
            let v = e.substring(e.length - 1);
            return v = v === "i" || v === "j" ? v : "i", ht(Math.log(Math.sqrt(t * t + c * c)) / Math.log(2), Math.atan(c / t) / Math.log(2), v);
          }, m.IMPOWER = function(e, t) {
            if (oe(t = U(t), dt(e), ct(e))) return a;
            let c = e.substring(e.length - 1);
            c = c === "i" || c === "j" ? c : "i";
            const v = Math.pow(Xt(e), t), D = Jt(e);
            return ht(v * Math.cos(t * D), v * Math.sin(t * D), c);
          }, m.IMPRODUCT = function() {
            let e = arguments[0];
            if (!arguments.length) return a;
            for (let t = 1; t < arguments.length; t++) {
              const c = dt(e), v = ct(e), D = dt(arguments[t]), F = ct(arguments[t]);
              if (oe(c, v, D, F)) return a;
              e = ht(c * D - v * F, c * F + v * D);
            }
            return e;
          }, m.IMREAL = dt, m.IMSEC = function(e) {
            return e === !0 || e === !1 || oe(dt(e), ct(e)) ? a : At("1", Pt(e));
          }, m.IMSECH = function(e) {
            return oe(dt(e), ct(e)) ? a : At("1", cn(e));
          }, m.IMSIN = Vt, m.IMSINH = dn, m.IMSQRT = function(e) {
            if (oe(dt(e), ct(e))) return a;
            let t = e.substring(e.length - 1);
            t = t === "i" || t === "j" ? t : "i";
            const c = Math.sqrt(Xt(e)), v = Jt(e);
            return ht(c * Math.cos(v / 2), c * Math.sin(v / 2), t);
          }, m.IMSUB = function(e, t) {
            const c = dt(e), v = ct(e), D = dt(t), F = ct(t);
            if (oe(c, v, D, F)) return a;
            const X = e.substring(e.length - 1), le = t.substring(t.length - 1);
            let me = "i";
            return (X === "j" || le === "j") && (me = "j"), ht(c - D, v - F, me);
          }, m.IMSUM = function() {
            if (!arguments.length) return a;
            const e = P(arguments);
            let t = e[0];
            for (let c = 1; c < e.length; c++) {
              const v = dt(t), D = ct(t), F = dt(e[c]), X = ct(e[c]);
              if (oe(v, D, F, X)) return a;
              t = ht(v + F, D + X);
            }
            return t;
          }, m.IMTAN = function(e) {
            return e === !0 || e === !1 || oe(dt(e), ct(e)) ? a : At(Vt(e), Pt(e));
          }, m.INDEX = function(e, t, c) {
            const v = de(e, t, c);
            if (v) return v;
            if (!Array.isArray(e)) return a;
            const D = e.length > 0 && !Array.isArray(e[0]);
            return D && !c ? (c = t, t = 1) : (c = c || 1, t = t || 1), c < 0 || t < 0 ? a : D && t === 1 && c <= e.length ? e[c - 1] : t <= e.length && c <= e[t - 1].length ? e[t - 1][c - 1] : h;
          }, m.INFO = function() {
            throw new Error("INFO is not implemented");
          }, m.INT = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.floor(e);
          }, m.INTERCEPT = function(e, t) {
            return oe(e = Me(e), t = Me(t)) ? a : e.length !== t.length ? b : be(0, e, t);
          }, m.INTRATE = function() {
            throw new Error("INTRATE is not implemented");
          }, m.IPMT = un, m.IRR = function(e, t) {
            if (t = t || 0, oe(e = Me(P(e)), t = U(t))) return a;
            const c = (Ye, Je, rt) => {
              const at = rt + 1;
              let yt = Ye[0];
              for (let pt = 1; pt < Ye.length; pt++) yt += Ye[pt] / Math.pow(at, (Je[pt] - Je[0]) / 365);
              return yt;
            }, v = (Ye, Je, rt) => {
              const at = rt + 1;
              let yt = 0;
              for (let pt = 1; pt < Ye.length; pt++) {
                const Et = (Je[pt] - Je[0]) / 365;
                yt -= Et * Ye[pt] / Math.pow(at, Et + 1);
              }
              return yt;
            }, D = [];
            let F = !1, X = !1;
            for (let Ye = 0; Ye < e.length; Ye++) D[Ye] = Ye === 0 ? 0 : D[Ye - 1] + 365, e[Ye] > 0 && (F = !0), e[Ye] < 0 && (X = !0);
            if (!F || !X) return d;
            let le, me, Le, He = t = t === void 0 ? 0.1 : t, qe = !0;
            do
              Le = c(e, D, He), le = He - Le / v(e, D, He), me = Math.abs(le - He), He = le, qe = me > 1e-10 && Math.abs(Le) > 1e-10;
            while (qe);
            return He;
          }, m.ISBLANK = function(e) {
            return e === null;
          }, m.ISERR = St, m.ISERROR = It, m.ISEVEN = function(e) {
            return !(1 & Math.floor(Math.abs(e)));
          }, m.ISFORMULA = function() {
            throw new Error("ISFORMULA is not implemented");
          }, m.ISLOGICAL = gt, m.ISNA = function(e) {
            return e === b;
          }, m.ISNONTEXT = function(e) {
            return typeof e != "string";
          }, m.ISNUMBER = Nt, m.ISO = $e, m.ISODD = function(e) {
            return !!(1 & Math.floor(Math.abs(e)));
          }, m.ISOWEEKNUM = nn, m.ISPMT = function(e, t, c, v) {
            return oe(e = U(e), t = U(t), c = U(c), v = U(v)) ? a : v * e * (t / c - 1);
          }, m.ISREF = function() {
            throw new Error("ISREF is not implemented");
          }, m.ISTEXT = Ot, m.KURT = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            const t = w.mean(e), c = e.length;
            let v = 0;
            for (let D = 0; D < c; D++) v += Math.pow(e[D] - t, 4);
            return v /= Math.pow(w.stdev(e, !0), 4), c * (c + 1) / ((c - 1) * (c - 2) * (c - 3)) * v - 3 * (c - 1) * (c - 1) / ((c - 2) * (c - 3));
          }, m.LARGE = Ze, m.LCM = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            for (var t, c, v, D, F = 1; (v = e.pop()) !== void 0; ) {
              if (v === 0) return 0;
              for (; v > 1; ) {
                if (v % 2) {
                  for (t = 3, c = Math.floor(Math.sqrt(v)); t <= c && v % t; t += 2) ;
                  D = t <= c ? t : v;
                } else D = 2;
                for (v /= D, F *= D, t = e.length; t; e[--t] % D == 0 && (e[t] /= D) == 1 && e.splice(t, 1)) ;
              }
            }
            return F;
          }, m.LEFT = function(e, t) {
            return de(e, t) || (e = We(e), (t = U(t = t === void 0 ? 1 : t)) instanceof Error || typeof e != "string" ? a : e.substring(0, t));
          }, m.LEN = function(e) {
            return arguments.length === 0 ? k : e instanceof Error ? e : Array.isArray(e) ? a : We(e).length;
          }, m.LINEST = et, m.LN = function(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 ? d : Math.log(e);
          }, m.LOG = function(e, t) {
            return de(e = U(e), t = U(t)) || (e === 0 || t === 0 ? d : Math.log(e) / Math.log(t));
          }, m.LOG10 = function(e) {
            return (e = U(e)) instanceof Error ? e : e === 0 ? d : Math.log(e) / Math.log(10);
          }, m.LOGEST = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t))) || e.length !== t.length) return a;
            for (let v = 0; v < e.length; v++) e[v] = Math.log(e[v]);
            const c = et(e, t);
            return c[0] = Math.round(1e6 * Math.exp(c[0])) / 1e6, c[1] = Math.round(1e6 * Math.exp(c[1])) / 1e6, c;
          }, m.LOGINV = Gn, m.LOGNORM = te, m.LOGNORMDIST = Zn, m.LOGNORMINV = Xn, m.LOOKUP = function(e, t, c) {
            t = P(t), c = c ? P(c) : t;
            const v = typeof e == "number";
            let D = b;
            for (let F = 0; F < t.length; F++) {
              if (t[F] === e) return c[F];
              if (v && t[F] <= e || typeof t[F] == "string" && t[F].localeCompare(e) < 0) D = c[F];
              else if (v && t[F] > e) return D;
            }
            return D;
          }, m.LOWER = function(e) {
            return arguments.length !== 1 ? a : oe(e = We(e)) ? e : e.toLowerCase();
          }, m.MATCH = function(e, t, c) {
            if (!e || !t || (arguments.length === 2 && (c = 1), !((t = P(t)) instanceof Array)) || c !== -1 && c !== 0 && c !== 1) return b;
            let v, D;
            for (let F = 0; F < t.length; F++) if (c === 1) {
              if (t[F] === e) return F + 1;
              t[F] < e && (D ? t[F] > D && (v = F + 1, D = t[F]) : (v = F + 1, D = t[F]));
            } else if (c === 0) {
              if (typeof e == "string" && typeof t[F] == "string") {
                const X = e.toLowerCase().replace(/\?/g, ".").replace(/\*/g, ".*").replace(/~/g, "\\");
                if (new RegExp("^" + X + "$").test(t[F].toLowerCase())) return F + 1;
              } else if (t[F] === e) return F + 1;
            } else if (c === -1) {
              if (t[F] === e) return F + 1;
              t[F] > e && (D ? t[F] < D && (v = F + 1, D = t[F]) : (v = F + 1, D = t[F]));
            }
            return v || b;
          }, m.MAX = ye, m.MAXA = function() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            let c = O(e);
            return c = c.map((v) => v ?? 0), c.length === 0 ? 0 : Math.max.apply(Math, c);
          }, m.MDURATION = function() {
            throw new Error("MDURATION is not implemented");
          }, m.MEDIAN = _e, m.MID = function(e, t, c) {
            if (t == null) return a;
            if (oe(t = U(t), c = U(c)) || typeof e != "string") return c;
            const v = t - 1, D = v + c;
            return e.substring(v, D);
          }, m.MIN = q, m.MINA = function() {
            const e = P(arguments), t = de.apply(void 0, e);
            if (t) return t;
            let c = O(e);
            return c = c.map((v) => v ?? 0), c.length === 0 ? 0 : Math.min.apply(Math, c);
          }, m.MINUTE = function(e) {
            return (e = De(e)) instanceof Error ? e : e.getMinutes();
          }, m.MIRR = function(e, t, c) {
            if (oe(e = Me(P(e)), t = U(t), c = U(c))) return a;
            const v = e.length, D = [], F = [];
            for (let me = 0; me < v; me++) e[me] < 0 ? D.push(e[me]) : F.push(e[me]);
            const X = -en(c, F) * Math.pow(1 + c, v - 1), le = en(t, D) * (1 + t);
            return Math.pow(X / le, 1 / (v - 1)) - 1;
          }, m.MMULT = function(e, t) {
            return !Array.isArray(e) || !Array.isArray(t) || e.some((c) => !c.length) || t.some((c) => !c.length) || ce(e).some((c) => typeof c != "number") || ce(t).some((c) => typeof c != "number") || e[0].length !== t.length ? a : Array(e.length).fill(0).map(() => Array(t[0].length).fill(0)).map((c, v) => c.map((D, F) => e[v].reduce((X, le, me) => X + le * t[me][F], 0)));
          }, m.MOD = function(e, t) {
            const c = de(e = U(e), t = U(t));
            if (c) return c;
            if (t === 0) return l;
            let v = Math.abs(e % t);
            return v = e < 0 ? t - v : v, t > 0 ? v : -v;
          }, m.MODE = ee, m.MODEMULT = Jn, m.MODESNGL = Kn, m.MONTH = function(e) {
            return (e = De(e)) instanceof Error ? e : e.getMonth() + 1;
          }, m.MROUND = function(e, t) {
            return de(e = U(e), t = U(t)) || (e * t == 0 ? 0 : e * t < 0 ? d : Math.round(e / t) * t);
          }, m.MULTINOMIAL = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            let t = 0, c = 1;
            for (let v = 0; v < e.length; v++) t += e[v], c *= nt(e[v]);
            return nt(t) / c;
          }, m.MUNIT = function(e) {
            return arguments.length > 1 ? b : !(e = parseInt(e)) || e <= 0 ? a : Array(e).fill(0).map(() => Array(e).fill(0)).map((t, c) => (t[c] = 1, t));
          }, m.N = function(e) {
            return Nt(e) ? e : e instanceof Date ? e.getTime() : e === !0 ? 1 : e === !1 ? 0 : It(e) ? e : 0;
          }, m.NA = function() {
            return b;
          }, m.NEGBINOM = j, m.NEGBINOMDIST = Qn, m.NETWORKDAYS = Ht, m.NETWORKDAYSINTL = $n, m.NOMINAL = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : e <= 0 || t < 1 ? d : (t = parseInt(t, 10), (Math.pow(e + 1, 1 / t) - 1) * t);
          }, m.NORM = R, m.NORMDIST = er, m.NORMINV = tr, m.NORMSDIST = nr, m.NORMSINV = rr, m.NOT = function(e) {
            return typeof e == "string" ? a : e instanceof Error ? e : !e;
          }, m.NOW = function() {
            return /* @__PURE__ */ new Date();
          }, m.NPER = function(e, t, c, v, D) {
            if (D = D === void 0 ? 0 : D, v = v === void 0 ? 0 : v, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D))) return a;
            if (e === 0) return -(c + v) / t;
            {
              const F = t * (1 + e * D) - v * e, X = c * e + t * (1 + e * D);
              return Math.log(F / X) / Math.log(1 + e);
            }
          }, m.NPV = en, m.NUMBERVALUE = function(e, t, c) {
            return typeof (e = Ne(e) ? e : "") == "number" ? e : typeof e != "string" ? b : (t = t === void 0 ? "." : t, c = c === void 0 ? "," : c, Number(e.replace(t, ".").replace(c, "")));
          }, m.OCT2BIN = function(e, t) {
            if (!/^[0-7]{1,10}$/.test(e)) return d;
            const c = !(e.length !== 10 || e.substring(0, 1) !== "7"), v = c ? parseInt(e, 8) - 1073741824 : parseInt(e, 8);
            if (v < -512 || v > 511) return d;
            if (c) return "1" + xt("0", 9 - (512 + v).toString(2).length) + (512 + v).toString(2);
            const D = v.toString(2);
            return t === void 0 ? D : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= D.length ? xt("0", t - D.length) + D : d;
          }, m.OCT2DEC = function(e) {
            if (!/^[0-7]{1,10}$/.test(e)) return d;
            const t = parseInt(e, 8);
            return t >= 536870912 ? t - 1073741824 : t;
          }, m.OCT2HEX = function(e, t) {
            if (!/^[0-7]{1,10}$/.test(e)) return d;
            const c = parseInt(e, 8);
            if (c >= 536870912) return "ff" + (c + 3221225472).toString(16);
            const v = c.toString(16);
            return t === void 0 ? v : isNaN(t) ? a : t < 0 ? d : (t = Math.floor(t)) >= v.length ? xt("0", t - v.length) + v : d;
          }, m.ODD = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            let t = Math.ceil(Math.abs(e));
            return t = 1 & t ? t : t + 1, e >= 0 ? t : -t;
          }, m.ODDFPRICE = function() {
            throw new Error("ODDFPRICE is not implemented");
          }, m.ODDFYIELD = function() {
            throw new Error("ODDFYIELD is not implemented");
          }, m.ODDLPRICE = function() {
            throw new Error("ODDLPRICE is not implemented");
          }, m.ODDLYIELD = function() {
            throw new Error("ODDLYIELD is not implemented");
          }, m.OR = function() {
            const e = P(arguments);
            let t = a;
            for (let c = 0; c < e.length; c++) {
              if (e[c] instanceof Error) return e[c];
              e[c] !== void 0 && e[c] !== null && typeof e[c] != "string" && (t === a && (t = !1), e[c] && (t = !0));
            }
            return t;
          }, m.PDURATION = function(e, t, c) {
            return oe(e = U(e), t = U(t), c = U(c)) ? a : e <= 0 ? d : (Math.log(c) - Math.log(t)) / Math.log(1 + e);
          }, m.PEARSON = J, m.PERCENTILE = ue, m.PERCENTILEEXC = or, m.PERCENTILEINC = ir, m.PERCENTRANK = Q, m.PERCENTRANKEXC = sr, m.PERCENTRANKINC = ar, m.PERMUT = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : nt(e) / nt(e - t);
          }, m.PERMUTATIONA = function(e, t) {
            return oe(e = U(e), t = U(t)) ? a : Math.pow(e, t);
          }, m.PHI = function(e) {
            return (e = U(e)) instanceof Error ? a : Math.exp(-0.5 * e * e) / 2.5066282746310002;
          }, m.PI = function() {
            return Math.PI;
          }, m.PMT = Dt, m.POISSON = pe, m.POISSONDIST = lr, m.POWER = tn, m.PPMT = function(e, t, c, v, D, F) {
            return D = D || 0, F = F || 0, oe(e = U(e), c = U(c), v = U(v), D = U(D), F = U(F)) ? a : Dt(e, c, v, D, F) - un(e, t, c, v, D, F);
          }, m.PRICE = function() {
            throw new Error("PRICE is not implemented");
          }, m.PRICEDISC = function(e, t, c, v, D) {
            if (oe(e = De(e), t = De(t), c = U(c), v = U(v), D = (D = U(D)) || 0)) return a;
            if (c <= 0 || v <= 0) return d;
            if (e >= t) return a;
            let F, X;
            switch (D) {
              case 0:
                F = 360, X = Ct(e, t, !1);
                break;
              case 1:
              case 3:
                F = 365, X = Tt(e, t, "D");
                break;
              case 2:
                F = 360, X = Tt(e, t, "D");
                break;
              case 4:
                F = 360, X = Ct(e, t, !0);
                break;
              default:
                return d;
            }
            return v - c * v * X / F;
          }, m.PRICEMAT = function() {
            throw new Error("PRICEMAT is not implemented");
          }, m.PROB = function(e, t, c, v) {
            if (c === void 0) return 0;
            if (v = v === void 0 ? c : v, oe(e = Me(P(e)), t = Me(P(t)), c = U(c), v = U(v))) return a;
            if (c === v) return e.indexOf(c) >= 0 ? t[e.indexOf(c)] : 0;
            const D = e.sort((le, me) => le - me), F = D.length;
            let X = 0;
            for (let le = 0; le < F; le++) D[le] >= c && D[le] <= v && (X += t[e.indexOf(D[le])]);
            return X;
          }, m.PRODUCT = Yt, m.PRONETIC = function() {
            throw new Error("PRONETIC is not implemented");
          }, m.PROPER = function(e) {
            return oe(e) ? e : isNaN(e) && typeof e == "number" ? a : (e = We(e)).replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
          }, m.PV = function(e, t, c, v, D) {
            return v = v || 0, D = D || 0, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D)) ? a : e === 0 ? -c * t - v : ((1 - Math.pow(1 + e, t)) / e * c * (1 + e * D) - v) / Math.pow(1 + e, t);
          }, m.QUARTILE = je, m.QUARTILEEXC = cr, m.QUARTILEINC = dr, m.QUOTIENT = function(e, t) {
            return de(e = U(e), t = U(t)) || parseInt(e / t, 10);
          }, m.RADIANS = function(e) {
            return (e = U(e)) instanceof Error ? e : e * Math.PI / 180;
          }, m.RAND = function() {
            return Math.random();
          }, m.RANDBETWEEN = function(e, t) {
            return de(e = U(e), t = U(t)) || e + Math.ceil((t - e + 1) * Math.random()) - 1;
          }, m.RANK = Te, m.RANKAVG = ur, m.RANKEQ = fr, m.RATE = function(e, t, c, v, D, F) {
            if (F = F === void 0 ? 0.01 : F, v = v === void 0 ? 0 : v, D = D === void 0 ? 0 : D, oe(e = U(e), t = U(t), c = U(c), v = U(v), D = U(D), F = U(F))) return a;
            const X = 1e-10;
            let le = F;
            D = D ? 1 : 0;
            for (let me = 0; me < 20; me++) {
              if (le <= -1) return d;
              let Le, He, qe;
              if (Math.abs(le) < X ? Le = c * (1 + e * le) + t * (1 + le * D) * e + v : (He = Math.pow(1 + le, e), Le = c * He + t * (1 / le + D) * (He - 1) + v), Math.abs(Le) < X) return le;
              if (Math.abs(le) < X) qe = c * e + t * D * e;
              else {
                He = Math.pow(1 + le, e);
                const Ye = e * Math.pow(1 + le, e - 1);
                qe = c * Ye + t * (1 / le + D) * Ye + t * (-1 / (le * le)) * (He - 1);
              }
              le -= Le / qe;
            }
            return le;
          }, m.RECEIVED = function() {
            throw new Error("RECEIVED is not implemented");
          }, m.REPLACE = function(e, t, c, v) {
            return oe(t = U(t), c = U(c)) || typeof e != "string" || typeof v != "string" ? a : e.substr(0, t - 1) + v + e.substr(t - 1 + c);
          }, m.REPT = xt, m.RIGHT = function(e, t) {
            return de(e, t) || (e = We(e), (t = U(t = t === void 0 ? 1 : t)) instanceof Error ? t : e.substring(e.length - t));
          }, m.ROMAN = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            const t = String(e).split(""), c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
            let v = "", D = 3;
            for (; D--; ) v = (c[+t.pop() + 10 * D] || "") + v;
            return new Array(+t.join("") + 1).join("M") + v;
          }, m.ROUND = jt, m.ROUNDDOWN = function(e, t) {
            return de(e = U(e), t = U(t)) || (e > 0 ? 1 : -1) * Math.floor(Math.abs(e) * Math.pow(10, t)) / Math.pow(10, t);
          }, m.ROUNDUP = function(e, t) {
            return de(e = U(e), t = U(t)) || (e > 0 ? 1 : -1) * Math.ceil(Math.abs(e) * Math.pow(10, t)) / Math.pow(10, t);
          }, m.ROW = function(e, t) {
            return arguments.length !== 2 ? b : t < 0 ? d : e instanceof Array && typeof t == "number" ? e.length !== 0 ? w.row(e, t) : void 0 : a;
          }, m.ROWS = function(e) {
            return arguments.length !== 1 ? b : e instanceof Array ? e.length === 0 ? 0 : w.rows(e) : a;
          }, m.RRI = function(e, t, c) {
            return oe(e = U(e), t = U(t), c = U(c)) ? a : e === 0 || t === 0 ? d : Math.pow(c / t, 1 / e) - 1;
          }, m.RSQ = function(e, t) {
            return oe(e = Me(P(e)), t = Me(P(t))) ? a : Math.pow(J(e, t), 2);
          }, m.SEARCH = function(e, t, c) {
            let v;
            return typeof e != "string" || typeof t != "string" ? a : (c = c === void 0 ? 0 : c, v = t.toLowerCase().indexOf(e.toLowerCase(), c - 1) + 1, v === 0 ? a : v);
          }, m.SEC = function(e) {
            return (e = U(e)) instanceof Error ? e : 1 / Math.cos(e);
          }, m.SECH = function(e) {
            return (e = U(e)) instanceof Error ? e : 2 / (Math.exp(e) + Math.exp(-e));
          }, m.SECOND = function(e) {
            return (e = De(e)) instanceof Error ? e : e.getSeconds();
          }, m.SERIESSUM = function(e, t, c, v) {
            if (oe(e = U(e), t = U(t), c = U(c), v = Me(v))) return a;
            let D = v[0] * Math.pow(e, t);
            for (let F = 1; F < v.length; F++) D += v[F] * Math.pow(e, t + F * c);
            return D;
          }, m.SHEET = function() {
            throw new Error("SHEET is not implemented");
          }, m.SHEETS = function() {
            throw new Error("SHEETS is not implemented");
          }, m.SIGN = function(e) {
            return (e = U(e)) instanceof Error ? e : e < 0 ? -1 : e === 0 ? 0 : 1;
          }, m.SIN = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.sin(e);
          }, m.SINH = function(e) {
            return (e = U(e)) instanceof Error ? e : (Math.exp(e) - Math.exp(-e)) / 2;
          }, m.SKEW = ke, m.SKEWP = pr, m.SLN = function(e, t, c) {
            return oe(e = U(e), t = U(t), c = U(c)) ? a : c === 0 ? d : (e - t) / c;
          }, m.SLOPE = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = w.mean(t), v = w.mean(e), D = t.length;
            let F = 0, X = 0;
            for (let le = 0; le < D; le++) F += (t[le] - c) * (e[le] - v), X += Math.pow(t[le] - c, 2);
            return F / X;
          }, m.SMALL = Re, m.SORT = function(e, t = 1, c = 1, v = !1) {
            if (!e || !Array.isArray(e)) return b;
            if (e.length === 0) return 0;
            if (!(t = U(t)) || t < 1 || (c = U(c)) !== 1 && c !== -1) return a;
            if (typeof (v = Fe(v)) != "boolean") return f;
            const D = (le) => le.sort((me, Le) => (me = We(me[t - 1]), Le = We(Le[t - 1]), c === 1 ? me < Le ? -1 * c : c : me > Le ? c : -1 * c)), F = W(e), X = v ? se(F) : F;
            return t >= 1 && t <= X[0].length ? v ? se(D(X)) : D(X) : a;
          }, m.SQRT = function(e) {
            return (e = U(e)) instanceof Error ? e : e < 0 ? d : Math.sqrt(e);
          }, m.SQRTPI = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.sqrt(e * Math.PI);
          }, m.STANDARDIZE = function(e, t, c) {
            return oe(e = U(e), t = U(t), c = U(c)) ? a : (e - t) / c;
          }, m.STDEV = ze, m.STDEVA = function() {
            const e = Ce.apply(this, arguments);
            return Math.sqrt(e);
          }, m.STDEVP = hr, m.STDEVPA = function() {
            const e = Ee.apply(this, arguments);
            let t = Math.sqrt(e);
            return isNaN(t) && (t = d), t;
          }, m.STDEVS = gr, m.STEYX = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            const c = w.mean(t), v = w.mean(e), D = t.length;
            let F = 0, X = 0, le = 0;
            for (let me = 0; me < D; me++) F += Math.pow(e[me] - v, 2), X += (t[me] - c) * (e[me] - v), le += Math.pow(t[me] - c, 2);
            return Math.sqrt((F - X * X / le) / (D - 2));
          }, m.SUBSTITUTE = function(e, t, c, v) {
            if (arguments.length < 3) return b;
            if (e && t) {
              if (v === void 0) return e.split(t).join(c);
              {
                if (v = Math.floor(Number(v)), Number.isNaN(v) || v <= 0) return a;
                let D = 0, F = 0;
                for (; D > -1 && e.indexOf(t, D) > -1; ) if (D = e.indexOf(t, D + 1), F++, D > -1 && F === v) return e.substring(0, D) + c + e.substring(D + t.length);
                return e;
              }
            }
            return e;
          }, m.SUBTOTAL = function(e, t) {
            if ((e = U(e)) instanceof Error) return e;
            switch (e) {
              case 1:
              case 101:
                return u(t);
              case 2:
              case 102:
                return N(t);
              case 3:
              case 103:
                return V(t);
              case 4:
              case 104:
                return ye(t);
              case 5:
              case 105:
                return q(t);
              case 6:
              case 106:
                return Yt(t);
              case 7:
              case 107:
                return ze.S(t);
              case 8:
              case 108:
                return ze.P(t);
              case 9:
              case 109:
                return kt(t);
              case 10:
              case 110:
                return ie.S(t);
              case 11:
              case 111:
                return ie.P(t);
            }
          }, m.SUM = kt, m.SUMIF = function(e, t, c) {
            if (e = P(e), c = c ? P(c) : e, e instanceof Error) return e;
            if (t == null || t instanceof Error) return 0;
            let v = 0;
            const D = t === "*", F = D ? null : bt(t + "");
            for (let X = 0; X < e.length; X++) {
              const le = e[X], me = c[X];
              if (D) v += le;
              else {
                const Le = [ft(le, it)].concat(F);
                v += vt(Le) ? me : 0;
              }
            }
            return v;
          }, m.SUMIFS = function() {
            const e = T(arguments), t = Me(P(e.shift()));
            if (t instanceof Error) return t;
            const c = e, v = c.length / 2;
            for (let F = 0; F < v; F++) c[2 * F] = P(c[2 * F]);
            let D = 0;
            for (let F = 0; F < t.length; F++) {
              let X = !1;
              for (let le = 0; le < v; le++) {
                const me = c[2 * le][F], Le = c[2 * le + 1];
                let He = !1;
                if (Le === void 0 || Le === "*") He = !0;
                else {
                  const qe = bt(Le + ""), Ye = [ft(me, it)].concat(qe);
                  He = vt(Ye);
                }
                if (!He) {
                  X = !1;
                  break;
                }
                X = !0;
              }
              X && (D += t[F]);
            }
            return D;
          }, m.SUMPRODUCT = function() {
            if (!arguments || arguments.length === 0) return a;
            const e = arguments.length + 1;
            let t, c, v, D, F = 0;
            for (let X = 0; X < arguments[0].length; X++) if (arguments[0][X] instanceof Array) for (let le = 0; le < arguments[0][X].length; le++) {
              for (t = 1, c = 1; c < e; c++) {
                const me = arguments[c - 1][X][le];
                if (me instanceof Error) return me;
                if (D = U(me), D instanceof Error) return D;
                t *= D;
              }
              F += t;
            }
            else {
              for (t = 1, c = 1; c < e; c++) {
                const le = arguments[c - 1][X];
                if (le instanceof Error) return le;
                if (v = U(le), v instanceof Error) return v;
                t *= v;
              }
              F += t;
            }
            return F;
          }, m.SUMSQ = function() {
            const e = Me(P(arguments));
            if (e instanceof Error) return e;
            let t = 0;
            const c = e.length;
            for (let v = 0; v < c; v++) t += Nt(e[v]) ? e[v] * e[v] : 0;
            return t;
          }, m.SUMX2MY2 = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            let c = 0;
            for (let v = 0; v < e.length; v++) c += e[v] * e[v] - t[v] * t[v];
            return c;
          }, m.SUMX2PY2 = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            let c = 0;
            e = Me(P(e)), t = Me(P(t));
            for (let v = 0; v < e.length; v++) c += e[v] * e[v] + t[v] * t[v];
            return c;
          }, m.SUMXMY2 = function(e, t) {
            if (oe(e = Me(P(e)), t = Me(P(t)))) return a;
            let c = 0;
            e = P(e), t = P(t);
            for (let v = 0; v < e.length; v++) c += Math.pow(e[v] - t[v], 2);
            return c;
          }, m.SWITCH = function() {
            let e;
            if (arguments.length > 0) {
              const t = arguments[0], c = arguments.length - 1, v = Math.floor(c / 2);
              let D = !1;
              const F = c % 2 != 0, X = c % 2 == 0 ? null : arguments[arguments.length - 1];
              if (v) {
                for (let le = 0; le < v; le++) if (t === arguments[2 * le + 1]) {
                  e = arguments[2 * le + 2], D = !0;
                  break;
                }
              }
              D || (e = F ? X : b);
            } else e = a;
            return e;
          }, m.SYD = function(e, t, c, v) {
            return oe(e = U(e), t = U(t), c = U(c), v = U(v)) ? a : c === 0 || v < 1 || v > c ? d : (e - t) * (c - (v = parseInt(v, 10)) + 1) * 2 / (c * (c + 1));
          }, m.T = function(e) {
            return e instanceof Error || typeof e == "string" ? e : "";
          }, m.TAN = function(e) {
            return (e = U(e)) instanceof Error ? e : Math.tan(e);
          }, m.TANH = function(e) {
            if ((e = U(e)) instanceof Error) return e;
            const t = Math.exp(2 * e);
            return (t - 1) / (t + 1);
          }, m.TBILLEQ = function(e, t, c) {
            return oe(e = De(e), t = De(t), c = U(c)) ? a : c <= 0 || e > t || t - e > 31536e6 ? d : 365 * c / (360 - c * Ct(e, t, !1));
          }, m.TBILLPRICE = function(e, t, c) {
            return oe(e = De(e), t = De(t), c = U(c)) ? a : c <= 0 || e > t || t - e > 31536e6 ? d : 100 * (1 - c * Ct(e, t, !1) / 360);
          }, m.TBILLYIELD = function(e, t, c) {
            return oe(e = De(e), t = De(t), c = U(c)) ? a : c <= 0 || e > t || t - e > 31536e6 ? d : 360 * (100 - c) / (c * Ct(e, t, !1));
          }, m.TDIST = mr, m.TDISTRT = br, m.TEXT = function(e, t) {
            if (e === void 0 || e instanceof Error || t instanceof Error) return b;
            if (t == null) return "";
            if (typeof t == "number") return String(t);
            if (typeof t != "string") return a;
            const c = t.startsWith("$") ? "$" : "", v = t.endsWith("%");
            return v && (e *= 100), e = (e = ln(e, (t = t.replace(/%/g, "").replace(/\$/g, "")).split(".")[1].match(/0/g).length, !t.includes(","))).startsWith("-") ? "-" + c + (e = e.replace("-", "")) : c + e, v && (e += "%"), e;
          }, m.TEXTJOIN = function(e, t, ...c) {
            if (typeof t != "boolean" && (t = Fe(t)), arguments.length < 3) return b;
            e = e ?? "";
            let v = P(c), D = t ? v.filter((F) => F) : v;
            if (Array.isArray(e)) {
              e = P(e);
              let F = D.map((le) => [le]), X = 0;
              for (let le = 0; le < F.length - 1; le++) F[le].push(e[X]), X++, X === e.length && (X = 0);
              return D = P(F), D.join("");
            }
            return D.join(e);
          }, m.TIME = function(e, t, c) {
            return oe(e = U(e), t = U(t), c = U(c)) ? a : e < 0 || t < 0 || c < 0 ? d : (3600 * e + 60 * t + c) / 86400;
          }, m.TIMEVALUE = function(e) {
            return (e = De(e)) instanceof Error ? e : (3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds()) / 86400;
          }, m.TINV = vr, m.TODAY = function() {
            return Rt(/* @__PURE__ */ new Date());
          }, m.TRANSPOSE = function(e) {
            return e ? se(W(e)) : b;
          }, m.TREND = function(e, t, c) {
            if (oe(e = Me(P(e)), t = Me(P(t)), c = Me(P(c)))) return a;
            const v = et(e, t), D = v[0], F = v[1], X = [];
            return c.forEach((le) => {
              X.push(D * le + F);
            }), X;
          }, m.TRIM = function(e) {
            return (e = We(e)) instanceof Error ? e : e.replace(/\s+/g, " ").trim();
          }, m.TRIMMEAN = function(e, t) {
            if (oe(e = Me(P(e)), t = U(t))) return a;
            const c = st(e.length * t, 2) / 2;
            return w.mean((D = (D = c) || 1, (v = Z(e.sort((F, X) => F - X), c)) && typeof v.slice == "function" ? v.slice(0, v.length - D) : v));
            var v, D;
          }, m.TRUE = function() {
            return !0;
          }, m.TRUNC = function(e, t) {
            return de(e = U(e), t = U(t)) || (e > 0 ? 1 : -1) * Math.floor(Math.abs(e) * Math.pow(10, t)) / Math.pow(10, t);
          }, m.TTEST = yr, m.TYPE = function(e) {
            return Nt(e) ? 1 : Ot(e) ? 2 : gt(e) ? 4 : It(e) ? 16 : Array.isArray(e) ? 64 : void 0;
          }, m.UNICHAR = bn, m.UNICODE = vn, m.UNIQUE = E, m.UPPER = function(e) {
            return (e = We(e)) instanceof Error ? e : e.toUpperCase();
          }, m.VALUE = function(e) {
            const t = de(e);
            if (t) return t;
            if (typeof e == "number") return e;
            if (Ne(e) || (e = ""), typeof e != "string") return a;
            const c = /(%)$/.test(e) || /^(%)/.test(e);
            if ((e = (e = (e = e.replace(/^[^0-9-]{0,3}/, "")).replace(/[^0-9]{0,3}$/, "")).replace(/[ ,]/g, "")) === "") return 0;
            let v = Number(e);
            return isNaN(v) ? a : (v = v || 0, c && (v *= 0.01), v);
          }, m.VAR = ie, m.VARA = Ce, m.VARP = xr, m.VARPA = Ee, m.VARS = wr, m.VDB = function() {
            throw new Error("VDB is not implemented");
          }, m.VLOOKUP = I, m.WEEKDAY = function(e, t) {
            if ((e = De(e)) instanceof Error) return e;
            t === void 0 && (t = 1);
            const c = e.getDay();
            return gn[t][c];
          }, m.WEEKNUM = function(e, t) {
            if ((e = De(e)) instanceof Error) return e;
            if (t === void 0 && (t = 1), t === 21) return nn(e);
            const c = hn[t];
            let v = new Date(e.getFullYear(), 0, 1);
            const D = v.getDay() < c ? 1 : 0;
            return v -= 24 * Math.abs(v.getDay() - c) * 60 * 60 * 1e3, Math.floor((e - v) / 864e5 / 7 + 1) + D;
          }, m.WEIBULL = Ve, m.WEIBULLDIST = jr, m.WORKDAY = zt, m.WORKDAYINTL = Cr, m.XIRR = function(e, t, c) {
            if (oe(e = Me(P(e)), t = Ke(P(t)), c = U(c))) return a;
            const v = (Ye, Je, rt) => {
              const at = rt + 1;
              let yt = Ye[0];
              for (let pt = 1; pt < Ye.length; pt++) yt += Ye[pt] / Math.pow(at, Mt(Je[pt], Je[0]) / 365);
              return yt;
            }, D = (Ye, Je, rt) => {
              const at = rt + 1;
              let yt = 0;
              for (let pt = 1; pt < Ye.length; pt++) {
                const Et = Mt(Je[pt], Je[0]) / 365;
                yt -= Et * Ye[pt] / Math.pow(at, Et + 1);
              }
              return yt;
            };
            let F = !1, X = !1;
            for (let Ye = 0; Ye < e.length; Ye++) e[Ye] > 0 && (F = !0), e[Ye] < 0 && (X = !0);
            if (!F || !X) return d;
            let le, me, Le, He = c = c || 0.1, qe = !0;
            do
              Le = v(e, t, He), le = He - Le / D(e, t, He), me = Math.abs(le - He), He = le, qe = me > 1e-10 && Math.abs(Le) > 1e-10;
            while (qe);
            return He;
          }, m.XNPV = function(e, t, c) {
            if (oe(e = U(e), t = Me(P(t)), c = Ke(P(c)))) return a;
            let v = 0;
            for (let D = 0; D < t.length; D++) v += t[D] / Math.pow(1 + e, Mt(c[D], c[0]) / 365);
            return v;
          }, m.XOR = function() {
            const e = P(arguments);
            let t = a;
            for (let c = 0; c < e.length; c++) {
              if (e[c] instanceof Error) return e[c];
              e[c] !== void 0 && e[c] !== null && typeof e[c] != "string" && (t === a && (t = 0), e[c] && t++);
            }
            return t === a ? t : !!(1 & Math.floor(Math.abs(t)));
          }, m.YEAR = function(e) {
            return (e = De(e)) instanceof Error ? e : e.getFullYear();
          }, m.YEARFRAC = Wt, m.YIELD = function() {
            throw new Error("YIELD is not implemented");
          }, m.YIELDDISC = function() {
            throw new Error("YIELDDISC is not implemented");
          }, m.YIELDMAT = function() {
            throw new Error("YIELDMAT is not implemented");
          }, m.Z = tt, m.ZTEST = Er, m.utils = kr;
        } }, C = {};
        function _(z) {
          var m = C[z];
          if (m !== void 0) return m.exports;
          var s = C[z] = { exports: {} };
          return p[z].call(s.exports, s, s.exports, _), s.exports;
        }
        _.g = function() {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        }();
        var G = _(960);
        o = G;
      }(), o;
    });
  }(dist$2)), dist$2.exports;
}
var dist = dist$3.exports, hasRequiredDist;
function requireDist() {
  return hasRequiredDist || (hasRequiredDist = 1, function(module, exports) {
    if (!jSuites && typeof commonjsRequire == "function")
      var jSuites = requireJsuites();
    if (!formula && typeof commonjsRequire == "function")
      var formula = requireDist$1();
    (function(n, g) {
      module.exports = g();
    })(dist, function() {
      var jspreadsheet;
      return function() {
        var __webpack_modules__ = { 805: function(n, g) {
          const o = function(_) {
            const G = this, z = [];
            for (let m = 0; m < _.length; m++) {
              const s = _[m].x, w = _[m].y, S = G.options.columns[s].name ? G.options.columns[s].name : s;
              z[w] || (z[w] = { row: w, data: {} }), z[w].data[S] = _[m].value;
            }
            return z.filter(function(m) {
              return m != null;
            });
          }, p = function(_, G) {
            const z = this, m = C.call(z.parent, "onbeforesave", z.parent, z, G);
            if (m) G = m;
            else if (m === !1) return !1;
            jSuites.ajax({ url: _, method: "POST", dataType: "json", data: { data: JSON.stringify(G) }, success: function(s) {
              C.call(z, "onsave", z.parent, z, G);
            } });
          }, C = function(_) {
            const G = this;
            let z = null, m = G.parent ? G.parent : G;
            if (!m.ignoreEvents && (typeof m.config.onevent == "function" && (z = m.config.onevent.apply(this, arguments)), typeof m.config[_] == "function" && (z = m.config[_].apply(this, Array.prototype.slice.call(arguments, 1))), typeof m.plugins == "object")) {
              const s = Object.keys(m.plugins);
              for (let w = 0; w < s.length; w++) {
                const S = s[w], A = m.plugins[S];
                typeof A.onevent == "function" && (z = A.onevent.apply(this, arguments));
              }
            }
            if (_ == "onafterchanges") {
              const s = arguments;
              if (typeof m.plugins == "object" && Object.entries(m.plugins).forEach(function([, w]) {
                typeof w.persistence == "function" && w.persistence(G, "setValue", { data: s[2] });
              }), G.options.persistence) {
                const w = G.options.persistence == 1 ? G.options.url : G.options.persistence, S = o.call(G, arguments[2]);
                p.call(G, w, S);
              }
            }
            return z;
          };
          g.A = C;
        }, 829: function(n, g, o) {
          o.d(g, { F8: function() {
            return G;
          }, N$: function() {
            return _;
          }, dr: function() {
            return z;
          } });
          var p = o(530), C = o(657);
          const _ = function(m) {
            const s = this;
            if (s.options.filters) {
              m = parseInt(m), s.resetSelection();
              let w = [];
              if (s.options.columns[m].type == "checkbox") w.push({ id: "true", name: "True" }), w.push({ id: "false", name: "False" });
              else {
                const l = [];
                let a = !1;
                for (let f = 0; f < s.options.data.length; f++) {
                  const d = s.options.data[f][m], b = s.records[f][m].element.innerHTML;
                  d && b ? l[d] = b : a = !0;
                }
                const h = Object.keys(l);
                w = [];
                for (let f = 0; f < h.length; f++) w.push({ id: h[f], name: l[h[f]] });
                a && w.push({ value: "", id: "", name: "(Blanks)" });
              }
              const S = document.createElement("div");
              s.filter.children[m + 1].innerHTML = "", s.filter.children[m + 1].appendChild(S), s.filter.children[m + 1].style.paddingLeft = "0px", s.filter.children[m + 1].style.paddingRight = "0px", s.filter.children[m + 1].style.overflow = "initial";
              const A = { data: w, multiple: !0, autocomplete: !0, opened: !0, value: s.filters[m] !== void 0 ? s.filters[m] : null, width: "100%", position: s.options.tableOverflow == 1 || s.parent.config.fullscreen == 1, onclose: function(l) {
                z.call(s), s.filters[m] = l.dropdown.getValue(!0), s.filter.children[m + 1].innerHTML = l.dropdown.getText(), s.filter.children[m + 1].style.paddingLeft = "", s.filter.children[m + 1].style.paddingRight = "", s.filter.children[m + 1].style.overflow = "", G.call(s, m), C.G9.call(s);
              } };
              jSuites.dropdown(S, A);
            } else console.log("Jspreadsheet: filters not enabled.");
          }, G = function(m) {
            const s = this;
            if (!m) for (let A = 0; A < s.filter.children.length; A++) s.filters[A] && (m = A);
            const w = function(A, l, a) {
              for (let h = 0; h < A.length; h++) {
                const f = "" + s.options.data[a][l], d = "" + s.records[a][l].element.innerHTML;
                if (A[h] == f || A[h] == d) return !0;
              }
              return !1;
            }, S = s.filters[m];
            s.results = [];
            for (let A = 0; A < s.options.data.length; A++) w(S, m, A) && s.results.push(A);
            s.results.length || (s.results = null), p.hG.call(s);
          }, z = function() {
            const m = this;
            if (m.options.filters) for (let s = 0; s < m.filter.children.length; s++) m.filter.children[s].innerHTML = "&nbsp;", m.filters[s] = null;
            m.results = null, p.hG.call(m);
          };
        }, 160: function(n, g, o) {
          o.d(g, { e: function() {
            return C;
          } });
          var p = o(530);
          const C = function(_) {
            const G = this;
            if (_ && (G.options.footers = _), G.options.footers) {
              G.tfoot || (G.tfoot = document.createElement("tfoot"), G.table.appendChild(G.tfoot));
              for (let z = 0; z < G.options.footers.length; z++) {
                let m;
                if (G.tfoot.children[z]) m = G.tfoot.children[z];
                else {
                  m = document.createElement("tr");
                  const s = document.createElement("td");
                  m.appendChild(s), G.tfoot.appendChild(m);
                }
                for (let s = 0; s < G.headers.length; s++) {
                  let w;
                  if (G.options.footers[z][s] || (G.options.footers[z][s] = ""), G.tfoot.children[z].children[s + 1]) w = G.tfoot.children[z].children[s + 1];
                  else {
                    w = document.createElement("td"), m.appendChild(w);
                    const S = G.options.columns[s].align || G.options.defaultColAlign || "center";
                    w.style.textAlign = S;
                  }
                  w.textContent = p.$x.call(G, +G.records.length + s, z, G.options.footers[z][s]), w.style.display = G.cols[s].colElement.style.display;
                }
              }
            }
          };
        }, 296: function(n, g, o) {
          o.d(g, { w: function() {
            return p;
          } });
          const p = function() {
            const C = this;
            let _ = 0;
            if (C.options.freezeColumns > 0) for (let G = 0; G < C.options.freezeColumns; G++) {
              let z;
              z = C.options.columns && C.options.columns[G] && C.options.columns[G].width !== void 0 ? parseInt(C.options.columns[G].width) : C.options.defaultColWidth !== void 0 ? parseInt(C.options.defaultColWidth) : 100, _ += z;
            }
            return _;
          };
        }, 978: function(n, g, o) {
          o.r(g), o.d(g, { createFromTable: function() {
            return S;
          }, getCaretIndex: function() {
            return C;
          }, getCellNameFromCoords: function() {
            return z;
          }, getColumnName: function() {
            return G;
          }, getCoordsFromCellName: function() {
            return m;
          }, getCoordsFromRange: function() {
            return s;
          }, invert: function() {
            return _;
          }, parseCSV: function() {
            return w;
          } });
          var p = o(689);
          const C = function(A) {
            let l;
            l = this.config.root ? this.config.root : window;
            let a = 0;
            const h = l.getSelection();
            if (h && h.rangeCount !== 0) {
              const f = h.getRangeAt(0), d = f.cloneRange();
              d.selectNodeContents(A), d.setEnd(f.endContainer, f.endOffset), a = d.toString().length;
            }
            return a;
          }, _ = function(A) {
            const l = [], a = Object.keys(A);
            for (let h = 0; h < a.length; h++) l[A[a[h]]] = a[h];
            return l;
          }, G = function(A) {
            let l, a = A + 1, h = "";
            for (; a > 0; ) l = (a - 1) % 26, h = String.fromCharCode(65 + l).toString() + h, a = parseInt((a - l) / 26);
            return h;
          }, z = function(A, l) {
            return G(parseInt(A)) + (parseInt(l) + 1);
          }, m = function(A) {
            const l = /^[a-zA-Z]+/.exec(A);
            if (l) {
              let a = 0;
              for (let f = 0; f < l[0].length; f++) a += parseInt(l[0].charCodeAt(f) - 64) * Math.pow(26, l[0].length - 1 - f);
              a--, a < 0 && (a = 0);
              let h = parseInt(/[0-9]+$/.exec(A)) || null;
              return h > 0 && h--, [a, h];
            }
          }, s = function(A) {
            const [l, a] = A.split(":");
            return [...m(l), ...m(a)];
          }, w = function(A, l) {
            l = l || ",", A = A.replace(/\r?\n$|\r$|\n$/g, "");
            const a = [];
            let h = !1, f = 0, d = 0, b = 0;
            for (let k = 0; k < A.length; k++) {
              const M = A[k], B = A[k + 1];
              a[d] = a[d] || [], a[d][b] = a[d][b] || "", M == '"' && h && B == '"' ? (a[d][b] += M, ++k) : M != '"' ? M != l || h ? M != "\r" || B != `
` || h ? M == `
` && !h || M == "\r" && !h ? (++d, f = Math.max(f, b), b = 0) : a[d][b] += M : (++d, f = Math.max(f, b), b = 0, ++k) : ++b : h = !h;
            }
            return a.forEach((k, M) => {
              for (let B = k.length; B <= f; B++) k.push("");
            }), a;
          }, S = function(A, l) {
            if (A.tagName == "TABLE") {
              l || (l = {}), l.columns = [], l.data = [];
              const a = A.querySelectorAll("colgroup > col");
              if (a.length) for (let O = 0; O < a.length; O++) {
                let W = a[O].style.width;
                W || (W = a[O].getAttribute("width")), W && (l.columns[O] || (l.columns[O] = {}), l.columns[O].width = W);
              }
              const h = function(O, W) {
                let P = O.getBoundingClientRect();
                const ce = P.width > 50 ? P.width : 50;
                l.columns[W] || (l.columns[W] = {}), O.getAttribute("data-celltype") ? l.columns[W].type = O.getAttribute("data-celltype") : l.columns[W].type = "text", l.columns[W].width = ce + "px", l.columns[W].title = O.innerHTML, O.style.textAlign && (l.columns[W].align = O.style.textAlign), (P = O.getAttribute("name")) && (l.columns[W].name = P), (P = O.getAttribute("id")) && (l.columns[W].id = P), (P = O.getAttribute("data-mask")) && (l.columns[W].mask = P);
              }, f = [];
              let d = A.querySelectorAll(":scope > thead > tr");
              if (d.length) {
                for (let O = 0; O < d.length - 1; O++) {
                  const W = [];
                  for (let P = 0; P < d[O].children.length; P++) {
                    const ce = { title: d[O].children[P].textContent, colspan: d[O].children[P].getAttribute("colspan") || 1 };
                    W.push(ce);
                  }
                  f.push(W);
                }
                d = d[d.length - 1].children;
                for (let O = 0; O < d.length; O++) h(d[O], O);
              }
              let b = 0;
              const k = {}, M = {}, B = {}, T = {};
              let L = A.querySelectorAll(":scope > tr, :scope > tbody > tr");
              for (let O = 0; O < L.length; O++) if (l.data[b] = [], l.parseTableFirstRowAsHeader != 1 || d.length || O != 0) {
                for (let W = 0; W < L[O].children.length; W++) {
                  let P = L[O].children[W].getAttribute("data-formula");
                  P ? P.substr(0, 1) != "=" && (P = "=" + P) : P = L[O].children[W].innerHTML, l.data[b].push(P);
                  const ce = (0, p.t3)([W, O]), he = L[O].children[W].getAttribute("class");
                  he && (T[ce] = he);
                  const Z = parseInt(L[O].children[W].getAttribute("colspan")) || 0, se = parseInt(L[O].children[W].getAttribute("rowspan")) || 0;
                  (Z || se) && (k[ce] = [Z || 1, se || 1]), L[O].children[W].style && L[O].children[W].style.display == "none" && (L[O].children[W].style.display = "");
                  const ge = L[O].children[W].getAttribute("style");
                  ge && (B[ce] = ge), L[O].children[W].classList.contains("styleBold") && (B[ce] ? B[ce] += "; font-weight:bold;" : B[ce] = "font-weight:bold;");
                }
                L[O].style && L[O].style.height && (M[O] = { height: L[O].style.height }), b++;
              } else for (let W = 0; W < L[O].children.length; W++) h(L[O].children[W], W);
              if (Object.keys(f).length > 0 && (l.nestedHeaders = f), Object.keys(B).length > 0 && (l.style = B), Object.keys(k).length > 0 && (l.mergeCells = k), Object.keys(M).length > 0 && (l.rows = M), Object.keys(T).length > 0 && (l.classes = T), L = A.querySelectorAll("tfoot tr"), L.length) {
                const O = [];
                for (let W = 0; W < L.length; W++) {
                  let P = [];
                  for (let ce = 0; ce < L[W].children.length; ce++) P.push(L[W].children[ce].textContent);
                  O.push(P);
                }
                Object.keys(O).length > 0 && (l.footers = O);
              }
              if (l.parseTableAutoCellType == 1) {
                const O = [];
                for (let W = 0; W < l.columns.length; W++) {
                  let P = !0, ce = !0;
                  O[W] = [];
                  for (let Z = 0; Z < l.data.length; Z++) {
                    const se = l.data[Z][W];
                    O[W][se] || (O[W][se] = 0), O[W][se]++, se.length > 25 && (P = !1), se.length == 10 && se.substr(4, 1) == "-" && se.substr(7, 1) == "-" || (ce = !1);
                  }
                  const he = Object.keys(O[W]).length;
                  ce ? l.columns[W].type = "calendar" : P == 1 && he > 1 && he <= parseInt(0.1 * l.data.length) && (l.columns[W].type = "dropdown", l.columns[W].source = Object.keys(O[W]));
                }
              }
              return l;
            }
            console.log("Element is not a table");
          };
        }, 911: function(n, g, o) {
          o.d(g, { Dh: function() {
            return s;
          }, ZS: function() {
            return l;
          }, tN: function() {
            return A;
          } });
          var p = o(805), C = o(689), _ = o(530), G = o(910), z = o(94), m = o(657);
          const s = function(a) {
            const h = this;
            if (h.ignoreHistory != 1) {
              const f = ++h.historyIndex;
              h.history = h.history = h.history.slice(0, f + 1), h.history[f] = a;
            }
          }, w = function(a, h) {
            const f = this, d = h.insertBefore ? +h.rowNumber : h.rowNumber + 1;
            if (f.options.search == 1 && f.results && f.results.length != f.rows.length && f.resetSearch(), a == 1) {
              const b = h.numOfRows;
              for (let k = d; k < b + d; k++) f.rows[k].element.parentNode.removeChild(f.rows[k].element);
              f.records.splice(d, b), f.options.data.splice(d, b), f.rows.splice(d, b), m.at.call(f, 1, d, b + d - 1);
            } else {
              const b = h.rowRecords.map((B) => [...B]);
              f.records = (0, C.Hh)(f.records, d, b);
              const k = h.rowData.map((B) => [...B]);
              f.options.data = (0, C.Hh)(f.options.data, d, k), f.rows = (0, C.Hh)(f.rows, d, h.rowNode);
              let M = 0;
              for (let B = d; B < h.numOfRows + d; B++) f.tbody.insertBefore(h.rowNode[M].element, f.tbody.children[B]), M++;
            }
            for (let b = d; b < f.rows.length; b++) f.rows[b].y = b;
            for (let b = d; b < f.records.length; b++) for (let k = 0; k < f.records[b].length; k++) f.records[b][k].y = b;
            f.options.pagination > 0 && f.page(f.pageNumber), _.o8.call(f);
          }, S = function(a, h) {
            const f = this, d = h.insertBefore ? h.columnNumber : h.columnNumber + 1;
            if (a == 1) {
              const b = h.numOfColumns;
              f.options.columns.splice(d, b);
              for (let k = d; k < b + d; k++) f.headers[k].parentNode.removeChild(f.headers[k]), f.cols[k].colElement.parentNode.removeChild(f.cols[k].colElement);
              f.headers.splice(d, b), f.cols.splice(d, b);
              for (let k = 0; k < h.data.length; k++) {
                for (let M = d; M < b + d; M++) f.records[k][M].element.parentNode.removeChild(f.records[k][M].element);
                f.records[k].splice(d, b), f.options.data[k].splice(d, b);
              }
              if (f.options.footers) for (let k = 0; k < f.options.footers.length; k++) f.options.footers[k].splice(d, b);
            } else {
              f.options.columns = (0, C.Hh)(f.options.columns, d, h.columns), f.headers = (0, C.Hh)(f.headers, d, h.headers), f.cols = (0, C.Hh)(f.cols, d, h.cols);
              let b = 0;
              for (let k = d; k < h.numOfColumns + d; k++) f.headerContainer.insertBefore(h.headers[b], f.headerContainer.children[k + 1]), f.colgroupContainer.insertBefore(h.cols[b].colElement, f.colgroupContainer.children[k + 1]), b++;
              for (let k = 0; k < h.data.length; k++) {
                f.options.data[k] = (0, C.Hh)(f.options.data[k], d, h.data[k]), f.records[k] = (0, C.Hh)(f.records[k], d, h.records[k]);
                let M = 0;
                for (let B = d; B < h.numOfColumns + d; B++) f.rows[k].element.insertBefore(h.records[k][M].element, f.rows[k].element.children[B + 1]), M++;
              }
              if (f.options.footers) for (let k = 0; k < f.options.footers.length; k++) f.options.footers[k] = (0, C.Hh)(f.options.footers[k], d, h.footers[k]);
            }
            for (let b = d; b < f.cols.length; b++) f.cols[b].x = b;
            for (let b = 0; b < f.records.length; b++) for (let k = d; k < f.records[b].length; k++) f.records[b][k].x = k;
            if (f.options.nestedHeaders && f.options.nestedHeaders.length > 0 && f.options.nestedHeaders[0] && f.options.nestedHeaders[0][0]) for (let b = 0; b < f.options.nestedHeaders.length; b++) {
              let k;
              k = a == 1 ? parseInt(f.options.nestedHeaders[b][f.options.nestedHeaders[b].length - 1].colspan) - h.numOfColumns : parseInt(f.options.nestedHeaders[b][f.options.nestedHeaders[b].length - 1].colspan) + h.numOfColumns, f.options.nestedHeaders[b][f.options.nestedHeaders[b].length - 1].colspan = k, f.thead.children[b].children[f.thead.children[b].children.length - 1].setAttribute("colspan", k);
            }
            _.o8.call(f);
          }, A = function() {
            const a = this, h = !!a.parent.ignoreEvents, f = !!a.ignoreHistory;
            a.parent.ignoreEvents = !0, a.ignoreHistory = !0;
            const d = [];
            let b;
            if (a.historyIndex >= 0) {
              if (b = a.history[a.historyIndex--], b.action == "insertRow") w.call(a, 1, b);
              else if (b.action == "deleteRow") w.call(a, 0, b);
              else if (b.action == "insertColumn") S.call(a, 1, b);
              else if (b.action == "deleteColumn") S.call(a, 0, b);
              else if (b.action == "moveRow") a.moveRow(b.newValue, b.oldValue);
              else if (b.action == "moveColumn") a.moveColumn(b.newValue, b.oldValue);
              else if (b.action == "setMerge") a.removeMerge(b.column, b.data);
              else if (b.action == "setStyle") a.setStyle(b.oldValue, null, null, 1);
              else if (b.action == "setWidth") a.setWidth(b.column, b.oldValue);
              else if (b.action == "setHeight") a.setHeight(b.row, b.oldValue);
              else if (b.action == "setHeader") a.setHeader(b.column, b.oldValue);
              else if (b.action == "setComments") a.setComments(b.oldValue);
              else if (b.action == "orderBy") {
                let k = [];
                for (let M = 0; M < b.rows.length; M++) k[b.rows[M]] = M;
                z.Th.call(a, b.column, b.order ? 0 : 1), z.iY.call(a, k);
              } else if (b.action == "setValue") {
                for (let k = 0; k < b.records.length; k++) d.push({ x: b.records[k].x, y: b.records[k].y, value: b.records[k].oldValue }), b.oldStyle && a.resetStyle(b.oldStyle);
                a.setValue(d), b.selection && a.updateSelectionFromCoords(b.selection[0], b.selection[1], b.selection[2], b.selection[3]);
              }
            }
            a.parent.ignoreEvents = h, a.ignoreHistory = f, p.A.call(a, "onundo", a, b);
          }, l = function() {
            const a = this, h = !!a.parent.ignoreEvents, f = !!a.ignoreHistory;
            let d;
            if (a.parent.ignoreEvents = !0, a.ignoreHistory = !0, a.historyIndex < a.history.length - 1) {
              if (d = a.history[++a.historyIndex], d.action == "insertRow") w.call(a, 0, d);
              else if (d.action == "deleteRow") w.call(a, 1, d);
              else if (d.action == "insertColumn") S.call(a, 0, d);
              else if (d.action == "deleteColumn") S.call(a, 1, d);
              else if (d.action == "moveRow") a.moveRow(d.oldValue, d.newValue);
              else if (d.action == "moveColumn") a.moveColumn(d.oldValue, d.newValue);
              else if (d.action == "setMerge") G.FU.call(a, d.column, d.colspan, d.rowspan, 1);
              else if (d.action == "setStyle") a.setStyle(d.newValue, null, null, 1);
              else if (d.action == "setWidth") a.setWidth(d.column, d.newValue);
              else if (d.action == "setHeight") a.setHeight(d.row, d.newValue);
              else if (d.action == "setHeader") a.setHeader(d.column, d.newValue);
              else if (d.action == "setComments") a.setComments(d.newValue);
              else if (d.action == "orderBy") z.Th.call(a, d.column, d.order), z.iY.call(a, d.rows);
              else if (d.action == "setValue") {
                a.setValue(d.records);
                for (let b = 0; b < d.records.length; b++) d.oldStyle && a.resetStyle(d.newStyle);
                d.selection && a.updateSelectionFromCoords(d.selection[0], d.selection[1], d.selection[2], d.selection[3]);
              }
            }
            a.parent.ignoreEvents = h, a.ignoreHistory = f, p.A.call(a, "onredo", a, d);
          };
        }, 530: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          __webpack_require__.d(__webpack_exports__, { $O: function() {
            return getWorksheetActive;
          }, $x: function() {
            return parseValue;
          }, C6: function() {
            return showIndex;
          }, Em: function() {
            return executeFormula;
          }, P9: function() {
            return createCell;
          }, Rs: function() {
            return updateScroll;
          }, TI: function() {
            return hideIndex;
          }, Xr: function() {
            return getCellFromCoords;
          }, Y5: function() {
            return fullscreen;
          }, am: function() {
            return updateTable;
          }, dw: function() {
            return isFormula;
          }, eN: function() {
            return getWorksheetInstance;
          }, hG: function() {
            return updateResult;
          }, ju: function() {
            return createNestedHeader;
          }, k9: function() {
            return updateCell;
          }, o8: function() {
            return updateTableReferences;
          }, p9: function() {
            return getLabel;
          }, rS: function() {
            return getMask;
          }, tT: function() {
            return getCell;
          }, xF: function() {
            return updateFormulaChain;
          }, yB: function() {
            return updateFormula;
          } });
          var _dispatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(805), _selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(657), _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(978), _meta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(654), _freeze_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(296), _pagination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(167), _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160), _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
          const updateTable = function() {
            const n = this;
            if (n.options.minSpareRows > 0) {
              let g = 0;
              for (let o = n.rows.length - 1; o >= 0; o--) {
                let p = !1;
                for (let C = 0; C < n.headers.length; C++) n.options.data[o][C] && (p = !0);
                if (p) break;
                g++;
              }
              n.options.minSpareRows - g > 0 && n.insertRow(n.options.minSpareRows - g);
            }
            if (n.options.minSpareCols > 0) {
              let g = 0;
              for (let o = n.headers.length - 1; o >= 0; o--) {
                let p = !1;
                for (let C = 0; C < n.rows.length; C++) n.options.data[C][o] && (p = !0);
                if (p) break;
                g++;
              }
              n.options.minSpareCols - g > 0 && n.insertColumn(n.options.minSpareCols - g);
            }
            n.options.footers && _footer_js__WEBPACK_IMPORTED_MODULE_0__.e.call(n), setTimeout(function() {
              _selection_js__WEBPACK_IMPORTED_MODULE_1__.Aq.call(n);
            }, 0);
          }, parseNumber = function(n, g) {
            const o = g && this.options.columns[g].decimal ? this.options.columns[g].decimal : ".";
            let p = "" + n;
            return p = p.split(o), p[0] = p[0].match(/[+-]?[0-9]/g), p[0] && (p[0] = p[0].join("")), p[1] && (p[1] = p[1].match(/[0-9]*/g).join("")), p[0] && Number.isInteger(Number(p[0])) ? p[1] ? +(p[0] + "." + p[1]) : +(p[0] + ".00") : null;
          }, executeFormula = function(expression, x, y) {
            const obj = this, formulaResults = [], formulaLoopProtection = [], execute = function(expression, x, y) {
              const parentId = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([x, y]);
              if (formulaLoopProtection[parentId]) return console.error("Reference loop detected"), "#ERROR";
              formulaLoopProtection[parentId] = !0;
              const tokensUpdate = function(n) {
                for (let g = 0; g < n.length; g++) {
                  const o = [], p = n[g].split(":"), C = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(p[0], !0), _ = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(p[1], !0);
                  let G, z, m, s;
                  C[0] <= _[0] ? (G = C[0], z = _[0]) : (G = _[0], z = C[0]), C[1] <= _[1] ? (m = C[1], s = _[1]) : (m = _[1], s = C[1]);
                  for (let w = m; w <= s; w++) for (let S = G; S <= z; S++) o.push((0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([S, w]));
                  expression = expression.replace(n[g], o.join(","));
                }
              };
              expression = expression.replace(/\$?([A-Z]+)\$?([0-9]+)/g, "$1$2");
              let tokens = expression.match(/([A-Z]+[0-9]+)\:([A-Z]+[0-9]+)/g);
              if (tokens && tokens.length && tokensUpdate(tokens), tokens = expression.match(/([A-Z]+[0-9]+)/g), tokens && tokens.indexOf(parentId) > -1) return console.error("Self Reference detected"), "#ERROR";
              {
                const formulaExpressions = {};
                if (tokens) {
                  for (let i = 0; i < tokens.length; i++) if (obj.formula[tokens[i]] || (obj.formula[tokens[i]] = []), obj.formula[tokens[i]].indexOf(parentId) < 0 && obj.formula[tokens[i]].push(parentId), eval("typeof(" + tokens[i] + ') == "undefined"')) {
                    const n = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(tokens[i], 1);
                    let g;
                    if (g = obj.options.data[n[1]] !== void 0 && obj.options.data[n[1]][n[0]] !== void 0 ? obj.options.data[n[1]][n[0]] : "", ("" + g).substr(0, 1) == "=" && (formulaResults[tokens[i]] !== void 0 ? g = formulaResults[tokens[i]] : (g = execute(g, n[0], n[1]), formulaResults[tokens[i]] = g)), ("" + g).trim() == "") formulaExpressions[tokens[i]] = null;
                    else if (g == Number(g) && obj.parent.config.autoCasting != 0) formulaExpressions[tokens[i]] = Number(g);
                    else {
                      const o = parseNumber.call(obj, g, n[0]);
                      obj.parent.config.autoCasting != 0 && o ? formulaExpressions[tokens[i]] = o : formulaExpressions[tokens[i]] = '"' + g + '"';
                    }
                  }
                }
                const ret = _dispatch_js__WEBPACK_IMPORTED_MODULE_3__.A.call(obj, "onbeforeformula", obj, expression, x, y);
                if (ret === !1) return expression;
                let res;
                ret && (expression = ret);
                try {
                  res = formula(expression.substr(1), formulaExpressions, x, y, obj), typeof res == "function" && (res = "#ERROR");
                } catch (n) {
                  res = "#ERROR", obj.parent.config.debugFormulas === !0 && console.log(expression.substr(1), formulaExpressions, n);
                }
                return res;
              }
            };
            return execute(expression, x, y);
          }, parseValue = function(n, g, o, p) {
            const C = this;
            ("" + o).substr(0, 1) == "=" && C.parent.config.parseFormulas != 0 && (o = executeFormula.call(C, o, n, g));
            const _ = C.options.columns && C.options.columns[n];
            if (_ && !isFormula(o)) {
              let G = null;
              if (G = getMask(_)) {
                o && o == Number(o) && (o = Number(o));
                let z = jSuites.mask.render(o, G, !0);
                if (p && G.mask) {
                  const m = G.mask.split(";");
                  m[1] && (m[1].match(new RegExp("\\[Red\\]", "gi")) && (o < 0 ? p.classList.add("red") : p.classList.remove("red")), m[1].match(new RegExp("\\(", "gi")) && o < 0 && (z = "(" + z + ")"));
                }
                z && (o = z);
              }
            }
            return o;
          }, getDropDownValue = function(n, g) {
            const o = this, p = [];
            if (o.options.columns && o.options.columns[n] && o.options.columns[n].source) {
              const C = [], _ = o.options.columns[n].source;
              for (let z = 0; z < _.length; z++) typeof _[z] == "object" ? C[_[z].id] = _[z].name : C[_[z]] = _[z];
              const G = Array.isArray(g) ? g : ("" + g).split(";");
              for (let z = 0; z < G.length; z++) typeof G[z] == "object" ? p.push(C[G[z].id]) : C[G[z]] && p.push(C[G[z]]);
            } else console.error("Invalid column");
            return p.length > 0 ? p.join("; ") : "";
          }, validDate = function(n) {
            return (n = "" + n).substr(4, 1) == "-" && n.substr(7, 1) == "-" || (n = n.split("-"))[0].length == 4 && n[0] == Number(n[0]) && n[1].length == 2 && n[1] == Number(n[1]);
          }, stripScript = function(n) {
            const g = new Option();
            g.innerHTML = n;
            let o = null;
            for (n = g.getElementsByTagName("script"); o = n[0]; ) o.parentNode.removeChild(o);
            return g.innerHTML;
          }, createCell = function(n, g, o) {
            const p = this;
            let C = document.createElement("td");
            if (C.setAttribute("data-x", n), C.setAttribute("data-y", g), p.headers[n].style.display === "none" && (C.style.display = "none"), ("" + o).substr(0, 1) == "=" && p.options.secureFormulas == 1) {
              const G = secureFormula(o);
              G != o && (o = G);
            }
            if (p.options.columns && p.options.columns[n] && typeof p.options.columns[n].type == "object") p.parent.config.parseHTML === !0 ? C.innerHTML = o : C.textContent = o, typeof p.options.columns[n].type.createCell == "function" && p.options.columns[n].type.createCell(C, o, parseInt(n), parseInt(g), p, p.options.columns[n]);
            else if (p.options.columns && p.options.columns[n] && p.options.columns[n].type == "hidden") C.style.display = "none", C.textContent = o;
            else if (p.options.columns && p.options.columns[n] && (p.options.columns[n].type == "checkbox" || p.options.columns[n].type == "radio")) {
              const G = document.createElement("input");
              G.type = p.options.columns[n].type, G.name = "c" + n, G.checked = o == 1 || o == 1 || o == "true", G.onclick = function() {
                p.setValue(C, this.checked);
              }, p.options.columns[n].readOnly != 1 && p.options.editable != 0 || G.setAttribute("disabled", "disabled"), C.appendChild(G), p.options.data[g][n] = G.checked;
            } else if (p.options.columns && p.options.columns[n] && p.options.columns[n].type == "calendar") {
              let G = null;
              if (!validDate(o)) {
                const z = jSuites.calendar.extractDateFromString(o, p.options.columns[n].options && p.options.columns[n].options.format || "YYYY-MM-DD");
                z && (G = z);
              }
              C.textContent = jSuites.calendar.getDateString(G || o, p.options.columns[n].options && p.options.columns[n].options.format);
            } else if (p.options.columns && p.options.columns[n] && p.options.columns[n].type == "dropdown") C.classList.add("jss_dropdown"), C.textContent = getDropDownValue.call(p, n, o);
            else if (p.options.columns && p.options.columns[n] && p.options.columns[n].type == "color") if (p.options.columns[n].render == "square") {
              const G = document.createElement("div");
              G.className = "color", G.style.backgroundColor = o, C.appendChild(G);
            } else C.style.color = o, C.textContent = o;
            else if (p.options.columns && p.options.columns[n] && p.options.columns[n].type == "image") {
              if (o && o.substr(0, 10) == "data:image") {
                const G = document.createElement("img");
                G.src = o, C.appendChild(G);
              }
            } else p.options.columns && p.options.columns[n] && p.options.columns[n].type == "html" || p.parent.config.parseHTML === !0 ? C.innerHTML = stripScript(parseValue.call(this, n, g, o, C)) : C.textContent = parseValue.call(this, n, g, o, C);
            p.options.columns && p.options.columns[n] && p.options.columns[n].readOnly == 1 && (C.className = "readonly");
            const _ = p.options.columns && p.options.columns[n] && p.options.columns[n].align || p.options.defaultColAlign || "center";
            return C.style.textAlign = _, p.options.columns && p.options.columns[n] && p.options.columns[n].wordWrap == 0 || !(p.options.wordWrap == 1 || p.options.columns && p.options.columns[n] && p.options.columns[n].wordWrap == 1 || C.innerHTML.length > 200) || (C.style.whiteSpace = "pre-wrap"), n > 0 && this.options.textOverflow == 1 && (o || C.innerHTML ? p.records[g][n - 1].element.style.overflow = "hidden" : n == p.options.columns.length - 1 && (C.style.overflow = "hidden")), _dispatch_js__WEBPACK_IMPORTED_MODULE_3__.A.call(p, "oncreatecell", p, C, n, g, o), C;
          }, updateCell = function(n, g, o, p) {
            const C = this;
            let _;
            if (C.records[g][n].element.classList.contains("readonly") != 1 || p) {
              if (("" + o).substr(0, 1) == "=" && C.options.secureFormulas == 1) {
                const m = secureFormula(o);
                m != o && (o = m);
              }
              const G = _dispatch_js__WEBPACK_IMPORTED_MODULE_3__.A.call(C, "onbeforechange", C, C.records[g][n].element, n, g, o);
              if (G != null && (o = G), C.options.columns && C.options.columns[n] && typeof C.options.columns[n].type == "object" && typeof C.options.columns[n].type.updateCell == "function") {
                const m = C.options.columns[n].type.updateCell(C.records[g][n].element, o, parseInt(n), parseInt(g), C, C.options.columns[n]);
                m !== void 0 && (o = m);
              }
              _ = { x: n, y: g, col: n, row: g, value: o, oldValue: C.options.data[g][n] };
              let z = C.options.columns && C.options.columns[n] && typeof C.options.columns[n].type == "object" ? C.options.columns[n].type : null;
              if (z) C.options.data[g][n] = o, typeof z.setValue == "function" && z.setValue(C.records[g][n].element, o);
              else if (C.options.columns && C.options.columns[n] && (C.options.columns[n].type == "checkbox" || C.options.columns[n].type == "radio")) {
                if (C.options.columns[n].type == "radio") for (let m = 0; m < C.options.data.length; m++) C.options.data[m][n] = !1;
                C.records[g][n].element.children[0].checked = o == 1 || o == 1 || o == "true" || o == "TRUE", C.options.data[g][n] = C.records[g][n].element.children[0].checked;
              } else if (C.options.columns && C.options.columns[n] && C.options.columns[n].type == "dropdown") C.options.data[g][n] = o, C.records[g][n].element.textContent = getDropDownValue.call(C, n, o);
              else if (C.options.columns && C.options.columns[n] && C.options.columns[n].type == "calendar") {
                let m = null;
                if (!validDate(o)) {
                  const s = jSuites.calendar.extractDateFromString(o, C.options.columns[n].options && C.options.columns[n].options.format || "YYYY-MM-DD");
                  s && (m = s);
                }
                C.options.data[g][n] = o, C.records[g][n].element.textContent = jSuites.calendar.getDateString(m || o, C.options.columns[n].options && C.options.columns[n].options.format);
              } else if (C.options.columns && C.options.columns[n] && C.options.columns[n].type == "color") if (C.options.data[g][n] = o, C.options.columns[n].render == "square") {
                const m = document.createElement("div");
                m.className = "color", m.style.backgroundColor = o, C.records[g][n].element.textContent = "", C.records[g][n].element.appendChild(m);
              } else C.records[g][n].element.style.color = o, C.records[g][n].element.textContent = o;
              else if (C.options.columns && C.options.columns[n] && C.options.columns[n].type == "image") {
                if (o = "" + o, C.options.data[g][n] = o, C.records[g][n].element.innerHTML = "", o && o.substr(0, 10) == "data:image") {
                  const m = document.createElement("img");
                  m.src = o, C.records[g][n].element.appendChild(m);
                }
              } else C.options.data[g][n] = o, C.options.columns && C.options.columns[n] && C.options.columns[n].type == "html" ? C.records[g][n].element.innerHTML = stripScript(parseValue.call(C, n, g, o)) : C.parent.config.parseHTML === !0 ? C.records[g][n].element.innerHTML = stripScript(parseValue.call(C, n, g, o, C.records[g][n].element)) : C.records[g][n].element.textContent = parseValue.call(C, n, g, o, C.records[g][n].element), C.options.columns && C.options.columns[n] && C.options.columns[n].wordWrap == 0 || !(C.options.wordWrap == 1 || C.options.columns && C.options.columns[n] && C.options.columns[n].wordWrap == 1 || C.records[g][n].element.innerHTML.length > 200) ? C.records[g][n].element.style.whiteSpace = "" : C.records[g][n].element.style.whiteSpace = "pre-wrap";
              n > 0 && (C.records[g][n - 1].element.style.overflow = o ? "hidden" : ""), C.options.columns && C.options.columns[n] && typeof C.options.columns[n].render == "function" && C.options.columns[n].render(C.records[g] && C.records[g][n] ? C.records[g][n].element : null, o, parseInt(n), parseInt(g), C, C.options.columns[n]), _dispatch_js__WEBPACK_IMPORTED_MODULE_3__.A.call(C, "onchange", C, C.records[g] && C.records[g][n] ? C.records[g][n].element : null, n, g, o, _.oldValue);
            } else _ = { x: n, y: g, col: n, row: g };
            return _;
          }, isFormula = function(n) {
            const g = ("" + n)[0];
            return g == "=" || g == "#";
          }, getMask = function(n) {
            if (n.format || n.mask || n.locale) {
              const g = {};
              return n.mask ? g.mask = n.mask : n.format ? g.mask = n.format : (g.locale = n.locale, g.options = n.options), n.decimal && (g.options || (g.options = {}), g.options = { decimal: n.decimal }), g;
            }
            return null;
          }, secureFormula = function(n) {
            let g = "", o = 0;
            for (let p = 0; p < n.length; p++) n[p] == '"' && (o = o == 0 ? 1 : 0), g += o == 1 ? n[p] : n[p].toUpperCase();
            return g;
          };
          let chainLoopProtection = [];
          const updateFormulaChain = function(n, g, o) {
            const p = this, C = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([n, g]);
            if (p.formula[C] && p.formula[C].length > 0) if (chainLoopProtection[C]) p.records[g][n].element.innerHTML = "#ERROR", p.formula[C] = "";
            else {
              chainLoopProtection[C] = !0;
              for (let _ = 0; _ < p.formula[C].length; _++) {
                const G = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(p.formula[C][_], !0), z = "" + p.options.data[G[1]][G[0]];
                z.substr(0, 1) == "=" ? o.push(updateCell.call(p, G[0], G[1], z, !0)) : Object.keys(p.formula)[_] = null, updateFormulaChain.call(p, G[0], G[1], o);
              }
            }
            chainLoopProtection = [];
          }, updateFormula = function(n, g) {
            const o = /[A-Z]/, p = /[0-9]/;
            let C = "", _ = null, G = null, z = "";
            for (let m = 0; m < n.length; m++) o.exec(n[m]) ? (_ = 1, G = 0, z += n[m]) : p.exec(n[m]) ? (G = _ ? 1 : 0, z += n[m]) : (_ && G && (z = g[z] ? g[z] : z), C += z, C += n[m], _ = 0, G = 0, z = "");
            return z && (_ && G && (z = g[z] ? g[z] : z), C += z), C;
          }, updateFormulas = function(n) {
            const g = this;
            for (let C = 0; C < g.options.data.length; C++) for (let _ = 0; _ < g.options.data[0].length; _++) {
              const G = "" + g.options.data[C][_];
              if (G.substr(0, 1) == "=") {
                const z = updateFormula(G, n);
                z != G && (g.options.data[C][_] = z);
              }
            }
            const o = [], p = Object.keys(g.formula);
            for (let C = 0; C < p.length; C++) {
              let _ = p[C];
              const G = g.formula[_];
              n[_] && (_ = n[_]), o[_] = [];
              for (let z = 0; z < G.length; z++) {
                let m = G[z];
                n[m] && (m = n[m]), o[_].push(m);
              }
            }
            g.formula = o;
          }, updateTableReferences = function() {
            const n = this;
            if (n.skipUpdateTableReferences) return;
            for (let _ = 0; _ < n.headers.length; _++) n.headers[_].getAttribute("data-x") != _ && (n.headers[_].setAttribute("data-x", _), n.headers[_].getAttribute("title") || (n.headers[_].innerHTML = (0, _helpers_js__WEBPACK_IMPORTED_MODULE_4__.getColumnName)(_)));
            for (let _ = 0; _ < n.rows.length; _++) n.rows[_] && n.rows[_].element.getAttribute("data-y") != _ && (n.rows[_].element.setAttribute("data-y", _), n.rows[_].element.children[0].setAttribute("data-y", _), n.rows[_].element.children[0].innerHTML = _ + 1);
            const g = [], o = [], p = function(_, G, z, m) {
              if (_ != z && n.records[m][z].element.setAttribute("data-x", z), G != m && n.records[m][z].element.setAttribute("data-y", m), _ != z || G != m) {
                const s = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([_, G]), w = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([z, m]);
                g[s] = w;
              }
            };
            for (let _ = 0; _ < n.records.length; _++) for (let G = 0; G < n.records[0].length; G++) if (n.records[_][G]) {
              const z = n.records[_][G].element.getAttribute("data-x"), m = n.records[_][G].element.getAttribute("data-y");
              if (n.records[_][G].element.getAttribute("data-merged")) {
                const s = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([z, m]), w = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.t3)([G, _]);
                if (o[s] == null) if (s == w) o[s] = !1;
                else {
                  const S = parseInt(G - z), A = parseInt(_ - m);
                  o[s] = [w, S, A];
                }
              } else p(z, m, G, _);
            }
            const C = Object.keys(o);
            if (C.length) {
              for (let _ = 0; _ < C.length; _++) if (o[C[_]]) {
                const G = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(C[_], !0);
                let z = G[0], m = G[1];
                p(z, m, z + o[C[_]][1], m + o[C[_]][2]);
                const s = C[_], w = o[C[_]][0];
                for (let S = 0; S < n.options.mergeCells[s][2].length; S++) z = parseInt(n.options.mergeCells[s][2][S].getAttribute("data-x")), m = parseInt(n.options.mergeCells[s][2][S].getAttribute("data-y")), n.options.mergeCells[s][2][S].setAttribute("data-x", z + o[C[_]][1]), n.options.mergeCells[s][2][S].setAttribute("data-y", m + o[C[_]][2]);
                n.options.mergeCells[w] = n.options.mergeCells[s], delete n.options.mergeCells[s];
              }
            }
            updateFormulas.call(n, g), _meta_js__WEBPACK_IMPORTED_MODULE_5__.hs.call(n, g), _selection_js__WEBPACK_IMPORTED_MODULE_1__.G9.call(n), updateTable.call(n);
          }, updateScroll = function(n) {
            const g = this, o = g.content.getBoundingClientRect(), p = o.left, C = o.top, _ = o.width, G = o.height, z = g.records[g.selectedCell[3]][g.selectedCell[2]].element.getBoundingClientRect(), m = z.left, s = z.top, w = z.width, S = z.height;
            let A, l;
            n == 0 || n == 1 ? (A = m - p + g.content.scrollLeft, l = s - C + g.content.scrollTop - 2) : (A = m - p + g.content.scrollLeft + w, l = s - C + g.content.scrollTop + S), l > g.content.scrollTop + 30 && l < g.content.scrollTop + G || (l < g.content.scrollTop + 30 ? g.content.scrollTop = l - S : g.content.scrollTop = l - (G - 2));
            const a = _freeze_js__WEBPACK_IMPORTED_MODULE_6__.w.call(g);
            A > g.content.scrollLeft + a && A < g.content.scrollLeft + _ || (A < g.content.scrollLeft + 30 ? (g.content.scrollLeft = A, g.content.scrollLeft < 50 && (g.content.scrollLeft = 0)) : A < g.content.scrollLeft + a ? g.content.scrollLeft = A - a - 1 : g.content.scrollLeft = A - (_ - 20));
          }, updateResult = function() {
            const n = this;
            let g = 0, o = 0;
            for (g = n.options.lazyLoading == 1 ? 100 : n.options.pagination > 0 ? n.options.pagination : n.results ? n.results.length : n.rows.length; n.tbody.firstChild; ) n.tbody.removeChild(n.tbody.firstChild);
            for (let p = 0; p < n.rows.length; p++) !n.results || n.results.indexOf(p) > -1 ? (o < g && (n.tbody.appendChild(n.rows[p].element), o++), n.rows[p].element.style.display = "") : n.rows[p].element.style.display = "none";
            return n.options.pagination > 0 && _pagination_js__WEBPACK_IMPORTED_MODULE_7__.IV.call(n), _selection_js__WEBPACK_IMPORTED_MODULE_1__.Aq.call(n), g;
          }, getCell = function(n, g) {
            if (typeof n == "string") {
              const o = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(n, !0);
              n = o[0], g = o[1];
            }
            return this.records[g][n].element;
          }, getCellFromCoords = function(n, g) {
            return this.records[g][n].element;
          }, getLabel = function(n, g) {
            if (typeof n == "string") {
              const o = (0, _internalHelpers_js__WEBPACK_IMPORTED_MODULE_2__.vu)(n, !0);
              n = o[0], g = o[1];
            }
            return this.records[g][n].element.innerHTML;
          }, fullscreen = function(n) {
            const g = this;
            n == null && (n = !g.config.fullscreen), g.config.fullscreen != n && (g.config.fullscreen = n, n == 1 ? g.element.classList.add("fullscreen") : g.element.classList.remove("fullscreen"));
          }, showIndex = function() {
            this.table.classList.remove("jss_hidden_index");
          }, hideIndex = function() {
            this.table.classList.add("jss_hidden_index");
          }, createNestedHeader = function(n) {
            const g = this, o = document.createElement("tr");
            o.classList.add("jss_nested");
            const p = document.createElement("td");
            p.classList.add("jss_selectall"), o.appendChild(p), n.element = o;
            let C = 0;
            for (let _ = 0; _ < n.length; _++) {
              n[_].colspan || (n[_].colspan = 1), n[_].title || (n[_].title = ""), n[_].id || (n[_].id = "");
              let G = n[_].colspan;
              const z = [];
              for (let s = 0; s < G; s++) g.options.columns[C] && g.options.columns[C].type == "hidden" && G++, z.push(C), C++;
              const m = document.createElement("td");
              m.setAttribute("data-column", z.join(",")), m.setAttribute("colspan", n[_].colspan), m.setAttribute("align", n[_].align || "center"), m.setAttribute("id", n[_].id), m.textContent = n[_].title, o.appendChild(m);
            }
            return o;
          }, getWorksheetActive = function() {
            const n = this.parent ? this.parent : this;
            return n.element.tabs ? n.element.tabs.getActive() : 0;
          }, getWorksheetInstance = function(n) {
            const g = n !== void 0 ? n : getWorksheetActive.call(this);
            return this.worksheets[g];
          };
        }, 689: function(n, g, o) {
          o.d(g, { Hh: function() {
            return C;
          }, t3: function() {
            return G;
          }, vu: function() {
            return _;
          } });
          var p = o(978);
          const C = function(z, m, s) {
            if (m <= z.length) return z.slice(0, m).concat(s).concat(z.slice(m));
            const w = z.slice(0, z.length);
            for (; m > w.length; ) w.push(void 0);
            return w.concat(s);
          }, _ = function(z, m) {
            const s = /^[a-zA-Z]+/.exec(z);
            if (s) {
              let w = 0;
              for (let A = 0; A < s[0].length; A++) w += parseInt(s[0].charCodeAt(A) - 64) * Math.pow(26, s[0].length - 1 - A);
              w--, w < 0 && (w = 0);
              let S = parseInt(/[0-9]+$/.exec(z));
              S > 0 && S--, z = m == 1 ? [w, S] : w + "-" + S;
            }
            return z;
          }, G = function(z) {
            return Array.isArray(z) || (z = z.split("-")), (0, p.getColumnName)(parseInt(z[0])) + (parseInt(z[1]) + 1);
          };
        }, 497: function(n, g, o) {
          o.d(g, { AG: function() {
            return C;
          }, G_: function() {
            return _;
          }, p6: function() {
            return G;
          }, wu: function() {
            return p;
          } });
          const p = function(z) {
            const m = this;
            let s;
            s = m.options.search != 1 && m.options.filters != 1 || !m.results ? m.rows : m.results;
            const w = 100;
            z != null && z != -1 || (z = Math.ceil(s.length / w) - 1);
            let S = z * w, A = z * w + w;
            A > s.length && (A = s.length), S = A - 100, S < 0 && (S = 0);
            for (let l = S; l < A; l++) m.options.search != 1 && m.options.filters != 1 || !m.results ? m.tbody.appendChild(m.rows[l].element) : m.tbody.appendChild(m.rows[s[l]].element), m.tbody.children.length > w && m.tbody.removeChild(m.tbody.firstChild);
          }, C = function() {
            const z = this;
            if (z.selectedCell) {
              const m = parseInt(z.tbody.firstChild.getAttribute("data-y")) / 100, s = parseInt(z.selectedCell[3] / 100), w = parseInt(z.rows.length / 100);
              if (m != s && s <= w && !Array.prototype.indexOf.call(z.tbody.children, z.rows[z.selectedCell[3]].element)) return z.loadPage(s), !0;
            }
            return !1;
          }, _ = function() {
            const z = this;
            let m;
            m = z.options.search != 1 && z.options.filters != 1 || !z.results ? z.rows : z.results;
            let s = 0;
            if (m.length > 100) {
              let w = parseInt(z.tbody.firstChild.getAttribute("data-y"));
              if (z.options.search != 1 && z.options.filters != 1 || !z.results || (w = m.indexOf(w)), w > 0) for (let S = 0; S < 30; S++) w -= 1, w > -1 && (z.options.search != 1 && z.options.filters != 1 || !z.results ? z.tbody.insertBefore(z.rows[w].element, z.tbody.firstChild) : z.tbody.insertBefore(z.rows[m[w]].element, z.tbody.firstChild), z.tbody.children.length > 100 && (z.tbody.removeChild(z.tbody.lastChild), s = 1));
            }
            return s;
          }, G = function() {
            const z = this;
            let m;
            m = z.options.search != 1 && z.options.filters != 1 || !z.results ? z.rows : z.results;
            let s = 0;
            if (m.length > 100) {
              let w = parseInt(z.tbody.lastChild.getAttribute("data-y"));
              if (z.options.search != 1 && z.options.filters != 1 || !z.results || (w = m.indexOf(w)), w < z.rows.length - 1) for (let S = 0; S <= 30; S++) w < m.length && (z.options.search != 1 && z.options.filters != 1 || !z.results ? z.tbody.appendChild(z.rows[w].element) : z.tbody.appendChild(z.rows[m[w]].element), z.tbody.children.length > 100 && (z.tbody.removeChild(z.tbody.firstChild), s = 1)), w += 1;
            }
            return s;
          };
        }, 910: function(n, g, o) {
          o.d(g, { D0: function() {
            return s;
          }, FU: function() {
            return S;
          }, Lt: function() {
            return m;
          }, VP: function() {
            return l;
          }, Zp: function() {
            return A;
          }, fd: function() {
            return w;
          } });
          var p = o(689), C = o(530), _ = o(911), G = o(805), z = o(657);
          const m = function(a, h) {
            const f = this, d = [];
            if (f.options.mergeCells) {
              const b = Object.keys(f.options.mergeCells);
              for (let k = 0; k < b.length; k++) {
                const M = (0, p.vu)(b[k], !0), B = f.options.mergeCells[b[k]][0], T = M[0], L = M[0] + (B > 1 ? B - 1 : 0);
                h == null ? T <= a && L >= a && d.push(b[k]) : h ? T < a && L >= a && d.push(b[k]) : T <= a && L > a && d.push(b[k]);
              }
            }
            return d;
          }, s = function(a, h) {
            const f = this, d = [];
            if (f.options.mergeCells) {
              const b = Object.keys(f.options.mergeCells);
              for (let k = 0; k < b.length; k++) {
                const M = (0, p.vu)(b[k], !0), B = f.options.mergeCells[b[k]][1], T = M[1], L = M[1] + (B > 1 ? B - 1 : 0);
                h == null ? T <= a && L >= a && d.push(b[k]) : h ? T < a && L >= a && d.push(b[k]) : T <= a && L > a && d.push(b[k]);
              }
            }
            return d;
          }, w = function(a) {
            const h = this;
            let f = {};
            if (a) f = h.options.mergeCells && h.options.mergeCells[a] ? [h.options.mergeCells[a][0], h.options.mergeCells[a][1]] : null;
            else if (h.options.mergeCells) {
              h.options.mergeCells;
              const d = Object.keys(h.options.mergeCells);
              for (let b = 0; b < d.length; b++) f[d[b]] = [h.options.mergeCells[d[b]][0], h.options.mergeCells[d[b]][1]];
            }
            return f;
          }, S = function(a, h, f, d) {
            const b = this;
            let k = !1;
            if (a) {
              if (typeof a != "string") return null;
            } else {
              if (!b.highlighted.length) return alert(jSuites.translate("No cells selected")), null;
              {
                const B = parseInt(b.highlighted[0].getAttribute("data-x")), T = parseInt(b.highlighted[0].getAttribute("data-y")), L = parseInt(b.highlighted[b.highlighted.length - 1].getAttribute("data-x")), O = parseInt(b.highlighted[b.highlighted.length - 1].getAttribute("data-y"));
                a = (0, p.t3)([B, T]), h = L - B + 1, f = O - T + 1;
              }
            }
            const M = (0, p.vu)(a, !0);
            if (b.options.mergeCells && b.options.mergeCells[a]) b.records[M[1]][M[0]].element.getAttribute("data-merged") && (k = "Cell already merged");
            else if ((!h || h < 2) && (!f || f < 2)) k = "Invalid merged properties";
            else for (let B = M[1]; B < M[1] + f; B++) for (let T = M[0]; T < M[0] + h; T++) (0, p.t3)([T, B]), b.records[B][T].element.getAttribute("data-merged") && (k = "There is a conflict with another merged cell");
            if (k) alert(jSuites.translate(k));
            else {
              h > 1 ? b.records[M[1]][M[0]].element.setAttribute("colspan", h) : h = 1, f > 1 ? b.records[M[1]][M[0]].element.setAttribute("rowspan", f) : f = 1, b.options.mergeCells || (b.options.mergeCells = {}), b.options.mergeCells[a] = [h, f, []], b.records[M[1]][M[0]].element.setAttribute("data-merged", "true"), b.records[M[1]][M[0]].element.style.overflow = "hidden";
              const B = [];
              for (let T = M[1]; T < M[1] + f; T++) for (let L = M[0]; L < M[0] + h; L++) M[0] == L && M[1] == T || (B.push(b.options.data[T][L]), C.k9.call(b, L, T, "", !0), b.options.mergeCells[a][2].push(b.records[T][L].element), b.records[T][L].element.style.display = "none", b.records[T][L].element = b.records[M[1]][M[0]].element);
              z.c6.call(b, b.records[M[1]][M[0]].element), d || (_.Dh.call(b, { action: "setMerge", column: a, colspan: h, rowspan: f, data: B }), G.A.call(b, "onmerge", b, { [a]: [h, f] }));
            }
          }, A = function(a, h, f) {
            const d = this;
            if (d.options.mergeCells && d.options.mergeCells[a]) {
              const b = (0, p.vu)(a, !0);
              d.records[b[1]][b[0]].element.removeAttribute("colspan"), d.records[b[1]][b[0]].element.removeAttribute("rowspan"), d.records[b[1]][b[0]].element.removeAttribute("data-merged");
              const k = d.options.mergeCells[a];
              let M, B, T = 0;
              for (M = 0; M < k[1]; M++) for (B = 0; B < k[0]; B++) (M > 0 || B > 0) && (d.records[b[1] + M][b[0] + B].element = k[2][T], d.records[b[1] + M][b[0] + B].element.style.display = "", h && h[T] && C.k9.call(d, b[0] + B, b[1] + M, h[T]), T++);
              z.c6.call(d, d.records[b[1]][b[0]].element, d.records[b[1] + M - 1][b[0] + B - 1].element), f || delete d.options.mergeCells[a];
            }
          }, l = function(a) {
            const h = this;
            if (h.options.mergeCells) {
              h.options.mergeCells;
              const f = Object.keys(h.options.mergeCells);
              for (let d = 0; d < f.length; d++) A.call(h, f[d], null, a);
            }
          };
        }, 654: function(n, g, o) {
          o.d(g, { IQ: function() {
            return C;
          }, hs: function() {
            return _;
          }, iZ: function() {
            return G;
          } });
          var p = o(805);
          const C = function(z, m) {
            const s = this;
            return z ? m ? s.options.meta && s.options.meta[z] && s.options.meta[z][m] ? s.options.meta[z][m] : null : s.options.meta && s.options.meta[z] ? s.options.meta[z] : null : s.options.meta;
          }, _ = function(z) {
            const m = this;
            if (m.options.meta) {
              const s = {}, w = Object.keys(m.options.meta);
              for (let S = 0; S < w.length; S++) z[w[S]] ? s[z[w[S]]] = m.options.meta[w[S]] : s[w[S]] = m.options.meta[w[S]];
              m.options.meta = s;
            }
          }, G = function(z, m, s) {
            const w = this;
            if (w.options.meta || (w.options.meta = {}), m && s) w.options.meta[z] || (w.options.meta[z] = {}), w.options.meta[z][m] = s, p.A.call(w, "onchangemeta", w, { [z]: { [m]: s } });
            else {
              const S = Object.keys(z);
              for (let A = 0; A < S.length; A++) {
                w.options.meta[S[A]] || (w.options.meta[S[A]] = {});
                const l = Object.keys(z[S[A]]);
                for (let a = 0; a < l.length; a++) w.options.meta[S[A]][l[a]] = z[S[A]][l[a]];
              }
              p.A.call(w, "onchangemeta", w, z);
            }
          };
        }, 94: function(n, g, o) {
          o.d(g, { My: function() {
            return w;
          }, Th: function() {
            return m;
          }, iY: function() {
            return s;
          } });
          var p = o(911), C = o(805), _ = o(530), G = o(497), z = o(829);
          const m = function(S, A) {
            const l = this;
            for (let a = 0; a < l.headers.length; a++) l.headers[a].classList.remove("arrow-up"), l.headers[a].classList.remove("arrow-down");
            A ? l.headers[S].classList.add("arrow-up") : l.headers[S].classList.add("arrow-down");
          }, s = function(S) {
            const A = this;
            let l = [];
            for (let a = 0; a < S.length; a++) l[a] = A.options.data[S[a]];
            A.options.data = l, l = [];
            for (let a = 0; a < S.length; a++) {
              l[a] = A.records[S[a]];
              for (let h = 0; h < l[a].length; h++) l[a][h].y = a;
            }
            A.records = l, l = [];
            for (let a = 0; a < S.length; a++) l[a] = A.rows[S[a]], l[a].y = a;
            if (A.rows = l, _.o8.call(A), A.results && A.results.length) A.searchInput.value ? A.search(A.searchInput.value) : z.F8.call(A);
            else if (A.results = null, A.pageNumber = 0, A.options.pagination > 0) A.page(0);
            else if (A.options.lazyLoading == 1) G.wu.call(A, 0);
            else for (let a = 0; a < A.rows.length; a++) A.tbody.appendChild(A.rows[a].element);
          }, w = function(S, A) {
            const l = this;
            if (S >= 0) {
              if (l.options.mergeCells && Object.keys(l.options.mergeCells).length > 0) {
                if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
                l.destroyMerge();
              }
              A = A == null ? l.headers[S].classList.contains("arrow-down") ? 1 : 0 : A ? 1 : 0;
              let a = [];
              if (l.options.columns && l.options.columns[S] && (l.options.columns[S].type == "number" || l.options.columns[S].type == "numeric" || l.options.columns[S].type == "percentage" || l.options.columns[S].type == "autonumber" || l.options.columns[S].type == "color")) for (let f = 0; f < l.options.data.length; f++) a[f] = [f, Number(l.options.data[f][S])];
              else if (l.options.columns && l.options.columns[S] && (l.options.columns[S].type == "calendar" || l.options.columns[S].type == "checkbox" || l.options.columns[S].type == "radio")) for (let f = 0; f < l.options.data.length; f++) a[f] = [f, l.options.data[f][S]];
              else for (let f = 0; f < l.options.data.length; f++) a[f] = [f, l.records[f][S].element.textContent.toLowerCase()];
              typeof l.parent.config.sorting != "function" && (l.parent.config.sorting = function(f) {
                return function(d, b) {
                  const k = d[1], M = b[1];
                  return f ? k === "" && M !== "" ? 1 : k !== "" && M === "" || k > M ? -1 : k < M ? 1 : 0 : k === "" && M !== "" ? 1 : k !== "" && M === "" ? -1 : k > M ? 1 : k < M ? -1 : 0;
                };
              }), a = a.sort(l.parent.config.sorting(A));
              const h = [];
              for (let f = 0; f < a.length; f++) h[f] = a[f][0];
              return p.Dh.call(l, { action: "orderBy", rows: h, column: S, order: A }), m.call(l, S, A), s.call(l, h), C.A.call(l, "onsort", l, S, A, h.map((f) => f)), !0;
            }
          };
        }, 167: function(n, g, o) {
          o.d(g, { $f: function() {
            return m;
          }, IV: function() {
            return G;
          }, MY: function() {
            return z;
          }, ho: function() {
            return _;
          } });
          var p = o(805), C = o(657);
          const _ = function(s) {
            const w = this;
            return w.options.search != 1 && w.options.filters != 1 || !w.results || (s = w.results.indexOf(s)), Math.ceil((parseInt(s) + 1) / parseInt(w.options.pagination)) - 1;
          }, G = function() {
            const s = this;
            if (s.pagination.children[0].innerHTML = "", s.pagination.children[1].innerHTML = "", s.options.pagination) {
              let w;
              if (w = s.options.search != 1 && s.options.filters != 1 || !s.results ? s.rows.length : s.results.length, w) {
                const S = Math.ceil(w / s.options.pagination);
                let A, l;
                if (s.pageNumber < 6 ? (A = 1, l = S < 10 ? S : 10) : S - s.pageNumber < 5 ? (A = S - 9, l = S, A < 1 && (A = 1)) : (A = s.pageNumber - 4, l = s.pageNumber + 5), A > 1) {
                  const h = document.createElement("div");
                  h.className = "jss_page", h.innerHTML = "<", h.title = 1, s.pagination.children[1].appendChild(h);
                }
                for (let h = A; h <= l; h++) {
                  const f = document.createElement("div");
                  f.className = "jss_page", f.innerHTML = h, s.pagination.children[1].appendChild(f), s.pageNumber == h - 1 && f.classList.add("jss_page_selected");
                }
                if (l < S) {
                  const h = document.createElement("div");
                  h.className = "jss_page", h.innerHTML = ">", h.title = S, s.pagination.children[1].appendChild(h);
                }
                const a = function(h) {
                  const f = Array.prototype.slice.call(arguments, 1);
                  return h.replace(/{(\d+)}/g, function(d, b) {
                    return f[b] !== void 0 ? f[b] : d;
                  });
                };
                s.pagination.children[0].innerHTML = a(jSuites.translate("Showing page {0} of {1} entries"), s.pageNumber + 1, S);
              } else s.pagination.children[0].innerHTML = jSuites.translate("No records found");
            }
          }, z = function(s) {
            const w = this, S = w.pageNumber;
            let A;
            A = w.options.search != 1 && w.options.filters != 1 || !w.results ? w.rows : w.results;
            const l = parseInt(w.options.pagination);
            s != null && s != -1 || (s = Math.ceil(A.length / l) - 1), w.pageNumber = s;
            let a = s * l, h = s * l + l;
            for (h > A.length && (h = A.length), a < 0 && (a = 0); w.tbody.firstChild; ) w.tbody.removeChild(w.tbody.firstChild);
            for (let f = a; f < h; f++) w.options.search != 1 && w.options.filters != 1 || !w.results ? w.tbody.appendChild(w.rows[f].element) : w.tbody.appendChild(w.rows[A[f]].element);
            w.options.pagination > 0 && G.call(w), C.Aq.call(w), p.A.call(w, "onchangepage", w, s, S, w.options.pagination);
          }, m = function() {
            const s = this;
            let w;
            return w = s.options.search != 1 && s.options.filters != 1 || !s.results ? s.rows.length : s.results.length, Math.ceil(w / s.options.pagination);
          };
        }, 657: function(n, g, o) {
          o.d(g, { AH: function() {
            return a;
          }, Aq: function() {
            return w;
          }, G9: function() {
            return f;
          }, Jg: function() {
            return h;
          }, Lo: function() {
            return O;
          }, R5: function() {
            return T;
          }, Ub: function() {
            return L;
          }, at: function() {
            return B;
          }, c6: function() {
            return A;
          }, eO: function() {
            return P;
          }, ef: function() {
            return W;
          }, gE: function() {
            return S;
          }, gG: function() {
            return d;
          }, kA: function() {
            return l;
          }, kF: function() {
            return k;
          }, kV: function() {
            return he;
          }, sp: function() {
            return ce;
          }, tW: function() {
            return M;
          } });
          var p = o(805), C = o(296), _ = o(978), G = o(911), z = o(530), m = o(689), s = o(392);
          const w = function() {
            const Z = this;
            if (Z.highlighted && Z.highlighted.length) {
              const se = Z.highlighted[Z.highlighted.length - 1].element, ge = se.getAttribute("data-x"), de = Z.content.getBoundingClientRect(), oe = de.left, ve = de.top, Be = se.getBoundingClientRect(), Fe = Be.left, De = Be.top, Ke = Be.width, U = Be.height, Me = Fe - oe + Z.content.scrollLeft + Ke - 4, We = De - ve + Z.content.scrollTop + U - 4;
              if (Z.corner.style.top = We + "px", Z.corner.style.left = Me + "px", Z.options.freezeColumns) {
                const ot = C.w.call(Z);
                ge > Z.options.freezeColumns - 1 && Fe - oe + Ke < ot ? Z.corner.style.display = "none" : Z.options.selectionCopy != 0 && (Z.corner.style.display = "");
              } else Z.options.selectionCopy != 0 && (Z.corner.style.display = "");
            } else Z.corner.style.top = "-2000px", Z.corner.style.left = "-2000px";
            (0, s.nK)(Z);
          }, S = function(Z) {
            const se = this;
            let ge;
            if (se.highlighted && se.highlighted.length) {
              ge = 1;
              for (let de = 0; de < se.highlighted.length; de++) {
                se.highlighted[de].element.classList.remove("highlight"), se.highlighted[de].element.classList.remove("highlight-left"), se.highlighted[de].element.classList.remove("highlight-right"), se.highlighted[de].element.classList.remove("highlight-top"), se.highlighted[de].element.classList.remove("highlight-bottom"), se.highlighted[de].element.classList.remove("highlight-selected");
                const oe = parseInt(se.highlighted[de].element.getAttribute("data-x")), ve = parseInt(se.highlighted[de].element.getAttribute("data-y"));
                let Be, Fe;
                if (se.highlighted[de].element.getAttribute("data-merged")) {
                  const De = parseInt(se.highlighted[de].element.getAttribute("colspan")), Ke = parseInt(se.highlighted[de].element.getAttribute("rowspan"));
                  Be = De > 0 ? oe + (De - 1) : oe, Fe = Ke > 0 ? ve + (Ke - 1) : ve;
                } else Be = oe, Fe = ve;
                for (let De = oe; De <= Be; De++) se.headers[De] && se.headers[De].classList.remove("selected");
                for (let De = ve; De <= Fe; De++) se.rows[De] && se.rows[De].element.classList.remove("selected");
              }
            } else ge = 0;
            return se.highlighted = [], se.selectedCell = null, se.corner.style.top = "-2000px", se.corner.style.left = "-2000px", Z == 1 && ge == 1 && p.A.call(se, "onblur", se), ge;
          }, A = function(Z, se, ge) {
            const de = Z.getAttribute("data-x"), oe = Z.getAttribute("data-y");
            let ve, Be;
            se ? (ve = se.getAttribute("data-x"), Be = se.getAttribute("data-y")) : (ve = de, Be = oe), a.call(this, de, oe, ve, Be, ge);
          }, l = function() {
            const Z = document.querySelectorAll(".jss_worksheet .copying");
            for (let se = 0; se < Z.length; se++) Z[se].classList.remove("copying"), Z[se].classList.remove("copying-left"), Z[se].classList.remove("copying-right"), Z[se].classList.remove("copying-top"), Z[se].classList.remove("copying-bottom");
          }, a = function(Z, se, ge, de, oe) {
            const ve = this;
            if (se == null) {
              if (se = 0, de = ve.rows.length - 1, Z == null) return;
            } else Z == null && (Z = 0, ge = ve.options.data[0].length - 1);
            ge == null && (ge = Z), de == null && (de = se), Z >= ve.headers.length && (Z = ve.headers.length - 1), se >= ve.rows.length && (se = ve.rows.length - 1), ge >= ve.headers.length && (ge = ve.headers.length - 1), de >= ve.rows.length && (de = ve.rows.length - 1);
            let Be, Fe, De, Ke, U = null, Me = null, We = null, ot = null;
            parseInt(Z) < parseInt(ge) ? (Be = parseInt(Z), Fe = parseInt(ge)) : (Be = parseInt(ge), Fe = parseInt(Z)), parseInt(se) < parseInt(de) ? (De = parseInt(se), Ke = parseInt(de)) : (De = parseInt(de), Ke = parseInt(se));
            for (let we = Be; we <= Fe; we++) for (let Ie = De; Ie <= Ke; Ie++) if (ve.records[Ie][we] && ve.records[Ie][we].element.getAttribute("data-merged")) {
              const Pe = parseInt(ve.records[Ie][we].element.getAttribute("data-x")), Ue = parseInt(ve.records[Ie][we].element.getAttribute("data-y")), Ge = parseInt(ve.records[Ie][we].element.getAttribute("colspan")), lt = parseInt(ve.records[Ie][we].element.getAttribute("rowspan"));
              Ge > 1 && (Pe < Be && (Be = Pe), Pe + Ge > Fe && (Fe = Pe + Ge - 1)), lt && (Ue < De && (De = Ue), Ue + lt > Ke && (Ke = Ue + lt - 1));
            }
            for (let we = De; we <= Ke; we++) ve.rows[we].element.style.display != "none" && (We == null && (We = we), ot = we);
            for (let we = Be; we <= Fe; we++) for (let Ie = De; Ie <= Ke; Ie++) ve.options.columns && ve.options.columns[we] && ve.options.columns[we].type == "hidden" || (U == null && (U = we), Me = we);
            if (U || (U = 0), Me || (Me = 0), p.A.call(ve, "onbeforeselection", ve, U, We, Me, ot, oe) === !1) return !1;
            const Ne = ve.resetSelection();
            ve.selectedCell = [Z, se, ge, de], ve.records[se][Z] && ve.records[se][Z].element.classList.add("highlight-selected");
            for (let we = Be; we <= Fe; we++) for (let Ie = De; Ie <= Ke; Ie++) ve.rows[Ie].element.style.display != "none" && ve.records[Ie][we].element.style.display != "none" && (ve.records[Ie][we].element.classList.add("highlight"), ve.highlighted.push(ve.records[Ie][we]));
            for (let we = U; we <= Me; we++) ve.options.columns && ve.options.columns[we] && ve.options.columns[we].type == "hidden" || !ve.cols[we].colElement.style || ve.cols[we].colElement.style.display == "none" || (ve.records[We] && ve.records[We][we] && ve.records[We][we].element.classList.add("highlight-top"), ve.records[ot] && ve.records[ot][we] && ve.records[ot][we].element.classList.add("highlight-bottom"), ve.headers[we].classList.add("selected"));
            for (let we = We; we <= ot; we++) ve.rows[we] && ve.rows[we].element.style.display != "none" && (ve.records[we][U].element.classList.add("highlight-left"), ve.records[we][Me].element.classList.add("highlight-right"), ve.rows[we].element.classList.add("selected"));
            ve.selectedContainer = [U, We, Me, ot], Ne == 0 && (p.A.call(ve, "onfocus", ve), l()), p.A.call(ve, "onselection", ve, U, We, Me, ot, oe), w.call(ve);
          }, h = function(Z) {
            const se = this;
            if (!se.selectedCell) return [];
            const ge = [];
            for (let de = Math.min(se.selectedCell[0], se.selectedCell[2]); de <= Math.max(se.selectedCell[0], se.selectedCell[2]); de++) Z && se.headers[de].style.display == "none" || ge.push(de);
            return ge;
          }, f = function() {
            const Z = this;
            Z.selectedCell && Z.updateSelectionFromCoords(Z.selectedCell[0], Z.selectedCell[1], Z.selectedCell[2], Z.selectedCell[3]);
          }, d = function() {
            const Z = this;
            for (let se = 0; se < Z.selection.length; se++) Z.selection[se].classList.remove("selection"), Z.selection[se].classList.remove("selection-left"), Z.selection[se].classList.remove("selection-right"), Z.selection[se].classList.remove("selection-top"), Z.selection[se].classList.remove("selection-bottom");
            Z.selection = [];
          }, b = function(Z) {
            return (Z = "" + Z).length == 1 && (Z = "0" + Z), Z;
          }, k = function(Z, se) {
            const ge = this, de = ge.getData(!0, !1), oe = ge.selectedContainer, ve = parseInt(Z.getAttribute("data-x")), Be = parseInt(Z.getAttribute("data-y")), Fe = parseInt(se.getAttribute("data-x")), De = parseInt(se.getAttribute("data-y")), Ke = [];
            let U, Me, We = !1;
            oe[0] == ve ? (U = Be < oe[1] ? Be - oe[1] : 1, Me = 0) : (Me = ve < oe[0] ? ve - oe[0] : 1, U = 0);
            let ot = 0, Ne = 0;
            for (let Ie = Be; Ie <= De; Ie++) if (!ge.rows[Ie] || ge.rows[Ie].element.style.display != "none") {
              de[Ne] == null && (Ne = 0), ot = 0, oe[0] != ve && (Me = ve < oe[0] ? ve - oe[0] : 1);
              for (let Pe = ve; Pe <= Fe; Pe++) {
                if (ge.records[Ie][Pe] && !ge.records[Ie][Pe].element.classList.contains("readonly") && ge.records[Ie][Pe].element.style.display != "none" && We == 0) {
                  if (!ge.selection.length && ge.options.data[Ie][Pe] != "") {
                    We = !0;
                    continue;
                  }
                  (de[Ne] == null || de[Ne][ot] == null) && (ot = 0);
                  let Ue = de[Ne][ot];
                  if (Ue && !de[1] && ge.parent.config.autoIncrement != 0) if (!ge.options.columns || !ge.options.columns[Pe] || ge.options.columns[Pe].type && ge.options.columns[Pe].type != "text" && ge.options.columns[Pe].type != "number") {
                    if (ge.options.columns && ge.options.columns[Pe] && ge.options.columns[Pe].type == "calendar") {
                      const Ge = new Date(Ue);
                      Ge.setDate(Ge.getDate() + U), Ue = Ge.getFullYear() + "-" + b(parseInt(Ge.getMonth() + 1)) + "-" + b(Ge.getDate()) + " 00:00:00";
                    }
                  } else if (("" + Ue).substr(0, 1) == "=") {
                    const Ge = Ue.match(/([A-Z]+[0-9]+)/g);
                    if (Ge) {
                      const lt = [];
                      for (let it = 0; it < Ge.length; it++) {
                        const ft = (0, m.vu)(Ge[it], 1);
                        ft[0] += Me, ft[1] += U, ft[1] < 0 && (ft[1] = 0);
                        const bt = (0, m.t3)([ft[0], ft[1]]);
                        bt != Ge[it] && (lt[Ge[it]] = bt);
                      }
                      lt && (Ue = (0, z.yB)(Ue, lt));
                    }
                  } else Ue == Number(Ue) && (Ue = Number(Ue) + U);
                  Ke.push(z.k9.call(ge, Pe, Ie, Ue)), z.xF.call(ge, Pe, Ie, Ke);
                }
                ot++, oe[0] != ve && Me++;
              }
              Ne++, U++;
            }
            G.Dh.call(ge, { action: "setValue", records: Ke, selection: ge.selectedCell }), z.am.call(ge);
            const we = Ke.map(function(Ie) {
              return { x: Ie.x, y: Ie.y, value: Ie.newValue, oldValue: Ie.oldValue };
            });
            p.A.call(ge, "onafterchanges", ge, we);
          }, M = function(Z) {
            let se, ge, de = 0;
            if (!Z || Z.length === 0) return de;
            for (se = 0; se < Z.length; se++) ge = Z.charCodeAt(se), de = (de << 5) - de + ge, de |= 0;
            return de;
          }, B = function(Z, se, ge) {
            const de = this;
            if (Z == 1) {
              if (de.selectedCell && (se >= de.selectedCell[1] && se <= de.selectedCell[3] || ge >= de.selectedCell[1] && ge <= de.selectedCell[3])) return void de.resetSelection();
            } else if (de.selectedCell && (se >= de.selectedCell[0] && se <= de.selectedCell[2] || ge >= de.selectedCell[0] && ge <= de.selectedCell[2])) return void de.resetSelection();
          }, T = function(Z) {
            const se = this;
            if (!se.selectedCell) return [];
            const ge = [];
            for (let de = Math.min(se.selectedCell[1], se.selectedCell[3]); de <= Math.max(se.selectedCell[1], se.selectedCell[3]); de++) Z && se.rows[de].element.style.display == "none" || ge.push(de);
            return ge;
          }, L = function() {
            const Z = this;
            Z.selectedCell || (Z.selectedCell = []), Z.selectedCell[0] = 0, Z.selectedCell[1] = 0, Z.selectedCell[2] = Z.headers.length - 1, Z.selectedCell[3] = Z.records.length - 1, Z.updateSelectionFromCoords(Z.selectedCell[0], Z.selectedCell[1], Z.selectedCell[2], Z.selectedCell[3]);
          }, O = function() {
            const Z = this;
            return Z.selectedCell ? [Math.min(Z.selectedCell[0], Z.selectedCell[2]), Math.min(Z.selectedCell[1], Z.selectedCell[3]), Math.max(Z.selectedCell[0], Z.selectedCell[2]), Math.max(Z.selectedCell[1], Z.selectedCell[3])] : null;
          }, W = function(Z) {
            const se = this, ge = O.call(se);
            if (!ge) return [];
            const de = [];
            for (let oe = ge[1]; oe <= ge[3]; oe++) for (let ve = ge[0]; ve <= ge[2]; ve++) Z ? de.push((0, _.getCellNameFromCoords)(ve, oe)) : de.push(se.records[oe][ve]);
            return de;
          }, P = function() {
            const Z = this, se = O.call(Z);
            if (!se) return "";
            const ge = (0, _.getCellNameFromCoords)(se[0], se[1]), de = (0, _.getCellNameFromCoords)(se[2], se[3]);
            return ge === de ? Z.options.worksheetName + "!" + ge : Z.options.worksheetName + "!" + ge + ":" + de;
          }, ce = function(Z, se) {
            const ge = O.call(this);
            return Z >= ge[0] && Z <= ge[2] && se >= ge[1] && se <= ge[3];
          }, he = function() {
            const Z = O.call(this);
            return Z ? [Z] : [];
          };
        }, 392: function(n, g, o) {
          o.d(g, { Ar: function() {
            return S;
          }, ll: function() {
            return w;
          }, nK: function() {
            return s;
          } });
          var p = o(978), C = o(530);
          const _ = function(A, l) {
            l.options.editable != 0 ? A.classList.remove("jtoolbar-disabled") : A.classList.add("jtoolbar-disabled");
          }, G = function() {
            const A = [], l = this, a = function() {
              return C.eN.call(l);
            };
            A.push({ content: "undo", onclick: function() {
              a().undo();
            } }), A.push({ content: "redo", onclick: function() {
              a().redo();
            } }), A.push({ content: "save", onclick: function() {
              const f = a();
              f && f.download();
            } }), A.push({ type: "divisor" }), A.push({ type: "select", width: "120px", options: ["Default", "Verdana", "Arial", "Courier New"], render: function(f) {
              return '<span style="font-family:' + f + '">' + f + "</span>";
            }, onchange: function(f, d, b, k, M) {
              const B = a();
              let T = B.getSelected(!0);
              if (T) {
                let L = M ? k : "";
                B.setStyle(Object.fromEntries(T.map(function(O) {
                  return [O, "font-family: " + L];
                })));
              }
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "select", width: "48px", content: "format_size", options: ["x-small", "small", "medium", "large", "x-large"], render: function(f) {
              return '<span style="font-size:' + f + '">' + f + "</span>";
            }, onchange: function(f, d, b, k) {
              const M = a();
              let B = M.getSelected(!0);
              B && M.setStyle(Object.fromEntries(B.map(function(T) {
                return [T, "font-size: " + k];
              })));
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "select", options: ["left", "center", "right", "justify"], render: function(f) {
              return '<i class="material-icons">format_align_' + f + "</i>";
            }, onchange: function(f, d, b, k) {
              const M = a();
              let B = M.getSelected(!0);
              B && M.setStyle(Object.fromEntries(B.map(function(T) {
                return [T, "text-align: " + k];
              })));
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ content: "format_bold", onclick: function(f, d, b) {
              const k = a();
              let M = k.getSelected(!0);
              M && k.setStyle(Object.fromEntries(M.map(function(B) {
                return [B, "font-weight:bold"];
              })));
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "color", content: "format_color_text", k: "color", updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "color", content: "format_color_fill", k: "background-color", updateState: function(f, d, b, k) {
              _(b, a());
            } });
            let h = ["top", "middle", "bottom"];
            return A.push({ type: "select", options: ["vertical_align_top", "vertical_align_center", "vertical_align_bottom"], render: function(f) {
              return '<i class="material-icons">' + f + "</i>";
            }, value: 1, onchange: function(f, d, b, k, M) {
              const B = a();
              let T = B.getSelected(!0);
              T && B.setStyle(Object.fromEntries(T.map(function(L) {
                return [L, "vertical-align: " + h[M]];
              })));
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ content: "web", tooltip: jSuites.translate("Merge the selected cells"), onclick: function() {
              const f = a();
              if (f.selectedCell && confirm(jSuites.translate("The merged cells will retain the value of the top-left cell only. Are you sure?"))) {
                const d = [Math.min(f.selectedCell[0], f.selectedCell[2]), Math.min(f.selectedCell[1], f.selectedCell[3]), Math.max(f.selectedCell[0], f.selectedCell[2]), Math.max(f.selectedCell[1], f.selectedCell[3])];
                let b = (0, p.getCellNameFromCoords)(d[0], d[1]);
                if (f.records[d[1]][d[0]].element.getAttribute("data-merged")) f.removeMerge(b);
                else {
                  let k = d[2] - d[0] + 1, M = d[3] - d[1] + 1;
                  k === 1 && M === 1 || f.setMerge(b, k, M);
                }
              }
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "select", options: ["border_all", "border_outer", "border_inner", "border_horizontal", "border_vertical", "border_left", "border_top", "border_right", "border_bottom", "border_clear"], columns: 5, render: function(f) {
              return '<i class="material-icons">' + f + "</i>";
            }, right: !0, onchange: function(f, d, b, k) {
              const M = a();
              if (M.selectedCell) {
                const B = [Math.min(M.selectedCell[0], M.selectedCell[2]), Math.min(M.selectedCell[1], M.selectedCell[3]), Math.max(M.selectedCell[0], M.selectedCell[2]), Math.max(M.selectedCell[1], M.selectedCell[3])];
                let T = k;
                if (B) {
                  let L = d.thickness || 1, O = d.color || "black";
                  const W = d.style || "solid";
                  W === "double" && (L += 2);
                  let P = {}, ce = B[0], he = B[1], Z = B[2], se = B[3];
                  const ge = function(de, oe, ve) {
                    let Be = ["", "", "", ""];
                    Be[0] = (T === "border_top" || T === "border_outer") && ve === he || (T === "border_inner" || T === "border_horizontal") && ve > he || T === "border_all" ? "border-top: " + L + "px " + W + " " + O : "border-top: ", Be[1] = T !== "border_all" && T !== "border_right" && T !== "border_outer" || oe !== Z ? "border-right: " : "border-right: " + L + "px " + W + " " + O, Be[2] = T !== "border_all" && T !== "border_bottom" && T !== "border_outer" || ve !== se ? "border-bottom: " : "border-bottom: " + L + "px " + W + " " + O, Be[3] = (T === "border_left" || T === "border_outer") && oe === ce || (T === "border_inner" || T === "border_vertical") && oe > ce || T === "border_all" ? "border-left: " + L + "px " + W + " " + O : "border-left: ", P[de] = Be.join(";");
                  };
                  for (let de = B[1]; de <= B[3]; de++) for (let oe = B[0]; oe <= B[2]; oe++) ge((0, p.getCellNameFromCoords)(oe, de), oe, de), M.records[de][oe].element.getAttribute("data-merged") && ge((0, p.getCellNameFromCoords)(B[0], B[1]), oe, de);
                  Object.keys(P) && M.setStyle(P);
                }
              }
            }, onload: function(f, d) {
              let b = document.createElement("div"), k = document.createElement("div");
              b.appendChild(k);
              let M = jSuites.color(k, { closeOnChange: !1, onchange: function(L, O) {
                L.parentNode.children[1].style.color = O, d.color = O;
              } }), B = document.createElement("i");
              B.classList.add("material-icons"), B.innerHTML = "color_lens", B.onclick = function() {
                M.open();
              }, b.appendChild(B), f.children[1].appendChild(b), k = document.createElement("div"), jSuites.picker(k, { type: "select", data: [1, 2, 3, 4, 5], render: function(L) {
                return '<div style="height: ' + L + 'px; width: 30px; background-color: black;"></div>';
              }, onchange: function(L, O, W, P) {
                d.thickness = P;
              }, width: "50px" }), f.children[1].appendChild(k);
              const T = document.createElement("div");
              jSuites.picker(T, { type: "select", data: ["solid", "dotted", "dashed", "double"], render: function(L) {
                return L === "double" ? '<div style="width: 30px; border-top: 3px ' + L + ' black;"></div>' : '<div style="width: 30px; border-top: 2px ' + L + ' black;"></div>';
              }, onchange: function(L, O, W, P) {
                d.style = P;
              }, width: "50px" }), f.children[1].appendChild(T), k = document.createElement("div"), k.style.flex = "1", f.children[1].appendChild(k);
            }, updateState: function(f, d, b) {
              _(b, a());
            } }), A.push({ type: "divisor" }), A.push({ content: "fullscreen", tooltip: "Toggle Fullscreen", onclick: function(f, d, b) {
              b.children[0].textContent === "fullscreen" ? (l.fullscreen(!0), b.children[0].textContent = "fullscreen_exit") : (l.fullscreen(!1), b.children[0].textContent = "fullscreen");
            }, updateState: function(f, d, b, k) {
              k.parent.config.fullscreen === !0 ? b.children[0].textContent = "fullscreen_exit" : b.children[0].textContent = "fullscreen";
            } }), A;
          }, z = function(A) {
            const l = this, a = A.items;
            for (let h = 0; h < a.length; h++) a[h].tooltip && (a[h].title = a[h].tooltip, delete a[h].tooltip), a[h].type == "select" ? a[h].options ? (a[h].data = a[h].options, delete a[h].options) : (a[h].data = a[h].v, delete a[h].v, a[h].k && !a[h].onchange && (a[h].onchange = function(f, d, b) {
              const k = C.eN.call(l), M = k.getSelected(!0);
              k.setStyle(Object.fromEntries(M.map(function(B) {
                return [B, a[h].k + ": " + b];
              })));
            })) : a[h].type == "color" && (a[h].type = "i", a[h].onclick = function(f, d, b) {
              b.color || (jSuites.color(b, { onchange: function(k, M) {
                const B = C.eN.call(l), T = B.getSelected(!0);
                B.setStyle(Object.fromEntries(T.map(function(L) {
                  return [L, a[h].k + ": " + M];
                })));
              }, onopen: function(k) {
                k.color.select("");
              } }), b.color.open());
            });
          }, m = function(A) {
            const l = this, a = document.createElement("div");
            return a.classList.add("jss_toolbar"), z.call(l, A), typeof l.plugins == "object" && Object.entries(l.plugins).forEach(function([, h]) {
              if (typeof h.toolbar == "function") {
                const f = h.toolbar(A);
                f && (A = f);
              }
            }), jSuites.toolbar(a, A), a;
          }, s = function(A) {
            A.parent.toolbar && A.parent.toolbar.toolbar.update(A);
          }, w = function() {
            const A = this;
            if (A.config.toolbar && !A.toolbar) {
              let l;
              Array.isArray(A.config.toolbar) ? l = { items: A.config.toolbar } : typeof A.config.toolbar == "object" ? l = A.config.toolbar : (l = { items: G.call(A) }, typeof A.config.toolbar == "function" && (l = A.config.toolbar(l))), A.toolbar = A.element.insertBefore(m.call(A, l), A.element.children[1]);
            }
          }, S = function() {
            const A = this;
            A.toolbar && (A.toolbar.parentNode.removeChild(A.toolbar), delete A.toolbar);
          };
        } }, __webpack_module_cache__ = {};
        function __webpack_require__(n) {
          var g = __webpack_module_cache__[n];
          if (g !== void 0) return g.exports;
          var o = __webpack_module_cache__[n] = { exports: {} };
          return __webpack_modules__[n](o, o.exports, __webpack_require__), o.exports;
        }
        __webpack_require__.d = function(n, g) {
          for (var o in g) __webpack_require__.o(g, o) && !__webpack_require__.o(n, o) && Object.defineProperty(n, o, { enumerable: !0, get: g[o] });
        }, __webpack_require__.o = function(n, g) {
          return Object.prototype.hasOwnProperty.call(n, g);
        }, __webpack_require__.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        };
        var __webpack_exports__ = {};
        __webpack_require__.d(__webpack_exports__, { default: function() {
          return src;
        } });
        const lib = { jspreadsheet: {} };
        var libraryBase = lib, dispatch = __webpack_require__(805), internal = __webpack_require__(530), utils_history = __webpack_require__(911);
        const openEditor = function(n, g, o) {
          const p = this, C = n.getAttribute("data-y"), _ = n.getAttribute("data-x");
          dispatch.A.call(p, "oneditionstart", p, n, parseInt(_), parseInt(C)), _ > 0 && (p.records[C][_ - 1].element.style.overflow = "hidden");
          const G = function(z) {
            const m = n.getBoundingClientRect(), s = document.createElement(z);
            return s.style.width = m.width + "px", s.style.height = m.height - 2 + "px", s.style.minHeight = m.height - 2 + "px", n.classList.add("editor"), n.innerHTML = "", n.appendChild(s), s;
          };
          if (n.classList.contains("readonly") != 1) {
            if (p.edition = [p.records[C][_].element, p.records[C][_].element.innerHTML, _, C], p.options.columns && p.options.columns[_] && typeof p.options.columns[_].type == "object") p.options.columns[_].type.openEditor(n, p.options.data[C][_], parseInt(_), parseInt(C), p, p.options.columns[_], o), dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]);
            else if (!(p.options.columns && p.options.columns[_] && p.options.columns[_].type == "hidden")) if (p.options.columns && p.options.columns[_] && (p.options.columns[_].type == "checkbox" || p.options.columns[_].type == "radio")) {
              const z = !n.children[0].checked;
              p.setValue(n, z), p.edition = null;
            } else if (p.options.columns && p.options.columns[_] && p.options.columns[_].type == "dropdown") {
              let z, m = p.options.data[C][_];
              p.options.columns[_].multiple && !Array.isArray(m) && (m = m.split(";")), z = typeof p.options.columns[_].filter == "function" ? p.options.columns[_].filter(p.element, n, _, C, p.options.columns[_].source) : p.options.columns[_].source;
              const s = [];
              if (z) for (let A = 0; A < z.length; A++) s.push(z[A]);
              const w = G("div");
              dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]);
              const S = { data: s, multiple: !!p.options.columns[_].multiple, autocomplete: !!p.options.columns[_].autocomplete, opened: !0, value: m, width: "100%", height: w.style.minHeight, position: p.options.tableOverflow == 1 || p.parent.config.fullscreen == 1, onclose: function() {
                closeEditor.call(p, n, !0);
              } };
              p.options.columns[_].options && p.options.columns[_].options.type && (S.type = p.options.columns[_].options.type), jSuites.dropdown(w, S);
            } else if (p.options.columns && p.options.columns[_] && (p.options.columns[_].type == "calendar" || p.options.columns[_].type == "color")) {
              const z = p.options.data[C][_], m = G("input");
              dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]), m.value = z;
              const s = p.options.columns[_].options ? { ...p.options.columns[_].options } : {};
              if (p.options.tableOverflow != 1 && p.parent.config.fullscreen != 1 || (s.position = !0), s.value = p.options.data[C][_], s.opened = !0, s.onclose = function(w, S) {
                closeEditor.call(p, n, !0);
              }, p.options.columns[_].type == "color") {
                jSuites.color(m, s);
                const w = n.getBoundingClientRect();
                s.position && (m.nextSibling.children[1].style.top = w.top + w.height + "px", m.nextSibling.children[1].style.left = w.left + "px");
              } else s.format || (s.format = "YYYY-MM-DD"), jSuites.calendar(m, s);
              m.focus();
            } else if (p.options.columns && p.options.columns[_] && p.options.columns[_].type == "html") {
              const z = p.options.data[C][_], m = G("div");
              dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]), m.style.position = "relative";
              const s = document.createElement("div");
              s.classList.add("jss_richtext"), m.appendChild(s), jSuites.editor(s, { focus: !0, value: z });
              const w = n.getBoundingClientRect(), S = s.getBoundingClientRect();
              window.innerHeight < w.bottom + S.height ? s.style.top = w.bottom - (S.height + 2) + "px" : s.style.top = w.top + "px", window.innerWidth < w.left + S.width ? s.style.left = w.right - (S.width + 2) + "px" : s.style.left = w.left + "px";
            } else if (p.options.columns && p.options.columns[_] && p.options.columns[_].type == "image") {
              const z = n.children[0], m = G("div");
              dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]), m.style.position = "relative";
              const s = document.createElement("div");
              s.classList.add("jclose"), z && z.src && s.appendChild(z), m.appendChild(s), jSuites.image(s, p.options.columns[_]);
              const w = n.getBoundingClientRect(), S = s.getBoundingClientRect();
              window.innerHeight < w.bottom + S.height ? s.style.top = w.top - (S.height + 2) + "px" : s.style.top = w.top + "px", s.style.left = w.left + "px";
            } else {
              const z = g == 1 ? "" : p.options.data[C][_];
              let m;
              m = p.options.columns && p.options.columns[_] && p.options.columns[_].wordWrap == 0 || !(p.options.wordWrap == 1 || p.options.columns && p.options.columns[_] && p.options.columns[_].wordWrap == 1) ? G("input") : G("textarea"), dispatch.A.call(p, "oncreateeditor", p, n, parseInt(_), parseInt(C), null, p.options.columns[_]), m.focus(), m.value = z;
              const s = p.options.columns && p.options.columns[_];
              if (!(0, internal.dw)(z) && s) {
                const w = (0, internal.rS)(s);
                if (w) {
                  if (!s.disabledMaskOnEdition) if (s.mask) {
                    const S = s.mask.split(";");
                    m.setAttribute("data-mask", S[0]);
                  } else s.locale && m.setAttribute("data-locale", s.locale);
                  w.input = m, m.mask = w, jSuites.mask.render(z, w, !1);
                }
              }
              m.onblur = function() {
                closeEditor.call(p, n, !0);
              }, m.scrollLeft = m.scrollWidth;
            }
          }
        }, closeEditor = function(n, g) {
          const o = this, p = parseInt(n.getAttribute("data-x")), C = parseInt(n.getAttribute("data-y"));
          let _;
          if (g == 1) {
            if (o.options.columns && o.options.columns[p] && typeof o.options.columns[p].type == "object") _ = o.options.columns[p].type.closeEditor(n, g, parseInt(p), parseInt(C), o, o.options.columns[p]);
            else if (!(o.options.columns && o.options.columns[p] && (o.options.columns[p].type == "checkbox" || o.options.columns[p].type == "radio" || o.options.columns[p].type == "hidden"))) if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "dropdown") _ = n.children[0].dropdown.close(!0);
            else if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "calendar") _ = n.children[0].calendar.close(!0);
            else if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "color") _ = n.children[0].color.close(!0);
            else if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "html") _ = n.children[0].children[0].editor.getData();
            else if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "image") {
              const G = n.children[0].children[0].children[0];
              _ = G && G.tagName == "IMG" ? G.src : "";
            } else if (o.options.columns && o.options.columns[p] && o.options.columns[p].type == "numeric") _ = n.children[0].value, ("" + _).substr(0, 1) != "=" && _ == "" && (_ = o.options.columns[p].allowEmpty ? "" : 0), n.children[0].onblur = null;
            else {
              _ = n.children[0].value, n.children[0].onblur = null;
              const G = o.options.columns && o.options.columns[p];
              if (G) {
                const z = (0, internal.rS)(G);
                if (z && _ !== "" && !(0, internal.dw)(_) && typeof _ != "number") {
                  const m = jSuites.mask.extract(_, z, !0);
                  m && m.value !== "" && (_ = m.value);
                }
              }
            }
            o.options.data[C][p] == _ ? n.innerHTML = o.edition[1] : o.setValue(n, _);
          } else o.options.columns && o.options.columns[p] && typeof o.options.columns[p].type == "object" ? o.options.columns[p].type.closeEditor(n, g, parseInt(p), parseInt(C), o, o.options.columns[p]) : o.options.columns && o.options.columns[p] && o.options.columns[p].type == "dropdown" ? n.children[0].dropdown.close(!0) : o.options.columns && o.options.columns[p] && o.options.columns[p].type == "calendar" ? n.children[0].calendar.close(!0) : o.options.columns && o.options.columns[p] && o.options.columns[p].type == "color" ? n.children[0].color.close(!0) : n.children[0].onblur = null, n.innerHTML = o.edition && o.edition[1] ? o.edition[1] : "";
          dispatch.A.call(o, "oneditionend", o, n, p, C, _, g), n.classList.remove("editor"), o.edition = null;
        }, setCheckRadioValue = function() {
          const n = this, g = [], o = Object.keys(n.highlighted);
          for (let p = 0; p < o.length; p++) {
            const C = n.highlighted[p].element.getAttribute("data-x"), _ = n.highlighted[p].element.getAttribute("data-y");
            n.options.columns[C].type != "checkbox" && n.options.columns[C].type != "radio" || g.push(internal.k9.call(n, C, _, !n.options.data[_][C]));
          }
          if (g.length) {
            utils_history.Dh.call(n, { action: "setValue", records: g, selection: n.selectedCell });
            const p = g.map(function(C) {
              return { x: C.x, y: C.y, value: C.newValue, oldValue: C.oldValue };
            });
            dispatch.A.call(n, "onafterchanges", n, p);
          }
        };
        var lazyLoading = __webpack_require__(497);
        const upGet = function(n, g) {
          const o = this;
          n = parseInt(n);
          for (let p = (g = parseInt(g)) - 1; p >= 0; p--) if (o.records[p][n].element.style.display != "none" && o.rows[p].element.style.display != "none") {
            if (o.records[p][n].element.getAttribute("data-merged") && o.records[p][n].element == o.records[g][n].element) continue;
            g = p;
            break;
          }
          return g;
        }, upVisible = function(n, g) {
          const o = this;
          let p, C;
          if (n == 0 ? (p = parseInt(o.selectedCell[0]), C = parseInt(o.selectedCell[1])) : (p = parseInt(o.selectedCell[2]), C = parseInt(o.selectedCell[3])), g == 0) {
            for (let _ = 0; _ < C; _++) if (o.records[_][p].element.style.display != "none" && o.rows[_].element.style.display != "none") {
              C = _;
              break;
            }
          } else C = upGet.call(o, p, C);
          n == 0 ? (o.selectedCell[0] = p, o.selectedCell[1] = C) : (o.selectedCell[2] = p, o.selectedCell[3] = C);
        }, up = function(n, g) {
          const o = this;
          if (n ? o.selectedCell[3] > 0 && upVisible.call(o, 1, g ? 0 : 1) : (o.selectedCell[1] > 0 && upVisible.call(o, 0, g ? 0 : 1), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), o.options.lazyLoading == 1) if (o.selectedCell[1] == 0 || o.selectedCell[3] == 0) lazyLoading.wu.call(o, 0), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]);
          else if (lazyLoading.AG.call(o)) o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]);
          else {
            const p = parseInt(o.tbody.firstChild.getAttribute("data-y"));
            o.selectedCell[1] - p < 30 && (lazyLoading.G_.call(o), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]));
          }
          else if (o.options.pagination > 0) {
            const p = o.whichPage(o.selectedCell[3]);
            p != o.pageNumber && o.page(p);
          }
          internal.Rs.call(o, 1);
        }, rightGet = function(n, g) {
          const o = this;
          n = parseInt(n), g = parseInt(g);
          for (let p = n + 1; p < o.headers.length; p++) if (o.records[g][p].element.style.display != "none") {
            if (o.records[g][p].element.getAttribute("data-merged") && o.records[g][p].element == o.records[g][n].element) continue;
            n = p;
            break;
          }
          return n;
        }, rightVisible = function(n, g) {
          const o = this;
          let p, C;
          if (n == 0 ? (p = parseInt(o.selectedCell[0]), C = parseInt(o.selectedCell[1])) : (p = parseInt(o.selectedCell[2]), C = parseInt(o.selectedCell[3])), g == 0) {
            for (let _ = o.headers.length - 1; _ > p; _--) if (o.records[C][_].element.style.display != "none") {
              p = _;
              break;
            }
          } else p = rightGet.call(o, p, C);
          n == 0 ? (o.selectedCell[0] = p, o.selectedCell[1] = C) : (o.selectedCell[2] = p, o.selectedCell[3] = C);
        }, right = function(n, g) {
          const o = this;
          n ? o.selectedCell[2] < o.headers.length - 1 && rightVisible.call(o, 1, g ? 0 : 1) : (o.selectedCell[0] < o.headers.length - 1 && rightVisible.call(o, 0, g ? 0 : 1), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), internal.Rs.call(o, 2);
        }, downGet = function(n, g) {
          const o = this;
          n = parseInt(n);
          for (let p = (g = parseInt(g)) + 1; p < o.rows.length; p++) if (o.records[p][n].element.style.display != "none" && o.rows[p].element.style.display != "none") {
            if (o.records[p][n].element.getAttribute("data-merged") && o.records[p][n].element == o.records[g][n].element) continue;
            g = p;
            break;
          }
          return g;
        }, downVisible = function(n, g) {
          const o = this;
          let p, C;
          if (n == 0 ? (p = parseInt(o.selectedCell[0]), C = parseInt(o.selectedCell[1])) : (p = parseInt(o.selectedCell[2]), C = parseInt(o.selectedCell[3])), g == 0) {
            for (let _ = o.rows.length - 1; _ > C; _--) if (o.records[_][p].element.style.display != "none" && o.rows[_].element.style.display != "none") {
              C = _;
              break;
            }
          } else C = downGet.call(o, p, C);
          n == 0 ? (o.selectedCell[0] = p, o.selectedCell[1] = C) : (o.selectedCell[2] = p, o.selectedCell[3] = C);
        }, down = function(n, g) {
          const o = this;
          if (n ? o.selectedCell[3] < o.records.length - 1 && downVisible.call(o, 1, g ? 0 : 1) : (o.selectedCell[1] < o.records.length - 1 && downVisible.call(o, 0, g ? 0 : 1), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), o.options.lazyLoading == 1) o.selectedCell[1] == o.records.length - 1 || o.selectedCell[3] == o.records.length - 1 ? (lazyLoading.wu.call(o, -1), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3])) : lazyLoading.AG.call(o) ? o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]) : parseInt(o.tbody.lastChild.getAttribute("data-y")) - o.selectedCell[3] < 30 && (lazyLoading.p6.call(o), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]));
          else if (o.options.pagination > 0) {
            const p = o.whichPage(o.selectedCell[3]);
            p != o.pageNumber && o.page(p);
          }
          internal.Rs.call(o, 3);
        }, leftGet = function(n, g) {
          const o = this;
          n = parseInt(n), g = parseInt(g);
          for (let p = n - 1; p >= 0; p--) if (o.records[g][p].element.style.display != "none") {
            if (o.records[g][p].element.getAttribute("data-merged") && o.records[g][p].element == o.records[g][n].element) continue;
            n = p;
            break;
          }
          return n;
        }, leftVisible = function(n, g) {
          const o = this;
          let p, C;
          if (n == 0 ? (p = parseInt(o.selectedCell[0]), C = parseInt(o.selectedCell[1])) : (p = parseInt(o.selectedCell[2]), C = parseInt(o.selectedCell[3])), g == 0) {
            for (let _ = 0; _ < p; _++) if (o.records[C][_].element.style.display != "none") {
              p = _;
              break;
            }
          } else p = leftGet.call(o, p, C);
          n == 0 ? (o.selectedCell[0] = p, o.selectedCell[1] = C) : (o.selectedCell[2] = p, o.selectedCell[3] = C);
        }, left = function(n, g) {
          const o = this;
          n ? o.selectedCell[2] > 0 && leftVisible.call(o, 1, g ? 0 : 1) : (o.selectedCell[0] > 0 && leftVisible.call(o, 0, g ? 0 : 1), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), internal.Rs.call(o, 0);
        }, first = function(n, g) {
          const o = this;
          if (n ? g ? o.selectedCell[3] = 0 : leftVisible.call(o, 1, 0) : (g ? o.selectedCell[1] = 0 : leftVisible.call(o, 0, 0), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.options.lazyLoading != 1 || o.selectedCell[1] != 0 && o.selectedCell[3] != 0) {
            if (o.options.pagination > 0) {
              const p = o.whichPage(o.selectedCell[3]);
              p != o.pageNumber && o.page(p);
            }
          } else lazyLoading.wu.call(o, 0);
          o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), internal.Rs.call(o, 1);
        }, last = function(n, g) {
          const o = this;
          if (n ? g ? o.selectedCell[3] = o.records.length - 1 : rightVisible.call(o, 1, 0) : (g ? o.selectedCell[1] = o.records.length - 1 : rightVisible.call(o, 0, 0), o.selectedCell[2] = o.selectedCell[0], o.selectedCell[3] = o.selectedCell[1]), o.options.lazyLoading != 1 || o.selectedCell[1] != o.records.length - 1 && o.selectedCell[3] != o.records.length - 1) {
            if (o.options.pagination > 0) {
              const p = o.whichPage(o.selectedCell[3]);
              p != o.pageNumber && o.page(p);
            }
          } else lazyLoading.wu.call(o, -1);
          o.updateSelectionFromCoords(o.selectedCell[0], o.selectedCell[1], o.selectedCell[2], o.selectedCell[3]), internal.Rs.call(o, 3);
        };
        var merges = __webpack_require__(910), selection = __webpack_require__(657), helpers = __webpack_require__(978), internalHelpers = __webpack_require__(689);
        const copy = function(n, g, o, p, C, _, G) {
          const z = this;
          g || (g = "	");
          const m = new RegExp(g, "ig"), s = [];
          let w = [], S = [];
          const A = [], l = [], a = z.options.data[0].length, h = z.options.data.length;
          let f = "", d = !1, b = "", k = "", M = 0, B = 0, T = 0;
          for (let W = 0; W < h; W++) for (let P = 0; P < a; P++) n && !z.records[W][P].element.classList.contains("highlight") || T <= W && (T = W);
          if (C && (z.parent.config.includeHeadersOnDownload == 1 || p)) {
            if (z.options.nestedHeaders && z.options.nestedHeaders.length > 0) {
              f = z.options.nestedHeaders;
              for (let W = 0; W < f.length; W++) {
                const P = [];
                for (let ce = 0; ce < f[W].length; ce++) {
                  const he = parseInt(f[W][ce].colspan);
                  P.push(f[W][ce].title);
                  for (let Z = 0; Z < he - 1; Z++) P.push("");
                }
                k += P.join(g) + `\r
`;
              }
            }
            d = !0;
          }
          z.style = [];
          for (let W = 0; W < h; W++) {
            w = [], S = [];
            for (let P = 0; P < a; P++) if (!n || z.records[W][P].element.classList.contains("highlight")) {
              d == 1 && s.push(z.headers[P].textContent);
              let ce, he = z.options.data[W][P];
              he.match && (he.match(m) || he.match(/,/g) || he.match(/\n/) || he.match(/\"/)) && (he = he.replace(new RegExp('"', "g"), '""'), he = '"' + he + '"'), w.push(he), z.options.columns && z.options.columns[P] && (z.options.columns[P].type == "checkbox" || z.options.columns[P].type == "radio") ? ce = he : (ce = z.records[W][P].element.innerHTML, ce.match && (ce.match(m) || ce.match(/,/g) || ce.match(/\n/) || ce.match(/\"/)) && (ce = ce.replace(new RegExp('"', "g"), '""'), ce = '"' + ce + '"')), S.push(ce), f = z.records[W][P].element.getAttribute("style"), f = f.replace("display: none;", ""), z.style.push(f || "");
            }
            w.length && (d && (M = w.length, A.push(s.join(g))), A.push(w.join(g))), S.length && (B++, d && (l.push(s.join(g)), d = !1), l.push(S.join(g)));
          }
          a == M && h == B && (b = k);
          const L = b + A.join(`\r
`);
          let O = b + l.join(`\r
`);
          if (!o) {
            const W = [Math.min(z.selectedCell[0], z.selectedCell[2]), Math.min(z.selectedCell[1], z.selectedCell[3]), Math.max(z.selectedCell[0], z.selectedCell[2]), Math.max(z.selectedCell[1], z.selectedCell[3])], P = dispatch.A.call(z, "oncopy", z, W, O, _);
            if (P) O = P;
            else if (P === !1) return !1;
            z.textarea.value = O, z.textarea.select(), document.execCommand("copy");
          }
          if (z.data = G == 1 ? O : L, z.hashString = selection.tW.call(z, z.data), !o && (selection.kA.call(z), z.highlighted)) for (let W = 0; W < z.highlighted.length; W++) z.highlighted[W].element.classList.add("copying"), z.highlighted[W].element.classList.contains("highlight-left") && z.highlighted[W].element.classList.add("copying-left"), z.highlighted[W].element.classList.contains("highlight-right") && z.highlighted[W].element.classList.add("copying-right"), z.highlighted[W].element.classList.contains("highlight-top") && z.highlighted[W].element.classList.add("copying-top"), z.highlighted[W].element.classList.contains("highlight-bottom") && z.highlighted[W].element.classList.add("copying-bottom");
          return z.data;
        }, paste = function(n, g, o) {
          const p = this, C = (0, selection.tW)(o);
          let _ = C == p.hashString ? p.style : null;
          C == p.hashString && (o = p.data), o = (0, helpers.parseCSV)(o, "	");
          const G = p.selectedCell[2] - n + 1, z = p.selectedCell[3] - g + 1, m = o[0].length;
          if (G > 1 & Number.isInteger(G / m)) {
            const S = G / m;
            if (_) {
              const l = [];
              for (let a = 0; a < _.length; a += m) {
                const h = _.slice(a, a + m);
                for (let f = 0; f < S; f++) l.push(...h);
              }
              _ = l;
            }
            o = o.map(function(l, a) {
              return Array.apply(null, { length: S * l.length }).map(function(f, d) {
                return l[d % l.length];
              });
            });
          }
          const s = o.length;
          if (z > 1 & Number.isInteger(z / s)) {
            const S = z / s;
            if (_) {
              const l = [];
              for (let a = 0; a < S; a++) l.push(..._);
              _ = l;
            }
            o = Array.apply(null, { length: S * s }).map(function(l, a) {
              return o[a % s];
            });
          }
          const w = dispatch.A.call(p, "onbeforepaste", p, o.map(function(S) {
            return S.map(function(A) {
              return { value: A };
            });
          }), n, g);
          if (w === !1) return !1;
          if (w && (o = w), n != null && g != null && o) {
            let S = 0, A = 0;
            const l = [], a = {}, h = {};
            let f = 0, d = parseInt(n), b = parseInt(g), k = null;
            const M = p.headers.slice(d).filter((he) => he.style.display === "none").length, B = d + M + o[0].length, T = p.headers.length;
            B > T && (p.skipUpdateTableReferences = !0, p.insertColumn(B - T));
            const L = p.rows.slice(b).filter((he) => he.element.style.display === "none").length, O = b + L + o.length, W = p.rows.length;
            for (O > W && (p.skipUpdateTableReferences = !0, p.insertRow(O - W)), p.skipUpdateTableReferences && (p.skipUpdateTableReferences = !1, internal.o8.call(p)); k = o[A]; ) {
              for (S = 0, d = parseInt(n); k[S] != null; ) {
                let he = k[S];
                p.options.columns && p.options.columns[S] && p.options.columns[S].type == "calendar" && (he = jSuites.calendar.extractDateFromString(he, p.options.columns[S].options && p.options.columns[S].options.format || "YYYY-MM-DD"));
                const Z = internal.k9.call(p, d, b, he);
                if (l.push(Z), internal.xF.call(p, d, b, l), _ && _[f]) {
                  const se = (0, internalHelpers.t3)([d, b]);
                  a[se] = _[f], h[se] = p.getStyle(se), p.records[b][d].element.setAttribute("style", _[f]), f++;
                }
                if (S++, k[S] != null) {
                  if (d >= p.headers.length - 1) {
                    if (p.options.allowInsertColumn == 0) break;
                    p.insertColumn();
                  }
                  d = rightGet.call(p, d, b);
                }
              }
              if (A++, o[A]) {
                if (b >= p.rows.length - 1) {
                  if (p.options.allowInsertRow == 0) break;
                  p.insertRow();
                }
                b = downGet.call(p, n, b);
              }
            }
            selection.AH.call(p, n, g, d, b), utils_history.Dh.call(p, { action: "setValue", records: l, selection: p.selectedCell, newStyle: a, oldStyle: h }), internal.am.call(p);
            const P = [];
            for (let he = 0; he < o.length; he++) for (let Z = 0; Z < o[he].length; Z++) P.push({ x: Z + n, y: he + g, value: o[he][Z] });
            dispatch.A.call(p, "onpaste", p, P);
            const ce = l.map(function(he) {
              return { x: he.x, y: he.y, value: he.newValue, oldValue: he.oldValue };
            });
            dispatch.A.call(p, "onafterchanges", p, ce);
          }
          (0, selection.kA)();
        };
        var filter = __webpack_require__(829), footer = __webpack_require__(160);
        const getNumberOfColumns = function() {
          const n = this;
          let g = n.options.columns && n.options.columns.length || 0;
          if (n.options.data && n.options.data[0] !== void 0) {
            const o = Object.keys(n.options.data[0]);
            o.length > g && (g = o.length);
          }
          return n.options.minDimensions && n.options.minDimensions[0] > g && (g = n.options.minDimensions[0]), g;
        }, createCellHeader = function(n) {
          const g = this, o = g.options.columns && g.options.columns[n] && g.options.columns[n].width || g.options.defaultColWidth || 100, p = g.options.columns && g.options.columns[n] && g.options.columns[n].align || g.options.defaultColAlign || "center";
          g.headers[n] = document.createElement("td"), g.headers[n].textContent = g.options.columns && g.options.columns[n] && g.options.columns[n].title || (0, helpers.getColumnName)(n), g.headers[n].setAttribute("data-x", n), g.headers[n].style.textAlign = p, g.options.columns && g.options.columns[n] && g.options.columns[n].title && g.headers[n].setAttribute("title", g.headers[n].innerText), g.options.columns && g.options.columns[n] && g.options.columns[n].id && g.headers[n].setAttribute("id", g.options.columns[n].id);
          const C = document.createElement("col");
          C.setAttribute("width", o), g.cols[n] = { colElement: C, x: n }, g.options.columns && g.options.columns[n] && g.options.columns[n].type == "hidden" && (g.headers[n].style.display = "none", C.style.display = "none");
        }, insertColumn = function(n, g, o, p) {
          const C = this;
          if (C.options.allowInsertColumn != 0) {
            let _, G = [];
            Array.isArray(n) ? (_ = 1, n && (G = n)) : _ = typeof n == "number" ? n : 1, o = !!o;
            const z = Math.max(C.options.columns.length, ...C.options.data.map(function(d) {
              return d.length;
            })) - 1;
            (g == null || g >= parseInt(z) || g < 0) && (g = z), p || (p = []);
            for (let d = 0; d < _; d++) p[d] || (p[d] = {});
            const m = [];
            if (Array.isArray(n)) {
              const d = [];
              for (let k = 0; k < C.options.data.length; k++) d.push(k < n.length ? n[k] : "");
              const b = { column: g + (o ? 0 : 1), options: Object.assign({}, p[0]), data: d };
              m.push(b);
            } else for (let d = 0; d < n; d++) {
              const b = { column: g + d + (o ? 0 : 1), options: Object.assign({}, p[d]) };
              m.push(b);
            }
            if (dispatch.A.call(C, "onbeforeinsertcolumn", C, m) === !1) return !1;
            if (C.options.mergeCells && Object.keys(C.options.mergeCells).length > 0 && merges.Lt.call(C, g, o).length) {
              if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
              C.destroyMerge();
            }
            const s = o ? g : g + 1;
            C.options.columns = (0, internalHelpers.Hh)(C.options.columns, s, p);
            const w = C.headers.splice(s), S = C.cols.splice(s), A = [], l = [], a = [], h = [], f = [];
            for (let d = s; d < _ + s; d++) createCellHeader.call(C, d), C.headerContainer.insertBefore(C.headers[d], C.headerContainer.children[d + 1]), C.colgroupContainer.insertBefore(C.cols[d].colElement, C.colgroupContainer.children[d + 1]), A.push(C.headers[d]), l.push(C.cols[d]);
            if (C.options.footers) for (let d = 0; d < C.options.footers.length; d++) {
              f[d] = [];
              for (let b = 0; b < _; b++) f[d].push("");
              C.options.footers[d].splice(s, 0, f[d]);
            }
            for (let d = 0; d < C.options.data.length; d++) {
              const b = C.options.data[d].splice(s), k = C.records[d].splice(s);
              h[d] = [], a[d] = [];
              for (let M = s; M < _ + s; M++) {
                const B = G[d] ? G[d] : "";
                C.options.data[d][M] = B;
                const T = internal.P9.call(C, M, d, C.options.data[d][M]);
                C.records[d][M] = { element: T, y: d }, C.rows[d] && C.rows[d].element.insertBefore(T, C.rows[d].element.children[M + 1]), C.options.columns && C.options.columns[M] && typeof C.options.columns[M].render == "function" && C.options.columns[M].render(T, B, parseInt(M), parseInt(d), C, C.options.columns[M]), h[d].push(B), a[d].push({ element: T, x: M, y: d });
              }
              Array.prototype.push.apply(C.options.data[d], b), Array.prototype.push.apply(C.records[d], k);
            }
            Array.prototype.push.apply(C.headers, w), Array.prototype.push.apply(C.cols, S);
            for (let d = s; d < C.cols.length; d++) C.cols[d].x = d;
            for (let d = 0; d < C.records.length; d++) for (let b = 0; b < C.records[d].length; b++) C.records[d][b].x = b;
            if (C.options.nestedHeaders && C.options.nestedHeaders.length > 0 && C.options.nestedHeaders[0] && C.options.nestedHeaders[0][0]) for (let d = 0; d < C.options.nestedHeaders.length; d++) {
              const b = parseInt(C.options.nestedHeaders[d][C.options.nestedHeaders[d].length - 1].colspan) + _;
              C.options.nestedHeaders[d][C.options.nestedHeaders[d].length - 1].colspan = b, C.thead.children[d].children[C.thead.children[d].children.length - 1].setAttribute("colspan", b);
              let k = C.thead.children[d].children[C.thead.children[d].children.length - 1].getAttribute("data-column");
              k = k.split(",");
              for (let M = s; M < _ + s; M++) k.push(M);
              C.thead.children[d].children[C.thead.children[d].children.length - 1].setAttribute("data-column", k);
            }
            utils_history.Dh.call(C, { action: "insertColumn", columnNumber: g, numOfColumns: _, insertBefore: o, columns: p, headers: A, cols: l, records: a, footers: f, data: h }), internal.o8.call(C), dispatch.A.call(C, "oninsertcolumn", C, m);
          }
        }, moveColumn = function(n, g) {
          const o = this;
          if (o.options.mergeCells && Object.keys(o.options.mergeCells).length > 0) {
            let _;
            if (_ = n > g ? 1 : 0, merges.Lt.call(o, n).length || merges.Lt.call(o, g, _).length) {
              if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
              o.destroyMerge();
            }
          }
          if ((n = parseInt(n)) > (g = parseInt(g))) {
            o.headerContainer.insertBefore(o.headers[n], o.headers[g]), o.colgroupContainer.insertBefore(o.cols[n].colElement, o.cols[g].colElement);
            for (let _ = 0; _ < o.rows.length; _++) o.rows[_].element.insertBefore(o.records[_][n].element, o.records[_][g].element);
          } else {
            o.headerContainer.insertBefore(o.headers[n], o.headers[g].nextSibling), o.colgroupContainer.insertBefore(o.cols[n].colElement, o.cols[g].colElement.nextSibling);
            for (let _ = 0; _ < o.rows.length; _++) o.rows[_].element.insertBefore(o.records[_][n].element, o.records[_][g].element.nextSibling);
          }
          o.options.columns.splice(g, 0, o.options.columns.splice(n, 1)[0]), o.headers.splice(g, 0, o.headers.splice(n, 1)[0]), o.cols.splice(g, 0, o.cols.splice(n, 1)[0]);
          const p = Math.min(n, g), C = Math.max(n, g);
          for (let _ = 0; _ < o.rows.length; _++) o.options.data[_].splice(g, 0, o.options.data[_].splice(n, 1)[0]), o.records[_].splice(g, 0, o.records[_].splice(n, 1)[0]);
          for (let _ = p; _ <= C; _++) o.cols[_].x = _;
          for (let _ = 0; _ < o.records.length; _++) for (let G = p; G <= C; G++) o.records[_][G].x = G;
          if (o.options.footers) for (let _ = 0; _ < o.options.footers.length; _++) o.options.footers[_].splice(g, 0, o.options.footers[_].splice(n, 1)[0]);
          utils_history.Dh.call(o, { action: "moveColumn", oldValue: n, newValue: g }), internal.o8.call(o), dispatch.A.call(o, "onmovecolumn", o, n, g, 1);
        }, deleteColumn = function(n, g) {
          const o = this;
          if (o.options.allowDeleteColumn != 0) if (o.headers.length > 1) {
            if (n == null) {
              const _ = o.getSelectedColumns(!0);
              _.length ? (n = parseInt(_[0]), g = parseInt(_.length)) : (n = o.headers.length - 1, g = 1);
            }
            const p = o.options.data[0].length - 1;
            (n == null || n > p || n < 0) && (n = p), g || (g = 1), g > o.options.data[0].length - n && (g = o.options.data[0].length - n);
            const C = [];
            for (let _ = 0; _ < g; _++) C.push(_ + n);
            if (dispatch.A.call(o, "onbeforedeletecolumn", o, C) === !1) return !1;
            if (parseInt(n) > -1) {
              let _ = !1;
              if (o.options.mergeCells && Object.keys(o.options.mergeCells).length > 0) for (let A = n; A < n + g; A++) merges.Lt.call(o, A, null).length && (_ = !0);
              if (_) {
                if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
                o.destroyMerge();
              }
              const G = o.options.columns ? o.options.columns.splice(n, g) : void 0;
              for (let A = n; A < n + g; A++) o.cols[A].colElement.className = "", o.headers[A].className = "", o.cols[A].colElement.parentNode.removeChild(o.cols[A].colElement), o.headers[A].parentNode.removeChild(o.headers[A]);
              const z = o.headers.splice(n, g), m = o.cols.splice(n, g), s = [], w = [], S = [];
              for (let A = 0; A < o.options.data.length; A++) for (let l = n; l < n + g; l++) o.records[A][l].element.className = "", o.records[A][l].element.parentNode.removeChild(o.records[A][l].element);
              for (let A = 0; A < o.options.data.length; A++) w[A] = o.options.data[A].splice(n, g), s[A] = o.records[A].splice(n, g);
              for (let A = n; A < o.cols.length; A++) o.cols[A].x = A;
              for (let A = 0; A < o.records.length; A++) for (let l = n; l < o.records[A].length; l++) o.records[A][l].x = l;
              if (o.options.footers) for (let A = 0; A < o.options.footers.length; A++) S[A] = o.options.footers[A].splice(n, g);
              if (selection.at.call(o, 0, n, n + g - 1), o.options.nestedHeaders && o.options.nestedHeaders.length > 0 && o.options.nestedHeaders[0] && o.options.nestedHeaders[0][0]) for (let A = 0; A < o.options.nestedHeaders.length; A++) {
                const l = parseInt(o.options.nestedHeaders[A][o.options.nestedHeaders[A].length - 1].colspan) - g;
                o.options.nestedHeaders[A][o.options.nestedHeaders[A].length - 1].colspan = l, o.thead.children[A].children[o.thead.children[A].children.length - 1].setAttribute("colspan", l);
              }
              utils_history.Dh.call(o, { action: "deleteColumn", columnNumber: n, numOfColumns: g, insertBefore: 1, columns: G, headers: z, cols: m, records: s, footers: S, data: w }), internal.o8.call(o), dispatch.A.call(o, "ondeletecolumn", o, C);
            }
          } else console.error("Jspreadsheet: It is not possible to delete the last column");
        }, getWidth = function(n) {
          const g = this;
          let o;
          if (n === void 0) {
            o = [];
            for (let p = 0; p < g.headers.length; p++) o.push(g.options.columns && g.options.columns[p] && g.options.columns[p].width || g.options.defaultColWidth || 100);
          } else o = parseInt(g.cols[n].colElement.getAttribute("width"));
          return o;
        }, setWidth = function(n, g, o) {
          const p = this;
          if (g) {
            if (Array.isArray(n)) {
              o || (o = []);
              for (let C = 0; C < n.length; C++) {
                o[C] || (o[C] = parseInt(p.cols[n[C]].colElement.getAttribute("width")));
                const _ = Array.isArray(g) && g[C] ? g[C] : g;
                p.cols[n[C]].colElement.setAttribute("width", _), p.options.columns || (p.options.columns = []), p.options.columns[n[C]] || (p.options.columns[n[C]] = {}), p.options.columns[n[C]].width = _;
              }
            } else o || (o = parseInt(p.cols[n].colElement.getAttribute("width"))), p.cols[n].colElement.setAttribute("width", g), p.options.columns || (p.options.columns = []), p.options.columns[n] || (p.options.columns[n] = {}), p.options.columns[n].width = g;
            utils_history.Dh.call(p, { action: "setWidth", column: n, oldValue: o, newValue: g }), dispatch.A.call(p, "onresizecolumn", p, n, g, o), selection.Aq.call(p);
          }
        }, showColumn = function(n) {
          const g = this;
          Array.isArray(n) || (n = [n]);
          for (let o = 0; o < n.length; o++) {
            const p = n[o];
            g.headers[p].style.display = "", g.cols[p].colElement.style.display = "", g.filter && g.filter.children.length > p + 1 && (g.filter.children[p + 1].style.display = "");
            for (let C = 0; C < g.options.data.length; C++) g.records[C][p].element.style.display = "";
          }
          g.options.footers && footer.e.call(g), g.resetSelection();
        }, hideColumn = function(n) {
          const g = this;
          Array.isArray(n) || (n = [n]);
          for (let o = 0; o < n.length; o++) {
            const p = n[o];
            g.headers[p].style.display = "none", g.cols[p].colElement.style.display = "none", g.filter && g.filter.children.length > p + 1 && (g.filter.children[p + 1].style.display = "none");
            for (let C = 0; C < g.options.data.length; C++) g.records[C][p].element.style.display = "none";
          }
          g.options.footers && footer.e.call(g), g.resetSelection();
        }, getColumnData = function(n, g) {
          const o = this, p = [];
          for (let C = 0; C < o.options.data.length; C++) g ? p.push(o.records[C][n].element.innerHTML) : p.push(o.options.data[C][n]);
          return p;
        }, setColumnData = function(n, g, o) {
          const p = this;
          for (let C = 0; C < p.rows.length; C++) {
            const _ = (0, internalHelpers.t3)([n, C]);
            g[C] != null && p.setValue(_, g[C], o);
          }
        }, createRow = function(n, g) {
          const o = this;
          o.records[n] || (o.records[n] = []), g || (g = o.options.data[n]);
          const p = { element: document.createElement("tr"), y: n };
          o.rows[n] = p, p.element.setAttribute("data-y", n);
          let C = null;
          o.options.defaultRowHeight && (p.element.style.height = o.options.defaultRowHeight + "px"), o.options.rows && o.options.rows[n] && (o.options.rows[n].height && (p.element.style.height = o.options.rows[n].height), o.options.rows[n].title && (C = o.options.rows[n].title)), C || (C = parseInt(n + 1));
          const _ = document.createElement("td");
          _.innerHTML = C, _.setAttribute("data-y", n), _.className = "jss_row", p.element.appendChild(_);
          const G = getNumberOfColumns.call(o);
          for (let z = 0; z < G; z++) o.records[n][z] = { element: internal.P9.call(this, z, n, g[z]), x: z, y: n }, p.element.appendChild(o.records[n][z].element), o.options.columns && o.options.columns[z] && typeof o.options.columns[z].render == "function" && o.options.columns[z].render(o.records[n][z].element, g[z], parseInt(z), parseInt(n), o, o.options.columns[z]);
          return p;
        }, insertRow = function(n, g, o) {
          const p = this;
          if (p.options.allowInsertRow != 0) {
            let C, _ = [];
            Array.isArray(n) ? (C = 1, n && (_ = n)) : C = n !== void 0 ? n : 1, o = !!o;
            const G = p.options.data.length - 1;
            (g == null || g >= parseInt(G) || g < 0) && (g = G);
            const z = [];
            for (let h = 0; h < C; h++) {
              const f = [];
              for (let d = 0; d < p.options.columns.length; d++) f[d] = _[d] ? _[d] : "";
              z.push({ row: h + g + (o ? 0 : 1), data: f });
            }
            if (dispatch.A.call(p, "onbeforeinsertrow", p, z) === !1) return !1;
            if (p.options.mergeCells && Object.keys(p.options.mergeCells).length > 0 && merges.D0.call(p, g, o).length) {
              if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
              p.destroyMerge();
            }
            if (p.options.search == 1) {
              if (p.results && p.results.length != p.rows.length) {
                if (!confirm(jSuites.translate("This action will clear your search results. Are you sure?"))) return !1;
                p.resetSearch();
              }
              p.results = null;
            }
            const m = o ? g : g + 1, s = p.records.splice(m), w = p.options.data.splice(m), S = p.rows.splice(m), A = [], l = [], a = [];
            for (let h = m; h < C + m; h++) {
              p.options.data[h] = [];
              for (let d = 0; d < p.options.columns.length; d++) p.options.data[h][d] = _[d] ? _[d] : "";
              const f = createRow.call(p, h, p.options.data[h]);
              S[0] ? Array.prototype.indexOf.call(p.tbody.children, S[0].element) >= 0 && p.tbody.insertBefore(f.element, S[0].element) : Array.prototype.indexOf.call(p.tbody.children, p.rows[g].element) >= 0 && p.tbody.appendChild(f.element), A.push([...p.records[h]]), l.push([...p.options.data[h]]), a.push(f);
            }
            Array.prototype.push.apply(p.records, s), Array.prototype.push.apply(p.options.data, w), Array.prototype.push.apply(p.rows, S);
            for (let h = m; h < p.rows.length; h++) p.rows[h].y = h;
            for (let h = m; h < p.records.length; h++) for (let f = 0; f < p.records[h].length; f++) p.records[h][f].y = h;
            p.options.pagination > 0 && p.page(p.pageNumber), utils_history.Dh.call(p, { action: "insertRow", rowNumber: g, numOfRows: C, insertBefore: o, rowRecords: A, rowData: l, rowNode: a }), internal.o8.call(p), dispatch.A.call(p, "oninsertrow", p, z);
          }
        }, moveRow = function(n, g, o) {
          const p = this;
          if (p.options.mergeCells && Object.keys(p.options.mergeCells).length > 0) {
            let G;
            if (G = n > g ? 1 : 0, merges.D0.call(p, n).length || merges.D0.call(p, g, G).length) {
              if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
              p.destroyMerge();
            }
          }
          if (p.options.search == 1) {
            if (p.results && p.results.length != p.rows.length) {
              if (!confirm(jSuites.translate("This action will clear your search results. Are you sure?"))) return !1;
              p.resetSearch();
            }
            p.results = null;
          }
          o || (Array.prototype.indexOf.call(p.tbody.children, p.rows[g].element) >= 0 ? n > g ? p.tbody.insertBefore(p.rows[n].element, p.rows[g].element) : p.tbody.insertBefore(p.rows[n].element, p.rows[g].element.nextSibling) : p.tbody.removeChild(p.rows[n].element)), p.rows.splice(g, 0, p.rows.splice(n, 1)[0]), p.records.splice(g, 0, p.records.splice(n, 1)[0]), p.options.data.splice(g, 0, p.options.data.splice(n, 1)[0]);
          const C = Math.min(n, g), _ = Math.max(n, g);
          for (let G = C; G <= _; G++) p.rows[G].y = G;
          for (let G = C; G <= _; G++) for (let z = 0; z < p.records[G].length; z++) p.records[G][z].y = G;
          p.options.pagination > 0 && p.tbody.children.length != p.options.pagination && p.page(p.pageNumber), utils_history.Dh.call(p, { action: "moveRow", oldValue: n, newValue: g }), internal.o8.call(p), dispatch.A.call(p, "onmoverow", p, parseInt(n), parseInt(g), 1);
        }, deleteRow = function(n, g) {
          const o = this;
          if (o.options.allowDeleteRow != 0) if (o.options.allowDeletingAllRows == 1 || o.options.data.length > 1) {
            if (n == null) {
              const _ = selection.R5.call(o);
              _.length === 0 ? (n = o.options.data.length - 1, g = 1) : (n = _[0], g = _.length);
            }
            let p = o.options.data.length - 1;
            (n == null || n > p || n < 0) && (n = p), g || (g = 1), n + g >= o.options.data.length && (g = o.options.data.length - n);
            const C = [];
            for (let _ = 0; _ < g; _++) C.push(_ + n);
            if (dispatch.A.call(o, "onbeforedeleterow", o, C) === !1) return !1;
            if (parseInt(n) > -1) {
              let _ = !1;
              if (o.options.mergeCells && Object.keys(o.options.mergeCells).length > 0) for (let s = n; s < n + g; s++) merges.D0.call(o, s, !1).length && (_ = !0);
              if (_) {
                if (!confirm(jSuites.translate("This action will destroy any existing merged cells. Are you sure?"))) return !1;
                o.destroyMerge();
              }
              if (o.options.search == 1) {
                if (o.results && o.results.length != o.rows.length) {
                  if (!confirm(jSuites.translate("This action will clear your search results. Are you sure?"))) return !1;
                  o.resetSearch();
                }
                o.results = null;
              }
              o.options.allowDeletingAllRows != 1 && p + 1 === g && (g--, console.error("Jspreadsheet: It is not possible to delete the last row"));
              for (let s = n; s < n + g; s++) Array.prototype.indexOf.call(o.tbody.children, o.rows[s].element) >= 0 && (o.rows[s].element.className = "", o.rows[s].element.parentNode.removeChild(o.rows[s].element));
              const G = o.records.splice(n, g), z = o.options.data.splice(n, g), m = o.rows.splice(n, g);
              for (let s = n; s < o.rows.length; s++) o.rows[s].y = s;
              for (let s = n; s < o.records.length; s++) for (let w = 0; w < o.records[s].length; w++) o.records[s][w].y = s;
              o.options.pagination > 0 && o.tbody.children.length != o.options.pagination && o.page(o.pageNumber), selection.at.call(o, 1, n, n + g - 1), utils_history.Dh.call(o, { action: "deleteRow", rowNumber: n, numOfRows: g, insertBefore: 1, rowRecords: G, rowData: z, rowNode: m }), internal.o8.call(o), dispatch.A.call(o, "ondeleterow", o, C);
            }
          } else console.error("Jspreadsheet: It is not possible to delete the last row");
        }, getHeight = function(n) {
          const g = this;
          let o;
          if (n === void 0) {
            o = [];
            for (let p = 0; p < g.rows.length; p++) {
              const C = g.rows[p].element.style.height;
              C && (o[p] = C);
            }
          } else typeof n == "object" && (n = $(n).getAttribute("data-y")), o = g.rows[n].element.style.height;
          return o;
        }, setHeight = function(n, g, o) {
          const p = this;
          g > 0 && (o || (o = p.rows[n].element.getAttribute("height")) || (o = p.rows[n].element.getBoundingClientRect().height), g = parseInt(g), p.rows[n].element.style.height = g + "px", p.options.rows || (p.options.rows = []), p.options.rows[n] || (p.options.rows[n] = {}), p.options.rows[n].height = g, utils_history.Dh.call(p, { action: "setHeight", row: n, oldValue: o, newValue: g }), dispatch.A.call(p, "onresizerow", p, n, g, o), selection.Aq.call(p));
        }, showRow = function(n) {
          const g = this;
          Array.isArray(n) || (n = [n]), n.forEach(function(o) {
            g.rows[o].element.style.display = "";
          });
        }, hideRow = function(n) {
          const g = this;
          Array.isArray(n) || (n = [n]), n.forEach(function(o) {
            g.rows[o].element.style.display = "none";
          });
        }, getRowData = function(n, g) {
          return g ? this.records[n].map(function(o) {
            return o.element.innerHTML;
          }) : this.options.data[n];
        }, setRowData = function(n, g, o) {
          const p = this;
          for (let C = 0; C < p.headers.length; C++) {
            const _ = (0, internalHelpers.t3)([C, n]);
            g[C] != null && p.setValue(_, g[C], o);
          }
        };
        var version = { version: "5.0.0", host: "https://bossanova.uk/jspreadsheet", license: "MIT", print: function() {
          return [["Jspreadsheet CE", this.version, this.host, this.license].join(`\r
`)];
        } };
        const getElement = function(n) {
          let g = 0, o = 0;
          return function p(C) {
            C.className && (C.classList.contains("jss_container") && (o = C), C.classList.contains("jss_spreadsheet") && (o = C.querySelector(":scope > .jtabs-content > .jtabs-selected"))), C.tagName == "THEAD" ? g = 1 : C.tagName == "TBODY" && (g = 2), C.parentNode && (o || p(C.parentNode));
          }(n), [o, g];
        }, mouseUpControls = function(n) {
          if (libraryBase.jspreadsheet.current) if (libraryBase.jspreadsheet.current.resizing) {
            if (libraryBase.jspreadsheet.current.resizing.column) {
              const g = parseInt(libraryBase.jspreadsheet.current.cols[libraryBase.jspreadsheet.current.resizing.column].colElement.getAttribute("width")), o = libraryBase.jspreadsheet.current.getSelectedColumns();
              if (o.length > 1) {
                const p = [];
                for (let C = 0; C < o.length; C++) p.push(parseInt(libraryBase.jspreadsheet.current.cols[o[C]].colElement.getAttribute("width")));
                p[o.indexOf(parseInt(libraryBase.jspreadsheet.current.resizing.column))] = libraryBase.jspreadsheet.current.resizing.width, setWidth.call(libraryBase.jspreadsheet.current, o, g, p);
              } else setWidth.call(libraryBase.jspreadsheet.current, parseInt(libraryBase.jspreadsheet.current.resizing.column), g, libraryBase.jspreadsheet.current.resizing.width);
              libraryBase.jspreadsheet.current.headers[libraryBase.jspreadsheet.current.resizing.column].classList.remove("resizing");
              for (let p = 0; p < libraryBase.jspreadsheet.current.records.length; p++) libraryBase.jspreadsheet.current.records[p][libraryBase.jspreadsheet.current.resizing.column] && libraryBase.jspreadsheet.current.records[p][libraryBase.jspreadsheet.current.resizing.column].element.classList.remove("resizing");
            } else {
              libraryBase.jspreadsheet.current.rows[libraryBase.jspreadsheet.current.resizing.row].element.children[0].classList.remove("resizing");
              let g = libraryBase.jspreadsheet.current.rows[libraryBase.jspreadsheet.current.resizing.row].element.getAttribute("height");
              setHeight.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.resizing.row, g, libraryBase.jspreadsheet.current.resizing.height), libraryBase.jspreadsheet.current.resizing.element.classList.remove("resizing");
            }
            libraryBase.jspreadsheet.current.resizing = null;
          } else if (libraryBase.jspreadsheet.current.dragging) {
            if (libraryBase.jspreadsheet.current.dragging) {
              if (libraryBase.jspreadsheet.current.dragging.column) {
                const g = n.target.getAttribute("data-x");
                libraryBase.jspreadsheet.current.headers[libraryBase.jspreadsheet.current.dragging.column].classList.remove("dragging");
                for (let o = 0; o < libraryBase.jspreadsheet.current.rows.length; o++) libraryBase.jspreadsheet.current.records[o][libraryBase.jspreadsheet.current.dragging.column] && libraryBase.jspreadsheet.current.records[o][libraryBase.jspreadsheet.current.dragging.column].element.classList.remove("dragging");
                for (let o = 0; o < libraryBase.jspreadsheet.current.headers.length; o++) libraryBase.jspreadsheet.current.headers[o].classList.remove("dragging-left"), libraryBase.jspreadsheet.current.headers[o].classList.remove("dragging-right");
                g && libraryBase.jspreadsheet.current.dragging.column != libraryBase.jspreadsheet.current.dragging.destination && libraryBase.jspreadsheet.current.moveColumn(libraryBase.jspreadsheet.current.dragging.column, libraryBase.jspreadsheet.current.dragging.destination);
              } else {
                let g;
                libraryBase.jspreadsheet.current.dragging.element.nextSibling ? (g = parseInt(libraryBase.jspreadsheet.current.dragging.element.nextSibling.getAttribute("data-y")), libraryBase.jspreadsheet.current.dragging.row < g && (g -= 1)) : g = parseInt(libraryBase.jspreadsheet.current.dragging.element.previousSibling.getAttribute("data-y")), libraryBase.jspreadsheet.current.dragging.row != libraryBase.jspreadsheet.current.dragging.destination && moveRow.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.dragging.row, g, !0), libraryBase.jspreadsheet.current.dragging.element.classList.remove("dragging");
              }
              libraryBase.jspreadsheet.current.dragging = null;
            }
          } else libraryBase.jspreadsheet.current.selectedCorner && (libraryBase.jspreadsheet.current.selectedCorner = !1, libraryBase.jspreadsheet.current.selection.length > 0 && (selection.kF.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.selection[0], libraryBase.jspreadsheet.current.selection[libraryBase.jspreadsheet.current.selection.length - 1]), selection.gG.call(libraryBase.jspreadsheet.current)));
          libraryBase.jspreadsheet.timeControl && (clearTimeout(libraryBase.jspreadsheet.timeControl), libraryBase.jspreadsheet.timeControl = null), libraryBase.jspreadsheet.isMouseAction = !1;
        }, mouseDownControls = function(n) {
          let g;
          g = (n = n || window.event).buttons ? n.buttons : n.button ? n.button : n.which;
          const o = getElement(n.target);
          if (o[0] ? libraryBase.jspreadsheet.current != o[0].jssWorksheet && (libraryBase.jspreadsheet.current && (libraryBase.jspreadsheet.current.edition && closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0), libraryBase.jspreadsheet.current.resetSelection()), libraryBase.jspreadsheet.current = o[0].jssWorksheet) : libraryBase.jspreadsheet.current && (libraryBase.jspreadsheet.current.edition && closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0), n.target.classList.contains("jss_object") || (selection.gE.call(libraryBase.jspreadsheet.current, !0), libraryBase.jspreadsheet.current = null)), libraryBase.jspreadsheet.current && g == 1) {
            if (n.target.classList.contains("jss_selectall")) libraryBase.jspreadsheet.current && selection.Ub.call(libraryBase.jspreadsheet.current);
            else if (n.target.classList.contains("jss_corner")) libraryBase.jspreadsheet.current.options.editable != 0 && (libraryBase.jspreadsheet.current.selectedCorner = !0);
            else {
              if (o[1] == 1) {
                const p = n.target.getAttribute("data-x");
                if (p) {
                  const C = n.target.getBoundingClientRect();
                  if (libraryBase.jspreadsheet.current.options.columnResize != 0 && C.width - n.offsetX < 6) {
                    libraryBase.jspreadsheet.current.resizing = { mousePosition: n.pageX, column: p, width: C.width }, libraryBase.jspreadsheet.current.headers[p].classList.add("resizing");
                    for (let _ = 0; _ < libraryBase.jspreadsheet.current.records.length; _++) libraryBase.jspreadsheet.current.records[_][p] && libraryBase.jspreadsheet.current.records[_][p].element.classList.add("resizing");
                  } else if (libraryBase.jspreadsheet.current.options.columnDrag != 0 && C.height - n.offsetY < 6) if (merges.Lt.call(libraryBase.jspreadsheet.current, p).length) console.error("Jspreadsheet: This column is part of a merged cell.");
                  else {
                    libraryBase.jspreadsheet.current.resetSelection(), libraryBase.jspreadsheet.current.dragging = { element: n.target, column: p, destination: p }, libraryBase.jspreadsheet.current.headers[p].classList.add("dragging");
                    for (let _ = 0; _ < libraryBase.jspreadsheet.current.records.length; _++) libraryBase.jspreadsheet.current.records[_][p] && libraryBase.jspreadsheet.current.records[_][p].element.classList.add("dragging");
                  }
                  else {
                    let _, G;
                    libraryBase.jspreadsheet.current.selectedHeader && (n.shiftKey || n.ctrlKey) ? (_ = libraryBase.jspreadsheet.current.selectedHeader, G = p) : (libraryBase.jspreadsheet.current.selectedHeader == p && libraryBase.jspreadsheet.current.options.allowRenameColumn != 0 && (libraryBase.jspreadsheet.timeControl = setTimeout(function() {
                      libraryBase.jspreadsheet.current.setHeader(p);
                    }, 800)), libraryBase.jspreadsheet.current.selectedHeader = p, _ = p, G = p), selection.AH.call(libraryBase.jspreadsheet.current, _, 0, G, libraryBase.jspreadsheet.current.options.data.length - 1, n);
                  }
                } else if (n.target.parentNode.classList.contains("jss_nested")) {
                  let C, _;
                  if (n.target.getAttribute("data-column")) {
                    const G = n.target.getAttribute("data-column").split(",");
                    C = parseInt(G[0]), _ = parseInt(G[G.length - 1]);
                  } else C = 0, _ = libraryBase.jspreadsheet.current.options.columns.length - 1;
                  selection.AH.call(libraryBase.jspreadsheet.current, C, 0, _, libraryBase.jspreadsheet.current.options.data.length - 1, n);
                }
              } else libraryBase.jspreadsheet.current.selectedHeader = !1;
              if (o[1] == 2) {
                const p = parseInt(n.target.getAttribute("data-y"));
                if (n.target.classList.contains("jss_row")) {
                  const C = n.target.getBoundingClientRect();
                  if (libraryBase.jspreadsheet.current.options.rowResize != 0 && C.height - n.offsetY < 6) libraryBase.jspreadsheet.current.resizing = { element: n.target.parentNode, mousePosition: n.pageY, row: p, height: C.height }, n.target.parentNode.classList.add("resizing");
                  else if (libraryBase.jspreadsheet.current.options.rowDrag != 0 && C.width - n.offsetX < 6) merges.D0.call(libraryBase.jspreadsheet.current, p).length ? console.error("Jspreadsheet: This row is part of a merged cell") : libraryBase.jspreadsheet.current.options.search == 1 && libraryBase.jspreadsheet.current.results ? console.error("Jspreadsheet: Please clear your search before perform this action") : (libraryBase.jspreadsheet.current.resetSelection(), libraryBase.jspreadsheet.current.dragging = { element: n.target.parentNode, row: p, destination: p }, n.target.parentNode.classList.add("dragging"));
                  else {
                    let _, G;
                    libraryBase.jspreadsheet.current.selectedRow && (n.shiftKey || n.ctrlKey) ? (_ = libraryBase.jspreadsheet.current.selectedRow, G = p) : (libraryBase.jspreadsheet.current.selectedRow = p, _ = p, G = p), selection.AH.call(libraryBase.jspreadsheet.current, null, _, null, G, n);
                  }
                } else if (n.target.classList.contains("jclose") && n.target.clientWidth - n.offsetX < 50 && n.offsetY < 50) closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0);
                else {
                  const C = function(G) {
                    const z = G.getAttribute("data-x"), m = G.getAttribute("data-y");
                    return z && m ? [z, m] : G.parentNode ? C(G.parentNode) : void 0;
                  }, _ = C(n.target);
                  if (_) {
                    const G = _[0], z = _[1];
                    libraryBase.jspreadsheet.current.edition && (libraryBase.jspreadsheet.current.edition[2] == G && libraryBase.jspreadsheet.current.edition[3] == z || closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0)), libraryBase.jspreadsheet.current.edition || (n.shiftKey ? selection.AH.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.selectedCell[0], libraryBase.jspreadsheet.current.selectedCell[1], G, z, n) : selection.AH.call(libraryBase.jspreadsheet.current, G, z, void 0, void 0, n)), libraryBase.jspreadsheet.current.selectedHeader = null, libraryBase.jspreadsheet.current.selectedRow = null;
                  }
                }
              } else libraryBase.jspreadsheet.current.selectedRow = !1;
              n.target.classList.contains("jss_page") && (n.target.textContent == "<" ? libraryBase.jspreadsheet.current.page(0) : n.target.textContent == ">" ? libraryBase.jspreadsheet.current.page(n.target.getAttribute("title") - 1) : libraryBase.jspreadsheet.current.page(n.target.textContent - 1));
            }
            libraryBase.jspreadsheet.current.edition ? libraryBase.jspreadsheet.isMouseAction = !1 : libraryBase.jspreadsheet.isMouseAction = !0;
          } else libraryBase.jspreadsheet.isMouseAction = !1;
        }, mouseMoveControls = function(n) {
          let g;
          if (g = (n = n || window.event).buttons ? n.buttons : n.button ? n.button : n.which, g || (libraryBase.jspreadsheet.isMouseAction = !1), libraryBase.jspreadsheet.current) if (libraryBase.jspreadsheet.isMouseAction == 1) {
            if (libraryBase.jspreadsheet.current.resizing) if (libraryBase.jspreadsheet.current.resizing.column) {
              const o = n.pageX - libraryBase.jspreadsheet.current.resizing.mousePosition;
              if (libraryBase.jspreadsheet.current.resizing.width + o > 0) {
                const p = libraryBase.jspreadsheet.current.resizing.width + o;
                libraryBase.jspreadsheet.current.cols[libraryBase.jspreadsheet.current.resizing.column].colElement.setAttribute("width", p), selection.Aq.call(libraryBase.jspreadsheet.current);
              }
            } else {
              const o = n.pageY - libraryBase.jspreadsheet.current.resizing.mousePosition;
              if (libraryBase.jspreadsheet.current.resizing.height + o > 0) {
                const p = libraryBase.jspreadsheet.current.resizing.height + o;
                libraryBase.jspreadsheet.current.rows[libraryBase.jspreadsheet.current.resizing.row].element.setAttribute("height", p), selection.Aq.call(libraryBase.jspreadsheet.current);
              }
            }
            else if (libraryBase.jspreadsheet.current.dragging) if (libraryBase.jspreadsheet.current.dragging.column) {
              const o = n.target.getAttribute("data-x");
              if (o) if (merges.Lt.call(libraryBase.jspreadsheet.current, o).length) console.error("Jspreadsheet: This column is part of a merged cell.");
              else {
                for (let p = 0; p < libraryBase.jspreadsheet.current.headers.length; p++) libraryBase.jspreadsheet.current.headers[p].classList.remove("dragging-left"), libraryBase.jspreadsheet.current.headers[p].classList.remove("dragging-right");
                libraryBase.jspreadsheet.current.dragging.column == o ? libraryBase.jspreadsheet.current.dragging.destination = parseInt(o) : n.target.clientWidth / 2 > n.offsetX ? (libraryBase.jspreadsheet.current.dragging.column < o ? libraryBase.jspreadsheet.current.dragging.destination = parseInt(o) - 1 : libraryBase.jspreadsheet.current.dragging.destination = parseInt(o), libraryBase.jspreadsheet.current.headers[o].classList.add("dragging-left")) : (libraryBase.jspreadsheet.current.dragging.column < o ? libraryBase.jspreadsheet.current.dragging.destination = parseInt(o) : libraryBase.jspreadsheet.current.dragging.destination = parseInt(o) + 1, libraryBase.jspreadsheet.current.headers[o].classList.add("dragging-right"));
              }
            } else {
              const o = n.target.getAttribute("data-y");
              if (o) if (merges.D0.call(libraryBase.jspreadsheet.current, o).length) console.error("Jspreadsheet: This row is part of a merged cell.");
              else {
                const p = n.target.clientHeight / 2 > n.offsetY ? n.target.parentNode.nextSibling : n.target.parentNode;
                libraryBase.jspreadsheet.current.dragging.element != p && (n.target.parentNode.parentNode.insertBefore(libraryBase.jspreadsheet.current.dragging.element, p), libraryBase.jspreadsheet.current.dragging.destination = Array.prototype.indexOf.call(libraryBase.jspreadsheet.current.dragging.element.parentNode.children, libraryBase.jspreadsheet.current.dragging.element));
              }
            }
          } else {
            const o = n.target.getAttribute("data-x"), p = n.target.getAttribute("data-y"), C = n.target.getBoundingClientRect();
            libraryBase.jspreadsheet.current.cursor && (libraryBase.jspreadsheet.current.cursor.style.cursor = "", libraryBase.jspreadsheet.current.cursor = null), n.target.parentNode.parentNode && n.target.parentNode.parentNode.className && (n.target.parentNode.parentNode.classList.contains("resizable") && (n.target && o && !p && C.width - (n.clientX - C.left) < 6 ? (libraryBase.jspreadsheet.current.cursor = n.target, libraryBase.jspreadsheet.current.cursor.style.cursor = "col-resize") : n.target && !o && p && C.height - (n.clientY - C.top) < 6 && (libraryBase.jspreadsheet.current.cursor = n.target, libraryBase.jspreadsheet.current.cursor.style.cursor = "row-resize")), n.target.parentNode.parentNode.classList.contains("draggable") && (n.target && !o && p && C.width - (n.clientX - C.left) < 6 || n.target && o && !p && C.height - (n.clientY - C.top) < 6) && (libraryBase.jspreadsheet.current.cursor = n.target, libraryBase.jspreadsheet.current.cursor.style.cursor = "move"));
          }
        }, updateCopySelection = function(n, g) {
          const o = this;
          selection.gG.call(o);
          const p = o.selectedContainer[0], C = o.selectedContainer[1], _ = o.selectedContainer[2], G = o.selectedContainer[3];
          if (n != null && g != null) {
            let z, m, s, w;
            n - _ > 0 ? (z = parseInt(_) + 1, m = parseInt(n)) : (z = parseInt(n), m = parseInt(p) - 1), g - G > 0 ? (s = parseInt(G) + 1, w = parseInt(g)) : (s = parseInt(g), w = parseInt(C) - 1), m - z <= w - s ? (z = parseInt(p), m = parseInt(_)) : (s = parseInt(C), w = parseInt(G));
            for (let S = s; S <= w; S++) for (let A = z; A <= m; A++) o.records[S][A] && o.rows[S].element.style.display != "none" && o.records[S][A].element.style.display != "none" && (o.records[S][A].element.classList.add("selection"), o.records[s][A].element.classList.add("selection-top"), o.records[w][A].element.classList.add("selection-bottom"), o.records[S][z].element.classList.add("selection-left"), o.records[S][m].element.classList.add("selection-right"), o.selection.push(o.records[S][A].element));
          }
        }, mouseOverControls = function(n) {
          let g;
          if (g = (n = n || window.event).buttons ? n.buttons : n.button ? n.button : n.which, g || (libraryBase.jspreadsheet.isMouseAction = !1), libraryBase.jspreadsheet.current && libraryBase.jspreadsheet.isMouseAction == 1) {
            const o = getElement(n.target);
            if (o[0]) {
              if (libraryBase.jspreadsheet.current != o[0].jssWorksheet && libraryBase.jspreadsheet.current) return !1;
              let p = n.target.getAttribute("data-x");
              const C = n.target.getAttribute("data-y");
              if (!(libraryBase.jspreadsheet.current.resizing || libraryBase.jspreadsheet.current.dragging)) {
                if (o[1] == 1 && libraryBase.jspreadsheet.current.selectedHeader) {
                  p = n.target.getAttribute("data-x");
                  const _ = libraryBase.jspreadsheet.current.selectedHeader, G = p;
                  selection.AH.call(libraryBase.jspreadsheet.current, _, 0, G, libraryBase.jspreadsheet.current.options.data.length - 1, n);
                }
                if (o[1] == 2) if (n.target.classList.contains("jss_row")) {
                  if (libraryBase.jspreadsheet.current.selectedRow) {
                    const _ = libraryBase.jspreadsheet.current.selectedRow, G = C;
                    selection.AH.call(libraryBase.jspreadsheet.current, 0, _, libraryBase.jspreadsheet.current.options.data[0].length - 1, G, n);
                  }
                } else libraryBase.jspreadsheet.current.edition || p && C && (libraryBase.jspreadsheet.current.selectedCorner ? updateCopySelection.call(libraryBase.jspreadsheet.current, p, C) : libraryBase.jspreadsheet.current.selectedCell && selection.AH.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.selectedCell[0], libraryBase.jspreadsheet.current.selectedCell[1], p, C, n));
              }
            }
          }
          libraryBase.jspreadsheet.timeControl && (clearTimeout(libraryBase.jspreadsheet.timeControl), libraryBase.jspreadsheet.timeControl = null);
        }, doubleClickControls = function(n) {
          if (libraryBase.jspreadsheet.current) if (n.target.classList.contains("jss_corner")) {
            if (libraryBase.jspreadsheet.current.highlighted.length > 0) {
              const g = libraryBase.jspreadsheet.current.highlighted[0].element.getAttribute("data-x"), o = parseInt(libraryBase.jspreadsheet.current.highlighted[libraryBase.jspreadsheet.current.highlighted.length - 1].element.getAttribute("data-y")) + 1, p = libraryBase.jspreadsheet.current.highlighted[libraryBase.jspreadsheet.current.highlighted.length - 1].element.getAttribute("data-x"), C = libraryBase.jspreadsheet.current.records.length - 1;
              selection.kF.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.records[o][g].element, libraryBase.jspreadsheet.current.records[C][p].element);
            }
          } else if (n.target.classList.contains("jss_column_filter")) {
            const g = n.target.getAttribute("data-x");
            filter.N$.call(libraryBase.jspreadsheet.current, g);
          } else {
            const g = getElement(n.target);
            if (g[1] == 1 && libraryBase.jspreadsheet.current.options.columnSorting != 0) {
              const o = n.target.getAttribute("data-x");
              o && libraryBase.jspreadsheet.current.orderBy(parseInt(o));
            }
            if (g[1] == 2 && libraryBase.jspreadsheet.current.options.editable != 0 && !libraryBase.jspreadsheet.current.edition) {
              const o = function(C) {
                if (C.parentNode) {
                  const _ = C.getAttribute("data-x"), G = C.getAttribute("data-y");
                  return _ && G ? C : o(C.parentNode);
                }
              }, p = o(n.target);
              p && p.classList.contains("highlight") && openEditor.call(libraryBase.jspreadsheet.current, p, void 0, n);
            }
          }
        }, pasteControls = function(n) {
          libraryBase.jspreadsheet.current && libraryBase.jspreadsheet.current.selectedCell && (libraryBase.jspreadsheet.current.edition || libraryBase.jspreadsheet.current.options.editable != 0 && (n && n.clipboardData ? (paste.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.selectedCell[0], libraryBase.jspreadsheet.current.selectedCell[1], n.clipboardData.getData("text")), n.preventDefault()) : window.clipboardData && paste.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.selectedCell[0], libraryBase.jspreadsheet.current.selectedCell[1], window.clipboardData.getData("text"))));
        }, getRole = function(n) {
          if (n.classList.contains("jss_selectall")) return "select-all";
          if (n.classList.contains("jss_corner")) return "fill-handle";
          let g = n;
          for (; !g.classList.contains("jss_spreadsheet"); ) {
            if (g.classList.contains("jss_row")) return "row";
            if (g.classList.contains("jss_nested")) return "nested";
            if (g.classList.contains("jtabs-headers")) return "tabs";
            if (g.classList.contains("jtoolbar")) return "toolbar";
            if (g.classList.contains("jss_pagination")) return "pagination";
            if (g.tagName === "TBODY") return "cell";
            if (g.tagName === "TFOOT") return getElementIndex(n) === 0 ? "grid" : "footer";
            if (g.tagName === "THEAD") return "header";
            g = g.parentElement;
          }
          return "applications";
        }, defaultContextMenu = function(n, g, o, p) {
          const C = [];
          if (p === "header" && (n.options.allowInsertColumn != 0 && C.push({ title: jSuites.translate("Insert a new column before"), onclick: function() {
            n.insertColumn(1, parseInt(g), 1);
          } }), n.options.allowInsertColumn != 0 && C.push({ title: jSuites.translate("Insert a new column after"), onclick: function() {
            n.insertColumn(1, parseInt(g), 0);
          } }), n.options.allowDeleteColumn != 0 && C.push({ title: jSuites.translate("Delete selected columns"), onclick: function() {
            n.deleteColumn(n.getSelectedColumns().length ? void 0 : parseInt(g));
          } }), n.options.allowRenameColumn != 0 && C.push({ title: jSuites.translate("Rename this column"), onclick: function() {
            const _ = n.getHeader(g), G = prompt(jSuites.translate("Column name"), _);
            n.setHeader(g, G);
          } }), n.options.columnSorting != 0 && (C.push({ type: "line" }), C.push({ title: jSuites.translate("Order ascending"), onclick: function() {
            n.orderBy(g, 0);
          } }), C.push({ title: jSuites.translate("Order descending"), onclick: function() {
            n.orderBy(g, 1);
          } }))), p !== "row" && p !== "cell" || (n.options.allowInsertRow != 0 && (C.push({ title: jSuites.translate("Insert a new row before"), onclick: function() {
            n.insertRow(1, parseInt(o), 1);
          } }), C.push({ title: jSuites.translate("Insert a new row after"), onclick: function() {
            n.insertRow(1, parseInt(o));
          } })), n.options.allowDeleteRow != 0 && C.push({ title: jSuites.translate("Delete selected rows"), onclick: function() {
            n.deleteRow(n.getSelectedRows().length ? void 0 : parseInt(o));
          } })), p === "cell" && n.options.allowComments != 0) {
            C.push({ type: "line" });
            const _ = n.records[o][g].element.getAttribute("title") || "";
            C.push({ title: jSuites.translate(_ ? "Edit comments" : "Add comments"), onclick: function() {
              const G = prompt(jSuites.translate("Comments"), _);
              G && n.setComments((0, helpers.getCellNameFromCoords)(g, o), G);
            } }), _ && C.push({ title: jSuites.translate("Clear comments"), onclick: function() {
              n.setComments((0, helpers.getCellNameFromCoords)(g, o), "");
            } });
          }
          return C.length !== 0 && C.push({ type: "line" }), p !== "header" && p !== "row" && p !== "cell" || (C.push({ title: jSuites.translate("Copy") + "...", shortcut: "Ctrl + C", onclick: function() {
            copy.call(n, !0);
          } }), navigator && navigator.clipboard && C.push({ title: jSuites.translate("Paste") + "...", shortcut: "Ctrl + V", onclick: function() {
            n.selectedCell && navigator.clipboard.readText().then(function(_) {
              _ && paste.call(n, n.selectedCell[0], n.selectedCell[1], _);
            });
          } })), n.parent.config.allowExport != 0 && C.push({ title: jSuites.translate("Save as") + "...", shortcut: "Ctrl + S", onclick: function() {
            n.download();
          } }), n.parent.config.about != 0 && C.push({ title: jSuites.translate("About"), onclick: function() {
            n.parent.config.about === void 0 || n.parent.config.about === !0 ? alert(version.print()) : alert(n.parent.config.about);
          } }), C;
        }, getElementIndex = function(n) {
          const g = n.parentElement.children;
          for (let o = 0; o < g.length; o++) if (n === g[o]) return o;
          return -1;
        }, contextMenuControls = function(n) {
          if ("buttons" in (n = n || window.event) ? n.buttons : n.which || n.button, libraryBase.jspreadsheet.current) {
            const g = libraryBase.jspreadsheet.current.parent;
            if (libraryBase.jspreadsheet.current.edition) n.preventDefault();
            else if (g.contextMenu.contextmenu.close(), libraryBase.jspreadsheet.current) {
              const o = getRole(n.target);
              let p = null, C = null;
              if (o === "cell") {
                let G = n.target;
                for (; G.tagName !== "TD"; ) G = G.parentNode;
                C = G.getAttribute("data-y"), p = G.getAttribute("data-x"), (!libraryBase.jspreadsheet.current.selectedCell || p < parseInt(libraryBase.jspreadsheet.current.selectedCell[0]) || p > parseInt(libraryBase.jspreadsheet.current.selectedCell[2]) || C < parseInt(libraryBase.jspreadsheet.current.selectedCell[1]) || C > parseInt(libraryBase.jspreadsheet.current.selectedCell[3])) && selection.AH.call(libraryBase.jspreadsheet.current, p, C, p, C, n);
              } else if (o === "row" || o === "header") o === "row" ? C = n.target.getAttribute("data-y") : p = n.target.getAttribute("data-x"), (!libraryBase.jspreadsheet.current.selectedCell || p < parseInt(libraryBase.jspreadsheet.current.selectedCell[0]) || p > parseInt(libraryBase.jspreadsheet.current.selectedCell[2]) || C < parseInt(libraryBase.jspreadsheet.current.selectedCell[1]) || C > parseInt(libraryBase.jspreadsheet.current.selectedCell[3])) && selection.AH.call(libraryBase.jspreadsheet.current, p, C, p, C, n);
              else if (o === "nested") {
                const G = n.target.getAttribute("data-column").split(",");
                p = getElementIndex(n.target) - 1, C = getElementIndex(n.target.parentElement), libraryBase.jspreadsheet.current.selectedCell && G[0] == parseInt(libraryBase.jspreadsheet.current.selectedCell[0]) && G[G.length - 1] == parseInt(libraryBase.jspreadsheet.current.selectedCell[2]) && libraryBase.jspreadsheet.current.selectedCell[1] == null && libraryBase.jspreadsheet.current.selectedCell[3] == null || selection.AH.call(libraryBase.jspreadsheet.current, G[0], null, G[G.length - 1], null, n);
              } else o === "select-all" ? selection.Ub.call(libraryBase.jspreadsheet.current) : o === "tabs" ? p = getElementIndex(n.target) : o === "footer" && (p = getElementIndex(n.target) - 1, C = getElementIndex(n.target.parentElement));
              let _ = defaultContextMenu(libraryBase.jspreadsheet.current, parseInt(p), parseInt(C), o);
              if (typeof g.config.contextMenu == "function") {
                const G = g.config.contextMenu(libraryBase.jspreadsheet.current, p, C, n, _, o, p, C);
                if (G) _ = G;
                else if (G === !1) return;
              }
              typeof g.plugins == "object" && Object.entries(g.plugins).forEach(function([, G]) {
                if (typeof G.contextMenu == "function") {
                  const z = G.contextMenu(libraryBase.jspreadsheet.current, p !== null ? parseInt(p) : null, C !== null ? parseInt(C) : null, n, _, o, p !== null ? parseInt(p) : null, C !== null ? parseInt(C) : null);
                  z && (_ = z);
                }
              }), g.contextMenu.contextmenu.open(n, _), n.preventDefault();
            }
          }
        }, touchStartControls = function(n) {
          const g = getElement(n.target);
          if (g[0] ? libraryBase.jspreadsheet.current != g[0].jssWorksheet && (libraryBase.jspreadsheet.current && libraryBase.jspreadsheet.current.resetSelection(), libraryBase.jspreadsheet.current = g[0].jssWorksheet) : libraryBase.jspreadsheet.current && (libraryBase.jspreadsheet.current.resetSelection(), libraryBase.jspreadsheet.current = null), libraryBase.jspreadsheet.current && !libraryBase.jspreadsheet.current.edition) {
            const o = n.target.getAttribute("data-x"), p = n.target.getAttribute("data-y");
            o && p && (selection.AH.call(libraryBase.jspreadsheet.current, o, p, void 0, void 0, n), libraryBase.jspreadsheet.timeControl = setTimeout(function() {
              libraryBase.jspreadsheet.current.options.columns[o].type == "color" ? libraryBase.jspreadsheet.tmpElement = null : libraryBase.jspreadsheet.tmpElement = n.target, openEditor.call(libraryBase.jspreadsheet.current, n.target, !1, n);
            }, 500));
          }
        }, touchEndControls = function(n) {
          libraryBase.jspreadsheet.timeControl && (clearTimeout(libraryBase.jspreadsheet.timeControl), libraryBase.jspreadsheet.timeControl = null, libraryBase.jspreadsheet.tmpElement && libraryBase.jspreadsheet.tmpElement.children[0].tagName == "INPUT" && libraryBase.jspreadsheet.tmpElement.children[0].focus(), libraryBase.jspreadsheet.tmpElement = null);
        }, cutControls = function(n) {
          libraryBase.jspreadsheet.current && (libraryBase.jspreadsheet.current.edition || (copy.call(libraryBase.jspreadsheet.current, !0, void 0, void 0, void 0, void 0, !0), libraryBase.jspreadsheet.current.options.editable != 0 && libraryBase.jspreadsheet.current.setValue(libraryBase.jspreadsheet.current.highlighted.map(function(g) {
            return g.element;
          }), "")));
        }, copyControls = function(n) {
          libraryBase.jspreadsheet.current && copyControls.enabled && (libraryBase.jspreadsheet.current.edition || copy.call(libraryBase.jspreadsheet.current, !0));
        }, isMac = function() {
          return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        }, isCtrl = function(n) {
          return isMac() ? n.metaKey : n.ctrlKey;
        }, keyDownControls = function(n) {
          if (libraryBase.jspreadsheet.current) {
            if (libraryBase.jspreadsheet.current.edition) if (n.which == 27) libraryBase.jspreadsheet.current.edition && closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !1), n.preventDefault();
            else if (n.which == 13) {
              if (libraryBase.jspreadsheet.current.options.columns && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]] && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]].type == "calendar") closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0);
              else if (!(libraryBase.jspreadsheet.current.options.columns && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]] && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]].type == "dropdown")) if ((libraryBase.jspreadsheet.current.options.wordWrap == 1 || libraryBase.jspreadsheet.current.options.columns && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]] && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]].wordWrap == 1 || libraryBase.jspreadsheet.current.options.data[libraryBase.jspreadsheet.current.edition[3]][libraryBase.jspreadsheet.current.edition[2]] && libraryBase.jspreadsheet.current.options.data[libraryBase.jspreadsheet.current.edition[3]][libraryBase.jspreadsheet.current.edition[2]].length > 200) && n.altKey) {
                const g = libraryBase.jspreadsheet.current.edition[0].children[0];
                let o = libraryBase.jspreadsheet.current.edition[0].children[0].value;
                const p = g.selectionStart;
                o = o.slice(0, p) + `
` + o.slice(p), g.value = o, g.focus(), g.selectionStart = p + 1, g.selectionEnd = p + 1;
              } else libraryBase.jspreadsheet.current.edition[0].children[0].blur();
            } else n.which == 9 && (libraryBase.jspreadsheet.current.options.columns && libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]] && ["calendar", "html"].includes(libraryBase.jspreadsheet.current.options.columns[libraryBase.jspreadsheet.current.edition[2]].type) ? closeEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.edition[0], !0) : libraryBase.jspreadsheet.current.edition[0].children[0].blur());
            if (!libraryBase.jspreadsheet.current.edition && libraryBase.jspreadsheet.current.selectedCell) if (n.which == 37) left.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 39) right.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 38) up.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 40) down.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 36) first.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 35) last.call(libraryBase.jspreadsheet.current, n.shiftKey, n.ctrlKey), n.preventDefault();
            else if (n.which == 46 || n.which == 8) libraryBase.jspreadsheet.current.options.editable != 0 && (libraryBase.jspreadsheet.current.selectedRow ? libraryBase.jspreadsheet.current.options.allowDeleteRow != 0 && confirm(jSuites.translate("Are you sure to delete the selected rows?")) && libraryBase.jspreadsheet.current.deleteRow() : libraryBase.jspreadsheet.current.selectedHeader ? libraryBase.jspreadsheet.current.options.allowDeleteColumn != 0 && confirm(jSuites.translate("Are you sure to delete the selected columns?")) && libraryBase.jspreadsheet.current.deleteColumn() : libraryBase.jspreadsheet.current.setValue(libraryBase.jspreadsheet.current.highlighted.map(function(g) {
              return g.element;
            }), ""));
            else if (n.which == 13) n.shiftKey ? up.call(libraryBase.jspreadsheet.current) : (libraryBase.jspreadsheet.current.options.allowInsertRow != 0 && libraryBase.jspreadsheet.current.options.allowManualInsertRow != 0 && libraryBase.jspreadsheet.current.selectedCell[1] == libraryBase.jspreadsheet.current.options.data.length - 1 && libraryBase.jspreadsheet.current.insertRow(), down.call(libraryBase.jspreadsheet.current)), n.preventDefault();
            else if (n.which == 9) n.shiftKey ? left.call(libraryBase.jspreadsheet.current) : (libraryBase.jspreadsheet.current.options.allowInsertColumn != 0 && libraryBase.jspreadsheet.current.options.allowManualInsertColumn != 0 && libraryBase.jspreadsheet.current.selectedCell[0] == libraryBase.jspreadsheet.current.options.data[0].length - 1 && libraryBase.jspreadsheet.current.insertColumn(), right.call(libraryBase.jspreadsheet.current)), n.preventDefault();
            else if (!n.ctrlKey && !n.metaKey || n.shiftKey) {
              if (libraryBase.jspreadsheet.current.selectedCell && libraryBase.jspreadsheet.current.options.editable != 0) {
                const g = libraryBase.jspreadsheet.current.selectedCell[1], o = libraryBase.jspreadsheet.current.selectedCell[0];
                n.keyCode == 32 ? (n.preventDefault(), libraryBase.jspreadsheet.current.options.columns[o].type == "checkbox" || libraryBase.jspreadsheet.current.options.columns[o].type == "radio" ? setCheckRadioValue.call(libraryBase.jspreadsheet.current) : openEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.records[g][o].element, !0, n)) : n.keyCode == 113 ? openEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.records[g][o].element, !1, n) : n.key.length !== 1 && n.key !== "Process" || n.altKey || isCtrl(n) || (openEditor.call(libraryBase.jspreadsheet.current, libraryBase.jspreadsheet.current.records[g][o].element, !0, n), libraryBase.jspreadsheet.current.options.columns && libraryBase.jspreadsheet.current.options.columns[o] && libraryBase.jspreadsheet.current.options.columns[o].type == "calendar" && n.preventDefault());
              }
            } else n.which == 65 ? (selection.Ub.call(libraryBase.jspreadsheet.current), n.preventDefault()) : n.which == 83 ? (libraryBase.jspreadsheet.current.download(), n.preventDefault()) : n.which == 89 ? (libraryBase.jspreadsheet.current.redo(), n.preventDefault()) : n.which == 90 ? (libraryBase.jspreadsheet.current.undo(), n.preventDefault()) : n.which == 67 ? (copy.call(libraryBase.jspreadsheet.current, !0), n.preventDefault()) : n.which == 88 ? (libraryBase.jspreadsheet.current.options.editable != 0 ? cutControls() : copyControls(), n.preventDefault()) : n.which == 86 && pasteControls();
            else n.target.classList.contains("jss_search") && (libraryBase.jspreadsheet.timeControl && clearTimeout(libraryBase.jspreadsheet.timeControl), libraryBase.jspreadsheet.timeControl = setTimeout(function() {
              libraryBase.jspreadsheet.current.search(n.target.value);
            }, 200));
          }
        }, wheelControls = function(n) {
          const g = this;
          g.options.lazyLoading == 1 && libraryBase.jspreadsheet.timeControlLoading == null && (libraryBase.jspreadsheet.timeControlLoading = setTimeout(function() {
            g.content.scrollTop + g.content.clientHeight >= g.content.scrollHeight - 10 ? lazyLoading.p6.call(g) && (g.content.scrollTop + g.content.clientHeight > g.content.scrollHeight - 10 && (g.content.scrollTop = g.content.scrollTop - g.content.clientHeight), selection.Aq.call(g)) : g.content.scrollTop <= g.content.clientHeight && lazyLoading.G_.call(g) && (g.content.scrollTop < 10 && (g.content.scrollTop = g.content.scrollTop + g.content.clientHeight), selection.Aq.call(g)), libraryBase.jspreadsheet.timeControlLoading = null;
          }, 100));
        };
        let scrollLeft = 0;
        const updateFreezePosition = function() {
          const n = this;
          scrollLeft = n.content.scrollLeft;
          let g = 0;
          if (scrollLeft > 50) for (let o = 0; o < n.options.freezeColumns; o++) {
            if (o > 0 && (!n.options.columns || !n.options.columns[o - 1] || n.options.columns[o - 1].type !== "hidden")) {
              let p;
              p = n.options.columns && n.options.columns[o - 1] && n.options.columns[o - 1].width !== void 0 ? parseInt(n.options.columns[o - 1].width) : n.options.defaultColWidth !== void 0 ? parseInt(n.options.defaultColWidth) : 100, g += parseInt(p);
            }
            n.headers[o].classList.add("jss_freezed"), n.headers[o].style.left = g + "px";
            for (let p = 0; p < n.rows.length; p++) if (n.rows[p] && n.records[p][o]) {
              const C = scrollLeft + (o > 0 ? n.records[p][o - 1].element.style.width : 0) - 51 + "px";
              n.records[p][o].element.classList.add("jss_freezed"), n.records[p][o].element.style.left = C;
            }
          }
          else for (let o = 0; o < n.options.freezeColumns; o++) {
            n.headers[o].classList.remove("jss_freezed"), n.headers[o].style.left = "";
            for (let p = 0; p < n.rows.length; p++) n.records[p][o] && (n.records[p][o].element.classList.remove("jss_freezed"), n.records[p][o].element.style.left = "");
          }
          selection.Aq.call(n);
        }, scrollControls = function(n) {
          const g = this;
          wheelControls.call(g), g.options.freezeColumns > 0 && g.content.scrollLeft != scrollLeft && updateFreezePosition.call(g), g.options.lazyLoading != 1 && g.options.tableOverflow != 1 || g.edition && n.target.className.substr(0, 9) != "jdropdown" && closeEditor.call(g, g.edition[0], !0);
        }, setEvents = function(n) {
          destroyEvents(n), n.addEventListener("mouseup", mouseUpControls), n.addEventListener("mousedown", mouseDownControls), n.addEventListener("mousemove", mouseMoveControls), n.addEventListener("mouseover", mouseOverControls), n.addEventListener("dblclick", doubleClickControls), n.addEventListener("paste", pasteControls), n.addEventListener("contextmenu", contextMenuControls), n.addEventListener("touchstart", touchStartControls), n.addEventListener("touchend", touchEndControls), n.addEventListener("touchcancel", touchEndControls), n.addEventListener("touchmove", touchEndControls), document.addEventListener("keydown", keyDownControls);
        }, destroyEvents = function(n) {
          n.removeEventListener("mouseup", mouseUpControls), n.removeEventListener("mousedown", mouseDownControls), n.removeEventListener("mousemove", mouseMoveControls), n.removeEventListener("mouseover", mouseOverControls), n.removeEventListener("dblclick", doubleClickControls), n.removeEventListener("paste", pasteControls), n.removeEventListener("contextmenu", contextMenuControls), n.removeEventListener("touchstart", touchStartControls), n.removeEventListener("touchend", touchEndControls), n.removeEventListener("touchcancel", touchEndControls), document.removeEventListener("keydown", keyDownControls);
        };
        var toolbar = __webpack_require__(392), pagination = __webpack_require__(167);
        const setData = function(n) {
          const g = this;
          if (n && (g.options.data = n), g.options.data || (g.options.data = []), g.options.data && g.options.data[0] && !Array.isArray(g.options.data[0])) {
            n = [];
            for (let A = 0; A < g.options.data.length; A++) {
              const l = [];
              for (let a = 0; a < g.options.columns.length; a++) l[a] = g.options.data[A][g.options.columns[a].name];
              n.push(l);
            }
            g.options.data = n;
          }
          let o = 0, p = 0;
          const C = g.options.columns && g.options.columns.length || 0, _ = g.options.data.length, G = g.options.minDimensions[0], z = g.options.minDimensions[1], m = G > C ? G : C, s = z > _ ? z : _;
          for (o = 0; o < s; o++) for (p = 0; p < m; p++) g.options.data[o] == null && (g.options.data[o] = []), g.options.data[o][p] == null && (g.options.data[o][p] = "");
          let w, S;
          for (g.rows = [], g.results = null, g.records = [], g.history = [], g.historyIndex = -1, g.tbody.innerHTML = "", g.options.lazyLoading == 1 ? (w = 0, S = g.options.data.length < 100 ? g.options.data.length : 100, g.options.pagination && (g.options.pagination = !1, console.error("Jspreadsheet: Pagination will be disable due the lazyLoading"))) : g.options.pagination ? (g.pageNumber || (g.pageNumber = 0), g.options.pagination, w = g.options.pagination * g.pageNumber, S = g.options.pagination * g.pageNumber + g.options.pagination, g.options.data.length < S && (S = g.options.data.length)) : (w = 0, S = g.options.data.length), o = 0; o < g.options.data.length; o++) {
            const A = createRow.call(g, o, g.options.data[o]);
            o >= w && o < S && g.tbody.appendChild(A.element);
          }
          if (g.options.lazyLoading == 1 || g.options.pagination && pagination.IV.call(g), g.options.mergeCells) {
            const A = Object.keys(g.options.mergeCells);
            for (let l = 0; l < A.length; l++) {
              const a = g.options.mergeCells[A[l]];
              merges.FU.call(g, A[l], a[0], a[1], 1);
            }
          }
          internal.am.call(g);
        }, getValue = function(n, g) {
          const o = this;
          let p, C;
          if (typeof n != "string") return null;
          p = (n = (0, internalHelpers.vu)(n, !0))[0], C = n[1];
          let _ = null;
          return p != null && C != null && (o.records[C] && o.records[C][p] && g ? _ = o.records[C][p].element.innerHTML : o.options.data[C] && o.options.data[C][p] != "undefined" && (_ = o.options.data[C][p])), _;
        }, getValueFromCoords = function(n, g, o) {
          const p = this;
          let C = null;
          return n != null && g != null && (p.records[g] && p.records[g][n] && o ? C = p.records[g][n].element.innerHTML : p.options.data[g] && p.options.data[g][n] != "undefined" && (C = p.options.data[g][n])), C;
        }, setValue = function(n, g, o) {
          const p = this, C = [];
          if (typeof n == "string") {
            const G = (0, internalHelpers.vu)(n, !0), z = G[0], m = G[1];
            C.push(internal.k9.call(p, z, m, g, o)), internal.xF.call(p, z, m, C);
          } else {
            let G = null, z = null;
            if (n && n.getAttribute && (G = n.getAttribute("data-x"), z = n.getAttribute("data-y")), G != null && z != null) C.push(internal.k9.call(p, G, z, g, o)), internal.xF.call(p, G, z, C);
            else {
              const m = Object.keys(n);
              if (m.length > 0) for (let s = 0; s < m.length; s++) {
                let w, S;
                if (typeof n[s] == "string") {
                  const A = (0, internalHelpers.vu)(n[s], !0);
                  w = A[0], S = A[1];
                } else n[s].x != null && n[s].y != null ? (w = n[s].x, S = n[s].y, n[s].value != null && (g = n[s].value)) : (w = n[s].getAttribute("data-x"), S = n[s].getAttribute("data-y"));
                w != null && S != null && (C.push(internal.k9.call(p, w, S, g, o)), internal.xF.call(p, w, S, C));
              }
            }
          }
          utils_history.Dh.call(p, { action: "setValue", records: C, selection: p.selectedCell }), internal.am.call(p);
          const _ = C.map(function(G) {
            return { x: G.x, y: G.y, value: G.newValue, oldValue: G.oldValue };
          });
          dispatch.A.call(p, "onafterchanges", p, _);
        }, setValueFromCoords = function(n, g, o, p) {
          const C = this, _ = [];
          _.push(internal.k9.call(C, n, g, o, p)), internal.xF.call(C, n, g, _), utils_history.Dh.call(C, { action: "setValue", records: _, selection: C.selectedCell }), internal.am.call(C);
          const G = _.map(function(z) {
            return { x: z.x, y: z.y, value: z.newValue, oldValue: z.oldValue };
          });
          dispatch.A.call(C, "onafterchanges", C, G);
        }, getData = function(n, g, o, p) {
          const C = this, _ = [];
          let G = 0, z = 0;
          const m = Math.max(...C.options.data.map(function(w) {
            return w.length;
          })), s = C.options.data.length;
          for (let w = 0; w < s; w++) {
            G = 0;
            for (let S = 0; S < m; S++) n && !C.records[w][S].element.classList.contains("highlight") || (_[z] || (_[z] = []), _[z][G] = g ? C.records[w][S].element.innerHTML : C.options.data[w][S], G++);
            G > 0 && z++;
          }
          return o ? _.map(function(w) {
            return w.join(o);
          }).join(`\r
`) + `\r
` : p ? _.map(function(w) {
            const S = {};
            return w.forEach(function(A, l) {
              S[l] = A;
            }), S;
          }) : _;
        }, getDataFromRange = function(n, g) {
          const o = this, p = (0, helpers.getCoordsFromRange)(n), C = [];
          for (let _ = p[1]; _ <= p[3]; _++) {
            C.push([]);
            for (let G = p[0]; G <= p[2]; G++) g ? C[C.length - 1].push(o.records[_][G].element.innerHTML) : C[C.length - 1].push(o.options.data[_][G]);
          }
          return C;
        }, search = function(n) {
          const g = this;
          if (g.options.filters && filter.dr.call(g), g.resetSelection(), g.pageNumber = 0, g.results = [], n) {
            g.searchInput.value !== n && (g.searchInput.value = n);
            const o = function(_, G, z) {
              for (let m = 0; m < _.length; m++) if (("" + _[m]).toLowerCase().search(G) >= 0 || ("" + g.records[z][m].element.innerHTML).toLowerCase().search(G) >= 0) return !0;
              return !1;
            }, p = function(_) {
              g.results.indexOf(_) == -1 && g.results.push(_);
            };
            let C = n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            C = new RegExp(C, "i"), g.options.data.forEach(function(_, G) {
              if (o(_, C, G)) {
                const z = merges.D0.call(g, G);
                if (z.length) for (let m = 0; m < z.length; m++) {
                  const s = (0, internalHelpers.vu)(z[m], !0);
                  for (let w = 0; w < g.options.mergeCells[z[m]][1]; w++) p(s[1] + w);
                }
                else p(G);
              }
            });
          } else g.results = null;
          internal.hG.call(g);
        }, resetSearch = function() {
          const n = this;
          n.searchInput.value = "", n.search(""), n.results = null;
        }, getHeader = function(n) {
          return this.headers[n].textContent;
        }, getHeaders = function(n) {
          const g = this, o = [];
          for (let p = 0; p < g.headers.length; p++) o.push(g.getHeader(p));
          return n ? o : o.join(g.options.csvDelimiter);
        }, setHeader = function(n, g) {
          const o = this;
          if (o.headers[n]) {
            const p = o.headers[n].textContent, C = o.options.columns && o.options.columns[n] && o.options.columns[n].title || "";
            g || (g = (0, helpers.getColumnName)(n)), o.headers[n].textContent = g, o.headers[n].setAttribute("title", g), o.options.columns || (o.options.columns = []), o.options.columns[n] || (o.options.columns[n] = {}), o.options.columns[n].title = g, utils_history.Dh.call(o, { action: "setHeader", column: n, oldValue: p, newValue: g }), dispatch.A.call(o, "onchangeheader", o, parseInt(n), g, C);
          }
        }, getStyle = function(n, g) {
          const o = this;
          if (n) return n = (0, internalHelpers.vu)(n, !0), g ? o.records[n[1]][n[0]].element.style[g] : o.records[n[1]][n[0]].element.getAttribute("style");
          {
            const p = {}, C = o.options.data[0].length, _ = o.options.data.length;
            for (let G = 0; G < _; G++) for (let z = 0; z < C; z++) {
              const m = g ? o.records[G][z].element.style[g] : o.records[G][z].element.getAttribute("style");
              m && (p[(0, internalHelpers.t3)([z, G])] = m);
            }
            return p;
          }
        }, setStyle = function(n, g, o, p, C) {
          const _ = this, G = {}, z = {}, m = function(w, S, A) {
            const l = (0, internalHelpers.vu)(w, !0);
            if (_.records[l[1]] && _.records[l[1]][l[0]] && (_.records[l[1]][l[0]].element.classList.contains("readonly") == 0 || p)) {
              const a = _.records[l[1]][l[0]].element.style[S];
              a != A || p ? _.records[l[1]][l[0]].element.style[S] = A : (A = "", _.records[l[1]][l[0]].element.style[S] = ""), z[w] || (z[w] = []), G[w] || (G[w] = []), z[w].push([S + ":" + a]), G[w].push([S + ":" + A]);
            }
          };
          if (g && o) typeof n == "string" && m(n, g, o);
          else {
            const w = Object.keys(n);
            for (let S = 0; S < w.length; S++) {
              let A = n[w[S]];
              typeof A == "string" && (A = A.split(";"));
              for (let l = 0; l < A.length; l++) typeof A[l] == "string" && (A[l] = A[l].split(":")), A[l][0].trim() && m(w[S], A[l][0].trim(), A[l][1]);
            }
          }
          let s = Object.keys(z);
          for (let w = 0; w < s.length; w++) z[s[w]] = z[s[w]].join(";");
          s = Object.keys(G);
          for (let w = 0; w < s.length; w++) G[s[w]] = G[s[w]].join(";");
          C || utils_history.Dh.call(_, { action: "setStyle", oldValue: z, newValue: G }), dispatch.A.call(_, "onchangestyle", _, G);
        }, resetStyle = function(n, g) {
          const o = this, p = Object.keys(n);
          for (let C = 0; C < p.length; C++) {
            const _ = (0, internalHelpers.vu)(p[C], !0);
            o.records[_[1]] && o.records[_[1]][_[0]] && o.records[_[1]][_[0]].element.setAttribute("style", "");
          }
          o.setStyle(n, null, null, null, g);
        }, download = function(n, g) {
          const o = this;
          if (o.parent.config.allowExport == 0) console.error("Export not allowed");
          else {
            let p = "";
            p += copy.call(o, !1, o.options.csvDelimiter, !0, n, !0, void 0, g);
            const C = new Blob(["\uFEFF" + p], { type: "text/csv;charset=utf-8;" });
            if (window.navigator && window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(C, (o.options.csvFileName || o.options.worksheetName) + ".csv");
            else {
              const _ = document.createElement("a");
              _.setAttribute("target", "_top");
              const G = URL.createObjectURL(C);
              _.href = G, _.setAttribute("download", (o.options.csvFileName || o.options.worksheetName) + ".csv"), document.body.appendChild(_), _.click(), _.parentNode.removeChild(_);
            }
          }
        }, getComments = function(n) {
          const g = this;
          if (n) return typeof n != "string" ? getComments.call(g) : (n = (0, internalHelpers.vu)(n, !0), g.records[n[1]][n[0]].element.getAttribute("title") || "");
          {
            const o = {};
            for (let p = 0; p < g.options.data.length; p++) for (let C = 0; C < g.options.columns.length; C++) {
              const _ = g.records[p][C].element.getAttribute("title");
              _ && (o[(0, internalHelpers.t3)([C, p])] = _);
            }
            return o;
          }
        }, setComments = function(n, g) {
          const o = this;
          let p;
          p = typeof n == "string" ? { [n]: g } : n;
          const C = {};
          Object.entries(p).forEach(function([_, G]) {
            const z = (0, helpers.getCoordsFromCellName)(_);
            C[_] = o.records[z[1]][z[0]].element.getAttribute("title"), o.records[z[1]][z[0]].element.setAttribute("title", G || ""), G ? (o.records[z[1]][z[0]].element.classList.add("jss_comments"), o.options.comments || (o.options.comments = {}), o.options.comments[_] = G) : (o.records[z[1]][z[0]].element.classList.remove("jss_comments"), o.options.comments && o.options.comments[_] && delete o.options.comments[_]);
          }), utils_history.Dh.call(o, { action: "setComments", newValue: p, oldValue: C }), dispatch.A.call(o, "oncomments", o, p, C);
        };
        var orderBy = __webpack_require__(94);
        const getWorksheetConfig = function() {
          return this.options;
        }, getSpreadsheetConfig = function() {
          return this.config;
        }, setConfig = function(n, g) {
          const o = this, p = Object.keys(n);
          let C;
          o.parent ? C = o.parent : (g = !0, C = o), p.forEach(function(_) {
            g ? (C.config[_] = n[_], _ === "toolbar" && (n[_] === !0 ? C.showToolbar() : n[_] === !1 && C.hideToolbar())) : o.options[_] = n[_];
          });
        };
        var meta = __webpack_require__(654);
        const setReadOnly = function(n, g) {
          const o = this;
          let p;
          if (typeof n == "string") {
            const C = (0, helpers.getCoordsFromCellName)(n);
            p = o.records[C[1]][C[0]];
          } else {
            const C = parseInt(n.getAttribute("data-x")), _ = parseInt(n.getAttribute("data-y"));
            p = o.records[_][C];
          }
          g ? p.element.classList.add("readonly") : p.element.classList.remove("readonly");
        }, isReadOnly = function(n, g) {
          return typeof n == "string" && g === void 0 && ([n, g] = (0, helpers.getCoordsFromCellName)(n)), this.records[g][n].element.classList.contains("readonly");
        }, setWorksheetFunctions = function(n) {
          for (let g = 0; g < worksheetPublicMethodsLength; g++) {
            const [o, p] = worksheetPublicMethods[g];
            n[o] = p.bind(n);
          }
        }, createTable = function() {
          let n = this;
          setWorksheetFunctions(n), n.table = document.createElement("table"), n.thead = document.createElement("thead"), n.tbody = document.createElement("tbody"), n.headers = [], n.cols = [], n.content = document.createElement("div"), n.content.classList.add("jss_content"), n.content.onscroll = function(S) {
            scrollControls.call(n, S);
          }, n.content.onwheel = function(S) {
            wheelControls.call(n, S);
          };
          const g = document.createElement("div"), o = document.createElement("label");
          o.innerHTML = jSuites.translate("Search") + ": ", g.appendChild(o), n.searchInput = document.createElement("input"), n.searchInput.classList.add("jss_search"), o.appendChild(n.searchInput), n.searchInput.onfocus = function() {
            n.resetSelection();
          };
          const p = document.createElement("div");
          if (n.options.pagination > 0 && n.options.paginationOptions && n.options.paginationOptions.length > 0) {
            n.paginationDropdown = document.createElement("select"), n.paginationDropdown.classList.add("jss_pagination_dropdown"), n.paginationDropdown.onchange = function() {
              n.options.pagination = parseInt(this.value), n.page(0);
            };
            for (let S = 0; S < n.options.paginationOptions.length; S++) {
              const A = document.createElement("option");
              A.value = n.options.paginationOptions[S], A.innerHTML = n.options.paginationOptions[S], n.paginationDropdown.appendChild(A);
            }
            n.paginationDropdown.value = n.options.pagination, p.appendChild(document.createTextNode(jSuites.translate("Show "))), p.appendChild(n.paginationDropdown), p.appendChild(document.createTextNode(jSuites.translate("entries")));
          }
          const C = document.createElement("div");
          C.classList.add("jss_filter"), C.appendChild(p), C.appendChild(g), n.colgroupContainer = document.createElement("colgroup");
          let _ = document.createElement("col");
          if (_.setAttribute("width", "50"), n.colgroupContainer.appendChild(_), n.options.nestedHeaders && n.options.nestedHeaders.length > 0 && n.options.nestedHeaders[0] && n.options.nestedHeaders[0][0]) for (let S = 0; S < n.options.nestedHeaders.length; S++) n.thead.appendChild(internal.ju.call(n, n.options.nestedHeaders[S]));
          n.headerContainer = document.createElement("tr"), _ = document.createElement("td"), _.classList.add("jss_selectall"), n.headerContainer.appendChild(_);
          const G = getNumberOfColumns.call(n);
          for (let S = 0; S < G; S++) createCellHeader.call(n, S), n.headerContainer.appendChild(n.headers[S]), n.colgroupContainer.appendChild(n.cols[S].colElement);
          if (n.thead.appendChild(n.headerContainer), n.options.filters == 1) {
            n.filter = document.createElement("tr");
            const S = document.createElement("td");
            n.filter.appendChild(S);
            for (let A = 0; A < n.options.columns.length; A++) {
              const l = document.createElement("td");
              l.innerHTML = "&nbsp;", l.setAttribute("data-x", A), l.className = "jss_column_filter", n.options.columns[A].type == "hidden" && (l.style.display = "none"), n.filter.appendChild(l);
            }
            n.thead.appendChild(n.filter);
          }
          n.table = document.createElement("table"), n.table.classList.add("jss_worksheet"), n.table.setAttribute("cellpadding", "0"), n.table.setAttribute("cellspacing", "0"), n.table.setAttribute("unselectable", "yes"), n.table.appendChild(n.colgroupContainer), n.table.appendChild(n.thead), n.table.appendChild(n.tbody), n.options.textOverflow || n.table.classList.add("jss_overflow"), n.corner = document.createElement("div"), n.corner.className = "jss_corner", n.corner.setAttribute("unselectable", "on"), n.corner.setAttribute("onselectstart", "return false"), n.options.selectionCopy == 0 && (n.corner.style.display = "none"), n.textarea = document.createElement("textarea"), n.textarea.className = "jss_textarea", n.textarea.id = "jss_textarea", n.textarea.tabIndex = "-1", n.textarea.ariaHidden = "true";
          const z = document.createElement("a");
          z.setAttribute("href", "https://bossanova.uk/jspreadsheet/"), n.ads = document.createElement("div"), n.ads.className = "jss_about";
          const m = document.createElement("span");
          m.innerHTML = "Jspreadsheet CE", z.appendChild(m), n.ads.appendChild(z), document.createElement("div").classList.add("jss_table"), n.pagination = document.createElement("div"), n.pagination.classList.add("jss_pagination");
          const s = document.createElement("div"), w = document.createElement("div");
          if (n.pagination.appendChild(s), n.pagination.appendChild(w), n.options.pagination || (n.pagination.style.display = "none"), n.options.search == 1 && n.element.appendChild(C), n.content.appendChild(n.table), n.content.appendChild(n.corner), n.content.appendChild(n.textarea), n.element.appendChild(n.content), n.element.appendChild(n.pagination), n.element.appendChild(n.ads), n.element.classList.add("jss_container"), n.element.jssWorksheet = n, n.element.jspreadsheet = n, n.options.tableOverflow == 1 && (n.options.tableHeight && (n.content.style["overflow-y"] = "auto", n.content.style["box-shadow"] = "rgb(221 221 221) 2px 2px 5px 0.1px", n.content.style.maxHeight = typeof n.options.tableHeight == "string" ? n.options.tableHeight : n.options.tableHeight + "px"), n.options.tableWidth && (n.content.style["overflow-x"] = "auto", n.content.style.width = typeof n.options.tableWidth == "string" ? n.options.tableWidth : n.options.tableWidth + "px")), n.options.tableOverflow != 1 && n.parent.config.toolbar && n.element.classList.add("with-toolbar"), n.options.columnDrag != 0 && n.thead.classList.add("draggable"), n.options.columnResize != 0 && n.thead.classList.add("resizable"), n.options.rowDrag != 0 && n.tbody.classList.add("draggable"), n.options.rowResize != 0 && n.tbody.classList.add("resizable"), n.setData.call(n), n.options.style && (n.setStyle(n.options.style, null, null, 1, 1), delete n.options.style), Object.defineProperty(n.options, "style", { enumerable: !0, configurable: !0, get() {
            return n.getStyle();
          } }), n.options.comments && n.setComments(n.options.comments), n.options.classes) {
            const S = Object.keys(n.options.classes);
            for (let A = 0; A < S.length; A++) {
              const l = (0, internalHelpers.vu)(S[A], !0);
              n.records[l[1]][l[0]].element.classList.add(n.options.classes[S[A]]);
            }
          }
        }, prepareTable = function() {
          const n = this;
          n.options.lazyLoading == 1 && n.options.tableOverflow != 1 && n.parent.config.fullscreen != 1 && (console.error("Jspreadsheet: The lazyloading only works when tableOverflow = yes or fullscreen = yes"), n.options.lazyLoading = !1), n.options.columns || (n.options.columns = []);
          let g, o = n.options.columns.length;
          if (n.options.data && n.options.data[0] !== void 0) if (Array.isArray(n.options.data[0])) {
            const C = n.options.data[0].length;
            C > o && (o = C);
          } else g = Object.keys(n.options.data[0]), g.length > o && (o = g.length);
          n.options.minDimensions || (n.options.minDimensions = [0, 0]), n.options.minDimensions[0] > o && (o = n.options.minDimensions[0]);
          const p = [];
          for (let C = 0; C < o; C++) n.options.columns[C] || (n.options.columns[C] = {}), !n.options.columns[C].name && g && g[C] && (n.options.columns[C].name = g[C]), n.options.columns[C].type == "dropdown" && n.options.columns[C].url && p.push({ url: n.options.columns[C].url, index: C, method: "GET", dataType: "json", success: function(_) {
            n.options.columns[this.index].source || (n.options.columns[this.index].source = []);
            for (let G = 0; G < _.length; G++) n.options.columns[this.index].source.push(_[G]);
          } });
          p.length ? jSuites.ajax(p, function() {
            createTable.call(n);
          }) : createTable.call(n);
        }, getNextDefaultWorksheetName = function(n) {
          const g = /^Sheet(\d+)$/;
          let o = 0;
          return n.worksheets.forEach(function(p) {
            const C = g.exec(p.options.worksheetName);
            C && (o = Math.max(o, parseInt(C[1])));
          }), "Sheet" + (o + 1);
        }, buildWorksheet = async function() {
          const n = this, g = (n.element, n.parent);
          typeof g.plugins == "object" && Object.entries(g.plugins).forEach(function([, p]) {
            typeof p.beforeinit == "function" && p.beforeinit(n);
          }), libraryBase.jspreadsheet.current = n;
          const o = [];
          if (n.options.csv) {
            const p = new Promise((C) => {
              jSuites.ajax({ url: n.options.csv, method: "GET", dataType: "text", success: function(_) {
                const G = (0, helpers.parseCSV)(_, n.options.csvDelimiter);
                if (n.options.csvHeaders == 1 && G.length > 0) {
                  const z = G.shift();
                  if (z.length > 0) {
                    n.options.columns || (n.options.columns = []);
                    for (let m = 0; m < z.length; m++) n.options.columns[m] || (n.options.columns[m] = {}), n.options.columns[m].title === void 0 && (n.options.columns[m].title = z[m]);
                  }
                }
                n.options.data = G, prepareTable.call(n), C();
              } });
            });
            o.push(p);
          } else if (n.options.url) {
            const p = new Promise((C) => {
              jSuites.ajax({ url: n.options.url, method: "GET", dataType: "json", success: function(_) {
                n.options.data = _.data ? _.data : _, prepareTable.call(n), C();
              } });
            });
            o.push(p);
          } else prepareTable.call(n);
          await Promise.all(o), typeof g.plugins == "object" && Object.entries(g.plugins).forEach(function([, p]) {
            typeof p.init == "function" && p.init(n);
          });
        }, createWorksheetObj = function(n) {
          const g = this.parent;
          n.worksheetName || (n.worksheetName = getNextDefaultWorksheetName(this.parent));
          const o = { parent: g, options: n, filters: [], formula: [], history: [], selection: [], historyIndex: -1 };
          return g.config.worksheets.push(o.options), g.worksheets.push(o), o;
        }, createWorksheet = function(n) {
          const g = this.parent;
          g.creationThroughJss = !0, createWorksheetObj.call(this, n), g.element.tabs.create(n.worksheetName);
        }, openWorksheet = function(n) {
          this.parent.element.tabs.open(n);
        }, deleteWorksheet = function(n) {
          const g = this;
          g.parent.element.tabs.remove(n);
          const o = g.parent.worksheets.splice(n, 1)[0];
          dispatch.A.call(g.parent, "ondeleteworksheet", o, n);
        }, worksheetPublicMethods = [["selectAll", selection.Ub], ["updateSelectionFromCoords", function(n, g, o, p) {
          return selection.AH.call(this, n, g, o, p);
        }], ["resetSelection", function() {
          return selection.gE.call(this);
        }], ["getSelection", selection.Lo], ["getSelected", selection.ef], ["getSelectedColumns", selection.Jg], ["getSelectedRows", selection.R5], ["getData", getData], ["setData", setData], ["getValue", getValue], ["getValueFromCoords", getValueFromCoords], ["setValue", setValue], ["setValueFromCoords", setValueFromCoords], ["getWidth", getWidth], ["setWidth", function(n, g) {
          return setWidth.call(this, n, g);
        }], ["insertRow", insertRow], ["moveRow", function(n, g) {
          return moveRow.call(this, n, g);
        }], ["deleteRow", deleteRow], ["hideRow", hideRow], ["showRow", showRow], ["getRowData", getRowData], ["setRowData", setRowData], ["getHeight", getHeight], ["setHeight", function(n, g) {
          return setHeight.call(this, n, g);
        }], ["getMerge", merges.fd], ["setMerge", function(n, g, o) {
          return merges.FU.call(this, n, g, o);
        }], ["destroyMerge", function() {
          return merges.VP.call(this);
        }], ["removeMerge", function(n, g) {
          return merges.Zp.call(this, n, g);
        }], ["search", search], ["resetSearch", resetSearch], ["getHeader", getHeader], ["getHeaders", getHeaders], ["setHeader", setHeader], ["getStyle", getStyle], ["setStyle", function(n, g, o, p) {
          return setStyle.call(this, n, g, o, p);
        }], ["resetStyle", resetStyle], ["insertColumn", insertColumn], ["moveColumn", moveColumn], ["deleteColumn", deleteColumn], ["getColumnData", getColumnData], ["setColumnData", setColumnData], ["whichPage", pagination.ho], ["page", pagination.MY], ["download", download], ["getComments", getComments], ["setComments", setComments], ["orderBy", orderBy.My], ["undo", utils_history.tN], ["redo", utils_history.ZS], ["getCell", internal.tT], ["getCellFromCoords", internal.Xr], ["getLabel", internal.p9], ["getConfig", getWorksheetConfig], ["setConfig", setConfig], ["getMeta", function(n) {
          return meta.IQ.call(this, n);
        }], ["setMeta", meta.iZ], ["showColumn", showColumn], ["hideColumn", hideColumn], ["showIndex", internal.C6], ["hideIndex", internal.TI], ["getWorksheetActive", internal.$O], ["openEditor", openEditor], ["closeEditor", closeEditor], ["createWorksheet", createWorksheet], ["openWorksheet", openWorksheet], ["deleteWorksheet", deleteWorksheet], ["copy", function(n) {
          n ? cutControls() : copy.call(this, !0);
        }], ["paste", paste], ["executeFormula", internal.Em], ["getDataFromRange", getDataFromRange], ["quantiyOfPages", pagination.$f], ["getRange", selection.eO], ["isSelected", selection.sp], ["setReadOnly", setReadOnly], ["isReadOnly", isReadOnly], ["getHighlighted", selection.kV], ["dispatch", dispatch.A], ["down", down], ["first", first], ["last", last], ["left", left], ["right", right], ["up", up], ["openFilter", filter.N$], ["resetFilters", filter.dr]], worksheetPublicMethodsLength = worksheetPublicMethods.length, factory = function() {
        }, createWorksheets = async function(n, g, o) {
          let p = g.worksheets;
          if (!p) throw new Error("JSS: worksheets are not defined");
          {
            let C = { animation: !0, onbeforecreate: function(m, s) {
              return s || getNextDefaultWorksheetName(n);
            }, oncreate: function(m, s) {
              if (n.creationThroughJss) n.creationThroughJss = !1;
              else {
                const S = m.tabs.headers.children[m.tabs.headers.children.length - 2].innerHTML;
                createWorksheetObj.call(n.worksheets[0], { minDimensions: [10, 15], worksheetName: S });
              }
              const w = n.worksheets[n.worksheets.length - 1];
              w.element = s, buildWorksheet.call(w).then(function() {
                (0, toolbar.nK)(w), dispatch.A.call(w, "oncreateworksheet", w, g, n.worksheets.length - 1);
              });
            }, onchange: function(m, s, w) {
              n.worksheets.length != 0 && n.worksheets[w] && (0, toolbar.nK)(n.worksheets[w]);
            } };
            g.tabs == 1 ? C.allowCreate = !0 : C.hideHeaders = !0, C.data = [];
            let _ = 1;
            for (let m = 0; m < p.length; m++) p[m].worksheetName || (p[m].worksheetName = "Sheet" + _++), C.data.push({ title: p[m].worksheetName, content: "" });
            o.classList.add("jss_spreadsheet"), o.tabIndex = 0;
            const G = jSuites.tabs(o, C), z = g.style;
            delete g.style;
            for (let m = 0; m < p.length; m++) p[m].style && Object.entries(p[m].style).forEach(function([s, w]) {
              typeof w == "number" && (p[m].style[s] = z[w]);
            }), n.worksheets.push({ parent: n, element: G.content.children[m], options: p[m], filters: [], formula: [], history: [], selection: [], historyIndex: -1 }), await buildWorksheet.call(n.worksheets[m]);
          }
        };
        factory.spreadsheet = async function(n, g, o) {
          if (n.tagName == "TABLE") {
            g || (g = {}), g.worksheets || (g.worksheets = []);
            const C = (0, helpers.createFromTable)(n, g.worksheets[0]);
            g.worksheets[0] = C;
            const _ = document.createElement("div");
            n.parentNode.insertBefore(_, n), n.remove(), n = _;
          }
          let p = { worksheets: o, config: g, element: n, el: n };
          return p.contextMenu = document.createElement("div"), p.contextMenu.className = "jss_contextmenu", p.getWorksheetActive = internal.$O.bind(p), p.fullscreen = internal.Y5.bind(p), p.showToolbar = toolbar.ll.bind(p), p.hideToolbar = toolbar.Ar.bind(p), p.getConfig = getSpreadsheetConfig.bind(p), p.setConfig = setConfig.bind(p), p.setPlugins = function(C) {
            p.plugins || (p.plugins = {}), typeof C == "object" && Object.entries(C).forEach(function([_, G]) {
              p.plugins[_] = G.call(libraryBase.jspreadsheet, p, {}, p.config);
            });
          }, p.setPlugins(g.plugins), await createWorksheets(p, g, n), p.element.appendChild(p.contextMenu), jSuites.contextmenu(p.contextMenu, { onclick: function() {
            p.contextMenu.contextmenu.close(!1);
          } }), p.config.fullscreen == 1 && p.element.classList.add("fullscreen"), toolbar.ll.call(p), g.root ? setEvents(g.root) : setEvents(document), n.spreadsheet = p, p;
        }, factory.worksheet = function(n, g, o) {
          let p = { parent: n, options: {} };
          return o === void 0 ? n.worksheets.push(p) : n.worksheets.splice(o, 0, p), Object.assign(p.options, g), p;
        };
        var utils_factory = factory;
        libraryBase.jspreadsheet = function(n, g) {
          try {
            let o = [];
            return utils_factory.spreadsheet(n, g, o).then((p) => {
              libraryBase.jspreadsheet.spreadsheet.push(p), dispatch.A.call(p, "onload", p);
            }), o;
          } catch (o) {
            console.error(o);
          }
        }, libraryBase.jspreadsheet.getWorksheetInstanceByName = function(n, g) {
          const o = libraryBase.jspreadsheet.spreadsheet.find((p) => p.config.namespace === g);
          if (o) return {};
          if (n == null) {
            const p = o.worksheets.map((C) => [C.options.worksheetName, C]);
            return Object.fromEntries(p);
          }
          return o.worksheets.find((p) => p.options.worksheetName === n);
        }, libraryBase.jspreadsheet.setDictionary = function(n) {
          jSuites.setDictionary(n);
        }, libraryBase.jspreadsheet.destroy = function(n, g) {
          if (n.spreadsheet) {
            const o = libraryBase.jspreadsheet.spreadsheet.indexOf(n.spreadsheet);
            libraryBase.jspreadsheet.spreadsheet.splice(o, 1);
            const p = n.spreadsheet.config.root || document;
            n.spreadsheet = null, n.innerHTML = "", g && destroyEvents(p);
          }
        }, libraryBase.jspreadsheet.destroyAll = function() {
          for (let n = 0; n < libraryBase.jspreadsheet.spreadsheet.length; n++) {
            const g = libraryBase.jspreadsheet.spreadsheet[n];
            libraryBase.jspreadsheet.destroy(g.element);
          }
        }, libraryBase.jspreadsheet.current = null, libraryBase.jspreadsheet.spreadsheet = [], libraryBase.jspreadsheet.helpers = {}, libraryBase.jspreadsheet.version = function() {
          return version;
        }, Object.entries(helpers).forEach(([n, g]) => {
          libraryBase.jspreadsheet.helpers[n] = g;
        });
        var src = libraryBase.jspreadsheet;
        jspreadsheet = __webpack_exports__.default;
      }(), jspreadsheet;
    });
  }(dist$3)), dist$3.exports;
}
var distExports = requireDist();
const jspreadsheet = /* @__PURE__ */ getDefaultExportFromCjs(distExports), jspreadsheetCSS = `:root{--jss-border-color:#000}.jss_spreadsheet{outline:none}.jss_container{display:inline-block;padding-right:2px;box-sizing:border-box;overscroll-behavior:contain;outline:none}.fullscreen{position:fixed!important;top:0;left:0;width:100%;height:100%;z-index:21;display:flex;flex-direction:column;background-color:#fff}.fullscreen .jtabs-content{flex:1;overflow:hidden}.fullscreen .jss_content{overflow:auto;width:100%!important;height:100%;max-height:100%!important}.fullscreen .jss_container{height:100%}.jss_content{display:inline-block;box-sizing:border-box;padding-right:3px;padding-bottom:3px;position:relative;scrollbar-width:thin;scrollbar-color:#666 transparent}@supports (-moz-appearance:none){.jss_content{padding-right:10px}}.jss_content::-webkit-scrollbar{width:8px;height:8px}.jss_content::-webkit-scrollbar-track{background:#eee}.jss_content::-webkit-scrollbar-thumb{background:#666}.jss_worksheet{border-collapse:separate;table-layout:fixed;white-space:nowrap;empty-cells:show;border:0px;background-color:#fff;width:0;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid #ccc;border-bottom:1px solid #ccc}.jss_worksheet>thead>tr>td{border-top:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid transparent;border-bottom:1px solid transparent;background-color:#f3f3f3;padding:2px;cursor:pointer;box-sizing:border-box;overflow:hidden;position:-webkit-sticky;position:sticky;top:0;z-index:2}.jss_worksheet>thead>tr>td.dragging{opacity:.5}.jss_worksheet>thead>tr>td.selected{background-color:#dcdcdc}.jss_worksheet>thead>tr>td.arrow-up{background-repeat:no-repeat;background-position:center right 5px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M7 14l5-5 5 5H7z' fill='gray'/%3E%3C/svg%3E");text-decoration:underline}.jss_worksheet>thead>tr>td.arrow-down{background-repeat:no-repeat;background-position:center right 5px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M7 10l5 5 5-5H7z' fill='gray'/%3E%3C/svg%3E");text-decoration:underline}.jss_worksheet>tbody>tr>td:first-child{position:relative;background-color:#f3f3f3;text-align:center}.jss_worksheet>tbody.resizable>tr>td:first-child:before{content:" ";width:100%;height:3px;position:absolute;bottom:0;left:0;cursor:row-resize}.jss_worksheet>tbody.draggable>tr>td:first-child:after{content:" ";width:3px;height:100%;position:absolute;top:0;right:0;cursor:move}.jss_worksheet>tbody>tr.dragging>td{background-color:#eee;opacity:.5}.jss_worksheet>tbody>tr>td{border-top:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid transparent;border-bottom:1px solid transparent;padding:4px;white-space:nowrap;box-sizing:border-box;line-height:1em}.jss_overflow>tbody>tr>td{overflow:hidden}.jss_worksheet>tbody>tr>td:last-child{overflow:hidden}.jss_worksheet>tbody>tr>td>img{display:inline-block;max-width:100px}.jss_worksheet>tbody>tr>td.readonly{color:#0000004d}.jss_worksheet>tbody>tr.selected>td:first-child{background-color:#dcdcdc}.jss_worksheet>tbody>tr>td>select,.jss_worksheet>tbody>tr>td>input,.jss_worksheet>tbody>tr>td>textarea{border:0px;border-radius:0;outline:0px;width:100%;margin:0;padding:0 2px 0 0;background-color:transparent;box-sizing:border-box}.jss_worksheet>tbody>tr>td>textarea{resize:none;padding-top:6px!important}.jss_worksheet>tbody>tr>td>input[type=checkbox]{width:12px;margin-top:2px}.jss_worksheet>tbody>tr>td>input[type=radio]{width:12px;margin-top:2px}.jss_worksheet>tbody>tr>td>select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position-x:100%;background-position-y:40%;background-image:url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+)}.jss_worksheet>tbody>tr>td.jss_dropdown{background-repeat:no-repeat;background-position:top 50% right 5px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M7 10l5 5 5-5H7z' fill='lightgray'/%3E%3C/svg%3E");text-overflow:ellipsis;overflow-x:hidden}.jss_worksheet>tbody>tr>td.jss_dropdown.jss_comments{background:url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M7 10l5 5 5-5H7z' fill='lightgray'/%3E%3C/svg%3E") top 50% right 5px no-repeat,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAxLTMxVDE4OjU1OjA4WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMS0zMVQxODo1NTowOFoiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTMxVDE4OjU1OjA4WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMTlhZDJmOC1kMDI2LTI1NDItODhjOS1iZTRkYjkyMmQ0MmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkOGI5NDUyMS00ZjEwLWQ5NDktYjUwNC0wZmU1N2I3Nzk1MDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzdjYmE1ZS1hYTMwLWNkNDUtYTAyNS1lOWYxZjk2MzUzOGUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMzdjYmE1ZS1hYTMwLWNkNDUtYTAyNS1lOWYxZjk2MzUzOGUiIHN0RXZ0OndoZW49IjIwMTktMDEtMzFUMTg6NTU6MDhaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmExOWFkMmY4LWQwMjYtMjU0Mi04OGM5LWJlNGRiOTIyZDQyZCIgc3RFdnQ6d2hlbj0iMjAxOS0wMS0zMVQxODo1NTowOFoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4En6MDAAAAX0lEQVQYlX3KOw6AIBBAwS32RpJADXfx0pTET+ERZJ8F8RODFtONsG0QAoh0CSDM82dqodaBdQXnfoLZQM7gPai+wjNNE8R4pTuAYNZSKZASqL7CMy0LxNgJp30fKYUDi3+vIqb/+rUAAAAASUVORK5CYII=) top right no-repeat}.jss_worksheet>tbody>tr>td>.color{width:90%;height:10px;margin:auto}.jss_worksheet>tbody>tr>td>a{text-decoration:underline}.jss_worksheet>tbody>tr>td.highlight>a{color:#00f;cursor:pointer}.jss_worksheet>tfoot>tr>td{border-top:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid transparent;border-bottom:1px solid transparent;background-color:#f3f3f3;padding:2px;cursor:pointer;box-sizing:border-box;overflow:hidden}.jss_worksheet .highlight{background-color:#0000000d}.jss_worksheet .highlight-top{border-top:1px solid #000;box-shadow:0 -1px #ccc}.jss_worksheet .highlight-left{border-left:1px solid #000;box-shadow:-1px 0 #ccc}.jss_worksheet .highlight-right{border-right:1px solid #000}.jss_worksheet .highlight-bottom{border-bottom:1px solid #000}.jss_worksheet .highlight-top.highlight-left{box-shadow:-1px -1px #ccc;-webkit-box-shadow:-1px -1px #ccc;-moz-box-shadow:-1px -1px #ccc}.jss_worksheet .highlight-selected{background-color:#0000}.jss_worksheet .selection{background-color:#0000000d}.jss_worksheet .selection-left{border-left:1px dotted #000}.jss_worksheet .selection-right{border-right:1px dotted #000}.jss_worksheet .selection-top{border-top:1px dotted #000}.jss_worksheet .selection-bottom{border-bottom:1px dotted #000}.jss_corner{position:absolute;background-color:#000;height:1px;width:1px;border:1px solid rgb(255,255,255);top:-2000px;left:-2000px;cursor:crosshair;box-sizing:initial;z-index:20;padding:2px}.jss_worksheet .editor{outline:0px solid transparent;overflow:visible;white-space:nowrap;text-align:left;padding:0;box-sizing:border-box;overflow:visible!important}.jss_worksheet .editor>input{padding-left:4px}.jss_worksheet .editor .jupload{position:fixed;top:100%;z-index:40;user-select:none;-webkit-font-smoothing:antialiased;font-size:.875rem;letter-spacing:.2px;-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);box-shadow:0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f,0 5px 5px -3px #0003;padding:10px;background-color:#fff;width:300px;min-height:225px;margin-top:2px}.jss_worksheet .editor .jupload img{width:100%;height:auto}.jss_worksheet .editor .jss_richtext{position:fixed;top:100%;z-index:40;user-select:none;-webkit-font-smoothing:antialiased;font-size:.875rem;letter-spacing:.2px;-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);box-shadow:0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f,0 5px 5px -3px #0003;padding:10px;background-color:#fff;width:358px;margin-top:2px;text-align:left;white-space:initial}.jss_worksheet .editor .jclose:after{position:absolute;top:0;right:0;margin:10px;content:"close";font-family:Material icons;font-size:24px;width:24px;height:24px;line-height:24px;cursor:pointer;text-shadow:0px 0px 5px #fff}.jss_worksheet,.jss_worksheet td,.jss_corner{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.jss_textarea{position:absolute;top:-999px;left:-999px;width:1px;height:1px}.jss_worksheet .dragline{position:absolute}.jss_worksheet .dragline div{position:relative;top:-6px;height:5px;width:22px}.jss_worksheet .dragline div:hover{cursor:move}.jss_worksheet .onDrag{background-color:#0009}.jss_worksheet .error{border:1px solid red}.jss_worksheet thead td.resizing{border-right-style:dotted!important;border-right-color:red!important}.jss_worksheet tbody tr.resizing>td{border-bottom-style:dotted!important;border-bottom-color:red!important}.jss_worksheet tbody td.resizing{border-right-style:dotted!important;border-right-color:red!important}.jss_worksheet .jdropdown-header{border:0px!important;outline:none!important;width:100%!important;height:100%!important;padding:0 0 0 8px!important}.jss_worksheet .jdropdown-container{margin-top:1px}.jss_worksheet .jdropdown-container-header{padding:0;margin:0;height:inherit}.jss_worksheet .jdropdown-picker{border:0px!important;padding:0!important;width:inherit;height:inherit}.jss_worksheet .jss_comments{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAxLTMxVDE4OjU1OjA4WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMS0zMVQxODo1NTowOFoiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTMxVDE4OjU1OjA4WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMTlhZDJmOC1kMDI2LTI1NDItODhjOS1iZTRkYjkyMmQ0MmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkOGI5NDUyMS00ZjEwLWQ5NDktYjUwNC0wZmU1N2I3Nzk1MDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzdjYmE1ZS1hYTMwLWNkNDUtYTAyNS1lOWYxZjk2MzUzOGUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMzdjYmE1ZS1hYTMwLWNkNDUtYTAyNS1lOWYxZjk2MzUzOGUiIHN0RXZ0OndoZW49IjIwMTktMDEtMzFUMTg6NTU6MDhaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmExOWFkMmY4LWQwMjYtMjU0Mi04OGM5LWJlNGRiOTIyZDQyZCIgc3RFdnQ6d2hlbj0iMjAxOS0wMS0zMVQxODo1NTowOFoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4En6MDAAAAX0lEQVQYlX3KOw6AIBBAwS32RpJADXfx0pTET+ERZJ8F8RODFtONsG0QAoh0CSDM82dqodaBdQXnfoLZQM7gPai+wjNNE8R4pTuAYNZSKZASqL7CMy0LxNgJp30fKYUDi3+vIqb/+rUAAAAASUVORK5CYII=);background-repeat:no-repeat;background-position:top right}.jss_worksheet .sp-replacer{margin:2px;border:0px}.jss_worksheet>thead>tr.jss_filter>td>input{border:0px;width:100%;outline:none}.jss_about{float:right;font-size:.7em;padding:2px;text-transform:uppercase;letter-spacing:1px;display:none}.jss_about a{color:#ccc;text-decoration:none}.jss_about img{display:none}.jss_filter{display:flex;justify-content:space-between;margin-bottom:4px}.jss_filter>div{padding:8px;align-items:center}.jss_pagination{display:flex;justify-content:space-between;align-items:center}.jss_pagination>div{display:flex;padding:10px}.jss_pagination>div:last-child{padding-right:10px;padding-top:10px}.jss_pagination>div>div{text-align:center;width:36px;height:36px;line-height:34px;border:1px solid #ccc;box-sizing:border-box;margin-left:2px;cursor:pointer}.jss_page{font-size:.8em}.jss_page_selected{font-weight:700;background-color:#f3f3f3}.jss_toolbar{display:flex;background-color:#f3f3f3;border:1px solid #ccc;padding:4px;margin:0 2px 4px 1px}.jss_toolbar:empty{display:none}.jss_worksheet .dragging-left{background-repeat:no-repeat;background-position:top 50% left 0px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M14 7l-5 5 5 5V7z'/%3E%3Cpath fill='none' d='M24 0v24H0V0h24z'/%3E%3C/svg%3E")}.jss_worksheet .dragging-right{background-repeat:no-repeat;background-position:top 50% right 0px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 17l5-5-5-5v10z'/%3E%3Cpath fill='none' d='M0 24V0h24v24H0z'/%3E%3C/svg%3E")}.jss_hidden_index>tbody>tr>td:first-child,.jss_hidden_index>thead>tr>td:first-child,.jss_hidden_index>tfoot>tr>td:first-child,.jss_hidden_index>colgroup>col:first-child{display:none}.jss_worksheet .jrating{display:inline-flex}.jss_worksheet .jrating>div{zoom:.55}.jss_worksheet .copying-top{border-top:1px dashed #000}.jss_worksheet .copying-left{border-left:1px dashed #000}.jss_worksheet .copying-right{border-right:1px dashed #000}.jss_worksheet .copying-bottom{border-bottom:1px dashed #000}.jss_worksheet .jss_column_filter{background-repeat:no-repeat;background-position:top 50% right 5px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='gray' width='18px' height='18px'%3E%3Cpath d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");text-overflow:ellipsis;overflow:hidden;padding:0 20px 0 6px}.jss_worksheet thead .jss_freezed,.jss_worksheet tfoot .jss_freezed{left:0;z-index:3!important;box-shadow:2px 0 2px .2px #ccc!important;-webkit-box-shadow:2px 0px 2px .2px #ccc!important;-moz-box-shadow:2px 0px 2px .2px #ccc!important}.jss_worksheet tbody .jss_freezed{position:relative;background-color:#fff;box-shadow:1px 1px 1px 1px #ccc!important;-webkit-box-shadow:2px 4px 4px .1px #ccc!important;-moz-box-shadow:2px 4px 4px .1px #ccc!important}.red{color:red}.jss_worksheet>tbody>tr>td.readonly>input[type=checkbox],.jss_worksheet>tbody>tr>td.readonly>input[type=radio]{pointer-events:none;opacity:.5}`, jspreadsheetThemesCSS = ".jss_worksheet>thead>tr>td{border-top:1px solid var(--border_color, #ccc);border-left:1px solid var(--border_color, #ccc);background-color:var(--header_background, #f3f3f3);color:var(--header_color, #000)}.jss_worksheet>thead>tr>td.selected{background-color:var(--header_background_highlighted, #dcdcdc);color:var(--header_color_highlighted, #000)}.jss_worksheet>tbody>tr>td:first-child{background-color:var(--header_background, #f3f3f3);color:var(--header_color, #000)}.jss_worksheet>tbody>tr>td{background-color:var(--content_background, #fff);color:var(--content_color, #000);border-top:1px solid var(--border_color, #ccc);border-left:1px solid var(--border_color, #ccc)}.jss_worksheet>tbody>tr.selected>td:first-child{background-color:var(--header_background_highlighted, #dcdcdc);color:var(--header_color_highlighted, #000)}.jss_worksheet .highlight{background-color:var(--selection, rgba(0,0,0,.05))}.jss_worksheet .highlight-top{border-top:1px solid var(--border_color_highlighted, #000)}.jss_worksheet .highlight-left{border-left:1px solid var(--border_color_highlighted, #000)}.jss_worksheet .highlight-right{border-right:1px solid var(--border_color_highlighted, #000)}.jss_worksheet .highlight-bottom{border-bottom:1px solid var(--border_color_highlighted, #000)}.jss_worksheet .highlight-selected{background-color:var(--cursor, #eee)}.jss_pagination>div>div{color:var(--header_color, #000);background:var(--header_background, #f3f3f3);border:1px solid var(--border_color, #ccc)}.jss_toolbar{background-color:var(--header_background, #f3f3f3);color:var(--header_color, #000);border:1px solid var(--border_color, #ccc)}.jss_toolbar .jtoolbar-item i{color:var(--content_color, #000)}.jss_toolbar .jtoolbar-item:not(.jtoolbar-divisor):hover,.jss_toolbar .jtoolbar-item.jpicker:hover>.jpicker-header{background-color:var(--content_background_highlighted, #f3f3f3);color:var(--content_color_highlighted, #000)}.jss_toolbar .jtoolbar-divisor{background:var(--header_color, #ddd)}.jss_contextmenu{border:1px solid var(--border_color, #ccc);background:var(--menu_background, #fff);color:var(--menu_color, #555);box-shadow:var(--menu_box_shadow, 2px 2px 2px 0px rgba(143, 144, 145, 1));-webkit-box-shadow:var(--menu_box_shadow, 2px 2px 2px 0px rgba(143, 144, 145, 1));-moz-box-shadow:var(--menu_box_shadow, 2px 2px 2px 0px rgba(143, 144, 145, 1))}.jss_contextmenu>div a{color:var(--menu_color, #555)}.jss_contextmenu>div:not(.contextmenu-line):hover a{color:var(--menu_color_highlighted, #555)}.jss_contextmenu>div:not(.contextmenu-line):hover{background:var(--menu_background_highlighted, #ebebeb)}.jss_container input{color:var(--header_color, #000);background:var(--header_background, #f3f3f3)}", jsutesCSS = ':root{--jbutton-color: #298BA8;--jactive-color: #007aff;--jsafe-area-top: env(safe-area-inset-top);--jsafe-area-bottom: env(safe-area-inset-bottom)}[data-visible=false],.row[data-visible=false]{display:none}div[data-before]:before{content:attr(data-before)}.unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jreadonly{pointer-events:none}.jdragging{opacity:.2;filter:alpha(opacity=20)}.jupload.input{position:relative;box-sizing:border-box;background-size:initial;height:33px;min-height:initial;padding:6px 30px 6px 6px}.jupload.input:before{content:"save";font-size:18px;font-family:Material Icons;color:#000;position:absolute;right:5px}.jupload:empty:before{z-index:0}.jupload img{width:100%}.jupload.input img{width:initial;max-width:100%;height:100%}.jupload[data-multiple]{padding:10px}.jupload[data-multiple] img{height:70px;width:100px;object-fit:cover;margin-right:5px;margin-bottom:5px}.jupload{position:relative;border:1px dotted #eee;cursor:pointer;box-sizing:border-box;width:100%;max-width:100%;max-height:100%;min-height:180px}.jupload:not(.input):empty:before{content:"";font-family:Material Icons;font-size:90px;color:#eee;width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute}.jupload-item{padding-right:22px;border-radius:1px;display:inline-block;position:relative}.jphoto{position:relative;border:1px dotted #eee;cursor:pointer;box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:center}.jphoto:empty:before{content:"";font-family:Material Icons;font-size:90px;color:#eee;width:100%;height:100%;text-align:center}.jremove{opacity:.2;filter:alpha(opacity=20)}.round img{border-radius:1000px}.jtooltip{position:fixed;top:10px;left:10px;z-index:5;font-family:initial;font-size:12px;color:#000;background-color:#fff;border:1px solid black;padding:8px;margin:10px;display:block;animation:jfadeIn .5s;pointer-events:none}.jtooltip:empty{display:none}@keyframes jfadeIn{0%{opacity:0}to{opacity:1}}.jpanel{position:absolute;box-sizing:border-box;z-index:10}.jpanel:focus{outline:2px solid black;outline-offset:-1px}.jpanel-action{position:absolute;width:8px;height:8px;background-color:#fff;border:1px solid black;box-sizing:border-box;pointer-events:auto;z-index:1000}.jpanel-action[data-position=n-resize]{top:-4px;left:calc(50% - 4px)}.jpanel-action[data-position=ne-resize]{top:-4px;left:calc(100% - 4px)}.jpanel-action[data-position=e-resize]{top:calc(50% - 4px);left:calc(100% - 4px)}.jpanel-action[data-position=se-resize]{top:calc(100% - 4px);left:calc(100% - 4px)}.jpanel-action[data-position=s-resize]{top:calc(100% - 4px);left:calc(50% - 4px)}.jpanel-action[data-position=sw-resize]{top:calc(100% - 4px);left:-4px}.jpanel-action[data-position=w-resize]{top:calc(50% - 4px);left:-4px}.jpanel-action[data-position=nw-resize]{top:-4px;left:-4px}.jpanel-action[data-action=rotate]{top:-50px;left:calc(50% - 12px);width:24px;height:24px;border:0;cursor:move;background-color:transparent}.jpanel-action[data-action=rotate]:before{content:"refresh";font-family:Material Icons;font-size:24px}.jpanel-action[data-action=rotate]:after{position:absolute;content:"";bottom:-22px;left:50%;width:1px;height:28px;background-color:#000}.jloading{position:fixed;z-index:10001;width:100%;inset:0;background-color:#000000b3}.jloading:after{content:"";display:block;margin:0 auto;margin-top:50vh;width:40px;height:40px;border-style:solid;border-color:#fff;border-top-color:transparent;border-width:4px;border-radius:50%;-webkit-animation:jspin .8s linear infinite;animation:jspin .8s linear infinite}.jloading.jspin{background-color:transparent}.jloading.jspin:after{margin:80px auto 0;border-color:#aaa;border-top-color:transparent}.jfade-in{animation:jfade-in 2s forwards}.jfade-out{animation:jfade-out 1s forwards}.jslide-left-in{position:relative;animation:jslide-left-in .4s forwards}.jslide-left-out{position:relative;animation:jslide-left-out .4s forwards}.jslide-right-in{position:relative;animation:jslide-right-in .4s forwards}.jslide-right-out{position:relative;animation:jslide-right-out .4s forwards}.jslide-top-in{position:relative;animation:jslide-top-in .4s forwards}.jslide-top-out{position:relative;animation:jslide-top-out .2s forwards}.jslide-bottom-in{position:relative;animation:jslide-bottom-in .4s forwards}.jslide-bottom-out{position:relative;animation:jslide-bottom-out .1s forwards}.jslide-left-in>div{-webkit-transform:translateZ(0px);-webkit-transform:translate3d(0,0,0)}.jslide-left-out>div{-webkit-transform:translateZ(0px);-webkit-transform:translate3d(0,0,0)}.jslide-right-in>div{-webkit-transform:translateZ(0px);-webkit-transform:translate3d(0,0,0)}.jslide-right-out>div{-webkit-transform:translateZ(0px);-webkit-transform:translate3d(0,0,0)}.jspin{animation:jspin 2s infinite linear}@keyframes jfade-in{0%{opacity:0}to{opacity:100}}@-webkit-keyframes jfade-in{0%{opacity:0}to{opacity:100}}@keyframes jfade-out{0%{opacity:100}to{opacity:0}}@-webkit-keyframes jfade-out{0%{opacity:100}to{opacity:0}}@keyframes jslide-left-in{0%{left:-100%}to{left:0%}}@-webkit-keyframes jslide-left-in{0%{left:-100%}to{left:0%}}@keyframes jslide-left-out{0%{left:0%}to{left:-100%}}@-webkit-keyframes jslide-left-out{0%{left:0%}to{left:-100%}}@keyframes jslide-right-in{0%{left:100%}to{left:0%}}@-webkit-keyframes jslide-right-in{0%{left:100%}to{left:0%}}@keyframes jslide-right-out{0%{left:0%}to{left:100%}}@-webkit-keyframes jslide-right-out{0%{left:0%}to{left:100%}}@keyframes jslide-top-in{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@-webkit-keyframes jslide-top-in{0%{transform:translateY(-100%)}to{-webkit-transform:translateY(0%)}}@keyframes jslide-top-out{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@-webkit-keyframes jslide-top-out{0%{-webkit-transform:translateY(0%)}to{-webkit-transform:translateY(-100%)}}@keyframes jslide-bottom-in{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes jslide-bottom-in{0%{transform:translateY(100%)}to{-webkit-transform:translateY(0%)}}@keyframes jslide-bottom-out{0%{transform:translateY(0)}to{transform:translateY(100%)}}@-webkit-keyframes jslide-bottom-out{0%{-webkit-transform:translateY(0%)}to{-webkit-transform:translateY(100%)}}@-webkit-keyframes jspin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}@keyframes jspin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.jcalendar{position:absolute;z-index:9000;display:none;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;min-width:280px}.jcalendar.jcalendar-focus{display:block}.jcalendar .jcalendar-backdrop{position:fixed;top:0;left:0;z-index:9000;min-width:100%;min-height:100%;background-color:#00000080;border:0px;padding:0;display:none}.jcalendar .jcalendar-container{position:relative;box-sizing:border-box}.jcalendar .jcalendar-content{position:absolute;z-index:9001;-webkit-box-shadow:1px 1px 5px 0px rgba(0,0,0,.39);-moz-box-shadow:1px 1px 5px 0px rgba(0,0,0,.39);box-shadow:1px 1px 5px #00000063;background-color:#fff}.jcalendar-header{text-align:center}.jcalendar-header span{margin-right:4px;font-size:1.1em;font-weight:700}.jcalendar-prev{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z%27 fill=%27%23000%27 /%3E%3Cpath fill=%27none%27 d=%27M0 0h24v24H0V0z%27/%3E%3C/svg%3E");background-position:center;background-repeat:no-repeat}.jcalendar-next{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z%27 fill=%27%23000%27 /%3E%3Cpath fill=%27none%27 d=%27M0 0h24v24H0V0z%27/%3E%3C/svg%3E");background-position:center;background-repeat:no-repeat}.jcalendar-weekday{font-weight:600;background-color:#fcfcfc;padding:14px}.jcalendar-table{padding:10px}.jcalendar-table>table{width:100%;background-color:#fff}.jcalendar-table>table>thead{cursor:pointer}.jcalendar-table thead td{padding:10px;height:40px}.jcalendar-table>table>tbody>tr{height:34px}.jcalendar-table>table>tbody td{box-sizing:border-box;cursor:pointer;padding:9px;font-size:.9em}.jcalendar-table tfoot td{padding:10px}.jcalendar-months td,.jcalendar-years td{height:24px}.jcalendar-input{padding-right:18px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27gray%27%3E%3Cpath d=%27M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z%27/%3E%3Cpath fill=%27none%27 d=%27M0 0h24v24H0z%27/%3E%3C/svg%3E");background-position:top 50% right 5px;background-repeat:no-repeat;box-sizing:border-box}.jcalendar-done{-webkit-box-shadow:1px 1px 5px 0px rgba(0,0,0,.39);-moz-box-shadow:1px 1px 5px 0px rgba(0,0,0,.39);box-shadow:1px 1px 5px #00000063;background-color:#fff}.jcalendar-update{border:1px solid #ccc;background-color:#fff;border-radius:4px;padding:5px;width:100%}.jcalendar-container select{width:55px;display:inline-block;border:0px;padding:4px;text-align:center;font-size:1.1em;user-select:none;margin-right:10px}.jcalendar-container select:first-child{margin-right:2px}.jcalendar-selected{background-color:#eee}.jcalendar-reset,.jcalendar-confirm{text-transform:uppercase;cursor:pointer;color:var(--jactive-color)}.jcalendar-controls{padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;justify-content:space-between;align-items:center}.jcalendar-controls div{font-weight:700}.jcalendar-fullsize{position:fixed;width:100%;top:0;left:0}.jcalendar-fullsize .jcalendar-content{position:fixed;width:100%;left:0;bottom:0}.jcalendar-focus.jcalendar-fullsize .jcalendar-backdrop{display:block}.jcalendar-sunday{color:red}.jcalendar-disabled{color:#ccc}.jcalendar-time{display:flex}.jcalendar_warning{color:red}.jcalendar-hide-controls .jcalendar-controls{display:none}.jcolor{display:none;outline:none;position:absolute}.jcolor-input{padding-right:24px!important;background:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27black%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z%27/%3E%3C/svg%3E") top 50% right 4px no-repeat,content-box;box-sizing:border-box}.jcolor-content{position:absolute;z-index:9000;user-select:none;-webkit-font-smoothing:antialiased;font-size:.875rem;letter-spacing:.2px;-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);box-shadow:0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f,0 5px 5px -3px #0003;background-color:#fff;box-sizing:border-box;min-width:260px}.jmodal .jcolor-content{position:fixed}.jcolor-controls{display:flex;padding:10px;border-bottom:1px solid #eee;margin-bottom:5px}.jcolor-controls div{flex:1;font-size:1em;color:var(--jactive-color);text-transform:uppercase;font-weight:700;box-sizing:border-box}.jcolor-content table{border-collapse:collapse;box-sizing:border-box}.jcolor-focus{display:block}.jcolor table{width:100%;height:100%;min-height:160px}.jcolor td{padding:7px}.jcolor-selected{background-repeat:no-repeat;background-size:16px;background-position:center;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z%27 fill=%27white%27/%3E%3C/svg%3E")}.jcolor-fullscreen{position:fixed;left:0;bottom:0;width:100%;max-height:290px;border-radius:0;box-sizing:border-box}.jcolor-fullscreen .jcolor-controls{padding:15px;-webkit-box-shadow:1px 0px 1px 0px rgba(0,0,0,.39);-moz-box-shadow:1px 0px 1px 0px rgba(0,0,0,.39);box-shadow:1px 0 1px #00000063}.jcolor-reset{text-align:left}.jcolor-close{text-align:right}.jcolor-backdrop{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background-color:#00000080;border:0px;padding:0;z-index:8000;display:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jcolor-content .jtabs-content{padding:7px}.jcolor-grid tr:first-child>td:first-child{border-top-left-radius:3px}.jcolor-grid tr:first-child>td:last-child{border-top-right-radius:3px}.jcolor-grid tr:last-child>td:first-child{border-bottom-left-radius:3px}.jcolor-grid tr:last-child>td:last-child{border-bottom-right-radius:3px}.jcolor-hsl{box-sizing:border-box}.jcolor-hsl>div{height:100%;position:relative}.jcolor-hsl canvas{display:block;border-radius:4px;-webkit-user-drag:none}.jcolor-point{height:5px;width:5px;background-color:#000;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.jcolor-sliders{padding:10px 20px 10px 10px}.jcolor-sliders input{-webkit-appearance:none;height:12px;width:80%;background:#d3d3d3;opacity:1;border-radius:30px;outline:none}.jcolor-sliders-input-subcontainer{display:flex;justify-content:space-between;align-items:center}.jcolor-sliders-input-container{margin-top:4px;line-height:.8em;text-align:left}.jcolor-sliders-input-container>label{font-size:10px;text-transform:uppercase;color:#bbbbbd}.jcolor-sliders-input-subcontainer>input{border:0px;padding:1px}.jcolor-sliders-input-container input::-webkit-slider-thumb{-webkit-appearance:none;height:12px;width:12px;border-radius:50%;background:#000;border:2px solid #fff;cursor:pointer}.jcolor-sliders-input-container input::-moz-range-thumb{-webkit-appearance:none;height:12px;width:12px;border-radius:50%;background:#000;border:2px solid #fff;cursor:pointer}.jcolor-sliders-final-color{padding:6px;user-select:all;margin-top:10px;text-align:center}.jcolor-sliders-final-color>div:nth-child(2){width:71px;text-transform:uppercase}.jcolor .jtabs .jtabs-headers-container .jtabs-controls{display:none!important}.jcolor .jtabs .jtabs-headers-container{display:flex!important;justify-content:center;padding:4px}.jcolor .jtabs-headers>div:not(.jtabs-border){padding:2px 15px!important;font-size:.8em}.jcontextmenu{position:fixed;z-index:10000;background:#fff;color:#555;font-size:11px;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-box-shadow:2px 2px 2px 0px rgba(143,144,145,1);-moz-box-shadow:2px 2px 2px 0px rgba(143,144,145,1);box-shadow:2px 2px 2px #8f9091;border:1px solid #C6C6C6;padding:4px 0;margin:0;outline:none;display:none}.jcontextmenu.jcontextmenu-focus{display:inline-block}.jcontextmenu>div{box-sizing:border-box;display:flex;padding:8px 8px 8px 32px;width:250px;position:relative;cursor:default;font-size:11px;font-family:sans-serif;text-align:left;-webkit-box-align:center;align-items:center}.jcontextmenu>div:before{content:attr(data-icon);font-family:Material Icons!important;font-size:15px;position:absolute;left:9px;line-height:24px}.jcontextmenu.symbols>div:before{font-family:Material Symbols Outlined!important}.jcontextmenu>div.header{display:none}.jcontextmenu>div a{color:#555;text-decoration:none;flex:1;cursor:pointer}.jcontextmenu>div span{margin-right:10px;font-size:.9em}.jcontextmenu .jcontextmenu-disabled a{color:#ccc}.jcontextmenu .jcontextmenu-disabled:before{color:#ccc}.jcontextmenu>div:hover{background:#ebebeb}.jcontextmenu hr{border:1px solid #e9e9e9;border-bottom:0;margin-top:5px;margin-bottom:5px}.jcontextmenu>hr:hover{background:transparent}.jcontextmenu .jcontextmenu{top:4px;left:99%;opacity:0;position:absolute}.jcontextmenu>div:hover>.jcontextmenu{display:block;opacity:1;-webkit-transform:translate(0,0) scale(1);transform:translate(0) scale(1);pointer-events:auto}@media only screen and (max-width: 420px){.jcontextmenu{top:initial!important;left:0!important;bottom:0!important;width:100vw;height:260px;overflow:scroll;animation:jslide-bottom-in .4s forwards;padding-top:0}.jcontextmenu div{width:100%;text-align:center;border-bottom:1px solid #ccc;padding:15px}.jcontextmenu>div.header{background-color:#d3d3d3;padding:5px;top:0;position:sticky;z-index:2}.jcontextmenu>div.header>a.title{text-align:left}.jcontextmenu>div.header>a.close{text-align:right}.jcontextmenu a{font-size:1.4em;text-transform:uppercase}.jcontextmenu span,.jcontextmenu hr{display:none}}.jdropdown{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;background:#fff;-webkit-tap-highlight-color:transparent;display:inline-block}.jdropdown-backdrop{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background-color:#00000080;border:0px;padding:0;z-index:8000;display:none}.jdropdown[disabled]{opacity:.5;pointer-events:none}.jdropdown-focus{position:relative}.jdropdown-focus .jdropdown-container{transform:translateZ(0)}.jdropdown-default.jdropdown-focus .jdropdown-header{outline:auto 5px -webkit-focus-ring-color}.jdropdown-default.jdropdown-focus .jdropdown-header.jdropdown-add{background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27gray%27 width=%2724px%27 height=%2724px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z%27/%3E%3C/svg%3E")}.jdropdown-container-header{padding:0;margin:0;position:relative;box-sizing:border-box}.jdropdown-header{width:100%;appearance:none;background-repeat:no-repeat;background-position:top 50% right 5px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27none%27 d=%27M0 0h24v24H0V0z%27/%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27 fill=%27gray%27/%3E%3C/svg%3E");text-overflow:ellipsis;cursor:pointer;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;padding-right:30px!important}.jdropdown-insert-button{font-size:1.4em;text-transform:uppercase;position:absolute;right:30px;top:4px;display:none}.jdropdown-container{min-width:inherit;transform:translate3d(-10000px,0,0);position:absolute;z-index:9001}.jdropdown-close{display:none;font-size:1em;color:var(--jactive-color);text-transform:uppercase;text-align:right;padding:12px;font-weight:700}.jdropdown-content{min-width:inherit;margin:0;box-sizing:border-box}.jdropdown-item{white-space:nowrap;text-align:left;text-overflow:ellipsis;overflow-x:hidden;color:#000;display:flex;align-items:center}.jdropdown-description{text-overflow:ellipsis;overflow:hidden;line-height:1.5em}.jdropdown-image{margin-right:10px;width:32px;height:32px;border-radius:20px}.jdropdown-image-small{width:24px;height:24px}.jdropdown-icon{margin-right:10px;font-size:30px;margin-left:-5px}.jdropdown-icon-small{font-size:24px;margin-left:0}.jdropdown-title{font-size:.7em;text-overflow:ellipsis;overflow-x:hidden;display:block}.jdropdown-default .jdropdown-header{border:1px solid #ccc;padding:5px 16px 5px 10px}.jdropdown-default .jdropdown-container{background-color:#fff}.jdropdown-default.jdropdown-focus.jdropdown-insert .jdropdown-header{padding-right:50px}.jdropdown-default.jdropdown-focus.jdropdown-insert .jdropdown-insert-button{display:block}.jdropdown-default .jdropdown-content{min-width:inherit;border:1px solid #8fb1e3;margin:0;background-color:#fff;box-sizing:border-box;min-height:10px;max-height:215px;overflow-y:auto}.jdropdown-default .jdropdown-item{padding:4px 40px 4px 8px}.jdropdown-default .jdropdown-item:hover{background-color:#1f93ff;color:#fff}.jdropdown-default .jdropdown-cursor{background-color:#eee}.jdropdown-default .jdropdown-selected{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiIGZpbGw9IndoaXRlIiAvPjwvc3ZnPgo=);background-repeat:no-repeat;background-position:top 50% right 5px;background-color:#1f93ff;color:#fff}.jdropdown-default .jdropdown-group{margin-top:5px}.jdropdown-default .jdropdown-group .jdropdown-item{padding-left:16px}.jdropdown-default .jdropdown-group-name{padding-left:8px;font-weight:700;text-align:left}.jdropdown-default .jdropdown-reset_{content:"x";position:absolute;top:0;right:0;margin:5px 10px 5px 5px;font-size:12px;width:12px;cursor:pointer;text-shadow:0px 0px 5px #fff;display:none;line-height:1.8em}.jdropdown-default.jdropdown-focus .jdropdown-reset_,.jdropdown-picker.jdropdown-focus .jdropdown-backdrop{display:block}.jdropdown-picker .jdropdown-header{outline:none}.jdropdown-picker .jdropdown-container{position:fixed;bottom:0;left:0;border-bottom:1px solid #e6e6e8;width:100%;background-color:#fff;box-sizing:border-box}.jdropdown-picker .jdropdown-close{-webkit-box-shadow:0px -1px 5px 0px rgba(0,0,0,.39);-moz-box-shadow:0px -1px 5px 0px rgba(0,0,0,.39);box-shadow:0 -1px 5px #00000063;background-color:#fff;display:block}.jdropdown-picker .jdropdown-content{overflow-y:scroll;height:280px;background-color:#fafafa;border-top:1px solid #e6e6e8}.jdropdown-picker .jdropdown-group-name{font-size:1em;text-transform:uppercase;display:block;border-bottom:1px solid #e6e6e8;padding:10px 20px;text-align:center;font-weight:700}.jdropdown-picker .jdropdown-item{font-size:1em;text-transform:uppercase;border-bottom:1px solid #e6e6e8;padding:10px 20px}.jdropdown-picker .jdropdown-selected{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiIGZpbGw9IndoaXRlIiAvPjwvc3ZnPgo=);background-repeat:no-repeat;background-position:top 50% right 15px;background-color:#1f93ff;color:#fff}.jdropdown-picker .jdropdown-cursor{background-color:#1f93ff;color:#fff}.jdropdown-searchbar.jdropdown-focus{position:fixed;top:0!important;left:0!important;width:100%!important;height:100%!important;background-color:#fafafa;padding:0;z-index:9001;overflow-y:scroll;will-change:scroll-position;-webkit-overflow-scrolling:touch}.jdropdown-searchbar.jdropdown-focus .jdropdown-container-header{position:fixed;top:0;left:0;z-index:9002;padding:6px;background-color:#fff;box-shadow:0 1px 2px #0000001a;width:100%;height:40px}.jdropdown-searchbar.jdropdown-focus .jdropdown-header{border:0px!important;background-position-x:0%!important;background-position-y:40%!important;background-repeat:no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiIGZpbGw9IiNlNmU2ZTgiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);padding-left:30px!important;padding-right:60px!important}.jdropdown-searchbar.jdropdown-focus .jdropdown-close{display:block}.jdropdown-searchbar .jdropdown-header{outline:none}.jdropdown-searchbar .jdropdown-container{margin-top:40px;width:100%}.jdropdown-searchbar .jdropdown-close{position:fixed;top:0;right:0}.jdropdown-searchbar .jdropdown-content{margin-top:10px}.jdropdown-searchbar .jdropdown-group{margin-top:10px;margin-bottom:15px;background-color:#fff}.jdropdown-searchbar .jdropdown-group-name{border-top:1px solid #e6e6e8;border-bottom:1px solid #e6e6e8;padding:10px 10px 10px 12px;font-weight:700}.jdropdown-searchbar .jdropdown-group-arrow{float:right;width:24px;height:24px;background-repeat:no-repeat}.jdropdown-searchbar .jdropdown-group-arrow-down{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+PC9zdmc+)}.jdropdown-searchbar .jdropdown-group-arrow-up{background-image:url(data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.jdropdown-searchbar .jdropdown-item{border-bottom:1px solid #e6e6e8;padding:10px 40px 10px 15px;background-color:#fff;font-size:.9em}.jdropdown-searchbar .jdropdown-description{text-overflow:ellipsis;overflow:hidden;max-width:calc(100% - 20px)}.jdropdown-searchbar .jdropdown-content>.jdropdown-item:first-child{border-top:1px solid #e6e6e8}.jdropdown-searchbar .jdropdown-selected{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIgZmlsbD0iIzAwN2FmZiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-position:top 50% right 15px}.jdropdown-list .jdropdown-container{display:block}.jdropdown-list .jdropdown-header{display:none}.jdropdown-list .jdropdown-group{background-color:#fff}.jdropdown-list .jdropdown-group-name{border-bottom:1px solid #e6e6e8;padding-top:10px;padding-bottom:10px;font-weight:700}.jdropdown-list .jdropdown-item{border-bottom:1px solid #e6e6e8;padding:10px 40px 10px 10px;background-color:#fff}.jdropdown-list .jdropdown-selected{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIgZmlsbD0iIzAwN2FmZiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-position:top 50% right 10px}@media only screen and (max-width : 800px){.jdropdown-list{width:100%!important;border:0px;padding:0}.jdropdown-list .jdropdown-container{min-width:100%}.jdropdown-searchbar.jdropdown-focus .jdropdown-description{text-transform:uppercase}}.app .jdropdown-item{text-transform:uppercase}.jdropdown-create-container{margin:10px;border:1px solid #ccc;border-radius:2px;padding:6px}.jdropdown-color{background-color:#fff;border:1px solid transparent;border-radius:12px;width:12px;height:12px;margin-right:6px}.jdropdown-item[data-disabled]{opacity:.5;pointer-events:none}.jeditor-container{border:1px solid #ccc;box-sizing:border-box}.jeditor-container.with-margin{background-color:#f2f2f2;max-width:1200px}.jeditor-dragging{border:1px dashed #000}.jeditor{outline:none;word-break:break-word}.jeditor-container.with-margin .jeditor{background-color:#fff;margin:80px;min-height:800px;padding:80px;max-width:800px}.jeditor[data-placeholder]:empty:before{content:attr(data-placeholder);color:#d3d3d3}.jsnippet{margin-top:15px;cursor:pointer;border:1px solid #ccc;position:relative}.jsnippet:focus{outline:none}.jsnippet img{width:100%}.jsnippet .jsnippet-title{padding:15px;font-size:1.4em}.jsnippet .jsnippet-description{padding-left:15px;padding-right:15px;font-size:1em}.jsnippet .jsnippet-host{padding:15px;text-transform:uppercase;font-size:.8em;color:#777;text-align:right}.jsnippet .jsnippet-url{display:none}.jeditor .jsnippet:after{content:"close";font-family:Material icons;font-size:24px;width:24px;height:24px;line-height:24px;cursor:pointer;text-shadow:0px 0px 2px #fff;position:absolute;top:12px;right:12px}.jsnippet *{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.jeditor img{border:2px solid transparent;box-sizing:border-box}.jeditor img.resizing{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.jeditor img:focus{border:2px solid #0096FD;outline:#0096FD}.jeditor .pdf{background-image:url("data:image/svg+xml,%3Csvg version=%271.1%27 id=%27Layer_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 x=%270px%27 y=%270px%27 viewBox=%270 0 512 512%27 style=%27enable-background:new 0 0 512 512;%27 xml:space=%27preserve%27%3E%3Cpath style=%27fill:%23C30B15;%27 d=%27M511.344,274.266C511.77,268.231,512,262.143,512,256C512,114.615,397.385,0,256,0S0,114.615,0,256 c0,117.769,79.53,216.949,187.809,246.801L511.344,274.266z%27/%3E%3Cpath style=%27fill:%2385080E;%27 d=%27M511.344,274.266L314.991,77.913L119.096,434.087l68.714,68.714C209.522,508.787,232.385,512,256,512 C391.243,512,501.976,407.125,511.344,274.266z%27/%3E%3Cpolygon style=%27fill:%23FFFFFF;%27 points=%27278.328,333.913 255.711,77.913 119.096,77.913 119.096,311.652 %27/%3E%3Cpolygon style=%27fill:%23E8E6E6;%27 points=%27392.904,311.652 392.904,155.826 337.252,133.565 314.991,77.913 255.711,77.913 256.067,333.913 %27/%3E%3Cpolygon style=%27fill:%23FFFFFF;%27 points=%27314.991,155.826 314.991,77.913 392.904,155.826 %27/%3E%3Crect x=%27119.096%27 y=%27311.652%27 style=%27fill:%23FC0F1A;%27 width=%27273.809%27 height=%27122.435%27/%3E%3Cg%3E%3Cpath style=%27fill:%23FFFFFF;%27 d=%27M204.871,346.387c13.547,0,21.341,6.659,21.341,18.465c0,12.412-7.795,19.601-21.341,19.601h-9.611 v14.909h-13.471v-52.975L204.871,346.387L204.871,346.387z M195.26,373.858h8.93c5.904,0,9.308-2.952,9.308-8.552 c0-5.525-3.406-8.324-9.308-8.324h-8.93V373.858z%27/%3E%3Cpath style=%27fill:%23FFFFFF;%27 d=%27M257.928,346.387c16.649,0,28.152,10.746,28.152,26.487c0,15.666-11.655,26.488-28.683,26.488 h-22.25v-52.975H257.928z M248.619,388.615h9.611c8.249,0,14.151-6.357,14.151-15.665c0-9.384-6.205-15.817-14.757-15.817h-9.006 V388.615z%27/%3E%3Cpath style=%27fill:%23FFFFFF;%27 d=%27M308.563,356.982v12.26h23.763v10.596h-23.763v19.525h-13.471v-52.975h39.277v10.595h-25.806 V356.982z%27/%3E%3C/g%3E%3C/svg%3E%0A");background-repeat:no-repeat;background-size:cover;width:60px;height:60px}.jeditor-toolbar{width:fit-content;max-width:100%;box-sizing:border-box;margin:10px}.toolbar-on-top .jeditor-toolbar{width:initial;margin:0;box-shadow:1px 1px 2px #0000001a;display:block}.toolbar-on-top .jeditor{padding:15px}.toolbar-on-top .jtoolbar .material-icons{font-size:24px;transform:initial;margin:4px}.toolbar-on-top .jtoolbar .jpicker-header{font-size:1em;margin-top:4px;margin-bottom:4px}.jeditor table{border-collapse:collapse}.jeditor table td{border:1px solid #bbb;height:2em}.jeditor table td:focus{border:1px solid blue}.jeditor .line-break{border-top:1px dashed #ccc;display:flex;justify-content:center;pointer-events:none}.jeditor .line-break:before{content:"New page";background-color:#fff;color:#ccc;margin:-1em;padding:6px;position:absolute}.jfloating{position:fixed;bottom:0;right:0;margin-right:5px;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);-moz-box-shadow:0 2px 10px rgba(0,0,0,.2);border:1px solid #ccc;background-color:#fff;box-sizing:border-box;padding-top:50px!important;z-index:9002;border-radius:8px}.jfloating.jfloating-big{width:510px!important;height:472px!important}.jfloating.jfloating-small{width:300px!important;height:320px!important}.jfloating.jfloating-large{width:600px!important;height:600px!important}.jfloating:before{position:absolute;top:0;left:0;width:100%;content:attr(title);padding:15px;box-sizing:border-box;font-size:1.2em;box-shadow:1px 1px 3px #0003;background-color:#fff;border-radius:8px 8px 0 0;background-color:#404040;font-size:.93rem;font-weight:600;color:#fff;letter-spacing:.5px}.jfloating:after{content:"";background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23FFF%27 d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");position:absolute;top:0;right:0;margin:14px;font-size:24px;width:24px;height:24px;cursor:pointer;text-shadow:0px 0px 5px #fff}.jfloating_content{padding:20px;overflow-y:auto;max-height:100%;box-sizing:border-box;height:-webkit-fill-available}.jfloating.jfloating-minimized{height:50px!important}.jfloating.jfloating-minimized .jfloating_content{display:none}.jmodal{position:fixed;top:50%;left:50%;width:60%;height:60%;-webkit-box-shadow:0 2px 12px rgba(0,0,0,.2);-moz-box-shadow:0 2px 12px rgba(0,0,0,.2);border:1px solid #ccc;background-color:#fff;transform:translate(-50%,-50%);box-sizing:border-box;z-index:9002;border-radius:4px;display:flex;flex-direction:column}.jmodal_title{padding:20px;height:70px;box-sizing:border-box;font-size:1.4em;background-color:#fff;border-radius:8px 8px 0 0;pointer-events:none;display:flex;-webkit-align-items:center;-webkit-box-align:center;align-items:center;border-bottom:1px solid #eee}.jmodal_title>div{font-size:1.4em}.jmodal_title[data-icon]:before{content:attr(data-icon);font-family:Material Icons!important;width:24px;height:24px;font-size:24px;margin-right:10px;line-height:24px}.jmodal_content{padding:20px;overflow-y:auto;height:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#333 transparent}.jmodal_title:empty{display:none}.jmodal_title:empty+.jmodal_content{height:100%}.jmodal_content::-webkit-scrollbar{height:12px}.jmodal_content::-webkit-scrollbar{width:12px}.jmodal_content::-webkit-scrollbar-track{border:1px solid #fff;background:#eee}.jmodal_content::-webkit-scrollbar-thumb{border:1px solid #fff;background:#888}.jmodal:after{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");position:absolute;top:0;right:0;margin:25px;font-size:24px;width:24px;height:24px;cursor:pointer;text-shadow:0px 0px 5px #fff}.jmodal_fullscreen{width:100%!important;height:100%!important;top:0;left:0;transform:none;border:0px;border-radius:0}.jmodal_backdrop{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background-color:#0003;border:0px;padding:0;z-index:8000;display:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jmodal_content .jcalendar .jcalendar-content,.jmodal_content .jdropdown-container{position:fixed}.jnotification{position:fixed;z-index:10000;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;bottom:0}.jnotification-container{-webkit-box-shadow:0px 2px 15px -5px rgba(0,0,0,.7);box-shadow:0 2px 15px -5px #000000b3;border-radius:8px;background-color:#000;background:#5c5c5c;background:linear-gradient(0deg,#5c5c5c,#4d4d4d);color:#fff;width:320px;margin:30px;padding:20px}.jnotification-close{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27 fill=%27white%27%3E%3Cpath d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");font-size:20px;width:20px;height:20px;cursor:pointer}.jnotification-title{font-weight:700}.jnotification-header{display:flex;padding-bottom:5px}.jnotification-header:empty{display:none}.jnotification-image{margin-right:5px}.jnotification-image:empty{display:none}.jnotification-image img{width:24px}.jnotification-name{text-transform:uppercase;font-size:.9em;flex:1;letter-spacing:.1em}.jnotification-error .jnotification-container{background:#b62606;background:linear-gradient(0deg,#aa290d,#950b0b)}@media (max-width: 800px){.jnotification{top:calc(0px + var(--jsafe-area-top));width:100%}.jnotification-container{background:#fffffff2;border:1px solid #eee;color:#444;margin:0;width:initial}.jnotification-error .jnotification-container{background:#fffffff2;color:#790909}.jnotification-close{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27 fill=%27black%27%3E%3Cpath d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E")}}.jnotification-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.jpicker{cursor:pointer;white-space:nowrap;display:inline-flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;position:relative;min-height:26px}.jpicker-header{background-repeat:no-repeat;background-position:top 50% right 5px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27none%27 d=%27M0 0h24v24H0V0z%27/%3E%3Cpath d=%27M7 10l5 5 5-5H7z%27 fill=%27gray%27/%3E%3C/svg%3E");text-overflow:ellipsis;cursor:pointer;box-sizing:border-box;text-align:left;outline:none;line-height:24px;padding:2px 35px 2px 12px;border-radius:4px}.jpicker-header:hover{background-color:#f2f2f2}.jpicker-content{position:absolute;top:0;display:none;box-shadow:0 4px 5px #00000024,0 1px 10px #0000001f,0 2px 4px -1px #0003;border-radius:4px;background-color:#fff;padding:4px;z-index:50;text-align:left;max-height:250px;scrollbar-width:thin;scrollbar-color:#333 transparent}.jpicker-content::-webkit-scrollbar{width:8px}.jpicker-content::-webkit-scrollbar-track{background:#eee}.jpicker-content::-webkit-scrollbar-thumb{background:#888}.jpicker-content>div{padding:6px 15px}.jpicker-focus>.jpicker-content{display:block}.jpicker-content>div:hover{background-color:#efefef}.jpicker-content>div:empty{opacity:0}.jpicker-header>i,.jpicker-header>div{display:block}.jpicker-focus>.jpicker-content.jpicker-columns{display:flex!important;justify-content:center;flex-wrap:wrap}.jpicker-focus .jpicker-content.jpicker-grid{display:inline-grid}.jprogressbar{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;-webkit-tap-highlight-color:transparent;display:inline-block;box-sizing:border-box;cursor:pointer;border:1px solid #ccc;position:relative}.jprogressbar:before{content:attr(data-value);position:absolute;margin:5px 5px 5px 10px}.jprogressbar-header::placeholder{color:#000}.jprogressbar:focus{outline:auto 5px -webkit-focus-ring-color}.jprogressbar>div{background-color:#eee;background-color:red;box-sizing:border-box;height:31px}.jrating{display:flex}.jrating>div{width:24px;height:24px;line-height:24px;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z%27 fill=%27gray%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E")}.jrating .jrating-over{background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27black%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");opacity:.7}.jrating .jrating-selected{background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27red%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E")}.jsearch{position:relative;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jsearch_container{position:absolute;box-shadow:0 1px 2px #3c40434d,0 2px 6px 2px #3c404326;border:none;-webkit-border-radius:4px;border-radius:4px;width:280px;padding:8px 0;z-index:1;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px #0003;-webkit-transition:opacity .218s;transition:opacity .218s;background:#fff;border:1px solid rgba(0,0,0,.2);cursor:pointer;margin:0;min-width:300px;outline:none;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jsearch_container:empty:after{content:attr(data-placeholder)}.jsearch_container>div{color:#333;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:flex;padding:5px 10px;-webkit-align-items:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jsearch_container>div:hover{background-color:#e8eaed}.jsearch_container>div>img{width:32px;height:32px;user-select:none;border-radius:16px;margin-right:2px}.jsearch_container>div>div{overflow:hidden;text-overflow:ellipsis;margin-left:2px;max-width:300px;white-space:nowrap;user-select:none}.jsearch_container .selected{background-color:#e8eaed}.jslider{outline:none}.jslider-focus{width:100%!important;height:100%!important}.jslider-focus img{display:none}.jslider img{width:100px}.jslider-left:before{position:fixed;left:15px;top:50%;content:"arrow_back_ios";color:#fff;width:30px;height:30px;font-family:Material Icons;font-size:30px;text-shadow:0px 0px 6px rgb(56,56,56);text-align:center;cursor:pointer}.jslider-right:after{position:fixed;right:15px;top:50%;content:"arrow_forward_ios";color:#fff;width:30px;height:30px;font-family:Material Icons;font-size:30px;text-shadow:0px 0px 6px rgb(56,56,56);text-align:center;cursor:pointer}.jslider-close{width:24px;height:24px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27white%27%3E%3Cpath d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E");position:fixed;top:15px;right:15px;cursor:pointer;z-index:3000;display:block!important}.jslider-counter{height:24px;background-color:transparent;position:fixed;left:50%;transform:translate(-50%);bottom:15px;cursor:pointer;z-index:3000;display:flex;display:-webkit-flex;-webkit-justify-content:center;-webkit-align-items:center;-webkit-flex-direction:row;justify-content:center;align-items:center;flex-direction:row}.jslider-caption{position:fixed;max-width:90vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;top:15px;left:15px;z-index:3000;color:#fff;font-size:1rem;display:block!important}.jslider-counter div{width:10px;height:10px;background:#fff;border-radius:50%;margin:0 5px;display:block!important}.jslider-counter .jslider-counter-focus{background-color:#6495ed;pointer-events:none}.jslider-focus{position:fixed;left:0;top:0;width:100%;min-height:100%;max-height:100%;z-index:2000;margin:0;box-sizing:border-box;background-color:#000c;-webkit-transition-duration:.05s;transition-duration:.05s;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;align-items:center}.jslider-focus img{width:50vw;height:auto;box-sizing:border-box;margin:0 auto;vertical-align:middle;display:none}.jslider-focus img.jslider-vertical{width:auto;height:80vh}@media only screen and (max-width: 576px){.jslider-focus img.jslider-vertical{width:99vw!important;height:auto!important}.jslider-focus img{width:100vw!important;height:auto!important}}.jslider-grid{display:-ms-grid;display:grid;grid-gap:1px;position:relative}.jslider-grid[data-number="2"]{-ms-grid-columns:1fr 50%;grid-template-columns:1fr 50%}.jslider-grid[data-number="3"]{-ms-grid-columns:1fr 33%;grid-template-columns:1fr 33%}.jslider-grid[data-number="4"]{-ms-grid-columns:1fr 25%;grid-template-columns:1fr 25%}.jslider-grid img{display:none;width:100%;height:100%;object-fit:cover}.jslider-grid[data-total]:after{content:attr(data-total) "+";font-size:1.5em;position:absolute;color:#fff;right:15px;bottom:6px}.jslider-grid img:first-child{-ms-grid-column:1;-ms-grid-row:1;grid-column:1;grid-row:1;display:block}.jslider-grid[data-number="2"] img:nth-child(2){-ms-grid-column:2;-ms-grid-row:1;grid-column:2;grid-row:1;display:block}.jslider-grid[data-number="3"] img:first-child{-ms-grid-column:1 / 2;-ms-grid-row:1 / 4;grid-column:1 / 2;grid-row:1 / 4}.jslider-grid[data-number="3"] img:nth-child(2){-ms-grid-column:2;-ms-grid-row:1;grid-column:2;grid-row:1;display:block}.jslider-grid[data-number="3"] img:nth-child(3){-ms-grid-column:2;-ms-grid-row:2;grid-column:2;grid-row:2;display:block}.jslider-grid[data-number="4"] img:first-child{-ms-grid-column:1 / 2;-ms-grid-row:1 / 4;grid-column:1 / 2;grid-row:1 / 4}.jslider-grid[data-number="4"] img:nth-child(2){-ms-grid-column:2;-ms-grid-row:1;grid-column:2;grid-row:1;display:block}.jslider-grid[data-number="4"] img:nth-child(3){-ms-grid-column:2;-ms-grid-row:2;grid-column:2;grid-row:2;display:block}.jslider-grid[data-number="4"] img:nth-child(4){-ms-grid-column:2;-ms-grid-row:3;grid-column:2;grid-row:3;display:block}.jtabs{max-width:100vw;position:relative}.jtabs .jtabs-headers-container{display:flex;align-items:center}.jtabs .jtabs-headers{display:flex;align-items:center;overflow:hidden;position:relative}.jtabs .jtabs-headers>div:not(.jtabs-border){padding:8px 20px;margin-left:1px;margin-right:1px;background-color:#f1f1f1;cursor:pointer;white-space:nowrap;text-align:center}.jtabs .jtabs-headers>div.jtabs-selected{background-color:#e8e8e8;color:#000}.jtabs .jtabs-headers>div>div{color:#555;width:100%;overflow:hidden}.jtabs .jtabs-headers i{display:block;margin:auto}.jtabs .jtabs-content{box-sizing:border-box}.jtabs .jtabs-content>div{display:none;box-sizing:border-box}.jtabs .jtabs-content>div.jtabs-selected{display:block}.jtabs .jtabs-border{position:absolute;height:2px;background-color:#888;transform-origin:left;transition:all .2s cubic-bezier(.4,0,.2,1);transition-property:color,left,transform;display:none;pointer-events:none}.jtabs-animation .jtabs-border{display:initial}.jtabs .jtabs-controls{margin:3px 3px 3px 10px;display:flex;min-width:82px}.jtabs .jtabs-controls>div{cursor:pointer;background-position:center;background-repeat:no-repeat;width:24px;height:24px;line-height:24px}.jtabs .jtabs-prev{margin-left:10px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27gray%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z%27/%3E%3C/svg%3E")}.jtabs .jtabs-prev.disabled{margin-left:10px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27lightgray%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z%27/%3E%3C/svg%3E")}.jtabs .jtabs-next{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27gray%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%27/%3E%3C/svg%3E")}.jtabs .jtabs-next.disabled{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27lightgray%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%27/%3E%3C/svg%3E")}.jtabs .jtabs-add{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27%3E%3Cpath d=%27M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z%27 fill=%27%23bbbbbb%27/%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3C/svg%3E")}.jtabs.jtabs-modern .jtabs-headers>div:not(.jtabs-border){padding:4px 10px;background-color:#fff}.jtabs.jtabs-modern .jtabs-headers>.jtabs-selected{color:#000}.jtabs.jtabs-modern .jtabs-headers>.jtabs-selected .material-icons{color:#000}.jtabs.jtabs-modern .jtabs-headers{background:#eeeeef!important;padding:2px;border-radius:4px}.jtabs.jtabs-modern .jtabs-headers .jtabs-border{border-color:#eeeeef!important}.jtabs.jtabs-modern .jtabs-border{background-color:#c2c5bce1}.jtags{display:flex;flex-wrap:wrap;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-ms-flex-pack:flex-start;-webkit-justify-content:space-between;justify-content:flex-start;padding:1px;border:1px solid #ccc;position:relative}.jtags.jtags-empty:not(.jtags-focus):before{position:absolute;color:#ccc;content:attr(data-placeholder);top:0;margin:3px 3px 3px 6px}.jtags>div{padding:3px 22px 3px 10px;font-size:.9em;position:relative;border-radius:1px;margin:2px;display:block;outline:none}.jtags>div:empty:before{content:" ";white-space:pre}.jtags>div:after{content:"x";position:absolute;right:4px;width:12px;height:12px;cursor:pointer;font-size:.9em;display:none}.jtags_label{background-color:#e4e4e4!important}.jtags_label:after{display:inline-block!important}.jtags_error:after{color:#fff!important}.jtags_error{background-color:#d93025!important;color:#fff}.jtoolbar-container{border-radius:2px;box-shadow:0 4px 5px #00000024,0 1px 10px #0000001f,0 2px 4px -1px #0003;display:inline-flex!important}.jtoolbar{cursor:pointer;white-space:nowrap;display:flex;padding:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:13px}.jtoolbar-disabled{pointer-events:none;opacity:.4}.jtoolbar-mobile{display:flex;position:fixed;bottom:0;margin:0;left:0;width:100%;background:#f7f7f8;z-index:1;box-sizing:border-box;box-shadow:0 -1px 2px #0000001a;border-radius:0}.jtoolbar>div{display:inline-flex;align-items:center;box-sizing:border-box;vertical-align:middle;justify-content:space-evenly}.jtoolbar-mobile>div{display:flex;width:100%}.jtoolbar .jtoolbar-item{text-align:center;margin:auto;padding:2px 4px}.jtoolbar-mobile .jtoolbar-item{position:relative;flex:1}.jtoolbar .jtoolbar-divisor{width:2px;height:18px;padding:0;margin-left:4px;margin-right:4px;background-color:#ddd}.jtoolbar .jtoolbar-label{padding-left:8px;padding-right:8px}.jtoolbar-mobile a{text-decoration:none;display:inline-block}.jtoolbar-mobile i{display:inline-flex!important;color:#929292}.jtoolbar-mobile span{font-size:.7em;display:block;color:#929292}.jtoolbar-mobile .jtoolbar-selected a,.jtoolbar-mobile .jtoolbar-selected i,.jtoolbar-mobile .jtoolbar-selected span{color:var(--jactive-color)!important;background-color:transparent}.jtoolbar-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jtoolbar-item i{display:block;color:#333}.jtoolbar-item:hover{background-color:#f2f2f2}.jtoolbar .jpicker{padding-left:0;padding-right:0}.jtoolbar .jpicker-header{height:24px;line-height:24px;padding:0 20px 0 8px;background-position:top 50% right 0px;display:flex;align-items:center;font-size:.9em}.jtoolbar .jpicker-content>div{padding:6px}.jtoolbar-active{background-color:#eee}.jtoolbar .fa{width:18px;height:18px;display:block;line-height:18px;font-size:14px}.jtoolbar .material-icons{font-size:18px;width:24px;height:24px;display:block;line-height:24px;transform:rotate(.03deg);text-align:center}.jtoolbar .jtoolbar-arrow{background-repeat:no-repeat;background-position:center;background-image:url("data:image/svg+xml,%0A%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27black%27 width=%2718px%27 height=%2718px%27%3E%3Cpath d=%27M0 0h24v24H0z%27 fill=%27none%27/%3E%3Cpath d=%27M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z%27/%3E%3C/svg%3E");width:24px;height:16px;margin-left:4px;border-left:1px solid #f2f2f2}.jtoolbar-floating{position:absolute;display:none;box-shadow:0 4px 5px #00000024,0 1px 10px #0000001f,0 2px 4px -1px #0003;border-radius:4px;background-color:#fff;padding:4px;z-index:50;text-align:left;margin-right:20px}.jtoolbar-floating .jtoolbar-divisor{display:none}.jtoolbar-arrow-selected .jtoolbar-floating{display:flex;flex-wrap:wrap}', TAG_NAME = "neco-jspreadsheet", createHTML = (n) => `
<style>

:host{
/*  height: 100%;
  width: 100%;
  */
}
#jspreadsheet{
  display:flex;
  flex-flow: column;
/*
  height: 100%;
  width: 100%;
*/
}
${jspreadsheetCSS}
${jspreadsheetThemesCSS}
${jsutesCSS}

</style>
<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
<div id="jspreadsheet"> </div>
`, CustomElem = class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const n = this.attachShadow({ mode: "open" });
    this.shadow = n;
    const g = createHTML();
    n.setHTMLUnsafe(g);
    const o = n.querySelector("#jspreadsheet");
    this.divElem = o, new ResizeObserver((C) => {
      const G = C[0].target.getBoundingClientRect(), z = G.width, m = G.height;
      this.resize(z, m);
    }).observe(this.shadow.host);
  }
  get contents() {
    return this._contents;
  }
  set contents(n) {
    this.setContents(n);
  }
  setContents(n) {
    this.jsp && (this.divElem.innerHTML = "", this.jsp = null);
    const g = this.shadow.host.getBoundingClientRect(), o = g.width, p = g.height, C = {
      root: this.shadow
    }, _ = Object.assign(C, n), G = jspreadsheet(this.divElem, _);
    this.jsp = G, this.shadow.host.onblur = (z) => {
      G.forEach((m) => m.resetSelection());
    }, this.resize(o, p);
  }
  resize(n, g) {
    if (!this.jsp) return;
    const p = [...this.divElem.childNodes].filter((C) => !C.classList.contains("jtabs-content")).map((C) => C?.getBoundingClientRect().height).reduce((C, _) => C + Math.min(_, 40), 0);
    this.jsp.forEach((C) => {
      const z = [...C.element.childNodes].filter((s) => !s.classList.contains("jss_content")).map((s) => s?.getBoundingClientRect().height).reduce((s, w) => s + w, 0), m = Math.max(0, g - p - z);
      C.content.style.maxWidth = n + "px", C.content.style.maxHeight = m + "px";
    });
  }
};
customElements.define(TAG_NAME, CustomElem);
export {
  CustomElem,
  TAG_NAME
};
