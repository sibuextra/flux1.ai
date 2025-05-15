"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [89249], {
        62484: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return r
                }
            });

            function r(e, [t, n]) {
                return Math.min(n, Math.max(t, e))
            }
        },
        21107: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return k
                },
                Eh: function() {
                    return I
                },
                VY: function() {
                    return W
                },
                fC: function() {
                    return N
                },
                D7: function() {
                    return m
                }
            });
            var r = n(2265),
                o = n(97859),
                l = n(51050),
                i = n(82912),
                a = n(57437),
                u = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...l
                    } = e;
                    return (0, a.jsx)(i.WV.svg, { ...l,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, a.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            u.displayName = "Arrow";
            var s = n(98575),
                d = n(73966),
                c = n(26606),
                f = n(61188),
                p = n(90420),
                v = "Popper",
                [h, m] = (0, d.b)(v),
                [g, y] = h(v),
                w = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, l] = r.useState(null);
                    return (0, a.jsx)(g, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: l,
                        children: n
                    })
                };
            w.displayName = v;
            var x = "PopperAnchor",
                b = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...l
                    } = e, u = y(x, n), d = r.useRef(null), c = (0, s.e)(t, d);
                    return r.useEffect(() => {
                        u.onAnchorChange((null == o ? void 0 : o.current) || d.current)
                    }), o ? null : (0, a.jsx)(i.WV.div, { ...l,
                        ref: c
                    })
                });
            b.displayName = x;
            var E = "PopperContent",
                [C, S] = h(E),
                j = r.forwardRef((e, t) => {
                    var n, u, d, v, h, m, g, w;
                    let {
                        __scopePopper: x,
                        side: b = "bottom",
                        sideOffset: S = 0,
                        align: j = "center",
                        alignOffset: P = 0,
                        arrowPadding: T = 0,
                        avoidCollisions: R = !0,
                        collisionBoundary: N = [],
                        collisionPadding: k = 0,
                        sticky: W = "partial",
                        hideWhenDetached: I = !1,
                        updatePositionStrategy: A = "optimized",
                        onPlaced: V,
                        ...O
                    } = e, F = y(E, x), [_, H] = r.useState(null), B = (0, s.e)(t, e => H(e)), [K, z] = r.useState(null), U = (0, p.t)(K), Y = null !== (g = null == U ? void 0 : U.width) && void 0 !== g ? g : 0, X = null !== (w = null == U ? void 0 : U.height) && void 0 !== w ? w : 0, Z = "number" == typeof k ? k : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...k
                    }, q = Array.isArray(N) ? N : [N], G = q.length > 0, J = {
                        padding: Z,
                        boundary: q.filter(M),
                        altBoundary: G
                    }, {
                        refs: $,
                        floatingStyles: Q,
                        placement: ee,
                        isPositioned: et,
                        middlewareData: en
                    } = (0, o.YF)({
                        strategy: "fixed",
                        placement: b + ("center" !== j ? "-" + j : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return (0, l.Me)(...t, {
                                animationFrame: "always" === A
                            })
                        },
                        elements: {
                            reference: F.anchor
                        },
                        middleware: [(0, o.cv)({
                            mainAxis: S + X,
                            alignmentAxis: P
                        }), R && (0, o.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === W ? (0, o.dr)() : void 0,
                            ...J
                        }), R && (0, o.RR)({ ...J
                        }), (0, o.dp)({ ...J,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: l,
                                    height: i
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(l, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(i, "px"))
                            }
                        }), K && (0, o.x7)({
                            element: K,
                            padding: T
                        }), D({
                            arrowWidth: Y,
                            arrowHeight: X
                        }), I && (0, o.Cp)({
                            strategy: "referenceHidden",
                            ...J
                        })]
                    }), [er, eo] = L(ee), el = (0, c.W)(V);
                    (0, f.b)(() => {
                        et && (null == el || el())
                    }, [et, el]);
                    let ei = null === (n = en.arrow) || void 0 === n ? void 0 : n.x,
                        ea = null === (u = en.arrow) || void 0 === u ? void 0 : u.y,
                        eu = (null === (d = en.arrow) || void 0 === d ? void 0 : d.centerOffset) !== 0,
                        [es, ed] = r.useState();
                    return (0, f.b)(() => {
                        _ && ed(window.getComputedStyle(_).zIndex)
                    }, [_]), (0, a.jsx)("div", {
                        ref: $.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...Q,
                            transform: et ? Q.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: es,
                            "--radix-popper-transform-origin": [null === (v = en.transformOrigin) || void 0 === v ? void 0 : v.x, null === (h = en.transformOrigin) || void 0 === h ? void 0 : h.y].join(" "),
                            ...(null === (m = en.hide) || void 0 === m ? void 0 : m.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, a.jsx)(C, {
                            scope: x,
                            placedSide: er,
                            onArrowChange: z,
                            arrowX: ei,
                            arrowY: ea,
                            shouldHideArrow: eu,
                            children: (0, a.jsx)(i.WV.div, {
                                "data-side": er,
                                "data-align": eo,
                                ...O,
                                ref: B,
                                style: { ...O.style,
                                    animation: et ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            j.displayName = E;
            var P = "PopperArrow",
                T = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                R = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = S(P, n), l = T[o.placedSide];
                    return (0, a.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [l]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, a.jsx)(u, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function M(e) {
                return null !== e
            }
            R.displayName = P;
            var D = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, l, i;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: s
                    } = t, d = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [p, v] = L(a), h = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[v], m = (null !== (l = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== l ? l : 0) + c / 2, g = (null !== (i = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== i ? i : 0) + f / 2, y = "", w = "";
                    return "bottom" === p ? (y = d ? h : "".concat(m, "px"), w = "".concat(-f, "px")) : "top" === p ? (y = d ? h : "".concat(m, "px"), w = "".concat(u.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), w = d ? h : "".concat(g, "px")) : "left" === p && (y = "".concat(u.floating.width + f, "px"), w = d ? h : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function L(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var N = w,
                k = b,
                W = j,
                I = R
        },
        89249: function(e, t, n) {
            let r;
            n.d(t, {
                VY: function() {
                    return eJ
                },
                ZA: function() {
                    return eQ
                },
                JO: function() {
                    return eq
                },
                ck: function() {
                    return e1
                },
                wU: function() {
                    return e5
                },
                eT: function() {
                    return e2
                },
                __: function() {
                    return e0
                },
                h_: function() {
                    return eG
                },
                fC: function() {
                    return eY
                },
                $G: function() {
                    return e9
                },
                u_: function() {
                    return e8
                },
                Z0: function() {
                    return e7
                },
                xz: function() {
                    return eX
                },
                B4: function() {
                    return eZ
                },
                l_: function() {
                    return e$
                }
            });
            var o, l = n(2265),
                i = n(54887),
                a = n(62484),
                u = n(6741),
                s = n(71605),
                d = n(98575),
                c = n(73966),
                f = n(29114),
                p = n(82912),
                v = n(26606),
                h = n(57437),
                m = "dismissableLayer.update",
                g = l.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                y = l.forwardRef((e, t) => {
                    var n, r;
                    let {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: c,
                        onInteractOutside: f,
                        onDismiss: y,
                        ...b
                    } = e, E = l.useContext(g), [C, S] = l.useState(null), j = null !== (r = null == C ? void 0 : C.ownerDocument) && void 0 !== r ? r : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, P] = l.useState({}), T = (0, d.e)(t, e => S(e)), R = Array.from(E.layers), [M] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), D = R.indexOf(M), L = C ? R.indexOf(C) : -1, N = E.layersWithOutsidePointerEventsDisabled.size > 0, k = L >= D, W = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, v.W)(e),
                            o = l.useRef(!1),
                            i = l.useRef(() => {});
                        return l.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                x("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", i.current), i.current = t, n.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", i.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        !k || n || (null == s || s(e), null == f || f(e), e.defaultPrevented || null == y || y())
                    }, j), I = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, v.W)(e),
                            o = l.useRef(!1);
                        return l.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && x("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...E.branches].some(e => e.contains(t)) || (null == c || c(e), null == f || f(e), e.defaultPrevented || null == y || y())
                    }, j);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, v.W)(e);
                        l.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        L !== E.layers.size - 1 || (null == a || a(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
                    }, j), l.useEffect(() => {
                        if (C) return i && (0 === E.layersWithOutsidePointerEventsDisabled.size && (o = j.body.style.pointerEvents, j.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), w(), () => {
                            i && 1 === E.layersWithOutsidePointerEventsDisabled.size && (j.body.style.pointerEvents = o)
                        }
                    }, [C, j, i, E]), l.useEffect(() => () => {
                        C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), w())
                    }, [C, E]), l.useEffect(() => {
                        let e = () => P({});
                        return document.addEventListener(m, e), () => document.removeEventListener(m, e)
                    }, []), (0, h.jsx)(p.WV.div, { ...b,
                        ref: T,
                        style: {
                            pointerEvents: N ? k ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, u.M)(e.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: (0, u.M)(e.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: (0, u.M)(e.onPointerDownCapture, W.onPointerDownCapture)
                    })
                });

            function w() {
                let e = new CustomEvent(m);
                document.dispatchEvent(e)
            }

            function x(e, t, n, r) {
                let {
                    discrete: o
                } = r, l = n.originalEvent.target, i = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && l.addEventListener(e, t, {
                    once: !0
                }), o ? (0, p.jH)(l, i) : l.dispatchEvent(i)
            }
            y.displayName = "DismissableLayer", l.forwardRef((e, t) => {
                let n = l.useContext(g),
                    r = l.useRef(null),
                    o = (0, d.e)(t, r);
                return l.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, h.jsx)(p.WV.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var b = n(86097),
                E = "focusScope.autoFocusOnMount",
                C = "focusScope.autoFocusOnUnmount",
                S = {
                    bubbles: !1,
                    cancelable: !0
                },
                j = l.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...a
                    } = e, [u, s] = l.useState(null), c = (0, v.W)(o), f = (0, v.W)(i), m = l.useRef(null), g = (0, d.e)(t, e => s(e)), y = l.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    l.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (y.paused || !u) return;
                                    let t = e.target;
                                    u.contains(t) ? m.current = t : R(m.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (y.paused || !u) return;
                                    let t = e.relatedTarget;
                                    null === t || u.contains(t) || R(m.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && R(u)
                            });
                            return u && n.observe(u, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, u, y.paused]), l.useEffect(() => {
                        if (u) {
                            M.add(y);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let t = new CustomEvent(E, S);
                                u.addEventListener(E, c), u.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (R(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(P(u).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && R(u))
                            }
                            return () => {
                                u.removeEventListener(E, c), setTimeout(() => {
                                    let t = new CustomEvent(C, S);
                                    u.addEventListener(C, f), u.dispatchEvent(t), t.defaultPrevented || R(null != e ? e : document.body, {
                                        select: !0
                                    }), u.removeEventListener(C, f), M.remove(y)
                                }, 0)
                            }
                        }
                    }, [u, c, f, y]);
                    let w = l.useCallback(e => {
                        if (!n && !r || y.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, l] = function(e) {
                                    let t = P(e);
                                    return [T(t, e), T(t.reverse(), e)]
                                }(t);
                            r && l ? e.shiftKey || o !== l ? e.shiftKey && o === r && (e.preventDefault(), n && R(l, {
                                select: !0
                            })) : (e.preventDefault(), n && R(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, y.paused]);
                    return (0, h.jsx)(p.WV.div, {
                        tabIndex: -1,
                        ...a,
                        ref: g,
                        onKeyDown: w
                    })
                });

            function P(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function T(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function R(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            j.displayName = "FocusScope";
            var M = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = D(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = D(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function D(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var L = n(99255),
                N = n(21107),
                k = n(61188),
                W = l.forwardRef((e, t) => {
                    var n, r;
                    let {
                        container: o,
                        ...a
                    } = e, [u, s] = l.useState(!1);
                    (0, k.b)(() => s(!0), []);
                    let d = o || u && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                    return d ? i.createPortal((0, h.jsx)(p.WV.div, { ...a,
                        ref: t
                    }), d) : null
                });
            W.displayName = "Portal";
            var I = l.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e, o = l.Children.toArray(n), i = o.find(O);
                if (i) {
                    let e = i.props.children,
                        n = o.map(t => t !== i ? t : l.Children.count(e) > 1 ? l.Children.only(null) : l.isValidElement(e) ? e.props.children : null);
                    return (0, h.jsx)(A, { ...r,
                        ref: t,
                        children: l.isValidElement(e) ? l.cloneElement(e, void 0, n) : null
                    })
                }
                return (0, h.jsx)(A, { ...r,
                    ref: t,
                    children: n
                })
            });
            I.displayName = "Slot";
            var A = l.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (l.isValidElement(n)) {
                    let e, o;
                    let i = (e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                    return l.cloneElement(n, { ... function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    l = t[r];
                                /^on[A-Z]/.test(r) ? o && l ? n[r] = (...e) => {
                                    l(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...l
                                } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props),
                        ref: t ? (0, d.F)(t, i) : i
                    })
                }
                return l.Children.count(n) > 1 ? l.Children.only(null) : null
            });
            A.displayName = "SlotClone";
            var V = ({
                children: e
            }) => (0, h.jsx)(h.Fragment, {
                children: e
            });

            function O(e) {
                return l.isValidElement(e) && e.type === V
            }
            var F = n(80886),
                _ = n(6718),
                H = n(95098),
                B = n(5478),
                K = n(87922),
                z = [" ", "Enter", "ArrowUp", "ArrowDown"],
                U = [" ", "Enter"],
                Y = "Select",
                [X, Z, q] = (0, s.B)(Y),
                [G, J] = (0, c.b)(Y, [q, N.D7]),
                $ = (0, N.D7)(),
                [Q, ee] = G(Y),
                [et, en] = G(Y),
                er = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: i,
                        value: a,
                        defaultValue: u,
                        onValueChange: s,
                        dir: d,
                        name: c,
                        autoComplete: p,
                        disabled: v,
                        required: m,
                        form: g
                    } = e, y = $(t), [w, x] = l.useState(null), [b, E] = l.useState(null), [C, S] = l.useState(!1), j = (0, f.gm)(d), [P = !1, T] = (0, F.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: i
                    }), [R, M] = (0, F.T)({
                        prop: a,
                        defaultProp: u,
                        onChange: s
                    }), D = l.useRef(null), k = !w || g || !!w.closest("form"), [W, I] = l.useState(new Set), A = Array.from(W).map(e => e.props.value).join(";");
                    return (0, h.jsx)(N.fC, { ...y,
                        children: (0, h.jsxs)(Q, {
                            required: m,
                            scope: t,
                            trigger: w,
                            onTriggerChange: x,
                            valueNode: b,
                            onValueNodeChange: E,
                            valueNodeHasChildren: C,
                            onValueNodeHasChildrenChange: S,
                            contentId: (0, L.M)(),
                            value: R,
                            onValueChange: M,
                            open: P,
                            onOpenChange: T,
                            dir: j,
                            triggerPointerDownPosRef: D,
                            disabled: v,
                            children: [(0, h.jsx)(X.Provider, {
                                scope: t,
                                children: (0, h.jsx)(et, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: l.useCallback(e => {
                                        I(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: l.useCallback(e => {
                                        I(t => {
                                            let n = new Set(t);
                                            return n.delete(e), n
                                        })
                                    }, []),
                                    children: n
                                })
                            }), k ? (0, h.jsxs)(eK, {
                                "aria-hidden": !0,
                                required: m,
                                tabIndex: -1,
                                name: c,
                                autoComplete: p,
                                value: R,
                                onChange: e => M(e.target.value),
                                disabled: v,
                                form: g,
                                children: [void 0 === R ? (0, h.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(W)]
                            }, A) : null]
                        })
                    })
                };
            er.displayName = Y;
            var eo = "SelectTrigger",
                el = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: r = !1,
                        ...o
                    } = e, i = $(n), a = ee(eo, n), s = a.disabled || r, c = (0, d.e)(t, a.onTriggerChange), f = Z(n), v = l.useRef("touch"), [m, g, y] = ez(e => {
                        let t = f().filter(e => !e.disabled),
                            n = t.find(e => e.value === a.value),
                            r = eU(t, e, n);
                        void 0 !== r && a.onValueChange(r.value)
                    }), w = e => {
                        s || (a.onOpenChange(!0), y()), e && (a.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, h.jsx)(N.ee, {
                        asChild: !0,
                        ...i,
                        children: (0, h.jsx)(p.WV.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": a.contentId,
                            "aria-expanded": a.open,
                            "aria-required": a.required,
                            "aria-autocomplete": "none",
                            dir: a.dir,
                            "data-state": a.open ? "open" : "closed",
                            disabled: s,
                            "data-disabled": s ? "" : void 0,
                            "data-placeholder": eB(a.value) ? "" : void 0,
                            ...o,
                            ref: c,
                            onClick: (0, u.M)(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== v.current && w(e)
                            }),
                            onPointerDown: (0, u.M)(o.onPointerDown, e => {
                                v.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (w(e), e.preventDefault())
                            }),
                            onKeyDown: (0, u.M)(o.onKeyDown, e => {
                                let t = "" !== m.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || g(e.key), (!t || " " !== e.key) && z.includes(e.key) && (w(), e.preventDefault())
                            })
                        })
                    })
                });
            el.displayName = eo;
            var ei = "SelectValue",
                ea = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: o,
                        children: l,
                        placeholder: i = "",
                        ...a
                    } = e, u = ee(ei, n), {
                        onValueNodeHasChildrenChange: s
                    } = u, c = void 0 !== l, f = (0, d.e)(t, u.onValueNodeChange);
                    return (0, k.b)(() => {
                        s(c)
                    }, [s, c]), (0, h.jsx)(p.WV.span, { ...a,
                        ref: f,
                        style: {
                            pointerEvents: "none"
                        },
                        children: eB(u.value) ? (0, h.jsx)(h.Fragment, {
                            children: i
                        }) : l
                    })
                });
            ea.displayName = ei;
            var eu = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    children: r,
                    ...o
                } = e;
                return (0, h.jsx)(p.WV.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: r || "▼"
                })
            });
            eu.displayName = "SelectIcon";
            var es = e => (0, h.jsx)(W, {
                asChild: !0,
                ...e
            });
            es.displayName = "SelectPortal";
            var ed = "SelectContent",
                ec = l.forwardRef((e, t) => {
                    let n = ee(ed, e.__scopeSelect),
                        [r, o] = l.useState();
                    return ((0, k.b)(() => {
                        o(new DocumentFragment)
                    }, []), n.open) ? (0, h.jsx)(ev, { ...e,
                        ref: t
                    }) : r ? i.createPortal((0, h.jsx)(ef, {
                        scope: e.__scopeSelect,
                        children: (0, h.jsx)(X.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, h.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), r) : null
                });
            ec.displayName = ed;
            var [ef, ep] = G(ed), ev = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    position: r = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    side: s,
                    sideOffset: c,
                    align: f,
                    alignOffset: p,
                    arrowPadding: v,
                    collisionBoundary: m,
                    collisionPadding: g,
                    sticky: w,
                    hideWhenDetached: x,
                    avoidCollisions: E,
                    ...C
                } = e, S = ee(ed, n), [P, T] = l.useState(null), [R, M] = l.useState(null), D = (0, d.e)(t, e => T(e)), [L, N] = l.useState(null), [k, W] = l.useState(null), A = Z(n), [V, O] = l.useState(!1), F = l.useRef(!1);
                l.useEffect(() => {
                    if (P) return (0, B.Ry)(P)
                }, [P]), (0, b.EW)();
                let _ = l.useCallback(e => {
                        let [t, ...n] = A().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                        for (let n of e)
                            if (n === o || (null == n || n.scrollIntoView({
                                    block: "nearest"
                                }), n === t && R && (R.scrollTop = 0), n === r && R && (R.scrollTop = R.scrollHeight), null == n || n.focus(), document.activeElement !== o)) return
                    }, [A, R]),
                    H = l.useCallback(() => _([L, P]), [_, L, P]);
                l.useEffect(() => {
                    V && H()
                }, [V, H]);
                let {
                    onOpenChange: z,
                    triggerPointerDownPosRef: U
                } = S;
                l.useEffect(() => {
                    if (P) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var n, r, o, l;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null !== (o = null === (n = U.current) || void 0 === n ? void 0 : n.x) && void 0 !== o ? o : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null !== (l = null === (r = U.current) || void 0 === r ? void 0 : r.y) && void 0 !== l ? l : 0))
                                }
                            },
                            n = n => {
                                e.x <= 10 && e.y <= 10 ? n.preventDefault() : P.contains(n.target) || z(!1), document.removeEventListener("pointermove", t), U.current = null
                            };
                        return null !== U.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                capture: !0
                            })
                        }
                    }
                }, [P, z, U]), l.useEffect(() => {
                    let e = () => z(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [z]);
                let [Y, X] = ez(e => {
                    let t = A().filter(e => !e.disabled),
                        n = t.find(e => e.ref.current === document.activeElement),
                        r = eU(t, e, n);
                    r && setTimeout(() => r.ref.current.focus())
                }), q = l.useCallback((e, t, n) => {
                    let r = !F.current && !n;
                    (void 0 !== S.value && S.value === t || r) && (N(e), r && (F.current = !0))
                }, [S.value]), G = l.useCallback(() => null == P ? void 0 : P.focus(), [P]), J = l.useCallback((e, t, n) => {
                    let r = !F.current && !n;
                    (void 0 !== S.value && S.value === t || r) && W(e)
                }, [S.value]), $ = "popper" === r ? em : eh, Q = $ === em ? {
                    side: s,
                    sideOffset: c,
                    align: f,
                    alignOffset: p,
                    arrowPadding: v,
                    collisionBoundary: m,
                    collisionPadding: g,
                    sticky: w,
                    hideWhenDetached: x,
                    avoidCollisions: E
                } : {};
                return (0, h.jsx)(ef, {
                    scope: n,
                    content: P,
                    viewport: R,
                    onViewportChange: M,
                    itemRefCallback: q,
                    selectedItem: L,
                    onItemLeave: G,
                    itemTextRefCallback: J,
                    focusSelectedItem: H,
                    selectedItemText: k,
                    position: r,
                    isPositioned: V,
                    searchRef: Y,
                    children: (0, h.jsx)(K.Z, {
                        as: I,
                        allowPinchZoom: !0,
                        children: (0, h.jsx)(j, {
                            asChild: !0,
                            trapped: S.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: (0, u.M)(o, e => {
                                var t;
                                null === (t = S.trigger) || void 0 === t || t.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, h.jsx)(y, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: a,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => S.onOpenChange(!1),
                                children: (0, h.jsx)($, {
                                    role: "listbox",
                                    id: S.contentId,
                                    "data-state": S.open ? "open" : "closed",
                                    dir: S.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...C,
                                    ...Q,
                                    onPlaced: () => O(!0),
                                    ref: D,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...C.style
                                    },
                                    onKeyDown: (0, u.M)(C.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || X(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = A().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let n = e.target,
                                                    r = t.indexOf(n);
                                                t = t.slice(r + 1)
                                            }
                                            setTimeout(() => _(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            ev.displayName = "SelectContentImpl";
            var eh = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    onPlaced: r,
                    ...o
                } = e, i = ee(ed, n), u = ep(ed, n), [s, c] = l.useState(null), [f, v] = l.useState(null), m = (0, d.e)(t, e => v(e)), g = Z(n), y = l.useRef(!1), w = l.useRef(!0), {
                    viewport: x,
                    selectedItem: b,
                    selectedItemText: E,
                    focusSelectedItem: C
                } = u, S = l.useCallback(() => {
                    if (i.trigger && i.valueNode && s && f && x && b && E) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = f.getBoundingClientRect(),
                            n = i.valueNode.getBoundingClientRect(),
                            o = E.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let r = o.left - t.left,
                                l = n.left - r,
                                i = e.left - l,
                                u = e.width + i,
                                d = Math.max(u, t.width),
                                c = window.innerWidth - 10,
                                f = (0, a.u)(l, [10, Math.max(10, c - d)]);
                            s.style.minWidth = u + "px", s.style.left = f + "px"
                        } else {
                            let r = t.right - o.right,
                                l = window.innerWidth - n.right - r,
                                i = window.innerWidth - e.right - l,
                                u = e.width + i,
                                d = Math.max(u, t.width),
                                c = window.innerWidth - 10,
                                f = (0, a.u)(l, [10, Math.max(10, c - d)]);
                            s.style.minWidth = u + "px", s.style.right = f + "px"
                        }
                        let l = g(),
                            u = window.innerHeight - 20,
                            d = x.scrollHeight,
                            c = window.getComputedStyle(f),
                            p = parseInt(c.borderTopWidth, 10),
                            v = parseInt(c.paddingTop, 10),
                            h = parseInt(c.borderBottomWidth, 10),
                            m = p + v + d + parseInt(c.paddingBottom, 10) + h,
                            w = Math.min(5 * b.offsetHeight, m),
                            C = window.getComputedStyle(x),
                            S = parseInt(C.paddingTop, 10),
                            j = parseInt(C.paddingBottom, 10),
                            P = e.top + e.height / 2 - 10,
                            T = b.offsetHeight / 2,
                            R = p + v + (b.offsetTop + T);
                        if (R <= P) {
                            let e = l.length > 0 && b === l[l.length - 1].ref.current;
                            s.style.bottom = "0px";
                            let t = f.clientHeight - x.offsetTop - x.offsetHeight;
                            s.style.height = R + Math.max(u - P, T + (e ? j : 0) + t + h) + "px"
                        } else {
                            let e = l.length > 0 && b === l[0].ref.current;
                            s.style.top = "0px";
                            let t = Math.max(P, p + x.offsetTop + (e ? S : 0) + T);
                            s.style.height = t + (m - R) + "px", x.scrollTop = R - P + x.offsetTop
                        }
                        s.style.margin = "".concat(10, "px 0"), s.style.minHeight = w + "px", s.style.maxHeight = u + "px", null == r || r(), requestAnimationFrame(() => y.current = !0)
                    }
                }, [g, i.trigger, i.valueNode, s, f, x, b, E, i.dir, r]);
                (0, k.b)(() => S(), [S]);
                let [j, P] = l.useState();
                (0, k.b)(() => {
                    f && P(window.getComputedStyle(f).zIndex)
                }, [f]);
                let T = l.useCallback(e => {
                    e && !0 === w.current && (S(), null == C || C(), w.current = !1)
                }, [S, C]);
                return (0, h.jsx)(eg, {
                    scope: n,
                    contentWrapper: s,
                    shouldExpandOnScrollRef: y,
                    onScrollButtonChange: T,
                    children: (0, h.jsx)("div", {
                        ref: c,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: j
                        },
                        children: (0, h.jsx)(p.WV.div, { ...o,
                            ref: m,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...o.style
                            }
                        })
                    })
                })
            });
            eh.displayName = "SelectItemAlignedPosition";
            var em = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    align: r = "start",
                    collisionPadding: o = 10,
                    ...l
                } = e, i = $(n);
                return (0, h.jsx)(N.VY, { ...i,
                    ...l,
                    ref: t,
                    align: r,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...l.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            em.displayName = "SelectPopperPosition";
            var [eg, ey] = G(ed, {}), ew = "SelectViewport", ex = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    nonce: r,
                    ...o
                } = e, i = ep(ew, n), a = ey(ew, n), s = (0, d.e)(t, i.onViewportChange), c = l.useRef(0);
                return (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: r
                    }), (0, h.jsx)(X.Slot, {
                        scope: n,
                        children: (0, h.jsx)(p.WV.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: s,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: (0, u.M)(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: n,
                                        shouldExpandOnScrollRef: r
                                    } = a;
                                if ((null == r ? void 0 : r.current) && n) {
                                    let e = Math.abs(c.current - t.scrollTop);
                                    if (e > 0) {
                                        let r = window.innerHeight - 20,
                                            o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                                        if (o < r) {
                                            let l = o + e,
                                                i = Math.min(r, l),
                                                a = l - i;
                                            n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                c.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            ex.displayName = ew;
            var eb = "SelectGroup",
                [eE, eC] = G(eb),
                eS = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e, o = (0, L.M)();
                    return (0, h.jsx)(eE, {
                        scope: n,
                        id: o,
                        children: (0, h.jsx)(p.WV.div, {
                            role: "group",
                            "aria-labelledby": o,
                            ...r,
                            ref: t
                        })
                    })
                });
            eS.displayName = eb;
            var ej = "SelectLabel",
                eP = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e, o = eC(ej, n);
                    return (0, h.jsx)(p.WV.div, {
                        id: o.id,
                        ...r,
                        ref: t
                    })
                });
            eP.displayName = ej;
            var eT = "SelectItem",
                [eR, eM] = G(eT),
                eD = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: r,
                        disabled: o = !1,
                        textValue: i,
                        ...a
                    } = e, s = ee(eT, n), c = ep(eT, n), f = s.value === r, [v, m] = l.useState(null != i ? i : ""), [g, y] = l.useState(!1), w = (0, d.e)(t, e => {
                        var t;
                        return null === (t = c.itemRefCallback) || void 0 === t ? void 0 : t.call(c, e, r, o)
                    }), x = (0, L.M)(), b = l.useRef("touch"), E = () => {
                        o || (s.onValueChange(r), s.onOpenChange(!1))
                    };
                    if ("" === r) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, h.jsx)(eR, {
                        scope: n,
                        value: r,
                        disabled: o,
                        textId: x,
                        isSelected: f,
                        onItemTextChange: l.useCallback(e => {
                            m(t => {
                                var n;
                                return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            })
                        }, []),
                        children: (0, h.jsx)(X.ItemSlot, {
                            scope: n,
                            value: r,
                            disabled: o,
                            textValue: v,
                            children: (0, h.jsx)(p.WV.div, {
                                role: "option",
                                "aria-labelledby": x,
                                "data-highlighted": g ? "" : void 0,
                                "aria-selected": f && g,
                                "data-state": f ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...a,
                                ref: w,
                                onFocus: (0, u.M)(a.onFocus, () => y(!0)),
                                onBlur: (0, u.M)(a.onBlur, () => y(!1)),
                                onClick: (0, u.M)(a.onClick, () => {
                                    "mouse" !== b.current && E()
                                }),
                                onPointerUp: (0, u.M)(a.onPointerUp, () => {
                                    "mouse" === b.current && E()
                                }),
                                onPointerDown: (0, u.M)(a.onPointerDown, e => {
                                    b.current = e.pointerType
                                }),
                                onPointerMove: (0, u.M)(a.onPointerMove, e => {
                                    if (b.current = e.pointerType, o) {
                                        var t;
                                        null === (t = c.onItemLeave) || void 0 === t || t.call(c)
                                    } else "mouse" === b.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: (0, u.M)(a.onPointerLeave, e => {
                                    if (e.currentTarget === document.activeElement) {
                                        var t;
                                        null === (t = c.onItemLeave) || void 0 === t || t.call(c)
                                    }
                                }),
                                onKeyDown: (0, u.M)(a.onKeyDown, e => {
                                    var t;
                                    (null === (t = c.searchRef) || void 0 === t ? void 0 : t.current) !== "" && " " === e.key || (U.includes(e.key) && E(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            eD.displayName = eT;
            var eL = "SelectItemText",
                eN = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: o,
                        ...a
                    } = e, u = ee(eL, n), s = ep(eL, n), c = eM(eL, n), f = en(eL, n), [v, m] = l.useState(null), g = (0, d.e)(t, e => m(e), c.onItemTextChange, e => {
                        var t;
                        return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, c.value, c.disabled)
                    }), y = null == v ? void 0 : v.textContent, w = l.useMemo(() => (0, h.jsx)("option", {
                        value: c.value,
                        disabled: c.disabled,
                        children: y
                    }, c.value), [c.disabled, c.value, y]), {
                        onNativeOptionAdd: x,
                        onNativeOptionRemove: b
                    } = f;
                    return (0, k.b)(() => (x(w), () => b(w)), [x, b, w]), (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(p.WV.span, {
                            id: c.textId,
                            ...a,
                            ref: g
                        }), c.isSelected && u.valueNode && !u.valueNodeHasChildren ? i.createPortal(a.children, u.valueNode) : null]
                    })
                });
            eN.displayName = eL;
            var ek = "SelectItemIndicator",
                eW = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e;
                    return eM(ek, n).isSelected ? (0, h.jsx)(p.WV.span, {
                        "aria-hidden": !0,
                        ...r,
                        ref: t
                    }) : null
                });
            eW.displayName = ek;
            var eI = "SelectScrollUpButton",
                eA = l.forwardRef((e, t) => {
                    let n = ep(eI, e.__scopeSelect),
                        r = ey(eI, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, d.e)(t, r.onScrollButtonChange);
                    return (0, k.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = function() {
                                    i(t.scrollTop > 0)
                                },
                                t = n.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), o ? (0, h.jsx)(eF, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            eA.displayName = eI;
            var eV = "SelectScrollDownButton",
                eO = l.forwardRef((e, t) => {
                    let n = ep(eV, e.__scopeSelect),
                        r = ey(eV, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, d.e)(t, r.onScrollButtonChange);
                    return (0, k.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    i(Math.ceil(t.scrollTop) < e)
                                },
                                t = n.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), o ? (0, h.jsx)(eF, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            eO.displayName = eV;
            var eF = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: r,
                        ...o
                    } = e, i = ep("SelectScrollButton", n), a = l.useRef(null), s = Z(n), d = l.useCallback(() => {
                        null !== a.current && (window.clearInterval(a.current), a.current = null)
                    }, []);
                    return l.useEffect(() => () => d(), [d]), (0, k.b)(() => {
                        var e;
                        let t = s().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [s]), (0, h.jsx)(p.WV.div, {
                        "aria-hidden": !0,
                        ...o,
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...o.style
                        },
                        onPointerDown: (0, u.M)(o.onPointerDown, () => {
                            null === a.current && (a.current = window.setInterval(r, 50))
                        }),
                        onPointerMove: (0, u.M)(o.onPointerMove, () => {
                            var e;
                            null === (e = i.onItemLeave) || void 0 === e || e.call(i), null === a.current && (a.current = window.setInterval(r, 50))
                        }),
                        onPointerLeave: (0, u.M)(o.onPointerLeave, () => {
                            d()
                        })
                    })
                }),
                e_ = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e;
                    return (0, h.jsx)(p.WV.div, {
                        "aria-hidden": !0,
                        ...r,
                        ref: t
                    })
                });
            e_.displayName = "SelectSeparator";
            var eH = "SelectArrow";

            function eB(e) {
                return "" === e || void 0 === e
            }
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    ...r
                } = e, o = $(n), l = ee(eH, n), i = ep(eH, n);
                return l.open && "popper" === i.position ? (0, h.jsx)(N.Eh, { ...o,
                    ...r,
                    ref: t
                }) : null
            }).displayName = eH;
            var eK = l.forwardRef((e, t) => {
                let {
                    value: n,
                    ...r
                } = e, o = l.useRef(null), i = (0, d.e)(t, o), a = (0, _.D)(n);
                return l.useEffect(() => {
                    let e = o.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (a !== n && t) {
                        let r = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, n), e.dispatchEvent(r)
                    }
                }, [a, n]), (0, h.jsx)(H.T, {
                    asChild: !0,
                    children: (0, h.jsx)("select", { ...r,
                        ref: i,
                        defaultValue: n
                    })
                })
            });

            function ez(e) {
                let t = (0, v.W)(e),
                    n = l.useRef(""),
                    r = l.useRef(0),
                    o = l.useCallback(e => {
                        let o = n.current + e;
                        t(o),
                            function e(t) {
                                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    i = l.useCallback(() => {
                        n.current = "", window.clearTimeout(r.current)
                    }, []);
                return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
            }

            function eU(e, t, n) {
                var r;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    l = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                1 === o.length && (l = l.filter(e => e !== n));
                let i = l.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return i !== n ? i : void 0
            }
            eK.displayName = "BubbleSelect";
            var eY = er,
                eX = el,
                eZ = ea,
                eq = eu,
                eG = es,
                eJ = ec,
                e$ = ex,
                eQ = eS,
                e0 = eP,
                e1 = eD,
                e2 = eN,
                e5 = eW,
                e8 = eA,
                e9 = eO,
                e7 = e_
        },
        95098: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return i
                },
                f: function() {
                    return a
                }
            });
            var r = n(2265),
                o = n(82912),
                l = n(57437),
                i = r.forwardRef((e, t) => (0, l.jsx)(o.WV.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            i.displayName = "VisuallyHidden";
            var a = i
        }
    }
]);